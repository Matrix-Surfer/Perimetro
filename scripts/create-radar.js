#!/usr/bin/env node

import { createInterface } from 'readline/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { slugify, today, esc, writeMarkdown } from './utils.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const CONTENT_DIR = join(__dirname, '..', 'src', 'content', 'radar');

const CATEGORIES = ['AI', 'Seguridad', 'Otro'];

const rl = createInterface({ input: process.stdin, output: process.stdout });

async function main() {
  console.log('\nCrear nuevo radar item — Perimetro\n');

  const title = await rl.question('Titulo: ');
  if (!title.trim()) { rl.close(); return; }

  const source = await rl.question('Fuente (ej. MIT Tech Review, tldrsec): ');

  console.log('\nCategorias disponibles:');
  CATEGORIES.forEach((c, i) => console.log(`  ${i + 1}. ${c}`));
  const catInput = await rl.question('Categoria (numero o texto libre): ');
  const category = CATEGORIES[parseInt(catInput) - 1] ?? catInput.trim();

  const context = await rl.question('Contexto para empresas mexicanas: ');

  rl.close();

  const slug = slugify(title.trim());
  const date = today();
  const outputPath = join(CONTENT_DIR, `${slug}.md`);

  // pubDate sin comillas para que YAML lo parsee como Date (requerido por z.coerce.date())
  const content = `---
title: "${esc(title.trim())}"
pubDate: ${date}
source: "${esc(source.trim())}"
category: "${esc(category)}"
context: "${esc(context.trim())}"
---

## Resumen

Pendiente.

## Relevancia

Pendiente.
`;

  writeMarkdown(outputPath, content);
  console.log(`\nRadar creado: src/content/radar/${slug}.md`);
  console.log(`Slug: ${slug} | Fuente: ${source.trim()} | Fecha: ${date}\n`);
}

main().catch((err) => { console.error(err.message); process.exit(1); });
