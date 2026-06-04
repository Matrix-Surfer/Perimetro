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

  // Prompt para los 3 campos de control editorial + context
  const prompt = `Eres editor de inteligencia anticipatoria en Perímetro, plataforma de ciberseguridad e IA para empresas mexicanas.

Un ítem de RADAR no es una noticia. Es una señal de cambio estructural que indica qué supuesto está dejando de ser válido y qué debería empezar a observarse.

Dado este título y contenido, responde con un JSON con exactamente estos campos:

{
  "señal": "El cambio estructural en una frase. Qué está cambiando en el mundo, no qué hizo la empresa.",
  "supuesto": "El paradigma o creencia que este cambio hace cuestionable. Una frase.",
  "observación": "Qué debería empezar a vigilar una organización o persona. Una frase. No una instrucción operativa — algo que observar o cuestionar.",
  "context": "2 a 3 oraciones que desarrollen señal + supuesto + observación. Tono staccato. Sin resumir la noticia. Cierra con una pregunta sobre el supuesto, no con una instrucción de acción inmediata."
}

Reglas:
- En español
- Sin clickbait ni exageración
- No inventar datos
- "señal", "supuesto" y "observación": una frase cada uno, sin punto final
- "context": 2-3 oraciones, termina en pregunta o reflexión sobre el supuesto
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

Una ALERTA responde tres preguntas: ¿qué ocurre?, ¿quién está expuesto?, ¿qué debe verificarse?

Dado el título y contenido, responde con un JSON con exactamente estos campos:

{
  "resumen": "2-3 oraciones. Qué ocurre + quién está expuesto + qué verificar. Lenguaje de negocio, no técnico. Sin jerga sin explicar. En español.",
  "expuestos": "Quién está expuesto — específico. No 'usuarios de Android' sino 'personas con teléfonos Android sin la actualización de junio 2026'. Una frase.",
  "verificacion": "Qué debe verificarse hoy — concreto. No 'revisar CVE' sino 'confirmar que los dispositivos tienen instalada la actualización de seguridad más reciente'. Una frase.",
  "impacto": "Qué podría ocurrir si aplica y no se verifica — en lenguaje de impacto de negocio. No 'ejecución remota de código' sino 'un atacante podría tomar control del dispositivo o acceder a información almacenada'. Una frase."
}

Reglas:
- En español
- Sin clickbait
- No inventar datos
- Cada campo es UNA frase, directa y específica
- "resumen": máximo 220 caracteres
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
    console.error('\nError: GEMINI_API_KEY no configurada.');
    console.error('Uso: GEMINI_API_KEY=... node scripts/enrich-drafts.js\n');
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
