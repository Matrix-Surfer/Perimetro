#!/usr/bin/env node

import { readdir, readFile } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');

const RADAR_DIR   = join(ROOT, 'src', 'content', 'radar');
const ALERTAS_DIR = join(ROOT, 'src', 'content', 'alertas');

const TIPOS_VALIDOS  = ['Defacement', 'Filtración', 'Ransomware', 'Phishing', 'Dark Forum', 'Otro'];
const STATUS_VALIDOS = ['Activa', 'En monitoreo', 'Resuelta'];

// --- Parsers ---

function getField(content, field) {
  const mQuoted = content.match(new RegExp(`^${field}:\\s*"((?:[^"\\\\]|\\\\.)*)"`, 'm'));
  if (mQuoted) return mQuoted[1];
  const mRaw = content.match(new RegExp(`^${field}:\\s*([^\\n"'\\[{]+)`, 'm'));
  if (mRaw) return mRaw[1].trim();
  return null;
}

function isValidDate(str) {
  if (!str) return false;
  return !isNaN(new Date(str).getTime());
}

function isValidYMD(str) {
  return typeof str === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(str) && isValidDate(str);
}

// --- Validators ---

function validateRadar(content) {
  const errors = [];
  const title    = getField(content, 'title');
  const pubDate  = getField(content, 'pubDate');
  const source   = getField(content, 'source');
  const category = getField(content, 'category');
  const context  = getField(content, 'context');

  if (!title)                        errors.push('title ausente o vacío');
  if (!pubDate || !isValidDate(pubDate)) errors.push(`pubDate inválido: "${pubDate}"`);
  if (!source)                       errors.push('source ausente o vacío');
  if (!category)                     errors.push('category ausente o vacío');
  if (!context)                      errors.push('context ausente o vacío');

  return errors;
}

function validateAlerta(content) {
  const errors = [];
  const title   = getField(content, 'title');
  const date    = getField(content, 'date');
  const tipo    = getField(content, 'tipo');
  const status  = getField(content, 'status');
  const resumen = getField(content, 'resumen');

  if (!title)                             errors.push('title ausente o vacío');
  if (!isValidYMD(date))                  errors.push(`date inválido: "${date}"`);
  if (!tipo || !TIPOS_VALIDOS.includes(tipo))     errors.push(`tipo inválido: "${tipo}"`);
  if (!status || !STATUS_VALIDOS.includes(status)) errors.push(`status inválido: "${status}"`);
  if (!resumen)                           errors.push('resumen ausente o vacío');

  return errors;
}

// --- Runner ---

async function validateDir(dir, validateFn) {
  const files = (await readdir(dir)).filter(f => f.endsWith('.md'));
  let ok = 0, errCount = 0;

  for (const file of files) {
    const content = await readFile(join(dir, file), 'utf8');
    const errors = validateFn(content);

    if (errors.length === 0) {
      console.log(`[OK] ${file}`);
      ok++;
    } else {
      for (const e of errors) {
        console.error(`[ERROR] ${file} → ${e}`);
      }
      errCount++;
    }
  }

  return { ok, errors: errCount };
}

async function main() {
  console.log('\nValidación de contenido — Perímetro\n');

  console.log('--- radar ---');
  const radar = await validateDir(RADAR_DIR, validateRadar);

  console.log('\n--- alertas ---');
  const alertas = await validateDir(ALERTAS_DIR, validateAlerta);

  const totalOk     = radar.ok + alertas.ok;
  const totalErrors = radar.errors + alertas.errors;

  console.log(`\n${totalOk} OK  |  ${totalErrors} con errores\n`);

  if (totalErrors > 0) process.exit(1);
}

main().catch(err => { console.error(err.message); process.exit(1); });
