---
title: "Habilidad maliciosa en el ecosistema de agentes de IA burló los controles de seguridad y llegó a 26,000 agentes activos"
date: "2026-06-23"
source: "The Hacker News"
link: "https://thehackernews.com/2026/06/fake-ai-agent-skill-passed-security.html"
categoria: "Terceros"
ambito: "Organizaciones"
nivelAtencion: "Alto"
status: "Activa"
resumen: "Una habilidad maliciosa publicada en el registro de paquetes del framework de agentes de IA OpenClaw evadió los escaneos de seguridad usando un enlace externo con contenido variable — inofensivo al momento del análisis, malicioso en producción. El paquete llegó a instalarse en más de 26,000 agentes activos. Una auditoría posterior encontró 341 habilidades maliciosas adicionales. Organizaciones que usan plataformas de agentes de IA con habilidades de terceros deben auditar los paquetes instalados."
expuestos: "Organizaciones que usan frameworks de agentes de IA con habilidades o plugins instalados desde registros de paquetes externos — especialmente OpenClaw/ClawHub."
verificacion: "Si los agentes de IA de la organización tienen habilidades o plugins instalados desde registros de terceros que no fueron auditados internamente, especialmente en los últimos 90 días."
impacto: "Un skill malicioso con acceso al entorno de un agente puede filtrar conversaciones, ejecutar acciones no autorizadas, acceder a sistemas conectados y exfiltrar datos a través del propio agente sin levantar alertas — porque el agente tiene autorización legítima para esas acciones."
grc_activo: "Agentes de IA de la organización y los sistemas, datos y credenciales a los que tienen acceso autorizado."
grc_vector: "Cadena de suministro en ecosistemas de agentes de IA — habilidades maliciosas publicadas en registros de paquetes que evaden escaneos usando contenido dinámico cargado en tiempo de ejecución."
grc_condicion: "Que la organización use un framework de agentes de IA con habilidades de terceros instaladas desde un registro de paquetes como ClawHub, sin auditoría del código fuente."
grc_explotacion: "activa"
grc_alcance: "Organizaciones con agentes de IA que usan habilidades o plugins de registros de paquetes externos — especialmente en plataformas basadas en OpenClaw."
grc_confianza: "alta"
publicacion: "published"
---

## Qué ocurrió

Investigadores identificaron una habilidad maliciosa en ClawHub — el registro de paquetes del framework de agentes de IA OpenClaw — que eludió los escaneos de seguridad usando un enlace externo con contenido variable: inofensivo al momento del análisis automatizado, malicioso en producción. El skill se instaló en más de 26,000 agentes antes de ser detectado. Una auditoría posterior del ecosistema identificó 341 habilidades maliciosas adicionales en el mismo registro, 335 de ellas parte de una sola campaña coordinada — aproximadamente uno de cada cinco paquetes en el ecosistema al momento del pico.

## Quién está expuesto

Organizaciones que usan frameworks de agentes de IA — en particular OpenClaw y plataformas similares con modelos de "habilidades de terceros" — con plugins instalados desde registros de paquetes externos. El modelo es estructuralmente similar al de las extensiones de navegador o los paquetes npm: conveniente para el desarrollador, difícil de auditar a escala.

## A considerar

Auditar los skills y plugins instalados en todos los agentes de IA de la organización — especialmente los instalados en los últimos 90 días. Verificar que cada habilidad provenga de un proveedor conocido y que el código fuente esté disponible para revisión. Los skills que dependen de URLs externas que no son estáticas o que cargan código en tiempo de ejecución representan el mayor riesgo: superan los escaneos estáticos.

## Impacto potencial

Un agente de IA comprometido con acceso a sistemas internos puede filtrar información de manera continua y sin alertas — porque el agente tiene autorización legítima para acceder a esos sistemas. La confianza que la organización depositó en el agente se convierte en la superficie de ataque. A diferencia del malware tradicional, no hay un proceso desconocido corriendo: es el agente autorizado haciendo lo que los atacantes le instruyen.
