---
title: "CISA confirma compromiso en cadena de suministro de software: extensión de VS Code y flujos de GitHub afectados"
date: "2026-05-28"
categoria: "Terceros"
nivelAtencion: "Alto"
status: "Activa"
parche: "Sí"
explotacion: "Activa"
resumen: "CISA confirmó dos campañas activas de compromiso en cadena de suministro: una extensión maliciosa de VS Code comprometió repositorios internos de GitHub, y la campaña 'Megalodon' inyectó código malicioso en flujos automatizados de cientos de proyectos."
source: "CISA Alerts"
link: "https://www.cisa.gov/news-events/alerts/2026/05/28/supply-chain-compromises-impact-nx-console-and-github-repositories"
publicacion: "published"
---

## Contexto

La agencia de ciberseguridad de Estados Unidos CISA confirmó dos incidentes activos de compromiso en cadena de suministro de software. El primero: la versión 18.95.0 de Nx Console — una extensión popular para VS Code (Visual Studio Code), la herramienta de escritura de código que usan millones de desarrolladores — fue comprometida y distribuyó código malicioso de forma automática a todos los equipos que la tenían instalada con actualizaciones automáticas activas. Esto resultó en acceso no autorizado a repositorios internos de GitHub, la plataforma donde las organizaciones almacenan su código fuente. El segundo: la campaña "Megalodon" inyectó instrucciones maliciosas en flujos de trabajo automatizados de cientos de proyectos en GitHub, cosechando credenciales y tokens de acceso.

## Por qué importa

- Si tu equipo de desarrollo usa VS Code con Nx Console, puede haber recibido el código malicioso sin ninguna acción manual — la actualización llegó automática.
- Las credenciales robadas permiten acceso a infraestructura en la nube, repositorios de código y sistemas de despliegue que construyen tu software.
- El daño puede ser invisible: los tokens robados siguen funcionando hasta que se revocan activamente.

## Impacto potencial

### Para personas

- Desarrolladores que usaron Nx Console antes del 28 de mayo pueden tener credenciales de trabajo comprometidas.
- Señal de alerta: actividad inusual en cuentas de GitHub o servicios en la nube, alertas de acceso desde ubicaciones desconocidas.

### Para organizaciones

- Equipos con desarrolladores que usan GitHub y pipelines automatizados (flujos de integración y despliegue de código) deben asumir posible compromiso hasta descartarlo.
- Las credenciales robadas pueden incluir accesos a Amazon Web Services, Google Cloud, Azure y repositorios de código fuente propietario.
- Un atacante con acceso al pipeline de despliegue puede modificar el código que llega a producción — afectando directamente el software que usan tus clientes.
- El daño puede extenderse a proveedores y clientes si el código comprometido se distribuye a través de tu cadena de entrega.

## Perspectiva Perímetro

El patrón aquí es "proveedores como vector": los atacantes no atacan a la organización directamente — atacan las herramientas en las que confía. Una extensión de editor de código, actualizada automáticamente, se convierte en puerta de entrada silenciosa. Las organizaciones que no auditan las herramientas de sus desarrolladores ni revocan credenciales después de un incidente de proveedor quedan expuestas por confianza delegada, no por su propia negligencia directa.

## Perspectiva GRC

- **Gobierno:** ¿Quién en la organización es responsable de revisar las herramientas usadas por el equipo técnico?
- **Riesgo:** ¿Existe un inventario de extensiones, plugins y dependencias de terceros en el entorno de desarrollo?
- **Terceros:** CISA recomienda contactar a los proveedores afectados (GitHub, Nx) y verificar el estado de integraciones activas.
- **Continuidad:** Rotar todas las credenciales expuestas en los pipelines es prioritario — no hacerlo deja el acceso abierto.

## Recomendaciones

### Para personas

- Si eres desarrollador y usas VS Code con Nx Console, revisa si tenías la versión 18.95.0 instalada.
- Revoca y rota todas tus credenciales de GitHub, servicios en la nube y tokens de API como medida inmediata.
- Activa alertas de acceso en tus cuentas de GitHub y plataformas en la nube.

### Para organizaciones

**Gestión**
- Confirmar con el equipo de desarrollo si algún equipo tenía Nx Console instalado con actualizaciones automáticas.
- Definir un responsable para coordinar la revisión y rotación de credenciales en las próximas 48 horas.
- Revisar actividad en GitHub y plataformas en la nube desde el 18 de mayo en adelante.

**Técnicas**
- Revocar y rotar todas las credenciales accesibles desde los pipelines automatizados: tokens de API, llaves de acceso, credenciales de nube y accesos a GitHub.
- Revertir cambios recientes en flujos de trabajo automatizados (archivos `.github/workflows/`) hechos por cuentas no reconocidas.
- Si no tienes equipo de TI propio: contacta hoy a tu proveedor de desarrollo y solicita un reporte del estado de herramientas y credenciales a rotar.

## Pregunta diagnóstica

¿Sabe qué herramientas usan sus desarrolladores y quién es responsable de verificar que no estén comprometidas?
