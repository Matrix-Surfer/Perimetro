# Perímetro — Project Instructions

## Stack

Astro + Cloudflare + GitHub. Static-first. Prefer Astro-native solutions over React or heavy client-side JS.

## Content

All editorial content in Spanish. Titles translated from English sources.

## Docs

Editorial frameworks and schemas live in `docs/`. Key files:

| File | Purpose |
|---|---|
| `docs/EDITORIAL_GUIDE.md` | Tone, audience, editorial principles |
| `docs/ALERTAS_FRAMEWORK.md` | Alertas structure, controls, schema |
| `docs/RADAR_FRAMEWORK.md` | Radar filters, schema, editorial tests |
| `docs/LANGUAGE_GUIDE.md` | Language rules for non-technical audience |
| `docs/CONTENT_SCHEMAS.md` | Frontmatter fields for all collections |
| `docs/SOCIAL_MEDIA.md` | Tweet format — no emojis, no hashtags |
| `docs/RSS_PIPELINE.md` | Automated pipeline reference |

## Pipeline

```
fetch-rss → classify-rss → [triage editorial manual con Claude Code] → generate-drafts → [enriquecimiento manual con Claude Code] → publish
```

El triage aplica los filtros de viabilidad de `ALERTAS_FRAMEWORK.md`/`RADAR_FRAMEWORK.md` sobre los JSON crudos en `inbox/rss/{radar,alertas}/` **antes** de generar drafts: presenta una tabla numerada (sección, título, viabilidad), el usuario indica qué pasa, y solo esos items llegan a `generate-drafts`. Los que no pasan se mueven a `inbox/rss/discard/`. Esto evita gastar tiempo y dinero enriqueciendo notas que no se van a publicar, y evita acumular drafts de ruido en `src/content/`.

`normalize-risk.js` y `enrich-drafts.js` existen pero no son parte del flujo regular. El enriquecimiento (traducción, GRC, cuerpo editorial) lo hace Claude Code directamente sobre los drafts.

Ver `docs/RSS_PIPELINE.md` para el flujo completo y detallado.

## Editorial priorities

1. Simplicity and performance over features
2. Content-focused design — minimal UI, no heavy animations
3. No hardcoded content in pages — use Astro collections

## AI coding rules

See `docs/AI_RULES.md`.
