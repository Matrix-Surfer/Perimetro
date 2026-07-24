---
title: "Un solo enlace podía crear un asistente de inteligencia artificial falso dentro de las herramientas de trabajo de una organización"
date: "2026-07-24"
source: "The Hacker News"
link: "https://thehackernews.com/2026/07/chatgpt-agentforger-flaw-could-deploy.html"
categoria: "IA"
ambito: "Organizaciones"
nivelAtencion: "Medio"
status: "Resuelta"
resumen: "Investigadores de Zenity Labs descubrieron una falla, ya corregida, en los Agentes de Workspace de ChatGPT. Con solo abrir un enlace, un atacante podía crear y autorizar un agente de inteligencia artificial dentro de la cuenta de la víctima, con acceso a correo, calendario y chats corporativos. Las organizaciones que usan estos agentes deben confirmar si tienen conectores autorizados que no reconocen."
expuestos: "Organizaciones que usan los Agentes de Workspace de ChatGPT conectados a correo, calendario, Drive, Slack o Teams."
verificacion: "Revisar si existen agentes creados en ChatGPT que nadie en la organización recuerda haber autorizado, y confirmar que los conectores activos correspondan a integraciones conocidas."
impacto: "Un agente no autorizado con estos permisos puede leer documentos internos, extraer contraseñas mencionadas en conversaciones y enviar mensajes de phishing haciéndose pasar por un empleado real."
grc_activo: "Agentes de Workspace de ChatGPT con conectores autorizados a correo, calendario, Drive, Slack o Teams"
grc_vector: "Enlace que, al abrirse dentro de una sesión ya iniciada en ChatGPT, crea y autoriza automáticamente un agente sin pedir confirmación adicional"
grc_condicion: "Tener una sesión activa en ChatGPT con acceso a Agentes de Workspace y al menos un conector ya autorizado"
grc_explotacion: "investigacion"
grc_alcance: "Usuarios de ChatGPT Workspace con conectores empresariales activos"
grc_confianza: "alta"
publicacion: "published"
---

## Qué ocurrió

Investigadores de la firma Zenity Labs identificaron una falla crítica, bautizada AgentForger, en los Agentes de Workspace de ChatGPT, la función de OpenAI que permite crear asistentes de inteligencia artificial capaces de actuar dentro de una organización. Bastaba con que la víctima abriera un enlace mientras tenía una sesión activa en ChatGPT para que, sin ninguna confirmación adicional, se creara y autorizara un agente controlado por el atacante. Ese agente quedaba conectado a los mismos servicios que el usuario ya tenía vinculados: correo, calendario, documentos en la nube, Slack o Teams. OpenAI corrigió la falla el 8 de junio de 2026. No hay evidencia pública de que haya sido explotada fuera de las pruebas de los investigadores.

## Quién está expuesto

### Para organizaciones

Empresas que usan los Agentes de Workspace de ChatGPT con al menos un conector autorizado (correo corporativo, calendario, Google Drive, Slack o Microsoft Teams). El riesgo era mayor mientras más servicios tuviera conectados la cuenta.

### Para personas

No aplica directamente. El riesgo se concentraba en cuentas de trabajo con integraciones activas, no en el uso personal de ChatGPT.

## A considerar

Aunque la falla ya fue corregida, conviene revisar los agentes existentes en la organización: confirmar que cada uno fue creado deliberadamente, identificar quién lo autorizó y para qué tarea, y revocar cualquier conector que ya no se use. OpenAI además anunció que dejará de operar la función que originó el problema (Agent Builder) a partir del 30 de noviembre de 2026, migrando a una nueva forma de configurar agentes.

## Impacto potencial

Un agente creado sin autorización y con acceso a las herramientas internas de una organización puede comportarse como un empleado con acceso legítimo: leer documentos confidenciales, extraer contraseñas mencionadas en conversaciones internas y enviar mensajes de phishing que parecen provenir de un compañero de trabajo real. Esto complica la detección, porque el tráfico proviene de una cuenta autorizada, no de un atacante externo evidente.
