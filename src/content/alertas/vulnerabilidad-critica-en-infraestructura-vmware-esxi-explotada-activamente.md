---
title: "Vulnerabilidad crítica en infraestructura VMware ESXi explotada activamente"
date: "2026-05-20"
tipo: "Ransomware"
status: "Activa"
resumen: "Se reporta la explotación activa de una vulnerabilidad crítica en entornos VMware ESXi. El vector de ataque permite ejecución remota y posible despliegue de ransomware en infraestructura virtualizada sin necesidad de credenciales previas."
publicacion: "published"
---

## Contexto

CISA emitió una alerta sobre la explotación activa de una vulnerabilidad crítica en VMware ESXi. El fallo permite a atacantes remotos ejecutar código arbitrario sin autenticación previa, lo que abre la puerta al despliegue de ransomware directamente sobre la infraestructura virtualizada.

VMware ESXi es un hipervisor ampliamente utilizado para consolidar servidores físicos en entornos empresariales. Un compromiso exitoso puede afectar simultáneamente a múltiples máquinas virtuales que corren sobre el mismo host.

## Impacto potencial

Las organizaciones que utilizan VMware ESXi como plataforma de virtualización son el objetivo directo. Un ataque exitoso puede resultar en el cifrado masivo de sistemas virtualizados, interrupción total de operaciones y extorsión económica. La capacidad de ejecutar código sin credenciales amplía significativamente la superficie de ataque.

## Recomendaciones

- Aplicar los parches de VMware de forma inmediata. Verificar el aviso oficial de CISA y el boletín de seguridad de Broadcom/VMware para identificar las versiones afectadas.
- Si no es posible parchear de inmediato, evaluar deshabilitar temporalmente los servicios expuestos o restringir el acceso a la interfaz de administración de ESXi.
- Revisar los registros de acceso y actividad en los hosts ESXi en busca de comportamientos anómalos.
- Asegurarse de que los respaldos de las máquinas virtuales estén actualizados y almacenados fuera del entorno ESXi comprometible.
- Segmentar el acceso de red a los hosts de virtualización para limitar la exposición.
