---
title: "Microsoft cambia la criptografía de Windows, Azure y Microsoft 365 antes de 2030 — y tus sistemas tienen que estar listos"
pubDate: 2026-07-01
source: "The Hacker News"
link: "https://thehackernews.com/2026/07/microsoft-accelerates-post-quantum.html"
category: "Seguridad"
señal: "Microsoft adelantó su migración a criptografía resistente a computadoras cuánticas a 2029 — un año antes del plazo regulatorio. El cambio afecta TLS, firma de código, certificados de Windows y la infraestructura de Microsoft 365."
supuesto: "Las organizaciones que dependen de Microsoft pueden planificar su migración criptográfica a su propio ritmo, siguiendo el plazo regulatorio de 2030."
observación: "Qué sistemas propios dependen de certificados, actualizaciones o conexiones TLS de Microsoft, y si el código o las integraciones actuales tienen algoritmos criptográficos codificados que no podrán cambiarse fácilmente."
context: "La criptografía que protege hoy las conexiones entre servicios de Microsoft y los sistemas de sus clientes va a cambiar. No en 2030 — en 2029. El cambio afecta la firma de código con la que Windows verifica que una actualización es legítima, los certificados que autentican identidades en Azure y Microsoft 365, y las conexiones TLS con las que los sistemas empresariales se comunican con servicios de Microsoft. El problema no es el cambio en sí: es que la criptografía suele estar integrada en sistemas que no fueron diseñados para cambiar."
grc_cambio: "La infraestructura criptográfica de Microsoft — certificados, TLS, firma de código — migrará a algoritmos post-cuánticos antes de 2030"
grc_paradigma: "La migración a criptografía cuántico-segura es un problema del futuro que se puede planificar sin urgencia"
grc_horizonte: "años"
grc_confianza: "alta"
publicacion: "published"
---

## La señal

Microsoft comprometió la migración de su infraestructura criptográfica a algoritmos resistentes a computadoras cuánticas para 2029 — adelantando un año el plazo regulatorio establecido por el gobierno de EE.UU. El cambio no es abstracto. Afecta componentes concretos: la verificación de actualizaciones de Windows, los certificados de identidad en Azure, las conexiones TLS de Microsoft 365 y la firma de código que distingue software legítimo de malware.

## El supuesto que se rompe

Las organizaciones que usan servicios de Microsoft asumían que podían planificar su propia migración criptográfica en paralelo con el plazo regulatorio de 2030. Ese supuesto dejó de ser válido: cuando Microsoft cambie sus algoritmos en 2029, los sistemas que dependen de esa infraestructura tendrán que estar preparados, aunque la organización no haya iniciado ninguna planificación propia.

El problema más común en migraciones criptográficas es la rigidez: algoritmos específicos que están escritos directamente en el código de una aplicación o en la configuración de un sistema que no fue diseñado para cambiar. Cuando el proveedor migra, esos sistemas se rompen o dejan de funcionar con la infraestructura nueva.

## Qué observar

Dos preguntas prácticas para los próximos 12 meses:

¿Qué sistemas propios se conectan a servicios de Microsoft — Azure, Microsoft 365, Windows Update, Entra ID — y verifican certificados o firmas digitales de esa infraestructura?

¿Esos sistemas tienen algoritmos criptográficos específicos escritos en código, o están configurados para adaptarse automáticamente al algoritmo que el servidor proponga?

La respuesta a la segunda pregunta determina si la migración de Microsoft en 2029 requiere trabajo de tu parte o no.
