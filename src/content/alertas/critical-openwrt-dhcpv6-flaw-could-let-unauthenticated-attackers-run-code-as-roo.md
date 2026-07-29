---
title: "Una falla crítica en el sistema operativo de routers OpenWrt permite tomar control total sin contraseña"
date: "2026-07-28"
source: "The Hacker News"
link: "https://thehackernews.com/2026/07/critical-openwrt-dhcpv6-flaw-could-let.html"
categoria: "Vulnerabilidad"
ambito: "Organizaciones"
nivelAtencion: "Alto"
status: "En monitoreo"
resumen: "OpenWrt, un sistema operativo usado para reemplazar el software original de routers y equipos de red, publicó una corrección para una falla crítica que permitía a un atacante, sin necesitar contraseña, tomar control total del equipo con los máximos privilegios. La corrección ya está disponible en la versión 24.10.8."
expuestos: "Organizaciones que usan routers, puntos de acceso u otros equipos de red con firmware OpenWrt instalado, especialmente si el servicio de configuración automática de red (DHCPv6) está activo."
verificacion: "Confirmar si algún equipo de red de la organización usa firmware OpenWrt y, de ser así, actualizarlo a la versión 24.10.8 o posterior."
impacto: "Control total del equipo de red por parte de un atacante externo, sin necesitar credenciales, lo que puede usarse para interceptar o redirigir todo el tráfico de la red que pasa por ese equipo."
grc_activo: "Routers y equipos de red con firmware OpenWrt, específicamente su servicio de configuración automática de direcciones (DHCPv6)"
grc_vector: "CVE-2026-53921 (CVSS 9.8): un atacante que pueda enviar tráfico de red al equipo puede provocar una falla de memoria en el servicio DHCPv6 y ejecutar código con privilegios máximos, sin necesitar usuario ni contraseña"
grc_condicion: "Tener un equipo de red con firmware OpenWrt sin actualizar a la versión 24.10.8, con el servicio DHCPv6 activo (configuración habitual por defecto)"
grc_alcance: "Cualquier equipo de red con firmware OpenWrt en versiones anteriores a 24.10.8; el alcance real depende de cuántas organizaciones usan este firmware, ampliamente usado en equipos de red personalizados"
grc_confianza: "alta"
publicacion: "published"
---

## Qué ocurrió

OpenWrt, un sistema operativo alternativo instalado en routers y otros equipos de red en lugar del software que trae de fábrica, publicó la versión 24.10.8 para corregir una falla crítica (CVE-2026-53921, calificada 9.8 sobre 10). La falla permite a un atacante que pueda enviar tráfico al equipo, sin necesitar usuario ni contraseña, provocar una falla de memoria en el servicio que asigna direcciones de red automáticamente (DHCPv6) y ejecutar código con los privilegios más altos del sistema. La versión corregida también cierra otras fallas similares en servicios de red que vienen activados por defecto.

## Quién está expuesto

Organizaciones que usan equipos de red, routers, puntos de acceso o dispositivos similares con firmware OpenWrt instalado, especialmente si el servicio de configuración automática de direcciones de red (DHCPv6) está activo, que es la configuración habitual.

## A considerar

Esta falla no requiere que el atacante esté dentro de la red ni tenga ninguna credencial: basta con poder enviar tráfico de red al equipo. Actualizar a la versión 24.10.8 es la única corrección disponible; no existe una configuración alternativa que elimine el riesgo sin actualizar.

## Impacto potencial

Un atacante que explote esta falla obtiene control total del equipo de red, lo que le permite interceptar, redirigir o bloquear todo el tráfico que pasa por él, además de usarlo como punto de entrada hacia el resto de la red interna de la organización.
