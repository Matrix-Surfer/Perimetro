---
title: "Campaña activa roba datos de pago en tiendas en línea usando la propia infraestructura de Stripe"
date: "2026-06-04"
source: "BleepingComputer"
link: "https://www.bleepingcomputer.com/news/security/credit-card-theft-campaign-abuses-stripe-to-host-stolen-payment-info/"
categoria: "Fraude"
ambito: "Mixto"
nivelAtencion: "Alto"
status: "Activa"
resumen: "Una campaña activa inyecta código malicioso en las páginas de pago de tiendas en línea y usa la infraestructura de Stripe para extraer los datos robados sin activar alertas. Los datos de tarjeta del cliente son capturados en el momento del pago."
expuestos: "Clientes de tiendas en línea afectadas. Empresas que operan tiendas en línea con formularios de pago potencialmente vulnerables."
verificacion: "Verificar que la plataforma de la tienda está actualizada y que no hay scripts no autorizados en las páginas de pago."
impacto: "Datos de tarjeta capturados en tiempo real permiten fraude inmediato; para la empresa operadora implica sanciones del procesador de pagos y daño reputacional."
grc_activo: "formularios de pago en tiendas en línea con integración de Stripe"
grc_vector: "inyección de código malicioso en la página de checkout que captura datos de tarjeta"
grc_condicion: "tienda en línea con plataforma vulnerable y formulario de pago expuesto"
grc_explotacion: "activa"
grc_alcance: "tiendas en línea con checkout vulnerable que usan Stripe como procesador"
grc_confianza: "media"
publicacion: "published"
---

## Qué ocurrió

Investigadores detectaron una campaña activa que inyecta código malicioso en las páginas de pago de tiendas en línea. El código captura los datos de tarjeta del cliente en el momento exacto del pago y los envía a través de la infraestructura de Stripe —el propio procesador de pagos de la tienda— para evadir los filtros de seguridad que bloquean tráfico hacia destinos desconocidos. La técnica aprovecha que el tráfico hacia Stripe parece legítimo.

## Quién está expuesto

### Para personas

Clientes de tiendas en línea afectadas que ingresan datos de tarjeta durante el proceso de pago.

### Para organizaciones

Empresas que operan tiendas en línea, especialmente aquellas con plataformas desactualizadas o integraciones de terceros sin revisión de seguridad reciente. El uso de Stripe como procesador no protege si la página que lo integra tiene código malicioso inyectado.

## A considerar

- Validar si las páginas de pago cargan scripts o componentes que no forman parte de la implementación autorizada del sitio.
- Verificar cambios recientes en plantillas, plugins o componentes relacionados con el proceso de checkout.
- Revisar en Stripe actividades o patrones de uso inusuales asociados al formulario de pago.
- Confirmar que existe monitoreo de integridad sobre las páginas donde se capturan datos de tarjeta.
## Impacto potencial

Los datos de tarjeta capturados en tiempo real pueden usarse para compras fraudulentas inmediatas. Para la empresa operadora, el riesgo incluye sanciones del procesador de pagos, pérdida de la certificación de seguridad requerida para procesar tarjetas, notificación obligatoria a clientes afectados, y daño reputacional difícil de revertir.
