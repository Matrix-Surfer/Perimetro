#!/usr/bin/env node

import { readdir, readFile } from 'fs/promises';
import { existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { slugify, esc, writeMarkdown } from './utils.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');

const INBOX_RADAR   = join(ROOT, 'inbox', 'rss', 'radar');
const INBOX_ALERTAS = join(ROOT, 'inbox', 'rss', 'alertas');
const OUT_RADAR     = join(ROOT, 'src', 'content', 'radar');
const OUT_ALERTAS   = join(ROOT, 'src', 'content', 'alertas');

// --- Clasificación de categoría radar ---

const AI_KEYWORDS = [
  'artificial intelligence', 'machine learning', 'large language model',
  'llm', 'gpt', 'openai', 'anthropic', 'gemini', 'copilot',
  'agentic', 'ai agent', 'automation', 'chatbot',
];

// --- Templates de contexto para radar ---

const CONTEXT_TEMPLATES = [
  { kw: ['microsoft', 'windows', 'office 365', 'azure', 'teams'],
    text: 'Relevante para organizaciones que utilizan el ecosistema Microsoft.' },
  { kw: ['google', 'chrome', 'workspace', 'android'],
    text: 'Aplica a empresas que dependen de servicios y dispositivos Google.' },
  { kw: ['apple', 'ios', 'macos', 'iphone'],
    text: 'Relevante para organizaciones con dispositivos Apple en su operación.' },
  { kw: ['supply chain', 'npm', 'pypi', 'open source', 'package manager'],
    text: 'Impacta a cualquier organización que use dependencias de software de terceros.' },
  { kw: ['aws', 'cloud', 'saas', 'gcp', 'govcloud'],
    text: 'Relevante para empresas con infraestructura o servicios en la nube.' },
  { kw: ['artificial intelligence', 'machine learning', 'llm', 'gpt', 'automation', 'agentic'],
    text: 'Clave para equipos que están evaluando o adoptando inteligencia artificial.' },
  { kw: ['patch tuesday', 'security update', 'patch', 'cve-', 'zero-day', 'vulnerability'],
    text: 'Los equipos de IT deben priorizar la revisión y aplicación de actualizaciones.' },
  { kw: ['phishing', 'social engineering', 'credential', 'mfa', 'authentication'],
    text: 'Toda organización con correo corporativo debe reforzar la capacitación de usuarios.' },
  { kw: ['router', 'iot', 'firmware', 'industrial', 'scada', 'ot'],
    text: 'Relevante para empresas con dispositivos conectados o infraestructura industrial.' },
  { kw: ['regulation', 'compliance', 'gdpr', 'policy', 'law', 'sbom'],
    text: 'Las áreas de cumplimiento y legal deben dar seguimiento a estas disposiciones.' },
  { kw: ['ransomware', 'extortion', 'encrypt'],
    text: 'Las empresas deben revisar sus capacidades de respaldo y continuidad operativa.' },
];

// --- Impacto potencial por tipo de alerta ---

const IMPACTO = {
  Ransomware:   'Puede afectar la disponibilidad de sistemas y resultar en pérdida de datos o extorsión económica.',
  Filtración:   'Datos sensibles de clientes, empleados o infraestructura pueden haber sido expuestos públicamente.',
  Phishing:     'Empleados con acceso a sistemas corporativos o cuentas bancarias pueden ser el objetivo directo.',
  Defacement:   'La reputación digital de la organización puede verse comprometida ante clientes y proveedores.',
  'Dark Forum': 'La mención en foros clandestinos puede anticipar un ataque o filtración próxima.',
  Otro:         'Requiere evaluación según el contexto específico de cada organización.',
};

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

function truncate(text, max = 220) {
  const clean = cleanText(text);
  return clean.length <= max ? clean : clean.slice(0, max).replace(/\s\S*$/, '') + '…';
}

// --- Generadores ---

function radarFrontmatter(item) {
  const text = normalize(`${item.title} ${item.summary}`);
  const category = matches(text, AI_KEYWORDS) ? 'AI' : 'Seguridad';
  const tpl = CONTEXT_TEMPLATES.find(t => matches(text, t.kw));
  const context = tpl ? tpl.text : 'Señal relevante para el monitoreo de amenazas y tendencias tecnológicas.';

  return `---
title: "${esc(item.title)}"
pubDate: ${parseDate(item.pubDate)}
source: "${esc(item.source)}"
link: "${esc(item.link ?? '')}"
category: "${category}"
context: "${esc(context)}"
publicacion: "draft"
---`;
}

function alertaFrontmatter(item) {
  const text = normalize(`${item.title} ${item.summary}`);

  let tipo = 'Otro';
  if (matches(text, ['ransomware']))                                          tipo = 'Ransomware';
  else if (matches(text, ['phishing']))                                       tipo = 'Phishing';
  else if (matches(text, ['defacement']))                                     tipo = 'Defacement';
  else if (matches(text, ['dark web', 'dark forum', 'underground forum']))    tipo = 'Dark Forum';
  else if (matches(text, ['leak', 'breach', 'credential', 'exposed', 'stolen', 'filtrac'])) tipo = 'Filtración';

  const status = matches(text, ['exploited', 'in the wild', 'active exploit', 'ongoing', 'actively'])
    ? 'Activa' : 'En monitoreo';

  const resumen = truncate(item.summary);

  return { tipo, frontmatter: `---
title: "${esc(item.title)}"
date: "${parseDate(item.pubDate)}"
tipo: "${tipo}"
status: "${status}"
resumen: "${esc(resumen)}"
publicacion: "draft"
---` };
}

function toSlug(title) {
  return slugify(title).slice(0, 80);
}

// --- Procesamiento ---

async function processRadar() {
  const files = (await readdir(INBOX_RADAR)).filter(f => f.endsWith('.json'));
  let created = 0, skipped = 0;

  for (const file of files) {
    const item = JSON.parse(await readFile(join(INBOX_RADAR, file), 'utf8'));
    const slug = toSlug(item.title);
    const outPath = join(OUT_RADAR, `${slug}.md`);
    if (existsSync(outPath)) { skipped++; continue; }

    const summary = cleanText(item.summary);
    const content = `${radarFrontmatter(item)}

## Resumen

${summary}

## Relevancia empresarial

Pendiente.
`;
    try { writeMarkdown(outPath, content); created++; }
    catch { skipped++; }
  }

  return { created, skipped };
}

async function processAlertas() {
  const files = (await readdir(INBOX_ALERTAS)).filter(f => f.endsWith('.json'));
  let created = 0, skipped = 0;

  for (const file of files) {
    const item = JSON.parse(await readFile(join(INBOX_ALERTAS, file), 'utf8'));
    const slug = toSlug(item.title);
    const outPath = join(OUT_ALERTAS, `${slug}.md`);
    if (existsSync(outPath)) { skipped++; continue; }

    const { tipo, frontmatter } = alertaFrontmatter(item);
    const summary = cleanText(item.summary);
    const content = `${frontmatter}

## Contexto

${summary}

## Impacto potencial

${IMPACTO[tipo]}

## Recomendaciones

Pendiente.
`;
    try { writeMarkdown(outPath, content); created++; }
    catch { skipped++; }
  }

  return { created, skipped };
}

async function main() {
  const radar   = await processRadar();
  const alertas = await processAlertas();
  const totalSkipped = radar.skipped + alertas.skipped;

  console.log(`\n${radar.created} drafts radar creados`);
  console.log(`${alertas.created} drafts alertas creados`);
  if (totalSkipped > 0) console.log(`${totalSkipped} duplicados omitidos`);
  console.log();
}

main().catch(err => { console.error(err.message); process.exit(1); });
