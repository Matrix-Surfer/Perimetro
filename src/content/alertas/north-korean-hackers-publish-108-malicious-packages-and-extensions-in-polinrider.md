---
title: "Paquetes de código abierto legítimos modificados para robar credenciales de equipos de desarrollo"
date: "2026-07-04"
source: "The Hacker News"
link: "https://thehackernews.com/2026/07/north-korean-hackers-publish-108.html"
categoria: "Terceros"
ambito: "Organizaciones"
nivelAtencion: "Alto"
status: "Activa"
resumen: "Un grupo vinculado a Corea del Norte comprometió cuentas de mantenedores de paquetes de código abierto e inyectó código malicioso en 108 librerías y extensiones legítimas — en npm, Packagist, Go y Chrome. El código roba credenciales y permite acceso remoto al equipo del desarrollador que las instala. La campaña sigue activa. Los equipos de desarrollo que usan estas dependencias deben revisar sus proyectos."
expuestos: "Equipos de desarrollo que usan librerías de npm, Packagist (PHP/Composer), módulos de Go o extensiones de Chrome instaladas en el último mes."
verificacion: "Revisar las dependencias del proyecto con herramientas de auditoría (npm audit, Dependabot) y verificar si algún paquete instalado recientemente fue modificado por un mantenedor desconocido."
impacto: "Robo de credenciales de desarrollo (tokens de GitHub, claves de API, variables de entorno) y acceso remoto persistente al equipo del desarrollador comprometido."
grc_activo: "Dependencias de proyectos de software en npm, Packagist, módulos de Go y extensiones de Chrome"
grc_vector: "Compromiso de cuentas de mantenedores legítimos para inyectar código malicioso en librerías reales — no en paquetes falsos"
grc_condicion: "Haber instalado o actualizado dependencias de npm, Composer, Go o Chrome en proyectos activos durante las últimas semanas"
grc_explotacion: "activa"
grc_alcance: "Equipos de desarrollo de software, agencias digitales, empresas con desarrollo interno de aplicaciones"
grc_confianza: "alta"
publicacion: "published"
---

## Qué ocurrió

Un grupo vinculado al gobierno de Corea del Norte comprometió cuentas de mantenedores de paquetes de código abierto — los desarrolladores que publican y mantienen librerías que otros usan en sus proyectos — e inyectó código malicioso en 108 paquetes y extensiones legítimas. Los repositorios afectados incluyen npm (JavaScript), Packagist (PHP), módulos de Go y una extensión de Chrome. El código oculto roba credenciales almacenadas en el equipo y abre acceso remoto. La campaña está activa y se esperan más paquetes afectados.

El detalle crítico: no se trata de paquetes falsos con nombres parecidos. Son paquetes reales, con sus mantenedores originales comprometidos. Un equipo que instaló una librería legítima hace dos semanas podría tener código malicioso en su proyecto sin saberlo.

## Quién está expuesto

Equipos de desarrollo de software que usan dependencias externas en proyectos activos. Esto incluye agencias de desarrollo, empresas con equipos de tecnología propios, startups y cualquier organización que construya o mantenga aplicaciones web, APIs o servicios en la nube.

El nivel de riesgo es mayor en equipos que:
- Actualizan dependencias frecuentemente sin auditoría
- Usan pipelines de integración continua que instalan paquetes automáticamente
- Tienen variables de entorno con credenciales (tokens de API, claves de servicio) en los mismos equipos donde desarrollan

## A considerar

El método de ocultamiento es sofisticado: el código malicioso se esconde dentro de archivos que parecen fuentes tipográficas o usando espacios en blanco para que no sea visible a simple vista. También se activa desde archivos de configuración de Visual Studio Code — el editor más usado por desarrolladores — lo que significa que puede ejecutarse sin que el desarrollador note nada inusual.

Herramientas de verificación:
- `npm audit` y `npm audit --audit-level=high` para proyectos JavaScript
- Revisar el historial de versiones de dependencias críticas directamente en el registro (npmjs.com, pkg.go.dev)
- Verificar extensiones de Chrome instaladas en equipos de desarrollo contra listas de paquetes afectados publicadas por Socket.dev

## Impacto potencial

Si el código malicioso se ejecutó en el equipo de un desarrollador, las credenciales almacenadas — tokens de GitHub, claves de AWS o GCP, variables de entorno con accesos a producción — pueden haber sido robadas. Desde esas credenciales, el atacante puede acceder a repositorios de código, entornos cloud, bases de datos de clientes o infraestructura de producción. El compromiso de un solo equipo de desarrollo puede escalar rápidamente a toda la infraestructura de la organización.
