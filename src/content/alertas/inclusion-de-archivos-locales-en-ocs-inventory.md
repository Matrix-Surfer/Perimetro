---
title: "Una falla en un software de inventario tecnológico permite a un atacante remoto ver archivos internos sin necesidad de contraseña"
date: "2026-07-24"
source: "INCIBE-CERT"
link: "https://www.incibe.es/incibe-cert/alerta-temprana/avisos/inclusion-de-archivos-locales-en-ocs-inventory"
categoria: "Vulnerabilidad"
ambito: "Organizaciones"
nivelAtencion: "Bajo"
status: "En monitoreo"
resumen: "INCIBE coordinó la publicación de una falla de severidad media en OCSreports, el panel de OCS Inventory, un software gratuito usado para administrar el inventario de equipos tecnológicos de una red. Un atacante remoto, sin necesidad de contraseña, puede aprovecharla para ver archivos internos de la aplicación y obtener pistas sobre cómo está configurado el sistema. El fabricante ya publicó la corrección."
expuestos: "Organizaciones que usan OCS Inventory, específicamente el panel OCSreports en la versión 2.12.4, para administrar su inventario de equipos tecnológicos."
verificacion: "Confirmar la versión de OCSreports en uso y actualizar a la versión más reciente publicada por el equipo de OCS Inventory."
impacto: "Un atacante puede obtener información sobre archivos internos del sistema y del sistema operativo que lo aloja, lo que facilita planear un ataque posterior más específico."
grc_activo: "Instalaciones de OCSreports (panel web de OCS Inventory) en la versión 2.12.4"
grc_vector: "Un parámetro del sistema que no filtra correctamente lo que recibe, permitiendo que un atacante le indique qué archivo interno mostrar"
grc_condicion: "Operar una instalación de OCSreports en la versión 2.12.4, accesible desde la red o Internet"
grc_explotacion: "investigacion"
grc_alcance: "Organizaciones que usan OCS Inventory para gestionar el inventario de sus equipos tecnológicos"
grc_confianza: "alta"
publicacion: "published"
---

## Qué ocurrió

INCIBE coordinó la publicación de una falla de severidad media (identificada como CVE-2026-16475) en OCSreports, el panel de administración de OCS Inventory, un software gratuito y de código abierto que muchas organizaciones usan para llevar el inventario de sus equipos tecnológicos en red. El problema está en un parámetro del sistema que no revisa correctamente lo que recibe antes de usarlo para mostrar archivos, lo que permite a un atacante remoto, sin necesidad de contraseña, pedirle al sistema que muestre archivos internos de la aplicación. Esto no solo expone el contenido de esos archivos, sino que las distintas respuestas del sistema permiten a un atacante deducir qué archivos existen y qué sistema operativo aloja la aplicación, información útil para preparar un ataque posterior. El equipo de OCS Inventory ya publicó la corrección en su versión más reciente.

## Quién está expuesto

### Para organizaciones

Cualquier organización que use OCS Inventory, específicamente el panel OCSreports en la versión 2.12.4, para administrar el inventario de sus equipos tecnológicos.

### Para personas

No aplica directamente. Este es un software de administración interna, no una aplicación de uso personal.

## A considerar

Actualizar OCSreports a la versión más reciente corrige el problema. Mientras eso ocurre, restringir el acceso al panel de administración solo a redes internas de confianza reduce la posibilidad de que alguien externo lo aproveche.

## Impacto potencial

Aunque esta falla no permite tomar control del sistema directamente, la información que expone (qué archivos existen, qué sistema operativo se usa) facilita que un atacante identifique otras debilidades y planee un ataque más específico contra la organización.
