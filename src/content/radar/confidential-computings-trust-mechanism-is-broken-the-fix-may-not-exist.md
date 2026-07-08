---
title: "El mecanismo que promete probar que un servidor en la nube no fue alterado tiene una falla sin arreglo claro"
pubDate: 2026-07-04
source: "The Register — Security"
link: "https://www.theregister.com/security/2026/07/04/confidential-computings-trust-mechanism-is-broken-the-fix-may-not-exist/5266056"
category: "Seguridad"
señal: "Investigadores demostraron formalmente que el mecanismo de confianza de la 'computación confidencial' puede redirigirse en silencio hacia un servidor comprometido, sin que el cliente lo note."
supuesto: "Si un proveedor de nube demuestra criptográficamente que su servidor no fue alterado, se puede confiar en que los datos procesados ahí están protegidos, incluso de gobiernos extranjeros."
observación: "Qué proveedores usan la computación confidencial como argumento de 'soberanía de datos', y si esa promesa depende de un mecanismo de confianza que ya se identificó como roto y posiblemente sin solución completa."
context: "Investigadores demostraron formalmente que 'attested TLS', el mecanismo detrás de la computación confidencial, puede redirigir una conexión hacia un servidor distinto y comprometido sin que el cliente lo note. El fallo ya afecta sistemas en producción, incluyendo el procesamiento privado de WhatsApp de Meta. Empresas como Intel y Google venden esta tecnología como garantía de soberanía de datos, pero el mecanismo verifica el software, no la ubicación real del servidor."
grc_cambio: "El mecanismo criptográfico detrás de la 'computación confidencial' no garantiza que los datos vayan al servidor correcto, y una solución completa podría no ser posible con la arquitectura actual."
grc_paradigma: "Una prueba criptográfica de que el software no fue alterado es suficiente para confiar en dónde y cómo se procesan los datos."
grc_horizonte: "meses"
grc_confianza: "alta"
publicacion: "published"
---

## La señal

Investigadores demostraron formalmente que "attested TLS" (el mecanismo que usa la computación confidencial para probar que un servidor en la nube no fue alterado) puede redirigir una conexión hacia un servidor distinto y comprometido, sin que quien se conecta lo note. El fallo ya afecta sistemas en producción, incluyendo el procesamiento privado de WhatsApp de Meta.

## El supuesto que se rompe

Empresas como Intel y Google venden la computación confidencial como una forma de "soberanía de datos": una prueba criptográfica de que el software no fue modificado, suficiente para confiar en dónde se procesan los datos, incluso frente al propio proveedor de nube o gobiernos extranjeros. Los investigadores muestran que el mecanismo verifica el software, pero no la ubicación real del servidor, y que parte del problema podría no tener solución dentro del diseño actual del protocolo.

## Qué observar

Qué proveedores de nube usan la "computación confidencial" como argumento de seguridad o soberanía de datos, y si esa promesa depende de un mecanismo de confianza que la propia autoridad alemana de ciberseguridad (BSI) ya reconoció como insuficiente.
