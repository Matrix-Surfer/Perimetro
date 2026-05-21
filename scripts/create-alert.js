#!/usr/bin/env node

import { createInterface } from 'readline/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { slugify, today, esc, writeMarkdown } from './utils.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const CONTENT_DIR = join(__dirname, '..', 'src', 'content', 'alertas');

const TIPOS = ['Defacement', 'Filtración', 'Ransomware', 'Phishing', 'Dark Forum', 'Otro'];
const STATUSES = ['Activa', 'En monitoreo', 'Resuelta'];

const rl = createInterface({ input: process.stdin, output: process.stdout });

async function main() {
  console.log('\nCrear nueva alerta — Perimetro\n');

  const title = await rl.question('Titulo: ');
  if (!title.trim()) { rl.close(); return; }

  console.log('\nTipos disponibles:');
  TIPOS.forEach((t, i) => console.log(`  ${i + 1}. ${t}`));
  const tipoInput = await rl.question('Tipo (numero): ');
  const tipo = TIPOS[parseInt(tipoInput) - 1] ?? 'Otro';

  console.log('\nStatus disponibles:');
  STATUSES.forEach((s, i) => console.log(`  ${i + 1}. ${s}`));
  const statusInput = await rl.question('Status (numero): ');
  const status = STATUSES[parseInt(statusInput) - 1] ?? 'En monitoreo';

  const resumen = await rl.question('Resumen breve: ');
  const link = await rl.question('Link a fuente (opcional, dejar vacío si es Telegram): ');

  rl.close();

  const slug = slugify(title.trim());
  const date = today();
  const outputPath = join(CONTENT_DIR, `${slug}.md`);

  const source = link.trim() ? 'Fuente externa' : 'Monitoreo Telegram';
  const linkLine = link.trim() ? `\nlink: "${esc(link.trim())}"` : '';

  const content = `---
title: "${esc(title.trim())}"
date: "${date}"
tipo: "${tipo}"
status: "${status}"
resumen: "${esc(resumen.trim())}"
source: "${source}"${linkLine}
---

## Contexto

Pendiente.

## Impacto potencial

Pendiente.

## Recomendaciones

Pendiente.
`;

  writeMarkdown(outputPath, content);
  console.log(`\nAlerta creada: src/content/alertas/${slug}.md`);
  console.log(`Slug: ${slug} | Tipo: ${tipo} | Status: ${status} | Fecha: ${date}\n`);
}

main().catch((err) => { console.error(err.message); process.exit(1); });
