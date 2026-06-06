#!/usr/bin/env node

import { readdir, readFile } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { existsSync } from 'fs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');

const CONTENT_DIRS = {
  alertas: join(ROOT, 'src', 'content', 'alertas'),
  radar:   join(ROOT, 'src', 'content', 'radar'),
};

const INBOX_DIRS = {
  sin_clasificar: join(ROOT, 'inbox', 'rss'),
  alertas:        join(ROOT, 'inbox', 'rss', 'alertas'),
  radar:          join(ROOT, 'inbox', 'rss', 'radar'),
};

function getField(content, field) {
  const m = content.match(new RegExp(`^${field}:\\s*"?([^"\\n]+)"?`, 'm'));
  return m ? m[1].trim() : '';
}

function truncate(str, max = 72) {
  return str.length > max ? str.slice(0, max - 1) + '…' : str;
}

async function countJsons(dir) {
  if (!existsSync(dir)) return 0;
  return (await readdir(dir)).filter(f => f.endsWith('.json')).length;
}

async function main() {
  const today = new Date().toISOString().split('T')[0];
  const groups = { review: [], draft_today: [], draft_old: 0, published_today: [] };

  for (const [seccion, dir] of Object.entries(CONTENT_DIRS)) {
    const files = (await readdir(dir)).filter(f => f.endsWith('.md'));
    for (const file of files) {
      const content = await readFile(join(dir, file), 'utf8');
      const pub   = getField(content, 'publicacion');
      const title = getField(content, 'title');
      const date  = getField(content, 'date') || getField(content, 'pubDate');
      const item  = { seccion, file, title, date };

      if (pub === 'review') {
        groups.review.push(item);
      } else if (pub === 'draft') {
        if (date === today) groups.draft_today.push(item);
        else groups.draft_old++;
      } else if (pub === 'published' && date === today) {
        groups.published_today.push(item);
      }
    }
  }

  // Inbox counts
  const inbox_sin_clasificar = (await countJsons(INBOX_DIRS.sin_clasificar));
  const inbox_alertas = await countJsons(INBOX_DIRS.alertas);
  const inbox_radar   = await countJsons(INBOX_DIRS.radar);
  const inbox_total   = inbox_sin_clasificar + inbox_alertas + inbox_radar;

  const SEP = '─'.repeat(62);
  console.log(`\n${SEP}`);
  console.log('  Perímetro — Estado del pipeline');
  console.log(`  ${today}`);
  console.log(SEP);

  // Inbox
  if (inbox_total > 0) {
    console.log(`\n  INBOX  ${inbox_total} JSONs pendientes de generar draft`);
    if (inbox_sin_clasificar > 0) console.log(`    sin clasificar: ${inbox_sin_clasificar}`);
    if (inbox_alertas > 0)        console.log(`    alertas:        ${inbox_alertas}`);
    if (inbox_radar > 0)          console.log(`    radar:          ${inbox_radar}`);
  }

  // En revisión
  if (groups.review.length > 0) {
    console.log(`\n  EN REVISIÓN  ${groups.review.length}  →  node scripts/publish.js --all`);
    for (const d of groups.review) {
      console.log(`    [${d.seccion.padEnd(7)}] ${truncate(d.title)}`);
    }
  } else {
    console.log('\n  Sin ítems en revisión.');
  }

  // Nuevos drafts (hoy)
  if (groups.draft_today.length > 0) {
    console.log(`\n  NUEVOS HOY  ${groups.draft_today.length}  (drafts para enriquecer)`);
    for (const d of groups.draft_today) {
      console.log(`    [${d.seccion.padEnd(7)}] ${truncate(d.title || d.file)}`);
    }
  }

  if (groups.draft_old > 0) {
    console.log(`\n  DRAFTS ANTERIORES  ${groups.draft_old}  (acumulados, sin enriquecer)`);
  }

  // Publicados hoy
  if (groups.published_today.length > 0) {
    console.log(`\n  PUBLICADOS HOY  ${groups.published_today.length}`);
    for (const d of groups.published_today) {
      console.log(`    [${d.seccion.padEnd(7)}] ${truncate(d.title)}`);
    }
  }

  console.log(`\n${SEP}\n`);
}

main().catch(err => { console.error(err.message); process.exit(1); });
