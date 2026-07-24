---
title: "Un grupo de secuestro de información esconde sus comunicaciones dentro del propio navegador de la víctima para no ser detectado"
date: "2026-07-23"
source: "The Hacker News"
link: "https://thehackernews.com/2026/07/chaos-ransomware-uses-msarat-to-route.html"
categoria: "Malware"
ambito: "Organizaciones"
nivelAtencion: "Alto"
status: "Activa"
resumen: "Cisco Talos detalló msaRAT, un programa de acceso remoto que el grupo de ransomware Chaos instala en los equipos de sus víctimas antes de cifrar la información. Su particularidad: abre el navegador Chrome o Edge en segundo plano, sin ventana visible, y lo usa para comunicarse con el atacante, de forma que el tráfico parece una conexión normal del navegador. Las organizaciones deben revisar si tienen procesos de navegador iniciados de forma inusual, sin ventana visible."
expuestos: "Organizaciones cuyos equipos Windows sean comprometidos por el grupo de ransomware Chaos como paso previo al cifrado de archivos."
verificacion: "Revisar si existen procesos de Chrome o Edge iniciados en modo invisible (sin ventana), especialmente si se originan en un instalador o actualización reciente y no en el uso normal del equipo por parte del usuario."
impacto: "Este programa llega antes del cifrador de ransomware. Si se detecta a tiempo, permite evitar el secuestro completo de la información; si no se detecta, es la antesala de un ataque de ransomware ya en curso."
grc_activo: "Equipos Windows comprometidos donde se instala el implante antes del cifrador de ransomware"
grc_vector: "Instalador que se hace pasar por una actualización de Windows y que, una vez ejecutado, abre el navegador en modo invisible para comunicarse con el atacante"
grc_condicion: "Que el atacante ya tenga acceso al equipo (mediante otro método) e instale este componente como paso previo al cifrado"
grc_explotacion: "activa"
grc_alcance: "Organizaciones con equipos Windows comprometidos por el grupo de ransomware Chaos"
grc_confianza: "alta"
publicacion: "published"
---

## Qué ocurrió

Cisco Talos detalló msaRAT, un programa de acceso remoto que el grupo de ransomware Chaos instala en los equipos Windows de sus víctimas como paso previo a cifrar la información y exigir un rescate. Lo distintivo de este programa es cómo se comunica con el atacante: en lugar de abrir una conexión propia hacia Internet, algo que los sistemas de seguridad suelen detectar con facilidad, abre el navegador Chrome o Edge en segundo plano, sin ventana visible, y lo usa para enviar y recibir instrucciones. Desde el punto de vista de quien vigila la red, el tráfico que se observa es indistinguible de una conexión legítima del navegador hacia servicios conocidos, porque técnicamente lo es: el navegador real, controlado por el programa malicioso, es quien establece la comunicación. El equipo llega al sistema disfrazado de actualización de Windows, y una vez instalado, opera antes de que se ejecute el programa que cifra los archivos.

## Quién está expuesto

### Para organizaciones

Cualquier organización cuyos equipos Windows puedan ser comprometidos por el grupo Chaos, especialmente aquellas que ya han sido blanco de intentos previos de intrusión o phishing dirigido, dado que este componente se instala como segundo paso, después de un acceso inicial.

### Para personas

Riesgo indirecto: empleados cuyos equipos de trabajo se vean comprometidos como parte de la cadena de ataque.

## A considerar

El indicador más útil para detectar esta técnica es de comportamiento, no de red: procesos de Chrome o Edge que se inician con parámetros de ejecución invisible y de depuración remota, sobre todo si el proceso que los lanza es un instalador reciente y no una acción del propio usuario. A diferencia de otros indicadores (como direcciones de servidores específicos), esta forma de operar es más difícil de disfrazar para el atacante y, por lo tanto, más confiable para la detección.

## Impacto potencial

Este programa es una señal de que un ataque de ransomware está en marcha, no el ataque final. Si logra pasar inadvertido, el siguiente paso habitual es el cifrado masivo de archivos y la exigencia de un rescate para recuperarlos, con la consecuente interrupción de operaciones y el riesgo de que los datos robados antes del cifrado se publiquen si la organización no paga.
