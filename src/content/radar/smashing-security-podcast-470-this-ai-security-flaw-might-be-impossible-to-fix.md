---
title: "La falla de seguridad central en los asistentes de IA puede no tener solución técnica permanente"
pubDate: 2026-06-04
source: "Graham Cluley"
link: "https://grahamcluley.com/smashing-security-podcast-470/"
category: "AI"
señal: "Una investigación de Cornell sugiere que la técnica que permite a un atacante incrustar instrucciones maliciosas en documentos o correos para que un asistente de IA los ejecute puede ser imposible de corregir de forma permanente."
supuesto: "Los problemas de seguridad en la IA son de ingeniería: se descubren, se estudian y se corrigen. La pregunta es cuándo, no si."
observación: "Qué permisos tienen los asistentes de IA que la organización ya usa — enviar correos, modificar archivos, consultar sistemas — y si esos permisos pueden limitarse antes de que alguien los explote."
context: "Las empresas conectan asistentes de IA a su correo, archivos y sistemas internos. Un atacante puede incrustar instrucciones en un correo o documento que el asistente lee — y el asistente las ejecuta como si fueran del usuario legítimo. Si este problema no tiene solución técnica permanente, la pregunta no es cuándo se parcheará: es qué permisos tiene el asistente hoy y si pueden reducirse."
grc_cambio: "la manipulación de instrucciones en asistentes de IA puede no tener solución técnica permanente"
grc_paradigma: "los problemas de seguridad en software son de ingeniería y eventualmente se corrigen"
grc_horizonte: "años"
grc_confianza: "media"
publicacion: "published"
---

## La señal

Un paper de Cornell concluye que la técnica de manipulación de instrucciones —la que permite a un atacante incrustar órdenes en un documento o correo que el asistente luego ejecuta como si fueran legítimas— puede ser imposible de resolver de forma permanente. No es un error que se corrige con una actualización. Es una propiedad del diseño actual de estos sistemas.

## El supuesto que se rompe

Los problemas de seguridad en tecnología son de ingeniería: se descubren, se estudian, se corrigen. Este supuesto aplica a casi todo el software conocido y moldea cómo las organizaciones esperan que los problemas de la IA se resuelvan. Si aplica a los asistentes de IA, la pregunta es cuándo se parchea. Si no aplica, la pregunta es qué límites debe tener el asistente desde el principio — independientemente de si llega un parche.

## Qué observar

Qué sistemas internos tienen conectados los asistentes de IA que ya se usan en la organización. Qué acciones pueden ejecutar en nombre del usuario: enviar correos, crear eventos, modificar archivos, consultar bases de datos. Si un atacante lograra incrustar instrucciones maliciosas en un documento o correo, qué podría hacer exactamente con esos permisos.
