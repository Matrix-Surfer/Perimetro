#!/usr/bin/env node

import { readdir, readFile, writeFile } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');

const RADAR_DIR   = join(ROOT, 'src', 'content', 'radar');
const ALERTAS_DIR = join(ROOT, 'src', 'content', 'alertas');

const API_KEY = process.env.ANTHROPIC_API_KEY;
const MODEL   = 'claude-haiku-4-5-20251001';

// --- Parsers ---

function getField(content, field) {
  const m = content.match(new RegExp(`^${field}:\\s*"((?:[^"\\\\]|\\\\.)*)"`, 'm'));
  return m ? m[1].replace(/\\"/g, '"') : '';
}

function setField(content, field, value) {
  const escaped = value.replace(/"/g, '\\"');
  return content.replace(
    new RegExp(`^(${field}:\\s*)"(?:[^"\\\\]|\\\\.)*"`, 'm'),
    `$1"${escaped}"`
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

// --- LLM ---

async function callLLM(prompt) {
  const res = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'x-api-key': API_KEY,
      'anthropic-version': '2023-06-01',
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      model: MODEL,
      max_tokens: 300,
      messages: [{ role: 'user', content: prompt }],
    }),
  });
  if (!res.ok) throw new Error(`API ${res.status}: ${await res.text()}`);
  const data = await res.json();
  return data.content[0].text.trim();
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
      process.stderr.write(`  ! [${label}] ${file}: ${err.message}\n`);
      skipped++;
    }
  }

  return { enriched, skipped };
}

async function main() {
  if (!API_KEY) {
    console.error('\nError: ANTHROPIC_API_KEY no configurada.');
    console.error('Uso: ANTHROPIC_API_KEY=sk-... node scripts/enrich-drafts.js\n');
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
