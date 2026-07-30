---
title: "Inyección SQL en ERPNext permite extraer datos sensibles con una cuenta de bajo privilegio"
date: "2026-07-29"
source: "INCIBE-CERT"
link: "https://www.incibe.es/incibe-cert/alerta-temprana/avisos/inyeccion-sql-en-erpnext-de-frappe"
categoria: "Vulnerabilidad"
ambito: "Organizaciones"
nivelAtencion: "Medio"
status: "En monitoreo"
resumen: "Frappe corrigió una vulnerabilidad de inyección SQL en ERPNext, su sistema de planeación de recursos empresariales, que permitía a un usuario con acceso limitado ejecutar consultas no autorizadas contra la base de datos y extraer información sensible, incluidas credenciales y datos financieros. Afecta a las versiones anteriores a 15.111.0 y 16.22.0. Las organizaciones que usan ERPNext deben confirmar la versión instalada y actualizar."
expuestos: "Organizaciones que operan ERPNext para su gestión empresarial, en particular las que otorgan acceso al sistema a usuarios con privilegios bajos."
verificacion: "Confirmar la versión de ERPNext instalada y actualizar a 15.111.0 o 16.22.0 si es anterior."
impacto: "Un usuario con acceso limitado podría extraer credenciales, tokens de integración o información financiera de la base de datos sin autorización."
grc_activo: "ERPNext (sistema de planeación de recursos empresariales de Frappe)"
grc_vector: "Inyección SQL a través del campo de nombre de un registro de proveedor (Supplier), por interpolación insegura de cadenas de texto"
grc_condicion: "Cuenta autenticada con privilegios bajos dentro del sistema ERPNext"
grc_explotacion: "poc_publica"
grc_alcance: "Instalaciones de ERPNext en versiones anteriores a 15.111.0 y 16.22.0"
grc_confianza: "alta"
publicacion: "published"
---

## Qué ocurrió

Frappe corrigió una vulnerabilidad de inyección SQL (CVE-2026-12895) en ERPNext, su sistema de planeación de recursos empresariales (ERP). La falla permitía que un usuario autenticado con privilegios bajos manipulara el nombre de un registro de proveedor para insertar código SQL que la aplicación ejecutaba sin validar, evadiendo los controles internos de acceso del sistema.

## Quién está expuesto

Organizaciones que operan ERPNext en versiones anteriores a 15.111.0 o 16.22.0, en particular aquellas que otorgan acceso al sistema a empleados o colaboradores con permisos limitados.

## Impacto potencial

Un usuario con acceso restringido podría extraer información confidencial de la base de datos sin autorización: fragmentos del hash de la contraseña del administrador, credenciales de acceso, tokens de integración con otros sistemas o información financiera almacenada en el ERP.
