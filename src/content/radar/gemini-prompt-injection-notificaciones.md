---
title: "Falla en Google Gemini permitía ocultar comandos maliciosos en notificaciones que el asistente ejecutaba"
pubDate: 2026-06-03
source: "Dark Reading"
link: "https://www.darkreading.com/application-security/malicious-notifications-could-trick-google-gemini-users"
categoria: "IA"
ambito: "Mixto"
nivelAtencion: "Medio"
resumen: "Una vulnerabilidad de inyección de prompts en el asistente de voz de Google Gemini permitía a atacantes esconder instrucciones maliciosas en notificaciones que el asistente leía y ejecutaba sin que el usuario las viera. Gemini ya fue parchado. El patrón aplica a cualquier IA que procese contenido externo."
publicacion: "published"
---

## Qué está pasando

Investigadores encontraron una vulnerabilidad de inyección de prompts —una técnica que consiste en insertar instrucciones ocultas dentro de contenido que un sistema de IA procesa— en el asistente de voz de Google Gemini. El fallo permitía a un atacante incrustar comandos maliciosos dentro del texto de una notificación: correo, mensaje, alerta de aplicación. Cuando el usuario le pedía al asistente que leyera sus notificaciones, Gemini ejecutaba esas instrucciones ocultas. Google ya publicó un parche.

## Por qué importa ahora

La inyección de prompts no es un bug de implementación aislado. Es una clase de vulnerabilidad inherente a cómo funcionan los modelos de lenguaje cuando procesan contenido externo. Cualquier sistema de IA que lea correos, documentos o notificaciones puede ser manipulado con instrucciones incrustadas en ese contenido. El parche de Google resuelve esta instancia. El patrón sigue activo en otras herramientas.

## Quién está expuesto

### Personas

Usuarios de Gemini que usan el asistente para leer notificaciones, correos o mensajes. La vulnerabilidad ya está parchada. Pero ilustra el riesgo de dar acceso de lectura amplio a asistentes de IA sin revisar qué acciones pueden ejecutar.

### Organizaciones

Cualquier empresa que evalúe o ya use asistentes de IA con acceso a correo corporativo, documentos internos o notificaciones de sistemas. La pregunta de seguridad relevante no es si el asistente es útil. Es quién más puede darle instrucciones a través del contenido que procesa.

## Riesgo principal

Que un asistente de IA con acceso a correo o documentos internos ejecute instrucciones maliciosas incrustadas por un tercero en el contenido que procesa, sin que el usuario lo sepa ni lo autorice.

## Señales de alerta

- Asistentes de IA con acceso a correo corporativo sin control de qué acciones pueden ejecutar
- Sin proceso de evaluación de seguridad antes de adoptar integraciones de IA
- Herramientas de IA con acceso a sistemas internos sin registro de sus acciones

## Qué hacer hoy

### Para personas

Actualiza la app de Google Gemini. Si usas el asistente para leer correos o notificaciones, revisa los permisos que le has concedido y limítalos a lo estrictamente necesario.

### Para organizaciones

Al evaluar asistentes de IA para acceso a correo o documentos internos, incluir la pregunta: ¿qué ocurre si el contenido que procesa contiene instrucciones maliciosas? Si el proveedor no tiene una respuesta clara, es una señal de alerta. Este criterio debe ser parte del proceso de evaluación de nuevas herramientas de IA.

## Controles GRC que aplica

- Gestión de vulnerabilidades
- Evaluación de riesgo de herramientas de terceros
- Control de accesos de aplicaciones
- Gestión de parches

## Decisión recomendada

Incluir la resistencia a inyección de prompts como criterio de evaluación al revisar herramientas de IA que accedan a correo o documentos internos. La pregunta que debes hacerle al proveedor: ¿cómo previenen que contenido externo manipule las acciones del asistente?
