---
title: "EE.UU. y aliados advierten que grupos rusos vinculados al gobierno buscan routers mal configurados en sectores críticos"
date: "2026-07-14"
source: "SecurityWeek"
link: "https://www.securityweek.com/us-allies-warn-of-russian-cyberattacks-targeting-critical-infrastructure-routers/"
categoria: "IoT/OT"
ambito: "Organizaciones"
nivelAtencion: "Alto"
status: "Activa"
resumen: "Agencias de EE.UU. y aliados advirtieron que varios grupos de ataque vinculados al gobierno ruso buscan routers y otros equipos de red mal configurados en sectores de comunicaciones, energía, salud, gobierno y finanzas. Usan fallas conocidas de hace años, no técnicas nuevas, para copiar la configuración de esos equipos."
expuestos: "Organizaciones de comunicaciones, energía, gobierno, salud y finanzas con equipos de red (routers, switches) desactualizados o configurados con ajustes de fábrica."
verificacion: "Confirmar que los routers y switches de la organización tengan contraseñas únicas, la función Cisco Smart Install desactivada, y usen SNMPv3 en lugar de versiones antiguas del protocolo."
impacto: "El atacante puede copiar la configuración completa del equipo de red, lo que puede exponer contraseñas, la estructura de la red interna y facilitar el acceso a otros sistemas conectados."
grc_activo: "Routers y equipos de red en organizaciones de comunicaciones, defensa, energía, finanzas, gobierno y salud"
grc_vector: "Búsqueda activa de equipos con configuración insegura del protocolo SNMP, y explotación de fallas conocidas y antiguas en equipos Cisco (identificadas desde 2008 y 2018)"
grc_condicion: "Tener equipos de red con SNMP mal configurado, Cisco Smart Install activo, o sin las actualizaciones de firmware correspondientes"
grc_alcance: "Sectores de comunicaciones, base industrial de defensa, energía, finanzas, gobierno y salud, según la alerta conjunta de EE.UU. y sus aliados"
publicacion: "published"
---

## Qué ocurrió

Agencias de seguridad de Estados Unidos y varios países aliados advirtieron sobre una campaña activa de grupos de ataque vinculados a los servicios de inteligencia rusos, dirigida a routers y otros equipos de red mal configurados en sectores considerados infraestructura crítica: comunicaciones, energía, finanzas, gobierno, salud y la base industrial de defensa. Los atacantes no usan técnicas nuevas, sino fallas conocidas desde hace años en equipos Cisco, junto con una búsqueda activa de equipos que tienen el protocolo de administración de red (SNMP) configurado de forma insegura. Una vez dentro, copian la configuración completa del equipo hacia servidores bajo su control.

## Quién está expuesto

### Para organizaciones

Empresas e instituciones de los sectores mencionados que administran su propia infraestructura de red, especialmente si usan equipos Cisco sin actualizar o sin revisar la configuración del protocolo SNMP.

## A considerar

Las recomendaciones específicas de esta alerta incluyen desactivar la función Cisco Smart Install en todos los equipos, migrar de las versiones antiguas de SNMP a SNMPv3 con cifrado moderno, usar contraseñas únicas por dispositivo, y monitorear los inicios de sesión desde cuentas locales del equipo.

## Impacto potencial

Si el atacante logra copiar la configuración de un router o switch, puede obtener contraseñas almacenadas, entender cómo está construida la red interna de la organización, e identificar el camino más fácil hacia otros sistemas conectados.
