---
title: "El modelo de IA presentado como 'seguro' fue vulnerado en días — las garantías de seguridad de IA no son certificaciones técnicas"
pubDate: 2026-06-23
source: "Schneier on Security"
link: "https://www.schneier.com/blog/archives/2026/06/anthropics-fable-5-model-jailbroken-within-days.html"
category: "AI"
señal: "Fable 5, el modelo que Anthropic diseñó específicamente para no poder usarse en ciberataques, fue jailbreakeado por investigadores externos días después de su lanzamiento."
supuesto: "Si el proveedor de un modelo de IA dice que tiene controles que impiden ciertos usos, esos controles son verificables y confiables."
observación: "Qué decisiones de riesgo tomó la organización asumiendo que los controles de seguridad de sus modelos de IA funcionarían como prometía el proveedor — y si existe forma de auditarlos."
context: "Fable 5 es la versión de Anthropic diseñada con guardrails para evitar que pudiera usarse en la creación de ciberataques. Investigadores externos eliminaron esas restricciones en días. El incidente no es sobre un modelo específico: es sobre lo que significa confiar en garantías de seguridad de IA que no pueden auditarse externamente."
grc_cambio: "Los controles de seguridad en modelos de IA de vanguardia son capas de diseño que pueden removerse — no arquitectura que hace ciertos usos técnicamente imposibles."
grc_paradigma: "Un modelo de IA certificado como seguro por su proveedor ofrece garantías técnicas verificables y confiables para uso en entornos sensibles."
grc_horizonte: "meses"
grc_confianza: "alta"
publicacion: "published"
---

## La señal

Fable 5, el modelo que Anthropic presentó como la versión segura de su sistema Mythos — diseñado con controles específicos para evitar que pudiera usarse en la creación de ciberataques — fue vulnerado por investigadores externos días después de su lanzamiento. Sus restricciones de seguridad fueron eliminadas.

## El supuesto que se rompe

Cuando un proveedor de IA dice que su modelo "no puede hacer X", ese "no puede" se asume técnico y absoluto. Lo que muestra el caso de Fable 5 es algo distinto: los controles de seguridad en modelos de IA son capas de diseño que pueden removerse, no arquitectura que hace ciertos resultados imposibles. La diferencia importa: si la organización tomó decisiones de riesgo — qué accesos darle al modelo, qué datos exponerle, qué procesos automatizar — basándose en garantías de seguridad del proveedor, esas decisiones descansaban sobre una promesa que no pudo verificarse de forma independiente.

## Qué observar

Qué asunciones de seguridad sobre los modelos de IA que usa la organización fueron evaluadas y cuáles fueron aceptadas sin verificación. Si un proveedor dice que su modelo no filtra datos a terceros, no accede a sistemas sin autorización o no puede usarse para fines indebidos — ¿existe alguna forma de auditarlo, o es una declaración de diseño que hay que creer?
