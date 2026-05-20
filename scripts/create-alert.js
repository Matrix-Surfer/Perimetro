#!/usr/bin/env node

import { createInterface } from 'readline';
import { writeFileSync, mkdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const CONTENT_DIR = join(__dirname, '..', 'src', 'content', 'alertas');

const TIPOS = ['Defacement', 'Filtración', 'Ransomware', 'Phishing', 'Dark Forum', 'Otro'];
const STATUSES = ['Activa', 'En monitoreo', 'Resuelta'];

const rl = createInterface({ input: process.stdin, output: process.stdout });

function ask(question) {
  return new Promise((resolve) => rl.question(question, (answer) => resolve(answer.trim())));
}

function slugify(text) {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

async function main() {
  console.log('\nCrear nueva alerta — Perimetro\n');

  const title = await ask('Titulo: ');
  if (!title) { rl.close(); return; }

  console.log('\nTipos disponibles:');
  TIPOS.forEach((t, i) => console.log(`  ${i + 1}. ${t}`));
  const tipoInput = await ask('Tipo (numero): ');
  const tipo = TIPOS[parseInt(tipoInput) - 1] ?? 'Otro';

  console.log('\nStatus disponibles:');
  STATUSES.forEach((s, i) => console.log(`  ${i + 1}. ${s}`));
  const statusInput = await ask('Status (numero): ');
  const status = STATUSES[parseInt(statusInput) - 1] ?? 'En monitoreo';

  const resumen = await ask('Resumen breve: ');

  rl.close();

  const date = new Date().toISOString().split('T')[0];
  const slug = slugify(title);
  const outputPath = join(CONTENT_DIR, `${slug}.md`);

  const content = `---
title: "${title.replace(/"/g, '\\"')}"
date: "${date}"
tipo: "${tipo}"
status: "${status}"
resumen: "${resumen.replace(/"/g, '\\"')}"
---

## Contexto

Pendiente.

## Impacto potencial

Pendiente.

## Recomendaciones

Pendiente.
`;

  if (!existsSync(CONTENT_DIR)) mkdirSync(CONTENT_DIR, { recursive: true });

  if (existsSync(outputPath)) {
    console.log(`\nError: ya existe src/content/alertas/${slug}.md`);
    process.exit(1);
  }

  writeFileSync(outputPath, content, 'utf8');
  console.log(`\nAlerta creada: src/content/alertas/${slug}.md`);
  console.log(`Slug: ${slug}`);
  console.log(`Tipo: ${tipo} | Status: ${status} | Fecha: ${date}\n`);
}

main().catch((err) => { console.error(err.message); process.exit(1); });
