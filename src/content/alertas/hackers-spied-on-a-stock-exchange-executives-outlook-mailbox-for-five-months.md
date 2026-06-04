---
title: "El correo de directivos sigue siendo una fuente silenciosa de espionaje empresarial"
date: "2026-06-04"
source: "The Hacker News"
link: "https://thehackernews.com/2026/06/hackers-spied-on-stock-exchange.html"
categoria: "Fuga de datos"
ambito: "Organizaciones"
nivelAtencion: "Alto"
status: "En monitoreo"
resumen: "Atacantes mantuvieron acceso al correo de un ejecutivo durante cinco meses sin ser detectados. El acceso permitió extraer información de forma continua sin generar alertas internas. Organizaciones que no monitorean las cuentas de directivos deberían verificar si existen accesos inusuales activos."
expuestos: "Directivos y ejecutivos con información estratégica en su correo corporativo, en organizaciones sin monitoreo de accesos anómalos."
verificacion: "Solicitar a TI que revise si hay sesiones activas desde ubicaciones inusuales en cuentas de correo de directivos."
impacto: "Acceso sostenido al correo de un directivo permite extraer estrategia, negociaciones, información financiera no pública y datos de clientes usables para extorsión o fraude."
grc_activo: "buzón de correo corporativo de directivos en Microsoft 365 / Outlook"
grc_vector: "acceso no autorizado sostenido a correo corporativo vía credenciales comprometidas"
grc_condicion: "cuenta de directivo sin monitoreo de accesos anómalos ni revisión de sesiones activas"
grc_explotacion: "activa"
grc_alcance: "organizaciones cuyos directivos usan correo corporativo sin monitoreo de sesiones"
grc_confianza: "media"
publicacion: "published"
---

## Qué ocurrió

Investigadores de Symantec documentaron un caso real: atacantes mantuvieron acceso continuo al correo de Outlook de un ejecutivo senior de una bolsa de valores global durante al menos cinco meses. No fue un ataque ruidoso. Extrajeron mensajes en pequeños lotes usando Dropbox y OneDrive —servicios de almacenamiento que la empresa ya usaba— para mezclar el tráfico con actividad normal y evitar alertas. El objetivo fue el espionaje silencioso, no un robo inmediato.

## Quién está expuesto

### Para organizaciones

Empresas cuyos directivos, socios o ejecutivos tienen información estratégica, financiera o comercial en su correo corporativo y que no cuentan con monitoreo activo de accesos anómalos en esas cuentas. No es necesario ser una bolsa de valores. Basta con tener información valiosa en el correo del director.

## Qué verificar

- Solicitar a TI que revise si hay sesiones activas desde ubicaciones inusuales en cuentas de correo de directivos.
- Si se usa Microsoft 365, verificar si hay aplicaciones de terceros con acceso delegado al correo o reglas de reenvío automático no autorizadas.
- Confirmar que el sistema de correo registra inicios de sesión y que alguien revisa esos registros periódicamente.

## Impacto potencial

Con acceso sostenido al correo de un directivo, un atacante puede extraer estrategia de negocio, detalles de negociaciones en curso, información financiera no pública, y comunicaciones con clientes o proveedores. Esa información puede usarse para extorsión, fraude, o ventaja competitiva desleal. A diferencia de un secuestro de información, el atacante no muestra su presencia — el daño puede haberse producido mucho antes de que alguien lo note.
