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
  (clasificación por keywords; los descartados se eliminan)
        |
        v
inbox/rss/radar/        inbox/rss/alertas/
        |                       |
        v                       v
scripts/generate-drafts.js
  (genera Markdown con frontmatter vacío en español)
  (mueve cada JSON procesado a inbox/rss/processed/)
        |
        v
src/content/radar/              src/content/alertas/
  publicacion: "draft"            publicacion: "draft"
  title en inglés                 title en inglés
  todos los campos vacíos         todos los campos vacíos
        |
        v
Enriquecimiento manual (Claude Code)
  — traduce title y resumen al español
  — aplica framework GRC (señal/supuesto/observación o ficha GRC)
  — escribe cuerpo editorial completo
  — cambia publicacion a "review"
        |
        v
src/content/radar/              src/content/alertas/
  publicacion: "review"           publicacion: "review"
        |
        v
Revisión humana obligatoria
  (verificar información, ajustar tono, aprobar)
        |
        v
node scripts/publish.js
  (cambia publicacion a "published" o "rejected")
        |
        v
git push → Cloudflare Pages (publicación automática)
```

---

## Ejecución

**Pipeline automático (pasos 1-3):**
```bash
node scripts/run-pipeline.js
```

**Paso a paso:**
```bash
node scripts/fetch-rss.js        # 1. Descargar feeds
node scripts/classify-rss.js    # 2. Clasificar en radar/alertas (descartados se eliminan)
node scripts/generate-drafts.js  # 3. Generar drafts vacíos + limpiar inbox
# 4. Enriquecimiento manual con Claude Code (traducción + GRC + cuerpo)
node scripts/publish.js          # 5. Publicar ítems en revisión
```

**Validación (independiente del pipeline):**
```bash
node scripts/validate-content.js
```

Los primeros tres scripts son idempotentes: ejecutarlos múltiples veces no genera duplicados. El script de enriquecimiento solo procesa archivos con `publicacion: "draft"`.

---

## Estado actual

El pipeline corre **manualmente**. El cron del sistema está desactivado.

El flujo operativo es: `run-pipeline.js` (fetch → classify → generate) → enriquecimiento manual con Claude Code → `publish.js`.

Los scripts `normalize-risk.js` y `enrich-drafts.js` están disponibles como herramientas opcionales pero no forman parte del flujo regular. El enriquecimiento editorial — traducción al español, ficha GRC, cuerpo completo — lo hace Claude Code directamente sobre los drafts.

Hoja de ruta:
- **Futuro:** evaluar n8n para orquestación visual del pipeline completo

---

## Scripts

| Script | Entrada | Salida |
|---|---|---|
| `scripts/run-pipeline.js` | — | Ejecuta los 6 pasos en secuencia |
| `scripts/fetch-rss.js` | `data/sources/rss_sources.json` | `inbox/rss/*.json` |
| `scripts/classify-rss.js` | `inbox/rss/*.json` | `inbox/rss/{radar,alertas,discard}/` |
| `scripts/generate-drafts.js` | `inbox/rss/{radar,alertas}/` | `src/content/{radar,alertas}/*.md` con `publicacion: "draft"` |
| `scripts/normalize-risk.js` | `src/content/{radar,alertas}/*.md` con `publicacion: "draft"` | Mismos archivos con campos `grc_*` inyectados y `publicacion: "normalized"` |
| `scripts/enrich-drafts.js` | `src/content/{radar,alertas}/*.md` con `publicacion: "normalized"` | Mismos archivos con narrativa editorial completa y `publicacion: "review"` |
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

Usa arrays de keywords para mover cada JSON a una subcarpeta. El orden de evaluación es:

1. **discard** — ruido editorial descartado automáticamente:
   - Webinars, recaps semanales, podcasts (ISC Stormcast), summits, memoriales
   - Avisos CISA para dispositivos OT/ICS industriales: ABB, Schneider Electric, Siemens Energy, Rockwell, Eppendorf, etc.
2. **alertas** — amenazas operativas activas: ransomware, exploit, breach, CVE, zero-day, phishing, malware, leak, etc.
3. **radar** — todo lo demás: tendencias de AI, herramientas, reportes, seguridad general, noticias sin incidente activo

Las alertas tienen prioridad sobre radar. El descarte tiene prioridad sobre todo.

---

## Generación de drafts (generate-drafts.js)

Para cada JSON en `inbox/rss/radar/` y `inbox/rss/alertas/`, genera un archivo `.md` compatible con el schema de Astro Collections.

**Radar** detecta:
- `category`: "AI" o "Seguridad" por keywords
- `context`: placeholder — se enriquece en el paso siguiente

**Alertas** detecta:
- `tipo`: Ransomware / Phishing / Defacement / Dark Forum / Filtración / Otro
- `status`: "Activa" si hay señales de explotación en curso, sino "En monitoreo"
- `resumen`: placeholder — se enriquece en el paso siguiente

Todos los drafts salen con `publicacion: "draft"` y secciones marcadas como "Pendiente".

---

## Normalización GRC (normalize-risk.js)

Primer paso LLM del pipeline. Extrae una ficha GRC estructurada de cada draft antes de la narrativa editorial.

**Requiere:** variable de entorno `ANTHROPIC_API_KEY`. Temperatura: 0.1 (extracción, no generación).

**Radar extrae:**
- `grc_cambio` — qué está cambiando estructuralmente
- `grc_paradigma` — qué supuesto queda obsoleto
- `grc_horizonte` — `semanas | meses | años`
- `grc_confianza` — `alta | media | baja`

**Alertas extrae:**
- `grc_activo` — sistema o dato en riesgo
- `grc_vector` — método de explotación
- `grc_condicion` — qué necesita el atacante para que aplique
- `grc_explotacion` — `activa | poc_publica | investigacion`
- `grc_alcance` — quién está técnicamente expuesto
- `grc_confianza` — `alta | media | baja`

**Derivación automática:** `nivelAtencion` se infiere desde `grc_explotacion`:
- `activa` → `Alto` (el editor puede escalar a Crítico si el alcance lo justifica)
- `poc_publica` → `Medio`
- `investigacion` → `Bajo`

**Output:** archivos procesados quedan con `publicacion: "normalized"`. Solo procesa archivos con `publicacion: "draft"`.

---

## Enriquecimiento editorial (enrich-drafts.js)

Segundo paso LLM del pipeline. Genera la narrativa editorial usando la ficha GRC como base.

**Requiere:** variable de entorno `ANTHROPIC_API_KEY`. Modelo: `claude-haiku-4-5`.

**Variables de entorno opcionales:**
- `ANTHROPIC_MODEL` — override del modelo (default: `claude-haiku-4-5-20251001`)

**Radar genera:** campos `señal`, `supuesto`, `observación`, `context` y cuerpo completo (3 secciones: La señal / El supuesto que se rompe / Qué observar). Tono staccato, lenguaje de directivo — nunca instrucciones operativas.

**Alertas genera:** campos `resumen`, `expuestos`, `verificacion`, `impacto` y cuerpo completo (4 secciones: Qué ocurrió / Quién está expuesto / A considerar (opcional) / Impacto potencial). Lenguaje ciudadano — sin jerga técnica.

**Reglas del LLM:**
- No inventa datos ni información nueva
- Ritmo staccato: oraciones cortas, un concepto por oración
- Sin términos técnicos sin traducción

**Output:** archivos procesados quedan con `publicacion: "review"`. Procesa archivos con `publicacion: "draft"` o `"normalized"`.

**Este script no reemplaza la revisión humana.** Es una capa de claridad y síntesis antes de que el editor revise.

---

## Orquestador (run-pipeline.js)

Ejecuta los seis pasos del pipeline en orden, deteniendo en cualquier fallo:

```
[fetch-rss]  OK
[classify]   OK
[generate]   OK
[publish]    OMITIDO (modo no interactivo)
```

Los pasos `normalize` y `enrich` no están en el orquestador — se ejecutan manualmente.
- Si hay `PIPELINE_NONINTERACTIVE=1`, el paso `publish` se omite (útil para automatización)

---

## Validación de contenido (validate-content.js)

Valida los campos obligatorios de todos los archivos en `src/content/radar/` y `src/content/alertas/` contra el schema Zod exacto.

**Radar valida:** `title`, `pubDate` (fecha válida), `source`, `category`, `context`

**Alertas valida:** `title`, `date` (formato YYYY-MM-DD), `categoria` (enum), `status` (enum), `resumen`

Salida:
```
[OK] archivo.md
[ERROR] archivo.md → motivo
```

Exit code 1 si hay errores — apto para pre-publicación manual.

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
- Errores de API en enrich (429, 503) reintentan hasta 3 veces con backoff; si fallan, el archivo se omite y continúa con el siguiente

---

## Fuentes actuales

| Fuente | Categoría | Tipo |
|---|---|---|
| Krebs on Security | Seguridad | Periodismo independiente |
| The Hacker News | Seguridad | Noticias |
| Schneier on Security | Seguridad | Análisis independiente |
| Dark Reading | Seguridad | Noticias + análisis |
| BleepingComputer | Seguridad | Noticias |
| SecurityWeek | Seguridad | Noticias |
| Malwarebytes Labs | Seguridad | Investigación |
| The Register — Security | Seguridad | Noticias |
| Ars Technica — Security | Seguridad | Noticias + análisis |
| Wired — Security | Seguridad | Noticias + análisis |
| MIT Technology Review | AI / Tecnología | Análisis |
| Unit 42 — Palo Alto Networks | Seguridad / Threat Intel | Investigación propia |
| Cisco Talos Blog | Seguridad / Threat Intel | Investigación propia |

---

## Automatización (pendiente)

El cron del sistema está desactivado. Para reactivarlo cuando esté lista la API de Anthropic:

```bash
crontab -e
# Agregar:
*/30 * * * * PIPELINE_NONINTERACTIVE=1 ANTHROPIC_API_KEY=... /home/jess/.nvm/versions/node/v24.15.0/bin/node /home/jess/Proyectos/perimetro/scripts/run-pipeline.js >> /home/jess/Proyectos/perimetro/logs/cron.log 2>&1
```

**Nota:** usar la ruta absoluta de node porque cron no carga el PATH del usuario (nvm).

A futuro se evalúa n8n para orquestación visual del pipeline completo.

---

## Etapas futuras

- **Filtrado por relevancia México:** agregar campo `keywords` en `rss_sources.json` para pre-filtrar items antes de clasificar
- **Traducción automática de títulos:** agregar al flujo de enrich la traducción del título al español con el mismo LLM
- **Fuentes adicionales:** ingesta desde Telegram y newsletters
- **n8n:** orquestación visual como alternativa a los scripts Node.js
