#!/usr/bin/env node

import { readdir, readFile, writeFile } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');

const RADAR_DIR   = join(ROOT, 'src', 'content', 'radar');
const ALERTAS_DIR = join(ROOT, 'src', 'content', 'alertas');

// Anthropic API (migrado desde Gemini)
const API_KEY = process.env.ANTHROPIC_API_KEY;
const MODEL   = process.env.ANTHROPIC_MODEL || 'claude-haiku-4-5-20251001';

// --- Parsers ---

function getField(content, field) {
  const m = content.match(new RegExp(`^${field}:\\s*"((?:[^"\\\\]|\\\\.)*)"`, 'm'));
  return m ? m[1].replace(/\\"/g, '"') : '';
}

function setField(content, field, value) {
  const escaped = value.replace(/"/g, '\\"');
  return content.replace(
    new RegExp(`^${field}:.*$`, 'm'),
    `${field}: "${escaped}"`
  );
}

function isDraft(content) {
  return /publicacion:\s*["']draft["']/.test(content);
}

function markReview(content) {
  return content
    .replace(/publicacion:\s*"draft"/, 'publicacion: "review"')
    .replace(/publicacion:\s*'draft'/, 'publicacion: "review"');
}

function getBody(content) {
  const end = content.indexOf('\n---\n', 4);
  return end !== -1 ? content.slice(end + 5).trim() : '';
}

// --- LLM (Google Gemini) ---

// gemini-2.5-flash: 10 RPM → 6s mínimo. gemini-2.0-flash: 15 RPM → 4s mínimo.
// Usamos 5s como margen conservador para ambos modelos.
const RATE_LIMIT_DELAY_MS = 5000;
const MAX_RETRIES = 3;

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

async function callLLM(prompt) {
  const url = 'https://api.anthropic.com/v1/messages';

  for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'x-api-key': API_KEY,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: MODEL,
        max_tokens: 400,
        temperature: 0.3,
        messages: [{ role: 'user', content: prompt }],
      }),
    });

    if (res.ok) {
      const data = await res.json();
      return data.content[0].text.trim();
    }

    const body = await res.text();

    if (res.status === 429 || res.status === 503 || res.status === 529) {
      const wait = 60000;
      if (attempt < MAX_RETRIES) {
        process.stderr.write(`  ~ reintento ${attempt}/${MAX_RETRIES} en ${Math.round(wait/1000)}s (${res.status})\n`);
        await sleep(wait);
        continue;
      }
    }

    throw new Error(`API ${res.status}: ${body}`);
  }
}

// --- Enrichers ---

async function enrichRadarFile(content) {
  const title   = getField(content, 'title');
  const body    = getBody(content).slice(0, 800);

  const prompt = `Eres editor de inteligencia anticipatoria en Perímetro, plataforma de ciberseguridad e IA para empresas mexicanas.

AUDIENCIA: Director general, director financiero, director de operaciones, dueño de MiPyME. No CISOs ni especialistas técnicos. El lector entiende negocios, no ciberseguridad.

TEST DE JUNTA DIRECTIVA: Los cuatro campos que vas a generar (señal, supuesto, observación, context) deben poder leerse juntos y ser completamente comprensibles para un director general sin formación técnica. Si necesita conocer términos de seguridad o IA para entenderlos, están demasiado técnicos.

PROPÓSITO: Un ítem de RADAR no es una noticia. Es una señal de cambio estructural que indica qué supuesto está dejando de ser válido y qué debería empezar a observarse. La señal debe sobrevivir 30 días — si la noticia desaparece mañana, la señal sigue siendo relevante.

REGLA DE TÍTULO: Si el título menciona una tecnología específica pero el cambio estructural puede explicarse sin ella, el título debe centrarse en el cambio. "Las empresas empiezan a delegar tareas de seguridad a sistemas de IA que aún no pueden auditar" es mejor que "Anthropic expande Mythos a 150 organizaciones".

REGLA DE LENGUAJE — RADAR opera un nivel arriba del incidente:
- Casi nunca usar términos técnicos. Si es inevitable, usar el equivalente en lenguaje de negocio.
- "manipulación de instrucciones" en lugar de "prompt injection"
- "mecanismos para eludir restricciones" en lugar de "jailbreak"
- "qué pueden hacer exactamente, a qué sistemas tienen acceso" en lugar de "qué permisos tienen"
- "decisión de gestión pendiente" en lugar de "problema de gobernanza"
- "el sistema tomó decisiones inesperadas" en lugar de "comportamiento emergente"
- El supuesto debe ser inmediato y claro, como: "El software hace lo que le pedimos — nada más, nada inesperado."

ESTRUCTURA DE CIERRE: El campo "observación" y el cierre de "context" deben ser observaciones estratégicas, nunca instrucciones operativas. Verbos de RADAR: observe, monitoree, evalúe, cuestione, considere. Nunca: actualice, parchee, configure, implemente.

Responde con un JSON con exactamente estos campos:

{
  "señal": "El cambio estructural en una frase. Qué está cambiando en el fondo, no qué hizo la empresa o el producto.",
  "supuesto": "La creencia que este cambio hace cuestionable. Una frase directa, sin jerga. Ejemplo del tono correcto: 'El software hace lo que le pedimos — nada más, nada inesperado.'",
  "observación": "Qué debería empezar a vigilar una organización. Una frase. No una instrucción operativa — una pregunta o indicador a seguir.",
  "context": "2-3 oraciones que desarrollen señal + supuesto + observación. Tono staccato. Ángulo de riesgo para la organización. Sin resumir la noticia. Sin jerga sin explicar. Cierra con observación o pregunta estratégica — nunca con instrucción de acción inmediata."
}

Reglas adicionales:
- Todo en español
- Sin clickbait ni exageración
- No inventar datos
- Responde SOLO el JSON, sin texto adicional

Título: ${title}
Contenido: ${body}`;

  const raw = await callLLM(prompt);

  try {
    const parsed = JSON.parse(raw.replace(/^```json\s*|```\s*$/g, '').trim());
    let updated = content;
    if (parsed.señal)      updated = setField(updated, 'señal',      parsed.señal);
    if (parsed.supuesto)   updated = setField(updated, 'supuesto',   parsed.supuesto);
    if (parsed.observación) updated = setField(updated, 'observación', parsed.observación);
    if (parsed.context)    updated = setField(updated, 'context',    parsed.context);
    return markReview(updated);
  } catch {
    // Si no parsea como JSON, intenta usar como context directo
    return markReview(setField(content, 'context', raw));
  }
}

async function enrichAlertaFile(content) {
  const title   = getField(content, 'title');
  const body    = getBody(content).slice(0, 800);

  const prompt = `Eres editor de inteligencia operativa en Perímetro, plataforma de ciberseguridad e IA para empresas mexicanas.

AUDIENCIA: Director general, dueño de MiPyME, gerente administrativo. No especialistas técnicos. El lector entiende negocios, riesgo y dinero — no protocolos ni vulnerabilidades.

PROPÓSITO DE UNA ALERTA: Responder exactamente esta pregunta — ¿qué necesita verificar hoy una persona u organización debido a este evento? No "¿qué pasó?" ni "¿qué riesgo existe?" — sino qué acción de verificación concreta existe hoy.

TEST DEL ADMINISTRADOR OCUPADO: El resumen debe permitir que alguien con dos minutos entienda qué pasó, si le afecta, y qué debe verificar — sin conocer ningún término técnico.

REGLA DE TÍTULOS: El titular nombra el mecanismo o patrón del ataque — no las marcas involucradas. "Correos con falsas amenazas legales buscan tomar control de cuentas de Google" es mejor que "Campaña de phishing usa avisos falsos de copyright para robo de credenciales". Las marcas pueden aparecer en el cuerpo, no deben dominar el titular.

SUSTITUCIONES OBLIGATORIAS — nunca usar la columna izquierda, siempre la derecha:
- malware / ransomware → programa malicioso / secuestro de información
- phishing → engaño por correo o mensaje falso
- credenciales → usuario y contraseña / datos de acceso
- endpoint → equipo de trabajo
- acceso remoto → control del equipo desde otra ubicación
- autenticación / MFA → verificación de identidad / doble verificación al iniciar sesión
- propiedades digitales → sitios web, canales, aplicaciones y cuentas publicitarias
- dominio oficial → la dirección web oficial del servicio
- Google Workspace → el correo corporativo y los documentos de Google
- MDM → sistema de gestión de dispositivos móviles
- CVE, RCE, NTLM, EDR, JWT, RAT, APT, SSO, IOC, OAuth → eliminar o reemplazar con descripción del impacto

NUNCA ASUMIR que el lector conoce: CVE, RCE, NTLM, EDR, token, API, SDK, JWT, RAT, APT, SSO, IOC, OAuth, XSS, SQLi, IDOR, SSRF, CSRF.

COMPORTAMIENTO VS TECNOLOGÍA: En lugar de explicar cómo funciona el ataque técnicamente, describir el comportamiento que el lector debe reconocer. "La urgencia es parte del engaño. Cuando un correo exige actuar de inmediato para evitar una sanción, conviene detenerse" es mejor que "La señal universal: ningún proceso legítimo exige verificar identidad fuera del dominio oficial".

Responde con un JSON con exactamente estos campos:

{
  "resumen": "2-3 oraciones. Qué ocurre + quién está expuesto + qué verificar. Lenguaje cotidiano. Sin jerga. Máximo 220 caracteres.",
  "expuestos": "Quién está expuesto — específico y concreto. No 'usuarios de Android' sino 'personas con teléfonos Android que no han instalado la actualización de junio 2026'. Una frase.",
  "verificacion": "Qué debe verificarse hoy — acción concreta que cualquiera puede hacer. No 'revisar CVE' sino 'confirmar que los teléfonos del equipo tienen instalada la actualización de seguridad de junio'. Una frase.",
  "impacto": "Qué podría ocurrir si aplica y no se verifica — consecuencia de negocio, no técnica. No 'RCE' sino 'un atacante podría tomar control del equipo o acceder a información de la organización'. Una frase."
}

Reglas adicionales:
- Todo en español
- Sin clickbait ni sensacionalismo
- No inventar datos
- Responde SOLO el JSON, sin texto adicional

Título: ${title}
Contenido: ${body}`;

  const raw = await callLLM(prompt);

  try {
    const parsed = JSON.parse(raw.replace(/^```json\s*|```\s*$/g, '').trim());
    let updated = content;
    if (parsed.resumen)      updated = setField(updated, 'resumen',      parsed.resumen);
    if (parsed.expuestos)    updated = setField(updated, 'expuestos',    parsed.expuestos);
    if (parsed.verificacion) updated = setField(updated, 'verificacion', parsed.verificacion);
    if (parsed.impacto)      updated = setField(updated, 'impacto',      parsed.impacto);
    return markReview(updated);
  } catch {
    return markReview(setField(content, 'resumen', raw));
  }
}

// --- Runner ---

async function processDir(dir, enrichFn, label) {
  const files = (await readdir(dir)).filter(f => f.endsWith('.md'));
  let enriched = 0, skipped = 0;

  for (const file of files) {
    const path = join(dir, file);
    const content = await readFile(path, 'utf8');
    if (!isDraft(content)) { skipped++; continue; }

    try {
      const updated = await enrichFn(content);
      await writeFile(path, updated, 'utf8');
      enriched++;
      process.stdout.write(`  ✓ [${label}] ${file}\n`);
    } catch (err) {
      process.stderr.write(`  ! [${label}] ${file}: ${err.message.slice(0, 80)}\n`);
      skipped++;
    }

    // Delay entre llamadas para respetar el límite de 5 RPM del free tier
    await sleep(RATE_LIMIT_DELAY_MS);
  }

  return { enriched, skipped };
}

async function main() {
  if (!API_KEY) {
    console.error('\nError: ANTHROPIC_API_KEY no configurada.');
    console.error('Uso: ANTHROPIC_API_KEY=... node scripts/enrich-drafts.js\n');
    process.exit(1);
  }

  console.log('\nEnriquecimiento editorial — Perímetro\n');

  const radar   = await processDir(RADAR_DIR,   enrichRadarFile,   'radar');
  const alertas = await processDir(ALERTAS_DIR, enrichAlertaFile,  'alerta');

  const total = radar.enriched + alertas.enriched;
  console.log(`\n${total} archivos enriquecidos`);
  console.log(`  radar:   ${radar.enriched} enriquecidos, ${radar.skipped} omitidos`);
  console.log(`  alertas: ${alertas.enriched} enriquecidas, ${alertas.skipped} omitidas\n`);
}

main().catch(err => { console.error(err.message); process.exit(1); });
