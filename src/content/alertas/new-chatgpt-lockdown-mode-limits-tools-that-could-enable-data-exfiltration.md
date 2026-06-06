---
title: "Las instrucciones ocultas en documentos pueden manipular a ChatGPT para filtrar información — OpenAI lanza un modo de bloqueo para quienes manejan datos sensibles"
date: "2026-06-06"
source: "The Hacker News"
link: "https://thehackernews.com/2026/06/new-chatgpt-lockdown-mode-limits-tools.html"
categoria: "IA"
ambito: "Mixto"
nivelAtencion: "Alto"
status: "Activa"
resumen: "OpenAI lanzó el modo Lockdown para ChatGPT, que restringe herramientas que pueden ser usadas para filtrar información confidencial a través de instrucciones ocultas en documentos o mensajes. El riesgo es real: quien comparte documentos sensibles con ChatGPT puede ser víctima de una instrucción maliciosa que haga que la herramienta revele esa información sin que el usuario lo autorice. El modo está disponible para cuentas personales; las organizaciones deben verificar si sus equipos usan ChatGPT con información confidencial sin política de uso aprobada."
expuestos: "Personas y organizaciones que comparten documentos, correos o datos confidenciales con ChatGPT sin restricciones de herramientas activas."
verificacion: "Verificar si existe una política de uso de IA aprobada en la organización y si ChatGPT se usa para procesar información sensible; habilitar Lockdown Mode en las cuentas correspondientes."
impacto: "Información confidencial compartida en una sesión de ChatGPT puede filtrarse a través de instrucciones ocultas sin que el usuario lo note ni quede registro del incidente."
grc_activo: "Datos confidenciales procesados en ChatGPT: documentos internos, correos, contratos, informes"
grc_vector: "Inyección de instrucciones — instrucciones maliciosas ocultas en documentos o mensajes que manipulan a ChatGPT para revelar o transmitir información fuera del contexto autorizado"
grc_condicion: "El usuario o la organización procesa información sensible en ChatGPT sin modo Lockdown activo ni política de uso que restrinja el tipo de contenido compartido"
grc_explotacion: "activa"
grc_alcance: "Usuarios que comparten documentos, correos o datos sensibles con ChatGPT; organizaciones sin política de uso de herramientas de IA"
grc_confianza: "alta"
publicacion: "published"
---

## Qué ocurrió

OpenAI publicó el modo Lockdown para ChatGPT, diseñado para reducir el riesgo de que información confidencial se filtre a través de instrucciones maliciosas ocultas en documentos o mensajes. Estas instrucciones — llamadas inyecciones de instrucciones — manipulan a la herramienta para que actúe fuera de lo que el usuario autorizó: puede revelar información del contexto de la conversación, enviarla a un servicio externo o procesarla de formas no previstas. El modo Lockdown restringe las herramientas que ChatGPT puede usar durante una sesión, reduciendo los canales disponibles para ese tipo de fuga. Está disponible para cuentas Free, Plus, Pro y Go en cuentas personales.

## Quién está expuesto

### Para personas

Quienes usan ChatGPT para redactar correos, revisar contratos, analizar documentos legales o financieros, o cualquier tarea que involucre información personal o confidencial de terceros.

### Para organizaciones

Las que permiten el uso de ChatGPT para documentos internos sin una política aprobada. Si los empleados suben memos, contratos, informes o comunicaciones internas a ChatGPT sin restricciones, la organización no sabe qué información procesó la herramienta, ni bajo qué condiciones, ni si fue manipulada para revelarla.

## A considerar

Lockdown Mode está disponible hoy para cuentas personales. Para organizaciones, la acción más importante no es técnica: es saber si existe una política de uso de IA aprobada, qué información se considera sensible y si esa información está llegando a herramientas externas sin clasificación ni control. El modo Lockdown no reemplaza una política — la complementa.

## Impacto potencial

La fuga no siempre se detecta. Si un documento con información confidencial es procesado por ChatGPT bajo un ataque de instrucción oculta, la información puede salir del control de la organización sin registro, sin alerta y sin que el usuario que hizo la consulta lo sepa. El riesgo no depende de que el usuario cometa un error: depende de que el documento que comparte contenga instrucciones que él mismo no ve.
