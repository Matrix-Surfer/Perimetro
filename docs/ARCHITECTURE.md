# Arquitectura del Proyecto

## Stack

| Capa | Tecnología |
|---|---|
| Framework | Astro 6 |
| Contenido | Markdown Collections |
| Hosting | Cloudflare Pages |
| Repositorio | GitHub |
| Deploy | Git push a main → build automático |

---

## Filosofía

Arquitectura estática orientada a contenido.

Prioridades en orden:
1. Simplicidad
2. Rendimiento
3. Legibilidad
4. Mantenibilidad

No se usa React. No es una SPA. El JavaScript en cliente es mínimo.

---

## Estructura de directorios

```
/
├── src/
│   ├── components/       # Nav.astro, Footer.astro
│   ├── content/          # Markdown editorial
│   │   ├── analisis/
│   │   ├── alertas/
│   │   └── radar/
│   ├── layouts/          # Base.astro (HTML, SEO, fonts)
│   ├── pages/            # Rutas del sitio
│   │   ├── index.astro
│   │   ├── analisis/
│   │   │   ├── index.astro
│   │   │   ├── [slug].astro
│   │   │   └── rss.xml.ts
│   │   ├── alertas/
│   │   │   ├── index.astro
│   │   │   ├── [slug].astro
│   │   │   └── rss.xml.ts
│   │   └── radar/
│   │       ├── index.astro
│   │       ├── [slug].astro
│   │       └── rss.xml.ts
│   ├── styles/
│   │   └── global.css
│   └── content.config.ts # Definición de schemas Zod
├── public/
│   ├── favicon.ico
│   ├── favicon.svg
│   └── robots.txt
├── docs/                 # Documentación del proyecto
├── scripts/              # Herramientas de operación editorial
├── data/
│   └── sources/          # Configuración de fuentes (futuro pipeline)
├── inbox/
│   └── telegram/         # Ingesta futura de Telegram
├── drafts/               # Borradores pre-publicación
└── astro.config.mjs
```

---

## Collections implementadas

Definidas en `src/content.config.ts` usando Astro Content Layer con `glob` loader.

| Collection | Directorio | Ruta pública |
|---|---|---|
| analisis | `src/content/analisis/` | `/analisis/[slug]` |
| alertas | `src/content/alertas/` | `/alertas/[slug]` |
| radar | `src/content/radar/` | `/radar/[slug]` |

Los schemas completos están documentados en `docs/CONTENT_SCHEMAS.md`.

---

## Rutas generadas

| Ruta | Tipo | Fuente |
|---|---|---|
| `/` | Estática | `pages/index.astro` |
| `/analisis` | Estática | `pages/analisis/index.astro` |
| `/analisis/[slug]` | Dinámica | Markdown en `content/analisis/` |
| `/analisis/rss.xml` | API | `pages/analisis/rss.xml.ts` |
| `/alertas` | Estática | `pages/alertas/index.astro` |
| `/alertas/[slug]` | Dinámica | Markdown en `content/alertas/` |
| `/alertas/rss.xml` | API | `pages/alertas/rss.xml.ts` |
| `/radar` | Estática | `pages/radar/index.astro` |
| `/radar/[slug]` | Dinámica | Markdown en `content/radar/` |
| `/radar/rss.xml` | API | `pages/radar/rss.xml.ts` |
| `/sitemap-index.xml` | Generado | `@astrojs/sitemap` |
| `/robots.txt` | Estático | `public/robots.txt` |

---

## SEO implementado

Gestionado desde `src/layouts/Base.astro`.

Cada página incluye:
- `<title>` dinámico
- `meta description`
- `link rel="canonical"`
- `og:title`, `og:description`, `og:type`, `og:url`, `og:image`
- `twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`

Las páginas `[slug].astro` pasan `description` al layout desde el frontmatter del markdown.

Sitemap generado automáticamente por `@astrojs/sitemap` con URL base `https://jsilva.io`.

---

## Diseño visual

Identidad definida. No modificar sin razón explícita.

- Fondo oscuro (`#0a0c0f`)
- Tipografía: Bebas Neue (títulos), Fraunces (cuerpo), DM Mono (labels/meta)
- Acento principal: `#00e5ff` (cyan)
- Acento secundario: `#ff4444` (rojo alertas)
- Estética: editorial cyber-minimal

---

## Restricciones técnicas

- NO React salvo necesidad demostrada
- NO convertir en SPA
- NO dependencias pesadas sin justificación
- NO mezclar contenido y lógica en exceso
- NO hardcodear contenido en páginas (todo desde collections)
