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
fetch-rss → classify-rss → generate-drafts → enrich-drafts → publish
```

Enrich requires `ANTHROPIC_API_KEY`. Model: `claude-haiku-4-5-20251001`.

## Editorial priorities

1. Simplicity and performance over features
2. Content-focused design — minimal UI, no heavy animations
3. No hardcoded content in pages — use Astro collections

## AI coding rules

See `docs/AI_RULES.md`.
