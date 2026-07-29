---
title: "Un código de ataque público permite a un usuario ya registrado ejecutar comandos en servidores de gestión de código sin actualizar"
date: "2026-07-25"
source: "The Hacker News"
link: "https://thehackernews.com/2026/07/researcher-publishes-gitlab-rce-poc.html"
categoria: "Vulnerabilidad"
ambito: "Organizaciones"
nivelAtencion: "Alto"
status: "En monitoreo"
resumen: "Se publicó el código de un ataque contra una falla en GitLab, plataforma de gestión de código para equipos de desarrollo, que GitLab había corregido seis semanas antes. Cualquier usuario registrado con permiso para subir código puede ejecutar comandos en el servidor si la instalación propia no se ha actualizado a la versión corregida."
expuestos: "Organizaciones que operan su propia instalación de GitLab (self-managed) en la versión 18.11.3 sin la actualización correspondiente, con más de un usuario registrado."
verificacion: "Confirmar la versión de GitLab self-managed en uso y aplicar la actualización publicada hace seis semanas si aún no se ha hecho."
impacto: "Un usuario ya registrado en el sistema, sin necesitar privilegios de administrador, puede ejecutar comandos en el servidor que aloja el código fuente de la organización."
grc_activo: "Servidores propios (self-managed) de GitLab en versión 18.11.3"
grc_vector: "Un usuario autenticado con permiso para subir código a un proyecto puede aprovechar una falla al abrir el historial de cambios de un archivo manipulado (notebook Jupyter) para filtrar información interna y ejecutar comandos con los privilegios del propio sistema"
grc_condicion: "Tener una cuenta con permiso para subir código a algún proyecto y una instalación GitLab self-managed 18.11.3 sin la actualización publicada el 10 de junio"
grc_alcance: "Instalaciones self-managed de GitLab en versión 18.11.3 sin actualizar; el código del ataque ya es público"
grc_confianza: "alta"
publicacion: "published"
---

## Qué ocurrió

Investigadores publicaron el 24 de julio el código de un ataque funcional contra una falla en GitLab que la propia empresa había corregido seis semanas antes, el 10 de junio. Cualquier usuario ya registrado con permiso para subir código a un proyecto puede aprovecharla: al subir un archivo manipulado (un notebook Jupyter) y abrir su historial de cambios, logra filtrar información interna del servidor que le permite ejecutar comandos con los privilegios del propio sistema. Solo afecta a instalaciones que la organización administra directamente (self-managed) en la versión 18.11.3 sin la actualización aplicada.

## Quién está expuesto

Organizaciones que operan su propia instalación de GitLab (self-managed) en la versión 18.11.3, con más de una persona registrada con permiso para subir código, sin haber aplicado la actualización publicada hace seis semanas.

## Impacto potencial

Con el código del ataque ya público, cualquier instalación sin actualizar queda expuesta a que un usuario registrado, incluso sin privilegios de administrador, tome control del servidor que aloja el código fuente de la organización, con acceso a todos los repositorios que ese servidor administra.
