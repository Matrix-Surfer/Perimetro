---
title: "148 paquetes de código disfrazados de proxies escolares convirtieron navegadores en una red de ataque"
date: "2026-07-14"
source: "The Hacker News"
link: "https://thehackernews.com/2026/07/148-npm-packages-disguised-as-student.html"
categoria: "Terceros"
ambito: "Mixto"
nivelAtencion: "Alto"
status: "Activa"
resumen: "Una campaña de 148 paquetes de código en el repositorio npm, disfrazados de proxies para estudiantes, convirtió los navegadores de quienes visitaban esos sitios en una red usada para saturar otros servidores con tráfico (ataque de denegación de servicio). Algunas versiones maliciosas siguen disponibles."
expuestos: "Estudiantes u otras personas que visitaron sitios de proxy escolar que usaban estos paquetes; también el sitio de una escuela de enfermería en Illinois, que recibió el ataque de saturación."
verificacion: "Si el equipo de desarrollo usó alguno de estos paquetes, eliminarlo del proyecto; quien visitó estos sitios debe borrar el caché y los datos guardados del navegador."
impacto: "El navegador de la víctima se usa, sin su consentimiento, para saturar de tráfico otros servidores, consumiendo su conexión a Internet y exponiéndola a ser parte de un ataque atribuido a su dirección."
grc_activo: "Navegadores de visitantes de sitios de proxy escolar; paquetes del repositorio npm"
grc_vector: "Paquetes de código publicados como herramientas de proxy para estudiantes, que ocultan módulos que generan tráfico de ataque desde el navegador del visitante"
grc_condicion: "Visitar uno de los sitios de proxy que usa los paquetes maliciosos, o tener el paquete instalado en un proyecto de desarrollo"
grc_alcance: "148 paquetes en el repositorio npm; visitantes de los sitios de proxy asociados durante mayo y julio de 2026"
publicacion: "published"
---

## Qué ocurrió

Una campaña de 148 paquetes de código publicados en npm (un repositorio público donde los programadores descargan piezas de software reutilizable) se disfrazó de herramientas de proxy para estudiantes, sitios que prometen evadir los bloqueos de contenido en redes escolares. El objetivo real no eran los programadores que instalaran el paquete, sino los estudiantes que visitaban esos sitios: cada visita convertía su navegador en parte de una red usada para saturar de tráfico otros servidores, un ataque conocido como denegación de servicio distribuido. Un colegio de enfermería en Illinois recibió ese tráfico de ataque durante semanas. Algunas versiones maliciosas seguían disponibles para descarga al momento de escribir esta nota.

## Quién está expuesto

### Para personas

Estudiantes u otras personas que usaron sitios de proxy para acceder a contenido bloqueado en su red escolar o laboral.

### Para organizaciones

Escuelas, empresas o cualquier institución cuyos servidores puedan recibir tráfico de ataque generado por estos navegadores comprometidos. También equipos de desarrollo que hayan instalado alguno de estos paquetes por error.

## A considerar

Los dominios asociados a esta campaña (woofbeginner.com, c.vipersfutbol.com) pueden bloquearse a nivel de red. Quien haya usado uno de estos sitios de proxy debe borrar el caché, los datos locales y cualquier proceso en segundo plano que el navegador haya registrado.

## Impacto potencial

Mientras el navegador permanece abierto en el sitio, el equipo consume ancho de banda y capacidad de procesamiento para atacar a terceros sin que el usuario lo note. La dirección de Internet de la víctima queda asociada a ese ataque, lo que podría derivar en bloqueos o reportes de abuso contra su propia red.
