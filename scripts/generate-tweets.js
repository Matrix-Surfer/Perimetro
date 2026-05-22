#!/usr/bin/env node

/**
 * Genera textos de tweet listos para copiar de alertas y radar publicados.
 * Uso: node scripts/generate-tweets.js [YYYY-MM-DD]
 * Sin fecha: usa el día de hoy.
 */

import { readdir, readFile, writeFile } from 'fs/promises';
import { join, dirname, basename } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const BASE_URL = 'https://jsilva.io';

// Twitter cuenta URLs como 23 chars sin importar la longitud real
const URL_T_LENGTH = 23;
const MAX_TWEET = 280;

const DIRS = {
  alertas: join(ROOT, 'src', 'content', 'alertas'),
  radar:   join(ROOT, 'src', 'content', 'radar'),
};

function stripQuotes(s) {
  // Soporta comillas ASCII rectas y curly/smart quotes (U+201C/201D)
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
    const keyMatch = lines[i].match(/^(\w+):\s*(.*)$/);
    if (!keyMatch) { i++; continue; }
    const key = keyMatch[1];
    let val = keyMatch[2].trim();
    // Valor multilínea: empieza con " pero no termina con " en la misma línea
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

function tweetLength(text) {
  // Aproximación: cada URL real en el texto se cuenta como URL_T_LENGTH
  const withoutUrls = text.replace(/https?:\/\/\S+/g, ' '.repeat(URL_T_LENGTH));
  return [...withoutUrls].length; // spread para contar correctamente emojis
}

function truncate(text, maxChars) {
  if ([...text].length <= maxChars) return text;
  return [...text].slice(0, maxChars - 1).join('') + '…';
}

function buildAlertaTweet(title, resumen, slug, tipo) {
  const url = `${BASE_URL}/alertas/${slug}`;
  const hashtags = '#ciberseguridad #MiPYME #Mexico';
  const emoji = tipo === 'Ransomware' ? '🔒' : tipo === 'Phishing' ? '🎣' : tipo === 'Filtración' ? '💾' : '🚨';

  // Calculamos espacio disponible para el resumen
  const fixed = `${emoji} ${title}\n\n\n\n${url}\n\n${hashtags}`;
  const fixedLen = tweetLength(fixed);
  const available = MAX_TWEET - fixedLen - 2; // -2 por los \n\n del resumen

  const resumenCorto = truncate(resumen, Math.max(available, 60));

  return `${emoji} ${title}\n\n${resumenCorto}\n\n${url}\n\n${hashtags}`;
}

function buildRadarTweet(title, context, slug) {
  const url = `${BASE_URL}/radar/${slug}`;
  const hashtags = '#tecnologia #ciberseguridad #Mexico';
  const emoji = '📡';

  const fixed = `${emoji} ${title}\n\n\n\n${url}\n\n${hashtags}`;
  const fixedLen = tweetLength(fixed);
  const available = MAX_TWEET - fixedLen - 2;

  const contextCorto = truncate(context, Math.max(available, 60));

  return `${emoji} ${title}\n\n${contextCorto}\n\n${url}\n\n${hashtags}`;
}

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

    const slug = basename(file, '.md');
    if (seccion === 'alertas') {
      items.push({ seccion, slug, title: fm.title ?? '', resumen: fm.resumen ?? '', tipo: fm.tipo ?? '' });
    } else {
      items.push({ seccion, slug, title: fm.title ?? '', context: fm.context ?? '' });
    }
  }

  return items;
}

async function main() {
  const fecha = process.argv[2] ?? new Date().toISOString().slice(0, 10);

  console.log(`\nGenerando tweets para: ${fecha}\n`);
  console.log('─'.repeat(60));

  const alertas = await getPublishedByDate(DIRS.alertas, 'alertas', fecha);
  const radar   = await getPublishedByDate(DIRS.radar,   'radar',   fecha);
  const todos   = [...alertas, ...radar];

  if (todos.length === 0) {
    console.log(`\nNo hay items publicados con fecha ${fecha}.\n`);
    return;
  }

  const bloques = [];

  for (const item of todos) {
    let tweet;
    if (item.seccion === 'alertas') {
      tweet = buildAlertaTweet(item.title, item.resumen, item.slug, item.tipo);
    } else {
      tweet = buildRadarTweet(item.title, item.context, item.slug);
    }

    const chars = tweetLength(tweet);
    const seccionLabel = item.seccion.toUpperCase().padEnd(7);
    console.log(`\n[${seccionLabel}] ${item.slug}`);
    console.log(`Caracteres: ${chars}/${MAX_TWEET}\n`);
    console.log(tweet);
    console.log('\n' + '─'.repeat(60));

    bloques.push(`[${item.seccion.toUpperCase()}] ${item.slug}\nCaracteres: ${chars}/${MAX_TWEET}\n\n${tweet}`);
  }

  // Guardar en archivo
  const outFile = join(ROOT, `tweets-${fecha}.txt`);
  await writeFile(outFile, bloques.join('\n\n' + '─'.repeat(60) + '\n\n'), 'utf8');
  console.log(`\n✓ ${todos.length} tweets guardados en tweets-${fecha}.txt\n`);
}

main().catch(err => { console.error(err.message); process.exit(1); });
