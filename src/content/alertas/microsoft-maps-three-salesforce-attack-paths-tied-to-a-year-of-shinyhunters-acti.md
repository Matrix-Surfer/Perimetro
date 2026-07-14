---
title: "Atacantes entran a cuentas de Salesforce durante un año sin explotar ninguna falla técnica"
date: "2026-07-14"
source: "The Hacker News"
link: "https://thehackernews.com/2026/07/microsoft-maps-year-long-shinyhunters.html"
categoria: "Terceros"
ambito: "Organizaciones"
nivelAtencion: "Alto"
status: "Activa"
resumen: "Microsoft documentó tres formas distintas en que un grupo de extorsión de datos entró a entornos corporativos de Salesforce durante el último año, sin aprovechar ninguna falla de la plataforma. El método fue abusar de la confianza ya otorgada: llamadas falsas de soporte técnico, tokens robados de proveedores conectados y accesos de invitado mal configurados. Casi 1,000 organizaciones podrían estar afectadas."
expuestos: "Organizaciones que usan Salesforce, especialmente las que tienen aplicaciones conectadas por OAuth con proveedores externos o sitios de acceso público (Experience Cloud)."
verificacion: "Revisar qué aplicaciones conectadas por OAuth tiene la organización en Salesforce, y desactivar las que no se usan desde hace más de 90 días."
impacto: "Un atacante que obtenga acceso puede extraer datos de clientes o del negocio y usarlos para extorsionar a la organización con la amenaza de publicarlos."
grc_activo: "Entornos corporativos de Salesforce y los datos que almacenan"
grc_vector: "Tres rutas: llamadas falsas de soporte técnico para autorizar aplicaciones fraudulentas; tokens de acceso robados de proveedores conectados (Salesloft/Drift, Gainsight, Klue); configuración de acceso de invitado demasiado permisiva en sitios públicos"
grc_condicion: "Tener aplicaciones conectadas sin revisar, integraciones de prueba activas, o configuración de acceso de invitado sin restringir"
grc_alcance: "Cerca de 1,000 organizaciones en los sectores de retail, educación y manufactura, según Microsoft; incluye casos conocidos como Google, Chanel, Pandora, Adidas y Cloudflare"
publicacion: "published"
---

## Qué ocurrió

Microsoft documentó tres formas en que atacantes, cuyo comportamiento coincide con el grupo de extorsión de datos conocido como ShinyHunters, entraron a entornos corporativos de Salesforce durante el último año. Ninguna de las tres rutas requirió aprovechar una falla técnica de la plataforma. La primera fue hacer llamadas telefónicas falsas haciéndose pasar por soporte técnico para convencer a empleados de autorizar una aplicación conectada fraudulenta. La segunda fue usar tokens de acceso robados de proveedores externos conectados a Salesforce, como Salesloft/Drift, Gainsight o Klue. La tercera fue aprovechar configuraciones de acceso de invitado demasiado permisivas en sitios públicos de Salesforce (Experience Cloud). Microsoft identificó incidentes en los sectores de retail, educación y manufactura, con casi 1,000 organizaciones potencialmente afectadas en distintas oleadas.

## Quién está expuesto

### Para organizaciones

Cualquier empresa que use Salesforce, en particular las que tienen integraciones activas con proveedores externos por OAuth o sitios de acceso público para clientes.

## A considerar

Conviene hacer un inventario de todas las aplicaciones conectadas a Salesforce por OAuth, desactivar las que llevan más de 90 días sin uso, y revisar los permisos otorgados a cada una. También activar el registro de eventos de Salesforce para detectar actividad inusual, y limitar al mínimo necesario los permisos de acceso de invitado en sitios públicos.

## Impacto potencial

Un atacante que logre entrar por cualquiera de estas rutas puede extraer datos de clientes o del negocio almacenados en Salesforce y usarlos para exigir un pago a cambio de no publicarlos, el mismo patrón de extorsión usado en brechas anteriores atribuidas a este grupo.
