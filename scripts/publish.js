#!/usr/bin/env node

import { createInterface } from 'readline/promises';
import { readdir, readFile, writeFile, unlink } from 'fs/promises';
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
      if (content.includes('publicacion: "review"') || content.includes("publicacion: 'review'")) {
        const titleMatch = content.match(/^title:\s*"?([^\n"]+)"?/m);
        const title = titleMatch ? titleMatch[1].trim() : file;
        drafts.push({ seccion, file, path, title });
      }
    }
  }
  return drafts;
}

async function publishItem(draft, estado = 'published') {
  if (estado === 'rejected') {
    await unlink(draft.path);
    return;
  }
  const original = await readFile(draft.path, 'utf8');
  const updated = original
    .replace(/publicacion: "review"/, `publicacion: "${estado}"`)
    .replace(/publicacion: 'review'/, `publicacion: "${estado}"`);
  await writeFile(draft.path, updated, 'utf8');
}

async function main() {
  const args = process.argv.slice(2);
  const publishAll = args.includes('--all');
  const targetSlugs = args
    .filter(a => !a.startsWith('--'))
    .map(f => f.replace(/.*\//, '').replace(/\.md$/, '') + '.md');

  const drafts = await getDrafts();

  // --- Modo bulk ---
  if (publishAll || targetSlugs.length > 0) {
    const toPublish = targetSlugs.length > 0
      ? drafts.filter(d => targetSlugs.includes(d.file))
      : drafts;

    if (toPublish.length === 0) {
      console.log('\nNo hay ítems en revisión que coincidan.\n');
      return;
    }

    console.log(`\nPublicando ${toPublish.length} ítem${toPublish.length !== 1 ? 's' : ''}...\n`);
    for (const draft of toPublish) {
      await publishItem(draft, 'published');
      console.log(`  ✓ [${draft.seccion}] ${draft.file}`);
    }
    console.log();
    return;
  }

  // --- Modo interactivo ---
  const rl = createInterface({ input: process.stdin, output: process.stdout });

  if (drafts.length === 0) {
    console.log('\nNo hay ítems en revisión pendientes de publicación.\n');
    rl.close();
    return;
  }

  console.log(`\n${drafts.length} ítems en revisión:\n`);
  drafts.forEach((d, i) => {
    console.log(`  ${String(i + 1).padStart(3)}. [${d.seccion}] ${d.title}`);
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
  console.log(`\nSeleccionado: [${draft.seccion}] ${draft.title}`);
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

  await publishItem(draft, estado);
  console.log(`\n✓ ${draft.file} → ${estado}\n`);
}

main().catch(err => { console.error(err.message); process.exit(1); });
