---
title: "Zimbra corrige falla crítica que permite robar el buzón de correo con solo abrir un mensaje"
date: "2026-07-10"
source: "BleepingComputer"
link: "https://www.bleepingcomputer.com/news/security/zimbra-urges-customers-to-patch-critical-web-client-xss-flaw/"
categoria: "Vulnerabilidad"
ambito: "Organizaciones"
nivelAtencion: "Alto"
status: "En monitoreo"
resumen: "Zimbra pidió actualizar de urgencia el Cliente Web Clásico de su suite de correo después de que el equipo de amenazas de Google reportara una falla crítica. Basta con abrir un correo malicioso para que un atacante robe la sesión o el contenido del buzón. La empresa ya publicó el parche."
expuestos: "Organizaciones que usan Zimbra Collaboration Suite con el Cliente Web Clásico, en una versión anterior a 10.1.19."
verificacion: "Confirmar la versión de Zimbra instalada y actualizar a 10.1.19 o superior."
impacto: "Robo de sesión activa, configuración de cuenta o contenido completo del buzón de correo."
grc_activo: "Cuentas de correo de Zimbra Collaboration Suite accedidas vía el Cliente Web Clásico"
grc_vector: "Correo electrónico especialmente diseñado que ejecuta código malicioso al abrirse (falla de tipo XSS)"
grc_condicion: "Usar el Cliente Web Clásico de Zimbra en una versión anterior a 10.1.19"
grc_explotacion: "investigacion"
grc_alcance: "Organizaciones que usan Zimbra Collaboration Suite como servidor de correo corporativo"
grc_confianza: "alta"
publicacion: "published"
---

## Qué ocurrió

Zimbra pidió a sus clientes actualizar de inmediato el Cliente Web Clásico de su suite de correo colaborativo, después de que el equipo de amenazas de Google reportara una falla de seguridad crítica. Un correo especialmente diseñado, con solo abrirlo, puede ejecutar código malicioso dentro de la cuenta de la víctima. Zimbra ya publicó la corrección en la versión 10.1.19 y afirma que, hasta ahora, no tiene evidencia de que la falla se esté explotando activamente.

## Quién está expuesto

### Para organizaciones

Empresas e instituciones que usan Zimbra Collaboration Suite como su servidor de correo y acceden mediante el Cliente Web Clásico, en una versión anterior a la 10.1.19.

## A considerar

Que el reporte provenga del equipo de amenazas de Google, encargado de rastrear ataques dirigidos y sofisticados, es una señal de que conviene actualizar sin esperar más evidencia pública.

## Impacto potencial

Con solo abrir un correo malicioso, un atacante puede robar la sesión activa, la configuración de la cuenta o el contenido completo del buzón de correo. Eso puede incluir contratos, facturas o comunicaciones internas sensibles de la empresa.
