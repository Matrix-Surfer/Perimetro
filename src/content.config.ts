import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const PUBLICACION = z.enum(['draft', 'review', 'published', 'rejected']).optional().default('published');

const analisis = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/analisis' }),
  schema: z.object({
    title: z.string(),
    date: z.string(),
    categoria: z.string(),
    tags: z.array(z.string()),
    resumen: z.string(),
    tiempo_lectura: z.number(),
    destacado: z.boolean().optional(),
    publicacion: PUBLICACION,
  }),
});

const radar = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/radar' }),
  schema: z.object({
    title: z.string(),
    source: z.string(),
    category: z.string().optional().default('Seguridad'),
    context: z.string().optional().default(''),
    pubDate: z.coerce.date(),
    link: z.string().url().optional(),
    publicacion: PUBLICACION,
    // Campos nuevos — plantilla RADAR híbrida
    nivelAtencion: z.enum(['Bajo', 'Medio', 'Alto', 'Crítico']).optional(),
    ambito: z.enum(['Personas', 'Organizaciones', 'Mixto']).optional(),
    categoria: z.enum(['Fraude', 'Phishing', 'Vulnerabilidad', 'Malware', 'Fuga de datos', 'IA', 'OT/ICS', 'Otro']).optional(),
    resumen: z.string().optional(),
  }),
});

const alertas = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/alertas' }),
  schema: z.object({
    title: z.string(),
    date: z.string(),
    tipo: z.enum(['Defacement', 'Filtración', 'Ransomware', 'Phishing', 'Dark Forum', 'Otro']),
    status: z.enum(['Activa', 'En monitoreo', 'Resuelta']),
    resumen: z.string(),
    source: z.string().optional().default('Monitoreo Telegram'),
    link: z.string().url().optional(),
    publicacion: PUBLICACION,
  }),
});

export const collections = { analisis, radar, alertas };
