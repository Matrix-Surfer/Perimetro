---
title: "Instaladores falsos de ChatGPT, Claude y AutoTune en GitHub y SourceForge distribuyen troyano de acceso remoto"
date: "2026-05-26"
tipo: "Otro"
status: "En monitoreo"
resumen: "Repositorios públicos distribuyen versiones falsas de herramientas de IA y software creativo con un troyano embebido. Un empleado que descarga una de estas versiones entrega control remoto completo de su equipo. Sin política de software permitido, la empresa no puede detectar ni contener esta infección antes de que cause daño real."
source: "Malwarebytes Labs"
link: "https://www.malwarebytes.com/blog/threat-intel/2026/05/fake-software-on-github-and-sourceforge-distribute-deno-rat"
publicacion: "published"
---

## Contexto

Se detectaron instaladores falsos para ChatGPT, Claude, AutoTune y otro software popular distribuidos en GitHub y SourceForge — plataformas de repositorios de código donde cualquiera puede publicar software. Los archivos instalan el RAT Deno, un troyano de acceso remoto que da al atacante control total del dispositivo. La técnica funciona porque los usuarios confían en estas plataformas y porque la demanda de herramientas de IA hace que muchos busquen descargas fuera de los canales oficiales.

## Impacto potencial

Control remoto total del dispositivo significa acceso a todo lo que ese empleado puede hacer. Correo, banca en línea, VPN, archivos compartidos. El atacante puede esperar semanas antes de actuar.

Si el empleado tiene acceso a cuentas de pago o transferencias, la exposición financiera es directa y cuantificable.

Sin una política de software permitido, la empresa tampoco puede demostrar diligencia debida ante una aseguradora o auditor si ocurre un incidente. La ausencia de esa política convierte el descuido de un empleado en una responsabilidad institucional.

## Recomendaciones

- Comunicar al equipo con claridad: las herramientas de IA solo se descargan desde los sitios oficiales del fabricante — openai.com, claude.ai, anthropic.com. Un repositorio de GitHub, por conocido que parezca, no es la fuente oficial.
- ¿Existe hoy una lista de herramientas aprobadas para instalar en equipos corporativos? ¿Quién la administra y cómo se actualiza?
- Solicitar a TI un proceso para aprobar nuevas herramientas antes de su instalación, especialmente herramientas de IA que el equipo solicita por su cuenta.
