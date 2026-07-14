---
title: "Adobe corrige ocho fallas críticas en ColdFusion que permiten tomar control del servidor"
date: "2026-07-14"
source: "SecurityWeek"
link: "https://www.securityweek.com/adobe-patches-critical-coldfusion-vulnerabilities/"
categoria: "Vulnerabilidad"
ambito: "Organizaciones"
nivelAtencion: "Alto"
status: "En monitoreo"
resumen: "Adobe publicó actualizaciones para ocho fallas críticas en ColdFusion, una plataforma para crear aplicaciones web empresariales, que permiten ejecutar código no autorizado o elevar privilegios en el servidor. Adobe no tiene reporte de explotación activa, pero fallas similares del mismo producto fueron atacadas horas después de conocerse públicamente hace dos semanas."
expuestos: "Organizaciones con servidores ColdFusion 2025 (anterior a la actualización 11) o ColdFusion 2023 (anterior a la actualización 22)."
verificacion: "Confirmar la versión de ColdFusion instalada y aplicar la actualización correspondiente de inmediato; Adobe la clasificó con prioridad máxima."
impacto: "Un atacante podría tomar control del servidor, acceder a bases de datos conectadas o interrumpir el servicio de aplicaciones que dependen de ColdFusion."
grc_activo: "Servidores que ejecutan la plataforma ColdFusion para aplicaciones web empresariales"
grc_vector: "Ocho fallas distintas: recorrido de directorios, inyección de código, validación insuficiente de datos, autenticación faltante e inyección SQL, entre otras"
grc_condicion: "Tener un servidor ColdFusion 2025 anterior a la actualización 11, o ColdFusion 2023 anterior a la actualización 22, sin aplicar el parche"
grc_alcance: "Organizaciones con servidores ColdFusion expuestos a Internet; Adobe advierte que fallas similares fueron explotadas rápidamente en el pasado reciente"
publicacion: "published"
---

## Qué ocurrió

Adobe publicó actualizaciones de seguridad para ocho fallas críticas en ColdFusion, una plataforma que muchas organizaciones usan para construir aplicaciones web empresariales. Las fallas permiten, entre otras cosas, ejecutar código no autorizado en el servidor o acceder a información sin las credenciales correctas. Adobe dice no tener conocimiento de que estas fallas específicas ya se estén explotando, pero advierte que fallas similares en el mismo producto fueron atacadas apenas horas después de conocerse públicamente hace dos semanas.

## Quién está expuesto

### Para organizaciones

Empresas con servidores ColdFusion 2025 (anterior a la actualización 11) o ColdFusion 2023 (anterior a la actualización 22), especialmente si están expuestos directamente a Internet.

## A considerar

Adobe clasificó este boletín con prioridad 1, su nivel más alto, lo que significa que recomienda aplicar el parche tan pronto como sea posible, sin esperar a un ciclo de mantenimiento programado.

## Impacto potencial

Dado el historial reciente de explotación rápida en fallas similares de ColdFusion, retrasar la actualización deja al servidor expuesto a que un atacante tome control completo, acceda a bases de datos conectadas o interrumpa el servicio de las aplicaciones que dependen de esa plataforma.
