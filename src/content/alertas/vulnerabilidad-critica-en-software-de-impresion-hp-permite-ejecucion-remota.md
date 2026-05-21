---
title: "Vulnerabilidad crítica en software de impresión HP permite ejecución remota sin contraseña"
date: "2026-05-21"
tipo: "Otro"
status: "Activa"
resumen: "CVE-2026-8631 (CVSS 9.3): un desbordamiento de buffer en HPLIP — el software de impresión HP para Linux — permite a un atacante ejecutar código remoto enviando un trabajo de impresión malformado, sin necesidad de credenciales."
source: "The Hacker News"
link: "https://thehackernews.com/2026/05/threatsday-bulletin-linux-rootkits.html"
publicacion: "published"
---

## Contexto

HPLIP (HP Linux Imaging and Printing) está instalado en millones de endpoints Linux y servidores de impresión empresariales. El fallo permite escalar privilegios y ejecutar código sin autenticación previa mediante un trabajo de impresión especialmente construido.

Las impresoras en red son infraestructura frecuentemente ignorada en los programas de gestión de vulnerabilidades de las empresas — se actualizan los servidores y equipos de usuario, pero los servidores de impresión quedan sin atención durante meses o años.

## Impacto potencial

Servidores de impresión Linux con impresoras HP conectadas en red son el objetivo. En entornos de oficina donde la impresora comparte red con sistemas internos, un exploit exitoso puede ser el punto de entrada a infraestructura crítica. CVSS 9.3 indica severidad crítica con alta probabilidad de explotación.

## Recomendaciones

- Aplicar la actualización de HPLIP disponible en el repositorio oficial de HP o a través del gestor de paquetes de la distribución Linux.
- Mientras se parchea, restringir el acceso de red al servidor de impresión a las IPs estrictamente necesarias.
- Revisar si hay equipos con HPLIP expuestos directamente a internet o en segmentos de red sin restricciones.
- Incluir servidores de impresión en el proceso regular de gestión de vulnerabilidades y actualizaciones.
