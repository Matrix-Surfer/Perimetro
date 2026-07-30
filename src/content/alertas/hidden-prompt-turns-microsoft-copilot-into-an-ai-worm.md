---
title: "Documentos de Word con instrucciones ocultas hacen que Copilot se propague de archivo en archivo"
date: "2026-07-30"
source: "Malwarebytes Labs"
link: "https://www.malwarebytes.com/blog/ai/2026/07/hidden-microsoft-copilot-ai-worm"
categoria: "IA"
ambito: "Mixto"
nivelAtencion: "Medio"
status: "En monitoreo"
resumen: "Un investigador demostró que puede ocultar instrucciones maliciosas como texto blanco sobre fondo blanco dentro de un documento de Word. Cuando alguien usa Microsoft Copilot para redactar o editar contenido a partir de ese documento, Copilot ejecuta esas instrucciones y las copia, también ocultas, al nuevo archivo que crea, propagándose de documento en documento sin necesidad de macros ni programas maliciosos tradicionales. Microsoft intentó mitigar el problema actualizando el modelo de IA, pero el investigador logró reproducir el ataque completo después del cambio."
expuestos: "Personas y organizaciones que usan Microsoft Copilot para Word junto con documentos recibidos de fuera de su equipo o de terceros."
verificacion: "Tratar cualquier documento externo como no confiable antes de usarlo como base para Copilot, y revisar el contenido generado antes de compartirlo."
impacto: "El documento infectado altera silenciosamente su propio contenido y contamina cada nuevo archivo creado a partir de él, propagándose a través de los flujos normales de colaboración sin que la víctima lo note."
grc_activo: "Microsoft Copilot para Word y los documentos que procesa"
grc_vector: "Instrucciones ocultas como texto blanco sobre fondo blanco dentro de un documento de Word, que Copilot interpreta como parte de la solicitud del usuario"
grc_condicion: "El usuario debe usar Copilot para redactar o editar contenido a partir de un documento que contenga la instrucción oculta"
grc_explotacion: "poc_publica"
grc_alcance: "Cualquier usuario de Microsoft Copilot para Word que procese documentos de origen externo"
grc_confianza: "alta"
publicacion: "published"
---

## Qué ocurrió

Un investigador de Malwarebytes demostró que es posible ocultar instrucciones maliciosas como texto blanco sobre fondo blanco dentro de un documento de Word, invisibles a simple vista. Cuando una persona usa Microsoft Copilot para redactar o editar contenido a partir de ese documento, la herramienta interpreta el texto oculto como parte de la instrucción del usuario y lo ejecuta. Copilot copia entonces la misma instrucción oculta al nuevo documento que genera, y el ciclo se repite con cada persona que use ese archivo como base con Copilot. No se requieren macros ni un archivo malicioso tradicional: el documento se propaga a través del flujo normal de trabajo colaborativo.

## Quién está expuesto

Personas y organizaciones que usan Microsoft Copilot para Word con documentos recibidos de fuera de su equipo o de terceros.

## A considerar

Microsoft ya actualizó el modelo detrás de Copilot como mitigación, pero el investigador logró reproducir la cadena completa del ataque incluso después del cambio. Hasta que exista una corrección completa, conviene revisar el contenido generado por Copilot antes de compartirlo, en particular cuando el documento de origen viene de fuera de la organización.

## Impacto potencial

El documento infectado altera su propio contenido de forma silenciosa y contamina cada nuevo archivo creado a partir de él, propagándose por los canales normales de colaboración sin que la persona lo note ni intervenga un programa malicioso convencional.
