# RSS Pipeline — Perímetro

Sistema de ingesta automática de feeds RSS. Lee fuentes externas, normaliza items y los almacena localmente para revisión editorial humana.

---

## Flujo

```
data/sources/rss_sources.json
        |
        v
scripts/fetch-rss.js
  (descarga y normaliza)
        |
        v
data/cache/rss_seen.json
  (deduplicación por URL)
        |
        v
inbox/rss/
  (items nuevos como JSON individuales)
        |
        v
Revisión humana obligatoria
        |
        v
src/content/[analisis|radar|alertas]/
```

---

## Ejecución

```bash
node scripts/fetch-rss.js
```

Procesa todos los feeds en `rss_sources.json`, guarda items nuevos en `inbox/rss/`, y actualiza el cache de deduplicación.

---

## Archivos clave

| Archivo | Propósito |
|---|---|
| `data/sources/rss_sources.json` | Lista de feeds a procesar |
| `data/cache/rss_seen.json` | Cache de URLs ya vistas (deduplicación) |
| `inbox/rss/` | Items crudos pendientes de revisión |
| `scripts/fetch-rss.js` | Script de ingesta |

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
1. Se compara el `link` de cada item contra `data/cache/rss_seen.json`
2. Si ya existe, se descarta silenciosamente
3. Si es nuevo, se guarda en `inbox/rss/` y se agrega al cache

El cache persiste entre ejecuciones. Ejecutar el script múltiples veces es seguro: no genera duplicados.

---

## Estructura del inbox

Cada item nuevo genera un archivo JSON individual en `inbox/rss/`:

**Nombre:** `{timestamp}-{slug}.json`

Ejemplo: `1779309694182-cisa-admin-leaked-aws-govcloud-keys-on-github.json`

**Contenido:**

```json
{
  "source": "Krebs on Security",
  "title": "CISA Admin Leaked AWS GovCloud Keys on Github",
  "link": "https://krebsonsecurity.com/2026/05/cisa-admin-leaked-aws-govcloud-keys-on-github/",
  "pubDate": "Mon, 18 May 2026 20:48:21 +0000",
  "summary": "Descripción breve del artículo...",
  "fetchedAt": "2026-05-20T20:41:34.182Z"
}
```

---

## Manejo de errores

- Un feed roto o inaccesible imprime `[ERROR] NombreFuente: mensaje` y continúa con el siguiente
- El script nunca aborta por un feed fallido
- Items sin `link` se descartan automáticamente

---

## Fuentes actuales

| Fuente | URL |
|---|---|
| Krebs on Security | `krebsonsecurity.com/feed/` |
| The Hacker News | `feeds.feedburner.com/TheHackersNews` |
| Schneier on Security | `schneier.com/feed/atom` |
| Dark Reading | `darkreading.com/rss.xml` |
| CISA Alerts | `cisa.gov/cybersecurity-advisories/all.xml` |

---

## Etapas futuras

### Clasificación automática

Un script `classify-inbox.js` podría:
- Leer items de `inbox/rss/`
- Clasificar por sección (analisis / radar / alertas) según keywords
- Mover a `drafts/` con frontmatter pre-generado
- **Sin publicar automáticamente**

### Generación de draft

Un script `draft-from-inbox.js` podría:
- Tomar un item de `inbox/rss/`
- Generar un `.md` con frontmatter completo usando los datos del JSON
- Colocar el archivo en `drafts/` con secciones vacías para completar
- La revisión humana sigue siendo obligatoria

### Automatización por cron

Ejecutar `fetch-rss.js` periódicamente (cada 6-12 horas) mediante:
- GitHub Actions scheduled workflow
- Cron en servidor
- Cloudflare Workers (con KV para el cache)

### Filtrado por relevancia

Agregar un campo `keywords` opcional en `rss_sources.json` para pre-filtrar items que no mencionen términos relevantes (México, PYME, ransomware, etc.).
