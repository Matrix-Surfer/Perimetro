---
title: "VMware corrige 7 fallas graves que permitían tomar control de equipos que distribuyen tráfico de red"
date: "2026-07-14"
source: "SecurityWeek"
link: "https://www.securityweek.com/7-severe-vulnerabilities-patched-in-vmware-avi-load-balancer/"
categoria: "Vulnerabilidad"
ambito: "Organizaciones"
nivelAtencion: "Alto"
status: "En monitoreo"
resumen: "VMware corrigió siete fallas graves en Avi Load Balancer, un equipo que distribuye el tráfico de red entre servidores en infraestructuras de nube híbrida. Permiten desde evadir la verificación de identidad hasta tomar control total del sistema. No hay reporte de explotación activa, pero VMware advierte que sus productos han sido blanco frecuente de ataques en el pasado."
expuestos: "Organizaciones que usan VMware Avi Load Balancer en su infraestructura de nube híbrida o de centro de datos."
verificacion: "Confirmar la versión de Avi Load Balancer instalada e instalar las actualizaciones de seguridad más recientes."
impacto: "Un atacante podría evadir la verificación de identidad, tomar control con privilegios máximos, o interceptar y redirigir el tráfico de red que pasa por el equipo."
grc_activo: "Equipos VMware Avi Load Balancer que distribuyen tráfico de red en infraestructuras de nube híbrida"
grc_vector: "Siete fallas: dos de evasión de verificación de identidad, una de ejecución remota de código, tres de elevación de privilegios a nivel administrador, y una de recorrido de directorios"
grc_condicion: "Tener acceso de red al equipo, y en algunos casos credenciales válidas, para aprovechar alguna de las fallas"
grc_alcance: "Organizaciones con VMware Avi Load Balancer en producción; sin reportes de explotación activa hasta el momento del boletín"
publicacion: "published"
---

## Qué ocurrió

VMware publicó actualizaciones para siete fallas graves en Avi Load Balancer, un equipo que distribuye el tráfico de red entre distintos servidores, muy usado en infraestructuras de nube híbrida y centros de datos. Las fallas incluyen dos formas de evadir la verificación de identidad, una que permite ejecutar código de forma remota, tres que permiten obtener privilegios de administrador total del sistema, y una que permite acceder a archivos fuera de la carpeta esperada. VMware no reporta explotación activa de estas fallas específicas, pero advierte que sus productos han sido blanco frecuente de ataques en el pasado, lo que hace importante no retrasar la actualización.

## Quién está expuesto

### Para organizaciones

Empresas que usan VMware Avi Load Balancer para distribuir tráfico entre sus servidores, tanto en nube pública como en infraestructura propia.

## A considerar

Dos de las fallas se calificaron como críticas o de alta severidad y no requieren credenciales previas para explotarse desde la red; las cinco restantes requieren cierto nivel de acceso previo. Priorizar la actualización según la exposición del equipo a redes no confiables.

## Impacto potencial

Un atacante que aproveche estas fallas podría tomar control administrativo total del equipo de distribución de tráfico, lo que le daría capacidad de interceptar, redirigir o interrumpir las comunicaciones entre los servidores de la organización.
