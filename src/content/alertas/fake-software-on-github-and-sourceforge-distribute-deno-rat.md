---
title: "Instaladores falsos de ChatGPT, Claude y AutoTune en GitHub y SourceForge distribuyen troyano de acceso remoto"
date: "2026-05-26"
tipo: "Otro"
status: "En monitoreo"
resumen: "Repositorios públicos distribuyen versiones falsas de herramientas de IA y software creativo con un troyano embebido. Un empleado que descarga una de estas versiones le entrega al atacante control remoto completo de su equipo. El vector no requiere phishing: basta con buscar la herramienta en Google y descargar el primer resultado convincente."
source: "Malwarebytes Labs"
link: "https://www.malwarebytes.com/blog/threat-intel/2026/05/fake-software-on-github-and-sourceforge-distribute-deno-rat"
publicacion: "published"
---

## Contexto

Se detectaron instaladores y plugins falsos para ChatGPT, Claude, AutoTune y otro software popular en GitHub y SourceForge — plataformas de repositorios donde cualquiera puede publicar archivos. Los archivos instalan el RAT Deno, un troyano de acceso remoto que da al atacante control total del dispositivo. La técnica funciona porque los usuarios confían en estas plataformas y porque la demanda de herramientas de IA lleva a mucha gente a buscar descargas fuera de los canales oficiales.

## Impacto potencial

Control remoto total del dispositivo significa acceso a todo lo que ese usuario puede hacer: correo, banca en línea, VPN, archivos compartidos.

El atacante puede esperar semanas antes de actuar. Mientras tanto, observa.

Si el dispositivo tiene acceso a cuentas de pago o sistemas corporativos, la exposición financiera es directa. El costo de respuesta — análisis forense, contención, reinstalación — suele superar con creces el daño inicial visible.

## Recomendaciones

- Las herramientas de IA solo se descargan desde los sitios oficiales del fabricante: openai.com, claude.ai, anthropic.com. Un repositorio de GitHub, por conocido que parezca, no es la fuente oficial.
- Si descargaste alguna de estas herramientas desde GitHub, SourceForge o cualquier sitio que no sea el del fabricante, avisa a TI antes de seguir usándola.
- Para la empresa: ¿existe una lista de herramientas aprobadas para instalar en equipos corporativos? ¿Quién la administra? Si no existe, ese es el primer paso.
