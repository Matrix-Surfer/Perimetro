#!/usr/bin/env node

/**
 * normalize-risk.js — Fase 1 del enriquecimiento editorial
 *
 * Lee drafts con publicacion: "draft", llama al LLM con temperatura baja
 * para extraer una ficha GRC estructurada (sin narrativa), e inyecta los
 * campos grc_* en el frontmatter. Cambia el estado a "normalized".
 *
 * Para alertas, deriva nivelAtencion desde grc_explotacion:
 *   activa       → Alto   (mínimo; editor puede escalar a Crítico)
 *   poc_publica  → Medio
 *   investigacion → Bajo
 *
 * El enrich-drafts.js usa la ficha como base para la traducción editorial.
 */

import { readdir, readFile, writeFile } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');

const RADAR_DIR   = join(ROOT, 'src', 'content', 'radar');
const ALERTAS_DIR = join(ROOT, 'src', 'content', 'alertas');

const API_KEY = process.env.ANTHROPIC_API_KEY;
const MODEL   = process.env.ANTHROPIC_MODEL || 'claude-haiku-4-5-20251001';

// --- Helpers ---

function getField(content, field) {
  const m = content.match(new RegExp(`^${field}:\\s*"((?:[^"\\\\]|\\\\.)*)"`, 'm'));
  return m ? m[1].replace(/\\"/g, '"') : '';
}

function setField(content, field, value) {
  return content.replace(
    new RegExp(`^(${field}):.*$`, 'm'),
    `$1: "${value}"`
  );
}

function getBody(content) {
  const end = content.indexOf('\n---\n', 4);
  return end !== -1 ? content.slice(end + 5).trim() : '';
}

function isDraft(content) {
  return /publicacion:\s*["']draft["']/.test(content);
}

function esc(str) {
  return (str ?? '').replace(/"/g, '\\"');
}

// Regla de derivación: grc_explotacion → nivelAtencion (floor, no ceiling)
// El editor puede escalar manualmente si el alcance o el contexto lo justifica.
function deriveNivelAtencion(explotacion) {
  const map = {
    'activa':        'Alto',
    'poc_publica':   'Medio',
    'investigacion': 'Bajo',
  };
  return map[explotacion] ?? 'Medio';
}

function injectGRC(content, fields, type) {
  if (type === 'alerta') {
    const explotacion = fields.explotacion ?? 'investigacion';
    const block = [
      `grc_activo: "${esc(fields.activo ?? '')}"`,
      `grc_vector: "${esc(fields.vector ?? '')}"`,
      `grc_condicion: "${esc(fields.condicion ?? '')}"`,
      `grc_explotacion: "${esc(explotacion)}"`,
      `grc_alcance: "${esc(fields.alcance ?? '')}"`,
      `grc_confianza: "${esc(fields.confianza ?? 'media')}"`,
    ].join('\n');

    let updated = content
      .replace(/publicacion:\s*"draft"/, `${block}\npublicacion: "normalized"`)
      .replace(/publicacion:\s*'draft'/, `${block}\npublicacion: "normalized"`);

    // Derivar nivelAtencion desde grc_explotacion
    updated = setField(updated, 'nivelAtencion', deriveNivelAtencion(explotacion));

    return updated;
  }

  // Radar: solo campos GRC, sin derivación de nivelAtencion
  const block = [
    `grc_cambio: "${esc(fields.cambio ?? '')}"`,
    `grc_paradigma: "${esc(fields.paradigma ?? '')}"`,
    `grc_horizonte: "${esc(fields.horizonte ?? 'meses')}"`,
    `grc_confianza: "${esc(fields.confianza ?? 'media')}"`,
  ].join('\n');

  return content
    .replace(/publicacion:\s*"draft"/, `${block}\npublicacion: "normalized"`)
    .replace(/publicacion:\s*'draft'/, `${block}\npublicacion: "normalized"`);
}

// --- LLM ---

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
        max_tokens: 300,
        temperature: 0.1,
        messages: [{ role: 'user', content: prompt }],
      }),
    });

    if (res.ok) {
      const data = await res.json();
      return data.content[0].text.trim();
    }

    const body = await res.text();

    if (res.status === 429 || res.status === 503 || res.status === 529) {
      if (attempt < MAX_RETRIES) {
        process.stderr.write(`  ~ reintento ${attempt}/${MAX_RETRIES} en 60s (${res.status})\n`);
        await sleep(60000);
        continue;
      }
    }

    throw new Error(`API ${res.status}: ${body}`);
  }
}

// --- Normalizers ---

async function normalizeAlerta(content) {
  const title = getField(content, 'title');
  const body  = getBody(content).slice(0, 800);

  const prompt = `Eres analista de riesgo GRC. Extrae y clasifica información estructurada sobre este evento de seguridad. No narres ni interpretes — solo extrae lo que está explícitamente en el texto.

Responde únicamente con un JSON válido. Sin texto adicional.

Título: ${title}
Descripción: ${body}

{
  "activo": "sistema, software o dato en riesgo (máx. 10 palabras, español)",
  "vector": "método de explotación (máx. 8 palabras, español)",
  "condicion": "qué necesita el atacante para que aplique (máx. 8 palabras, español)",
  "explotacion": "investigacion | poc_publica | activa",
  "alcance": "quién está técnicamente expuesto (máx. 10 palabras, español)",
  "confianza": "alta | media | baja"
}

Criterio explotacion:
- activa: explotación confirmada en curso — CISA KEV, ataques documentados por múltiples fuentes
- poc_publica: falla verificada con código de ataque disponible públicamente, sin explotación masiva confirmada
- investigacion: vulnerabilidad reportada sin PoC público ni confirmación de explotación real

Criterio confianza:
- alta: fuente primaria (CISA, fabricante, CVE oficial, PoC publicado por el fabricante)
- media: fuente secundaria confiable (Krebs, BleepingComputer, THN, Symantec, Palo Alto)
- baja: sin confirmación independiente o fuente desconocida`;

  const raw = await callLLM(prompt);

  try {
    const parsed = JSON.parse(raw.replace(/^```json\s*|```\s*$/g, '').trim());
    return injectGRC(content, parsed, 'alerta');
  } catch {
    process.stderr.write(`  ! JSON inválido — ficha GRC con valores por defecto\n`);
    return injectGRC(content, {}, 'alerta');
  }
}

async function normalizeRadar(content) {
  const title = getField(content, 'title');
  const body  = getBody(content).slice(0, 800);

  const prompt = `Eres analista de riesgo estratégico. Identifica el cambio estructural en este evento tecnológico o de seguridad. No narres — solo clasifica.

Responde únicamente con un JSON válido. Sin texto adicional.

Título: ${title}
Descripción: ${body}

{
  "cambio": "qué está cambiando estructuralmente (máx. 10 palabras, español)",
  "paradigma": "qué supuesto queda obsoleto (máx. 10 palabras, español)",
  "horizonte": "semanas | meses | años",
  "confianza": "alta | media | baja"
}

Criterio horizonte:
- semanas: el cambio ya está ocurriendo o en adopción activa
- meses: emergiendo, aún no mainstream
- años: señal temprana de cambio estructural a largo plazo

Criterio confianza:
- alta: investigación primaria, fabricante, agencia oficial, incidente documentado
- media: fuente de seguridad reconocida, paper revisado, análisis técnico
- baja: especulación, predicción, sin respaldo verificable`;

  const raw = await callLLM(prompt);

  try {
    const parsed = JSON.parse(raw.replace(/^```json\s*|```\s*$/g, '').trim());
    return injectGRC(content, parsed, 'radar');
  } catch {
    process.stderr.write(`  ! JSON inválido — ficha GRC con valores por defecto\n`);
    return injectGRC(content, {}, 'radar');
  }
}

// --- Runner ---

async function processDir(dir, normalizeFn, label, onlyFiles) {
  const all = (await readdir(dir)).filter(f => f.endsWith('.md'));
  const files = onlyFiles ? all.filter(f => onlyFiles.includes(f)) : all;
  let normalized = 0, skipped = 0;

  for (const file of files) {
    const path = join(dir, file);
    const content = await readFile(path, 'utf8');
    if (!isDraft(content)) { skipped++; continue; }

    try {
      const updated = await normalizeFn(content);
      await writeFile(path, updated, 'utf8');
      normalized++;
      process.stdout.write(`  ✓ [${label}] ${file}\n`);
    } catch (err) {
      process.stderr.write(`  ! [${label}] ${file}: ${err.message.slice(0, 80)}\n`);
      skipped++;
    }

    await sleep(RATE_LIMIT_DELAY_MS);
  }

  return { normalized, skipped };
}

async function main() {
  if (!API_KEY) {
    console.error('\nError: ANTHROPIC_API_KEY no configurada.');
    console.error('Uso: ANTHROPIC_API_KEY=... node scripts/normalize-risk.js\n');
    process.exit(1);
  }

  const argFiles = process.argv.slice(2).map(f => f.split('/').pop());
  const onlyFiles = argFiles.length ? argFiles : null;

  console.log('\nNormalización GRC — Perímetro\n');
  if (onlyFiles) console.log(`  Procesando: ${onlyFiles.join(', ')}\n`);

  const radar   = await processDir(RADAR_DIR,   normalizeRadar,  'radar',  onlyFiles);
  const alertas = await processDir(ALERTAS_DIR, normalizeAlerta, 'alerta', onlyFiles);

  const total = radar.normalized + alertas.normalized;
  console.log(`\n${total} archivos normalizados`);
  console.log(`  radar:   ${radar.normalized} normalizados, ${radar.skipped} omitidos`);
  console.log(`  alertas: ${alertas.normalized} normalizadas, ${alertas.skipped} omitidas\n`);
}

main().catch(err => { console.error(err.message); process.exit(1); });
