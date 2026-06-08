---
title: "Falla en VPN de Check Point explotada activamente por grupo de ransomware"
date: "2026-06-08"
source: "BleepingComputer"
link: "https://www.bleepingcomputer.com/news/security/check-point-links-vpn-zero-day-attacks-to-qilin-ransomware-gang/"
categoria: "Vulnerabilidad"
ambito: "Organizaciones"
nivelAtencion: "Crítico"
status: "Activa"
resumen: "Check Point confirmó que una falla en su solución VPN está siendo explotada activamente por el grupo de ransomware Qilin para entrar a redes corporativas sin contraseña. La vulnerabilidad afecta configuraciones con un protocolo de autenticación antiguo. Las organizaciones con VPN Check Point deben aplicar el parche de inmediato."
expuestos: "Organizaciones que usan la VPN de Check Point con configuraciones IKEv1 activas."
verificacion: "Confirmar con el área de TI si la VPN de Check Point está actualizada y si el protocolo IKEv1 está habilitado en la configuración actual."
impacto: "Acceso no autorizado a la red corporativa, robo de información y posible despliegue de ransomware que cifra archivos y detiene operaciones."
grc_activo: "VPN Check Point con configuración IKEv1"
grc_vector: "Explotación de falla de autenticación en el protocolo VPN"
grc_condicion: "VPN Check Point activa con IKEv1 habilitado y sin parche aplicado"
grc_explotacion: "activa"
grc_alcance: "Redes corporativas que usan Check Point como solución de acceso remoto"
grc_confianza: "alta"
publicacion: "published"
---

## Qué ocurrió

Check Point identificó una falla en su solución VPN que permite saltarse el proceso de autenticación en configuraciones que usan un protocolo de conexión más antiguo llamado IKEv1. La empresa confirmó que el grupo de ransomware Qilin está explotando activamente esta vulnerabilidad para entrar a redes corporativas. Una vez dentro, el grupo despliega ransomware — un programa malicioso que cifra todos los archivos de la organización y exige un pago para recuperarlos. Check Point publicó un parche de emergencia.

## Quién está expuesto

### Para organizaciones

Empresas que usan la VPN de Check Point para dar acceso remoto a sus empleados o para conectar sucursales. La exposición es mayor si la configuración usa el protocolo IKEv1, que era el estándar hace varios años y muchas organizaciones nunca desactivaron.

## A considerar

Dos acciones concretas que derivan directamente de este incidente:

Primero: verificar si la VPN de Check Point tiene el parche aplicado. El área de TI puede confirmarlo.

Segundo: revisar si en los últimos días hubo conexiones VPN desde ubicaciones o horarios inusuales. Si el grupo Qilin ya entró antes de que se aplicara el parche, puede haber dejado acceso instalado.

## Impacto potencial

El ransomware Qilin cifra archivos en todos los equipos y servidores accesibles desde la red comprometida. Las operaciones se detienen por completo hasta recuperar la información, ya sea pagando el rescate o restaurando desde respaldos. El tiempo promedio de recuperación sin respaldos limpios supera las dos semanas.
