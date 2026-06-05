---
title: "Microsoft 365 Android Apps Let Any App Steal Account Tokens via Leftover Debug Flag"
pubDate: 2026-06-03
source: "The Hacker News"
link: "https://thehackernews.com/2026/06/microsoft-365-android-apps-let-any-app.html"
category: "Seguridad"
señal: ""
supuesto: ""
observación: ""
context: "Las organizaciones que usan el ecosistema Microsoft deben verificar si sus versiones actuales están afectadas y cuándo está programada la actualización en su entorno."
grc_cambio: ""
grc_paradigma: ""
grc_horizonte: "meses"
grc_confianza: "baja"
publicacion: "draft"
---

## La señal

A development flag left switched on in production builds of several Microsoft 365 Android apps disabled the check that limits account-token sharing to trusted Microsoft apps. Any other app on the same phone could ask for the signed-in user's token and get it, then read email, open files, browse the calendar, and send messages as that user. No password, no login screen, no permission prompt.

## El supuesto que se rompe

## Qué observar

