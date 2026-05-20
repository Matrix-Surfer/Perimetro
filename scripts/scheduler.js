#!/usr/bin/env node

import { execSync } from 'child_process';
import { appendFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT     = join(__dirname, '..');
const LOGS_DIR = join(ROOT, 'logs');

const INTERVAL_MINUTES = 30;

mkdirSync(LOGS_DIR, { recursive: true });

function logEntry(data) {
  const date    = new Date().toISOString().split('T')[0];
  const logFile = join(LOGS_DIR, `pipeline-${date}.log`);
  appendFileSync(logFile, JSON.stringify(data) + '\n', 'utf8');
}

function runPipeline() {
  console.log('\n=== EJECUCIÓN AUTOMÁTICA PIPELINE ===');
  const timestamp = new Date().toISOString();
  console.log(timestamp);

  const start = Date.now();

  try {
    execSync('node scripts/run-pipeline.js', {
      stdio: 'inherit',
      env: process.env,
      cwd: ROOT,
    });
    const duration_ms = Date.now() - start;
    console.log('\n[OK] Pipeline completado');
    logEntry({ timestamp, status: 'ok', duration_ms });
  } catch (err) {
    const duration_ms = Date.now() - start;
    console.error('\n[ERROR] Pipeline falló');
    console.error(err.message);
    logEntry({ timestamp, status: 'error', error: err.message, duration_ms });
  }
}

runPipeline();
setInterval(runPipeline, INTERVAL_MINUTES * 60 * 1000);
