---
title: "Una app que prometía pagar por 'compartir Internet' convirtió millones de dispositivos en una red de proxies maliciosa"
date: "2026-07-06"
source: "Malwarebytes Labs"
link: "https://www.malwarebytes.com/blog/news/2026/07/netnut-botnet-takes-a-hit-dont-be-part-of-the-next-one"
categoria: "Malware"
ambito: "Personas"
nivelAtencion: "Alto"
status: "En monitoreo"
resumen: "Google, el FBI y otros socios desactivaron la infraestructura de NetNut, una red que reclutaba dispositivos de consumidores (routers, tablets, smart TVs, marcos digitales) mediante aplicaciones que prometían pago por 'compartir ancho de banda' no utilizado. Ya se desactivó el control central y las apps detectadas, pero los dispositivos que las instalaron pueden seguir comprometidos."
expuestos: "Personas que instalaron aplicaciones de 'gana dinero compartiendo tu Internet', o compraron dispositivos conectados con firmware ya comprometido de fábrica."
verificacion: "Revisar si el dispositivo tiene instalada alguna aplicación de este tipo, si el rendimiento de Internet bajó sin explicación, o si la batería se agota más rápido de lo normal."
impacto: "El dispositivo comprometido se usa como intermediario para ocultar el origen real de otro tráfico malicioso, sin que el dueño lo note, y puede sufrir degradación de rendimiento y desgaste del hardware."
grc_activo: "Dispositivos conectados de consumo: routers, tablets, smart TVs, marcos digitales."
grc_vector: "Aplicaciones que ofrecen pago por 'compartir ancho de banda no utilizado', y dispositivos vendidos con firmware malicioso preinstalado."
grc_condicion: "Haber instalado la aplicación señuelo o adquirido un dispositivo pre-comprometido."
grc_explotacion: "activa"
grc_alcance: "Millones de dispositivos de consumo a nivel global."
grc_confianza: "media"
publicacion: "published"
---

## Qué ocurrió

NetNut operaba como un proveedor aparentemente legítimo de acceso a direcciones IP residenciales, vendiendo ese acceso para supuesta "recolección de datos web". En realidad, reclutaba dispositivos mediante aplicaciones que prometían pago por compartir el Internet no utilizado, sin explicar con claridad los riesgos. Google, el FBI y otros socios desactivaron las cuentas de control central y usaron Google Play Protect para detectar y desactivar las aplicaciones comprometidas, reduciendo en millones la cantidad de dispositivos disponibles para la red.

## Quién está expuesto

Personas que instalaron aplicaciones de "gana dinero compartiendo tu Internet". También quienes compraron dispositivos conectados (streaming de TV, marcos digitales, tablets, routers) con firmware malicioso desde fábrica.

## A considerar

Señales de que un dispositivo pudo estar comprometido: Internet más lento de lo normal, batería que se agota más rápido, o desgaste inusual del equipo. Ninguna de estas señales es concluyente por sí sola, pero juntas justifican revisar qué aplicaciones tiene instaladas el dispositivo.

## Impacto potencial

El dispositivo comprometido se convierte en un intermediario que oculta el origen real de tráfico malicioso ajeno, sin que el dueño lo note. Además del riesgo de asociación indirecta con actividad ilícita que pasa por su conexión, el equipo sufre degradación de rendimiento y desgaste acelerado.
