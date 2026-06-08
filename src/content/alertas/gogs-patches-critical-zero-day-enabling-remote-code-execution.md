---
title: "Falla crítica en servidor Git propio permite tomar control del sistema de forma remota"
date: "2026-06-08"
source: "BleepingComputer"
link: "https://www.bleepingcomputer.com/news/security/gogs-patches-critical-zero-day-enabling-remote-code-execution/"
categoria: "Vulnerabilidad"
ambito: "Organizaciones"
nivelAtencion: "Alto"
status: "En monitoreo"
resumen: "Se descubrió y parchó una falla crítica en Gogs, una plataforma de código abierto que las organizaciones instalan en sus propios servidores para gestionar repositorios de código. La vulnerabilidad permite a un atacante ejecutar comandos en el servidor de forma remota. Las instalaciones sin actualizar siguen expuestas."
expuestos: "Organizaciones que tienen una instalación propia de Gogs para alojar su código fuente o proyectos internos."
verificacion: "Confirmar con el equipo técnico si la organización usa Gogs y si está actualizado a la versión más reciente."
impacto: "Control total del servidor donde está instalado Gogs: acceso al código fuente, credenciales almacenadas, y potencial movimiento hacia otros sistemas internos conectados."
grc_activo: "Servidor con Gogs instalado y accesible en red"
grc_vector: "Ejecución remota de código sin autenticación previa"
grc_condicion: "Instalación de Gogs desactualizada expuesta a la red"
grc_explotacion: "poc_publica"
grc_alcance: "Organizaciones con repositorios Git auto-alojados en Gogs"
grc_confianza: "alta"
publicacion: "published"
---

## Qué ocurrió

Gogs es una plataforma que permite a las organizaciones alojar sus propios repositorios de código fuente en servidores propios, sin depender de GitHub o GitLab. Investigadores descubrieron una falla crítica que permite a un atacante tomar control del servidor donde está instalado sin necesidad de usuario ni contraseña. El equipo de Gogs publicó una actualización que corrige la vulnerabilidad.

## Quién está expuesto

### Para organizaciones

Empresas de desarrollo de software, agencias digitales, equipos de TI y cualquier organización que prefiere alojar su propio sistema de gestión de código. Gogs es popular precisamente porque es liviano y fácil de instalar en servidores propios o en la nube.

Si la organización gestiona proyectos de desarrollo internamente y tiene algún servidor dedicado a eso, vale verificar si usa Gogs.

## A considerar

A diferencia de GitHub o GitLab, Gogs es responsabilidad de quien lo instala. No hay actualizaciones automáticas. La organización debe aplicar el parche manualmente. Si el servidor de Gogs está expuesto a Internet(no solo a la red interna), la urgencia es mayor.

## Impacto potencial

El servidor de código fuente contiene información sensible: el código de los productos o sistemas de la organización, claves de acceso a servicios externos, configuraciones de infraestructura y posiblemente datos de clientes integrados en los proyectos. Un atacante con control de ese servidor tiene acceso a todo eso, y desde ahí puede moverse hacia otros sistemas conectados.
