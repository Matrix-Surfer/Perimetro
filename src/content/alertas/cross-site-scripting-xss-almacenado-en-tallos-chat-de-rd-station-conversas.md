---
title: "Una falla en el chat de RD Station Conversas permite ejecutar código malicioso en el navegador de los agentes de soporte"
date: "2026-07-13"
source: "INCIBE-CERT"
link: "https://www.incibe.es/incibe-cert/alerta-temprana/avisos/cross-site-scripting-xss-almacenado-en-tallos-chat-de-rd-station-conversas"
categoria: "Vulnerabilidad"
ambito: "Organizaciones"
nivelAtencion: "Medio"
status: "En monitoreo"
resumen: "Se identificó una vulnerabilidad de severidad media en Tallos Chat, la herramienta de atención al cliente de RD Station Conversas, que permite inyectar código malicioso a través del campo de nombre al iniciar una conversación. El código se ejecuta también en el navegador del agente de soporte que atienda el chat, lo que amplía el riesgo. Aún no existe una corrección disponible. Las empresas que usan esta herramienta deben dar seguimiento al aviso del proveedor."
expuestos: "Empresas que usan Tallos Chat de RD Station Conversas para atención al cliente o ventas por chat, y sus agentes de soporte."
verificacion: "Confirmar si la organización usa Tallos Chat de RD Station Conversas y dar seguimiento al aviso del proveedor para aplicar la corrección en cuanto esté disponible."
impacto: "Un atacante puede ejecutar código en el navegador de quien abre la conversación, incluido el agente de soporte, lo que podría usarse para robar la sesión activa o tomar acciones dentro de la herramienta en su nombre."
grc_activo: "La herramienta de chat Tallos Chat de RD Station Conversas y las sesiones de los agentes de soporte que la usan."
grc_vector: "Inyección de código malicioso a través del campo de nombre en el inicio de la conversación de chat, que no filtra correctamente lo que el usuario escribe."
grc_condicion: "Un atacante debe iniciar una conversación con un nombre que contenga el código malicioso; el código se activa cuando alguien, incluido el agente de soporte, ve esa conversación."
grc_alcance: "Empresas que usan RD Station Conversas para atención al cliente, plataforma de origen brasileño usada ampliamente en América Latina."
publicacion: "published"
---

## Qué ocurrió

Se dio a conocer una vulnerabilidad de severidad media en Tallos Chat, la herramienta de atención al cliente y ventas por chat de RD Station Conversas, una plataforma de origen brasileño usada por empresas en América Latina. La falla está en el campo de nombre que se llena al iniciar una conversación: si no se filtra correctamente, permite insertar código que se ejecuta en el navegador de quien ve esa conversación. Esto incluye al agente de soporte que la atiende, no solo a quien la originó. Por el momento, el proveedor no ha publicado una corrección.

## Quién está expuesto

Empresas que usan Tallos Chat de RD Station Conversas para atención al cliente o ventas, y en particular sus agentes de soporte, quienes quedan expuestos al abrir cualquier conversación entrante.

## Impacto potencial

Si se explota, un atacante puede ejecutar código en el navegador del agente de soporte, lo que podría usarse para robar la sesión activa de la herramienta o realizar acciones dentro de ella en su nombre, como si fuera el propio agente.
