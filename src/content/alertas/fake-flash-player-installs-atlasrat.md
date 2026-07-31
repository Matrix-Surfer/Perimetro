---
title: "Un falso instalador de Flash Player distribuye un programa de acceso remoto que roba contraseñas"
date: "2026-07-31"
source: "Malwarebytes Labs"
link: "https://www.malwarebytes.com/blog/news/2026/07/fake-flash-player-installs-atlasrat"
categoria: "Malware"
ambito: "Mixto"
nivelAtencion: "Medio"
status: "Activa"
resumen: "Investigadores descubrieron una campaña que distribuye el programa de acceso remoto AtlasRAT disfrazado de un instalador de Flash Player, un reproductor que Adobe dejó de dar soporte desde 2020. El programa registra las teclas que se presionan, identifica el antivirus instalado y envía la información robada por canales cifrados."
expuestos: "Personas y empleados con computadoras Windows que descarguen e instalen software fuera de canales oficiales, en particular cualquier cosa que se presente como 'Flash Player' o una VPN gratuita."
verificacion: "Confirmar si se instaló recientemente un archivo llamado 'FlashPlay.exe' o similar, y ejecutar un análisis con un antivirus actualizado."
impacto: "Robo de contraseñas capturadas por teclado, información del sistema y datos exfiltrados por canales cifrados; en equipos de trabajo, esto puede exponer credenciales corporativas."
grc_activo: "Equipos Windows de personas y empleados"
grc_vector: "Instalador falso que se hace pasar por Flash Player (archivo FlashPlay.exe), un cargador que opera en memoria sin dejar muchos rastros en el disco"
grc_condicion: "Descargar e instalar el falso reproductor desde un sitio no oficial"
grc_alcance: "Usuarios de Windows en general; la misma técnica de distribución se ha usado antes con falsos instaladores de VPN"
grc_confianza: "alta"
publicacion: "published"
---

## Qué ocurrió

Investigadores de Malwarebytes descubrieron una campaña que distribuye el programa de acceso remoto AtlasRAT disfrazado de un instalador de Flash Player, un reproductor que Adobe dejó de dar soporte desde 2020. El archivo malicioso, llamado "FlashPlay.exe", opera en memoria sin escribir muchos rastros en el disco, lo que dificulta su detección. La misma técnica de distribución se ha usado antes con falsos instaladores de VPN.

## Quién está expuesto

Personas y empleados con computadoras Windows que descarguen e instalen software fuera de canales oficiales, en particular cualquier cosa que se presente como "Flash Player" o una VPN gratuita.

## A considerar

El programa registra las teclas que se presionan de forma silenciosa, identifica qué antivirus está instalado en el equipo y envía la información robada por canales cifrados. También puede inyectarse en aplicaciones como WeChat para monitorear o manipular su funcionamiento.

## Impacto potencial

El robo de contraseñas y de información del sistema puede derivar en el acceso no autorizado a cuentas personales o de trabajo, en especial si el equipo infectado también se usa para acceder a sistemas de la organización.
