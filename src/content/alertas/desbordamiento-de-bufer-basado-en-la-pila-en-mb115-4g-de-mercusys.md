---
title: "Una falla en un modelo de router doméstico Mercusys puede dejarlo fuera de servicio de forma remota"
date: "2026-07-27"
source: "INCIBE-CERT"
link: "https://www.incibe.es/incibe-cert/alerta-temprana/avisos/desbordamiento-de-bufer-basado-en-la-pila-en-mb115-4g-de-mercusys"
categoria: "IoT/OT"
ambito: "Mixto"
nivelAtencion: "Bajo"
status: "En monitoreo"
resumen: "El router Mercusys MB115-4G, en versiones de firmware entre 1.7.0 y 1.9.0, tiene una falla que permite a un atacante, sin necesitar contraseña, dejarlo fuera de servicio de forma remota enviando una petición manipulada. El fabricante ya publicó la corrección en la versión 1.9.0."
expuestos: "Personas y pequeños negocios que usan un router Mercusys modelo MB115-4G en una versión de firmware anterior a la 1.9.0."
verificacion: "Confirmar el modelo y la versión de firmware del router en uso y actualizarlo a la versión 1.9.0 si corresponde."
impacto: "Interrupción del servicio de administración del router, que puede dejar sin conexión a internet a quien lo use mientras se recupera del ataque."
grc_activo: "Router Mercusys MB115-4G, en versiones de firmware entre 1.7.0 y 1.9.0"
grc_vector: "CVE-2026-12495 (CVSS 5.3): un atacante sin autenticar puede enviar una petición manipulada a la interfaz de administración web del router, provocando un desbordamiento de memoria que detiene el servicio de administración"
grc_condicion: "Tener el router Mercusys MB115-4G con una versión de firmware entre 1.7.0 y anterior a 1.9.0"
grc_alcance: "Usuarios domésticos y pequeños negocios con este modelo de router, marca vendida también en México"
grc_confianza: "alta"
publicacion: "published"
---

## Qué ocurrió

INCIBE, el centro de respuesta a incidentes de España, coordinó la publicación de una falla de seguridad media en el router Mercusys MB115-4G, un equipo de red inalámbrica de uso doméstico y de pequeño negocio. La falla permite a un atacante, sin necesitar contraseña, enviar una petición manipulada a la interfaz de administración del router y provocar que su servicio de administración web deje de funcionar. El fabricante ya corrigió el problema en la versión de firmware 1.9.0.

## Quién está expuesto

Personas y pequeños negocios que usan un router Mercusys modelo MB115-4G con una versión de firmware entre 1.7.0 y anterior a la 1.9.0. Mercusys es una marca ampliamente distribuida, incluido México, en tiendas de electrónica y de autoservicio.

## Impacto potencial

Un atacante que explote esta falla puede dejar fuera de servicio la administración del router, lo que puede traducirse en pérdida de conexión a internet para quien lo use, aunque la falla no permite, según lo reportado, tomar control del equipo ni acceder a la información que pasa por él.
