#!/usr/bin/env node

import { createInterface } from 'readline/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { slugify, today, esc, writeMarkdown } from './utils.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const CONTENT_DIR = join(__dirname, '..', 'src', 'content', 'analisis');

const rl = createInterface({ input: process.stdin, output: process.stdout });

async function main() {
  console.log('\nCrear nuevo analisis — Perimetro\n');

  const title = await rl.question('Titulo: ');
  if (!title.trim()) { rl.close(); return; }

  const categoria = await rl.question('Categoria (ej. Ciberseguridad, AI Empresarial): ');
  const tagsInput = await rl.question('Tags (separados por coma): ');
  const resumen = await rl.question('Resumen breve: ');
  const tiempoInput = await rl.question('Tiempo de lectura (minutos): ');

  rl.close();

  const tags = tagsInput.split(',').map(t => t.trim()).filter(Boolean);
  const tiempo_lectura = parseInt(tiempoInput) || 5;
  const slug = slugify(title.trim());
  const date = today();
  const outputPath = join(CONTENT_DIR, `${slug}.md`);

  const tagsYaml = `[${tags.map(t => `"${esc(t)}"`).join(', ')}]`;

  const content = `---
title: "${esc(title.trim())}"
date: "${date}"
categoria: "${esc(categoria.trim())}"
tags: ${tagsYaml}
resumen: "${esc(resumen.trim())}"
tiempo_lectura: ${tiempo_lectura}
destacado: false
---

## Introduccion

Pendiente.

## Desarrollo

Pendiente.

## Conclusion

Pendiente.
`;

  writeMarkdown(outputPath, content);
  console.log(`\nAnalisis creado: src/content/analisis/${slug}.md`);
  console.log(`Slug: ${slug} | Categoria: ${categoria.trim()} | Fecha: ${date}\n`);
}

main().catch((err) => { console.error(err.message); process.exit(1); });
