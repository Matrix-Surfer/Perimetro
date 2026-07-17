---
title: "Un programa automatizado rastrea Internet en busca de herramientas de IA mal protegidas para robar accesos a la nube"
date: "2026-07-17"
source: "The Hacker News"
link: "https://thehackernews.com/2026/07/new-nadmesh-botnet-hunts-exposed-ai.html"
categoria: "Malware"
ambito: "Organizaciones"
nivelAtencion: "Alto"
status: "Activa"
resumen: "Un programa automatizado llamado NadMesh rastrea Internet en busca de herramientas de inteligencia artificial (como Ollama, ComfyUI, n8n, Open WebUI, Langflow y Gradio) instaladas sin protección de acceso. Cuando las encuentra, roba las credenciales de los servicios de nube donde corren, entre ellas más de 3,800 claves de acceso a Amazon Web Services detectadas hasta ahora. Las organizaciones que usan estas herramientas deben confirmar que no estén expuestas a Internet sin autenticación."
expuestos: "Organizaciones que instalaron herramientas de inteligencia artificial (Ollama, ComfyUI, n8n, Open WebUI, Langflow o Gradio) accesibles desde Internet sin contraseña ni control de acceso."
verificacion: "Confirmar si alguna de estas herramientas está expuesta a Internet sin autenticación y, en ese caso, revocar de inmediato las credenciales de nube (llaves de AWS, tokens de Kubernetes) que hayan estado accesibles desde ese equipo."
impacto: "Robo de las credenciales que dan acceso a la infraestructura de nube de la organización, lo que permite al atacante entrar a otros sistemas, generar costos no autorizados o expandir su control dentro del entorno de nube."
grc_activo: "Credenciales de acceso a servicios de nube (llaves de Amazon Web Services, tokens de Kubernetes) y herramientas de inteligencia artificial instaladas por equipos internos (Ollama, ComfyUI, n8n, Open WebUI, Langflow, Gradio)"
grc_vector: "Botnet (red de equipos que actúan de forma coordinada y automatizada sin que sus dueños lo sepan) que rastrea Internet en busca de estas herramientas expuestas sin autenticación y extrae las credenciales de nube almacenadas en el equipo"
grc_condicion: "Tener alguna de estas herramientas de IA accesible desde Internet sin contraseña ni control de acceso"
grc_alcance: "Organizaciones que instalaron rápidamente herramientas de IA sin protegerlas; el operador de NadMesh reportó más de 3,800 claves únicas de AWS recolectadas hasta el 10 de julio de 2026"
grc_confianza: "alta"
publicacion: "published"
---

## Qué ocurrió

Investigadores identificaron a principios de julio de 2026 un programa malicioso automatizado (una botnet, red de sistemas que actúan de forma coordinada sin que sus dueños lo sepan) llamado NadMesh. Rastrea Internet en busca de herramientas de inteligencia artificial de uso común, entre ellas Ollama, ComfyUI, n8n, Open WebUI, Langflow y Gradio, que equipos de trabajo instalan rápido para experimentar y a veces dejan accesibles desde Internet sin contraseña. Cuando encuentra una de estas herramientas expuesta, NadMesh extrae las credenciales de acceso a la nube almacenadas en ese equipo: llaves de Amazon Web Services (AWS) y credenciales de Kubernetes, la plataforma que organiza los programas dentro de la nube. Según el propio panel de control del atacante, revisado por investigadores el 10 de julio, el programa ya había recolectado más de 3,800 llaves de AWS distintas.

## Quién está expuesto

Organizaciones que instalaron alguna de estas herramientas de inteligencia artificial y las dejaron accesibles desde Internet sin autenticación, algo común en equipos que las prueban rápido y postergan asegurarlas.

## A considerar

El objetivo del atacante no es el equipo en sí, sino las credenciales de nube que ese equipo tiene guardadas. Por eso la respuesta no es solo cerrar el acceso a la herramienta expuesta: hay que revocar y renovar las credenciales de nube que estuvieron accesibles desde ese equipo, porque pudieron haber sido robadas antes de detectar el problema.

## Impacto potencial

Con las credenciales de nube robadas, un atacante puede acceder a otros sistemas de la organización dentro de ese entorno de nube, generar costos no autorizados a nombre de la empresa, o usar esa infraestructura como base para nuevos ataques.
