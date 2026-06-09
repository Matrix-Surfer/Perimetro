---
title: "Una página web puede saber qué otros sitios y apps tienes abiertos usando el tiempo de respuesta del disco"
date: "2026-06-09"
source: "The Hacker News"
link: "https://thehackernews.com/2026/06/new-frost-attack-lets-websites-track.html"
categoria: "Otro"
ambito: "Personas"
nivelAtencion: "Bajo"
status: "En monitoreo"
resumen: "Investigadores demostraron que una página web puede deducir qué sitios visitas y qué aplicaciones tienes abiertas midiendo variaciones en el tiempo de respuesta del disco sólido (SSD) de tu equipo, sin requerir ningún permiso especial del navegador. El ataque llamado FROST usa solo código estándar de páginas web. No hay explotación masiva reportada, pero es una técnica nueva de seguimiento invisible."
expuestos: "Usuarios de equipos con disco sólido (SSD) que visiten sitios que implementen esta técnica"
verificacion: "No hay acción inmediata disponible — seguir actualizaciones del navegador que mitiguen la técnica"
impacto: "Perfil de navegación y aplicaciones activas expuestos a sitios maliciosos sin consentimiento"
grc_activo: "Privacidad del usuario en sesiones de navegación"
grc_vector: "Análisis de tiempo de acceso al SSD desde JavaScript en el navegador"
grc_condicion: "Visitar un sitio que implemente la técnica FROST con una pestaña abierta durante tiempo suficiente"
grc_explotacion: "investigacion"
grc_alcance: "Usuarios de equipos modernos con SSD, especialmente quienes naveguen en sitios de terceros no confiables"
grc_confianza: "media"
publicacion: "published"
---

## Qué ocurrió

Investigadores de la Universidad de Tecnología de Graz demostraron una nueva técnica de seguimiento invisible: una página web puede deducir qué otros sitios visitas y qué aplicaciones tienes abiertas, midiendo variaciones en el tiempo de respuesta de tu disco sólido (SSD). El ataque, llamado FROST, usa solo código estándar de páginas web —sin extensiones, sin permisos especiales, sin instalar nada— y funciona en segundo plano mientras el usuario tiene abierta la pestaña.

## Quién está expuesto

Usuarios de equipos modernos con disco sólido (SSD) —la mayoría de computadoras actuales— que visiten sitios que implementen esta técnica. No hay explotación masiva reportada todavía.

## Impacto potencial

Un sitio puede construir un perfil de hábitos de navegación y aplicaciones activas sin que el usuario lo sepa. Esta información puede usarse para publicidad invasiva o para identificar objetivos de valor: detectar que tienes abierta una sesión bancaria, una herramienta de acceso remoto corporativo o una aplicación de pagos.
