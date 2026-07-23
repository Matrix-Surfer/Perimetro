---
title: "Un proveedor de nube reinició servidores de clientes sin avisar para cerrar una falla crítica de aislamiento"
pubDate: 2026-07-21
source: "The Register — Security"
link: "https://www.theregister.com/virtualization/2026/07/21/ovh-reveals-semi-secret-plan-to-fix-critical-januscape-hypervisor-bug-with-mass-reboots-and-an-australian-crash-test-dummy/5275359"
category: "Seguridad"
señal: "El proveedor de nube OVH corrigió una falla crítica que permitía a un cliente comprometido tomar control de otras máquinas virtuales en el mismo servidor físico, reiniciando masivamente sus servidores sin pedir consentimiento a los clientes ni avisar durante el proceso."
supuesto: "Un proveedor de nube coordina con el cliente cualquier interrupción del servicio, incluso en una emergencia de seguridad."
observación: "Qué cláusulas de continuidad, notificación y consentimiento tiene el contrato con los proveedores de nube o hosting que usa la organización, y qué pasó la última vez que uno de ellos enfrentó una emergencia similar."
context: "OVH descubrió una falla crítica en la capa de virtualización que permitía a un atacante con control de una máquina virtual tomar el control de otras máquinas virtuales del mismo servidor físico, una ruptura del aislamiento que los proveedores de nube prometen a sus clientes. Para corregirla, la empresa reinició masivamente sus servidores sin pedir consentimiento ni avisar durante el proceso, priorizando la protección colectiva sobre la transparencia individual. La decisión expone una tensión que rara vez se discute antes de que ocurra: en una emergencia real, el proveedor de nube puede actuar de forma unilateral sobre infraestructura que el cliente considera suya."
publicacion: "published"
---

## La señal

El proveedor de nube francés OVH descubrió una falla crítica en la capa de virtualización de sus servidores que permitía a un atacante con control de una máquina virtual comprometida tomar el control de otras máquinas virtuales en el mismo servidor físico, rompiendo el aislamiento que los proveedores de nube prometen entre clientes distintos que comparten infraestructura. Para corregirla, OVH reinició masivamente sus servidores sin pedir consentimiento a los clientes, y decidió no avisar con detalle mientras el parche estaba en proceso, para no aumentar el riesgo mientras la infraestructura seguía sin corregir.

## El supuesto que se rompe

La idea de que un proveedor de nube coordina con el cliente cualquier interrupción del servicio, incluso en una emergencia de seguridad. En la práctica, cuando el riesgo es lo suficientemente grave, el proveedor puede decidir actuar de forma unilateral sobre infraestructura compartida, priorizando la protección colectiva sobre el aviso individual.

## Qué observar

Qué cláusulas de continuidad, notificación y consentimiento tiene el contrato con los proveedores de nube o hosting que usa la organización, y qué tan realista es esperar transparencia total durante una emergencia de seguridad real. La pregunta no es si esto puede volver a pasar, sino qué tan preparada está la organización para una interrupción que no eligió ni pudo anticipar.
