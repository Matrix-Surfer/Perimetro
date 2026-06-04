#!/usr/bin/env node

import { readdir, readFile } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');

const RADAR_DIR   = join(ROOT, 'src', 'content', 'radar');
const ALERTAS_DIR = join(ROOT, 'src', 'content', 'alertas');

const CATEGORIAS_VALIDAS  = ['Vulnerabilidad', 'Malware', 'Fuga de datos', 'Phishing', 'Fraude', 'Terceros', 'IA', 'IoT/OT', 'Otro'];
const AMBITOS_VALIDOS     = ['Personas', 'Organizaciones', 'Mixto'];
const NIVELES_VALIDOS     = ['Bajo', 'Medio', 'Alto', 'Crítico'];
const STATUS_VALIDOS      = ['Activa', 'En monitoreo', 'Resuelta'];
const PUBLICACION_VALIDOS = ['draft', 'review', 'published', 'rejected'];

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

function validateRadar(content, file) {
  const errors = [];
  const warnings = [];

  const title      = getField(content, 'title');
  const pubDate    = getField(content, 'pubDate');
  const source     = getField(content, 'source');
  const category   = getField(content, 'category');
  const señal      = getField(content, 'señal');
  const supuesto   = getField(content, 'supuesto');
  const observación = getField(content, 'observación');
  const context    = getField(content, 'context');
  const publicacion = getField(content, 'publicacion');

  if (!title)                              errors.push('title ausente o vacío');
  if (!isValidDate(pubDate))               errors.push(`pubDate inválido: "${pubDate}"`);
  if (!source)                             errors.push('source ausente o vacío');
  if (!category)                           errors.push('category ausente o vacío');
  if (!publicacion || !PUBLICACION_VALIDOS.includes(publicacion))
                                           errors.push(`publicacion inválido: "${publicacion}"`);

  // Campos editoriales — warning si están vacíos y está published
  if (publicacion === 'published') {
    if (!señal)      errors.push('señal vacía en artículo publicado');
    if (!supuesto)   errors.push('supuesto vacío en artículo publicado');
    if (!observación) errors.push('observación vacía en artículo publicado');
    if (!context)    errors.push('context vacío en artículo publicado');
  } else {
    if (!señal)      warnings.push('señal vacía (pendiente de enriquecimiento)');
    if (!supuesto)   warnings.push('supuesto vacío (pendiente de enriquecimiento)');
    if (!observación) warnings.push('observación vacía (pendiente de enriquecimiento)');
  }

  // Detectar campos legacy de ALERTAS en RADAR
  if (content.match(/^categoria:/m))    warnings.push('campo legacy "categoria" — usar "category"');
  if (content.match(/^ambito:/m))       warnings.push('campo legacy "ambito" — no pertenece a RADAR');
  if (content.match(/^nivelAtencion:/m)) warnings.push('campo legacy "nivelAtencion" — no pertenece a RADAR');
  if (content.match(/^resumen:/m))      warnings.push('campo legacy "resumen" — no pertenece a RADAR');

  return { errors, warnings };
}

function validateAlerta(content, file) {
  const errors = [];
  const warnings = [];

  const title       = getField(content, 'title');
  const date        = getField(content, 'date');
  const source      = getField(content, 'source');
  const categoria   = getField(content, 'categoria');
  const ambito      = getField(content, 'ambito');
  const nivelAtencion = getField(content, 'nivelAtencion');
  const status      = getField(content, 'status');
  const resumen     = getField(content, 'resumen');
  const expuestos   = getField(content, 'expuestos');
  const verificacion = getField(content, 'verificacion');
  const impacto     = getField(content, 'impacto');
  const publicacion = getField(content, 'publicacion');

  if (!title)                                errors.push('title ausente o vacío');
  if (!isValidYMD(date))                     errors.push(`date inválido: "${date}"`);
  if (!source)                               errors.push('source ausente o vacío');
  if (!categoria || !CATEGORIAS_VALIDAS.includes(categoria))
                                             errors.push(`categoria inválida: "${categoria}"`);
  if (!ambito || !AMBITOS_VALIDOS.includes(ambito))
                                             errors.push(`ambito inválido: "${ambito}"`);
  if (!nivelAtencion || !NIVELES_VALIDOS.includes(nivelAtencion))
                                             errors.push(`nivelAtencion inválido: "${nivelAtencion}"`);
  if (!status || !STATUS_VALIDOS.includes(status))
                                             errors.push(`status inválido: "${status}"`);
  if (!resumen)                              errors.push('resumen ausente o vacío');
  if (!publicacion || !PUBLICACION_VALIDOS.includes(publicacion))
                                             errors.push(`publicacion inválido: "${publicacion}"`);

  if (publicacion === 'published') {
    if (!expuestos)   errors.push('expuestos vacío en artículo publicado');
    if (!verificacion) errors.push('verificacion vacía en artículo publicado');
    if (!impacto)     errors.push('impacto vacío en artículo publicado');
  } else {
    if (!expuestos)   warnings.push('expuestos vacío (pendiente de enriquecimiento)');
    if (!verificacion) warnings.push('verificacion vacía (pendiente de enriquecimiento)');
    if (!impacto)     warnings.push('impacto vacío (pendiente de enriquecimiento)');
  }

  // Detectar campo legacy
  if (content.match(/^tipo:/m)) warnings.push('campo legacy "tipo" — usar "categoria"');

  return { errors, warnings };
}

// --- Runner ---

async function validateDir(dir, validateFn, label) {
  const files = (await readdir(dir)).filter(f => f.endsWith('.md'));
  let ok = 0, errCount = 0, warnCount = 0;

  for (const file of files) {
    const content = await readFile(join(dir, file), 'utf8');
    const { errors, warnings } = validateFn(content, file);

    if (errors.length === 0 && warnings.length === 0) {
      ok++;
    } else {
      for (const e of errors)   process.stderr.write(`[ERROR][${label}] ${file} → ${e}\n`);
      for (const w of warnings) process.stdout.write(`[WARN ][${label}] ${file} → ${w}\n`);
      if (errors.length > 0) errCount++;
      if (warnings.length > 0) warnCount++;
    }
  }

  return { ok, errors: errCount, warnings: warnCount, total: files.length };
}

async function main() {
  console.log('\nValidación de contenido — Perímetro\n');

  const radar   = await validateDir(RADAR_DIR,   validateRadar,   'radar');
  const alertas = await validateDir(ALERTAS_DIR, validateAlerta,  'alerta');

  const totalOk   = radar.ok + alertas.ok;
  const totalErr  = radar.errors + alertas.errors;
  const totalWarn = radar.warnings + alertas.warnings;

  console.log(`\nRadar:   ${radar.total} archivos — ${radar.ok} OK, ${radar.errors} errores, ${radar.warnings} advertencias`);
  console.log(`Alertas: ${alertas.total} archivos — ${alertas.ok} OK, ${alertas.errors} errores, ${alertas.warnings} advertencias`);
  console.log(`\nTotal: ${totalOk} OK | ${totalErr} errores | ${totalWarn} advertencias\n`);

  if (totalErr > 0) process.exit(1);
}

main().catch(err => { console.error(err.message); process.exit(1); });
