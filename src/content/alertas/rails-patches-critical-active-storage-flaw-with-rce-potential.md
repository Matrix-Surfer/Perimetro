---
title: "Vulnerabilidad crítica en Ruby on Rails permite leer archivos del servidor y podría escalar a control remoto"
date: "2026-08-01"
source: "BleepingComputer"
link: "https://www.bleepingcomputer.com/news/security/rails-patches-critical-active-storage-flaw-with-rce-potential/"
categoria: "Vulnerabilidad"
ambito: "Organizaciones"
nivelAtencion: "Crítico"
status: "Activa"
resumen: "Una falla crítica en Active Storage, el componente de Ruby on Rails que procesa imágenes, permite a un atacante sin credenciales leer archivos del servidor y, según una cadena de ataque ya documentada públicamente, tomar control remoto del sistema. Hay explotación activa confirmada. Los equipos técnicos deben actualizar libvips y rotar las credenciales del servidor de inmediato."
expuestos: "Organizaciones con aplicaciones Ruby on Rails que aceptan subida de imágenes de usuarios y usan libvips como procesador de imágenes, el valor por defecto en instalaciones oficiales."
verificacion: "Confirmar la versión de Active Storage y de libvips en uso; actualizar a las versiones corregidas y rotar credenciales del servidor (secret_key_base, base de datos, almacenamiento en la nube)."
impacto: "Un atacante puede leer credenciales del servidor y escalar a control remoto completo de la aplicación, incluyendo acceso a bases de datos y sistemas de almacenamiento conectados."
grc_activo: "Aplicaciones web construidas con Ruby on Rails que usan Active Storage con libvips para procesar imágenes; variables de entorno con secret_key_base y credenciales de base de datos o almacenamiento en la nube"
grc_vector: "Subir una imagen manipulada especialmente a una aplicación vulnerable para leer archivos arbitrarios del servidor, incluyendo variables de entorno con credenciales; investigadores demostraron una cadena de ataque (llamada KindaRails2Shell) que escala esto a ejecución remota de código"
grc_condicion: "La aplicación debe aceptar subida de imágenes de usuarios no confiables y usar libvips, no ImageMagick, como procesador de imágenes; libvips es el valor por defecto en las imágenes oficiales de Rails para Docker y en instalaciones de Debian y Ubuntu"
grc_explotacion: "activa"
grc_alcance: "Aplicaciones en Active Storage anteriores a 7.2.3.2, 8.0.x anteriores a 8.0.5.1, y 8.1.x anteriores a 8.1.3.1; Rails 6.x solo si Active Storage se configuró fuera de los valores por defecto"
grc_confianza: "alta"
publicacion: "published"
---

## Qué ocurrió

Se confirmó una vulnerabilidad crítica (CVE-2026-66066) en Active Storage, el componente de Ruby on Rails que procesa imágenes subidas por los usuarios. Un atacante puede subir una imagen manipulada especialmente para leer archivos arbitrarios del servidor, incluyendo variables de entorno con credenciales de bases de datos y almacenamiento en la nube. Investigadores documentaron públicamente una cadena de ataque, llamada "KindaRails2Shell", que escala este acceso hasta la ejecución remota de código (tomar control completo del servidor a distancia). Ya existe explotación activa confirmada, con pruebas de concepto disponibles públicamente.

## Quién está expuesto

### Para organizaciones

Aplicaciones construidas con Ruby on Rails que usan Active Storage con libvips (no ImageMagick) para procesar imágenes, y que aceptan subida de archivos de usuarios no confiables. libvips es el procesador por defecto en las imágenes oficiales de Rails para Docker y en instalaciones estándar de Debian y Ubuntu, por lo que muchas aplicaciones podrían estar expuestas sin que el equipo lo sepa.

## A considerar

Como mitigación temporal mientras se aplica la actualización, es posible bloquear el procesamiento de archivos no confiables activando la variable de entorno `VIPS_BLOCK_UNTRUSTED` o llamando a `Vips.block_untrusted(true)` en la configuración de la aplicación. Rotar `secret_key_base` y las credenciales de base de datos y almacenamiento es indispensable incluso después de actualizar, porque pudieron haber sido leídas antes del parche.

## Impacto potencial

Con acceso a las credenciales del servidor, un atacante puede escalar a control remoto completo de la aplicación: leer o modificar bases de datos, acceder a archivos almacenados en la nube, y moverse a otros sistemas conectados con las mismas credenciales.
