---
title: "Una falla crítica en una plataforma de desarrollo de software permite ejecutar comandos sin iniciar sesión"
date: "2026-07-28"
source: "The Hacker News"
link: "https://thehackernews.com/2026/07/critical-teamcity-flaw-could-let.html"
categoria: "Vulnerabilidad"
ambito: "Organizaciones"
nivelAtencion: "Alto"
status: "En monitoreo"
resumen: "JetBrains corrigió una falla crítica en TeamCity, una plataforma usada por equipos de desarrollo para automatizar la construcción y publicación de software, que permitía ejecutar comandos en el servidor sin necesitar una cuenta. Aplica solo a instalaciones propias (on-premise); las alojadas por JetBrains ya están protegidas."
expuestos: "Organizaciones que operan su propia instalación de TeamCity (no la versión en la nube de JetBrains) para automatizar procesos de desarrollo de software."
verificacion: "Confirmar si la organización usa TeamCity On-Premises y actualizarlo a la versión 2025.11.7 o 2026.1.3, según corresponda."
impacto: "Un atacante podría ejecutar comandos arbitrarios en el servidor que aloja el proceso de desarrollo de software, con posibilidad de alterar el código que la organización termina publicando a sus clientes."
grc_activo: "Servidores propios (on-premise) de TeamCity, plataforma para automatizar la construcción y publicación de software"
grc_vector: "CVE-2026-63077 (CVSS 9.8): falla que permite ejecutar comandos del sistema operativo sin necesitar iniciar sesión"
grc_condicion: "Tener una instalación propia de TeamCity On-Premises sin actualizar a la versión corregida"
grc_alcance: "Todas las versiones on-premise de TeamCity; las instancias en la nube de JetBrains (TeamCity Cloud) ya fueron corregidas por el proveedor"
grc_confianza: "alta"
publicacion: "published"
---

## Qué ocurrió

JetBrains corrigió una falla crítica (CVE-2026-63077, calificada 9.8 sobre 10) en TeamCity, una plataforma que los equipos de desarrollo usan para automatizar la construcción, prueba y publicación de software. La falla permitía a un atacante ejecutar comandos del sistema operativo en el servidor sin necesitar iniciar sesión. Afecta a todas las versiones instaladas por la propia organización (on-premise); las instancias alojadas directamente por JetBrains (TeamCity Cloud) ya estaban protegidas. La corrección está disponible en las versiones 2025.11.7 y 2026.1.3.

## Quién está expuesto

Organizaciones que operan su propia instalación de TeamCity para automatizar el proceso de desarrollo de software, en particular equipos de desarrollo internos o proveedores de software que usan esta plataforma para construir y publicar sus productos.

## Impacto potencial

Un atacante que aproveche esta falla puede ejecutar comandos con los mismos privilegios que el propio servidor, lo que abre la puerta a alterar el código fuente o el proceso de publicación de software antes de que llegue a los clientes de la organización, un riesgo que se extiende más allá del propio servidor comprometido.
