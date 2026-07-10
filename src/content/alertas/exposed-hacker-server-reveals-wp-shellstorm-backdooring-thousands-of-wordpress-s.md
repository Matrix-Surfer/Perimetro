---
title: "Servidor expuesto de la operación WP-SHELLSTORM revela miles de sitios WordPress con acceso oculto instalado"
date: "2026-07-10"
source: "The Hacker News"
link: "https://thehackernews.com/2026/07/exposed-hacker-server-reveals-wp.html"
categoria: "Malware"
ambito: "Mixto"
nivelAtencion: "Alto"
status: "Activa"
resumen: "Un grupo de delincuentes dejó expuesto su propio servidor de control, revelando una operación que instaló accesos ocultos en más de 17,000 sitios WordPress explotando una falla en el plugin de caché Breeze. Quien tenga ese plugin instalado debe actualizarlo y revisar si hay accesos no autorizados en su sitio."
expuestos: "Sitios WordPress con el plugin de caché Breeze instalado, tanto personas como negocios administradores."
verificacion: "Si el sitio usa el plugin Breeze y en qué versión; si hay archivos o accesos no reconocidos en el panel de administración."
impacto: "El atacante puede usar el sitio para robar datos, redirigir tráfico o revenderlo a otros delincuentes."
grc_activo: "Sitios WordPress con el plugin de caché Breeze instalado (y otros con alguna de 27 fallas conocidas explotadas por el mismo grupo)"
grc_vector: "Explotación de una falla en el plugin de caché Breeze (CVE-2026-3844) para instalar un acceso oculto (webshell) revendible"
grc_condicion: "Tener instalado el plugin Breeze en una versión vulnerable, sin parchear"
grc_explotacion: "activa"
grc_alcance: "Más de 45,000 sitios atacados con esta falla específica; más de 17,000 con acceso oculto confirmado. En la lista completa de objetivos del grupo (1.4 millones de dominios), al menos 25,000 sitios tienen evidencia validada de compromiso"
grc_confianza: "alta"
publicacion: "published"
---

## Qué ocurrió

Un grupo de delincuentes dejó expuesto, sin ninguna protección, el servidor que usaba para controlar su operación. Investigadores de SOCRadar lo encontraron el 11 de junio y accedieron a las herramientas de ataque, los registros de actividad y las listas de sitios objetivo: más de 1.4 millones de dominios, entre ellos sitios en WordPress y Joomla. La operación, conocida ahora como WP-SHELLSTORM, se dedica a instalar accesos ocultos en sitios web y revender ese acceso a otros delincuentes. La falla más aprovechada fue una vulnerabilidad en el plugin de caché Breeze (CVE-2026-3844): la usaron contra más de 45,000 sitios y lograron instalar el acceso oculto en más de 17,000 de ellos.

## Quién está expuesto

### Para personas

Quienes administran un blog o sitio personal en WordPress con el plugin Breeze instalado.

### Para organizaciones

Negocios y sitios corporativos que usan WordPress, especialmente los que tienen el plugin de caché Breeze sin actualizar. La lista de objetivos del grupo incluye más de 1.4 millones de dominios, aunque la cifra de sitios realmente comprometidos es mucho menor.

## A considerar

Revisar si el sitio usa el plugin Breeze y actualizarlo a la versión que corrige la falla. Buscar archivos o accesos que el administrador del sitio no instaló, señal de que ya hay un acceso oculto instalado. Si el sitio fue comprometido, cambiar todas las contraseñas del panel de WordPress y de la cuenta de hosting.

## Impacto potencial

Un sitio con acceso oculto instalado puede usarse para lo que el atacante decida: robar datos de visitantes, redirigir tráfico a páginas fraudulentas, distribuir programas maliciosos o revenderlo a otro delincuente. El dueño del sitio normalmente no lo nota hasta que el hosting lo suspende o los visitantes reportan algo extraño.
