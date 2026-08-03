---
title: "Un parche insuficiente deja abierta una puerta de entrada en la plataforma que administra remotamente equipos de miles de clientes"
date: "2026-08-03"
source: "The Hacker News"
link: "https://thehackernews.com/2026/08/n-able-says-attackers-take-over-n.html"
categoria: "Vulnerabilidad"
ambito: "Organizaciones"
nivelAtencion: "Crítico"
status: "Activa"
resumen: "Atacantes explotan una falla de autenticación en N-central, la plataforma que usan proveedores de servicios gestionados (MSP) para administrar equipos de clientes de forma remota, y obtienen acceso administrativo total. La primera corrección que liberó el fabricante no cerró por completo el problema; la versión que sí lo hace se liberó el 2 de agosto de 2026. Las organizaciones que dependen de un MSP deben confirmar si ese proveedor ya actualizó a la versión correcta."
expuestos: "Organizaciones cuyo proveedor de servicios gestionados (MSP) administra sus equipos a través de N-central, en versión alojada en la nube o instalada en sus propios servidores, sin la actualización del 2 de agosto de 2026."
verificacion: "Preguntar al proveedor de servicios gestionados si usa N-central, si ya aplicó la versión 2026.3.1.7 liberada el 2 de agosto de 2026, y si revisó actividad no autorizada en los equipos que administra."
impacto: "Acceso administrativo remoto a todos los equipos de los clientes gestionados a través del servidor comprometido, con posibilidad de instalar herramientas de control persistente en cada uno."
grc_activo: "Servidores N-central (versión alojada en la nube y on-premises) usados por proveedores de servicios gestionados (MSP)"
grc_vector: "CVE-2026-18577: falla de autenticación que permite acceso administrativo remoto; el primer parche (build 2026.2, que corrigió CVE-2026-18556) dejó abierta una variante de la misma falla, y los atacantes siguieron usando la función de control remoto del sistema para llegar a los equipos de clientes gestionados y crear accesos persistentes"
grc_condicion: "Usar un servidor N-central en una build anterior a 2026.3.1.7, liberada el 2 de agosto de 2026"
grc_explotacion: "activa"
grc_alcance: "Proveedores de servicios gestionados (MSP) que usan N-central y, por extensión, todas las organizaciones cuyos equipos administran; N-able confirmó explotación activa y publicó direcciones IP asociadas al ataque"
grc_confianza: "alta"
publicacion: "published"
---

## Qué ocurrió

N-able confirmó que atacantes explotaron una falla de autenticación (CVE-2026-18577) en N-central, la plataforma que usan proveedores de servicios gestionados (MSP) para monitorear y administrar de forma remota los equipos de sus clientes, y obtuvieron acceso administrativo total a los servidores. El primer parche que liberó la compañía, dirigido a una falla relacionada, no cerró el problema por completo: los atacantes encontraron una forma alterna de explotar la misma debilidad. La versión que corrige el problema de fondo, 2026.3.1.7, se liberó hasta el 2 de agosto de 2026. Con acceso al servidor, los atacantes pueden usar la función de control remoto de la plataforma para llegar a cada uno de los equipos de los clientes gestionados y establecer accesos persistentes.

## Quién está expuesto

Proveedores de servicios gestionados (MSP) que usan N-central, en versión alojada en la nube o instalada en sus propios servidores, sin la actualización del 2 de agosto de 2026; y por extensión, todas las organizaciones cuyos equipos administra ese proveedor.

## A considerar

Actualizar solo hasta la versión 2026.3 no es suficiente: la corrección real está en la build 2026.3.1.7 específicamente. Las organizaciones que dependen de un MSP no pueden verificar esto por sí mismas y deben preguntar directamente a su proveedor qué build tiene instalada y si revisó actividad no autorizada, incluyendo servicios desconocidos ejecutándose en los equipos administrados.

## Impacto potencial

Acceso administrativo remoto a todos los equipos de los clientes gestionados a través del servidor comprometido, con posibilidad de instalar herramientas de control persistente en cada uno y usar ese acceso para moverse hacia las redes internas de esas organizaciones.
