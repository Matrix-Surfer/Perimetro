---
title: "Plugins pagados para WordPress llevan código oculto que permite acceso no autorizado a los sitios que los instalaron"
date: "2026-06-22"
source: "The Hacker News"
link: "https://thehackernews.com/2026/06/shapedplugin-wordpress-pro-plugins.html"
categoria: "Malware"
ambito: "Mixto"
nivelAtencion: "Alto"
status: "Activa"
resumen: "Varios plugins premium de WordPress del desarrollador ShapedPlugin fueron comprometidos en un ataque a la cadena de distribución. Los atacantes insertaron una puerta trasera — acceso oculto — en las actualizaciones. Sitios que instalaron versiones recientes de estos plugins pueden estar comprometidos sin saberlo."
expuestos: "Administradores de sitios WordPress que usan plugins de ShapedPlugin, incluyendo Slider Revolution, WP Carousel y similares"
verificacion: "Verificar qué plugins de ShapedPlugin están instalados y en qué versión, y comparar contra la lista de versiones afectadas publicada"
impacto: "Una puerta trasera activa permite modificar el contenido del sitio, robar datos de visitantes, instalar programas adicionales o usar el servidor para atacar a otros"
publicacion: "published"
---

## Qué ocurrió

Atacantes comprometieron el proceso de distribución de plugins premium de ShapedPlugin, un desarrollador de extensiones para WordPress, e insertaron una puerta trasera — acceso oculto no autorizado — en las actualizaciones. Los sitios que instalaron versiones recientes de estos plugins pueden tener ese acceso activo sin saberlo.

## Quién está expuesto

Administradores de sitios WordPress que usan plugins de ShapedPlugin — incluidos Slider Revolution, WP Carousel, Logo Carousel y similares. El riesgo afecta tanto a sitios de pequeñas empresas como a portales institucionales o de comercio electrónico.

## A considerar

Los plugins premium se actualizan automáticamente en muchos sitios. Si el sitio actualizó estos plugins en las últimas semanas, debe asumirse que el acceso oculto puede estar presente hasta verificar lo contrario. Revisar los registros de acceso del servidor puede revelar actividad inusual.

## Impacto potencial

Una puerta trasera activa permite a los atacantes modificar el contenido del sitio, capturar datos de formularios y pagos, instalar programas adicionales o usar el servidor web como plataforma para atacar a otros sitios.
