#!/usr/bin/env node

import { readdir, readFile, rename, mkdir } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const INBOX     = join(__dirname, '..', 'inbox', 'rss');
const DIR_RADAR   = join(INBOX, 'radar');
const DIR_ALERTAS = join(INBOX, 'alertas');
const DIR_DISCARD = join(INBOX, 'discard');

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

function classify(item) {
  const text = normalize(`${item.title} ${item.summary}`);
  if (matches(text, KEYWORDS_ALERTAS)) return 'alertas';
  if (matches(text, KEYWORDS_RADAR))   return 'radar';
  return 'discard';
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
