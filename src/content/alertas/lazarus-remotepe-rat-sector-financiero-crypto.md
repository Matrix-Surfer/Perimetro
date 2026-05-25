---
title: "Grupo Lazarus despliega nuevo malware sin archivos contra empresas financieras y de criptomonedas"
date: "2026-05-25"
tipo: "Otro"
status: "Activa"
resumen: "El grupo de ciberespionaje vinculado a Corea del Norte opera una nueva cadena de ataque multietapa que instala un troyano de acceso remoto directamente en memoria del sistema, sin escribir archivos en disco, para evadir herramientas de detección tradicionales. Objetivo principal: sector financiero y empresas que operan con criptomonedas."
source: "The Hacker News"
link: "https://thehackernews.com/2026/05/lazarus-deploys-remotepe-memory-only.html"
publicacion: "published"
---

## Contexto

Investigadores de Fox-IT documentaron una nueva herramienta del grupo Lazarus —un actor de amenazas persistentes avanzadas (APT, grupos con recursos estatales y objetivos de largo plazo) vinculado al régimen de Corea del Norte— llamada RemotePE. Se trata de un RAT de solo memoria, es decir, un troyano de acceso remoto —software malicioso que le da al atacante control total sobre el sistema infectado— que opera exclusivamente en la memoria RAM del equipo sin escribir archivos en el disco duro.

La cadena de ataque tiene tres etapas:

1. **DPAPILoader:** un cargador inicial que usa DPAPI —una interfaz legítima del sistema operativo Windows para cifrado de datos— para descifrar y cargar el siguiente componente. Al usar funciones nativas del sistema, evita disparar alertas en soluciones de seguridad que detectan comportamientos anómalos.

2. **RemotePELoader:** carga el troyano final directamente en memoria sin tocar el disco. Los antivirus tradicionales basados en análisis de archivos no detectan la amenaza porque no hay ningún archivo malicioso que analizar.

3. **RemotePE:** el troyano activo. Establece comunicación con los servidores del atacante y ejecuta comandos remotos en el sistema comprometido.

## Impacto potencial

Lazarus tiene un historial documentado de ataques contra instituciones financieras —incluyendo el robo de 81 millones de dólares al Banco de Bangladesh en 2016— y en los últimos años ha intensificado su actividad contra empresas del sector cripto. El uso de RemotePE indica una evolución táctica orientada a evadir las defensas modernas de organizaciones con mayor madurez en seguridad.

Para empresas mexicanas del sector fintech, casas de cambio de criptomonedas, fintechs de crédito o cualquier organización que procese transacciones financieras digitales, esta campaña representa un riesgo real: Lazarus no discrimina geografía cuando el objetivo tiene valor económico.

Una infección con RemotePE le entrega al atacante acceso completo y silencioso al sistema comprometido, desde donde puede moverse lateralmente —saltar hacia otros equipos en la misma red—, robar credenciales bancarias y de plataformas financieras, o preparar un ataque de mayor escala.

## Recomendaciones

- **Priorizar soluciones de detección basadas en comportamiento (EDR):** las herramientas de seguridad que analizan archivos en disco no detectan malware de solo memoria. Un sistema de Endpoint Detection and Response —que monitorea el comportamiento de procesos en tiempo real— es necesario para este tipo de amenaza.
- **Monitorear el uso de DPAPI en procesos no reconocidos:** accesos inusuales a la API de protección de datos de Windows por parte de procesos sin firma o desconocidos son indicadores tempranos de compromiso.
- **Aplicar el principio de mínimo privilegio:** limitar los permisos de cada cuenta de usuario y servicio al mínimo necesario. Si un equipo comprometido tiene permisos acotados, el daño que puede causar el atacante desde ese punto se reduce significativamente.
- **Revisar vectores de acceso inicial:** Lazarus utiliza principalmente spear phishing —correos de phishing dirigidos y personalizados— y ofertas de empleo falsas en LinkedIn para el compromiso inicial. Capacitar al equipo para identificar contactos no solicitados con archivos adjuntos o enlaces es la primera línea de defensa.
