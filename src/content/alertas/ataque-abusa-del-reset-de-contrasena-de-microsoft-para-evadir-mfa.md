---
title: "Ataque abusa del reset de contraseña de Microsoft para evadir MFA y robar datos de Microsoft 365"
date: "2026-05-21"
tipo: "Otro"
status: "En monitoreo"
resumen: "El actor Storm-2949 explotó el mecanismo de Self-Service Password Reset (SSPR) de Microsoft para engañar al sistema de MFA y acceder a Microsoft 365, Azure y servicios de almacenamiento de una organización con activos de alto valor."
source: "The Hacker News"
link: "https://thehackernews.com/2026/05/threatsday-bulletin-linux-rootkits.html"
publicacion: "published"
---

## Contexto

El actor Storm-2949 no usó malware tradicional — aprovechó características legítimas de la nube para moverse sin levantar alertas. El ataque abusó del flujo de Self-Service Password Reset (SSPR) para engañar al sistema de MFA y obtener acceso. Una vez dentro, exfiltró datos de Microsoft 365, almacenamiento en la nube y entornos Azure.

Este tipo de ataque es especialmente difícil de detectar porque utiliza herramientas y flujos legítimos de la plataforma, lo que lo hace invisible para soluciones de seguridad que solo buscan malware.

## Impacto potencial

Cualquier organización con Microsoft 365 que tenga habilitado el SSPR sin controles adicionales es potencialmente vulnerable. El vector no requiere credenciales previas si el flujo de reset puede ser manipulado. La exfiltración puede incluir correos, documentos, archivos compartidos y datos de Azure.

## Recomendaciones

- Revisar la configuración de SSPR en el tenant de Microsoft 365 y restringir quién puede usarlo y desde dónde.
- Habilitar Conditional Access para bloquear resets desde ubicaciones o dispositivos no reconocidos.
- Auditar los logs de Azure AD en busca de resets de contraseña inusuales o accesos desde IPs desconocidas.
- Considerar requerir aprobación de un administrador para resets de cuentas con acceso a datos sensibles.
