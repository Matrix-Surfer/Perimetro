---
title: "El mecanismo que garantiza que el cloud no puede ver tus datos tiene fallas que llevan años sin detectarse"
pubDate: 2026-07-04
source: "The Register — Security"
link: "https://www.theregister.com/security/2026/07/04/confidential-computings-core-trust-mechanism-is-broken-the-fix-may-not-exist/5266056"
category: "Seguridad"
señal: "Las implementaciones en producción del mecanismo central de confianza del cómputo confidencial tienen fallas estructurales que pasaron desapercibidas durante años — incluyendo sistemas activos de Meta, y plataformas de IA confidencial."
supuesto: "Las organizaciones que usan cómputo confidencial en la nube pueden confiar en que sus datos están protegidos incluso del proveedor de infraestructura."
observación: "Qué garantías de privacidad ofrecen los contratos cloud actuales y si el proveedor puede demostrar que sus implementaciones de cómputo confidencial fueron auditadas frente a estas fallas específicas."
context: "El cómputo confidencial prometía resolver el problema más difícil del cloud: que el proveedor de infraestructura no pudiera ver los datos de sus clientes. La semana pasada se reveló que el mecanismo de verificación que hace funcionar esa promesa tiene fallas en múltiples implementaciones en producción — incluyendo el sistema de privacidad de Meta para WhatsApp — y que esas fallas llevan años ahí sin que nadie las detectara. El problema no es una falla de implementación aislada: es una debilidad en el diseño del protocolo de verificación. No existe corrección inmediata."
grc_cambio: "La garantía técnica central del cómputo confidencial tiene fallas demostradas en producción"
grc_paradigma: "Organizaciones que delegaron privacidad al proveedor cloud asumiendo que el cómputo confidencial la garantizaba"
grc_horizonte: "meses"
grc_confianza: "media"
publicacion: "published"
---

## La señal

El cómputo confidencial es la tecnología que permite procesar datos en la nube con la garantía de que ni el proveedor de infraestructura — ni un atacante con acceso al servidor físico — puede ver esos datos. Es la base técnica de la privacidad en cloud para datos sensibles: expedientes médicos, contratos, conversaciones cifradas.

Esta semana se publicó que el mecanismo de verificación que hace funcionar esa garantía tiene fallas en múltiples implementaciones reales. Entre los sistemas afectados: el procesamiento privado de WhatsApp que Meta usa para inteligencia artificial, plataformas de IA confidencial activas hoy. Las fallas existen desde hace años y pasaron inadvertidas hasta que investigadores las analizaron formalmente.

## El supuesto que se rompe

El argumento de venta del cómputo confidencial es simple: aunque el proveedor de cloud controle el hardware, no puede ver los datos. Las organizaciones que migraron cargas de trabajo sensibles a la nube usando esta tecnología lo hicieron con esa confianza.

Lo que se descubrió es que el protocolo de verificación — el mecanismo que permite comprobar que el entorno es seguro antes de compartir los datos — puede ser manipulado de formas que no se habían considerado. El supuesto de que "la verificación técnica reemplaza la confianza en el proveedor" ya no es suficiente sin una auditoría independiente de la implementación específica.

## Qué observar

Dos preguntas que toda organización con datos sensibles en cloud debería hacer a sus proveedores:

¿Qué implementación específica de cómputo confidencial usan y ha sido auditada frente a CVE-2026-33697?

¿El contrato de servicio establece qué ocurre si una garantía técnica de privacidad se demuestra fallida retroactivamente?

Esta no es una vulnerabilidad que se parchea con una actualización. Implica cambios de protocolo. Las organizaciones que toman decisiones de cumplimiento o de privacidad basadas en la promesa del cómputo confidencial necesitan saber exactamente qué versión de esa promesa están usando.
