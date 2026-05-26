---
title: "Hackers iraníes despliegan MiniFast y MiniJunk V2 mediante phishing y envenenamiento SEO"
date: "2026-05-26"
tipo: "Phishing"
status: "En monitoreo"
resumen: "La misma campaña iraní usa un vector diferente: resultados de búsqueda manipulados que posicionan páginas falsas como si fueran software legítimo. El empleado busca en Google una herramienta técnica, hace clic en el primer resultado y descarga el malware sin ninguna señal de alerta. Sin filtrado de DNS en la red corporativa, no hay protección ante esto."
source: "The Hacker News"
link: "https://thehackernews.com/2026/05/iranian-hackers-deploy-minifast-and.html"
publicacion: "published"
---

## Contexto

Nimbus Manticore (UNC1549) despliega dos nuevos implantes de acceso persistente — MiniFast y MiniJunk V2 — mediante phishing dirigido y envenenamiento SEO. En el vector de envenenamiento SEO, los atacantes posicionan páginas maliciosas en los primeros resultados de Google para búsquedas de software técnico específico del sector aeronáutico. El empleado que busca la herramienta correcta puede llegar al sitio incorrecto sin ninguna señal visual de alerta.

## Impacto potencial

Un implante de acceso persistente no grita. Observa.

Puede estar activo semanas antes de que alguien note algo. Durante ese tiempo, el atacante mapea la red, identifica activos críticos y recopila información.

Si el dispositivo comprometido tiene acceso a sistemas financieros o de clientes, la exposición es total. El costo de respuesta — análisis forense, notificación a clientes, revisión de contratos — suele superar con creces el costo del evento técnico.

## Recomendaciones

- Solicitar a TI que active filtrado de DNS con protección contra dominios maliciosos y sitios de phishing conocidos. Es una medida de bajo costo con alto impacto.
- ¿Tienen los empleados que buscan software técnico en internet alguna guía sobre fuentes autorizadas? ¿O queda a criterio individual de cada persona?
- Solicitar a TI una revisión de qué herramientas técnicas está descargando el equipo y desde qué fuentes.
