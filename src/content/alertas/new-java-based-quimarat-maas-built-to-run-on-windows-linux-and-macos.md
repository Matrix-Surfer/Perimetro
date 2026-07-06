---
title: "Un troyano multiplataforma en Java se vende por suscripción para infectar Windows, Linux y macOS"
date: "2026-07-06"
source: "The Hacker News"
link: "https://thehackernews.com/2026/07/new-java-based-quimarat-maas-built-to.html"
categoria: "Malware"
ambito: "Mixto"
nivelAtencion: "Alto"
status: "Activa"
resumen: "Un troyano de acceso remoto escrito en Java, llamado QuimaRAT, se vende por suscripción a cualquier atacante y funciona sin modificaciones en Windows, Linux y macOS. Quien reciba y ejecute el instalador queda expuesto a control remoto total del equipo. Se recomienda verificar procesos Java desconocidos y confirmar el origen de cualquier archivo ejecutable antes de abrirlo."
expuestos: "Personas y organizaciones que reciban y ejecuten el instalador del troyano, sin importar el sistema operativo que usen."
verificacion: "Revisar procesos Java desconocidos en ejecución y confirmar el origen de cualquier archivo ejecutable recibido antes de abrirlo."
impacto: "Control remoto completo del equipo infectado, incluyendo robo de archivos, contraseñas y vigilancia de la actividad del usuario."
grc_activo: "Equipos Windows, Linux y macOS con Java instalado"
grc_vector: "Instalador entregado por ingeniería social o correo, que despliega el cliente Java del troyano en el formato adecuado para cada sistema (JAR, EXE, APP, SH, BAT o VBS)"
grc_condicion: "Que la víctima ejecute el archivo malicioso entregado"
grc_explotacion: "activa"
grc_alcance: "Cualquier persona u organización con equipos Windows, Linux o macOS, sin importar el sector"
grc_confianza: "alta"
publicacion: "review"
---

## Qué ocurrió

Un troyano de acceso remoto (programa que permite controlar un equipo desde otra ubicación sin autorización) escrito en Java comenzó a venderse en foros clandestinos bajo el nombre QuimaRAT. Se ofrece como servicio por suscripción, desde 150 dólares al mes hasta 1200 dólares por acceso de por vida. Funciona en Windows, Linux y macOS sin modificaciones. El vendedor ofrece un generador que arma el instalador en distintos formatos (JAR, EXE, APP, SH, BAT o VBS) según el sistema de la víctima. El programa admite módulos adicionales cifrados que se descargan después de la infección, lo que permite ampliar sus capacidades sin volver a infectar el equipo.

## Quién está expuesto

### Para personas
Cualquiera que reciba y ejecute un archivo malicioso disfrazado de documento, instalador o aplicación legítima.

### Para organizaciones
Empresas de cualquier tamaño con equipos Windows, Linux o macOS. Al venderse por suscripción, cualquier atacante con pocos conocimientos técnicos puede comprarlo y usarlo contra un objetivo específico.

## A considerar

Al ser modular, el troyano puede recibir nuevas funciones después de la infección inicial sin que la víctima lo note. Revisar procesos Java desconocidos ejecutándose en segundo plano es una señal temprana de posible infección, incluso si el equipo no muestra otros síntomas.

## Impacto potencial

Con control remoto del equipo, un atacante puede robar archivos, contraseñas guardadas y correos, o usar el equipo como punto de entrada hacia el resto de la red de la organización.
