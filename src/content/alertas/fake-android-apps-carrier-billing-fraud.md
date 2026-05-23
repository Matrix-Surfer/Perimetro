---
title: "Apps Android falsas suscriben a servicios premium sin que el usuario lo sepa — interceptan OTPs"
date: "2026-05-23"
tipo: "Phishing"
status: "Activa"
resumen: "Aplicaciones Android maliciosas usan automatización de WebView e interceptación de OTPs para completar suscripciones fraudulentas a servicios premium cargadas directamente a la factura del operador."
source: "Dark Reading"
link: "https://www.darkreading.com/mobile-security/fake-android-apps-carrier-billing-fraud"
publicacion: "published"
---

## Contexto

Dark Reading documentó una campaña activa de apps Android falsas que utilizan automatización de WebView, inyección de JavaScript e interceptación de códigos OTP para completar suscripciones fraudulentas a servicios premium — sin interacción del usuario y sin que aparezca ninguna alerta visible. Los cargos llegan directo a la factura del operador (carrier billing), lo que los hace difíciles de detectar hasta que llega el estado de cuenta.

## Impacto potencial

En México, donde Telcel, AT&T y Movistar ofrecen carrier billing, cualquier usuario con estas apps instaladas puede ver cargos no reconocidos en su factura mensual. Para empresas que pagan líneas corporativas, el fraude puede pasar desapercibido durante meses. Las apps se distribuyen fuera de Google Play — vía APKs descargados de sitios de terceros o anuncios maliciosos.

## Recomendaciones

- Instalar aplicaciones Android solo desde Google Play y verificar el nombre del desarrollador antes de instalar.
- Revisar el estado de cuenta del operador mensualmente en busca de suscripciones no reconocidas.
- En dispositivos corporativos, restringir la instalación de APKs externos mediante políticas MDM.
- Contactar al operador para desactivar el servicio de carrier billing si no se usa activamente.
