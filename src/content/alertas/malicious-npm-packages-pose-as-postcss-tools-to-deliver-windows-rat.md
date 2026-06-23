---
title: "Paquetes falsos en npm imitan herramientas populares de CSS para instalar acceso remoto en equipos de desarrollo"
date: "2026-06-23"
source: "The Hacker News"
link: "https://thehackernews.com/2026/06/malicious-npm-packages-pose-as-postcss.html"
categoria: "Terceros"
ambito: "Organizaciones"
nivelAtencion: "Medio"
status: "Activa"
resumen: "Tres paquetes maliciosos en npm se hacen pasar por variantes de PostCSS — una librería con más de 127 millones de descargas semanales — para instalar un programa de control remoto en equipos Windows de desarrollo. El programa persiste después de reiniciar el equipo. Equipos con proyectos web que instalaron paquetes npm en el último mes deben verificar si alguno de los tres está presente."
expuestos: "Desarrolladores web con Windows que instalaron paquetes npm relacionados con PostCSS en los últimos 30 días."
verificacion: "Si algún equipo de desarrollo tiene instalados postcss-minify-selector, postcss-minify-selector-parser o aes-decode-runner-pro."
impacto: "El atacante obtiene acceso remoto completo al equipo, con capacidad de ejecutar comandos, transferir archivos y acceder a credenciales — y desde ese equipo, llegar a repositorios de código y sistemas internos."
grc_activo: "Equipos de desarrollo con acceso a repositorios de código y sistemas de despliegue."
grc_vector: "Cadena de suministro de software — paquetes maliciosos publicados en el registro público de npm bajo nombres que imitan librerías legítimas."
grc_condicion: "Que un desarrollador haya instalado alguno de los tres paquetes en un equipo Windows en los últimos 30 días."
grc_explotacion: "activa"
grc_alcance: "Equipos de desarrollo con Windows en proyectos web que usan PostCSS o herramientas similares de procesamiento de CSS."
grc_confianza: "alta"
publicacion: "published"
---

## Qué ocurrió

Tres paquetes maliciosos publicados en npm — el registro de paquetes más usado por desarrolladores web — se hacían pasar por variantes de PostCSS, una herramienta legítima con más de 127 millones de descargas semanales. Los paquetes (postcss-minify-selector, postcss-minify-selector-parser y aes-decode-runner-pro) instalaban silenciosamente un programa de control remoto que persiste en el equipo después de apagarlo y reiniciarlo, con capacidad de shell remoto, transferencia de archivos y registro del sistema.

## Quién está expuesto

Equipos de desarrollo con Windows que instalaron alguno de los tres paquetes en las últimas semanas. El perfil objetivo es cualquier proyecto web que use PostCSS como herramienta de construcción — práctica estándar en proyectos con frameworks modernos de JavaScript.

## A considerar

Verificar el historial de instalaciones: `npm list postcss-minify-selector postcss-minify-selector-parser aes-decode-runner-pro` en cada equipo de desarrollo. Si aparece cualquiera de ellos, tratar el equipo como comprometido y rotar todas las credenciales almacenadas o accesibles desde esa máquina antes de continuar.

## Impacto potencial

Un atacante con acceso remoto al equipo de un desarrollador puede llegar a repositorios de código, credenciales de acceso a servidores, tokens de API y cualquier sistema al que ese equipo tenga acceso autorizado. La puerta de entrada es un paquete; la superficie afectada es todo lo que ese desarrollador puede alcanzar.
