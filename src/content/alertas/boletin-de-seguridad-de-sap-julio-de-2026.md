---
title: "SAP corrige 17 fallas de seguridad, tres críticas, en varios de sus sistemas empresariales"
date: "2026-07-14"
source: "INCIBE-CERT"
link: "https://www.incibe.es/incibe-cert/alerta-temprana/avisos/boletin-de-seguridad-de-sap-julio-de-2026"
categoria: "Vulnerabilidad"
ambito: "Organizaciones"
nivelAtencion: "Alto"
status: "En monitoreo"
resumen: "SAP publicó su boletín de seguridad de julio de 2026 con 17 fallas corregidas, tres de ellas críticas, en productos como NetWeaver, Commerce Cloud, S/4HANA y otros sistemas usados para administrar operaciones empresariales. No hay reportes de explotación activa, pero SAP recomienda aplicar los parches con prioridad."
expuestos: "Organizaciones que usan sistemas SAP, en particular NetWeaver Application Server ABAP, Approuter, Commerce Cloud, Integration Suite o S/4HANA."
verificacion: "Revisar en el portal de soporte de SAP qué productos y versiones instaladas están afectados, y aplicar los parches correspondientes, priorizando las tres fallas críticas."
impacto: "Dependiendo de la falla, un atacante podría acceder a información confidencial, modificar datos, interrumpir el servicio o ejecutar acciones no autorizadas dentro del sistema."
grc_activo: "Sistemas empresariales SAP: NetWeaver, Approuter, Commerce Cloud, Integration Suite, S/4HANA y CRM"
grc_vector: "17 fallas de distintos tipos, incluyendo corrupción de memoria, manipulación de solicitudes HTTP, credenciales de ejemplo inseguras, inyección SQL y fallas de autorización"
grc_condicion: "Tener instalada una versión sin actualizar de alguno de los productos SAP afectados"
grc_alcance: "Organizaciones con sistemas SAP en producción; 3 fallas críticas, 6 altas, 7 medias y 1 baja, sin explotación activa reportada al momento del boletín"
publicacion: "published"
---

## Qué ocurrió

SAP publicó su boletín mensual de seguridad correspondiente a julio de 2026, con 17 fallas corregidas en varios de sus productos: NetWeaver Application Server ABAP, Approuter, Commerce Cloud, Integration Suite, SAProuter, S/4HANA y CRM. Tres de las fallas se clasifican como críticas. Entre los problemas corregidos hay corrupción de memoria, manipulación de solicitudes HTTP, uso de credenciales de ejemplo que no deberían estar activas en producción, e inyección SQL (una técnica que permite manipular una base de datos a través de un formulario o campo de entrada mal protegido). El boletín no reporta explotación activa de estas fallas hasta el momento de su publicación.

## Quién está expuesto

### Para organizaciones

Empresas que operan sistemas SAP para procesos financieros, de cadena de suministro o gestión de clientes, en particular las que usan NetWeaver, Commerce Cloud o S/4HANA.

## A considerar

Las tres fallas críticas deben priorizarse sobre el resto. SAP recomienda revisar el portal de soporte oficial para identificar qué parches aplican a la versión específica instalada en cada organización, ya que el boletín cubre productos y versiones distintas con niveles de riesgo diferentes.

## Impacto potencial

Sin corregir, estas fallas podrían permitir a un atacante acceder a información confidencial de la operación, modificar registros financieros o de clientes, o interrumpir procesos críticos que dependen de los sistemas SAP de la organización.
