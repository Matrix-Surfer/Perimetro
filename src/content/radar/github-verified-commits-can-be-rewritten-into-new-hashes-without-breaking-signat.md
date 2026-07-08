---
title: "Un commit firmado y verificado en GitHub puede duplicarse con un hash distinto sin perder la marca de confianza"
pubDate: 2026-07-08
source: "The Hacker News"
link: "https://thehackernews.com/2026/07/github-verified-commits-can-be.html"
category: "Seguridad"
señal: "Una firma 'verificada' en GitHub ya no garantiza un identificador único: alguien sin la llave privada puede generar una copia del mismo commit con un hash distinto que sigue mostrando 'Verified'."
supuesto: "Un commit firmado y verificado es una identidad confiable e inmutable; bloquear su hash es suficiente para bloquear ese código."
observación: "Si los procesos de seguridad de la organización bloquean código malicioso por el hash exacto de un commit, y qué tan expuesta queda esa defensa ante esta técnica."
context: "Una investigación de Carnegie Mellon muestra que un commit firmado y marcado como verificado en GitHub puede duplicarse con un hash distinto sin que la firma deje de ser válida. La industria asume que ese hash es un identificador único e inmutable, suficiente para bloquear código malicioso conocido. La investigación demuestra que esa defensa tiene un punto ciego."
grc_cambio: "La verificación de código por hash de commit deja de ser una garantía confiable de que se trata de la misma pieza de código."
grc_paradigma: "Un commit firmado y verificado es una identidad única e inmutable."
grc_horizonte: "meses"
grc_confianza: "alta"
publicacion: "review"
---

## La señal

Una investigación de Carnegie Mellon muestra que un commit firmado y marcado como "Verified" en GitHub puede duplicarse con un hash distinto sin que la firma deje de ser válida. Quien no tiene la llave privada de firma puede lograrlo.

## El supuesto que se rompe

La industria del software asume que el hash de un commit firmado es un identificador único e inmutable: si se bloquea ese hash, se bloquea ese código. La investigación muestra que se puede generar una versión con el mismo contenido pero un hash distinto, y GitHub la sigue marcando como verificada.

## Qué observar

Si los procesos de seguridad de la organización dependen de bloquear código malicioso por el hash exacto de un commit, esa defensa tiene un punto ciego. Vale la pena preguntar qué tan expuestas están las cadenas de suministro de software que confían en esa garantía.
