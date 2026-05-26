---
title: "MFA por notificación push: por qué ya no es suficiente y qué hacer al respecto"
date: "2026-05-26"
tipo: "Phishing"
status: "En monitoreo"
resumen: "Un atacante con las credenciales de un empleado puede saturar su celular con solicitudes de aprobación MFA hasta que alguien cede por fatiga o distracción. No necesita robar el segundo factor: solo necesita que el usuario apruebe sin pensar. Si la empresa usa MFA por notificación push sin controles adicionales, la autenticación no ofrece la protección que se cree."
source: "The Hacker News"
link: "https://thehackernews.com/2026/05/mfa-prompt-bombing-why-your-second.html"
publicacion: "published"
---

## Contexto

El ataque de MFA Prompt Bombing (también llamado MFA fatigue) explota la mecánica de las notificaciones push: el atacante, que ya tiene las credenciales robadas, dispara decenas de solicitudes de aprobación al celular de la víctima. La mayoría de usuarios eventualmente aprueba para detener las notificaciones, o lo hace por error creyendo que fue su propia sesión. El resultado es acceso completo a la cuenta sin haber superado el segundo factor técnicamente.

## Impacto potencial

Una cuenta corporativa comprometida puede abrir acceso a correo, archivos, sistemas internos y, en muchos casos, permite al atacante moverse a otras cuentas. Si la cuenta tiene privilegios elevados — administrador, finanzas, dirección — el daño potencial es proporcional al acceso que otorga. El vector no requiere malware ni exploits: solo ingeniería social de bajo costo sobre un factor de autenticación mal configurado.

## Recomendaciones

- Migrar de notificaciones push simples a métodos resistentes a fatiga: FIDO2/llaves de seguridad físicas o TOTP (aplicación generadora de códigos).
- Si el proveedor de identidad lo soporta, activar "number matching" — el usuario debe ingresar un número que aparece en pantalla, no solo aprobar.
- Activar el contexto de inicio de sesión: mostrar IP y ubicación en la notificación push para que el usuario detecte solicitudes que no inició.
- Revisar cuáles cuentas críticas usan push como único método MFA y priorizarlas para migración.
