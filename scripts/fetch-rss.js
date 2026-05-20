#!/usr/bin/env node

import Parser from 'rss-parser';
import { readFileSync, writeFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');

const SOURCES_PATH = join(ROOT, 'data', 'sources', 'rss_sources.json');
const SEEN_PATH    = join(ROOT, 'data', 'cache', 'rss_seen.json');
const INBOX_DIR    = join(ROOT, 'inbox', 'rss');

function loadJSON(path) {
  return JSON.parse(readFileSync(path, 'utf8'));
}

function slugify(text) {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .slice(0, 60);
}

async function fetchFeed(source, parser) {
  try {
    const feed = await parser.parseURL(source.url);
    console.log(`[OK] ${source.name} — ${feed.items.length} items`);
    return feed.items.map(item => ({
      source: source.name,
      title: item.title ?? '',
      link: item.link ?? item.guid ?? '',
      pubDate: item.pubDate ?? item.isoDate ?? '',
      summary: item.contentSnippet ?? item.content ?? '',
      fetchedAt: new Date().toISOString(),
    }));
  } catch (err) {
    console.error(`[ERROR] ${source.name}: ${err.message}`);
    return [];
  }
}

async function main() {
  const sources = loadJSON(SOURCES_PATH);
  const seen = new Set(loadJSON(SEEN_PATH));

  if (sources.length === 0) {
    console.log('No hay fuentes en rss_sources.json');
    return;
  }

  const parser = new Parser({ timeout: 10000 });
  let newCount = 0;

  for (const source of sources) {
    const items = await fetchFeed(source, parser);

    for (const item of items) {
      if (!item.link || seen.has(item.link)) continue;

      const filename = `${Date.now()}-${slugify(item.title || 'sin-titulo')}.json`;
      const outPath = join(INBOX_DIR, filename);
      writeFileSync(outPath, JSON.stringify(item, null, 2), 'utf8');

      seen.add(item.link);
      newCount++;
    }
  }

  writeFileSync(SEEN_PATH, JSON.stringify([...seen], null, 2), 'utf8');
  console.log(`\nFinalizado: ${newCount} items nuevos guardados en inbox/rss/`);
}

main().catch(err => { console.error(err.message); process.exit(1); });
