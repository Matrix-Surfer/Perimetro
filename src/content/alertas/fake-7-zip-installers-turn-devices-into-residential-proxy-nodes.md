---
title: "Más de 230 sitios falsos y una app de VPN con un millón de descargas convierten dispositivos en nodos de una red de proxies"
date: "2026-07-09"
source: "The Hacker News"
link: "https://thehackernews.com/2026/07/fake-7-zip-installers-turn-devices-into.html"
categoria: "Malware"
ambito: "Mixto"
nivelAtencion: "Crítico"
status: "Activa"
resumen: "Un grupo identificado como Lurking Lizard opera desde 2022 más de 230 dominios falsos que imitan sitios de descarga legítimos, entre ellos uno que suplanta al programa gratuito de compresión de archivos 7-Zip, además de una aplicación de VPN para Android con más de un millón de descargas en Google Play. Quien instala alguno de estos programas no obtiene la herramienta que buscaba: su dispositivo se convierte en nodo de una red de más de 773,000 direcciones IP que el atacante revende como servicio de proxies. Cualquier persona debe verificar que el software de compresión o VPN que usa provenga únicamente de la tienda o el sitio oficial del desarrollador."
expuestos: "Personas que buscan programas de compresión de archivos o aplicaciones de VPN/proxy a través de buscadores, sitios de descarga de terceros o Google Play, en lugar del sitio o tienda oficial."
verificacion: "De dónde se descargó el programa de compresión o la app de VPN instalada, si el nombre del dominio o la app tiene variaciones sospechosas del nombre original, y si el dispositivo muestra consumo de red inusual."
impacto: "El dispositivo se convierte en un punto de salida para el tráfico de otros delincuentes sin que su dueño lo note, lo que puede bloquear su propio acceso a servicios legítimos y exponer su dirección IP en actividad ilícita ajena."
grc_activo: "Dispositivos personales y de trabajo: equipos con el instalador falso de compresión, teléfonos con la app falsa de VPN."
grc_vector: "Instaladores troyanizados distribuidos por dominios que imitan sitios oficiales y una app de VPN publicada en Google Play."
grc_condicion: "Que la persona descargue el programa o la app desde una fuente distinta al sitio o tienda oficial."
grc_explotacion: "activa"
grc_alcance: "Cualquier persona que busque software de compresión o apps de VPN/proxy por fuera de la fuente oficial; más de 773,000 direcciones IP ya vinculadas a la infraestructura."
grc_confianza: "alta"
publicacion: "published"
---

## Qué ocurrió

Un grupo identificado como Lurking Lizard, activo desde al menos agosto de 2022, opera más de 230 dominios que imitan sitios de descarga legítimos. Uno de ellos suplanta al programa gratuito de compresión de archivos 7-Zip usando un nombre de dominio casi idéntico al oficial. El mismo grupo distribuye también una aplicación de VPN para Android llamada WireVPN, disponible en Google Play, con más de un millón de descargas. En ambos casos, lo que se instala no es la herramienta que la víctima buscaba: es un componente que convierte el dispositivo en nodo de una red de proxies que el grupo opera como negocio, con más de 773,000 direcciones IP vinculadas a esta infraestructura.

## Quién está expuesto

Cualquier persona que descargue un programa de compresión de archivos o una aplicación de VPN/proxy a través de un buscador, un sitio de descargas de terceros o una tienda de aplicaciones, en lugar de ir directamente al sitio o cuenta oficial del desarrollador. El grupo también suplanta reseñas independientes y servicios legítimos de proxies (como IPIDEA, SmartProxy, IP Royal y 911Proxy) para parecer confiable.

## A considerar

Verificar que el nombre del dominio o de la aplicación coincida exactamente con el oficial. El grupo usa variaciones mínimas, como "7zip.com" en lugar del dominio oficial "7-zip.org". Revisar si el dispositivo muestra consumo de red o de batería inusual, y prestar atención si un proveedor de internet bloquea el tráfico del equipo por actividad sospechosa, ya que puede ser señal de que el dispositivo está siendo usado como proxy sin autorización.

## Impacto potencial

El dispositivo comprometido se convierte en punto de salida para el tráfico de otros delincuentes sin que su dueño lo note. Esto puede involucrarlo en actividad ilícita ajena, exponer su dirección IP en investigaciones no relacionadas con él, degradar su conexión a internet y provocar que proveedores de servicios bloqueen su acceso por considerar su tráfico sospechoso.
