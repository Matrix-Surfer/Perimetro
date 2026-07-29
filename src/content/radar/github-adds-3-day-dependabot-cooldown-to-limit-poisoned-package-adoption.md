---
title: "Las actualizaciones automáticas de dependencias ya no llegan de forma instantánea a los proyectos de software"
pubDate: 2026-07-27
source: "The Hacker News"
link: "https://thehackernews.com/2026/07/github-adds-3-day-dependabot-cooldown.html"
category: "Seguridad"
señal: "GitHub agregó una espera obligatoria de al menos tres días antes de que las actualizaciones automáticas de dependencias de software (Dependabot) lleguen a un proyecto, con la opción de configurar un plazo mayor."
supuesto: "Que una actualización de software es segura por el solo hecho de provenir de una fuente oficial y llegar de forma automática apenas se publica."
observación: "Qué política de espera o revisión tiene el propio proceso de actualización de dependencias de la organización antes de aplicarlas automáticamente a sus proyectos."
context: "Un paquete de software recién publicado no ha tenido tiempo de que la comunidad detecte si algo salió mal, o si fue comprometido deliberadamente. Automatizar la adopción instantánea de cada actualización elimina justo ese margen de detección colectiva. La decisión de GitHub reconoce que la velocidad, en este caso, era parte del riesgo, no una ventaja."
grc_cambio: "Los grandes gestores de paquetes de software empiezan a incorporar una espera obligatoria antes de que una actualización se adopte automáticamente, en vez de confiar en la velocidad de distribución instantánea."
grc_paradigma: "Que una actualización de software, por venir de un registro oficial y llegar de forma automática, es segura desde el momento mismo de su publicación."
publicacion: "published"
---

## La señal

GitHub agregó a Dependabot, su herramienta de actualización automática de dependencias, una espera obligatoria de al menos tres días antes de abrir una solicitud de actualización sobre un proyecto, con la posibilidad de configurar un plazo mayor según las necesidades de cada equipo.

## El supuesto que se rompe

La idea de que una actualización de software es segura por el solo hecho de venir de un registro oficial y llegar de forma automática apenas se publica. Un paquete recién publicado no ha tenido tiempo de que la comunidad detecte un error o un compromiso deliberado; adoptarlo de inmediato elimina ese margen de detección colectiva.

## Qué observar

Qué política de espera o revisión tiene el propio proceso de actualización de dependencias de la organización antes de aplicarlas de forma automática a sus proyectos de software, y si ese plazo es consistente con el riesgo que representa introducir código de terceros sin revisión previa.
