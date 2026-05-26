#!/usr/bin/env node

import { execSync } from 'child_process';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');

const HAS_API_KEY = Boolean(process.env.GOOGLE_AI_API_KEY);

const STEPS = [
  { label: 'fetch-rss',  cmd: 'node scripts/fetch-rss.js' },
  { label: 'classify',   cmd: 'node scripts/classify-rss.js' },
  { label: 'generate',   cmd: 'node scripts/generate-drafts.js' },
  { label: 'enrich',     cmd: 'node scripts/enrich-drafts.js', requiresKey: true },
  { label: 'publish',    cmd: 'node scripts/publish.js',       interactive: true },
];

console.log('\nPipeline Perímetro\n');
if (!HAS_API_KEY) console.log('[info] GOOGLE_AI_API_KEY no disponible — paso enrich omitido\n');

for (const step of STEPS) {
  // Omitir enrich si no hay API key
  if (step.requiresKey && !HAS_API_KEY) {
    console.log(`[${step.label}] OMITIDO (sin API key)`);
    continue;
  }
  // Omitir publish en modo no-interactivo (cron)
  if (step.interactive && process.env.PIPELINE_NONINTERACTIVE) {
    console.log(`[${step.label}] OMITIDO (modo no interactivo)`);
    continue;
  }
  try {
    execSync(step.cmd, { stdio: 'inherit', env: process.env, cwd: ROOT });
    console.log(`[${step.label}] OK`);
  } catch {
    console.error(`\n[${step.label}] ERROR — pipeline detenido`);
    process.exit(1);
  }
}

console.log('\nPipeline completado.\n');
