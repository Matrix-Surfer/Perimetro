#!/usr/bin/env node

/**
 * Genera textos de tweet listos para copiar de alertas y radar publicados.
 * Uso: node scripts/generate-tweets.js [YYYY-MM-DD]
 * Sin fecha: usa el día de hoy.
 *
 * Formato según SOCIAL_MEDIA.md:
 * - Sin emojis
 * - Sin hashtags
 * - Lidera con consecuencia de negocio
 * - Link al final, solo
 * - Máximo ~245 chars de texto (Twitter reserva ~23 para el URL t.co)
 */

import { readdir, readFile, writeFile } from 'fs/promises';
import { join, dirname, basename } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT      = join(__dirname, '..');
const TWEETS_DIR = join(ROOT, 'tweets');
const BASE_URL  = 'https://jsilva.io';

const URL_T_LENGTH = 23; // Twitter cuenta URLs como 23 chars (t.co)
const MAX_TWEET    = 280;
const MAX_TEXT     = MAX_TWEET - URL_T_LENGTH - 2; // -2 por el \n\n antes del link

const DIRS = {
  analisis: join(ROOT, 'src', 'content', 'analisis'),
  alertas:  join(ROOT, 'src', 'content', 'alertas'),
  radar:    join(ROOT, 'src', 'content', 'radar'),
};

// --- Parsers ---

function stripQuotes(s) {
  const opens  = ['"', '“'];
  const closes = ['"', '”'];
  if (opens.some(q => s.startsWith(q)) && closes.some(q => s.endsWith(q))) {
    return s.slice(1, -1);
  }
  return s;
}

function parseFrontmatter(content) {
  const block = content.match(/^---\n([\s\S]+?)\n---/);
  if (!block) return {};
  const fm = {};
  const lines = block[1].split('\n');
  let i = 0;
  while (i < lines.length) {
    const keyMatch = lines[i].match(/^([\wñáéíóú]+):\s*(.*)$/);
    if (!keyMatch) { i++; continue; }
    const key = keyMatch[1];
    let val = keyMatch[2].trim();
    if (val.startsWith('"') && !val.endsWith('"') && val.length > 1) {
      val = val.slice(1);
      i++;
      while (i < lines.length) {
        const end = lines[i].trimEnd();
        if (end.endsWith('"')) { val += ' ' + end.slice(0, -1); i++; break; }
        val += ' ' + lines[i]; i++;
      }
    } else {
      val = stripQuotes(val);
      i++;
    }
    fm[key] = val.replace(/\s+/g, ' ').trim();
  }
  return fm;
}

// --- Formatters ---

function charLen(text) {
  return [...text].length; // cuenta correctamente emojis y caracteres Unicode
}

function truncate(text, max) {
  if (charLen(text) <= max) return text;
  return [...text].slice(0, max - 1).join('') + '…';
}

function buildAlertaTweet(fm, slug) {
  const url = `${BASE_URL}/alertas/${slug}`;

  // Estructura: verificacion como cierre de acción + resumen como contexto
  // Si verificacion está vacía, usar resumen completo
  const accion   = fm.verificacion || '';
  const contexto = fm.resumen || fm.title || '';

  let body;
  if (accion && accion !== contexto) {
    // Dos bloques: contexto breve + acción verificable
    const maxCtx = Math.floor(MAX_TEXT * 0.55);
    const maxAcc = MAX_TEXT - maxCtx - 2; // -2 por \n\n entre bloques
    body = `${truncate(contexto, maxCtx)}\n\n${truncate(accion, maxAcc)}`;
  } else {
    body = truncate(contexto, MAX_TEXT);
  }

  return `${body}\n\n${url}`;
}

function buildRadarTweet(fm, slug) {
  const url = `${BASE_URL}/radar/${slug}`;

  // Estructura: señal + observación estratégica
  const señal      = fm['señal']   || '';
  const observación = fm['observación'] || '';
  const contexto   = fm.context || fm.title || '';

  let body;
  if (señal && observación) {
    const maxS = Math.floor(MAX_TEXT * 0.5);
    const maxO = MAX_TEXT - maxS - 2;
    body = `${truncate(señal, maxS)}\n\n${truncate(observación, maxO)}`;
  } else if (señal) {
    body = truncate(señal + (contexto ? '\n\n' + contexto : ''), MAX_TEXT);
  } else {
    body = truncate(contexto, MAX_TEXT);
  }

  return `${body}\n\n${url}`;
}

function buildAnalisisTweet(fm, slug) {
  const url  = `${BASE_URL}/analisis/${slug}`;
  const body = truncate(fm.resumen || fm.title || '', MAX_TEXT);
  return `${body}\n\n${url}`;
}

// --- Loader ---

async function getPublishedByDate(dir, seccion, fecha) {
  const items = [];
  const files = (await readdir(dir)).filter(f => f.endsWith('.md'));

  for (const file of files) {
    const content = await readFile(join(dir, file), 'utf8');
    const fm = parseFrontmatter(content);
    if (fm.publicacion !== 'published') continue;

    const dateField = seccion === 'radar' ? 'pubDate' : 'date';
    const date = (fm[dateField] ?? '').slice(0, 10);
    if (date !== fecha) continue;

    items.push({ seccion, slug: basename(file, '.md'), fm });
  }

  return items;
}

// --- Main ---

async function main() {
  const fecha = process.argv[2] ?? new Date().toISOString().slice(0, 10);

  console.log(`\nTweets — ${fecha}\n`);
  console.log('─'.repeat(60));

  const analisis = await getPublishedByDate(DIRS.analisis, 'analisis', fecha);
  const alertas  = await getPublishedByDate(DIRS.alertas,  'alertas',  fecha);
  const radar    = await getPublishedByDate(DIRS.radar,    'radar',    fecha);
  const todos    = [...alertas, ...radar, ...analisis];

  if (todos.length === 0) {
    console.log(`\nNo hay items publicados con fecha ${fecha}.\n`);
    return;
  }

  const bloques = [];

  for (const { seccion, slug, fm } of todos) {
    let tweet;
    if (seccion === 'alertas')  tweet = buildAlertaTweet(fm, slug);
    else if (seccion === 'radar') tweet = buildRadarTweet(fm, slug);
    else                        tweet = buildAnalisisTweet(fm, slug);

    const chars = charLen(tweet.replace(/https?:\/\/\S+/g, ' '.repeat(URL_T_LENGTH)));
    console.log(`\n[${seccion.toUpperCase().padEnd(7)}] ${slug}`);
    console.log(`Caracteres: ${chars}/${MAX_TWEET}\n`);
    console.log(tweet);
    console.log('\n' + '─'.repeat(60));

    bloques.push(`[${seccion.toUpperCase()}] ${slug}\nCaracteres: ${chars}/${MAX_TWEET}\n\n${tweet}`);
  }

  const outFile = join(TWEETS_DIR, `tweets-${fecha}.txt`);
  await writeFile(outFile, bloques.join('\n\n' + '─'.repeat(60) + '\n\n'), 'utf8');
  console.log(`\n${todos.length} tweets guardados en tweets/tweets-${fecha}.txt\n`);
}

main().catch(err => { console.error(err.message); process.exit(1); });
