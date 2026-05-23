---
title: "TamperedChef: malware distribuido a través de apps de productividad troyanizadas y anuncios maliciosos"
date: "2026-05-20"
tipo: "Otro"
status: "Activa"
resumen: "Unit 42 documentó clusters de malware TamperedChef que distribuyen troyanos de acceso remoto mediante aplicaciones de productividad modificadas — lectores PDF, herramientas de documentos — y publicidad maliciosa."
source: "Unit 42 — Palo Alto Networks"
link: "https://unit42.paloaltonetworks.com/tracking-tampered-chef-clusters/"
publicacion: "published"
---

## Contexto

Unit 42 identificó múltiples clusters del actor TamperedChef que distribuyen payloads maliciosos usando dos vectores principales: aplicaciones de productividad troyanizadas (herramientas PDF, suites de documentos como DocuFlex y Appsuite PDF) y campañas de malvertising que imitan software legítimo. Los instaladores incluyen certificados de firma válidos para evadir detección, y el payload final instala RATs (troyanos de acceso remoto) con capacidades de robo de credenciales.

## Impacto potencial

Empleados que buscan herramientas gratuitas de productividad y las descargan desde anuncios o sitios de terceros son el vector principal. Una vez instalado el RAT, el atacante tiene acceso completo al equipo: archivos, credenciales, correo y aplicaciones empresariales abiertas.

## Recomendaciones

- Descargar software solo desde sitios oficiales del fabricante, nunca desde anuncios de búsqueda.
- Verificar el publicador del instalador antes de ejecutarlo.
- Bloquear la ejecución de instaladores no autorizados mediante políticas de grupo o MDM.
- Revisar el software instalado recientemente en equipos corporativos en busca de herramientas PDF o de documentos de origen desconocido.
