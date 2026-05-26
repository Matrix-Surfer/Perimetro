#!/usr/bin/env node

import { readdir, readFile, rename, mkdir } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const INBOX     = join(__dirname, '..', 'inbox', 'rss');
const DIR_RADAR   = join(INBOX, 'radar');
const DIR_ALERTAS = join(INBOX, 'alertas');
const DIR_DISCARD = join(INBOX, 'discard');

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

function classify(item) {
  if (shouldDiscard(item)) return 'discard';
  const text = normalize(`${item.title} ${item.summary}`);
  if (matches(text, KEYWORDS_ALERTAS)) return 'alertas';
  return 'radar';
}

async function main() {
  await mkdir(DIR_RADAR,   { recursive: true });
  await mkdir(DIR_ALERTAS, { recursive: true });
  await mkdir(DIR_DISCARD, { recursive: true });

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
    await rename(src, join(INBOX, category, file));
    counts[category]++;
  }

  console.log(`\nClasificados ${files.length} items:`);
  console.log(`  ${counts.alertas} → alertas`);
  console.log(`  ${counts.radar}   → radar`);
  console.log(`  ${counts.discard} → discard\n`);
}

main().catch(err => { console.error(err.message); process.exit(1); });
