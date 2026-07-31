---
title: "Proyectos de Xcode infectados en GitHub instalan malware al momento de compilarlos"
date: "2026-07-31"
source: "Unit 42 — Palo Alto Networks"
link: "https://unit42.paloaltonetworks.com/xcsset-v40-malware-analysis/"
categoria: "Malware"
ambito: "Mixto"
nivelAtencion: "Alto"
status: "Activa"
resumen: "Una nueva versión del malware XCSSET se distribuye mediante proyectos de Xcode infectados en GitHub y otros repositorios. La infección se activa cuando un desarrollador de macOS o iOS compila el proyecto en su computadora, y roba información del sistema, credenciales y contenido del portapapeles."
expuestos: "Desarrolladores de macOS/iOS que descargan y compilan proyectos de Xcode de terceros, en particular de repositorios públicos no verificados. Se observó un volumen elevado de ataques dirigidos a desarrolladores del Sur de Asia."
verificacion: "Revisar los proyectos de Xcode descargados de repositorios externos en busca de fases de script (build phases) no reconocidas antes de compilarlos, y vigilar procesos 'osascript' inusuales en el sistema."
impacto: "El malware puede robar credenciales, contenido del portapapeles y datos del sistema; si el desarrollador afectado compila o distribuye software para terceros, el compromiso puede extenderse a esos productos."
grc_activo: "Computadoras Mac de desarrolladores que usan Xcode para compilar proyectos de terceros"
grc_vector: "Proyectos de Xcode infectados en GitHub y otros repositorios Git, con scripts maliciosos que se activan al compilar el proyecto localmente"
grc_condicion: "Descargar y compilar un proyecto de Xcode infectado proveniente de un repositorio no verificado"
grc_alcance: "Desarrolladores de macOS/iOS en general; se observó especial concentración de ataques contra desarrolladores del Sur de Asia"
grc_confianza: "alta"
publicacion: "published"
---

## Qué ocurrió

Investigadores de Unit 42 (Palo Alto Networks) documentaron una nueva versión del malware XCSSET, que se distribuye a través de proyectos de Xcode infectados alojados en GitHub y otros repositorios Git. Los atacantes inyectan scripts maliciosos en archivos de proyecto que parecen legítimos; la infección se activa cuando un desarrollador descarga ese proyecto y lo compila en su propia computadora. Una vez dentro, el malware se comunica con un servidor de control, recopila información del sistema y carga módulos adicionales en memoria, entre ellos registradores de teclas, secuestradores de navegador y monitores del portapapeles. Al finalizar, borra sus propios archivos de instalación del disco para dificultar el análisis. La campaña está activa desde abril de 2026, con una segunda ola en mayo que amplió sus capacidades.

## Quién está expuesto

Desarrolladores de macOS o iOS que descargan y compilan proyectos de Xcode provenientes de repositorios externos no verificados. Los investigadores observaron un volumen elevado de ataques dirigidos específicamente a desarrolladores del Sur de Asia, aunque la técnica no está limitada a esa región.

## A considerar

Antes de compilar un proyecto de Xcode descargado de un repositorio externo, conviene revisar sus fases de script en busca de código no reconocido, y prestar atención a procesos "osascript" inusuales en el sistema, una de las señales que deja este malware.

## Impacto potencial

El malware puede robar credenciales, contenido del portapapeles e información del sistema. Si el desarrollador afectado compila o distribuye software para terceros, el compromiso puede extenderse a los productos que finalmente llegan a otros usuarios.
