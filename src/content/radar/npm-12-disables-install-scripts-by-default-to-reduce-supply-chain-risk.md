---
title: "npm deja de ejecutar automáticamente scripts, dependencias de Git y URLs remotas al instalar paquetes"
pubDate: 2026-07-09
source: "The Hacker News"
link: "https://thehackernews.com/2026/07/npm-12-disables-install-scripts-by.html"
category: "Seguridad"
señal: "npm, el gestor de paquetes más usado del ecosistema JavaScript, deja de ejecutar automáticamente scripts de instalación, dependencias de Git y URLs remotas: ahora requieren aprobación explícita del desarrollador."
supuesto: "Que instalar una dependencia es, por sí mismo, un acto seguro, sin que el código de esa dependencia se ejecute automáticamente en el equipo del desarrollador."
observación: "Qué automatizaciones, integraciones o procesos de publicación de paquetes dependen del comportamiento anterior de npm, y si existe un plan para adaptarse antes de que los tokens actuales pierdan la capacidad de publicar directamente en enero de 2027."
context: "npm, el gestor de paquetes más usado del ecosistema JavaScript, cambia su comportamiento por defecto: los scripts de instalación automática, la resolución de dependencias desde Git y la descarga desde URLs remotas dejan de ejecutarse sin autorización explícita. El cambio reconoce que instalar una dependencia dejó de ser un acto seguro por sí mismo, ya que ese comportamiento automático fue durante años la puerta de entrada favorita para inyectar código malicioso en cadenas de suministro de software. La pregunta para los equipos de desarrollo es qué automatizaciones dependen del comportamiento anterior, antes de que los tokens que lo permitían pierdan sus capacidades entre agosto de 2026 y enero de 2027."
grc_cambio: "El gestor de paquetes más usado de JavaScript deja de ejecutar automáticamente código de terceros durante la instalación."
grc_paradigma: "Que instalar una dependencia es, por sí mismo, un acto seguro."
grc_horizonte: "meses"
grc_confianza: "alta"
publicacion: "published"
---

## La señal

npm, el gestor de paquetes más usado del ecosistema JavaScript, cambia su comportamiento por defecto: los scripts de instalación automática, la resolución de dependencias desde repositorios Git y la descarga de dependencias desde URLs remotas dejan de ejecutarse sin autorización explícita del desarrollador. Además, los tokens de acceso granular que permitían evadir la verificación en dos pasos empiezan a perder capacidades administrativas en agosto de 2026 y no podrán publicar paquetes directamente a partir de enero de 2027.

## El supuesto que se rompe

Que instalar una dependencia es, por sí mismo, un acto seguro, sin que el código de esa dependencia tenga la posibilidad de ejecutarse automáticamente en el equipo del desarrollador o en una canalización de integración continua.

## Qué observar

Qué automatizaciones, integraciones o procesos de publicación de paquetes de la organización dependen del comportamiento anterior de npm, y si existe un plan para adaptarse a los nuevos esquemas de aprobación antes de que los tokens actuales pierdan la capacidad de publicar directamente en enero de 2027.
