# PROJECT.md

# Perímetro

## Descripción

Perímetro es un proyecto editorial independiente enfocado en inteligencia artificial, ciberseguridad y riesgos tecnológicos para empresas mexicanas.

El sitio traduce complejidad técnica en contexto empresarial accionable mediante:

* análisis editorial propio
* curación semanal (Radar)
* monitoreo de incidentes (Alertas)

---

## Audiencia objetivo

**Primaria:**
* MiPYMES mexicanas
* Dueños de negocio y directivos
* Responsables de TI
* Consultores independientes

**Secundaria:**
* Profesionales de ciberseguridad
* Analistas y equipos IT pequeños
* Tomadores de decisión tecnológica

---

## Problema que resuelve

La mayoría de medios tecnológicos priorizan velocidad sobre contexto, replican comunicados sin análisis, o usan lenguaje demasiado técnico para su audiencia.

Perímetro contextualiza, interpreta y conecta tecnología con operación empresarial real en México.

---

## Secciones

### Análisis
Contenido editorial largo con perspectiva propia. Profundidad e interpretación sobre AI, ciberseguridad y tecnología empresarial.

### Radar
Resumen semanal curado. Señales relevantes de la semana con contexto propio.

### Alertas
Incidentes de ciberseguridad relevantes para empresas mexicanas. Monitoreo, contexto, impacto empresarial.

---

## Stack técnico

| Componente | Tecnología |
|---|---|
| Framework | Astro 6 |
| Contenido | Markdown Collections |
| Hosting | Cloudflare Pages |
| Repositorio | GitHub |
| Dominio | jsilva.io |

---

## Estado actual del proyecto

### Completado

- [x] Arquitectura base con Astro 6
- [x] Collections dinámicas: analisis, alertas, radar
- [x] Páginas índice dinámicas para las tres secciones
- [x] Rutas dinámicas individuales (`[slug].astro`) para las tres secciones
- [x] Diseño visual editorial implementado
- [x] SEO base: title, description, canonical, OpenGraph, Twitter Card
- [x] Sitemap automático (`/sitemap-index.xml`)
- [x] RSS feeds: `/analisis/rss.xml`, `/alertas/rss.xml`, `/radar/rss.xml`
- [x] `robots.txt`
- [x] Infraestructura de pipeline editorial (`/scripts`, `/drafts`, `/inbox`, `/data`)
- [x] Script de creación de alertas (`scripts/create-alert.js`)
- [x] Documentación editorial (`EDITORIAL_GUIDE.md`, `CONTENT_PIPELINE.md`)

### Pendiente

- [ ] Newsletter — infraestructura de suscripción
- [ ] Automatización editorial — ingesta desde Telegram/RSS
- [ ] Workflows IA — clasificación y draft automático
- [ ] Dashboards privados — monitoreo interno
- [ ] Contenido premium
- [ ] Servicios de consultoría

---

## Objetivos técnicos permanentes

* Sitio extremadamente rápido
* Excelente SEO
* Mínimo JavaScript en cliente
* Bajo costo operativo
* Arquitectura simple y mantenible
* Escalabilidad editorial sin fricción técnica
