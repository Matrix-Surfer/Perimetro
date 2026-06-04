---
title: "La falla de seguridad central en los asistentes de IA puede no tener solución técnica permanente"
pubDate: 2026-06-04
source: "Graham Cluley"
link: "https://grahamcluley.com/smashing-security-podcast-470/"
category: "AI"
señal: "Una investigación de Cornell sugiere que la inyección de instrucciones maliciosas en asistentes de IA —la técnica que hace que el asistente ejecute órdenes de un atacante— puede ser imposible de eliminar de forma permanente."
supuesto: "Los problemas de seguridad en la IA son de ingeniería: se descubren, se estudian, se corrigen. La pregunta es cuándo, no si."
observación: "Qué acciones pueden ejecutar los asistentes de IA que la organización ya usa —enviar correos, modificar archivos, consultar sistemas— y si esos permisos pueden limitarse antes de que alguien los explote."
context: "Las empresas conectan asistentes de IA a su correo, archivos y sistemas internos. Un atacante puede incrustar instrucciones maliciosas en un correo o documento que el asistente lee —y el asistente las ejecuta como si fueran del usuario legítimo. Si este problema no tiene solución técnica permanente, la pregunta no es cuándo se parcheará. La pregunta es qué permisos tiene el asistente y si esos permisos pueden reducirse."
grc_cambio: "prompt injection puede ser una propiedad estructural irresoluble en los LLMs"
grc_paradigma: "los problemas de seguridad en software se descubren, estudian y corrigen"
grc_horizonte: "meses"
grc_confianza: "media"
publicacion: "published"
---

## La señal

Un paper de Cornell concluye que la inyección de instrucciones (la técnica que permite a un atacante manipular un asistente de IA para que ejecute órdenes maliciosas) puede ser imposible de resolver de forma permanente. No es un error que se corrige. Es una propiedad del diseño actual de estos sistemas.

## El supuesto que se rompe

Los problemas de seguridad en tecnología son de ingeniería: se descubren, se estudian, se corrigen. Este supuesto aplica a casi todo el software conocido. Si aplica a los asistentes de IA, la pregunta es cuándo se parchea. Si no aplica, la pregunta es qué límites debe tener el asistente desde el principio —independientemente de cuándo llegue el parche.

## Qué observar

Qué sistemas internos tienen conectados los asistentes de IA que ya se usan en la organización. Qué acciones pueden ejecutar en nombre del usuario: enviar correos, crear eventos, modificar archivos, consultar bases de datos. Si un atacante lograra manipular al asistente con instrucciones maliciosas en un documento o correo, qué podría hacer con esos permisos.
