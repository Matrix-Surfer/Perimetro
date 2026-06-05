---
title: "Una falla en la integración de IA con GitHub permitía tomar control de repositorios públicos"
date: "2026-06-04"
source: "The Hacker News"
link: "https://thehackernews.com/2026/06/claude-code-github-action-flaw-let-one.html"
categoria: "Vulnerabilidad"
ambito: "Organizaciones"
nivelAtencion: "Medio"
status: "En monitoreo"
resumen: "Una falla en la GitHub Action de Claude Code permitía tomar control de repositorios públicos mediante un issue especialmente diseñado. Anthropic corrigió la falla. Equipos que usan esta integración deben confirmar que están en la versión actualizada."
expuestos: "Equipos de desarrollo con repositorios públicos en GitHub que usan la GitHub Action de Claude Code para automatización."
verificacion: "Confirmar que la GitHub Action de Claude Code está en su versión más reciente y revisar el historial de ejecuciones recientes."
impacto: "Acceso al flujo de integración continua permite insertar código malicioso antes de producción, robar secretos del pipeline y comprometer proyectos dependientes."
grc_activo: "repositorios de GitHub que usan la GitHub Action de Claude Code"
grc_vector: "issue malicioso que activa el flujo de trabajo con permisos excesivos"
grc_condicion: "repositorio público usa la GitHub Action de Claude Code sin la corrección aplicada"
grc_explotacion: "poc_publica"
grc_alcance: "repositorios públicos con la GitHub Action de Claude Code configurada"
grc_confianza: "alta"
publicacion: "published"
---

## Qué ocurrió

Un investigador de seguridad encontró una falla en la GitHub Action de Claude Code —la integración que permite automatizar tareas con IA en repositorios de GitHub— que daba a cualquier atacante control sobre repositorios públicos que la usaran con solo abrir un issue. El propio repositorio de Anthropic era vulnerable: un ataque exitoso habría podido inyectar código malicioso en la acción misma y propagarlo a todos los proyectos que dependen de ella. Anthropic corrigió la falla tras el reporte.

## Quién está expuesto

### Para organizaciones

Equipos de desarrollo con repositorios públicos en GitHub que usan la GitHub Action de Claude Code para automatización de tareas. La falla fue corregida, pero equipos que no actualizaron siguen expuestos.

## A considerar

- Validar que todos los repositorios utilizan la versión corregida de la GitHub Action de Claude Code.
- Revisar ejecuciones recientes del flujo de trabajo en busca de automatizaciones disparadas por issues inesperados o cuentas desconocidas.
- Verificar que la acción opera con el principio de mínimo privilegio y solo tiene acceso a los recursos estrictamente necesarios.
- Identificar secretos, tokens o credenciales accesibles desde el flujo de integración continua.
## Impacto potencial

Con control sobre el flujo de integración continua, un atacante puede insertar código malicioso antes de que llegue a producción, extraer credenciales y secretos almacenados en el pipeline, o comprometer todos los repositorios que dependen de la misma acción. La cadena de daño no termina en el repositorio afectado.
