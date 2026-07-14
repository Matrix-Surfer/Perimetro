---
title: "Un programa malicioso se hace pasar por software confiable para tomar control remoto de equipos Windows"
date: "2026-07-14"
source: "The Hacker News"
link: "https://thehackernews.com/2026/07/labubarat-masquerades-as-nvidia.html"
categoria: "Malware"
ambito: "Mixto"
nivelAtencion: "Alto"
status: "Activa"
resumen: "Investigadores descubrieron un programa de acceso remoto, llamado LabubaRAT, que se hace pasar por una herramienta de software de NVIDIA para pasar desapercibido en equipos Windows. Una vez instalado, permite ver la pantalla, ejecutar comandos y robar archivos. Todo indica que se ofrece como servicio de renta a otros atacantes."
expuestos: "Personas y organizaciones con equipos Windows, especialmente si instalaron software desde una fuente no oficial."
verificacion: "Revisar si existe un archivo llamado 'nvidia-sysruntime.exe' que no provenga de una instalación oficial de NVIDIA, y si el equipo se comunica con el dominio pipicka.xyz."
impacto: "El atacante puede ver la pantalla, robar archivos, ejecutar comandos y tomar control remoto completo del equipo sin que la víctima lo note."
grc_activo: "Equipos Windows personales y corporativos"
grc_vector: "Ejecutable disfrazado de herramienta de NVIDIA (nvidia-sysruntime.exe) que se conecta a un servidor de control remoto"
grc_condicion: "Que la víctima ejecute el archivo falso, típicamente descargado de una fuente no oficial"
grc_alcance: "Equipos Windows; el malware muestra señales de ofrecerse como servicio de renta a otros delincuentes"
publicacion: "published"
---

## Qué ocurrió

Investigadores de seguridad descubrieron un programa malicioso al que llamaron LabubaRAT, diseñado para tomar control remoto de equipos Windows. El programa se hace pasar por una herramienta de software de NVIDIA, una marca ampliamente reconocida, para evitar sospechas. Una vez instalado, revisa qué antivirus tiene el equipo, toma capturas de pantalla, sube y descarga archivos, y ejecuta comandos a distancia. Todo indica que se ofrece como servicio de renta a otros atacantes, un modelo conocido como malware como servicio (el creador del programa lo alquila a terceros en lugar de usarlo él mismo).

## Quién está expuesto

### Para personas

Cualquier persona que instale software desde una fuente no oficial pensando que es una herramienta legítima de NVIDIA.

### Para organizaciones

Empresas con equipos Windows sin control estricto sobre qué software instalan los empleados. El riesgo crece si no hay revisión periódica de procesos inusuales en los equipos.

## A considerar

El programa detecta específicamente los antivirus más comunes (Windows Defender, CrowdStrike, SentinelOne, entre otros) antes de actuar, lo que sugiere que fue diseñado para evadirlos. Un antivirus actualizado reduce el riesgo de que el programa pase desapercibido, aunque no lo elimina por completo.

## Impacto potencial

Si el programa se instala sin ser detectado, un atacante puede ver todo lo que ocurre en la pantalla, robar archivos, ejecutar comandos con los mismos permisos del usuario y usar el equipo como punto de entrada a otros sistemas de la red.
