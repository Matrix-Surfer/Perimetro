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

El riesgo no es que el código quede expuesto — es que **el atacante obtiene control operativo sobre la infraestructura del negocio**. Las credenciales almacenadas en los pipelines de GitHub no son datos: son llaves maestras.

Con acceso a tokens de servicios en la nube como AWS, Google Cloud o Azure, un atacante puede eliminar bases de datos de producción, copiar y exfiltrar datos de clientes, crear recursos para lanzar otros ataques desde la infraestructura de la empresa, o simplemente dejar todo fuera de línea. El impacto sobre la continuidad del negocio puede ser total.

Si la infraestructura comprometida almacena datos de clientes, la empresa enfrenta además **obligaciones de notificación por brecha de datos**. Y si el producto de la empresa depende de terceros como plataformas de pago o mensajería integradas, el compromiso de esas claves puede afectar a los usuarios finales, generando responsabilidad contractual con los proveedores afectados.

## Recomendaciones

- **Instruir al equipo de desarrollo a revisar los repositorios de GitHub con automatización activa:** pedir que auditen los archivos de workflows (`.github/workflows/`) en busca de cambios recientes que ningún miembro del equipo reconozca. Un commit automatizado que nadie hizo es señal de alerta.
- **Rotar todas las credenciales almacenadas en GitHub como medida preventiva:** cambiar los secretos de repositorios activos es la acción prioritaria. No esperar a confirmar si hubo o no compromiso.
- **Pregunta de gobierno para revisar con TI o el equipo de desarrollo:** ¿Tenemos un inventario actualizado de todas las claves de acceso a la nube y servicios externos que están almacenadas en nuestros repositorios? ¿Quién tiene acceso a esas credenciales y cuándo se auditó por última vez?
- **Solicitar que se habilite el escaneo de secretos en GitHub:** GitHub tiene una función de detección automática de credenciales expuestas en repositorios. Activarla no requiere desarrollo — es una configuración en el panel del repositorio.
