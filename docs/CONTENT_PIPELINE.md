# Content Pipeline — Perímetro

## Estado actual

El contenido llega a producción por dos vías:

**Manual** (análisis y contenido editorial propio):
```
node scripts/create-analysis.js
node scripts/create-alert.js
node scripts/create-radar.js
```

**Automática desde RSS** (radar y alertas):
```
node scripts/fetch-rss.js        # descarga feeds
node scripts/classify-rss.js    # clasifica por keywords
node scripts/generate-drafts.js # genera drafts Markdown
```

En ambos casos, el contenido requiere revisión humana antes de publicarse. Cada `git push` a `main` dispara el deploy en Cloudflare Pages automáticamente.

---

## Pipeline futuro

El objetivo es un flujo semi-automatizado donde las fuentes alimenten borradores y un humano revise antes de publicar.

```
Fuentes externas
  (Telegram / RSS / Newsletters)
        |
        v
    /inbox/
  (archivos crudos, sin editar)
        |
        v
  Clasificación
  (tipo, relevancia, sección)
        |
        v
    /drafts/
  (borradores con frontmatter generado)
        |
        v
  Revision humana obligatoria
  (edición, verificacion, aprobación)
        |
        v
  src/content/[seccion]/
  (publicación en producción)
```

---

## Etapas detalladas

### 1. Ingesta de fuentes

**Origen:**
- Canales de Telegram monitoreados (`data/sources/telegram_channels.json`)
- Feeds RSS curados (`data/sources/rss_sources.json`)
- Newsletters seleccionadas (`data/sources/newsletters.json`)

**Resultado:** archivos crudos en `/inbox/telegram/` o equivalente por fuente.

**Criterio de ingesta:** cualquier señal que pueda ser relevante para empresas mexicanas. El filtro fino ocurre en clasificación.

---

### 2. Clasificación

**Objetivo:** determinar si el ítem:
- Es relevante para la audiencia de Perímetro
- Pertenece a Análisis, Radar o Alertas
- Requiere verificación adicional antes de draft

**Criterios de descarte:**
- No tiene conexión con México o MiPYMES
- Es duplicado de algo ya publicado
- Es rumor sin fuente verificable
- Es contenido de marketing disfrazado

---

### 3. Generación de draft

**Resultado:** archivo Markdown en `/drafts/` con:
- Frontmatter completo (title, date, tipo/category, status/categoria, resumen/context)
- Secciones de contenido en estado "Pendiente"
- Fuente original referenciada en comentario

**Herramientas disponibles:**

Creación manual interactiva:
- `scripts/create-analysis.js` — genera draft de análisis
- `scripts/create-alert.js` — genera draft de alerta
- `scripts/create-radar.js` — genera draft de ítem de radar

Generación automática desde RSS:
- `scripts/fetch-rss.js` — descarga feeds RSS configurados
- `scripts/classify-rss.js` — clasifica items en radar/alertas/discard
- `scripts/generate-drafts.js` — genera Markdown desde items clasificados

Ver detalles del pipeline RSS en `docs/RSS_PIPELINE.md`.

---

### 4. Revisión humana

**Obligatoria. Sin excepción.**

El revisor debe:
- Verificar que la información sea precisa
- Completar las secciones "Pendiente"
- Adaptar el tono al estilo editorial
- Confirmar que cumple la guía editorial (`docs/EDITORIAL_GUIDE.md`)
- Mover el archivo de `/drafts/` a `src/content/[seccion]/`

**Ningún contenido generado automáticamente se publica sin revisión.**

---

### 5. Publicación

Al hacer `git push` a `main`, Cloudflare Pages ejecuta el build de Astro y publica automáticamente.

No hay paso manual de deploy.

---

## Criterios de publicación por sección

### Análisis
- Tema con impacto real y verificable
- Perspectiva propia, no copia de fuente
- Mínimo 400 palabras de contenido sustancial
- Resumen claro en el frontmatter

### Radar
- Noticia de la semana con contexto propio
- Fuente identificada y confiable
- Contexto explicado en campo `context`

### Alertas
- Incidente confirmado o con alta credibilidad
- Tipo y status correctamente clasificados
- Resumen que explique impacto empresarial
- Fuente documentada

---

## Archivos de configuración de fuentes

| Archivo | Propósito |
|---|---|
| `data/sources/telegram_channels.json` | Lista de canales Telegram a monitorear |
| `data/sources/rss_sources.json` | Feeds RSS por categoría |
| `data/sources/newsletters.json` | Newsletters y boletines suscritos |

Formato esperado cuando se poblen:

```json
[
  {
    "name": "nombre de la fuente",
    "url": "https://...",
    "category": "AI | Seguridad | Mexico | General",
    "active": true
  }
]
```
