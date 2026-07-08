---
title: "Fallas críticas en NGINX permiten saturar o tomar control remoto de servidores web"
date: "2026-06-19"
source: "INCIBE-CERT"
link: "https://www.incibe.es/incibe-cert/alerta-temprana/avisos/multiples-vulnerabilidades-en-nginx"
categoria: "Vulnerabilidad"
ambito: "Organizaciones"
nivelAtencion: "Alto"
status: "En monitoreo"
resumen: "NGINX corrigió seis vulnerabilidades, dos de severidad crítica, que podrían permitir saturar o tomar control remoto de un servidor con una configuración no estándar. Afecta a NGINX Plus, Open Source, Gateway Fabric e Ingress Controller, además de los productos WAF de F5 basados en NGINX. No hay explotación activa confirmada. Se recomienda actualizar a la versión más reciente según el producto en uso."
expuestos: "Organizaciones que operan servidores web o balanceadores de carga con NGINX, especialmente con encabezados HTTP personalizados o soporte HTTP/3 habilitado."
verificacion: "Qué productos NGINX están en uso y si tienen habilitados encabezados HTTP personalizados de gran tamaño o soporte para HTTP/3."
impacto: "Saturación y reinicio forzado del servidor, o ejecución remota de código en sistemas sin protección ASLR, con posible afectación a la disponibilidad de servicios críticos."
grc_activo: "Servidores web y balanceadores de carga que ejecutan NGINX"
grc_vector: "Desbordamiento de memoria remoto por encabezados HTTP de gran tamaño y falla en el manejo de HTTP/3"
grc_condicion: "Ejecutar una configuración no predeterminada (encabezados personalizados grandes o soporte HTTP/3) en una versión no parchada"
grc_explotacion: "poc_publica"
grc_alcance: "Organizaciones con infraestructura web basada en NGINX, incluyendo productos WAF de F5"
grc_confianza: "alta"
publicacion: "review"
---

## Qué ocurrió

NGINX corrigió seis vulnerabilidades, dos de severidad crítica. La primera es un desbordamiento de memoria remoto que ocurre al procesar encabezados HTTP de gran tamaño en solicitudes hacia servidores internos; puede forzar el reinicio del servidor o, en sistemas sin la protección ASLR, permitir ejecución remota de código. La segunda es una falla en el manejo de HTTP/3 que puede provocar el mismo tipo de impacto. Ambas solo aplican a configuraciones no predeterminadas. Las otras cuatro fallas son de severidad media y alta. No hay explotación activa confirmada.

## Quién está expuesto

Organizaciones que operan servidores con NGINX Plus, NGINX Open Source, NGINX Instance Manager, F5 WAF for NGINX, NGINX App Protect, NGINX Gateway Fabric o NGINX Ingress Controller, especialmente si tienen habilitados encabezados HTTP personalizados de gran tamaño o soporte para HTTP/3.

## A considerar

Las dos fallas críticas solo aplican a configuraciones no predeterminadas: encabezados HTTP personalizados de gran tamaño y soporte HTTP/3. Revisar si el servidor usa alguna de esas configuraciones ayuda a priorizar qué actualizar primero.

## Impacto potencial

Un atacante podría saturar el servidor y forzar su reinicio, o en sistemas sin la protección ASLR, ejecutar código de forma remota y tomar control del servidor. Dado el uso masivo de NGINX como base de sitios web y balanceadores de carga, una falla sin corregir puede afectar la disponibilidad de servicios críticos.
