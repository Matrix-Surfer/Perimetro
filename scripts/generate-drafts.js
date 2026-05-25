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
    text: 'Las organizaciones que usan el ecosistema Microsoft deben verificar si sus versiones actuales están afectadas y cuándo está programada la actualización en su entorno.' },
  { kw: ['google', 'chrome', 'workspace', 'android'],
    text: 'Las empresas que dependen de servicios y dispositivos Google deben revisar el impacto operativo de este cambio en sus flujos de trabajo.' },
  { kw: ['apple', 'ios', 'macos', 'iphone'],
    text: 'Las organizaciones con dispositivos Apple en operación deben evaluar si el cambio afecta sus políticas de actualización y gestión de dispositivos.' },
  { kw: ['supply chain', 'npm', 'pypi', 'open source', 'package manager'],
    text: 'Cualquier empresa que use software con dependencias de terceros debe revisar si sus proyectos están expuestos y quién es responsable de mantener esa cadena actualizada.' },
  { kw: ['aws', 'cloud', 'saas', 'gcp', 'govcloud'],
    text: 'Las empresas con infraestructura o servicios en la nube deben verificar si su configuración actual las expone a este riesgo y qué controles tienen en lugar.' },
  { kw: ['artificial intelligence', 'machine learning', 'llm', 'gpt', 'automation', 'agentic'],
    text: 'Este desarrollo modifica el panorama de riesgo y capacidades. Los equipos que evalúan o ya adoptaron IA deben actualizar su análisis de riesgo operativo y de gobernanza.' },
  { kw: ['patch tuesday', 'security update', 'patch', 'cve-', 'zero-day', 'vulnerability'],
    text: 'El tiempo entre la publicación de un parche y su explotación activa se ha reducido. Los equipos de IT deben priorizar estas actualizaciones y revisar si los plazos acordados siguen siendo adecuados.' },
  { kw: ['phishing', 'social engineering', 'credential', 'mfa', 'authentication'],
    text: 'El vector de ataque apunta a errores humanos que la tecnología no detiene sola. La revisión de controles de acceso y la capacitación del equipo son las defensas prioritarias.' },
  { kw: ['router', 'iot', 'firmware', 'industrial', 'scada', 'ot'],
    text: 'Las empresas con dispositivos conectados o infraestructura industrial deben verificar si sus equipos tienen actualizaciones disponibles y si el proveedor tiene un proceso activo de parches.' },
  { kw: ['regulation', 'compliance', 'gdpr', 'policy', 'law', 'sbom'],
    text: 'Las áreas de cumplimiento y legal deben evaluar si esta disposición genera obligaciones nuevas o modifica los plazos de adecuación existentes.' },
  { kw: ['ransomware', 'extortion', 'encrypt'],
    text: 'Este tipo de ataque interrumpe operaciones y genera presión financiera directa. Las empresas deben revisar si sus capacidades de respaldo y recuperación serían suficientes ante un incidente real.' },
];

// --- Impacto potencial por tipo de alerta ---

const IMPACTO = {
  Ransomware:   'La interrupción operativa puede ser total: sistemas bloqueados, datos cifrados y presión para pagar. La exposición financiera incluye el costo del rescate, la recuperación y el tiempo fuera de operación. Si hay datos de clientes o empleados afectados, puede activar obligaciones de notificación ante reguladores.',
  Filtración:   'Los datos expuestos pueden incluir información de clientes, empleados o contratos, lo que genera responsabilidad legal y reputacional. Dependiendo del tipo de datos, puede activar obligaciones de notificación. El daño reputacional puede afectar la relación con clientes y socios.',
  Phishing:     'Una cuenta corporativa comprometida puede derivar en fraude por desvío de pagos, acceso a información confidencial o ataques a los contactos del negocio. El riesgo no es solo técnico: es financiero y de responsabilidad contractual con clientes y proveedores.',
  Defacement:   'La modificación de un sitio corporativo daña la imagen pública ante clientes y proveedores, y puede generar desconfianza activa. Si el sitio maneja transacciones o datos, implica revisar si hubo acceso a información sensible más allá del cambio visual.',
  'Dark Forum': 'La mención en foros clandestinos puede anticipar un ataque, una filtración o la venta de accesos a los sistemas de la organización. Aunque no es un incidente confirmado, requiere monitoreo activo y revisión preventiva de accesos y controles.',
  Otro:         'El impacto requiere evaluación según el contexto específico. Las tres dimensiones a revisar: continuidad operativa (¿qué proceso se interrumpe?), exposición financiera (¿puede derivar en pérdida directa?) y obligaciones regulatorias o contractuales.',
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
source: "${esc(item.source ?? '')}"
link: "${esc(item.link ?? '')}"
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

## Relevancia

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
