---
title: "Un enlace manipulado podía activar en secreto un agente de IA con acceso al correo y las herramientas de la empresa"
date: "2026-07-23"
source: "The Register — Security"
link: "https://www.theregister.com/security/2026/07/23/one-chatgpt-link-could-smuggle-a-rogue-ai-agent-into-your-company/5275116"
categoria: "IA"
ambito: "Organizaciones"
nivelAtencion: "Medio"
status: "Resuelta"
resumen: "Investigadores de Zenity Labs descubrieron que un enlace de ChatGPT manipulado podía crear en secreto un agente de inteligencia artificial conectado al correo, Teams, Slack, SharePoint o Google Drive de la víctima, controlable a distancia por un atacante. OpenAI corrigió la falla el 9 de junio de 2026, cuatro días después de recibir el reporte, antes de que se hiciera pública."
expuestos: "Organizaciones cuyos empleados usaron la función de creación de agentes de ChatGPT conectada a Outlook, Teams, Slack, SharePoint o Google Drive antes del 9 de junio de 2026."
verificacion: "Revisar si existen agentes de ChatGPT creados sin autorización, en particular antes del 9 de junio de 2026, y qué integraciones corporativas tienen habilitadas."
impacto: "Un agente de inteligencia artificial con acceso al correo y a herramientas internas de la organización, operando bajo control remoto de un atacante sin que el empleado lo autorizara conscientemente."
grc_activo: "Cuentas de ChatGPT con la función de creación de agentes conectada a herramientas corporativas (Outlook, Teams, Slack, SharePoint, Google Drive)"
grc_vector: "Parámetros ocultos en la URL de un enlace de ChatGPT que activaban el creador de agentes sin consentimiento, desactivaban las confirmaciones de aprobación y conectaban automáticamente las integraciones ya autorizadas de la víctima"
grc_condicion: "Que la víctima hiciera clic en un enlace de ChatGPT manipulado antes de la corrección aplicada el 9 de junio de 2026"
grc_explotacion: "investigacion"
grc_alcance: "Usuarios de ChatGPT con integraciones corporativas conectadas al creador de agentes, previo a la corrección; no se reportó explotación confirmada fuera de la investigación que llevó al reporte"
grc_confianza: "alta"
publicacion: "published"
---

## Qué ocurrió

Investigadores de Zenity Labs descubrieron una falla en el creador de agentes de ChatGPT: un enlace con parámetros ocultos en la URL podía activar automáticamente la creación de un agente de inteligencia artificial sin que la víctima lo autorizara, conectarlo a las herramientas corporativas que ya tenía vinculadas (correo, Teams, Slack, SharePoint o Google Drive), desactivar las confirmaciones de aprobación, y dejarlo esperando instrucciones de un atacante a través de correos con la palabra "TASK" en el asunto. OpenAI confirmó el reporte el 5 de junio de 2026 y corrigió la falla cuatro días después, antes de que se hiciera pública.

## Quién está expuesto

Organizaciones cuyos empleados usan la función de creación de agentes de ChatGPT conectada a herramientas corporativas, si hicieron clic en un enlace manipulado antes de la corrección del 9 de junio de 2026.

## A considerar

Aunque la falla ya está corregida y no hay evidencia de explotación fuera de la investigación que llevó al reporte, cualquier agente creado antes del 9 de junio mediante este mecanismo pudo haber quedado activo. Vale la pena revisar el historial de agentes creados en la organización durante ese periodo.

## Impacto potencial

Un agente de inteligencia artificial con acceso legítimo al correo y a las herramientas internas de la organización, operando bajo instrucciones de un atacante sin que nadie lo haya autorizado conscientemente: capaz de leer correspondencia, extraer documentos o actuar dentro de esas plataformas como si fuera un empleado más.
