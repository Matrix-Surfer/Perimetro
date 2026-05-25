---
title: "Megalodon: más de 5,500 repositorios de GitHub infectados con workflows maliciosos de CI/CD"
date: "2026-05-25"
tipo: "Otro"
status: "Activa"
resumen: "Una campaña activa inyectó commits falsos en más de 5,500 repositorios públicos de GitHub para agregar flujos de trabajo de CI/CD maliciosos que roban credenciales, tokens y secretos de despliegue cuando se ejecutan."
source: "SecurityWeek"
link: "https://www.securityweek.com/over-5500-github-repositories-infected-in-megalodon-supply-chain-attack/"
publicacion: "published"
---

## Contexto

La campaña Megalodon comprometió más de 5,500 repositorios en GitHub mediante una técnica específica: inyectar commits automatizados falsos que agregan o modifican archivos de flujos de trabajo de GitHub Actions —el sistema de automatización de GitHub que ejecuta tareas de compilación, pruebas y despliegue cada vez que hay cambios en el código.

Los archivos maliciosos inyectados contienen instrucciones que, al activarse, exfiltran en silencio todo lo que ese flujo de trabajo tiene acceso: el token de autenticación del repositorio (GITHUB_TOKEN), secretos de despliegue almacenados en el repositorio, claves de API de servicios en la nube y cualquier variable de entorno configurada para los pipelines de integración continua.

La diferencia con ataques anteriores de este tipo es la escala: 5,500 repositorios afectados de forma coordinada sugiere automatización y un vector de compromiso inicial que permitió escribir en esos repositorios, posiblemente credenciales de GitHub robadas en campañas previas.

## Impacto potencial

El riesgo principal no es que el código fuente quede expuesto, sino que **los secretos de producción queden en manos del atacante**. En un flujo de trabajo típico de una empresa con despliegues automatizados, los secretos almacenados en GitHub pueden incluir:

- Credenciales de servidores de producción (SSH, FTP, acceso a paneles)
- Tokens de acceso a servicios en la nube (AWS, GCP, Azure) que permiten operar infraestructura
- Claves de bases de datos del entorno de producción
- Tokens de plataformas de terceros integradas en el producto (Stripe, Twilio, SendGrid, etc.)

Para equipos que usan GitHub en proyectos activos con pipelines de despliegue automatizado, un workflow malicioso puede comprometer toda la infraestructura sin dejar rastros obvios en el código.

## Recomendaciones

- **Auditar los archivos `.github/workflows/`** en todos los repositorios activos. Revisar cualquier archivo `.yml` o `.yaml` añadido o modificado recientemente que no sea reconocible. Los commits de Megalodon aparecen como actividad automatizada y pueden pasar desapercibidos en el historial.
- **Rotar secretos de repositorios por precaución:** si hay repositorios públicos con GitHub Actions activos, cambiar todos los secretos almacenados en GitHub (Settings → Secrets and variables) es la acción prioritaria.
- **Revisar el historial de commits en busca de actividad no reconocida:** `git log --all --oneline` puede revelar commits que no correspondan a ningún miembro del equipo.
- **Limitar permisos del GITHUB_TOKEN:** configurar los workflows para que el token tenga solo los permisos mínimos necesarios (`permissions: read-all` como default en el archivo de workflow).
- **Habilitar alertas de seguridad en GitHub:** activar Dependabot y el escaneo de secretos (Secret scanning) en los repositorios del equipo para detectar exposición de credenciales.
