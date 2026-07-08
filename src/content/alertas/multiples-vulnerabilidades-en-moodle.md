---
title: "Múltiples fallas en Moodle permiten ejecutar código y evitar la verificación en dos pasos"
date: "2026-06-23"
source: "INCIBE-CERT"
link: "https://www.incibe.es/incibe-cert/alerta-temprana/avisos/multiples-vulnerabilidades-en-moodle-13"
categoria: "Vulnerabilidad"
ambito: "Organizaciones"
nivelAtencion: "Alto"
status: "En monitoreo"
resumen: "Moodle publicó parches para 18 fallas de seguridad, 9 de severidad alta, que incluyen ejecución de código a través de la importación de configuraciones y una forma de evitar la verificación en dos pasos por correo. Afecta a instituciones educativas y organizaciones que usan Moodle para capacitación. Se recomienda actualizar a las versiones 5.2.1, 5.1.5, 5.0.8 o 4.5.12, según la rama en uso."
expuestos: "Instituciones educativas, universidades y organizaciones que usan Moodle para cursos o capacitación interna."
verificacion: "Qué versión de Moodle está instalada y si corresponde a alguna de las afectadas: 5.2, 5.1 hasta 5.1.4, 5.0 hasta 5.0.7, o 4.5 hasta 4.5.11 y anteriores."
impacto: "Un atacante podría ejecutar código en el servidor, leer archivos del sistema o evitar la verificación en dos pasos, comprometiendo la plataforma y los datos de estudiantes y personal."
grc_activo: "Plataforma Moodle y datos de usuarios (estudiantes, personal)"
grc_vector: "Múltiples fallas, incluyendo ejecución de código vía importación de configuraciones del administrador y evasión de verificación en dos pasos por correo"
grc_condicion: "Operar una versión no parchada de Moodle"
grc_explotacion: "poc_publica"
grc_alcance: "Instituciones educativas y organizaciones que usan Moodle"
grc_confianza: "alta"
publicacion: "published"
---

## Qué ocurrió

Moodle corrigió 18 vulnerabilidades, 9 de ellas de severidad alta. Entre las más relevantes: la posibilidad de ejecutar código en el servidor a través de la importación de configuraciones del administrador, lectura de archivos del sistema durante una restauración de respaldo, y una forma de evitar la verificación en dos pasos cuando esta se envía por correo electrónico. Las versiones afectadas son 5.2, 5.1 hasta 5.1.4, 5.0 hasta 5.0.7, y 4.5 hasta 4.5.11, además de versiones anteriores sin soporte. No hay explotación activa confirmada.

## Quién está expuesto

Instituciones educativas, universidades y organizaciones que usan Moodle para impartir cursos o capacitación interna, en las versiones señaladas arriba.

## A considerar

Si la institución usa verificación en dos pasos por correo electrónico en Moodle, una de las fallas permite evitarla. Conviene revisar los accesos recientes de cuentas de administrador mientras se completa la actualización.

## Impacto potencial

Un atacante podría ejecutar código en el servidor a través de la importación de configuraciones del administrador, leer archivos del sistema durante una restauración de respaldo, o evitar la verificación en dos pasos si esta se hace por correo. En conjunto, esto podría comprometer la plataforma completa y los datos de estudiantes y personal.
