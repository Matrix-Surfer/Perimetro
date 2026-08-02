---
title: "Vulnerabilidad crítica en Adobe Campaign Classic permite tomar control sin ninguna acción del usuario"
date: "2026-08-01"
source: "The Hacker News"
link: "https://thehackernews.com/2026/08/adobe-campaign-classic-cvss-100-flaw.html"
categoria: "Vulnerabilidad"
ambito: "Organizaciones"
nivelAtencion: "Medio"
status: "En monitoreo"
resumen: "Adobe corrigió una falla crítica en Campaign Classic, su plataforma de automatización de marketing, que permitía tomar control del sistema sin que nadie hiciera clic ni ingresara datos. La empresa no reporta ataques activos, pero la actualización ya está disponible. Las organizaciones que usan esta plataforma deben confirmar si tienen instalada la versión corregida."
expuestos: "Organizaciones que usan Adobe Campaign Classic para automatización de marketing, en versiones anteriores a 7.4.3 build 9398."
verificacion: "Confirmar la versión instalada de Adobe Campaign Classic y aplicar la actualización a 7.4.3 build 9398 si no se ha hecho."
impacto: "Un atacante podría tomar control del sistema de marketing sin que nadie note nada, incluyendo acceso a bases de datos de clientes y campañas."
grc_activo: "Adobe Campaign Classic (plataforma de automatización de marketing empresarial), versiones anteriores a 7.4.3 build 9398 para Windows y Linux"
grc_vector: "Falla de autorización incorrecta (CVE-2026-48449) que permite ejecutar código sin necesidad de que el usuario haga clic ni interactúe"
grc_condicion: "Tener una instancia de Adobe Campaign Classic v7 sin actualizar; no se requiere ingeniería social ni interacción de ningún usuario"
grc_explotacion: "investigacion"
grc_alcance: "Organizaciones que usan Adobe Campaign Classic para automatización de marketing, en versiones Windows y Linux anteriores a 7.4.3 build 9398"
grc_confianza: "alta"
publicacion: "published"
---

## Qué ocurrió

Adobe publicó una actualización de seguridad para corregir una falla crítica (calificación máxima de severidad, CVSS 10.0) en Campaign Classic, su plataforma de automatización de marketing usada por empresas para gestionar campañas y bases de datos de clientes. La falla permite a un atacante ejecutar código y tomar control del sistema sin necesidad de que ningún usuario haga clic, abra un archivo o ingrese datos. Adobe también corrigió una segunda falla, de severidad alta, que permite leer archivos del servidor sin autorización. La empresa no reporta ataques activos que exploten ninguna de las dos.

## Quién está expuesto

### Para personas

No aplica directamente. El riesgo recae en las organizaciones que operan esta plataforma.

### Para organizaciones

Empresas que usan Adobe Campaign Classic (versión 7) para automatizar marketing, en instalaciones para Windows o Linux anteriores a la versión 7.4.3 build 9398.

## A considerar

La misma actualización corrige una segunda falla que permite leer archivos del servidor sin autorización. No hace falta aplicar parches por separado: la versión 7.4.3 build 9398 corrige ambas.

## Impacto potencial

Si la plataforma no se actualiza, un atacante podría tomar control completo del sistema de marketing sin dejar rastro de interacción del usuario, con acceso a bases de datos de clientes, campañas activas y credenciales almacenadas.
