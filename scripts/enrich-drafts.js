#!/usr/bin/env node

import { readdir, readFile, writeFile } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');

const RADAR_DIR   = join(ROOT, 'src', 'content', 'radar');
const ALERTAS_DIR = join(ROOT, 'src', 'content', 'alertas');

const API_KEY = process.env.GEMINI_API_KEY;
const MODEL   = 'gemini-2.5-flash';

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

const RATE_LIMIT_DELAY_MS = 15000; // 15s entre llamadas → 4 req/min (límite: 5 RPM free tier)
const MAX_RETRIES = 3;

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

async function callLLM(prompt) {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent?key=${API_KEY}`;

  for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: { maxOutputTokens: 300, temperature: 0.3 },
      }),
    });

    if (res.ok) {
      const data = await res.json();
      const raw = data.candidates[0].content.parts[0].text;
      // Normalizar: quitar comillas externas que algunos modelos añaden,
      // colapsar saltos de línea (rompen YAML en una sola línea)
      return raw
        .trim()
        .replace(/^["']|["']$/g, '')   // quitar comillas externas
        .replace(/\n+/g, ' ')          // colapsar newlines → espacio
        .trim();
    }

    const body = await res.text();

    // Extraer retryDelay del cuerpo si viene (429/503)
    if (res.status === 429 || res.status === 503) {
      const match = body.match(/"retryDelay":\s*"(\d+)s"/);
      const wait = match ? (parseInt(match[1]) + 2) * 1000 : 60000;
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
  const context = getField(content, 'context');
  const body    = getBody(content).slice(0, 600);

  const prompt = `Eres asistente editorial de Perímetro, plataforma de inteligencia sobre ciberseguridad e IA para empresas mexicanas.

Reescribe el campo "context" de este ítem de radar. No resumas la noticia — el lector ya la ve en el título y la fuente.

Responde una sola pregunta: ¿qué cambia en cómo esta empresa gestiona su tecnología o toma decisiones?

Reglas:
- 2 a 3 oraciones
- No inventes datos ni información nueva
- Sin clickbait ni exageración
- Tono directo y profesional, como un colega que encontró algo relevante
- En español
- Enfocado en implicación operativa o de gobernanza para empresas mexicanas medianas
- Si aplica, cerrar con la pregunta concreta que el responsable debería hacerle a su equipo de TI

Título: ${title}
Contexto actual: ${context}
Contenido: ${body}

Responde ÚNICAMENTE con el nuevo texto del contexto, sin comillas ni explicaciones adicionales.`;

  const improved = await callLLM(prompt);
  return markReview(setField(content, 'context', improved));
}

async function enrichAlertaFile(content) {
  const title   = getField(content, 'title');
  const resumen = getField(content, 'resumen');
  const body    = getBody(content).slice(0, 600);

  const prompt = `Eres asistente editorial de Perímetro, plataforma de inteligencia sobre ciberseguridad e IA para empresas mexicanas.

Reescribe el campo "resumen" de esta alerta explicando qué pierde o qué arriesga la empresa si esto la afecta. No describas el mecanismo técnico del ataque.

Considera estas dimensiones cuando apliquen:
- Continuidad operativa: ¿qué proceso del negocio se interrumpe o queda comprometido?
- Exposición financiera: ¿puede derivar en fraude, pérdida directa o costo de respuesta?
- Responsabilidad regulatoria o contractual: ¿activa obligaciones legales o viola acuerdos con clientes o proveedores?

Reglas:
- 2 a 3 oraciones
- No inventes datos ni información nueva
- Sin clickbait ni exageración
- Tono profesional y sobrio
- En español; si el contenido está en inglés, traducir
- Lenguaje de negocio, no técnico

Título: ${title}
Resumen actual: ${resumen}
Contenido: ${body}

Responde ÚNICAMENTE con el nuevo texto del resumen, sin comillas ni explicaciones adicionales.`;

  const improved = await callLLM(prompt);
  return markReview(setField(content, 'resumen', improved));
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
