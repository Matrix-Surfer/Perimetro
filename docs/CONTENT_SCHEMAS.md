# Content Schemas — Perímetro

Referencia de campos de Astro Content Collections. Definidos en `src/content.config.ts`.

La fuente de verdad editorial es:
- [`docs/ALERTAS_FRAMEWORK.md`](ALERTAS_FRAMEWORK.md) — estructura, controles y criterios de ALERTAS
- [`docs/RADAR_FRAMEWORK.md`](RADAR_FRAMEWORK.md) — estructura, filtros y criterios de RADAR

---

## Collection: analisis

**Directorio:** `src/content/analisis/` | **Ruta:** `/analisis/[slug]`

| Campo | Tipo | Requerido | Descripción |
|---|---|---|---|
| `title` | string | Sí | Título del artículo |
| `date` | string | Sí | `"YYYY-MM-DD"` entre comillas |
| `categoria` | string | Sí | Categoría editorial (ej. "Ciberseguridad", "AI Empresarial") |
| `tags` | string[] | Sí | Array de etiquetas |
| `resumen` | string | Sí | Descripción breve para SEO y listados |
| `tiempo_lectura` | number | Sí | Minutos estimados de lectura |
| `destacado` | boolean | No | `true` → aparece destacado en el home |
| `publicacion` | enum | No | Estado editorial. Default: `published` |

```yaml
---
title: "Cuando la IA reduce el costo del ciberataque"
date: "2026-05-15"
categoria: "Ciberseguridad"
tags: ["IA", "ciberseguridad", "PYME", "México"]
resumen: "La inteligencia artificial está reduciendo el costo y la complejidad de muchos ciberataques..."
tiempo_lectura: 5
destacado: true
publicacion: "published"
---
```

Creación: `node scripts/create-analysis.js`

---

## Collection: alertas

**Directorio:** `src/content/alertas/` | **Ruta:** `/alertas/[slug]`

| Campo | Tipo | Requerido | Descripción |
|---|---|---|---|
| `title` | string | Sí | Mecanismo o patrón del ataque — no la marca |
| `date` | string | Sí | `"YYYY-MM-DD"` entre comillas |
| `source` | string | Sí | Nombre de la fuente |
| `link` | string | No | URL de la fuente original |
| `categoria` | enum | Sí | Ver tabla de valores válidos |
| `ambito` | enum | Sí | `"Personas"` \| `"Organizaciones"` \| `"Mixto"` |
| `nivelAtencion` | enum | Sí | `"Bajo"` \| `"Medio"` \| `"Alto"` \| `"Crítico"` |
| `status` | enum | Sí | `"Activa"` \| `"En monitoreo"` \| `"Resuelta"` |
| `resumen` | string | Sí | 2-3 oraciones: hecho + quién expuesto + qué verificar |
| `publicacion` | enum | Sí | `draft` \| `review` \| `published` \| `rejected` |
| `expuestos` | string | Interno | Quién está expuesto — control editorial, no se renderiza en UI |
| `verificacion` | string | Interno | Qué verificar hoy — control editorial, no se renderiza en UI |
| `impacto` | string | Interno | Consecuencia si no se verifica — control editorial, no se renderiza en UI |

**Valores válidos para `categoria`:**

| Valor | Uso |
|---|---|
| `Vulnerabilidad` | CVE explotado, falla activa en software |
| `Malware` | Programa malicioso en distribución activa |
| `Fuga de datos` | Brecha o exposición de datos confirmada |
| `Phishing` | Campaña de engaño activa |
| `Fraude` | Fraude financiero o por ingeniería social |
| `Terceros` | Compromiso vía proveedor o cadena de suministro |
| `IA` | Riesgo relacionado con sistemas de inteligencia artificial |
| `IoT/OT` | Dispositivos conectados o sistemas industriales |
| `Otro` | Incidentes que no encajan en las categorías anteriores |

**Criterio para `nivelAtencion`:**
- **Crítico**: Explotación activa, sin parche, impacto masivo
- **Alto**: Explotación confirmada o riesgo amplio
- **Medio**: Riesgo real con mitigaciones disponibles
- **Bajo**: Señal temprana, riesgo acotado

```yaml
---
title: "Campaña activa de facturas falsas busca provocar llamadas a centros de fraude"
date: "2026-06-03"
source: "Malwarebytes Labs"
link: "https://..."
categoria: "Fraude"
ambito: "Mixto"
nivelAtencion: "Alto"
status: "Activa"
resumen: "Una campaña activa envía correos con avisos falsos de infracción de derechos de autor..."
expuestos: "Personas que reciben facturas no solicitadas; empleados de cuentas por pagar."
verificacion: "Confirmar si alguien llamó al número incluido en el correo."
impacto: "Pérdida financiera directa o instalación de acceso remoto en el dispositivo."
publicacion: "published"
---
```

**Estructura del cuerpo:**

```markdown
## Qué ocurrió
[1 párrafo. Solo hechos. Sin análisis ni especulación.]

## Quién está expuesto
### Personas
### Organizaciones

## Qué verificar
[Acciones concretas. No playbook técnico.]

## Impacto potencial
[Consecuencia de negocio si aplica y no se verifica.]
```

**Nota sobre `tipo` (legacy):** existe en alertas publicadas antes de junio 2026. No usar en alertas nuevas. El campo canónico es `categoria`.

Creación: `node scripts/create-alert.js`

---

## Collection: radar

**Directorio:** `src/content/radar/` | **Ruta:** `/radar/[slug]`

| Campo | Tipo | Requerido | Descripción |
|---|---|---|---|
| `title` | string | Sí | Nombra el cambio estructural — no la noticia ni la empresa |
| `pubDate` | date | Sí | Sin comillas en YAML (`YYYY-MM-DD`) — `z.coerce.date()` |
| `source` | string | Sí | Nombre de la fuente |
| `link` | string | No | URL de la fuente original |
| `category` | enum | Sí | `"AI"` \| `"Seguridad"` |
| `señal` | string | Interno | El cambio estructural en una frase — control editorial |
| `supuesto` | string | Interno | La creencia que se rompe, sin jerga — control editorial |
| `observación` | string | Interno | Qué vigilar, no qué hacer — control editorial |
| `context` | string | Sí | 2-3 oraciones. Termina en observación estratégica, nunca en instrucción. |
| `publicacion` | enum | Sí | `draft` \| `review` \| `published` \| `rejected` |

```yaml
---
title: "Los agentes de IA llegan a las empresas antes de que alguien defina qué pueden hacer"
pubDate: 2026-06-03
source: "Dark Reading"
link: "https://..."
category: "AI"
señal: "Los agentes de IA se integran en operaciones antes de que existan criterios para supervisarlos."
supuesto: "El software hace lo que le pedimos — nada más, nada inesperado."
observación: "Qué agentes operan en la organización, a qué sistemas tienen acceso, y si existe registro de lo que hacen."
context: "Los agentes de IA pueden producir efectos que nadie autorizó — no por ataque externo, sino porque el sistema tomó decisiones inesperadas con acceso legítimo. La pregunta no es si son útiles: es si alguien sabe exactamente qué pueden hacer."
publicacion: "published"
---
```

**Estructura del cuerpo:**

```markdown
## La señal
[1-2 oraciones. El hecho desnudo. Qué está cambiando.]

## El supuesto que se rompe
[Qué creíamos que era cierto y ya no lo es. Sin jerga.]

## Qué observar
[No qué hacer. Qué vigilar. Cierra con observación estratégica.]
```

Creación: `node scripts/create-radar.js`

---

## Convenciones generales

### Fechas

- `analisis` y `alertas`: `date: "YYYY-MM-DD"` entre comillas → `z.string()`
- `radar`: `pubDate: YYYY-MM-DD` sin comillas → `z.coerce.date()`

### Slugs

Nombre del archivo sin `.md`. Kebab-case sin acentos.

### Campo `publicacion` — flujo editorial

| Valor | Quién lo asigna | Comportamiento |
|---|---|---|
| `draft` | `generate-drafts.js` | Oculto — pendiente de enriquecimiento |
| `review` | `enrich-drafts.js` | Oculto — pendiente de aprobación humana |
| `published` | `publish.js` | Visible públicamente |
| `rejected` | `publish.js` | Oculto permanentemente |
