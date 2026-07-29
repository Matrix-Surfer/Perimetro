---
title: "Una falla en una plataforma de automatización de procesos permitía ejecutar comandos en el servidor a usuarios ya autenticados"
date: "2026-07-27"
source: "The Hacker News"
link: "https://thehackernews.com/2026/07/n8n-sandbox-escape-lets-workflow.html"
categoria: "Vulnerabilidad"
ambito: "Organizaciones"
nivelAtencion: "Medio"
status: "En monitoreo"
resumen: "n8n, una plataforma para automatizar procesos y tareas entre distintos sistemas, corrigió una falla que permitía a un usuario ya autenticado con permisos de edición ejecutar comandos en el servidor donde corre la herramienta. Aplica a instalaciones propias en versiones específicas; ya existe corrección disponible."
expuestos: "Organizaciones que operan su propia instalación de n8n para automatizar procesos internos, donde varias personas tienen permisos para crear o editar flujos de trabajo."
verificacion: "Confirmar la versión de n8n instalada y actualizar si se encuentra en los rangos afectados (anteriores a 2.31.5, o entre 2.32.0 y 2.32.1)."
impacto: "Un usuario con permisos de edición de flujos, incluso sin ser administrador, podría tomar control del servidor donde corre la plataforma de automatización."
grc_activo: "Instalaciones propias de n8n, plataforma de automatización de procesos entre sistemas"
grc_vector: "Falla de escape del entorno aislado (sandbox) donde se ejecutan las expresiones de los flujos de trabajo, que permite ejecutar comandos del sistema operativo con los privilegios del propio proceso de n8n"
grc_condicion: "Tener una cuenta con permisos de edición de flujos de trabajo y una versión de n8n dentro de los rangos afectados"
grc_alcance: "Instalaciones propias (self-hosted) de n8n en versiones anteriores a 2.31.5, y entre 2.32.0 y 2.32.1"
grc_confianza: "alta"
publicacion: "published"
---

## Qué ocurrió

n8n, una plataforma que conecta y automatiza tareas entre distintos sistemas y aplicaciones, corrigió una falla que permitía a una persona con permisos para editar flujos de trabajo escapar del entorno aislado donde normalmente se ejecutan esas ediciones y ejecutar comandos directamente en el servidor. La falla fue encontrada al revisar una corrección anterior publicada en febrero para un problema similar. Afecta a instalaciones propias en versiones anteriores a 2.31.5, y entre 2.32.0 y 2.32.1; ya existe una versión corregida.

## Quién está expuesto

Organizaciones que operan su propia instalación de n8n para automatizar procesos internos, especialmente aquellas donde más de una persona tiene permisos para crear o modificar flujos de trabajo, sin ser necesariamente administrador de la plataforma.

## Impacto potencial

Un usuario con permisos de edición, que no necesariamente es administrador, podría tomar control del servidor donde corre la plataforma de automatización, con acceso a cualquier credencial o conexión que esos flujos de trabajo tengan configurada hacia otros sistemas de la organización.
