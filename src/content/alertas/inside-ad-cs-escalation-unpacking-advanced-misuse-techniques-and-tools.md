---
title: "Escalación en Active Directory Certificate Services: técnica activa usada por grupos APT documentada por Unit 42"
date: "2026-05-11"
tipo: "Otro"
status: "Activa"
resumen: "Unit 42 documentó cómo atacantes explotan plantillas mal configuradas en AD CS para escalar privilegios hasta Domain Admin. El grupo Fighting Ursa (APT ruso) ya utiliza activamente estas técnicas."
source: "Unit 42 — Palo Alto Networks"
link: "https://unit42.paloaltonetworks.com/active-directory-certificate-services-exploitation/"
publicacion: "published"
---

## Contexto

Active Directory Certificate Services (AD CS) es el componente de Windows que gestiona certificados digitales dentro de una organización. Unit 42 documentó cómo atacantes abusan de plantillas de certificados mal configuradas (técnica conocida como ESC1) y de credenciales en la sombra para obtener permisos de Domain Admin — el nivel más alto de control en una red Windows. El grupo Fighting Ursa, vinculado a inteligencia rusa, ya utiliza activamente estas técnicas en campañas documentadas.

## Impacto potencial

Organizaciones con Active Directory y AD CS activado son vulnerables si las plantillas de certificados no están auditadas. El atacante que explota esta vía obtiene control total del dominio Windows: acceso a todos los servidores, usuarios y recursos de red. Es una de las rutas de escalación de privilegios más sigilosas disponibles en entornos corporativos Windows.

## Recomendaciones

- Auditar las plantillas de certificados en AD CS usando la herramienta Certify o Certipy en modo de solo lectura.
- Revisar qué usuarios o grupos tienen permisos de inscripción en plantillas sensibles.
- Deshabilitar o restringir plantillas que permitan `enrollee supplies subject` si no son necesarias.
- Activar logging de eventos relacionados con AD CS (Event IDs 4886, 4887) para detectar solicitudes anómalas.
