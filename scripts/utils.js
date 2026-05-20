import { writeFileSync, mkdirSync, existsSync } from 'fs';
import { dirname } from 'path';

export function slugify(text) {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

export function today() {
  return new Date().toISOString().split('T')[0];
}

export function esc(str) {
  return str.replace(/"/g, '\\"');
}

export function writeMarkdown(filePath, content) {
  const dir = dirname(filePath);
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
  if (existsSync(filePath)) throw new Error(`Ya existe: ${filePath}`);
  writeFileSync(filePath, content, 'utf8');
}
