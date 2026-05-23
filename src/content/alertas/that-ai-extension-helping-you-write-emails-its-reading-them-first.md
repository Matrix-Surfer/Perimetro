---
title: "Las extensiones de IA que te ayudan a redactar correos también los están leyendo"
date: "2026-04-30"
tipo: "Otro"
status: "Activa"
resumen: "Unit 42 identificó extensiones de navegador con IA que se presentan como herramientas de productividad pero interceptan correos, roban contraseñas y exfiltran datos en segundo plano."
source: "Unit 42 — Palo Alto Networks"
link: "https://unit42.paloaltonetworks.com/high-risk-gen-ai-browser-extensions/"
publicacion: "published"
---

## Contexto

Unit 42 documentó extensiones de Chrome y Edge que se presentan como asistentes de IA para redactar correos o resumir textos, pero operan como infostealers. Las extensiones interceptan los prompts del usuario, leen el contenido de los correos antes de procesarlos y exfiltran contraseñas y tokens de sesión activos hacia servidores externos. Algunas también actúan como troyanos de acceso remoto y secuestradores de búsqueda.

## Impacto potencial

Cualquier empleado que instale una de estas extensiones expone la bandeja de entrada corporativa completa, las credenciales guardadas en el navegador y las sesiones activas de herramientas como Google Workspace o Microsoft 365. El atacante obtiene acceso persistente sin necesidad de vulnerar el servidor de correo.

## Recomendaciones

- Auditar las extensiones instaladas en navegadores de equipos corporativos.
- Establecer política de extensiones aprobadas: solo instalar desde fuentes verificadas por el área de IT.
- Desinstalar extensiones de IA de origen desconocido o publicador no verificado.
- Revisar los permisos OAuth otorgados a aplicaciones de terceros en Google Workspace o Microsoft 365.
