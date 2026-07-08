#!/usr/bin/env node

import { readdir, readFile, rename, mkdir } from 'fs/promises';
import { existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { slugify, esc, writeMarkdown } from './utils.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');

const INBOX_RADAR     = join(ROOT, 'inbox', 'rss', 'radar');
const INBOX_ALERTAS   = join(ROOT, 'inbox', 'rss', 'alertas');
const INBOX_PROCESSED = join(ROOT, 'inbox', 'rss', 'processed');
const OUT_RADAR       = join(ROOT, 'src', 'content', 'radar');
const OUT_ALERTAS     = join(ROOT, 'src', 'content', 'alertas');

// --- Clasificación de categoría radar ---

const AI_KEYWORDS = [
  'artificial intelligence', 'machine learning', 'large language model',
  'llm', 'gpt', 'openai', 'anthropic', 'gemini', 'copilot',
  'agentic', 'ai agent', 'automation', 'chatbot',
];

// --- Templates de contexto para radar ---

// --- Helpers ---

function normalize(text) {
  return (text ?? '').toLowerCase();
}

function matches(text, keywords) {
  return keywords.some(kw => text.includes(kw));
}

function parseDate(pubDate) {
  try {
    const d = new Date(pubDate);
    return isNaN(d.getTime()) ? today() : d.toISOString().split('T')[0];
  } catch {
    return today();
  }
}

function today() {
  return new Date().toISOString().split('T')[0];
}

function cleanText(text) {
  return (text ?? '').replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
}

// --- Generadores ---

function radarFrontmatter(item) {
  const text = normalize(`${item.title} ${item.summary}`);
  const category = matches(text, AI_KEYWORDS) ? 'AI' : 'Seguridad';

  return `---
title: "${esc(item.title)}"
pubDate: ${parseDate(item.pubDate)}
source: "${esc(item.source)}"
link: "${esc(item.link ?? '')}"
category: "${category}"
señal: ""
supuesto: ""
observación: ""
context: ""
grc_cambio: ""
grc_paradigma: ""
publicacion: "draft"
---`;
}

function alertaFrontmatter(item) {
  const text = normalize(`${item.title} ${item.summary}`);

  let categoria = 'Otro';
  if (matches(text, ['ransomware', 'malware', 'trojan', 'worm', 'backdoor', 'spyware', 'botnet', 'rat ', 'rootkit', 'encrypt', 'file-encrypting'])) categoria = 'Malware';
  else if (matches(text, ['phishing', 'spear phishing', 'smishing', 'vishing', 'mfa fatigue', 'mfa bombing', 'credential harvesting', 'social engineering', 'business email compromise', 'bec'])) categoria = 'Phishing';
  else if (matches(text, ['vulnerability', 'cve-', 'zero-day', 'zero day', 'rce', 'exploit', 'patch tuesday', 'buffer overflow', 'sql injection', 'xss', 'defacement', 'webshell'])) categoria = 'Vulnerabilidad';
  else if (matches(text, ['fraud', 'fraude', 'scam', 'estafa', 'fake invoice', 'wire transfer', 'bec', 'dark web', 'dark forum', 'underground forum', 'criminal forum'])) categoria = 'Fraude';
  else if (matches(text, ['data breach', 'data leak', 'leak', 'breach', 'exposed data', 'stolen data', 'records exposed', 'database exposed', 'dump', 'filtrac', 'impacted by', 'affected by'])) categoria = 'Fuga de datos';
  else if (matches(text, ['supply chain', 'third party', 'vendor', 'tercero', 'proveedor', 'partner', 'contractor', 'npm ', 'pypi'])) categoria = 'Terceros';
  else if (matches(text, ['artificial intelligence', 'machine learning', 'llm', 'gpt', 'chatgpt', 'deepfake', 'ai agent', 'agentic'])) categoria = 'IA';
  else if (matches(text, ['iot', 'industrial control', 'scada', 'ot system', 'firmware', 'router', 'nvr', 'plc', 'modbus', 'camera', 'smart device'])) categoria = 'IoT/OT';

  const status = matches(text, [
    'exploited', 'in the wild', 'active exploit', 'ongoing', 'actively exploited',
    'cisa orders', 'cisa adds', 'under attack', 'being exploited',
    'active campaign', 'live campaign', 'confirmed breach', 'confirmed attack',
    'hijacked', 'compromised', 'infected',
  ]) ? 'Activa' : 'En monitoreo';

  let nivelAtencion = 'Medio';
  if (matches(text, ['actively exploited', 'exploited in the wild', 'in the wild', 'under attack', 'ransomware', 'critical vulnerability', 'zero-day', 'zero day', 'emergency patch', 'mass exploitation', 'widespread attack'])) nivelAtencion = 'Crítico';
  else if (matches(text, ['high severity', 'high impact', 'rce', 'remote code execution', 'data breach', 'data leak', 'phishing campaign', 'active campaign', 'confirmed breach', 'hijacked', 'compromised', 'cisa adds'])) nivelAtencion = 'Alto';
  else if (matches(text, ['patch available', 'security update', 'advisory', 'low severity', 'informational'])) nivelAtencion = 'Bajo';

  const ambito = matches(text, ['consumer', 'personal', 'home user', 'mobile user', 'individual'])
    ? 'Personas'
    : matches(text, ['enterprise', 'corporate', 'organization', 'business'])
      ? 'Organizaciones'
      : 'Mixto';

  return { nivelAtencion, frontmatter: `---
title: "${esc(item.title)}"
date: "${parseDate(item.pubDate)}"
source: "${esc(item.source ?? '')}"
link: "${esc(item.link ?? '')}"
categoria: "${categoria}"
ambito: "${ambito}"
nivelAtencion: "${nivelAtencion}"
status: "${status}"
resumen: ""
expuestos: ""
verificacion: ""
impacto: ""
grc_activo: ""
grc_vector: ""
grc_condicion: ""
grc_alcance: ""
publicacion: "draft"
---` };
}

function alertaBodyTemplate() {
  return [
    `## Qué ocurrió`,
    `## Quién está expuesto`,
    `## A considerar`,
    `## Impacto potencial`,
  ].join('\n\n');
}

function toSlug(title) {
  return slugify(title).slice(0, 80);
}

// --- Procesamiento ---

async function processRadar() {
  const files = (await readdir(INBOX_RADAR)).filter(f => f.endsWith('.json'));
  let created = 0, skipped = 0;

  for (const file of files) {
    const srcPath = join(INBOX_RADAR, file);
    const item = JSON.parse(await readFile(srcPath, 'utf8'));
    const slug = toSlug(item.title);
    const outPath = join(OUT_RADAR, `${slug}.md`);

    if (existsSync(outPath)) {
      skipped++;
      await rename(srcPath, join(INBOX_PROCESSED, file));
      continue;
    }

    const content = `${radarFrontmatter(item)}

## La señal

## El supuesto que se rompe

## Qué observar

`;
    try {
      writeMarkdown(outPath, content);
      created++;
      await rename(srcPath, join(INBOX_PROCESSED, file));
    } catch {
      skipped++;
    }
  }

  return { created, skipped };
}

async function processAlertas() {
  const files = (await readdir(INBOX_ALERTAS)).filter(f => f.endsWith('.json'));
  let created = 0, skipped = 0;

  for (const file of files) {
    const srcPath = join(INBOX_ALERTAS, file);
    const item = JSON.parse(await readFile(srcPath, 'utf8'));
    const slug = toSlug(item.title);
    const outPath = join(OUT_ALERTAS, `${slug}.md`);

    if (existsSync(outPath)) {
      skipped++;
      await rename(srcPath, join(INBOX_PROCESSED, file));
      continue;
    }

    const { nivelAtencion, frontmatter } = alertaFrontmatter(item);
    const content = `${frontmatter}\n\n${alertaBodyTemplate()}\n`;

    try {
      writeMarkdown(outPath, content);
      created++;
      await rename(srcPath, join(INBOX_PROCESSED, file));
    } catch {
      skipped++; }
  }

  return { created, skipped };
}

async function main() {
  await mkdir(INBOX_PROCESSED, { recursive: true });

  const radar   = await processRadar();
  const alertas = await processAlertas();
  const totalSkipped = radar.skipped + alertas.skipped;

  console.log(`\n${radar.created} drafts radar creados`);
  console.log(`${alertas.created} drafts alertas creados`);
  if (totalSkipped > 0) console.log(`${totalSkipped} duplicados omitidos`);
  console.log();
}

main().catch(err => { console.error(err.message); process.exit(1); });
