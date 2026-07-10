---
title: "Progress pide apagar de inmediato los servidores de ShareFile por una amenaza sin detalles públicos"
date: "2026-07-10"
source: "BleepingComputer"
link: "https://www.bleepingcomputer.com/news/security/progress-urges-sharefile-customers-to-shut-down-servers-over-credible-threat/"
categoria: "Vulnerabilidad"
ambito: "Organizaciones"
nivelAtencion: "Alto"
status: "En monitoreo"
resumen: "Progress Software pidió a sus clientes apagar de inmediato los servidores que alojan Storage Zone Controllers de ShareFile, por lo que describe como una 'amenaza externa creíble'. No hay CVE público ni confirmación de que algún servidor haya sido comprometido, pero la empresa exige acción inmediata."
expuestos: "Organizaciones que usan Storage Zone Controllers de ShareFile en infraestructura propia."
verificacion: "Si la organización usa Storage Zone Controllers de ShareFile, apagar el servidor y esperar la actualización oficial de Progress."
impacto: "Posible exposición de archivos compartidos de la empresa o punto de entrada a la red corporativa, si la amenaza se confirma."
grc_activo: "Servidores Windows locales que alojan Storage Zone Controllers de ShareFile"
grc_vector: "Amenaza externa 'creíble' según Progress Software; sin detalles técnicos públicos ni CVE asignado"
grc_condicion: "Usar Storage Zone Controllers de ShareFile en infraestructura propia (on-premises)"
grc_explotacion: "investigacion"
grc_alcance: "Organizaciones que usan Storage Zone Controllers de ShareFile para compartir archivos manteniéndolos en su propia infraestructura"
grc_confianza: "media"
publicacion: "published"
---

## Qué ocurrió

Progress Software envió un correo urgente a los clientes que usan Storage Zone Controllers de ShareFile, servidores Windows que las empresas instalan en su propia infraestructura para mantener archivos bajo su control, mientras usan la nube de ShareFile solo para el inicio de sesión y la gestión de usuarios. El correo, con el asunto "Interrupción de servicio. Se requiere acción inmediata", pide apagar manualmente el servidor de inmediato. Progress dice tener razones para creer que existe una amenaza externa creíble dirigida a estos servidores, pero no ha confirmado si se trata de una falla de día cero ni si algún servidor ya fue comprometido. La empresa prometió otra actualización dentro de 24 horas.

## Quién está expuesto

### Para organizaciones

Empresas que usan Storage Zone Controllers de ShareFile para compartir archivos manteniéndolos en servidores propios.

## A considerar

Apagar el servidor que aloja el Storage Zone Controller es, por ahora, la única acción concreta que pide Progress, incluso sin conocerse el detalle técnico de la amenaza. Ante la falta de información pública, conviene seguir de cerca las actualizaciones oficiales de Progress en las próximas horas.

## Impacto potencial

Progress no ha detallado qué podría hacer un atacante si la amenaza se concreta, pero al tratarse de un servidor que aloja archivos compartidos de la empresa, un compromiso podría exponer documentos internos o dar al atacante un punto de entrada a la red corporativa.
