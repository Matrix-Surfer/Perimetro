# ARCHITECTURE.md

# Arquitectura del Proyecto

## Stack principal

* Astro 6
* Markdown Collections
* Cloudflare Pages
* GitHub

---

# Filosofía de arquitectura

El proyecto utiliza arquitectura estática orientada a contenido.

Objetivos:

* máximo rendimiento,
* excelente SEO,
* simplicidad,
* mantenibilidad,
* bajo JavaScript.

---

# Estructura principal

```bash
src/
├── components/
├── content/
├── layouts/
├── pages/
└── styles/
```

---

# Components

## Objetivo

Contener componentes reutilizables.

Ejemplos:

* Nav.astro
* Footer.astro

---

# Content

## Objetivo

Contener TODO el contenido editorial.

```bash
content/
├── analisis/
├── radar/
└── alertas/
```

---

# Collections

Definidas en:

```bash
src/content.config.ts
```

Colecciones actuales:

* analisis
* radar
* alertas

---

# Layouts

## Base.astro

Contiene:

* head
* meta tags
* carga global CSS
* estructura HTML principal

---

# Pages

Responsables del render de rutas.

Ejemplos:

* /
* /analisis
* /alertas
* /radar

---

# Estrategia editorial

Todo el contenido debe renderizarse dinámicamente desde collections.

Evitar hardcode.

---

# Estrategia SEO

Priorizar:

* metadata dinámica
* OpenGraph
* RSS
* sitemap
* canonical URLs
* performance

---

# Diseño

El diseño debe mantener:

* estética editorial,
* apariencia cyber-minimal,
* fondo oscuro,
* tipografía fuerte,
* enfoque visual limpio.

---

# Restricciones técnicas

NO usar React innecesariamente.

NO convertir el sitio en SPA.

NO agregar dependencias pesadas sin justificación.

NO mezclar contenido y lógica excesivamente.

---

# Objetivo de escalabilidad

Preparar el proyecto para:

* automatización editorial,
* integración con IA,
* pipelines RSS,
* newsletter,
* dashboards,
* y futuras APIs.
