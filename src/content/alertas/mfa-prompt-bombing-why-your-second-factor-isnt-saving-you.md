---
title: "MFA por notificación push: por qué ya no es suficiente y qué hacer al respecto"
date: "2026-05-26"
tipo: "Phishing"
status: "En monitoreo"
resumen: "Un atacante con tu contraseña puede saturar tu teléfono con solicitudes de aprobación MFA hasta que aceptas una por fatiga o distracción. No necesita robar el segundo factor — solo necesita que lo apruebes tú. Si la empresa usa MFA por notificación push sin controles adicionales, la autenticación no da la protección que parece."
source: "The Hacker News"
link: "https://thehackernews.com/2026/05/mfa-prompt-bombing-why-your-second.html"
publicacion: "published"
---

## Contexto

El ataque de MFA Prompt Bombing — también llamado fatiga de MFA — funciona así: el atacante tiene las credenciales robadas de un usuario. Inicia sesión repetidamente, lo que dispara decenas de notificaciones push al teléfono de la víctima. La mayoría de usuarios eventualmente aprueba una para que paren las notificaciones, o lo hace por error creyendo que fue su propia sesión. El atacante obtiene acceso completo sin haber superado el segundo factor técnicamente.

## Impacto potencial

Una cuenta corporativa comprometida puede abrir acceso a correo, archivos, sistemas internos y otras cuentas conectadas.

Si la cuenta tiene privilegios elevados — finanzas, dirección, administración de sistemas — el daño potencial es proporcional al acceso que otorga.

El vector no requiere malware. No requiere exploits. Solo requiere que el usuario apruebe sin pensar. Eso lo hace difícil de detectar y fácil de escalar.

## Recomendaciones

- Si recibes notificaciones de aprobación MFA que tú no iniciaste, recházalas todas. Después cambia tu contraseña de inmediato y avisa a TI.
- Nunca apruebes una solicitud MFA "para que paren" — ese es exactamente el objetivo del atacante.
- Para la empresa: solicitar a TI que evalúe migrar de notificaciones push a métodos resistentes a fatiga: aplicaciones generadoras de códigos (TOTP) o llaves de seguridad físicas.
- Si la migración no es inmediata, pedir que activen "number matching" — el usuario debe ingresar un número que aparece en pantalla, no solo tocar "aprobar".
