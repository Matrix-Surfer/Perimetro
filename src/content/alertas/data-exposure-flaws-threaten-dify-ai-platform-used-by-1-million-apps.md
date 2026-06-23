---
title: "Fallas críticas en la plataforma de IA más usada para crear asistentes corporativos permiten leer conversaciones privadas de otras organizaciones"
date: "2026-06-23"
source: "SecurityWeek"
link: "https://www.securityweek.com/data-exposure-flaws-threaten-dify-ai-platform-powering-over-1-million-apps/"
categoria: "Vulnerabilidad"
ambito: "Organizaciones"
nivelAtencion: "Alto"
status: "En monitoreo"
resumen: "Se identificaron cuatro vulnerabilidades críticas en Dify, la plataforma de código abierto que impulsa más de un millón de aplicaciones de IA. Las fallas permiten que un atacante acceda a conversaciones privadas de otras organizaciones dentro del mismo entorno compartido, lea documentos subidos por otros usuarios y ejecute llamadas a sistemas externos usando credenciales ajenas. Dify versión 1.14.2 incluye los parches."
expuestos: "Organizaciones que usan Dify para construir o alojar asistentes de IA, chatbots corporativos o flujos de automatización — especialmente en entornos compartidos con otros clientes."
verificacion: "Si la versión de Dify instalada es anterior a 1.14.2, y si el entorno es compartido con otras organizaciones (nube multi-tenant)."
impacto: "Un atacante en el mismo entorno puede leer el historial completo de conversaciones de otras organizaciones, incluyendo información sobre clientes, procesos internos y estrategia, sin que la organización afectada reciba ninguna alerta."
grc_activo: "Plataforma Dify y los datos de conversación, documentos y credenciales de API almacenados en ella."
grc_vector: "Endpoints de rastreo sin validación (CVE-2026-41947) y fallas en el componente de plugins (CVE-2026-41948) que permiten acceso cruzado entre clientes en entornos compartidos."
grc_condicion: "Que la organización use Dify en versión anterior a 1.14.2, especialmente en entornos multi-tenant donde coexisten múltiples clientes."
grc_explotacion: "poc_publica"
grc_alcance: "Cualquier organización con instancia de Dify anterior a 1.14.2 en entorno compartido, o con instancia propia expuesta a internet."
grc_confianza: "alta"
publicacion: "published"
---

## Qué ocurrió

Investigadores de Zafran Security identificaron cuatro vulnerabilidades en Dify — la plataforma de código abierto más usada para construir asistentes de IA, con más de un millón de aplicaciones activas. Las fallas, con severidades de 9.1 y 9.4 sobre 10, permiten que un atacante en el mismo entorno compartido lea conversaciones privadas de otras organizaciones, acceda a sus documentos y use sus credenciales de sistemas externos sin autorización. La más grave crea un canal de extracción persistente que envía todos los mensajes a un destino controlado por el atacante.

## Quién está expuesto

Organizaciones que usan Dify — en su versión alojada en la nube o en instalaciones propias que comparten entorno con otras cuentas — para construir asistentes internos, chatbots de atención, flujos de automatización o cualquier herramienta de IA. También organizaciones que usan aplicaciones construidas con Dify sin saberlo directamente.

## A considerar

Actualizar a Dify 1.14.2 de inmediato. Si el entorno es compartido con otros clientes, considerar que conversaciones y documentos pudieron haber sido accedidos antes de la actualización. Implementar reglas de firewall de aplicación para CVE-2026-41948 como capa adicional mientras se valida el parche.

## Impacto potencial

Las conversaciones de un asistente corporativo de IA contienen información sensible: preguntas sobre clientes, procesos internos, estrategia, datos financieros. Si esas conversaciones fueron accesibles para otro cliente del mismo entorno, la filtración puede no haberse manifestado todavía — pero los datos ya salieron.
