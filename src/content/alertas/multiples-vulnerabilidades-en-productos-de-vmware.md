---
title: "Cinco vulnerabilidades en productos VMware, tres de severidad crítica"
date: "2026-07-30"
source: "INCIBE-CERT"
link: "https://www.incibe.es/incibe-cert/alerta-temprana/avisos/multiples-vulnerabilidades-en-productos-de-vmware-4"
categoria: "Vulnerabilidad"
ambito: "Organizaciones"
nivelAtencion: "Alto"
status: "En monitoreo"
resumen: "VMware publicó parches para cinco vulnerabilidades que afectan a ESX, vCenter, Workstation, Fusion y otros productos de virtualización, tres de ellas de severidad crítica. Las fallas podrían permitir a un atacante con acceso a la red de vCenter eludir la autenticación y ejecutar código arbitrario, o a un atacante con privilegios dentro de una máquina virtual ejecutar código directamente en el servidor físico que la aloja. Las organizaciones que operan infraestructura VMware deben aplicar las actualizaciones indicadas en el aviso oficial del fabricante."
expuestos: "Organizaciones que operan VMware ESX, vCenter, Workstation, Fusion, Cloud Foundation, vSphere Foundation, Telco Cloud Platform o Telco Cloud Infrastructure sin las actualizaciones más recientes."
verificacion: "Confirmar qué productos VMware están en uso y aplicar las actualizaciones indicadas en el aviso oficial VMSA-2026-0006 del fabricante."
impacto: "Acceso no autorizado al entorno de virtualización, ejecución de código arbitrario, posible ejecución de código en el servidor físico que aloja las máquinas virtuales, y realización de operaciones sin que queden registradas."
grc_activo: "VMware ESX, vCenter, Workstation, Fusion, Cloud Foundation, vSphere Foundation, Telco Cloud Platform y Telco Cloud Infrastructure"
grc_vector: "Omisión de autenticación en el servicio de directorio de vCenter, recorrido de directorios en el servidor Syslog, y escritura o lectura fuera de límites en adaptadores de red virtuales"
grc_condicion: "Acceso a la red de vCenter para las fallas de autenticación y Syslog; privilegios de administrador local en una máquina virtual con adaptador VMXNET3 para la falla de escritura fuera de límites"
grc_explotacion: "investigacion"
grc_alcance: "Instalaciones de los productos VMware afectados sin las actualizaciones del aviso VMSA-2026-0006"
grc_confianza: "alta"
publicacion: "published"
---

## Qué ocurrió

VMware publicó parches para cinco vulnerabilidades que afectan a varios de sus productos de virtualización: ESX, vCenter, Workstation, Fusion, Cloud Foundation, vSphere Foundation, Telco Cloud Platform y Telco Cloud Infrastructure. Tres de las fallas son de severidad crítica. La más grave permite a un atacante con acceso a la red de vCenter eludir la autenticación y obtener acceso no autorizado al sistema; otra permite ejecutar código arbitrario a través del servidor Syslog; una tercera permite que un atacante con privilegios dentro de una máquina virtual ejecute código directamente en el servidor físico que la aloja.

## Quién está expuesto

Organizaciones que operan cualquiera de los productos VMware mencionados sin las actualizaciones más recientes indicadas en el aviso oficial del fabricante.

## Impacto potencial

Acceso no autorizado al entorno de virtualización completo, ejecución de código arbitrario dentro de la infraestructura, y en el peor caso, ejecución de código en el servidor físico que aloja las máquinas virtuales, lo que pondría en riesgo no solo una máquina virtual, sino todas las que comparten el mismo servidor.
