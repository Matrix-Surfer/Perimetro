---
title: "Los servidores corporativos en la nube se convierten en infraestructura de envío de correos maliciosos sin que sus dueños lo sepan"
date: "2026-06-05"
source: "The Hacker News"
link: "https://thehackernews.com/2026/06/pcpjack-hijacks-230-aws-google-cloud.html"
categoria: "Otro"
ambito: "Mixto"
nivelAtencion: "Alto"
status: "Activa"
resumen: "Atacantes tomaron 230 servidores corporativos en AWS, Google Cloud y Azure para enviar correos maliciosos. Al provenir de infraestructura legítima, estos mensajes evaden filtros de spam y llegan directamente a la bandeja de entrada."
expuestos: "Organizaciones con servidores en la nube mal configurados que pueden ser parte de la red sin saberlo, y cualquier persona que reciba correos de remitentes aparentemente legítimos."
verificacion: "Revisar si los servidores de la empresa están enviando correos no autorizados; aumentar el nivel de sospecha ante mensajes urgentes aunque el remitente parezca conocido."
impacto: "Correos de engaño más efectivos porque pasan filtros de seguridad; empleados más propensos a responder a mensajes que parecen legítimos, lo que facilita robo de contraseñas o transferencias no autorizadas."
grc_activo: "Servidores en la nube de empresas (AWS, Google Cloud, Azure)"
grc_vector: "Toma de control de servidores mal configurados para usarlos como relay de correo"
grc_condicion: "Servidores con credenciales débiles o puertos de administración expuestos"
grc_explotacion: "activa"
grc_alcance: "Organizaciones con servidores en la nube; cualquier destinatario de correo electrónico"
grc_confianza: "media"
publicacion: "published"
---

## Qué ocurrió

Un actor malicioso identificado como PCPJack comprometió 230 servidores alojados en Amazon Web Services, Google Cloud y Microsoft Azure. En lugar de atacar directamente a sus víctimas, los convirtió en una red encubierta para enviar correos. Cada cinco minutos, los servidores comprometidos sincronizaban nuevos mensajes para distribuir. El objetivo: que los correos maliciosos parecieran provenir de infraestructura corporativa legítima y así evitar los filtros de seguridad.

## Quién está expuesto

### Para personas

Cualquier persona que reciba correos de trabajo o de servicios conocidos. Los mensajes enviados a través de esta red tienen más probabilidades de llegar a la bandeja de entrada porque provienen de infraestructura de empresas reales — no de servidores anónimos que los filtros bloquearían.

### Para organizaciones

Dos grupos distintos:

- **Las que pueden ser parte del problema sin saberlo:** empresas con servidores en la nube con configuraciones débiles, cuya infraestructura puede estar siendo utilizada para enviar correos maliciosos en este momento.
- **Las que recibirán los correos:** cualquier organización con empleados que usen correo electrónico. Los filtros de spam estándar no distinguen estos mensajes de los legítimos.

## A considerar

- Si la empresa tiene servidores en la nube: validar los registros actividad inusual o mensajes que no reconoces como enviados por la organización.

## Impacto potencial

Una red de correo malicioso que opera desde infraestructura legítima multiplica la efectividad del engaño. Los empleados que normalmente ignorarían un mensaje sospechoso pueden responder a uno que pasa todos los filtros técnicos. El daño ocurre después: robo de contraseñas, transferencias no autorizadas, acceso a sistemas internos. La urgencia aparente en el mensaje es parte del diseño — no de la casualidad.
