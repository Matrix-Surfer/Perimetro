---
title: "TrapDoor: ataque coordinado envenena paquetes de software en npm, PyPI y Crates.io"
date: "2026-05-25"
tipo: "Otro"
status: "Activa"
resumen: "Campaña activa desde el 22 de mayo distribuye malware de robo de credenciales a través de 34 paquetes maliciosos publicados simultáneamente en los tres registros de software más usados. Cualquier equipo de desarrollo con proyectos en JavaScript, Python o Rust está en riesgo."
source: "The Hacker News"
link: "https://thehackernews.com/2026/05/trapdoor-supply-chain-attack-spreads.html"
publicacion: "published"
---

## Contexto

El 22 de mayo se detectó TrapDoor. Una campaña coordinada de ataque a la cadena de suministro de software. No apunta a las empresas directamente. Apunta a las herramientas que sus equipos usan para construir sus sistemas.

Los atacantes publicaron más de 34 paquetes maliciosos simultáneamente. En tres registros distintos: npm para JavaScript, PyPI para Python, Crates.io para Rust. Más de 384 versiones distribuidas en oleadas. Cada paquete roba credenciales.

El mecanismo es el mismo en los tres ecosistemas. El desarrollador instala el paquete. A veces porque tiene un nombre casi idéntico al de una librería legítima. A veces porque se cuela como dependencia de otro paquete. A veces simplemente aparece en los resultados de búsqueda. Se instala. El malware corre en segundo plano. Las credenciales salen.

## Impacto potencial

El objetivo no es el usuario final. Es el desarrollador. Una sola máquina comprometida puede dar acceso a toda la infraestructura del negocio. Los desarrolladores trabajan con credenciales amplias. Eso es lo que se roba.

Si el atacante llega a las credenciales de producción, puede eliminar datos. Puede tomar control de sistemas. Puede interrumpir el servicio. Para empresas con clientes que dependen de esos sistemas, la interrupción es **responsabilidad contractual directa**.

Para agencias y consultoras, el riesgo escala. Las credenciales comprometidas pueden incluir acceso a infraestructura de varios clientes. El incidente deja de ser interno. Afecta a múltiples organizaciones. Los clientes pueden reclamar.

## Recomendaciones

- **Preguntar al equipo de desarrollo si instaló paquetes de npm, PyPI o Crates.io entre el 22 y el 25 de mayo.** Es la pregunta más importante. Si la respuesta es sí, asumir compromiso preventivo y actuar.
- **Rotar credenciales de producción de inmediato.** No esperar confirmación. Tokens de acceso a la nube, claves de bases de datos, credenciales de servicios críticos. Todo.
- **Revisar la actividad en la nube desde el 22 de mayo.** ¿Hubo operaciones inusuales en AWS, GCP o Azure? Creación de recursos, transferencias de datos, cambios de permisos.
- **Pregunta de gobierno para el equipo técnico:** ¿Validamos los paquetes de terceros antes de instalarlos en entornos con acceso a producción? Si la respuesta es no, este incidente justifica establecer ese proceso.
