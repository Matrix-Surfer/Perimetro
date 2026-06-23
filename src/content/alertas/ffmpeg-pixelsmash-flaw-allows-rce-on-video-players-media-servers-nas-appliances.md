---
title: "Una falla en software de video permite tomar el control de reproductores, servidores y discos de almacenamiento sin contraseña"
date: "2026-06-23"
source: "SecurityWeek"
link: "https://www.securityweek.com/ffmpeg-pixelsmash-flaw-allows-rce-on-video-players-media-servers-nas-appliances/"
categoria: "Vulnerabilidad"
ambito: "Mixto"
nivelAtencion: "Alto"
status: "En monitoreo"
resumen: "Una vulnerabilidad en FFmpeg — el motor de procesamiento de video más usado en el mundo — permite a un atacante tomar control completo de cualquier sistema que reproduzca o previsualice un archivo de video malicioso. No requiere contraseña ni acceso previo: basta con que el archivo llegue al sistema y sea procesado. Afecta reproductores, servidores de medios, discos de almacenamiento en red y plataformas de fotos. Existe parche disponible en FFmpeg 8.1.2."
expuestos: "Usuarios de Kodi, mpv, Jellyfin, Emby, OBS Studio, Nextcloud, Immich, PhotoPrism, y cualquier sistema con explorador de archivos que genere vistas previas de video en Linux (GNOME, KDE, XFCE)."
verificacion: "Si algún sistema de la organización usa FFmpeg o aplicaciones basadas en él — incluyendo discos NAS y plataformas de almacenamiento de fotos o video compartidas."
impacto: "El atacante obtiene control completo del sistema al enviar un archivo de video de 50 KB. El archivo puede llegar como adjunto, descarga, o simplemente existir en una carpeta compartida que el sistema previsualiza automáticamente."
grc_activo: "Servidores de medios, discos NAS y sistemas de gestión de contenido multimedia de la organización."
grc_vector: "Archivo de video malicioso (AVI, MKV o MOV de 50 KB) que explota una falla de escritura en memoria en el componente MagicYUV de FFmpeg."
grc_condicion: "Que el sistema use FFmpeg en cualquier versión anterior a 8.1.2 y procese o previsualice archivos de video de fuentes externas."
grc_explotacion: "poc_publica"
grc_alcance: "Sistemas con FFmpeg en versiones anteriores a 8.1.2 — especialmente los expuestos a archivos de video de fuentes externas o con acceso compartido."
grc_confianza: "alta"
publicacion: "published"
---

## Qué ocurrió

Investigadores identificaron una vulnerabilidad crítica en FFmpeg (CVE-2026-8461, severidad 8.8 de 10) en el componente que procesa un formato de video específico. Un atacante puede crear un archivo de video de 50 KB — en formato AVI, MKV o MOV — que al ser reproducido o simplemente previsualizdo toma control del sistema. No requiere que la víctima ingrese contraseñas ni ejecute nada manualmente: con que el archivo sea procesado por el sistema es suficiente.

## Quién está expuesto

Cualquier sistema que use FFmpeg como motor de procesamiento: reproductores de video como Kodi o mpv, servidores de medios como Jellyfin o Emby, software de transmisión como OBS Studio, plataformas de fotos como Nextcloud, Immich o PhotoPrism, y discos de almacenamiento en red (NAS) de múltiples marcas. También los exploradores de archivos de Linux (GNOME, KDE, XFCE) que generan miniaturas de video automáticamente.

## A considerar

FFmpeg versión 8.1.2 contiene la corrección. Priorizar la actualización en sistemas que reciben archivos de fuentes externas — especialmente servidores de medios accesibles desde internet y discos NAS compartidos con múltiples usuarios o conectados a redes no controladas.

## Impacto potencial

Un archivo de video enviado por correo, descargado de internet, o copiado a una carpeta compartida que el sistema previsualiza automáticamente es suficiente para que un atacante tome el control completo del equipo — sin que el usuario haga nada más que tener el archivo en su sistema.
