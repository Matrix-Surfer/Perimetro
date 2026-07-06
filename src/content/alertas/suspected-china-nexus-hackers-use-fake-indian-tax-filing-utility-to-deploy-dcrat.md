---
title: "Un falso programa de declaración de impuestos instala un troyano de acceso remoto"
date: "2026-07-06"
source: "The Hacker News"
link: "https://thehackernews.com/2026/07/suspected-china-nexus-hackers-use-fake.html"
categoria: "Malware"
ambito: "Mixto"
nivelAtencion: "Alto"
status: "Activa"
resumen: "Un grupo de espionaje presuntamente vinculado a China distribuye un archivo que se hace pasar por la utilidad oficial para declarar impuestos en India. Al abrirlo, instala un troyano de acceso remoto (DcRAT) que permite controlar el equipo, tomar capturas de pantalla y robar información. La campaña sigue activa y coincide con la temporada de declaración de impuestos en ese país."
expuestos: "Contribuyentes y profesionales fiscales en India que reciben el archivo falso por correo."
verificacion: "Si algún colaborador descargó o ejecutó archivos de declaración de impuestos recibidos fuera de los canales oficiales, especialmente durante la temporada de declaración."
impacto: "Control remoto del equipo, robo de información y capturas de pantalla sin que la víctima lo note. La misma técnica puede reutilizarse contra otras autoridades tributarias."
grc_activo: "Equipos de contribuyentes y profesionales fiscales que abren archivos de declaración de impuestos"
grc_vector: "Archivo comprimido que imita la utilidad oficial de declaración de impuestos; al ejecutarse desactiva una protección de Windows e instala el troyano DcRAT"
grc_condicion: "Que la víctima descargue y ejecute el archivo falso, recibido por correo de phishing"
grc_explotacion: "activa"
grc_alcance: "Contribuyentes y profesionales fiscales en India; patrón replicable contra otras autoridades fiscales"
grc_confianza: "alta"
publicacion: "review"
---

## Qué ocurrió

Un grupo de espionaje presuntamente vinculado a China distribuye un archivo comprimido con el nombre de la utilidad oficial de declaración de impuestos de India. El archivo contiene un programa que desactiva una protección de seguridad de Windows y después instala un troyano de acceso remoto (programa que permite controlar el equipo desde otra ubicación) llamado DcRAT. La campaña coincide con la temporada de declaración de impuestos en India y sigue activa.

## Quién está expuesto

### Para personas

Contribuyentes en India que reciben el archivo falso por correo.

### Para organizaciones

Despachos y profesionales fiscales que gestionan declaraciones de impuestos para terceros, un blanco de mayor valor porque manejan datos de múltiples clientes.

## A considerar

La técnica, un archivo que imita un trámite fiscal oficial, no es exclusiva de India. El mismo patrón podría reutilizarse contra otras autoridades tributarias, incluido el SAT en México, durante temporadas de declaración.

## Impacto potencial

El troyano permite tomar capturas de pantalla, robar información del equipo y controlarlo a distancia sin que la víctima lo note.
