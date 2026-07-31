---
title: "Un grupo norcoreano queda vinculado a una serie de ataques a paquetes populares de código abierto"
date: "2026-07-30"
source: "BleepingComputer"
link: "https://www.bleepingcomputer.com/news/security/amazon-links-debug-chalk-npm-supply-chain-attacks-to-north-korean-hackers/"
categoria: "Terceros"
ambito: "Organizaciones"
nivelAtencion: "Alto"
status: "Resuelta"
resumen: "Amazon vinculó una serie de ataques a la cadena de suministro de código abierto, ocurridos entre marzo de 2025 y marzo de 2026, con un grupo ligado a Corea del Norte. Los atacantes se ganaron la confianza de mantenedores de paquetes muy usados en JavaScript, entre ellos 'debug', 'chalk' y 'axios', y publicaron versiones con código malicioso que se distribuyeron automáticamente a quienes actualizaron sus proyectos."
expuestos: "Organizaciones que desarrollan software en JavaScript o Node.js y que instalaron los paquetes 'debug', 'chalk', 'axios' o 'typo-crypto' durante las ventanas de compromiso (marzo de 2025, septiembre de 2025 y marzo de 2026)."
verificacion: "Revisar los registros de dependencias del proyecto para confirmar si se instaló una versión comprometida de estos paquetes durante esas fechas, y si es así, rotar credenciales y revisar actividad inusual en los sistemas donde se ejecutó."
impacto: "Una versión comprometida da al atacante ejecución de código dentro del proyecto que la instaló, lo que puede traducirse en robo de credenciales, código fuente o acceso a la infraestructura donde ese proyecto corre."
grc_activo: "Dependencias de JavaScript/Node.js en proyectos que usan los paquetes npm 'debug', 'chalk', 'axios' o 'typo-crypto'"
grc_vector: "Ingeniería social dirigida a mantenedores de paquetes npm populares para obtener acceso a sus cuentas y publicar versiones con código malicioso"
grc_condicion: "Haber instalado una versión comprometida de estos paquetes durante las ventanas de exposición (marzo 2025, septiembre 2025, marzo 2026)"
grc_alcance: "Proyectos JavaScript/Node.js a nivel global; solo 'axios' supera 100 millones de descargas semanales"
grc_confianza: "media"
publicacion: "published"
---

## Qué ocurrió

Amazon vinculó una serie de ataques a la cadena de suministro de código abierto, ocurridos entre marzo de 2025 y marzo de 2026, con un grupo ligado a Corea del Norte. Los atacantes usaron ingeniería social para ganarse la confianza de mantenedores de paquetes de JavaScript muy usados, entre ellos "debug", "chalk", "axios" y "typo-crypto", y publicaron versiones con código malicioso que se distribuyeron automáticamente a quienes actualizaron sus proyectos. El caso de "debug" y "chalk", en septiembre de 2025, llegó a afectar cerca del 10% de los entornos en la nube analizados en solo dos horas antes de ser detectado y retirado.

## Quién está expuesto

Organizaciones que desarrollan software en JavaScript o Node.js y que instalaron alguno de estos paquetes durante las ventanas de compromiso, en particular equipos que actualizan dependencias de forma automática sin revisión previa.

## A considerar

El paquete "axios" por sí solo supera los 100 millones de descargas semanales, lo que da una idea del alcance potencial de este tipo de ataque. Vale la pena que los equipos de desarrollo revisen si su proceso de actualización de dependencias incluye alguna verificación antes de aplicar cambios de forma automática.

## Impacto potencial

Una versión comprometida de estos paquetes le da al atacante ejecución de código dentro del proyecto que la instaló, lo que puede traducirse en robo de credenciales, código fuente o acceso a la infraestructura donde ese proyecto se ejecuta.
