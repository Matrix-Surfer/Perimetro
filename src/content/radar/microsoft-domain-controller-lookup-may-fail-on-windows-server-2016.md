---
title: "La actualización de mayo 2026 rompe la búsqueda de controladores de dominio en Windows Server 2016"
pubDate: 2026-05-26
source: "BleepingComputer"
link: "https://www.bleepingcomputer.com/news/microsoft/microsoft-domain-controller-lookup-may-fail-on-windows-server-2016/"
category: "Seguridad"
context: "La actualización KB5087537 de mayo 2026 interrumpe la búsqueda de controladores de dominio en Windows Server 2016, lo que puede bloquear autenticaciones y acceso a recursos en entornos con Active Directory. Servidores que recibieron el parche automáticamente este mes pueden estar fallando en silencio. Si TI no ha verificado que los servidores 2016 operan con normalidad después del Patch Tuesday, es el momento de hacerlo."
publicacion: "published"
---

## Resumen

Microsoft confirmó un problema conocido en Windows Server 2016: la instalación de la actualización de seguridad KB5087537 de mayo 2026 puede causar fallos en las búsquedas de controladores de dominio (DC). El problema afecta entornos con Active Directory donde los servidores 2016 actúan como clientes o miembros del dominio.

## Relevancia

Windows Server 2016 sigue siendo común en empresas medianas mexicanas con infraestructura on-premise. Un fallo en la búsqueda de controladores de dominio se traduce en problemas de autenticación para usuarios y aplicaciones que dependen de Active Directory — desde el acceso al correo hasta sistemas de ERP. El riesgo práctico: equipos que aplicaron el parche automáticamente este mes pueden estar experimentando fallos intermitentes sin relacionarlos con la actualización. Microsoft está trabajando en una corrección; mientras tanto, la mitigación es revertir KB5087537 en los servidores afectados.
