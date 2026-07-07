---
title: "Falla crítica en software de acceso remoto BeyondTrust permite tomar control sin verificar identidad"
date: "2026-07-07"
source: "The Hacker News"
link: "https://thehackernews.com/2026/07/beyondtrust-patches-critical-auth.html"
categoria: "Vulnerabilidad"
ambito: "Organizaciones"
nivelAtencion: "Medio"
status: "En monitoreo"
resumen: "BeyondTrust corrigió una falla crítica (CVSS 9.2) en Remote Support y Privileged Remote Access, el software que usan los equipos de soporte técnico para conectarse de forma remota a computadoras con privilegios administrativos. La falla permitía evadir la verificación de identidad y tomar control sin credenciales válidas. Las organizaciones que usan este software deben confirmar que aplicaron el parche de abril de 2026 o actualizaron a la versión 25.3.3 o superior."
expuestos: "Organizaciones que usan BeyondTrust Remote Support o Privileged Remote Access en versión 25.3.2 o anterior."
verificacion: "Si la organización usa BeyondTrust RS/PRA y si ya aplicó la actualización de abril de 2026 o la versión 25.3.3 o superior."
impacto: "Un atacante podría tomar control de la herramienta de soporte remoto y, desde ahí, acceder a los equipos que esa herramienta administra."
grc_activo: "Software de acceso remoto BeyondTrust Remote Support y Privileged Remote Access"
grc_vector: "Evasión de la verificación de identidad antes de iniciar sesión (pre-autenticación)"
grc_condicion: "Que la organización tenga habilitada una configuración de autenticación específica y no haya aplicado el parche"
grc_explotacion: "investigacion"
grc_alcance: "Organizaciones con RS/PRA autohospedado sin el parche de abril de 2026, o instancias en la nube no actualizadas antes del 21 de abril"
grc_confianza: "alta"
publicacion: "published"
---

## Qué ocurrió

BeyondTrust corrigió dos fallas críticas en sus productos Remote Support y Privileged Remote Access, herramientas que usan los equipos de soporte técnico para conectarse a computadoras de forma remota y administrar accesos con privilegios elevados. La más grave, identificada como CVE-2026-40138 y con una puntuación de severidad de 9.2 sobre 10, permitía evadir la verificación de identidad antes de iniciar sesión y tomar control de cuentas con privilegios administrativos, sin necesidad de credenciales válidas. El fabricante ya aplicó el parche a todos los clientes de la versión en la nube desde el 21 de abril de 2026; los clientes que operan el software en su propia infraestructura deben aplicarlo manualmente.

## Quién está expuesto

### Para personas

No aplica directamente. El riesgo recae en las organizaciones que usan este software para dar soporte remoto.

### Para organizaciones

Empresas que usan BeyondTrust Remote Support o Privileged Remote Access en versión 25.3.2 o anterior, sobre todo si administran el software en su propia infraestructura y no han aplicado el parche.

## A considerar

BeyondTrust no reporta explotación activa de esta falla al momento de la corrección. Sin embargo, versiones anteriores de estos mismos productos han sido usadas en el pasado para instalar accesos ocultos en organizaciones comprometidas; por eso la corrección no debe tratarse como opcional.

## Impacto potencial

Si un atacante explota esta falla antes de que se aplique el parche, puede tomar control de la herramienta que la organización usa para dar soporte remoto y, desde ahí, acceder a los equipos que esa herramienta administra: potencialmente toda la red de la empresa.
