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
  publicacion: "draft"            publicacion: "draft"
        |
        v
scripts/enrich-drafts.js
  (mejora context/resumen via LLM)
        |
        v
src/content/radar/              src/content/alertas/
  publicacion: "review"           publicacion: "review"
        |
        v
Revisión humana obligatoria
  (verificar información, ajustar tono,
   completar secciones Pendiente)
        |
        v
node scripts/publish.js
  (cambia publicacion a "published")
        |
        v
git push → Cloudflare Pages (publicación automática)
```

---

## Ejecución

**Comando único:**
```bash
ANTHROPIC_API_KEY=sk-... node scripts/run-pipeline.js
```

**O paso a paso:**
```bash
node scripts/fetch-rss.js        # 1. Descargar feeds
node scripts/classify-rss.js    # 2. Clasificar en radar/alertas
node scripts/generate-drafts.js  # 3. Generar drafts Markdown
ANTHROPIC_API_KEY=sk-... node scripts/enrich-drafts.js  # 4. Enriquecer con LLM
node scripts/publish.js          # 5. Publicar ítems en revisión
```

**Validación (independiente del pipeline):**
```bash
node scripts/validate-content.js
```

Los primeros tres scripts son idempotentes: ejecutarlos múltiples veces no genera duplicados. El script de enriquecimiento solo procesa archivos con `publicacion: "draft"`.

---

## Scripts

| Script | Entrada | Salida |
|---|---|---|
| `scripts/run-pipeline.js` | — | Ejecuta los 5 pasos en secuencia |
| `scripts/fetch-rss.js` | `data/sources/rss_sources.json` | `inbox/rss/*.json` |
| `scripts/classify-rss.js` | `inbox/rss/*.json` | `inbox/rss/{radar,alertas}/` |
| `scripts/generate-drafts.js` | `inbox/rss/{radar,alertas}/` | `src/content/{radar,alertas}/*.md` con `publicacion: "draft"` |
| `scripts/enrich-drafts.js` | `src/content/{radar,alertas}/*.md` con `publicacion: "draft"` | Mismos archivos con `context`/`resumen` mejorados y `publicacion: "review"` |
| `scripts/publish.js` | `src/content/**/*.md` con `publicacion: "review"` | Mismos archivos con `publicacion: "published"` o `"rejected"` |
| `scripts/validate-content.js` | `src/content/{radar,alertas}/*.md` | Reporte de errores en campos obligatorios |

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
- **radar** — todo lo demás: tendencias de AI, herramientas, reportes, seguridad general, noticias sin incidente activo

Las alertas tienen prioridad. Si un item no califica para alertas, va a radar — no existe descarte por defecto.

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

Todos los drafts salen con `publicacion: "draft"` y secciones marcadas como "Pendiente".

---

## Enriquecimiento editorial (enrich-drafts.js)

Llama a la API de Anthropic para mejorar los campos editoriales clave de cada draft.

**Requiere:** variable de entorno `ANTHROPIC_API_KEY`.

**Radar:** reescribe el campo `context` como un insight empresarial claro en español, enfocado en impacto operativo para MiPYMES mexicanas. Reemplaza los textos genéricos de template.

**Alertas:** reescribe el campo `resumen` traduciendo el riesgo técnico a lenguaje de negocio, en español, sin tecnicismos innecesarios.

**Reglas editoriales del LLM:**
- No inventa datos ni información nueva
- No hace clickbait ni exageración
- Tono profesional y sobrio
- Máximo 2-3 oraciones por campo

**Output:** archivos procesados quedan con `publicacion: "review"`. Solo procesa archivos con `publicacion: "draft"` — los ya revisados o publicados no se tocan.

**Este script no reemplaza la revisión humana.** Es una capa de claridad y síntesis antes de que el editor revise.

---

## Orquestador (run-pipeline.js)

Ejecuta los cinco pasos del pipeline en orden, deteniendo en cualquier fallo:

```
[fetch-rss] OK
[classify]  OK
[generate]  OK
[enrich]    OK
[publish]   OK
```

Requiere `ANTHROPIC_API_KEY` en el entorno. El paso `publish` es interactivo: muestra los ítems en revisión y permite seleccionar cuál publicar.

---

## Validación de contenido (validate-content.js)

Valida los campos obligatorios de todos los archivos en `src/content/radar/` y `src/content/alertas/` contra el schema Zod exacto.

**Radar valida:** `title`, `pubDate` (fecha válida), `source`, `category`, `context`

**Alertas valida:** `title`, `date` (formato YYYY-MM-DD), `tipo` (enum), `status` (enum), `resumen`

Salida:
```
[OK] archivo.md
[ERROR] archivo.md → motivo
```

Exit code 1 si hay errores — apto para CI o pre-publicación manual.

---

## Estructura del inbox

```
inbox/rss/
  ├── {timestamp}-{slug}.json     ← items recién descargados
  ├── radar/
  │     └── {timestamp}-{slug}.json
  └── alertas/
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
