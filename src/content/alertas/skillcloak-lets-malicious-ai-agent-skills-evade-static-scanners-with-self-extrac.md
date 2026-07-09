---
title: "Una técnica de empaquetado permite ocultar código malicioso dentro de complementos para agentes de IA"
date: "2026-07-06"
source: "The Hacker News"
link: "https://thehackernews.com/2026/07/new-skillcloak-technique-lets-malicious.html"
categoria: "IA"
ambito: "Organizaciones"
nivelAtencion: "Bajo"
status: "En monitoreo"
resumen: "Investigadores documentaron una técnica llamada SkillCloak que oculta código malicioso dentro de complementos instalables para agentes de inteligencia artificial, conocidos como skills. La técnica evade más del 90% de los escáneres de seguridad que revisan el código al momento de instalarlo. Las organizaciones que permiten instalar estos complementos deberían confirmar si existe revisión adicional más allá del escaneo inicial."
expuestos: "Organizaciones que instalan complementos (skills) de terceros en agentes de inteligencia artificial."
verificacion: "Si la organización permite instalar skills de terceros en sus agentes de IA y si existe revisión del comportamiento en tiempo de ejecución, no solo al momento de instalar."
impacto: "Un complemento aparentemente inofensivo podría robar credenciales, extraer código fuente o instalar accesos ocultos sin ser detectado por el escaneo inicial."
grc_activo: "Agentes de IA con complementos (skills) instalables de terceros"
grc_vector: "Empaquetado que oculta el código malicioso hasta el momento de ejecución, evadiendo el escaneo estático de instalación"
grc_condicion: "Que la organización permita instalar skills de terceros sin revisión de comportamiento en tiempo real"
grc_explotacion: "investigacion"
grc_alcance: "Cualquier organización que use plataformas de agentes de IA con marketplace de complementos"
grc_confianza: "alta"
publicacion: "published"
---

## Qué ocurrió

Investigadores documentaron una técnica llamada SkillCloak que oculta código malicioso dentro de complementos instalables para agentes de inteligencia artificial, conocidos como skills. En pruebas contra ocho escáneres de seguridad y más de 1,600 complementos maliciosos ya identificados, la técnica evadió la detección en más del 90% de los casos. El método oculta el código dañino durante la instalación y lo reconstruye únicamente cuando el agente lo ejecuta.

## Quién está expuesto

### Para organizaciones

Empresas que usan agentes de inteligencia artificial con la capacidad de instalar complementos de terceros, especialmente si el proceso de aprobación se basa únicamente en un escaneo automático al momento de instalar.

## A considerar

Los escáneres que revisan el código antes de instalarlo no bastan contra esta técnica. La defensa efectiva requiere observar el comportamiento del complemento mientras se ejecuta, no solo su apariencia al instalarlo.

## Impacto potencial

Un complemento con esta técnica podría robar credenciales, copiar código fuente confidencial o instalar accesos ocultos sin que el escaneo de seguridad lo detecte al momento de instalarlo.
