#!/usr/bin/env node

import { execSync } from 'child_process';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');

// Triage editorial, generate, enrich y publish se ejecutan manualmente:
// el triage decide qué items sobreviven antes de gastar tiempo/dinero enriqueciéndolos.
// Ver docs/RSS_PIPELINE.md.
const STEPS = [
  { label: 'fetch-rss',  cmd: 'node scripts/fetch-rss.js' },
  { label: 'classify',   cmd: 'node scripts/classify-rss.js' },
];

console.log('\nPipeline Perímetro\n');

for (const step of STEPS) {
  try {
    execSync(step.cmd, { stdio: 'inherit', env: process.env, cwd: ROOT });
    console.log(`[${step.label}] OK`);
  } catch {
    console.error(`\n[${step.label}] ERROR — pipeline detenido`);
    process.exit(1);
  }
}

console.log('\nPipeline completado.\n');
