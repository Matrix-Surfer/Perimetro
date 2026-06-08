---
title: "Falla crítica en equipos de red Ubiquiti permite control total sin contraseña"
date: "2026-06-08"
source: "BleepingComputer"
link: "https://www.bleepingcomputer.com/news/security/critical-unifi-os-bug-lets-hackers-gain-root-without-authentication/"
categoria: "Vulnerabilidad"
ambito: "Mixto"
nivelAtencion: "Alto"
status: "En monitoreo"
resumen: "Una falla crítica en el sistema operativo de los equipos de red Ubiquiti UniFi permite a un atacante con acceso a la red tomar control total del dispositivo sin usuario ni contraseña. Ubiquiti publicó una actualización. Las organizaciones que no hayan aplicado el parche siguen expuestas."
expuestos: "Empresas y oficinas con equipos Ubiquiti UniFi — routers, switches y puntos de acceso — conectados a su red."
verificacion: "Confirmar si los equipos UniFi tienen instalada la versión más reciente del firmware desde el panel de administración."
impacto: "Un atacante dentro de la red podría tomar control total del equipo, redirigir el tráfico, interceptar comunicaciones o usar el dispositivo como punto de entrada a otros sistemas."
grc_activo: "Equipos de red Ubiquiti UniFi con UniFi OS sin actualizar"
grc_vector: "Acceso a la red local o remoto al panel de administración del dispositivo"
grc_condicion: "Dispositivo accesible en la red con firmware desactualizado"
grc_explotacion: "poc_publica"
grc_alcance: "Organizaciones que usan equipos UniFi como infraestructura de red"
grc_confianza: "alta"
publicacion: "published"
---

## Qué ocurrió

Ubiquiti publicó una actualización de emergencia para su sistema operativo UniFi OS tras descubrir una falla crítica. La vulnerabilidad permite a cualquier persona con acceso a la red obtener control total del dispositivo sin necesidad de usuario ni contraseña. No se requiere engaño ni contraseña robada: solo estar en la misma red.

## Quién está expuesto

### Para organizaciones

Empresas que usan equipos de red de la marca Ubiquiti — routers, switches y puntos de acceso inalámbrico — bajo la línea UniFi. Es una marca muy extendida en oficinas medianas que buscan equipos de calidad empresarial a precio accesible.

### Para personas

Usuarios domésticos con routers o equipos UniFi Dream Machine en casa.

## A considerar

La falla afecta al sistema operativo base del equipo, no a una funcionalidad específica. Actualizar el firmware desde el panel de administración UniFi es la única corrección disponible. Si el panel de administración está expuesto a Internet, la urgencia es mayor.

## Impacto potencial

Un atacante con acceso a la red podría tomar control total del equipo de red. Desde ahí puede interceptar todo el tráfico de Internet de la organización, redirigir conexiones a sitios falsos, o usar el dispositivo como punto de entrada silencioso hacia otros sistemas internos.
