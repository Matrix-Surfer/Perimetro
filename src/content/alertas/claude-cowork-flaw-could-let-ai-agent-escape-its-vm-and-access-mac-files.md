---
title: "Una falla en un asistente de IA de escritorio permitía escapar de su entorno aislado y leer archivos de toda la computadora Mac"
date: "2026-07-23"
source: "The Hacker News"
link: "https://thehackernews.com/2026/07/claude-cowork-flaw-could-let-ai-agent.html"
categoria: "Vulnerabilidad"
ambito: "Mixto"
nivelAtencion: "Alto"
status: "En monitoreo"
resumen: "Investigadores encontraron una falla en Claude Cowork, un producto de Anthropic para ejecutar asistentes de inteligencia artificial en la computadora, que permitía escapar del entorno aislado (una máquina virtual) donde el asistente se ejecuta y acceder a cualquier archivo del equipo Mac, incluyendo llaves de acceso y credenciales guardadas. Cerca de 500 mil usuarios de Mac usaban la versión afectada antes de que las versiones nuevas cambiaran a ejecutarse en la nube por defecto. Quien siga usando la ejecución local debe revisar su configuración."
expuestos: "Usuarios de Claude Cowork en Mac que ejecutan el asistente de forma local en lugar de en la nube."
verificacion: "Confirmar si Claude Cowork está configurado para ejecutarse localmente en el equipo Mac o en la nube, y preferir la ejecución en la nube cuando sea posible."
impacto: "Un asistente de IA que logra escapar de su entorno aislado puede leer o modificar cualquier archivo del equipo, incluyendo llaves de acceso a servidores y credenciales de servicios en la nube guardadas localmente."
grc_activo: "Equipos Mac que ejecutan Claude Cowork de forma local"
grc_vector: "Una configuración del sistema que monta todo el sistema de archivos del equipo dentro de la máquina virtual donde corre el asistente, combinada con una falla del sistema operativo Linux que permite escalar privilegios dentro de esa máquina virtual"
grc_condicion: "Ejecutar Claude Cowork de forma local (no en la nube) en un equipo Mac"
grc_explotacion: "poc_publica"
grc_alcance: "Aproximadamente 500 mil usuarios de macOS que ejecutaban Claude Cowork de forma local antes del cambio de configuración por defecto"
grc_confianza: "media"
publicacion: "published"
---

## Qué ocurrió

Investigadores de seguridad encontraron una falla, denominada SharedRoot, en Claude Cowork, un producto de Anthropic que permite ejecutar asistentes de inteligencia artificial en la computadora. Para aislar al asistente del resto del sistema, la versión de escritorio para Mac lo ejecuta dentro de una máquina virtual con Linux. El problema es que esa máquina virtual tenía montado, en modo lectura y escritura, todo el sistema de archivos del equipo Mac. Combinando esa configuración con una falla conocida del sistema Linux, un atacante que lograra ejecutar código dentro del entorno del asistente podía escalar privilegios y acceder a cualquier archivo de la computadora, incluyendo llaves de acceso a servidores (SSH) y credenciales guardadas de servicios en la nube. Cerca de 500 mil usuarios de Mac ejecutaban la versión afectada. Anthropic no publicó una corrección específica para este problema, pero las versiones más recientes de Claude Cowork ejecutan el asistente en la nube por defecto, lo que evita el riesgo para quien actualice y adopte esa configuración.

## Quién está expuesto

### Para personas

Usuarios individuales de Claude Cowork en Mac que ejecutan el asistente de forma local, especialmente quienes guardan llaves de acceso o credenciales sensibles en el mismo equipo.

### Para organizaciones

Empresas que permiten a su personal usar Claude Cowork en modo local en equipos Mac corporativos, con acceso a credenciales de sistemas internos o servicios en la nube.

## A considerar

Cambiar la ejecución de Claude Cowork de local a la nube elimina el riesgo, ya que esa es la configuración que Anthropic adoptó por defecto en las versiones nuevas. Quien necesite mantener la ejecución local por alguna razón específica debería evitar guardar llaves de acceso o credenciales sensibles en el mismo equipo donde corre el asistente.

## Impacto potencial

Un asistente de inteligencia artificial que escapa de su entorno aislado deja de estar limitado a la tarea para la que fue configurado: puede leer o modificar cualquier archivo del equipo. Si ese equipo guarda credenciales de acceso a servidores o servicios en la nube, el riesgo se extiende más allá de la computadora personal, hacia cualquier sistema al que esas credenciales den acceso.
