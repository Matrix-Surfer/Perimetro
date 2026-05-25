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

La campaña Megalodon comprometió más de 5,500 repositorios en GitHub. La técnica: inyectar commits automatizados falsos. Esos commits agregan o modifican archivos de GitHub Actions. GitHub Actions es el sistema que ejecuta tareas de compilación, pruebas y despliegue automáticamente cada vez que el equipo sube cambios al código.

Los archivos maliciosos se activan solos. Extraen en silencio todo lo que ese flujo de trabajo puede acceder. El token de autenticación del repositorio. Secretos de despliegue. Claves de servicios en la nube. Variables de entorno con contraseñas de bases de datos.

La escala es el dato preocupante. 5,500 repositorios comprometidos de forma coordinada implica automatización. Implica que alguien ya tenía las credenciales. Posiblemente robadas en una campaña anterior.

## Impacto potencial

El riesgo no es que el código quede expuesto. El riesgo es el control operativo. Las credenciales en GitHub no son datos. Son llaves maestras.

Con tokens de AWS, Google Cloud o Azure, el atacante puede eliminar bases de datos de producción. Puede copiar datos de clientes. Puede lanzar otros ataques desde la infraestructura de la empresa. Puede dejar todo fuera de línea. El impacto puede ser total.

Si hay datos de clientes en esa infraestructura, hay **obligaciones de notificación**. Si el producto depende de plataformas de pago o mensajería integradas, el compromiso de esas claves afecta a los usuarios finales. Eso es responsabilidad contractual.

## Recomendaciones

- **Instruir al equipo a revisar los archivos `.github/workflows/` en repositorios activos.** Un commit reciente que nadie del equipo reconoce es señal de alerta. Megalodon usa commits que parecen actividad automática.
- **Rotar todas las credenciales almacenadas en GitHub.** No esperar a confirmar el compromiso. Si hay repositorios públicos con pipelines activos, cambiar los secretos es la acción prioritaria ahora.
- **Habilitar el escaneo de secretos en GitHub.** Es una configuración en el panel del repositorio. No requiere desarrollo. Detecta credenciales expuestas automáticamente.
- **Pregunta de gobierno para el equipo de desarrollo:** ¿Tenemos un inventario de todas las claves almacenadas en nuestros repositorios? ¿Quién tiene acceso? ¿Cuándo se auditaron por última vez?
