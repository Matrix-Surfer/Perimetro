---
title: "Un servicio de alquiler bajo demanda arma aplicaciones espía para robar cuentas bancarias en Android"
date: "2026-07-07"
source: "The Hacker News"
link: "https://thehackernews.com/2026/07/redwing-maas-packages-android-bank.html"
categoria: "Fraude"
ambito: "Personas"
nivelAtencion: "Alto"
status: "Activa"
resumen: "Un nuevo servicio de malware llamado RedWing se renta por suscripción y arma, bajo pedido, una aplicación de Android capaz de robar accesos bancarios, sin que quien la contrata necesite saber programar. La app se hace pasar por una tienda de aplicaciones legítima. Se recomienda verificar el origen de cualquier aplicación instalada fuera de Google Play."
expuestos: "Personas que usan banca o billeteras de criptomonedas desde un teléfono Android."
verificacion: "Si se instaló alguna aplicación de banco o billetera cripto fuera de la tienda oficial de Google Play."
impacto: "Robo de contraseñas bancarias, interceptación de códigos de un solo uso y desvío de llamadas entrantes sin que la víctima lo note."
grc_activo: "Credenciales bancarias y códigos de un solo uso en dispositivos Android"
grc_vector: "Aplicación Android maliciosa distribuida por enlaces de phishing que imitan tiendas de aplicaciones oficiales"
grc_condicion: "Que la víctima instale la aplicación fuera de Google Play siguiendo un enlace de phishing"
grc_explotacion: "activa"
grc_alcance: "Usuarios de Android con aplicaciones bancarias o de criptomonedas instaladas"
grc_confianza: "alta"
publicacion: "review"
---

## Qué ocurrió

Un nuevo servicio de malware llamado RedWing se ofrece por suscripción, con descuentos por referidos, guías y videos de uso, así que quien lo contrata no necesita saber programar. Un bot arma bajo pedido una aplicación de Android personalizada para cada comprador. La infección empieza con un enlace de phishing que abre una página falsa de tienda de aplicaciones, capaz de imitar por completo a Google Play, Galaxy Store o AppGallery, incluyendo reseñas y número de descargas falsos.

## Quién está expuesto

Personas que usan banca en línea o billeteras de criptomonedas desde su teléfono Android.

## A considerar

Si el enlace de descarga de una aplicación no llegó directamente desde la tienda oficial (Google Play), no debe instalarse, sin importar qué tan real se vea la página. RedWing puede replicar la apariencia completa de una tienda legítima.

## Impacto potencial

Con el teléfono comprometido, el atacante puede mostrar pantallas falsas superpuestas a la app real del banco para robar contraseñas, leer los códigos de un solo uso que llegan por mensaje de texto, desviar llamadas entrantes a su propio número sin que la víctima lo note, y observar la pantalla en tiempo real. El resultado es control casi total sobre las cuentas bancarias de la víctima.
