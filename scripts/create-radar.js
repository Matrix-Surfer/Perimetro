#!/usr/bin/env node

import { createInterface } from 'readline/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { slugify, today, esc, writeMarkdown } from './utils.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const CONTENT_DIR = join(__dirname, '..', 'src', 'content', 'radar');

const CATEGORIES = ['AI', 'Seguridad'];

const rl = createInterface({ input: process.stdin, output: process.stdout });

async function main() {
  console.log('\nCrear nuevo item RADAR — Perímetro\n');

  const title = await rl.question('Título (nombra el cambio estructural, no la noticia): ');
  if (!title.trim()) { rl.close(); return; }

  const source = await rl.question('Fuente: ');
  const link   = await rl.question('Link (opcional): ');

  console.log('\nCategoría:');
  CATEGORIES.forEach((c, i) => console.log(`  ${i + 1}. ${c}`));
  const catInput = await rl.question('Categoría (número): ');
  const category = CATEGORIES[parseInt(catInput) - 1] ?? 'Seguridad';

  const señal      = await rl.question('Señal (el cambio estructural — una frase): ');
  const supuesto   = await rl.question('Supuesto que se rompe (una frase sin jerga): ');
  const observación = await rl.question('Qué observar (no qué hacer — una frase): ');

  rl.close();

  const slug = slugify(title.trim());
  const date = today();
  const outputPath = join(CONTENT_DIR, `${slug}.md`);
  const linkLine = link.trim() ? `\nlink: "${esc(link.trim())}"` : '';

  const content = `---
title: "${esc(title.trim())}"
pubDate: ${date}
source: "${esc(source.trim())}"${linkLine}
category: "${category}"
señal: "${esc(señal.trim())}"
supuesto: "${esc(supuesto.trim())}"
observación: "${esc(observación.trim())}"
context: ""
publicacion: "draft"
---

## La señal

## El supuesto que se rompe

## Qué observar
`;

  writeMarkdown(outputPath, content);
  console.log(`\nRADAR creado: src/content/radar/${slug}.md`);
  console.log(`Categoría: ${category} | Fecha: ${date}\n`);
}

main().catch((err) => { console.error(err.message); process.exit(1); });
