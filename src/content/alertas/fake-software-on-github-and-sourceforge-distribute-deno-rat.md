---
title: "Instaladores falsos de ChatGPT, Claude y AutoTune en GitHub y SourceForge distribuyen troyano de acceso remoto"
date: "2026-05-26"
tipo: "Otro"
status: "En monitoreo"
resumen: "Repositorios públicos como GitHub y SourceForge están siendo usados para distribuir versiones falsas de herramientas populares de IA y software creativo. Si un empleado descarga estas versiones fuera de los canales oficiales, el atacante obtiene control remoto completo del equipo. El vector no requiere phishing: basta con que el usuario busque la herramienta en Google y descargue el primer resultado convincente."
source: "Malwarebytes Labs"
link: "https://www.malwarebytes.com/blog/threat-intel/2026/05/fake-software-on-github-and-sourceforge-distribute-deno-rat"
publicacion: "published"
---

## Contexto

Se detectaron instaladores y plugins falsos para ChatGPT, Claude, AutoTune y otro software popular en GitHub y SourceForge. Los archivos instalan el RAT Deno (troyano de acceso remoto), que otorga al atacante control total sobre el dispositivo infectado. La técnica aprovecha la confianza en estas plataformas de desarrollo y la búsqueda creciente de herramientas de IA por parte de usuarios sin formación técnica especializada.

## Impacto potencial

Un dispositivo corporativo comprometido con un RAT expone credenciales guardadas, archivos locales, acceso a VPN y la red interna. Dado que muchos empleados buscan herramientas de IA por su cuenta — fuera de los canales aprobados por TI — el riesgo es alto en organizaciones sin políticas de software permitido. El daño puede escalar desde el dispositivo individual hasta comprometer sistemas críticos si el empleado tiene acceso privilegiado.

## Recomendaciones

- Comunicar al equipo que las herramientas de IA solo deben descargarse desde los sitios oficiales del fabricante: openai.com, claude.ai, anthropic.com — nunca desde buscadores de repositorios.
- Implementar una política de software permitido (allowlist) en los endpoints administrados.
- Activar alertas en el EDR para instalación de ejecutables nuevos no firmados digitalmente.
