---
title: "Un grupo de extorsión combina llamadas falsas y registro de apps de doble factor para vaciar cuentas de SharePoint"
date: "2026-07-09"
source: "BleepingComputer"
link: "https://www.bleepingcomputer.com/news/security/new-helix-vishing-group-emerges-in-sharepoint-data-theft-attacks/"
categoria: "Phishing"
ambito: "Organizaciones"
nivelAtencion: "Alto"
status: "Activa"
resumen: "Un grupo identificado como Helix, con vínculos probables a los extintos ShinyHunters y BlackFile, llama a empleados haciéndose pasar por gerentes para obtener acceso a sus cuentas corporativas, y luego registra su propia aplicación de verificación en dos pasos para mantener el acceso. Una vez dentro, descarga de forma masiva todo el contenido accesible en SharePoint para extorsionar a la organización o vender la información. Los equipos de TI deben revisar si hay aplicaciones de autenticación no reconocidas registradas en las cuentas y buscar actividad de descarga masiva reciente en SharePoint."
expuestos: "Empleados con acceso a SharePoint en organizaciones medianas y grandes; grupos con el mismo origen ya están vinculados a brechas confirmadas en instituciones como Medtronic, Nissan, Kodak, Infinite Campus y la Universidad de Nottingham."
verificacion: "Si existen aplicaciones de autenticación en dos pasos registradas que el usuario no reconoce, y si hay búsquedas o descargas masivas recientes en SharePoint."
impacto: "Robo masivo de información interna usada para extorsionar a la organización o venderla a otros delincuentes."
grc_activo: "Contenido almacenado en SharePoint; cuentas corporativas con verificación en dos pasos."
grc_vector: "Llamada telefónica suplantando a un gerente, seguida de phishing por código de dispositivo y registro de una app de autenticación no autorizada."
grc_condicion: "Que un empleado conteste la llamada y autorice el acceso mediante el código de dispositivo."
grc_explotacion: "activa"
grc_alcance: "Empleados con acceso a SharePoint en organizaciones medianas y grandes."
grc_confianza: "media"
publicacion: "published"
---

## Qué ocurrió

Un grupo identificado como Helix, que según investigadores de ReliaQuest probablemente surgió de los extintos ShinyHunters y BlackFile, ejecuta un ataque en tres pasos: primero llama por teléfono a empleados haciéndose pasar por un gerente, usando el nombre real de la persona suplantada y falsificando el número que aparece en el identificador de llamadas. Luego engaña al empleado para que autorice el acceso mediante un esquema de verificación por código de dispositivo. Una vez dentro de la cuenta, registra su propia aplicación de verificación en dos pasos para no perder el acceso.

## Quién está expuesto

Empleados con acceso a SharePoint en organizaciones medianas y grandes. Grupos con el mismo origen (ShinyHunters) ya cobraron víctimas confirmadas en el último mes: Medtronic, Nissan, Kodak, Infinite Campus y la Universidad de Nottingham.

## A considerar

Revisar si existen aplicaciones de autenticación en dos pasos registradas en las cuentas corporativas que el usuario no reconozca o no haya autorizado. Buscar en los registros de SharePoint patrones de búsqueda con comodines (que devuelven todo el contenido disponible) seguidos de descargas masivas de archivos, ya que es la forma en que este grupo inventaría y extrae la información.

## Impacto potencial

Una vez dentro, el grupo descarga de forma masiva todo el contenido accesible en SharePoint para usarlo como base de extorsión o para venderlo a otros delincuentes.
