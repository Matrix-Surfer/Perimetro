---
title: "Atacantes norcoreanos comprometieron paquetes de código abierto para IA usados por desarrolladores"
date: "2026-06-22"
source: "SecurityWeek"
link: "https://www.securityweek.com/north-korean-hackers-blamed-for-mastra-npm-supply-chain-attack/"
categoria: "Terceros"
ambito: "Organizaciones"
nivelAtencion: "Alto"
status: "En monitoreo"
resumen: "Investigadores atribuyen a operadores norcoreanos el ataque a paquetes npm del framework Mastra para inteligencia artificial. Los atacantes comprometieron la cuenta de un contribuidor para distribuir versiones maliciosas del paquete. Equipos de desarrollo que instalaron Mastra deben verificar qué versión tienen y tratar el entorno como comprometido si fue afectado."
expuestos: "Equipos de desarrollo de software que usan el framework Mastra para construir aplicaciones de inteligencia artificial"
verificacion: "Verificar qué versiones de paquetes @mastra están instaladas y compararlas contra la lista de versiones comprometidas publicada"
impacto: "Código malicioso en el entorno de desarrollo puede filtrar credenciales, modificar el comportamiento de la aplicación o abrir acceso al servidor donde corre"
publicacion: "published"
---

## Qué ocurrió

Microsoft y otros investigadores atribuyen a operadores norcoreanos el ataque a los paquetes npm del framework Mastra, una herramienta de código abierto para construir aplicaciones de inteligencia artificial en JavaScript y TypeScript. Los atacantes comprometieron la cuenta de un contribuidor legítimo y publicaron versiones maliciosas de los paquetes. Cualquier equipo que los instaló en ese periodo integró código malicioso en su proyecto.

## Quién está expuesto

Equipos de desarrollo de software que usan Mastra para construir aplicaciones o agentes con inteligencia artificial. El riesgo aplica si instalaron los paquetes @mastra durante el periodo de compromiso sin verificar la integridad de las versiones.

## A considerar

Los paquetes comprometidos ya fueron retirados del repositorio. El primer paso es verificar si algún proyecto instaló las versiones afectadas. Si es así, el entorno de desarrollo — y cualquier servidor donde esa aplicación esté corriendo — debe considerarse comprometido hasta demostrar lo contrario.

## Impacto potencial

Código malicioso integrado en un proyecto de desarrollo puede filtrar las credenciales del entorno de trabajo, modificar silenciosamente el comportamiento de la aplicación o establecer un canal de acceso remoto al servidor de producción.
