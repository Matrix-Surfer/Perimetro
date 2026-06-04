#!/usr/bin/env node

import { createInterface } from 'readline/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { slugify, today, esc, writeMarkdown } from './utils.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const CONTENT_DIR = join(__dirname, '..', 'src', 'content', 'alertas');

const CATEGORIAS = ['Vulnerabilidad', 'Malware', 'Fuga de datos', 'Phishing', 'Fraude', 'Terceros', 'IA', 'IoT/OT', 'Otro'];
const AMBITOS    = ['Personas', 'Organizaciones', 'Mixto'];
const STATUSES   = ['Activa', 'En monitoreo', 'Resuelta'];
const NIVELES    = ['Bajo', 'Medio', 'Alto', 'Crítico'];

const rl = createInterface({ input: process.stdin, output: process.stdout });

async function main() {
  console.log('\nCrear nueva alerta — Perímetro\n');

  const title = await rl.question('Título: ');
  if (!title.trim()) { rl.close(); return; }

  console.log('\nCategorías:');
  CATEGORIAS.forEach((c, i) => console.log(`  ${i + 1}. ${c}`));
  const catInput = await rl.question('Categoría (número): ');
  const categoria = CATEGORIAS[parseInt(catInput) - 1] ?? 'Otro';

  console.log('\nÁmbito:');
  AMBITOS.forEach((a, i) => console.log(`  ${i + 1}. ${a}`));
  const ambitoInput = await rl.question('Ámbito (número): ');
  const ambito = AMBITOS[parseInt(ambitoInput) - 1] ?? 'Mixto';

  console.log('\nNivel de atención:');
  NIVELES.forEach((n, i) => console.log(`  ${i + 1}. ${n}`));
  const nivelInput = await rl.question('Nivel (número): ');
  const nivelAtencion = NIVELES[parseInt(nivelInput) - 1] ?? 'Medio';

  console.log('\nStatus:');
  STATUSES.forEach((s, i) => console.log(`  ${i + 1}. ${s}`));
  const statusInput = await rl.question('Status (número): ');
  const status = STATUSES[parseInt(statusInput) - 1] ?? 'En monitoreo';

  const resumen = await rl.question('Resumen breve: ');
  const link = await rl.question('Link a fuente (dejar vacío si es Telegram): ');

  rl.close();

  const slug = slugify(title.trim());
  const date = today();
  const outputPath = join(CONTENT_DIR, `${slug}.md`);

  const source = link.trim() ? 'Fuente externa' : 'Monitoreo Telegram';
  const linkLine = link.trim() ? `\nlink: "${esc(link.trim())}"` : '';

  const content = `---
title: "${esc(title.trim())}"
date: "${date}"
source: "${source}"${linkLine}
categoria: "${categoria}"
ambito: "${ambito}"
nivelAtencion: "${nivelAtencion}"
status: "${status}"
resumen: "${esc(resumen.trim())}"
expuestos: ""
verificacion: ""
impacto: ""
publicacion: "draft"
---

## Qué ocurrió

## Quién está expuesto

### Personas

### Organizaciones

## Qué verificar

## Impacto potencial
`;

  writeMarkdown(outputPath, content);
  console.log(`\nAlerta creada: src/content/alertas/${slug}.md`);
  console.log(`Categoría: ${categoria} | Ámbito: ${ambito} | Nivel: ${nivelAtencion} | Status: ${status}\n`);
}

main().catch((err) => { console.error(err.message); process.exit(1); });
