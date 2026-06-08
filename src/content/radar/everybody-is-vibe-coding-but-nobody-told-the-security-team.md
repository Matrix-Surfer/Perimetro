---
title: "El código generado por IA llega a producción sin que el equipo de seguridad lo haya revisado"
pubDate: 2026-06-08
source: "SecurityWeek"
link: "https://www.securityweek.com/everybody-is-vibe-coding-but-nobody-told-the-security-team/"
category: "Seguridad"
señal: "Desarrolladores y equipos no técnicos generan código con IA y lo despliegan a producción sin pasar por los controles de seguridad establecidos."
supuesto: "El código que llega a producción fue revisado por alguien que entiende sus implicaciones de seguridad."
observación: "Qué parte del código en producción fue generado con IA y si pasó por los mismos controles que el código escrito por humanos."
context: "La práctica llamada 'vibe coding' — generar código con IA de forma rápida y sin revisión profunda — ya no está solo en prototipos. Llega a sistemas en producción. El problema no es que el código sea malo: es que nadie diseñó los controles de seguridad pensando en código generado en minutos por herramientas que cualquier empleado puede usar. La pregunta no es si el equipo de desarrollo lo está haciendo — es si el equipo de seguridad siquiera sabe que está ocurriendo."
publicacion: "published"
---

## La señal

El "vibe coding" — usar herramientas de IA para generar código rápidamente, sin revisar a fondo lo que producen — migró de proyectos personales a sistemas empresariales en producción. No solo lo hacen los desarrolladores. Lo hacen analistas, equipos de operaciones y personas sin formación técnica que descubren que pueden construir herramientas internas con IA en horas.

## El supuesto que se rompe

Los procesos de revisión de código asumen que alguien con criterio técnico revisó cada línea antes de que llegara a producción. Ese supuesto ya no se sostiene. El código generado por IA puede contener fallas de seguridad, dependencias vulnerables o lógica incorrecta que nadie detectó porque el proceso de revisión nunca fue diseñado para este volumen ni para este tipo de origen.

## Qué observar

Si la organización tiene equipos que usan herramientas de IA para generar código, vale preguntarse: ¿ese código pasa por las mismas revisiones que el código tradicional? ¿Existe visibilidad de qué herramientas de IA se están usando y en qué proyectos? ¿Los controles de seguridad del ciclo de desarrollo se diseñaron antes o después de que la IA generativa estuviera disponible para cualquier empleado?
