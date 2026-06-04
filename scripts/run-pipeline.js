#!/usr/bin/env node

import { execSync } from 'child_process';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');

// Los pasos normalize y enrich se ejecutan manualmente hasta nuevo aviso.
const STEPS = [
  { label: 'fetch-rss',  cmd: 'node scripts/fetch-rss.js' },
  { label: 'classify',   cmd: 'node scripts/classify-rss.js' },
  { label: 'generate',   cmd: 'node scripts/generate-drafts.js' },
  { label: 'publish',    cmd: 'node scripts/publish.js',  interactive: true },
];

console.log('\nPipeline Perímetro\n');

for (const step of STEPS) {
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
