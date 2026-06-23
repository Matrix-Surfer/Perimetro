---
title: "Falla de 29 años en servidor proxy expone peticiones de internet sin cifrar"
date: "2026-06-22"
source: "The Hacker News"
link: "https://thehackernews.com/2026/06/29-year-old-squid-proxy-bug-squidbleed.html"
categoria: "Vulnerabilidad"
ambito: "Mixto"
nivelAtencion: "Medio"
status: "En monitoreo"
resumen: "Se descubrió una vulnerabilidad de 29 años en Squid, un servidor proxy usado por empresas y universidades para gestionar el tráfico de internet. La falla permite que peticiones HTTP se filtren en texto legible. Organizaciones con Squid instalado deben verificar su versión y aplicar actualizaciones."
expuestos: "Organizaciones que usan Squid Proxy como servidor de caché o control de acceso a internet"
verificacion: "Confirmar si existe Squid instalado en la red y qué versión corre"
impacto: "Peticiones internas podrían quedar expuestas, incluyendo credenciales enviadas sin cifrado"
publicacion: "published"
---

## Qué ocurrió

Investigadores revelaron una vulnerabilidad apodada "Squidbleed" en Squid, un servidor proxy (intermediario de tráfico de red) ampliamente usado en empresas y universidades. La falla lleva 29 años presente sin detectarse. Permite filtrar peticiones HTTP — comunicaciones que viajan sin cifrar — hacia partes no autorizadas.

## Quién está expuesto

Organizaciones que usan Squid como punto de control de acceso a internet o como servidor de caché. Es especialmente común en instituciones educativas, organismos públicos y redes corporativas que gestionan el tráfico de sus usuarios.

## Impacto potencial

Si se explota, un atacante con acceso a la red podría interceptar peticiones internas en texto legible, incluyendo accesos a sistemas que no usan cifrado. Dependiendo de lo que circule por el proxy, podría capturarse información de navegación, credenciales o datos internos.
