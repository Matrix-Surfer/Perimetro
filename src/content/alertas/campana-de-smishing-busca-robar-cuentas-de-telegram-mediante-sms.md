---
title: "Campaña de smishing busca robar cuentas de Telegram mediante SMS"
date: "2026-05-21"
tipo: "Phishing"
status: "Activa"
resumen: "Una campaña activa envía SMS fraudulentos suplantando a Telegram para obtener números de teléfono y códigos de inicio de sesión. El objetivo es tomar control total de la cuenta de la víctima y acceder a sus conversaciones."
source: "The Hacker News"
link: "https://thehackernews.com/2026/05/threatsday-bulletin-linux-rootkits.html"
publicacion: "published"
---

## Contexto

Los atacantes envían SMS que simulan ser notificaciones de seguridad de Telegram, redirigiendo a páginas falsas que solicitan el número de teléfono y el código de verificación. Con esos datos, el atacante inicia sesión desde su dispositivo y desplaza al usuario legítimo de su propia cuenta.

La técnica es efectiva porque Telegram usa el número de teléfono como identificador principal y los códigos de verificación llegan por SMS — un canal que no tiene protección adicional integrada.

## Impacto potencial

Cualquier usuario de Telegram, especialmente quienes lo usan para comunicación empresarial, coordinación de equipos o como canal de alertas operativas. El acceso a una cuenta comprometida expone todos los chats, archivos compartidos, grupos y canales a los que pertenece el usuario — incluyendo conversaciones confidenciales de negocio.

## Recomendaciones

- Activar la verificación en dos pasos en Telegram: Ajustes → Privacidad y seguridad → Verificación en dos pasos. Esto añade una contraseña adicional que el atacante no puede obtener por SMS.
- Nunca ingresar códigos de verificación de Telegram en páginas web — la app solo los solicita dentro de la aplicación oficial.
- Si recibes un SMS de Telegram sin haberlo solicitado, no hagas clic en ningún enlace — significa que alguien está intentando iniciar sesión con tu número.
- Revisar los dispositivos activos en Telegram: Ajustes → Dispositivos → cerrar sesiones desconocidas.
