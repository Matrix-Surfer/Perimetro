# RSS Pipeline — Perímetro

Sistema de ingesta, clasificación y generación automática de drafts a partir de feeds RSS. Ningún contenido se publica sin revisión humana.

---

## Flujo completo

```
data/sources/rss_sources.json
        |
        v
scripts/fetch-rss.js
  (descarga y normaliza)
        |
        v
data/cache/rss_seen.json        inbox/rss/*.json
  (deduplicación por URL)        (items crudos)
        |
        v
scripts/classify-rss.js
  (clasificación por keywords)
        |
        v
inbox/rss/radar/                inbox/rss/alertas/          inbox/rss/discard/
        |                               |
        v                               v
scripts/generate-drafts.js
  (genera Markdown con frontmatter)
        |
        v
src/content/radar/              src/content/alertas/
        |
        v
Revisión humana obligatoria
  (completar secciones Pendiente,
   verificar información, ajustar tono)
        |
        v
git push → Cloudflare Pages (publicación automática)
```

---

## Ejecución

```bash
node scripts/fetch-rss.js       # 1. Descargar feeds
node scripts/classify-rss.js   # 2. Clasificar en radar/alertas/discard
node scripts/generate-drafts.js # 3. Generar drafts Markdown
```

Cada script es idempotente: ejecutarlo múltiples veces no genera duplicados.

---

## Scripts

| Script | Entrada | Salida |
|---|---|---|
| `scripts/fetch-rss.js` | `data/sources/rss_sources.json` | `inbox/rss/*.json` |
| `scripts/classify-rss.js` | `inbox/rss/*.json` | `inbox/rss/{radar,alertas,discard}/` |
| `scripts/generate-drafts.js` | `inbox/rss/{radar,alertas}/` | `src/content/{radar,alertas}/*.md` |

---

## Archivos clave

| Archivo | Propósito |
|---|---|
| `data/sources/rss_sources.json` | Lista de feeds a procesar |
| `data/cache/rss_seen.json` | Cache de URLs ya vistas (deduplicación, gitignored) |
| `inbox/rss/` | Items crudos y clasificados (gitignored) |

---

## Formato de fuentes (`rss_sources.json`)

```json
[
  {
    "name": "Krebs on Security",
    "url": "https://krebsonsecurity.com/feed/"
  }
]
```

Agregar o quitar fuentes directamente en este archivo. El script lo lee en cada ejecución.

---

## Deduplicación

Cada item se identifica por su `link` (URL canónica).

Al procesar un feed:
1. Se compara el `link` contra `data/cache/rss_seen.json`
2. Si ya existe, se descarta silenciosamente
3. Si es nuevo, se guarda en `inbox/rss/` y se agrega al cache

El cache persiste entre ejecuciones.

---

## Clasificación (classify-rss.js)

Usa arrays de keywords para mover cada JSON a una subcarpeta:

- **alertas** — amenazas operativas activas: ransomware, exploit, breach, CVE, zero-day, phishing, malware, leak, etc.
- **radar** — tendencias y contexto estratégico: AI, automation, enterprise, report, policy, patch, cloud, etc.
- **discard** — todo lo que no califica en ninguna de las anteriores

Las alertas tienen prioridad: si un item califica para ambas categorías, va a alertas.

---

## Generación de drafts (generate-drafts.js)

Para cada JSON en `inbox/rss/radar/` y `inbox/rss/alertas/`, genera un archivo `.md` compatible con el schema de Astro Collections.

**Radar** detecta:
- `category`: "AI" o "Seguridad" por keywords
- `context`: frase editorial en español por templates según el tema del artículo

**Alertas** detecta:
- `tipo`: Ransomware / Phishing / Defacement / Dark Forum / Filtración / Otro
- `status`: "Activa" si hay señales de explotación en curso, sino "En monitoreo"
- `resumen`: summary limpio truncado a ~220 caracteres

Los drafts tienen secciones marcadas como "Pendiente" que el editor debe completar antes de publicar.

---

## Estructura del inbox

```
inbox/rss/
  ├── {timestamp}-{slug}.json     ← items recién descargados
  ├── radar/
  │     └── {timestamp}-{slug}.json
  ├── alertas/
  │     └── {timestamp}-{slug}.json
  └── discard/
        └── {timestamp}-{slug}.json
```

**Formato JSON:**

```json
{
  "source": "Krebs on Security",
  "title": "CISA Admin Leaked AWS GovCloud Keys on Github",
  "link": "https://krebsonsecurity.com/...",
  "pubDate": "Mon, 18 May 2026 20:48:21 +0000",
  "summary": "Descripción breve del artículo...",
  "fetchedAt": "2026-05-20T20:41:34.182Z"
}
```

---

## Manejo de errores

- Un feed roto imprime `[ERROR] NombreFuente: mensaje` y continúa con el siguiente
- Items sin `link` se descartan automáticamente
- Si un draft ya existe en `src/content/`, se omite sin sobrescribir

---

## Fuentes actuales

| Fuente | Categoría |
|---|---|
| Krebs on Security | Seguridad |
| The Hacker News | Seguridad |
| Schneier on Security | Seguridad |
| Dark Reading | Seguridad |
| CISA Alerts | Seguridad |
| BleepingComputer | Seguridad |
| SecurityWeek | Seguridad |
| Graham Cluley | Seguridad |
| Malwarebytes Labs | Seguridad |
| The Register — Security | Seguridad |
| Ars Technica — Security | Seguridad |
| Wired — Security | Seguridad |
| SANS Internet Storm Center | Seguridad |
| MIT Technology Review | AI / Tecnología |
| VentureBeat — AI | AI |

---

## Etapas futuras

### Automatización por cron

Ejecutar los tres scripts en secuencia periódicamente (cada 6-12 horas) mediante GitHub Actions scheduled workflow.

### Filtrado por relevancia México

Agregar un campo `keywords` opcional en `rss_sources.json` para pre-filtrar items que no mencionen términos relevantes (México, PYME, ransomware, etc.) antes de clasificar.

### Fuentes adicionales

Incorporar ingesta desde Telegram y newsletters según `data/sources/telegram_channels.json` y `data/sources/newsletters.json`.
