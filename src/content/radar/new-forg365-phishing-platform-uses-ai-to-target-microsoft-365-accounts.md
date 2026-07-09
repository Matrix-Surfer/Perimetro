---
title: "Un kit de phishing por suscripción usa IA para automatizar el robo y la renovación de sesiones de Microsoft 365"
pubDate: 2026-07-09
source: "BleepingComputer"
link: "https://www.bleepingcomputer.com/news/security/new-forg365-phishing-platform-uses-ai-to-target-microsoft-365-accounts/"
category: "Seguridad"
señal: "Una plataforma de phishing por suscripción (Forg365) usa IA para generar y perfeccionar los mensajes de engaño, y ofrece una extensión de navegador que renueva automáticamente el acceso a la cuenta de la víctima sin necesidad de volver a robar la contraseña."
supuesto: "Que cambiar la contraseña o exigir verificación en dos pasos basta para cortarle el acceso a un atacante que ya entró una vez."
observación: "Con qué frecuencia los equipos de TI revisan y revocan sesiones y tokens activos en Microsoft 365, no solo contraseñas, tras un incidente."
context: "Forg365 no es una campaña de phishing más: es un servicio por suscripción que combina generación de mensajes con inteligencia artificial, robo de sesión mediante intercepción del inicio de sesión legítimo, y una extensión de navegador que mantiene el acceso vivo renovando automáticamente las credenciales de sesión. La verificación en dos pasos deja de ser una barrera una vez que el atacante ya interceptó la sesión: el problema ya no es solo qué tan fuerte es la contraseña, sino cuánto tiempo permanece activo un acceso robado sin que nadie lo note."
grc_cambio: "Las plataformas de phishing por suscripción incorporan IA para generar engaños y automatizan la renovación de sesiones robadas sin necesidad de volver a autenticarse."
grc_paradigma: "Que cambiar la contraseña o exigir verificación en dos pasos basta para cortarle el acceso a un atacante que ya entró una vez."
grc_horizonte: "meses"
grc_confianza: "media"
publicacion: "published"
---

## La señal

Forg365 es una plataforma de phishing por suscripción que combina dos técnicas para robar el acceso a cuentas de Microsoft 365: hace que la víctima autorice un dispositivo mediante un mecanismo legítimo de Microsoft, y al mismo tiempo actúa como intermediario invisible que captura la sesión activa. La plataforma usa inteligencia artificial para generar y perfeccionar los mensajes de engaño desde un solo panel, y ofrece una extensión de navegador que renueva automáticamente las credenciales de sesión robadas para mantener el acceso sin volver a autenticarse.

## El supuesto que se rompe

Que cambiar la contraseña o exigir verificación en dos pasos es suficiente para cortarle el paso a un atacante. Si el atacante ya capturó la sesión activa, esas medidas dejan de ser una barrera: el acceso robado se mantiene vivo de forma automática.

## Qué observar

Con qué frecuencia los equipos de TI revisan y revocan sesiones y tokens activos en Microsoft 365, no solo contraseñas, tras un incidente, y si existen reglas de reenvío de correo o registros de inicio de sesión desde ubicaciones inusuales que indiquen una sesión robada todavía activa.
