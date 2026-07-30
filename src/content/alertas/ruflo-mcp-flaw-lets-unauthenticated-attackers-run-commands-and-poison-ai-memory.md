---
title: "Falla crítica en un framework de agentes de IA permite ejecutar comandos sin credenciales y alterar su memoria"
date: "2026-07-29"
source: "The Hacker News"
link: "https://thehackernews.com/2026/07/ruflo-mcp-flaw-lets-unauthenticated.html"
categoria: "Vulnerabilidad"
ambito: "Mixto"
nivelAtencion: "Alto"
status: "En monitoreo"
resumen: "Investigadores de Noma Security identificaron una falla de severidad máxima (CVE-2026-59726, CVSS 10.0) en Ruflo, una plataforma de código abierto para orquestar agentes de IA (antes llamada Claude Flow, con más de 66,000 estrellas en GitHub). La configuración por defecto expone sin autenticación un puerto de control que permite ejecutar comandos en el servidor y contaminar de forma permanente la memoria que el agente usa para responder a todos sus usuarios futuros. La falla, bautizada RufRoot, fue corregida en la versión 3.16.3 dentro de las 24 horas posteriores a su divulgación responsable."
expuestos: "Organizaciones y desarrolladores que despliegan Ruflo con la configuración por defecto de docker-compose, que expone el puerto de control a la red sin restricción."
verificacion: "Confirmar la versión de Ruflo instalada (actualizar a 3.16.3 o posterior) y revisar si el despliegue expone los puertos 3001 y 27017 a la red sin firewall."
impacto: "Compromiso del servidor sin necesidad de credenciales, y contaminación duradera de la memoria del agente de IA que afecta las respuestas a todos los usuarios futuros de la plataforma, mucho después de cerrado el acceso inicial."
grc_activo: "Ruflo (plataforma de código abierto para orquestar agentes de IA, antes Claude Flow, más de 66,000 estrellas en GitHub)"
grc_vector: "Solicitud HTTP POST sin autenticación al puerto 3001, con una carga que invoca la función terminal_execute; el puerto queda expuesto a toda la red por la configuración por defecto de docker-compose"
grc_condicion: "Despliegue con la configuración por defecto, que vincula el puerto 3001 (y el de la base de datos, 27017) a todas las interfaces de red en lugar de restringirlo a acceso local"
grc_explotacion: "poc_publica"
grc_alcance: "Instalaciones de Ruflo en versiones anteriores a 3.16.3 desplegadas con la configuración por defecto, con el puerto de control expuesto a la red"
grc_confianza: "alta"
publicacion: "published"
---

## Qué ocurrió

Investigadores de Noma Security identificaron una falla de severidad máxima (CVE-2026-59726, la puntuación más alta posible en la escala de severidad) en Ruflo, una plataforma de código abierto para orquestar agentes de inteligencia artificial, conocida anteriormente como Claude Flow y con más de 66,000 estrellas en GitHub. El origen del problema es una configuración insegura por defecto: el archivo de despliegue estándar deja un puerto de control abierto a toda la red, sin pedir ninguna credencial. Un atacante puede enviar una sola solicitud a ese puerto para ejecutar comandos directamente en el servidor. La falla, bautizada RufRoot, fue corregida en la versión 3.16.3 dentro de las 24 horas posteriores a su divulgación responsable el 30 de junio de 2026.

## Quién está expuesto

Organizaciones y desarrolladores que despliegan Ruflo siguiendo la configuración por defecto, sin restringir el acceso de red a ese puerto de control mediante un firewall.

## A considerar

Quien haya operado una instancia vulnerable, además de actualizar, debería: cerrar el acceso externo a los puertos 3001 y 27017; rotar las llaves de acceso a los modelos de IA (API keys) que la plataforma tuviera configuradas; revisar la base de datos de memoria del agente (AgentDB) en busca de instrucciones que no haya escrito el equipo; y reconstruir los contenedores desde una imagen limpia en lugar de solo aplicar el parche sobre la instalación existente.

## Impacto potencial

Un atacante podía tomar control del servidor sin necesidad de credenciales y, además, insertar instrucciones maliciosas en la memoria permanente del agente de IA. Esas instrucciones alteran las respuestas que el agente da a todos sus usuarios futuros, mucho después de que el ataque inicial haya terminado y sin que quede un rastro evidente de intrusión activa.
