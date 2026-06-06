---
title: "La campaña de infección por repositorios comprometidos escala: el gusano activo llega al código fuente oficial de Microsoft en GitHub"
date: "2026-06-06"
source: "The Hacker News"
link: "https://thehackernews.com/2026/06/miasma-worm-hits-73-microsoft-github.html"
categoria: "Terceros"
ambito: "Organizaciones"
nivelAtencion: "Crítico"
status: "Activa"
resumen: "Un gusano activo comprometió 73 repositorios oficiales de Microsoft en GitHub — incluyendo Azure, Azure-Samples y MicrosoftDocs — antes de que GitHub desactivara el acceso. Los equipos de desarrollo que incorporaron código de esos repositorios entre el 1 y el 6 de junio deben auditar sus dependencias: el código contaminado puede incluir accesos ocultos o robo de credenciales en el software resultante."
expuestos: "Equipos de desarrollo y organizaciones que consumen repositorios de Azure, Azure-Samples, Microsoft o MicrosoftDocs en GitHub."
verificacion: "Revisar si algún proyecto incorporó dependencias de los repositorios afectados durante el período de compromiso y auditar esas versiones antes de desplegarlas."
impacto: "Software construido sobre código contaminado puede contener accesos ocultos o robar credenciales de los propios desarrolladores al ejecutarse."
grc_activo: "Repositorios oficiales de Microsoft en GitHub (Azure, Azure-Samples, Microsoft, MicrosoftDocs)"
grc_vector: "Gusano de auto-replicación que inyecta código malicioso en repositorios de GitHub y se propaga a los proyectos que los consumen"
grc_condicion: "El equipo de desarrollo descargó o clonó los repositorios afectados durante el período de compromiso"
grc_explotacion: "activa"
grc_alcance: "Organizaciones que construyen software con dependencias en repositorios de Microsoft en GitHub"
grc_confianza: "alta"
publicacion: "published"
---

## Qué ocurrió

La campaña Miasma — un gusano que se auto-replica dentro de GitHub — llegó a los repositorios oficiales de Microsoft. En total, 73 repositorios de cuatro organizaciones de Microsoft en GitHub quedaron comprometidos: Azure, Azure-Samples, Microsoft y MicrosoftDocs. GitHub desactivó el acceso a esos repositorios al detectar la infección. Es el ataque de mayor escala de la campaña hasta ahora. La semana pasada, el mismo gusano comprometió más de 50 paquetes del ecosistema de programación npm usados por equipos de desarrollo en todo el mundo.

## Quién está expuesto

### Para organizaciones

Los equipos de desarrollo que tienen proyectos con dependencias en repositorios de Azure SDK, Azure-Samples o MicrosoftDocs en GitHub. Si algún desarrollador descargó, clonó o actualizó esos repositorios entre el 1 y el 6 de junio, el código fuente de sus proyectos podría estar contaminado con instrucciones no autorizadas.

## A considerar

Revisar el historial de dependencias de los proyectos activos: si algún commit reciente incorporó código de los repositorios afectados, esa versión debe auditarse antes de desplegarse en producción o entregarse a clientes. El indicador a buscar es cualquier modificación inesperada en archivos de configuración, scripts de compilación o dependencias que no fue introducida por el equipo.

## Impacto potencial

El código comprometido puede ejecutar acciones no autorizadas cuando se despliega: robo de credenciales de los desarrolladores, introducción de accesos ocultos en el software final, o infección de nuevos repositorios desde el ambiente de desarrollo. Una organización que entregue software basado en código contaminado se convierte, sin saberlo, en vector del mismo ataque hacia sus propios clientes.
