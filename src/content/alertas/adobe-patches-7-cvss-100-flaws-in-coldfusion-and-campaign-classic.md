---
title: "Siete fallas de máxima criticidad en servidor web y plataforma de marketing de Adobe — una ya bajo ataque activo"
date: "2026-07-01"
source: "The Hacker News"
link: "https://thehackernews.com/2026/07/adobe-patches-7-cvss-100-flaws-in.html"
categoria: "Vulnerabilidad"
ambito: "Organizaciones"
nivelAtencion: "Alto"
status: "Activa"
resumen: "Adobe publicó parches para siete fallas con puntuación máxima de criticidad en ColdFusion (servidor web usado en portales corporativos y gubernamentales) y Adobe Campaign Classic (plataforma de marketing empresarial). Una de las fallas ya fue explotada activamente horas después de la publicación del parche. La actualización está disponible y debe aplicarse de inmediato."
expuestos: "Organizaciones que operan ColdFusion 2023 o 2025 sin actualizar, y las que usan Adobe Campaign Classic v7 on-premise sin el parche de julio 2026."
verificacion: "Verificar si se usa ColdFusion o Adobe Campaign Classic en servidores propios y confirmar que están en versiones parcheadas (ColdFusion 2023 Update 21 / 2025 Update 10; Campaign Classic 7.4.3 build 9397)."
impacto: "Ejecución de código malicioso en el servidor, acceso a archivos del sistema y potencial toma de control completa del servidor afectado."
grc_activo: "Adobe ColdFusion (servidor de aplicaciones web) y Adobe Campaign Classic v7 on-premise (plataforma de automatización de marketing)"
grc_vector: "Carga de archivos sin restricciones, validación incorrecta de datos e introducción de rutas de archivo (path traversal) — sin autenticación en algunas variantes"
grc_condicion: "Tener ColdFusion 2023/2025 o Campaign Classic v7 on-premise sin el parche de julio 2026 accesible desde internet o red interna"
grc_explotacion: "activa"
grc_alcance: "Portales web corporativos y gubernamentales en ColdFusion; departamentos de marketing con Campaign Classic on-premise"
grc_confianza: "alta"
publicacion: "published"
---

## Qué ocurrió

Adobe publicó el 1 de julio de 2026 actualizaciones de emergencia para nueve vulnerabilidades en dos productos: ColdFusion — servidor usado para construir portales y aplicaciones web, común en organizaciones gubernamentales y empresas con infraestructura tecnológica antigua — y Adobe Campaign Classic en su versión instalada localmente, una plataforma de automatización de marketing. Siete de las nueve fallas tienen puntuación máxima de criticidad (10.0 sobre 10). Todas permiten que un atacante tome control del servidor. Una de ellas, relacionada con rutas de acceso a archivos del sistema, fue explotada activamente horas después de que Adobe publicó el parche.

## Quién está expuesto

Organizaciones que operan ColdFusion en sus propios servidores en versiones 2023 o 2025 sin la actualización de julio de 2026. También quienes usan Adobe Campaign Classic versión 7 instalado localmente. ColdFusion es especialmente común en portales de gobierno, instituciones educativas y empresas con infraestructura tecnológica de más de diez años.

## A considerar

La velocidad de explotación — horas después de la publicación — sigue el mismo patrón de SharePoint y Oracle EBS esta semana. Los atacantes están analizando los parches de Adobe de forma sistemática para construir herramientas de ataque antes de que las organizaciones actualicen. Esto convierte la velocidad de aplicación del parche en el factor determinante.

Si ColdFusion está expuesto a internet sin el parche, la prioridad es aplicar la actualización antes de hacer cualquier otra cosa. Si no es posible aplicarla de inmediato, restringir el acceso al servidor desde internet mientras se planifica la actualización.

## Impacto potencial

Las fallas permiten que un atacante ejecute código en el servidor con los permisos del proceso de ColdFusion o Campaign Classic. En servidores ColdFusion que alojan formularios, bases de datos de clientes o procesos de negocio, el acceso equivale a control sobre esa información. En Campaign Classic, el acceso podría exponer listas de contactos, configuraciones de campañas y credenciales de integración con otros sistemas.
