---
title: "Un ataque coordinado a controladores industriales expuestos a internet bloquea a operadores de sistemas de agua"
date: "2026-07-30"
source: "SecurityWeek"
link: "https://www.securityweek.com/cisa-urges-water-sector-to-protect-ot-after-coordinated-attacks-on-plcs/"
categoria: "IoT/OT"
ambito: "Organizaciones"
nivelAtencion: "Alto"
status: "Activa"
resumen: "CISA emitió una alerta al sector de agua y saneamiento después de que más de 30 sistemas comunitarios de agua en Minnesota sufrieran un ataque coordinado que bloqueó a los operadores cambiando contraseñas y direcciones IP de controladores industriales (PLCs) expuestos a internet. La agencia recomienda desconectar estos equipos de internet y restringir el acceso remoto solo a través de VPN."
expuestos: "Organizaciones que operan controladores industriales (PLCs) en sistemas de agua, saneamiento u otra infraestructura operativa, en particular si están conectados directamente a internet."
verificacion: "Confirmar si existen PLCs conectados directamente a internet y, si es así, desconectarlos y restringir el acceso remoto solo mediante VPN o gateway con lista de direcciones autorizadas."
impacto: "Un atacante con acceso a estos controladores puede bloquear a los operadores legítimos y alterar la operación del sistema, con riesgo de interrumpir el suministro o tratamiento de agua."
grc_activo: "Controladores lógicos programables (PLCs) de sistemas de agua y saneamiento conectados a internet"
grc_vector: "Acceso a través de routers celulares y PLCs expuestos directamente a internet, seguido de cambio de contraseñas y direcciones IP para bloquear a los operadores"
grc_condicion: "Tener PLCs u otro equipo de control industrial accesible directamente desde internet, sin VPN ni restricción de direcciones IP"
grc_alcance: "Más de 30 sistemas de agua en Minnesota confirmados; CISA extiende la alerta a todo el sector de agua y saneamiento, pero la técnica (PLCs expuestos a internet) aplica a cualquier operador de infraestructura similar"
grc_confianza: "alta"
publicacion: "published"
---

## Qué ocurrió

CISA, la agencia de ciberseguridad de infraestructura de Estados Unidos, emitió una alerta al sector de agua y saneamiento después de que más de 30 sistemas comunitarios de agua en Minnesota sufrieran un ataque coordinado los días 26 y 27 de julio. Los atacantes accedieron a controladores industriales (PLCs) expuestos directamente a internet, en algunos casos a través de routers celulares, y bloquearon a los operadores cambiando contraseñas y direcciones IP de los equipos. Hay indicios que apuntan a un posible actor vinculado a Irán, pero no existe todavía una atribución formal confirmada. La investigación federal y estatal sigue en curso.

## Quién está expuesto

Organizaciones que operan controladores industriales (PLCs) en sistemas de agua, saneamiento u otra infraestructura operativa, en particular si están conectados directamente a internet sin restricciones. CISA menciona específicamente equipos de las marcas Rockwell Automation, Schneider Electric y Siemens entre los modelos afectados.

## A considerar

CISA recomienda cuatro acciones concretas: desconectar los PLCs de internet, permitir acceso remoto solo mediante VPN o gateway, activar la protección por contraseña y cambiar los valores predeterminados de fábrica, y restringir el acceso a una lista específica de direcciones IP autorizadas.

## Impacto potencial

Un atacante con acceso a estos controladores puede bloquear a los operadores legítimos y alterar la operación del sistema, con el riesgo de interrumpir el suministro o tratamiento de agua. La misma técnica, controladores industriales expuestos directamente a internet, aplica a cualquier organización con infraestructura operativa similar, no solo a plantas de agua.
