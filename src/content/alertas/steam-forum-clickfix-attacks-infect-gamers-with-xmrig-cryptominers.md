---
title: "Falsas soluciones publicadas en foros de videojuegos instalan un programa que usa tu computadora para minar criptomonedas"
date: "2026-07-25"
source: "BleepingComputer"
link: "https://www.bleepingcomputer.com/news/security/steam-forum-clickfix-attacks-infect-gamers-with-xmrig-cryptominers/"
categoria: "Malware"
ambito: "Personas"
nivelAtencion: "Medio"
status: "Activa"
resumen: "Atacantes publican en los foros de discusión de Steam falsas 'soluciones' a problemas técnicos comunes de videojuegos, que en realidad instalan un programa (XMRig) que usa la capacidad de la computadora de la víctima para minar criptomonedas a beneficio del atacante."
expuestos: "Personas que buscan ayuda para problemas técnicos de videojuegos en los foros de discusión de Steam."
verificacion: "Confirmar si algún miembro del hogar u organización copió y ejecutó comandos sugeridos en un foro de Steam como solución a un problema técnico."
impacto: "La computadora de la víctima queda usando su capacidad de procesamiento para generar criptomonedas para el atacante, con el consecuente desgaste del equipo y consumo eléctrico, sin que la persona lo autorice."
grc_activo: "Computadoras de personas que participan en foros de discusión de Steam"
grc_vector: "Técnica ClickFix: publicaciones en foros que simulan ser soluciones a errores técnicos, pero que en realidad piden a la víctima copiar y ejecutar un comando que instala el programa de minería XMRig"
grc_condicion: "Que la víctima copie y ejecute, ella misma, el comando presentado como solución en el foro"
grc_alcance: "Personas que usan los foros de discusión de Steam en busca de ayuda técnica; campaña activa"
grc_confianza: "media"
publicacion: "published"
---

## Qué ocurrió

Atacantes están usando los foros de discusión de Steam para publicar falsas "soluciones" a problemas técnicos comunes de videojuegos y computadoras. La técnica, conocida como ClickFix, consiste en pedir a la persona que copie y ejecute ella misma un comando presentado como el arreglo al problema; ese comando en realidad instala un programa llamado XMRig, que usa la capacidad de procesamiento de la computadora para generar criptomonedas a beneficio del atacante.

## Quién está expuesto

Personas que buscan ayuda para un problema técnico de videojuegos o de su computadora en los foros de discusión de Steam y siguen instrucciones que piden copiar y pegar un comando.

## A considerar

La señal de alerta más clara de esta técnica es que la "solución" pida copiar y pegar un comando en una ventana del sistema; ningún arreglo legítimo de un problema de videojuego requiere ese paso. Vale la pena revisar el uso de procesador de la computadora si de pronto se siente más lenta o caliente de lo habitual después de seguir instrucciones de un foro.

## Impacto potencial

Además del desgaste del equipo y el consumo eléctrico adicional que representa la minería no autorizada, la instalación de un programa como este abre la puerta a que el mismo atacante instale otras herramientas maliciosas en el equipo comprometido.
