---
title: "Falla crítica en Drupal bajo ataque activo — sitios web en riesgo"
date: "2026-05-22"
tipo: "Otro"
status: "Activa"
resumen: "Drupal confirmó que hackers están explotando activamente CVE-2026-9082, una inyección SQL crítica que permite acceso no autenticado, escalación de privilegios y ejecución de código remoto. Sitios con Drupal sin actualizar deben aplicar el parche de inmediato."
source: "BleepingComputer"
link: "https://www.bleepingcomputer.com/news/security/drupal-critical-sql-injection-flaw-now-targeted-in-attacks/"
publicacion: "published"
---

## Contexto

Drupal confirmó que atacantes están explotando activamente CVE-2026-9082, una vulnerabilidad de inyección SQL calificada como "altamente crítica". El fallo fue anunciado a principios de esta semana y ya tiene explotación activa documentada. Afecta sitios que corren Drupal con base de datos PostgreSQL y permite ejecución de código remoto, escalación de privilegios o extracción de información sin necesidad de autenticación.

## Impacto potencial

Cualquier sitio web en Drupal sin el parche aplicado está expuesto a toma de control completa por un atacante externo. No se requiere cuenta ni acceso previo — el ataque se puede lanzar directamente desde internet.

## Recomendaciones

Actualizar Drupal Core a la versión parcheada de inmediato. Verificar con el proveedor de hosting o desarrollador del sitio si la actualización ya fue aplicada.
