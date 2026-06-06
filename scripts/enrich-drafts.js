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
  return /publicacion:\s*["'](draft|normalized)["']/.test(content);
}

function markReview(content) {
  return content
    .replace(/publicacion:\s*"normalized"/, 'publicacion: "review"')
    .replace(/publicacion:\s*'normalized'/, 'publicacion: "review"')
    .replace(/publicacion:\s*"draft"/, 'publicacion: "review"')
    .replace(/publicacion:\s*'draft'/, 'publicacion: "review"');
}

function getBody(content) {
  const end = content.indexOf('\n---\n', 4);
  return end !== -1 ? content.slice(end + 5).trim() : '';
}

function setBody(content, newBody) {
  const end = content.indexOf('\n---\n', 4);
  if (end === -1) return content + '\n\n' + newBody + '\n';
  return content.slice(0, end + 5) + newBody + '\n';
}

// --- LLM ---

const RATE_LIMIT_DELAY_MS = 5000;
const MAX_RETRIES = 3;

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

async function callLLM(prompt, maxTokens = 400) {
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
        max_tokens: maxTokens,
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
  const source  = getBody(content).slice(0, 1200);

  const grcCambio    = getField(content, 'grc_cambio');
  const grcParadigma = getField(content, 'grc_paradigma');
  const grcHorizonte = getField(content, 'grc_horizonte');
  const grcConfianza = getField(content, 'grc_confianza');

  const grcSection = grcCambio
    ? `\nFICHA GRC (extracción estructurada previa — úsala como base, no la inventes):
- Cambio estructural: ${grcCambio}
- Paradigma afectado: ${grcParadigma}
- Horizonte: ${grcHorizonte}
- Confianza en la fuente: ${grcConfianza}\n`
    : '';

  const prompt = `Eres editor de inteligencia anticipatoria en Perímetro, plataforma de ciberseguridad e IA para empresas mexicanas.

AUDIENCIA: Director general, director financiero, director de operaciones, dueño de MiPyME. No CISOs ni especialistas técnicos. El lector entiende negocios, no ciberseguridad.

TEST DE JUNTA DIRECTIVA: Los campos señal, supuesto, observación y context deben poder leerse juntos y ser completamente comprensibles para un director general sin formación técnica. Si necesita conocer términos de seguridad o IA para entenderlos, están demasiado técnicos.

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

CIERRE: observación y cuerpo cierran con observación estratégica — nunca con instrucción operativa. Verbos de RADAR: observe, monitoree, evalúe, cuestione, considere. Nunca: actualice, parchee, configure, implemente.

ESTRUCTURA DEL CUERPO — tres secciones exactas, en este orden:
## La señal
Una o dos oraciones. El hecho desnudo. Qué está cambiando estructuralmente.

## El supuesto que se rompe
Qué creíamos que era cierto y ya no lo es. Sin jerga. Un director general debe entenderlo sin contexto adicional.

## Qué observar
No qué hacer. Qué vigilar, qué pregunta hacerse, qué indicador monitorear. Cierra con observación — nunca con instrucción de acción inmediata.

Responde con un JSON con exactamente estos campos:

{
  "señal": "El cambio estructural en una frase. Qué está cambiando en el fondo, no qué hizo la empresa.",
  "supuesto": "La creencia que este cambio hace cuestionable. Una frase directa, sin jerga. Ejemplo: 'El software hace lo que le pedimos — nada más, nada inesperado.'",
  "observación": "Qué debería empezar a vigilar una organización. Una frase. No instrucción operativa.",
  "context": "2-3 oraciones. Desarrolla señal + supuesto + observación. Tono staccato. Sin jerga. Cierra con observación o pregunta estratégica, nunca con instrucción.",
  "cuerpo": "El cuerpo completo del artículo con las tres secciones (## La señal, ## El supuesto que se rompe, ## Qué observar). Usa \\n para saltos de línea. Sin instrucciones operativas en el cierre."
}

Reglas adicionales:
- Todo en español
- Sin clickbait ni exageración
- No inventar datos
- Responde SOLO el JSON, sin texto adicional

Título: ${title}
${grcSection}Contenido fuente: ${source}`;

  const raw = await callLLM(prompt, 1000);

  try {
    const parsed = JSON.parse(raw.replace(/^```json\s*|```\s*$/g, '').trim());
    let updated = content;
    if (parsed.señal)       updated = setField(updated, 'señal',       parsed.señal);
    if (parsed.supuesto)    updated = setField(updated, 'supuesto',    parsed.supuesto);
    if (parsed.observación) updated = setField(updated, 'observación', parsed.observación);
    if (parsed.context)     updated = setField(updated, 'context',     parsed.context);
    if (parsed.cuerpo)      updated = setBody(updated, parsed.cuerpo.replace(/\\n/g, '\n'));
    return markReview(updated);
  } catch {
    return markReview(setField(content, 'context', raw));
  }
}

async function enrichAlertaFile(content) {
  const title   = getField(content, 'title');
  const source  = getBody(content).slice(0, 1200);

  const grcActivo     = getField(content, 'grc_activo');
  const grcVector     = getField(content, 'grc_vector');
  const grcCondicion  = getField(content, 'grc_condicion');
  const grcExplot     = getField(content, 'grc_explotacion');
  const grcAlcance    = getField(content, 'grc_alcance');
  const grcConfianza  = getField(content, 'grc_confianza');

  const grcSection = grcActivo
    ? `\nFICHA GRC (extracción estructurada previa — úsala como base, no la inventes):
- Activo en riesgo: ${grcActivo}
- Vector: ${grcVector}
- Condición: ${grcCondicion}
- Explotación: ${grcExplot}
- Alcance técnico: ${grcAlcance}
- Confianza en la fuente: ${grcConfianza}\n`
    : '';

  const prompt = `Eres editor de inteligencia operativa en Perímetro, plataforma de ciberseguridad e IA para empresas mexicanas.

AUDIENCIA: Director general, dueño de MiPyME, gerente administrativo. No especialistas técnicos. El lector entiende negocios, riesgo y dinero — no protocolos ni vulnerabilidades.

PROPÓSITO: Responder exactamente esta pregunta — ¿qué necesita verificar hoy una persona u organización debido a este evento? No "¿qué pasó?" ni "¿qué riesgo existe?" — sino qué acción de verificación concreta existe hoy.

TEST DEL ADMINISTRADOR OCUPADO: Con dos minutos de lectura, el lector debe entender qué pasó, si le afecta, y qué debe verificar — sin conocer ningún término técnico.

REGLA DE TÍTULOS: El titular nombra el mecanismo o patrón — no las marcas. "Correos con falsas amenazas legales buscan tomar control de cuentas de Google" es mejor que "Campaña de phishing usa avisos falsos de copyright para robo de credenciales".

SUSTITUCIONES OBLIGATORIAS:
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
- CVE, RCE, NTLM, EDR, JWT, RAT, APT, SSO, IOC, OAuth → eliminar o reemplazar por descripción del impacto

NUNCA asumir que el lector conoce: CVE, RCE, NTLM, EDR, token, API, SDK, JWT, RAT, APT, SSO, IOC, OAuth, XSS, SQLi.

COMPORTAMIENTO VS TECNOLOGÍA: Describir el comportamiento que el lector debe reconocer, no cómo funciona el ataque. "La urgencia es parte del engaño. Cuando un correo exige actuar de inmediato, conviene detenerse" es mejor que "La señal universal: ningún proceso legítimo exige verificar identidad fuera del dominio oficial".

ESTRUCTURA DEL CUERPO — cuatro secciones exactas, en este orden:
## Qué ocurrió
1 párrafo. Solo hechos. Sin análisis ni especulación.

## Quién está expuesto
Personas y organizaciones por separado con ### Para personas y ### Para organizaciones. Específico — no "todos". Lenguaje de negocio.

## Qué verificar
Acciones concretas que cualquiera puede hacer hoy. No un manual técnico. Puede ser lista con guiones.

## Impacto potencial
Qué podría ocurrir si aplica y no se verifica. Consecuencia de negocio. Puede incluir una observación de cierre que conecte con comportamiento humano, no con tecnología.

Responde con un JSON con exactamente estos campos:

{
  "resumen": "2-3 oraciones. Qué ocurre + quién está expuesto + qué verificar. Sin jerga. Máximo 220 caracteres.",
  "expuestos": "Quién está expuesto — específico. No 'usuarios de Android' sino 'personas con teléfonos Android sin la actualización de junio'. Una frase.",
  "verificacion": "Qué verificar hoy — acción concreta. No 'revisar CVE' sino 'confirmar que los teléfonos tienen instalada la actualización de seguridad de junio'. Una frase.",
  "impacto": "Consecuencia de negocio si aplica y no se verifica. No jerga técnica. Una frase.",
  "cuerpo": "El cuerpo completo con las cuatro secciones (## Qué ocurrió, ## Quién está expuesto, ## Qué verificar, ## Impacto potencial). Usa \\n para saltos de línea. Lenguaje ciudadano en todo el cuerpo."
}

Reglas adicionales:
- Todo en español
- Sin clickbait ni sensacionalismo
- No inventar datos
- Responde SOLO el JSON, sin texto adicional

Título: ${title}
${grcSection}Contenido fuente: ${source}`;

  const raw = await callLLM(prompt, 1400);

  try {
    const parsed = JSON.parse(raw.replace(/^```json\s*|```\s*$/g, '').trim());
    let updated = content;
    if (parsed.resumen)      updated = setField(updated, 'resumen',      parsed.resumen);
    if (parsed.expuestos)    updated = setField(updated, 'expuestos',    parsed.expuestos);
    if (parsed.verificacion) updated = setField(updated, 'verificacion', parsed.verificacion);
    if (parsed.impacto)      updated = setField(updated, 'impacto',      parsed.impacto);
    if (parsed.cuerpo)       updated = setBody(updated, parsed.cuerpo.replace(/\\n/g, '\n'));
    return markReview(updated);
  } catch {
    return markReview(setField(content, 'resumen', raw));
  }
}

// --- Runner ---

async function processDir(dir, enrichFn, label, onlyFiles = null) {
  const all = (await readdir(dir)).filter(f => f.endsWith('.md'));
  const files = onlyFiles ? all.filter(f => onlyFiles.includes(f)) : all;
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
    console.error('Uso: ANTHROPIC_API_KEY=... node scripts/enrich-drafts.js [archivo.md ...]\n');
    process.exit(1);
  }

  // Si se pasan argumentos, solo procesar esos archivos (por nombre de archivo, sin ruta)
  const argFiles = process.argv.slice(2).map(f => f.split('/').pop());
  const onlyFiles = argFiles.length ? argFiles : null;

  if (onlyFiles) {
    console.log(`\nEnriquecimiento editorial — Perímetro (${onlyFiles.length} archivos)\n`);
  } else {
    console.log('\nEnriquecimiento editorial — Perímetro\n');
  }

  const radar   = await processDir(RADAR_DIR,   enrichRadarFile,   'radar',   onlyFiles);
  const alertas = await processDir(ALERTAS_DIR, enrichAlertaFile,  'alerta',  onlyFiles);

  const total = radar.enriched + alertas.enriched;
  console.log(`\n${total} archivos enriquecidos`);
  console.log(`  radar:   ${radar.enriched} enriquecidos, ${radar.skipped} omitidos`);
  console.log(`  alertas: ${alertas.enriched} enriquecidas, ${alertas.skipped} omitidas\n`);
}

main().catch(err => { console.error(err.message); process.exit(1); });
