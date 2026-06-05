---
title: "El instalador oficial de Hola Browser para Windows venía con un programa malicioso oculto"
date: "2026-06-04"
source: "BleepingComputer"
link: "https://www.bleepingcomputer.com/news/security/hola-browser-for-windows-compromised-to-deliver-cryptominer/"
categoria: "Malware"
ambito: "Mixto"
nivelAtencion: "Alto"
status: "Activa"
resumen: "El instalador oficial de Hola Browser para Windows fue comprometido e incluía un programa no declarado que usaba los recursos del equipo para minar criptomonedas. El instalador legítimo fue el vector. Usuarios con Hola Browser instalado deben desinstalarlo y revisar el equipo."
expuestos: "Usuarios de Windows que descargaron e instalaron Hola Browser desde el sitio oficial."
verificacion: "Verificar si Hola Browser está instalado en equipos corporativos, desinstalarlo y revisar si hay actividad inusual en el equipo."
impacto: "La presencia de software comprometido indica que el instalador fue el vector — puede haber otros programas maliciosos además del minero en el mismo equipo."
grc_activo: "equipos Windows con Hola Browser instalado desde versiones comprometidas"
grc_vector: "ejecutable malicioso incluido en el instalador oficial del navegador"
grc_condicion: "Hola Browser instalado en el equipo desde la versión afectada"
grc_explotacion: "activa"
grc_alcance: "usuarios de Windows que instalaron Hola Browser desde el sitio oficial"
grc_confianza: "media"
publicacion: "published"
---

## Qué ocurrió

La versión oficial de Hola Browser para Windows fue comprometida en un ataque a su cadena de distribución: el instalador descargado desde el sitio oficial incluía un ejecutable no declarado que los investigadores identificaron como un programa que usa los recursos del equipo para minar criptomonedas sin conocimiento del usuario. El instalador legítimo fue el vector — el usuario no hizo nada inusual.

## Quién está expuesto

### Para personas

Usuarios que descargaron e instalaron Hola Browser en Windows desde versiones afectadas.

### Para organizaciones

Empresas cuyos empleados usan Hola Browser en equipos de trabajo.

## A considerar

- Si el equipo tuvo Hola Browser instalado, considerar que el instalador fue comprometido: el minero puede no ser el único programa instalado sin autorización.
- Revisar el equipo en busca de procesos inusuales o actividad de red inesperada tras desinstalar el navegador.

## Impacto potencial

El programa malicioso consume recursos del equipo para beneficio del atacante. Su presencia confirma que el instalador fue comprometido, lo que abre la posibilidad de que se hayan instalado otros programas más peligrosos en el mismo proceso. Un equipo corporativo afectado puede ser punto de entrada a sistemas internos de la empresa.
