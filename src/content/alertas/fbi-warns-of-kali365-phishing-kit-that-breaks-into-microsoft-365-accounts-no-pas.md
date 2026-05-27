---
title: "Kit Kali365 compromete cuentas de Microsoft 365 sin necesidad de contraseña"
date: "2026-05-26"
tipo: "Phishing"
status: "En monitoreo"
resumen: "El FBI alertó sobre Kali365, un kit de phishing capaz de eludir la autenticación multifactor de Microsoft 365 robando el token de sesión activo del usuario. Un token de sesión es la credencial temporal que mantiene abierta una sesión; al robarlo, el atacante accede sin contraseña y puede persistir aunque la víctima cambie su clave. El riesgo aplica a cualquier organización que use Outlook, Teams u OneDrive."
source: "Graham Cluley"
link: "https://www.bitdefender.com/en-us/blog/hotforsecurity/fbi-kali365-phishing-kit-breaks-microsoft-365-accounts-no-password-required"
publicacion: "published"
---

## Contexto

So, you've enabled multi-factor authentication. You've taught your staff never to type their passwords into dodgy-looking login pages. Surely your Microsoft 365 accounts are safe now? Well, think again. Read more in my article on the Hot for Security blog.

## Impacto potencial

Una cuenta corporativa comprometida puede derivar en fraude por desvío de pagos, acceso a información confidencial o ataques a los contactos del negocio. El riesgo no es solo técnico: es financiero y de responsabilidad contractual con clientes y proveedores.

## Recomendaciones

Revisa los inicios de sesión activos en tu cuenta M365 desde portal.microsoft.com → Seguridad → Actividad de inicio de sesión y cierra sesiones no reconocidas.

Solicitar a TI que habilite Conditional Access Policies en Microsoft Entra y configure alertas ante inicios de sesión desde ubicaciones o dispositivos desconocidos.
