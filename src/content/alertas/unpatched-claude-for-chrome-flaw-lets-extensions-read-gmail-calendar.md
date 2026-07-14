---
title: "Una falla sin corregir en un asistente de IA para el navegador permite a otras extensiones leer el correo y el calendario"
date: "2026-07-14"
source: "SecurityWeek"
link: "https://www.securityweek.com/unpatched-claude-for-chrome-flaw-lets-extensions-read-gmail-calendar/"
categoria: "Vulnerabilidad"
ambito: "Mixto"
nivelAtencion: "Alto"
status: "Activa"
resumen: "Claude for Chrome, la extensión de Anthropic que permite a su asistente de inteligencia artificial operar el navegador, tiene una falla conocida como ClaudeBleed que permite a otras extensiones maliciosas leer correos de Gmail, documentos de Google y entradas de calendario. Ocho actualizaciones no han logrado corregirla por completo."
expuestos: "Usuarios de la extensión Claude for Chrome que también tengan instaladas otras extensiones, especialmente si activaron el modo que permite al asistente actuar sin pedir confirmación."
verificacion: "Revisar qué extensiones adicionales están instaladas en el navegador y desactivar el modo de 'actuar sin preguntar' en Claude for Chrome hasta que exista una corrección completa."
impacto: "Una extensión maliciosa instalada en el mismo navegador podría leer correos, documentos y citas de calendario sin que el usuario lo autorice explícitamente."
grc_activo: "Datos de Gmail, Google Docs y Calendario accesibles a través del navegador"
grc_vector: "Falla en el aislamiento entre extensiones del navegador (ClaudeBleed) que permite a una extensión maliciosa interactuar con las acciones que realiza el asistente de IA"
grc_condicion: "Tener instalada la extensión Claude for Chrome junto con una extensión maliciosa en el mismo navegador, especialmente con el modo de acción automática activado"
grc_alcance: "Usuarios de Claude for Chrome hasta la versión 1.0.80, la más reciente al momento de esta nota; ocho actualizaciones previas no corrigieron la falla por completo"
publicacion: "published"
---

## Qué ocurrió

Claude for Chrome, la extensión de Anthropic que permite a su asistente de inteligencia artificial navegar y actuar dentro del navegador en nombre del usuario, tiene una falla conocida como ClaudeBleed. El problema permite que otra extensión instalada en el mismo navegador, si es maliciosa, acceda a información que el asistente puede leer: correos de Gmail, documentos de Google y entradas de calendario. Anthropic ha publicado ocho actualizaciones desde que se reportó la falla en mayo, pero la versión más reciente (1.0.80) sigue siendo vulnerable. Por defecto, Claude for Chrome pide confirmación antes de realizar acciones sensibles, pero los usuarios que activaron el modo de "actuar sin preguntar" quedan expuestos sin ese aviso.

## Quién está expuesto

### Para personas

Usuarios de Claude for Chrome que también tengan otras extensiones instaladas en el mismo navegador.

### Para organizaciones

Empresas donde empleados usan esta extensión junto con otras herramientas del navegador para tareas de trabajo, especialmente si administran el correo corporativo desde Gmail.

## A considerar

Desactivar el modo de acción automática ("actuar sin preguntar") reduce el riesgo, ya que exige una confirmación manual antes de que el asistente realice acciones sensibles. Revisar qué otras extensiones están instaladas, y eliminar las que no sean de fuentes confiables, también ayuda a limitar la exposición.

## Impacto potencial

Mientras la falla no se corrija por completo, una extensión maliciosa en el mismo navegador podría leer correos, documentos y citas de calendario sin necesitar una acción explícita de autorización por parte del usuario.
