---
title: "Un grupo de secuestro de información crece 6 veces en seis meses gracias a un reparto de pago más atractivo para sus afiliados"
date: "2026-07-10"
source: "Unit 42 — Palo Alto Networks"
link: "https://unit42.paloaltonetworks.com/the-gentlemen-ransomware/"
categoria: "Malware"
ambito: "Organizaciones"
nivelAtencion: "Crítico"
status: "Activa"
resumen: "The Gentlemen, un grupo de secuestro de información (ransomware) que ofrece a sus afiliados hasta 90% del pago del rescate, uno de los repartos más altos del sector, acumula 580 víctimas confirmadas en 77 países desde julio de 2025. El sector manufacturero es el más golpeado. El grupo entra a las redes explotando fallas conocidas en firewalls y VPN, contraseñas débiles, o accesos ya comprometidos comprados a terceros. Las organizaciones deben confirmar que sus dispositivos de borde estén actualizados y que cuenten con respaldos fuera de línea."
expuestos: "Organizaciones de cualquier sector, con mayor incidencia en manufactura, que tengan firewalls o VPN sin actualizar, contraseñas débiles o accesos comprometidos en el mercado negro."
verificacion: "Confirmar que los firewalls y VPN de la organización estén actualizados, en particular contra las fallas conocidas como CVE-2024-55591, CVE-2025-32433, CVE-2025-33073 y CVE-2025-55182; que el sistema de protección de endpoints tenga activada la protección contra manipulación; y que existan respaldos desconectados de la red."
impacto: "Si el grupo logra entrar, cifra la información y detiene la operación completa de la organización hasta que se pague un rescate, además de amenazar con publicar los datos robados."
grc_activo: "Redes y sistemas operativos de organizaciones, en particular del sector manufacturero."
grc_vector: "Explotación de fallas conocidas en dispositivos de borde (firewall, VPN), fuerza bruta de contraseñas, o compra de accesos ya comprometidos a intermediarios especializados."
grc_condicion: "La organización debe tener dispositivos sin actualizar, contraseñas débiles expuestas, o accesos ya comprometidos disponibles en el mercado negro."
grc_alcance: "580 organizaciones confirmadas en 77 países, con crecimiento acelerado desde finales de 2025."
publicacion: "published"
---

## Qué ocurrió

The Gentlemen es un grupo que opera un esquema de secuestro de información (ransomware) como servicio: desarrolla el programa malicioso y lo renta a otros criminales (afiliados) que ejecutan los ataques, a cambio de quedarse hasta con 90% del pago del rescate, uno de los repartos más altos que se ha visto en este tipo de operaciones. Ese incentivo ayudó a que el grupo, activo desde julio de 2025, acumulara 580 víctimas confirmadas en 77 países, con el sector manufacturero como el más afectado. El grupo entra a las redes explotando fallas ya conocidas en firewalls y VPN, adivinando contraseñas débiles, o comprando accesos que otros criminales ya habían robado previamente.

## Quién está expuesto

Organizaciones de cualquier sector, con mayor incidencia en manufactura, que tengan dispositivos de conexión remota (firewall, VPN) sin actualizar, contraseñas débiles, o cuyos accesos ya circulen en mercados de criminales especializados en vender ese tipo de acceso.

## A considerar

El grupo también busca desactivar las herramientas de protección de los equipos antes de cifrar la información, y borra las copias de seguridad automáticas de Windows para dificultar la recuperación. Confirmar que la protección contra manipulación esté activada y que existan respaldos guardados fuera de la red reduce el impacto si el ataque ocurre.

## Impacto potencial

Si el grupo logra entrar a la red, cifra la información y detiene la operación completa de la organización hasta que se pague un rescate, además de amenazar con publicar los datos robados si no se paga.
