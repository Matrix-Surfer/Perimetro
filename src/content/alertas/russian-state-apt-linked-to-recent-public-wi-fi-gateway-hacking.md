---
title: "Un grupo de espionaje ruso manipula el wifi de hoteles y centros de conferencias para robar accesos de Microsoft 365 a viajeros de negocio"
date: "2026-08-03"
source: "SecurityWeek"
link: "https://www.securityweek.com/russian-state-apt-linked-to-recent-public-wi-fi-gateway-hacking/"
categoria: "Phishing"
ambito: "Organizaciones"
nivelAtencion: "Alto"
status: "Activa"
resumen: "El grupo de espionaje ruso Midnight Blizzard, vinculado al servicio de inteligencia exterior de Rusia, manipuló las redes wifi de hoteles, centros de conferencias y espacios compartidos desde mayo de 2026, interceptando el tráfico para robar credenciales de Microsoft 365 de viajeros de negocio en sectores financiero, legal, salud, energía y retail. Usan páginas falsas de inicio de sesión y solicitudes fraudulentas de códigos de verificación."
expuestos: "Empleados que viajan y se conectan a redes wifi de hoteles, centros de conferencias o espacios compartidos, particularmente en los sectores financiero, profesional, legal, salud, energía y retail."
verificacion: "Confirmar que la organización exige el uso de VPN al conectarse a wifi público durante viajes, y que la autenticación multifactor de Microsoft 365 está activa para todo el personal que viaja."
impacto: "Robo de credenciales de Microsoft 365 que permite a un atacante acceder al correo corporativo, documentos y otros servicios de la cuenta comprometida, con fines de espionaje o robo de información sensible."
grc_activo: "Cuentas de Microsoft 365 de empleados que viajan y se conectan a wifi público"
grc_vector: "Manipulación de la configuración DNS en equipos de portales de acceso wifi de hoteles y centros de conferencias, seguida de interceptación de tráfico tipo adversario en el medio y páginas falsas que piden ingresar códigos de verificación de inicio de sesión de Microsoft"
grc_condicion: "Conectarse a una red wifi pública comprometida y completar un inicio de sesión de Microsoft 365 sin verificar la autenticidad de la solicitud"
grc_explotacion: "activa"
grc_alcance: "Viajeros de negocio en sectores financiero, servicios profesionales, legal, salud, energía y retail; campaña identificada por Microsoft desde mayo de 2026"
grc_confianza: "alta"
publicacion: "published"
---

## Qué ocurrió

Microsoft identificó una campaña del grupo de espionaje ruso Midnight Blizzard, vinculado al servicio de inteligencia exterior de Rusia, que manipuló la configuración de equipos de acceso a wifi público (portales cautivos) en hoteles, centros de conferencias y espacios compartidos desde mayo de 2026. Al conectarse a estas redes, el tráfico de las víctimas fue interceptado mediante una técnica de adversario en el medio, y se les presentaron páginas falsas que las dirigían a ingresar códigos de verificación en supuestos flujos de inicio de sesión de Microsoft. El objetivo fueron viajeros de negocio en sectores financiero, servicios profesionales, legal, salud, energía y retail.

## Quién está expuesto

Empleados que viajan y se conectan a redes wifi de hoteles, centros de conferencias o espacios compartidos, particularmente en los sectores financiero, profesional, legal, salud, energía y retail.

## A considerar

La autenticación multifactor no es suficiente si la solicitud de código se completa en una página falsa; conviene que las organizaciones capaciten a su personal para desconfiar de cualquier solicitud de inicio de sesión que aparezca justo después de conectarse a una red wifi pública, y exigir el uso de VPN corporativa en viajes.

## Impacto potencial

Un atacante con acceso a la cuenta de Microsoft 365 de un viajero puede leer y extraer correo corporativo, documentos y otra información sensible, con fines de espionaje o robo de información estratégica de la organización.
