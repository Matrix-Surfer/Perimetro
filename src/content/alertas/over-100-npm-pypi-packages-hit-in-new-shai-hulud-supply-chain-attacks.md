---
title: "Más de 100 paquetes de programación comprometidos roban credenciales de desarrolladores de forma automática"
date: "2026-06-09"
source: "SecurityWeek"
link: "https://www.securityweek.com/over-100-npm-pypi-packages-hit-in-new-shai-hulud-supply-chain-attacks/"
categoria: "Terceros"
ambito: "Organizaciones"
nivelAtencion: "Alto"
status: "Activa"
resumen: "Un ataque comprometió más de 100 paquetes en los repositorios de software npm y PyPI —herramientas usadas por millones de desarrolladores. Las versiones infectadas se auto-propagan y roban credenciales de acceso de forma automática. Organizaciones cuyo software depende de estas herramientas pueden estar expuestas sin saberlo."
expuestos: "Equipos de desarrollo que usan dependencias de npm (Node.js) o PyPI (Python)"
verificacion: "Si el entorno de desarrollo instaló paquetes afectados por la campaña Shai-Hulud en los últimos días"
impacto: "Robo de credenciales de desarrollo, acceso no autorizado a repositorios y sistemas de producción"
grc_activo: "Entornos de desarrollo y pipelines de integración continua"
grc_vector: "Paquetes de software comprometidos que ejecutan código malicioso al instalarse"
grc_condicion: "Uso de dependencias npm o PyPI afectadas sin verificación de integridad"
grc_explotacion: "activa"
grc_alcance: "Equipos de desarrollo con proyectos Node.js o Python"
grc_confianza: "alta"
publicacion: "published"
---

## Qué ocurrió

Un grupo de atacantes comprometió más de 100 paquetes de software en npm y PyPI —plataformas donde los desarrolladores descargan herramientas para construir aplicaciones. Las versiones infectadas se propagan solas y ejecutan código que roba credenciales de acceso de forma automática al instalarse. Esta campaña se llama "Shai-Hulud"; sus variantes más recientes se denominan Miasma y Hades.

## Quién está expuesto

Equipos de desarrollo que usan dependencias de npm (proyectos Node.js) o PyPI (proyectos Python), especialmente en ciencia de datos y aplicaciones web. Si estos paquetes se instalaron en entornos de construcción conectados a sistemas de producción, el riesgo se extiende a toda la infraestructura.

## A considerar

Revisar los registros de instalación de paquetes recientes (`npm audit` / `pip-audit`). Identificar si alguna dependencia fue actualizada en los últimos días sin que la versión oficial haya cambiado. Si se detecta una instalación sospechosa, rotar credenciales almacenadas en ese entorno: tokens de GitHub, claves de nube, usuarios y contraseñas.

## Impacto potencial

Con las credenciales robadas, un atacante puede acceder a repositorios de código fuente, entornos de nube y sistemas internos. En el peor caso, el código comprometido llega a producción y expone también a los clientes finales.
