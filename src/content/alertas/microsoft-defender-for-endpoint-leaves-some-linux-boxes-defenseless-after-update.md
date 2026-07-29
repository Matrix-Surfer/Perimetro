---
title: "Una actualización de un antivirus empresarial dejó sin protección algunos servidores Linux sin avisar"
date: "2026-07-27"
source: "The Register — Security"
link: "https://www.theregister.com/patches/2026/07/27/microsoft-defender-for-endpoint-leaves-some-linux-boxes-defenseless-after-update/5278914"
categoria: "Vulnerabilidad"
ambito: "Organizaciones"
nivelAtencion: "Alto"
status: "Activa"
resumen: "Dos fallas en una actualización reciente de Microsoft Defender for Endpoint, el antivirus empresarial de Microsoft, dejaron algunos servidores Linux sin protección: una desactiva el servicio de seguridad al reiniciar el equipo, y otra impide instalarlo en sistemas RHEL con configuración reforzada."
expuestos: "Organizaciones que usan Microsoft Defender for Endpoint para proteger servidores Linux, en especial sistemas RHEL con configuración de seguridad reforzada."
verificacion: "Confirmar hoy mismo si Microsoft Defender for Endpoint sigue activo en los servidores Linux de la organización, especialmente después de un reinicio reciente."
impacto: "Servidores que la organización cree protegidos quedan, en realidad, sin ningún antivirus activo, sin que exista una alerta visible de que la protección se desactivó."
grc_activo: "Servidores Linux protegidos con Microsoft Defender for Endpoint, en particular sistemas RHEL con configuración reforzada"
grc_vector: "Dos fallas distintas en una actualización reciente: una desactiva el servicio de Defender cuando el servidor se reinicia, y otra bloquea por completo la instalación en sistemas RHEL con configuración de seguridad reforzada"
grc_condicion: "Haber aplicado la actualización afectada y reiniciado el servidor, o intentar instalar Defender en un sistema RHEL reforzado"
grc_alcance: "Organizaciones con servidores Linux protegidos por Microsoft Defender for Endpoint que aplicaron la actualización reciente"
grc_confianza: "alta"
publicacion: "published"
---

## Qué ocurrió

Una actualización reciente de Microsoft Defender for Endpoint, el antivirus que muchas organizaciones usan para proteger sus servidores, introdujo dos fallas distintas en sistemas Linux. La primera desactiva por completo el servicio de protección cuando el servidor se reinicia, sin que nadie lo note a simple vista. La segunda impide instalar Defender en sistemas RHEL configurados con seguridad reforzada, dejándolos sin esa capa de protección desde el inicio.

## Quién está expuesto

Organizaciones que usan Microsoft Defender for Endpoint para proteger servidores Linux, en particular las que aplicaron la actualización reciente y han reiniciado esos servidores desde entonces, o las que intentan instalar Defender en sistemas RHEL con configuración de seguridad reforzada.

## A considerar

La particularidad de esta falla es que no genera una alerta visible: un servidor puede aparecer como protegido en el panel de administración mientras el servicio real está desactivado tras un reinicio. Confirmar el estado real del servicio, no solo su configuración esperada, es la verificación que corresponde hoy.

## Impacto potencial

Un servidor que la organización considera protegido, pero que en realidad quedó sin antivirus activo, es un blanco más fácil para cualquier ataque que normalmente Defender detectaría, precisamente en el periodo en que nadie sabe que la protección está desactivada.
