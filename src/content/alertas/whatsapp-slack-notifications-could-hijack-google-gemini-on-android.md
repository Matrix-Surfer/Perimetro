---
title: "Notificaciones de WhatsApp y Slack podían secuestrar el asistente Google Gemini en Android"
date: "2026-06-03"
tipo: "Otro"
categoria: "IA"
nivelAtencion: "Alto"
status: "En monitoreo"
parche: "Sí"
explotacion: "Reportada"
resumen: "Un fallo de inyección de prompts en Google Gemini permitía a un atacante usar notificaciones de WhatsApp, Slack, SMS o Instagram para secuestrar el asistente de voz y ejecutar acciones sin que el usuario lo notara: abrir ventanas, falsificar mensajes del jefe o unirse a una llamada de Zoom. No se requería ninguna app maliciosa instalada."
source: "The Hacker News"
link: "https://thehackernews.com/2026/06/whatsapp-slack-notifications-could.html"
publicacion: "published"
---

## Contexto

Investigadores descubrieron un fallo de inyección de prompts —una técnica que inyecta instrucciones maliciosas disfrazadas de texto normal para manipular a un asistente de IA— en Google Gemini para Android. El vector de ataque eran las notificaciones cotidianas: un mensaje de WhatsApp, Slack, SMS, Signal, Instagram o Messenger con contenido malicioso bastaba para que Gemini ejecutara comandos del atacante sin que el usuario hiciera nada.

Las acciones posibles incluían abrir ventanas del dispositivo, falsificar un mensaje como si viniera del jefe, unirse silenciosamente a una llamada de Zoom, o modificar la memoria a largo plazo del asistente. No se necesitaba instalar ninguna app. Solo recibir un mensaje.

Google emitió un parche. La vulnerabilidad ya está corregida.

## Impacto potencial

### Para personas

Cualquier usuario de Android con Gemini activado estuvo expuesto mientras la vulnerabilidad era activa. Un atacante podía falsificar mensajes de contactos de confianza o manipular al asistente para que respondiera como si el usuario hubiera dado instrucciones que nunca dio.

### Para organizaciones

El riesgo organizacional es concreto: empleados que usan Gemini como asistente de trabajo y reciben mensajes por Slack corporativo estaban expuestos a que un atacante, mediante un solo mensaje malicioso, instruyera al asistente a exfiltrar información visible en pantalla o iniciar acciones en nombre del usuario.

## Perspectiva GRC

Este incidente expone una brecha que aparece con cada nueva herramienta de IA empresarial: los asistentes se despliegan antes de que las organizaciones entiendan qué permisos tienen y qué pueden hacer sin confirmación explícita del usuario.

La pregunta relevante: ¿qué acciones puede ejecutar el asistente de IA que usas sin que apruebes cada paso? Si la respuesta no está documentada, el riesgo es invisible.

## Recomendaciones

### Para personas

Verifica que tu versión de Gemini y Google Play Services estén actualizadas. Si usas Gemini con acceso a notificaciones de trabajo, revisa qué apps tiene permiso de leer.

### Para organizaciones

Antes de activar integraciones de IA con herramientas internas (Slack, correo, calendario), documentar qué datos puede leer el asistente y qué acciones puede tomar sin confirmación del usuario. Si esa documentación no existe, el despliegue no debería estar activo en entornos corporativos.

---

La inyección de prompts no es un bug de un producto: es una vulnerabilidad estructural de los modelos de lenguaje. Cualquier sistema que permita que texto externo influya en las instrucciones de un asistente de IA es susceptible. La lección permanente: desplegar un asistente con acceso amplio a datos y comunicaciones sin una política de permisos mínimos es asumir un riesgo que aún no está medido.
