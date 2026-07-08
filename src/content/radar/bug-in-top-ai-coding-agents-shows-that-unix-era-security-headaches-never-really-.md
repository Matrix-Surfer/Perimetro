---
title: "Una falla en varios agentes de código de IA vuelve inútil la aprobación humana antes de escribir un archivo"
pubDate: 2026-07-08
source: "The Register — Security"
link: "https://www.theregister.com/security/2026/07/08/bug-in-top-ai-coding-agents-shows-that-unix-era-security-headaches-never-really-die/5268025"
category: "Seguridad"
señal: "Investigadores encontraron un patrón de falla, llamado GhostApproval, que engaña a los agentes de código de IA para que escriban archivos fuera del espacio de trabajo autorizado, usando enlaces simbólicos disfrazados de archivos de configuración."
supuesto: "Cuando un agente de IA pide aprobación humana antes de escribir un archivo, esa aprobación es suficiente para confiar en que la acción es segura."
observación: "Si los agentes de código IA que usa el equipo muestran el destino real de cada escritura de archivo antes de pedir aprobación, o si el cuadro de confirmación solo describe una versión simplificada de la acción."
context: "La firma de seguridad Wiz encontró un patrón de falla, llamado GhostApproval, en seis de los principales agentes de código con IA, incluido Claude Code. Un repositorio malicioso puede incluir un enlace simbólico disfrazado de archivo de configuración que, al aprobar una edición aparentemente inofensiva, en realidad escribe en un archivo sensible fuera del proyecto. El cuadro de confirmación no muestra el destino real de la escritura."
grc_cambio: "La aprobación humana antes de que un agente de IA escriba un archivo deja de ser una garantía real de seguridad si la interfaz no muestra el destino verdadero de la escritura."
grc_paradigma: "Un cuadro de confirmación que pide aprobar una acción de la IA es suficiente para que un humano controle lo que hace el agente."
grc_horizonte: "meses"
grc_confianza: "alta"
publicacion: "review"
---

## La señal

La firma de seguridad Wiz encontró un patrón de falla, al que llamó GhostApproval, en seis de los principales agentes de código con IA, incluido Claude Code. Un repositorio malicioso puede incluir un enlace simbólico disfrazado de archivo de configuración que, al "confirmarse" una edición aparentemente inofensiva, en realidad escribe en un archivo sensible fuera del proyecto, como las llaves SSH del usuario.

## El supuesto que se rompe

La idea detrás de pedir aprobación humana antes de que un agente de IA modifique un archivo es que esa aprobación funciona como control de seguridad. Wiz encontró que, en varios de estos agentes, el cuadro de confirmación no muestra el destino real de la escritura: el usuario aprueba lo que cree que es una edición local sin saber que el archivo real es otro completamente distinto.

## Qué observar

Si los agentes de código con IA que usa el equipo de desarrollo muestran el destino real de cada archivo antes de pedir aprobación, y si existe una política sobre qué repositorios externos se abren con estas herramientas sin revisión previa.
