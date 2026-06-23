---
title: "GitHub actualizó su herramienta de integración continua para bloquear ataques que ejecutan código malicioso con permisos elevados desde pull requests externos"
date: "2026-06-23"
source: "The Hacker News"
link: "https://thehackernews.com/2026/06/github-updates-actionscheckout-to-block.html"
categoria: "Vulnerabilidad"
ambito: "Organizaciones"
nivelAtencion: "Medio"
status: "En monitoreo"
resumen: "GitHub publicó la versión 7 de actions/checkout que bloquea los ataques 'pwn request' — una técnica donde un colaborador externo envía código malicioso que el pipeline de integración continua ejecuta con acceso a los secretos del repositorio. Desde el 16 de julio, la protección se aplica automáticamente a la mayoría de flujos de trabajo. Los pipelines fijados a versiones específicas deben actualizarse manualmente antes de esa fecha."
expuestos: "Equipos de desarrollo con repositorios en GitHub que usan GitHub Actions con flujos de trabajo que procesan pull requests de colaboradores externos."
verificacion: "Si los pipelines de CI/CD usan actions/checkout fijado a una versión específica (SHA o número de versión exacto) que no recibirá la actualización automática del 16 de julio."
impacto: "Un colaborador externo — o alguien que comprometió una cuenta — puede enviar código que el pipeline ejecuta con acceso a todos los secretos del repositorio: claves de despliegue, credenciales de bases de datos y tokens de acceso a servicios externos."
grc_activo: "Repositorios de GitHub con pipelines de CI/CD que procesan contribuciones externas, y los secretos almacenados en esos repositorios."
grc_vector: "Pull request malicioso que activa un workflow con permisos elevados, permitiendo al atacante ejecutar código con acceso a los secretos del repositorio."
grc_condicion: "Flujo de trabajo de GitHub Actions usando pull_request_target o workflow_run con actions/checkout en versión anterior a v7, que verifique código de forks externos."
grc_explotacion: "poc_publica"
grc_alcance: "Repositorios en GitHub con workflows que usan pull_request_target y aceptan contribuciones de colaboradores externos o forks."
grc_confianza: "alta"
publicacion: "published"
---

## Qué ocurrió

GitHub publicó actions/checkout v7 el 18 de junio de 2026, incorporando protecciones contra los ataques "pwn request" — una técnica donde un atacante envía código malicioso a través de un pull request que el pipeline de integración continua procesa con permisos elevados, dando acceso a secretos del repositorio. A partir del 16 de julio, GitHub aplicará la protección retroactivamente a todas las versiones principales con etiquetas flotantes (v4, v3, etc.). Los flujos de trabajo fijados a versiones específicas no recibirán la actualización automática.

## Quién está expuesto

Equipos de desarrollo con repositorios en GitHub que usan GitHub Actions — específicamente flujos de trabajo con pull_request_target o workflow_run que procesan código de forks externos. Es un patrón común en proyectos que aceptan contribuciones externas o tienen flujos de revisión automatizada.

## A considerar

Verificar si los pipelines usan actions/checkout con versiones fijadas (SHA o número exacto como @v4.1.2) y actualizar manualmente a v7. Los flujos que usan etiquetas flotantes como @v4 recibirán la protección automáticamente el 16 de julio sin intervención. Priorizar flujos que tienen acceso a secretos de producción.

## Impacto potencial

Un pull request de un colaborador externo — o de alguien que comprometió una cuenta con acceso al repositorio — puede ejecutar código en el pipeline con acceso a todos los secretos configurados: claves de despliegue a producción, credenciales de bases de datos, tokens de acceso a servicios externos. La confianza que el equipo pone en el pipeline de CI/CD se convierte en la superficie de ataque.
