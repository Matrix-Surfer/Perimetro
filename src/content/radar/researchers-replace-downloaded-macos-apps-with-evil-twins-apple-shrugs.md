---
title: "El sello de seguridad de una computadora certifica una aplicación solo al momento de instalarla, no de forma permanente"
pubDate: 2026-07-23
source: "The Register — Security"
link: "https://www.theregister.com/security/2026/07/24/researchers-replace-downloaded-macos-apps-with-evil-twins-apple-shrugs/5277858"
category: "Seguridad"
señal: "Investigadores demostraron que pueden reemplazar el programa principal de una aplicación de Mac ya validada por Apple, sin que el sistema lo detecte como una alteración."
supuesto: "Una aplicación validada y certificada por el fabricante del sistema operativo permanece segura mientras siga instalada en el equipo."
observación: "Qué tan seguido se revalida la integridad de las aplicaciones críticas ya instaladas en los equipos de la organización, y si se confía únicamente en la validación que ocurrió el día de la instalación."
context: "Investigadores mostraron que el sistema de confianza de macOS valida una aplicación descargada de Internet en el momento de instalarla, pero no revisa de forma confiable si esa aplicación fue alterada después. Apple no lo considera una falla que deba corregir, porque requiere que la víctima ya haya aceptado ciertos permisos en el equipo. El caso deja una pregunta más amplia: si un sello de seguridad certifica algo solo una vez, ¿qué tanto puede confiarse en él con el paso del tiempo?"
grc_cambio: "La validación de seguridad de una aplicación de escritorio certifica un momento puntual (la instalación), no un estado continuo de confianza."
grc_paradigma: "Que una aplicación notarizada y validada por el fabricante del sistema operativo permanece segura mientras esté instalada, sin necesidad de revisarla de nuevo."
publicacion: "published"
---

## La señal

Dos investigadores demostraron que pueden reemplazar el programa principal de una aplicación de Mac ya descargada y validada por el sistema, sin que macOS lo detecte como una modificación no autorizada. La técnica aprovecha que el sistema recuerda que la aplicación ya pasó la revisión inicial, y no vuelve a verificar a fondo su contenido después. Apple no considera esto una falla de seguridad que deba corregir formalmente.

## El supuesto que se rompe

La idea de que una aplicación certificada por el fabricante del sistema operativo permanece confiable mientras siga instalada en el equipo. En realidad, esa certificación ocurre en un momento específico (la instalación) y no se revisa de nuevo de forma continua, incluso si el contenido de la aplicación cambia después.

## Qué observar

Qué tan seguido se revisa la integridad de las aplicaciones críticas que ya están instaladas en los equipos de la organización, y si esa confianza se sostiene únicamente en la validación que el sistema operativo hizo el día de la instalación. La pregunta de fondo no es si la aplicación era segura al descargarla, sino si alguien tendría forma de notar si dejó de serlo después.
