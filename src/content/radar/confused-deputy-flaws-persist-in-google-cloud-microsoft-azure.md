---
title: "Un servicio de la nube puede terminar actuando con más permisos de los que su usuario real tiene"
pubDate: 2026-07-27
source: "Dark Reading"
link: "https://www.darkreading.com/cloud-security/confused-deputy-flaws-google-cloud-microsoft-azure"
category: "Seguridad"
señal: "Una categoría de fallas de diseño, presente tanto en Google Cloud como en Microsoft Azure, permite que un servicio automatizado dentro de la nube termine actuando con permisos administrativos que nadie le otorgó directamente."
supuesto: "Que los controles de acceso de los grandes proveedores de nube son, por construcción, confiables y limitan exactamente lo que cada servicio puede hacer."
observación: "Qué permisos heredan, de forma automática y sin autorización explícita, los servicios y automatizaciones que la organización activa dentro de su entorno de nube."
context: "Que un proveedor de nube sea grande y confiable no significa que cada pieza de su plataforma respete, por diseño, los límites de permisos que un cliente asume. Esta categoría de fallas permite que un servicio termine actuando con más autoridad de la que su usuario real tiene, sin que haga falta un ataque sofisticado para provocarlo. La pregunta para cualquier organización en la nube es si sabe qué automatizaciones propias podrían heredar permisos que nadie les dio a propósito."
grc_cambio: "La confianza depositada en los proveedores de nube deja de ser suficiente garantía; hace falta revisar qué permisos heredan, de facto, los servicios automatizados que cada organización activa dentro de esa nube."
grc_paradigma: "Que los controles de acceso de un proveedor de nube grande y establecido son, por sí solos, prueba de que ningún servicio puede exceder sus permisos reales."
publicacion: "published"
---

## La señal

Una categoría de fallas de diseño conocida como "confused deputy" (un servicio que actúa en nombre de otro sin verificar si de verdad tiene permiso para hacerlo) persiste tanto en Google Cloud como en Microsoft Azure. Permite que un atacante consiga que un servicio automatizado de la nube ejecute acciones con permisos administrativos, sin que el usuario que activó ese servicio los tuviera de forma directa.

## El supuesto que se rompe

La suposición de que la infraestructura de un proveedor de nube grande y establecido garantiza, por sí sola, que cada servicio respeta exactamente los límites de permisos que la organización configuró. La confianza en el proveedor no sustituye la necesidad de revisar cómo interactúan entre sí los servicios que se activan dentro de esa nube.

## Qué observar

Qué automatizaciones, integraciones o servicios propios de la organización operan dentro de su entorno de nube, y si alguno de ellos podría estar heredando permisos administrativos sin que nadie se los haya otorgado de forma explícita. La pregunta no es si el proveedor es confiable, sino si la propia configuración interna confía en algo que no debería.
