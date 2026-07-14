---
title: "Una falla sin corregir en el editor de código Cursor ejecuta programas maliciosos con solo abrir un repositorio"
date: "2026-07-14"
source: "Dark Reading"
link: "https://www.darkreading.com/application-security/cursor-ide-malicious-code-poisoned-repos"
categoria: "Vulnerabilidad"
ambito: "Organizaciones"
nivelAtencion: "Alto"
status: "Activa"
resumen: "Una falla en Cursor, un editor de código que integra inteligencia artificial, permite que un archivo malicioso incluido en un repositorio se ejecute automáticamente con solo abrirlo, sin ninguna advertencia. Se reportó al fabricante en diciembre y sigue sin corregirse."
expuestos: "Programadores y organizaciones que usan Cursor para abrir repositorios de código de terceros o de fuentes públicas."
verificacion: "Evitar abrir repositorios de origen desconocido directamente en Cursor; usar otro editor con protección de espacio de confianza activa para revisar código no confiable."
impacto: "Un atacante puede ejecutar código con los mismos permisos del programador con solo lograr que abra un repositorio manipulado, sin necesitar que ejecute nada manualmente."
grc_activo: "Equipos de programadores que usan el editor de código Cursor"
grc_vector: "Un archivo ejecutable malicioso (git.exe) colocado en la raíz de un repositorio, que Cursor ejecuta automáticamente al buscar herramientas de Git al abrir el proyecto"
grc_condicion: "Abrir en Cursor un repositorio que contenga el archivo malicioso, incluso solo para revisarlo"
grc_alcance: "Cualquier usuario de Cursor que abra repositorios de terceros; la falla fue reportada en diciembre y el fabricante no la ha corregido"
publicacion: "published"
---

## Qué ocurrió

Investigadores de seguridad descubrieron que Cursor, un editor de código que integra inteligencia artificial para asistir a programadores, ejecuta automáticamente un archivo llamado "git.exe" si lo encuentra en la raíz de un repositorio, sin pedir autorización ni mostrar advertencia. Un atacante puede aprovechar esto publicando un repositorio con un archivo malicioso con ese nombre exacto: basta con que la víctima abra el proyecto en Cursor, incluso solo para revisar el código, para que el archivo se ejecute con sus mismos permisos. La falla se reportó al fabricante en diciembre. Hasta la fecha de esta nota, sigue sin corregirse.

## Quién está expuesto

### Para organizaciones

Empresas cuyos equipos de desarrollo usan Cursor para revisar o clonar repositorios de código de terceros, colaboradores externos o fuentes públicas.

### Para personas

Programadores independientes que abren proyectos de origen desconocido en Cursor por curiosidad o para evaluarlos.

## A considerar

Mientras no exista una corrección oficial, evitar abrir repositorios de origen desconocido directamente en Cursor es la medida más efectiva. Revisar el contenido de un repositorio ajeno en un editor sin ejecución automática, o en un entorno aislado, reduce el riesgo.

## Impacto potencial

Un atacante puede ejecutar código arbitrario con los mismos permisos del programador con solo lograr que abra un repositorio manipulado. Eso puede traducirse en robo de credenciales, acceso a otros sistemas conectados al equipo de trabajo, o instalación de programas maliciosos adicionales.
