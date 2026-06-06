#!/usr/bin/env node

import { readdir, readFile, rename, unlink, mkdir } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const INBOX     = join(__dirname, '..', 'inbox', 'rss');
const DIR_RADAR   = join(INBOX, 'radar');
const DIR_ALERTAS = join(INBOX, 'alertas');

// Patrones de descarte — se evalúan ANTES que alertas/radar
// Objetivo: eliminar ruido editorial (webinars, recaps, podcasts, avisos OT/ICS)
const KEYWORDS_DISCARD = [
  // Contenido editorial sin valor informativo
  'webinar', 'watch on demand', 'weekly recap', 'weekly roundup',
  'stormcast for ', 'all sessions available', 'join us', 'register now',
  'remembering ', 'in memoriam', 'obituary',

  // Avisos CISA para sistemas industriales/OT — irrelevantes para MiPYME
  'ics medical advisory', 'industrial control systems advisory',
  'ics-cert advisory', 'ot security advisory',

  // Dispositivos OT/médicos específicos que CISA reporta regularmente
  'abb ', 'abb terra', 'abb ac500', 'abb ability', 'abb b&r',
  'schneider electric', 'siemens energy', 'rockwell automation',
  'eppendorf', 'bioflo', 'yokogawa', 'honeywell', 'ge vernova',
];

// Patrones de descarte solo cuando aparecen en el TÍTULO (más específicos)
const TITLE_DISCARD_PATTERNS = [
  /^\[thn webinar\]/i,
  /^webinar:/i,
  /^watch on demand:/i,
  /^⚡ weekly recap/i,
  /^isc stormcast for/i,
  /^remembering /i,
];

// --- Filtro geográfico ---
// Orden de evaluación: LATAM → tech_global → us_específico → conservar (default)

const KEYWORDS_LATAM = [
  'mexico', 'méxico', 'latam', 'latin america', 'latinoamérica', 'latinoamerica',
  'colombia', 'argentina', 'brasil', 'brazil', 'chile', 'perú', 'peru',
  'venezuela', 'ecuador', 'costa rica', 'panamá', 'panama', 'bolivia',
  'paraguay', 'uruguay', 'guatemala', 'honduras', 'el salvador', 'nicaragua',
  'banxico', 'pemex', 'condusef', 'cnbv', 'inai',
];

// Software, plataformas y actores con presencia global — conservar aunque mencione institución US
const KEYWORDS_GLOBAL_TECH = [
  'cve-', 'zero-day', 'zero day', '0-day',
  'windows', 'linux', 'android', 'ios ', 'macos',
  'cisco', 'microsoft', 'google', 'apple', 'vmware', 'fortinet', 'ivanti',
  'chrome', 'firefox', 'safari', 'edge',
  'wordpress', 'apache ', 'nginx', 'openssl',
  'github', 'npm ', 'pypi', 'docker', 'kubernetes',
  'chinese ', 'china-linked', 'russian ', 'russia-linked',
  'north korean', 'iranian ', 'iran-linked',
  'supply chain',
];

// Instituciones y programas exclusivos de EE.UU. — descartar si no hay señal global
const KEYWORDS_US_SPECIFIC = [
  'u.s. government', 'us government', 'u.s. federal', 'federal agency',
  'pentagon', 'u.s. military', 'us military', 'u.s. army', 'us army',
  'u.s. navy', 'u.s. air force',
  'u.s. senate', 'us senate', 'u.s. congress', 'us congress',
  'u.s. house', 'us house of representatives',
  'white house', 'state department',
  'department of defense', 'department of justice', 'department of energy',
  'u.s. treasury', 'us treasury', 'treasury department',
  'irs ', 'internal revenue service',
  'social security number',
  'medicare ', 'medicaid ',
  'veterans affairs', 'va hospital',
  'national guard',
  'u.s. election', 'us election', 'u.s. voter',
];

// --- Detección de anuncios de producto/función ---
// Si el TÍTULO tiene un verbo de anuncio (sin señal de amenaza activa) → radar directo,
// sin pasar por el matching de KEYWORDS_ALERTAS que detectaría falsos positivos.

const TITLE_ANNOUNCEMENT_VERBS = [
  'launches', 'introduces', 'rolls out', 'rolling out',
  'unveils', 'unveiled', 'debuts', 'now available', 'goes live',
  'adds new', 'adds support',
];

const TITLE_FEATURE_NOUNS = [
  'mode', 'feature', 'tool', 'capability', 'platform', 'update',
];

// Si el título contiene ALGUNA de estas señales, el patrón de anuncio no aplica
const TITLE_HARD_THREAT = [
  'zero-day', '0-day', 'actively exploited', 'under attack',
  'no patch', 'emergency patch', 'critical flaw',
  'ransomware', 'data breach', 'breached', 'stolen', 'leaked',
  'malware', 'exploit', 'attack', 'hack', 'backdoor',
  'trojan', 'worm', 'spyware', 'stealer', 'botnet',
];

const KEYWORDS_ALERTAS = [
  'ransomware', 'data breach', 'credential', 'phishing', 'malware',
  'exploit', 'exploited', 'zero-day', 'zero day', '0-day', 'cve-',
  'attack', 'backdoor', 'trojan', 'botnet', 'ddos', 'wiper',
  'leaked', 'leak', 'exposed', 'exposure', 'compromised', 'compromise',
  'stolen', 'theft', 'breach', 'intrusion', 'infection', 'hijack',
  'vulnerability', 'critical flaw', 'remote code execution', 'rce',
  'privilege escalation', 'authentication bypass', 'supply chain attack',
  'keylogger', 'stealer', 'spyware', 'rootkit', 'cryptominer',
  'threat actor', 'apt', 'gang', 'cybercriminal', 'hacker group',
  'dark web', 'dark forum', 'underground',
];

const KEYWORDS_RADAR = [
  'artificial intelligence', 'machine learning', 'large language model',
  'llm', 'gpt', 'openai', 'anthropic', 'gemini', 'copilot',
  'automation', 'agentic', 'ai agent',
  'enterprise', 'business', 'organization', 'company',
  'tool', 'platform', 'framework', 'product launch', 'release',
  'report', 'study', 'research', 'survey', 'analysis',
  'strategy', 'policy', 'regulation', 'compliance', 'gdpr',
  'sbom', 'bill of materials', 'open source', 'devops', 'cloud',
  'patch tuesday', 'security update', 'advisory', 'guidance',
  'trend', 'forecast', 'prediction', 'risk management',
  'identity', 'zero trust', 'mfa', 'authentication',
  'incident response', 'threat intelligence', 'osint',
];

function normalize(text) {
  return (text ?? '').toLowerCase();
}

function matches(text, keywords) {
  return keywords.some(kw => text.includes(kw));
}

function shouldDiscard(item) {
  const text = normalize(`${item.title} ${item.summary}`);
  const title = normalize(item.title ?? '');
  if (matches(text, KEYWORDS_DISCARD)) return true;
  if (TITLE_DISCARD_PATTERNS.some(re => re.test(title))) return true;
  return false;
}

function isGeoIrrelevant(item) {
  const text = normalize(`${item.title} ${item.summary}`);
  if (matches(text, KEYWORDS_LATAM))       return false; // señal MX/LATAM → conservar
  if (matches(text, KEYWORDS_GLOBAL_TECH)) return false; // tech global → conservar
  if (matches(text, KEYWORDS_US_SPECIFIC)) return true;  // institución US sin ángulo global → descartar
  return false;
}

function isAnnouncementRadar(item) {
  const title = normalize(item.title ?? '');
  const hasVerb = TITLE_ANNOUNCEMENT_VERBS.some(v => title.includes(v));
  const hasNewFeature = (title.startsWith('new ') || title.includes(' new ')) &&
    TITLE_FEATURE_NOUNS.some(n => title.includes(n));
  if (!hasVerb && !hasNewFeature) return false;
  return !TITLE_HARD_THREAT.some(t => title.includes(t));
}

function classify(item) {
  if (shouldDiscard(item))       return 'discard';
  if (isGeoIrrelevant(item))     return 'discard';
  if (isAnnouncementRadar(item)) return 'radar';
  const text = normalize(`${item.title} ${item.summary}`);
  if (matches(text, KEYWORDS_ALERTAS)) return 'alertas';
  return 'radar';
}

async function main() {
  await mkdir(DIR_RADAR,   { recursive: true });
  await mkdir(DIR_ALERTAS, { recursive: true });

  const files = (await readdir(INBOX))
    .filter(f => f.endsWith('.json'));

  if (files.length === 0) {
    console.log('inbox/rss/ vacío — nada que clasificar');
    return;
  }

  const counts = { radar: 0, alertas: 0, discard: 0 };

  for (const file of files) {
    const src = join(INBOX, file);
    const item = JSON.parse(await readFile(src, 'utf8'));
    const category = classify(item);
    if (category === 'discard') {
      await unlink(src);
    } else {
      await rename(src, join(INBOX, category, file));
    }
    counts[category]++;
  }

  console.log(`\nClasificados ${files.length} items:`);
  console.log(`  ${counts.alertas} → alertas`);
  console.log(`  ${counts.radar}   → radar`);
  console.log(`  ${counts.discard} → discard\n`);
}

main().catch(err => { console.error(err.message); process.exit(1); });
