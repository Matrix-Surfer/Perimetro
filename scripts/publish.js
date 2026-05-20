#!/usr/bin/env node

import { createInterface } from 'readline/promises';
import { readdir, readFile, writeFile } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');

const DIRS = {
  analisis: join(ROOT, 'src', 'content', 'analisis'),
  radar:    join(ROOT, 'src', 'content', 'radar'),
  alertas:  join(ROOT, 'src', 'content', 'alertas'),
};

const ESTADOS = ['published', 'review', 'rejected'];

async function getDrafts() {
  const drafts = [];
  for (const [seccion, dir] of Object.entries(DIRS)) {
    const files = (await readdir(dir)).filter(f => f.endsWith('.md'));
    for (const file of files) {
      const path = join(dir, file);
      const content = await readFile(path, 'utf8');
      if (content.includes('publicacion: "draft"') || content.includes("publicacion: 'draft'")) {
        drafts.push({ seccion, file, path });
      }
    }
  }
  return drafts;
}

async function main() {
  const rl = createInterface({ input: process.stdin, output: process.stdout });

  const drafts = await getDrafts();

  if (drafts.length === 0) {
    console.log('\nNo hay drafts pendientes.\n');
    rl.close();
    return;
  }

  console.log(`\n${drafts.length} drafts pendientes:\n`);
  drafts.forEach((d, i) => {
    console.log(`  ${String(i + 1).padStart(3)}. [${d.seccion}] ${d.file}`);
  });

  let indexInput, estadoInput;
  try {
    indexInput = await rl.question('\nSeleccionar número (o Enter para salir): ');
  } catch { rl.close(); return; }

  const index = parseInt(indexInput) - 1;
  if (isNaN(index) || index < 0 || index >= drafts.length) {
    console.log('Cancelado.\n');
    rl.close();
    return;
  }

  const draft = drafts[index];
  console.log(`\nSeleccionado: [${draft.seccion}] ${draft.file}`);
  console.log('Estados disponibles:');
  ESTADOS.forEach((e, i) => console.log(`  ${i + 1}. ${e}`));

  try {
    estadoInput = await rl.question('Nuevo estado (número): ');
  } catch { rl.close(); return; }

  const estado = ESTADOS[parseInt(estadoInput) - 1];
  if (!estado) {
    console.log('Estado inválido. Cancelado.\n');
    rl.close();
    return;
  }

  rl.close();

  const original = await readFile(draft.path, 'utf8');
  const updated = original
    .replace(/publicacion: "draft"/, `publicacion: "${estado}"`)
    .replace(/publicacion: 'draft'/, `publicacion: "${estado}"`);

  await writeFile(draft.path, updated, 'utf8');
  console.log(`\n✓ ${draft.file} → ${estado}\n`);
}

main().catch(err => { console.error(err.message); process.exit(1); });
