---
title: "Asistentes de codificación con IA pueden sugerir paquetes falsos que instalan código malicioso"
date: "2026-07-10"
source: "SecurityWeek"
link: "https://www.securityweek.com/hallusquatting-turns-ai-hallucinations-into-botnet-delivery-mechanism/"
categoria: "IA"
ambito: "Mixto"
nivelAtencion: "Medio"
status: "En monitoreo"
resumen: "Investigadores demostraron que los asistentes de codificación con IA a veces inventan nombres de paquetes que no existen, y los atacantes ya registraron esos nombres con código malicioso. Quien use estas herramientas para clonar repositorios o instalar extensiones debe verificar cada nombre antes de aceptarlo."
expuestos: "Equipos de desarrollo y desarrolladores independientes que usan asistentes de codificación con IA (Cursor, Copilot, Gemini CLI, entre otros)."
verificacion: "Si el nombre del repositorio o paquete sugerido por el asistente de IA es exacto y proviene de una fuente conocida."
impacto: "Ejecución de código malicioso en el equipo del desarrollador, con riesgo de sumarlo a una red de equipos controlados por el atacante."
grc_activo: "Repositorios de código y extensiones ('skills') instalados a través de asistentes de codificación con IA (Cursor, Windsurf, GitHub Copilot, Cline, Gemini CLI, OpenClaw)"
grc_vector: "El asistente de IA inventa el nombre de un paquete o repositorio inexistente; el atacante ya registró ese nombre con instrucciones maliciosas"
grc_condicion: "Pedirle al asistente de IA clonar un repositorio o instalar una extensión sin verificar que el nombre exista realmente y provenga de una fuente confiable"
grc_explotacion: "investigacion"
grc_alcance: "Cualquier organización o persona que use asistentes de codificación con IA para clonar repositorios o instalar extensiones"
grc_confianza: "alta"
publicacion: "published"
---

## Qué ocurrió

Investigadores demostraron una técnica llamada "HalluSquatting": aprovechan que los asistentes de codificación con inteligencia artificial a veces inventan nombres de repositorios o paquetes que no existen, cuando se les pide traer un recurso conocido. Los atacantes registran previamente esos nombres inventados y les colocan instrucciones maliciosas. Cuando el asistente "alucina" ese nombre y el usuario acepta la sugerencia, el código malicioso se ejecuta. En las pruebas de los investigadores, la tasa de alucinación llegó al 85% al pedir clonar repositorios y al 100% al pedir instalar extensiones. Herramientas como Cursor, Windsurf, GitHub Copilot, Cline, Gemini CLI y OpenClaw pueden verse afectadas por este comportamiento. No hay evidencia de explotación confirmada en producción: es una demostración de investigación, y los proveedores fueron notificados antes de la publicación.

## Quién está expuesto

### Para organizaciones

Equipos de desarrollo que usan asistentes de codificación con IA para clonar repositorios o instalar extensiones sin verificar cada nombre sugerido.

### Para personas

Desarrolladores independientes que usan estas mismas herramientas de forma individual.

## A considerar

Verificar manualmente el nombre exacto de cualquier repositorio o paquete que el asistente de IA sugiera instalar o clonar, antes de aceptar la sugerencia. Si el nombre no es exactamente el esperado, no proceder.

## Impacto potencial

Si el ataque se concreta, el atacante puede ejecutar código en el equipo del desarrollador y sumarlo a una red de equipos infectados. El riesgo crece en la medida en que más equipos dependen de asistentes de IA para tareas de codificación diaria.
