# Content Schemas — Perímetro

Referencia completa de los schemas de Astro Content Collections.

Definidos en: `src/content.config.ts`

---

## Collection: analisis

**Directorio:** `src/content/analisis/`
**Ruta pública:** `/analisis/[slug]`
**RSS:** `/analisis/rss.xml`

### Campos

| Campo | Tipo | Requerido | Descripción |
|---|---|---|---|
| `title` | string | Sí | Título del artículo |
| `date` | string | Sí | Fecha de publicación en formato `YYYY-MM-DD` |
| `categoria` | string | Sí | Categoría editorial (ej. "Ciberseguridad", "AI Empresarial") |
| `tags` | string[] | Sí | Array de etiquetas |
| `resumen` | string | Sí | Resumen corto. Se usa en SEO description y en listados |
| `tiempo_lectura` | number | Sí | Tiempo estimado de lectura en minutos |
| `destacado` | boolean | No | Si es `true`, aparece como artículo destacado en el home |
| `publicacion` | enum | No | Estado editorial. Default: `published` |

### Ejemplo de frontmatter

```markdown
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

### Notas

- Solo un artículo debe tener `destacado: true` a la vez. Si hay varios, se usa el primero en orden de fecha.
- `date` en formato ISO (`YYYY-MM-DD`) entre comillas para que Zod lo valide como string.
- El `slug` de la ruta es el nombre del archivo sin `.md`.

### Creación rápida

```bash
node scripts/create-analysis.js
```

---

## Collection: alertas

**Directorio:** `src/content/alertas/`
**Ruta pública:** `/alertas/[slug]`
**RSS:** `/alertas/rss.xml`

### Campos

| Campo | Tipo | Requerido | Valores válidos |
|---|---|---|---|
| `title` | string | Sí | Título descriptivo del incidente |
| `date` | string | Sí | Fecha en formato `YYYY-MM-DD` |
| `tipo` | enum | Sí | Ver tabla de tipos |
| `status` | enum | Sí | Ver tabla de status |
| `resumen` | string | Sí | Descripción breve del incidente y su impacto |
| `publicacion` | enum | No | Estado editorial. Default: `published` |

### Tipos válidos (`tipo`)

| Valor | Uso | Color en UI |
|---|---|---|
| `Defacement` | Modificación no autorizada de sitios web | Rojo |
| `Filtración` | Exposición de datos o documentos | Naranja/Amarillo |
| `Ransomware` | Secuestro de sistemas o datos | Naranja |
| `Phishing` | Campañas de suplantación | Morado |
| `Dark Forum` | Menciones en foros clandestinos | Gris |
| `Otro` | Incidentes que no encajan en las categorías anteriores | Gris neutro |

### Status válidos (`status`)

| Valor | Uso |
|---|---|
| `Activa` | Incidente confirmado y en curso |
| `En monitoreo` | Señal detectada, sin confirmación total |
| `Resuelta` | Incidente resuelto o sin impacto confirmado |

### Ejemplo de frontmatter

```markdown
---
title: "Subdominio de la Secretaría de Administración y Finanzas de CDMX comprometido"
date: "2025-05-15"
tipo: "Defacement"
status: "Activa"
resumen: "El grupo Chronus modificó páginas públicas de un subdominio gubernamental..."
publicacion: "published"
---
```

### Estructura de cuerpo recomendada

```markdown
## Contexto

Descripción detallada del incidente, actores involucrados, método detectado.

## Impacto potencial

Qué tipo de empresas o usuarios pueden verse afectados y cómo.

## Recomendaciones

Acciones concretas que una empresa mexicana puede tomar.
```

### Creación rápida

Usar el script interactivo:

```bash
node scripts/create-alert.js
```

---

## Collection: radar

**Directorio:** `src/content/radar/`
**Ruta pública:** `/radar/[slug]`
**RSS:** `/radar/rss.xml`

### Campos

| Campo | Tipo | Requerido | Descripción |
|---|---|---|---|
| `title` | string | Sí | Titular de la noticia o señal |
| `source` | string | Sí | Nombre de la fuente (ej. "MIT Tech Review", "tldrsec") |
| `category` | string | Sí | Categoría del ítem. Determina el color del badge |
| `context` | string | Sí | Contexto editorial propio. Qué significa para empresas mexicanas |
| `pubDate` | date | Sí | Fecha de publicación. Sin comillas en YAML para que se parsee como Date |
| `publicacion` | enum | No | Estado editorial. Default: `published` |

### Categorías y colores en UI

| Valor | Color |
|---|---|
| `AI` | Cyan (acento principal) |
| `Seguridad` | Rojo (acento secundario) |
| Cualquier otro | Gris neutro |

### Ejemplo de frontmatter

```markdown
---
title: "Nueva técnica de ataque via QR codes afecta usuarios corporativos"
source: "tldrsec"
category: "Seguridad"
context: "Atacantes están usando códigos QR en correos aparentemente legítimos para robar credenciales. Cualquier empresa que use Microsoft 365 o Google Workspace está en riesgo."
pubDate: 2025-05-13
publicacion: "published"
---
```

### Notas

- `pubDate` sin comillas en YAML. Con comillas se interpreta como string y falla el schema (`z.coerce.date()`).
- El campo `context` es el valor editorial central del Radar. Debe explicar la implicación para empresas mexicanas, no solo repetir el titular.
- Las fechas se muestran en español (ej. "13 de mayo de 2025") usando `toLocaleDateString` con `timeZone: 'UTC'`.

### Creación rápida

```bash
node scripts/create-radar.js
```

---

## Convenciones generales

### Slugs

El slug de cada artículo es el nombre del archivo sin la extensión `.md`.

Convención: kebab-case en español sin acentos.

```
cuando-la-ia-reduce-el-costo-del-ciberataque.md
subdominio-secretaria-cdmx.md
qr-phishing-corporativo.md
```

### Fechas

- `analisis` y `alertas`: campo `date` como string `"YYYY-MM-DD"` (con comillas)
- `radar`: campo `pubDate` como date YAML sin comillas (`YYYY-MM-DD`)

Esta diferencia existe porque analisis/alertas usan `z.string()` y radar usa `z.coerce.date()` en el schema.

### Campo publicacion (estado editorial)

Todas las colecciones tienen el campo `publicacion` para control de visibilidad. Solo el contenido con `publicacion: "published"` aparece en el sitio.

| Valor | Comportamiento |
|---|---|
| `published` | Visible públicamente |
| `draft` | Oculto. Pendiente de revisión y edición |
| `review` | Oculto. En revisión editorial |
| `rejected` | Oculto. Descartado permanentemente |

El campo es opcional. Si no está presente, el default es `published` — esto preserva el comportamiento del contenido creado antes de que existiera el campo.

El contenido generado automáticamente por `generate-drafts.js` siempre incluye `publicacion: "draft"`.

Para cambiar el estado de un draft usar:

```bash
node scripts/publish.js
```

**Nota sobre `alertas`:** esta colección ya tiene un campo `status` para el estado del incidente (`Activa / En monitoreo / Resuelta`). El campo `publicacion` es independiente y controla únicamente la visibilidad editorial.

---

### Agregar una nueva categoría de radar

Si se necesita una categoría nueva con color diferente, editar el mapping en:

- `src/pages/radar/index.astro` — `categoryClass`
- `src/pages/radar/[slug].astro` — `categoryClass`
- `src/pages/index.astro` — `categoryClass`
