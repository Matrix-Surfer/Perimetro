---
title: "Progress confirma una falla sin parche detrás del apagado de emergencia de ShareFile"
date: "2026-07-14"
source: "BleepingComputer"
link: "https://www.bleepingcomputer.com/news/security/progress-confirms-sharefile-zero-day-flaw-behind-storage-zone-shutdown/"
categoria: "Vulnerabilidad"
ambito: "Organizaciones"
nivelAtencion: "Alto"
status: "En monitoreo"
resumen: "Progress Software confirmó que una falla grave de seguridad, sin parche disponible al momento del hallazgo, motivó el apagado de emergencia de los servidores de almacenamiento de ShareFile la semana pasada. Ya existen actualizaciones que corrigen el problema. No hay evidencia de acceso no autorizado a cuentas de clientes."
expuestos: "Organizaciones que usan ShareFile Storage Zone Controller, versiones 5.x y 6.x, para compartir archivos con clientes o socios."
verificacion: "Instalar las actualizaciones 5.12.5 o 6.0.2 de ShareFile Storage Zone Controller antes de volver a activar los servidores."
impacto: "Un usuario administrativo autenticado podía leer archivos ajenos a su cuenta, escribir contenido malicioso en el servidor o mapear la estructura completa del sistema de archivos."
grc_activo: "Servidores ShareFile Storage Zone Controller usados para compartir archivos con clientes y socios"
grc_vector: "Falla de recorrido de directorios (path traversal) que permite a un usuario administrativo autenticado acceder a archivos fuera de su alcance normal"
grc_condicion: "Tener una instalación de ShareFile Storage Zone Controller (versiones 5.x o 6.x) sin la actualización de seguridad más reciente"
grc_alcance: "Clientes de ShareFile Storage Zone Controller; Progress recibió aviso de una fuente externa sobre una posible amenaza dirigida antes de encontrar evidencia de explotación"
publicacion: "published"
---

## Qué ocurrió

Progress Software, la empresa detrás de ShareFile, confirmó que una falla grave de seguridad motivó el apagado de emergencia de los servidores de almacenamiento (Storage Zone Controller) que ordenó la semana pasada. La falla permite que un usuario con cuenta administrativa lea archivos que no le corresponden, escriba contenido malicioso en el servidor o descubra cómo está organizado el sistema de archivos completo. Progress tomó la decisión de apagar los servidores tras recibir información de una fuente externa sobre una posible amenaza dirigida a sus clientes, aunque no encontró evidencia de que algún cliente haya sido afectado. Ya publicó actualizaciones que corrigen el problema.

## Quién está expuesto

### Para organizaciones

Empresas que usan ShareFile Storage Zone Controller (versiones 5.x o 6.x) para compartir archivos con clientes, proveedores o equipos externos.

## A considerar

Los servidores deben permanecer apagados hasta instalar la actualización correspondiente (5.12.5 o 6.0.2). Progress reservó un identificador oficial de la falla (CVE) que publicará en las próximas semanas.

## Impacto potencial

Si la falla se hubiera explotado, un atacante con una cuenta administrativa habría podido acceder a archivos confidenciales de otros clientes o insertar contenido malicioso en el sistema de almacenamiento compartido, comprometiendo la confidencialidad de la información que circula entre la organización y sus contactos externos.
