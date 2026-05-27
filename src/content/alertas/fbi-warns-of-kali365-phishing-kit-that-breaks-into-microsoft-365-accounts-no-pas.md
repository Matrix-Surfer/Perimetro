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

El FBI emitió una alerta sobre Kali365, un kit de phishing capaz de eludir la autenticación multifactor (MFA) de Microsoft 365 robando tokens de sesión activos. A diferencia del phishing convencional, este ataque no necesita la contraseña de la víctima: intercepta la sesión ya autenticada. Tener MFA activado no es protección suficiente contra esta técnica.

## Impacto potencial

Una cuenta corporativa comprometida puede derivar en fraude por desvío de pagos, acceso a información confidencial o ataques a los contactos del negocio. El riesgo no es solo técnico: es financiero y de responsabilidad contractual con clientes y proveedores.

## Recomendaciones

Revisa los inicios de sesión activos en tu cuenta M365 desde portal.microsoft.com → Seguridad → Actividad de inicio de sesión. Si ves sesiones que no reconoces, ciérralas de inmediato.

La protección contra este ataque existe en Microsoft 365, pero requiere activación. Si nadie en tu organización sabe si está habilitada, ese es el vacío de gobernanza que un atacante aprovecha — no el tamaño del equipo técnico.
