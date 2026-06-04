---
title: "Atacantes accedieron al correo de un directivo durante cinco meses sin ser detectados"
date: "2026-06-04"
source: "The Hacker News"
link: "https://thehackernews.com/2026/06/hackers-spied-on-stock-exchange.html"
categoria: "Otro"
ambito: "Organizaciones"
nivelAtencion: "Alto"
status: "En monitoreo"
resumen: "Atacantes mantuvieron acceso al correo de Outlook de un ejecutivo senior de una bolsa de valores global durante cinco meses. Extrajeron mensajes en lotes pequeños via Dropbox y OneDrive para no activar alertas. El caso muestra cómo un acceso no autorizado puede sostenerse por meses sin ser detectado cuando no hay monitoreo de accesos anómalos en cuentas de alto valor."
expuestos: "Directivos, dueños y ejecutivos con información estratégica o financiera en su correo corporativo. Organizaciones sin monitoreo de accesos anómalos."
verificacion: "Verificar si hay sesiones activas desde ubicaciones inusuales en cuentas de correo de directivos. Confirmar que el correo corporativo registra los inicios de sesión."
impacto: "Con acceso al correo de un directivo durante meses, un atacante puede extraer estrategia, negociaciones en curso, información financiera no pública, y datos de clientes usables para extorsión o fraude."
publicacion: "published"
---

## Qué ocurrió

Investigadores de Symantec documentaron un caso en el que un grupo de atacantes mantuvo acceso continuo al correo de Outlook de un ejecutivo senior de una bolsa de valores global durante al menos cinco meses. El método fue calculado: copiaron los mensajes en pequeños lotes y los enviaron hacia cuentas de Dropbox y OneDrive, mezclando el tráfico con la actividad normal de la nube para no activar alertas. El objetivo fue el espionaje: extracción silenciosa de información estratégica, no un robo inmediato.

## Quién está expuesto

### Organizaciones

Empresas cuyos directivos, socios o ejecutivos tienen información estratégica, financiera o comercial en su correo corporativo, y que no cuentan con monitoreo activo de accesos anómalos en esas cuentas. No es necesario ser una bolsa de valores para tener información valiosa en el correo del director.

## Qué verificar

Solicitar a TI que revise si hay sesiones activas desde ubicaciones inusuales en las cuentas de correo de directivos. Si se usa Microsoft 365, revisar si hay aplicaciones de terceros con acceso delegado al correo, o reglas de reenvío automático configuradas sin autorización. Confirmar que el sistema de correo corporativo registra los inicios de sesión y que alguien revisa esos registros periódicamente.

## Impacto potencial

Un atacante con acceso sostenido al correo de un directivo puede extraer estrategias de negocio, detalles de negociaciones en curso, información financiera no pública, y comunicaciones con clientes o proveedores. Esa información puede usarse para extorsión, fraude, o ventaja competitiva desleal. A diferencia de un secuestro de información, el atacante no muestra su presencia —el daño puede haberse hecho mucho antes de que alguien lo note.
