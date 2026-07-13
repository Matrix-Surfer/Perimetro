---
title: "Una extensión de navegador con 1.6 millones de usuarios pasó las revisiones de seguridad con un recolector de datos oculto que nunca se activó"
pubDate: 2026-07-13
source: "The Hacker News"
link: "https://thehackernews.com/2026/07/google-and-microsoft-pull-modheader.html"
category: "Seguridad"
señal: "Una extensión de navegador con millones de instalaciones logró superar las revisiones de las tiendas oficiales con una función de recolección de datos oculta, que permaneció inactiva por diseño hasta que alguien decidiera encenderla."
supuesto: "Que una extensión aprobada y disponible en las tiendas oficiales de Chrome o Edge fue revisada a fondo y no puede ocultar funciones dañinas."
observación: "Qué extensiones de navegador tiene instaladas la organización, quién las aprobó, y si existe un proceso para revisarlas periódicamente, no solo al momento de instalarlas."
context: "Una extensión para editar encabezados HTTP, con 1.6 millones de instalaciones entre Chrome y Edge, tenía integrado un recolector de historial de navegación. Nunca se activó: una lista de permisos vacía lo mantenía apagado, y los sistemas automáticos de revisión lo calificaron como bajo riesgo porque los datos viajaban cifrados. La revisión de una tienda de extensiones certifica el momento de la aprobación, no lo que la extensión puede activar después. ¿Qué extensiones de navegador siguen abiertas en los equipos de la organización, y desde cuándo nadie las revisa?"
grc_cambio: "Las extensiones de navegador pueden ocultar funciones dañinas que ni la revisión de la tienda oficial ni los escáneres automáticos detectan, porque están diseñadas para permanecer apagadas hasta activarse remotamente."
grc_paradigma: "Que estar disponible en una tienda oficial de extensiones certifica que el software es confiable de forma permanente."
publicacion: "published"
---

## La señal

Una extensión de navegador con 1.6 millones de instalaciones combinadas en Chrome y Edge tenía integrado un recolector de historial de navegación que nunca llegó a activarse: una lista de permisos vacía lo mantuvo apagado desde el inicio.

## El supuesto que se rompe

Que una extensión disponible en la tienda oficial de un navegador fue revisada a fondo y no puede ocultar funciones dañinas. Los sistemas automáticos de revisión calificaron esta extensión como de bajo riesgo precisamente porque la función maliciosa estaba diseñada para pasar inadvertida hasta activarse.

## Qué observar

Qué extensiones de navegador tienen instaladas los equipos de la organización, quién autorizó su instalación, y si existe algún proceso para revisarlas de forma periódica y no solo al momento de aprobarlas.
