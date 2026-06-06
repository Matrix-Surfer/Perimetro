---
title: "Más de 50 paquetes de programación populares comprometidos roban credenciales de equipos de desarrollo"
date: "2026-06-05"
source: "The Hacker News"
link: "https://thehackernews.com/2026/06/ironworm-and-new-miasma-worm-variant.html"
categoria: "Malware"
ambito: "Mixto"
nivelAtencion: "Alto"
status: "Activa"
resumen: "Más de 50 paquetes npm contaminados instalan un programa que extrae todas las credenciales del equipo del desarrollador. Si tu equipo usa JavaScript, hay riesgo activo. Verificar qué paquetes npm están en uso."
expuestos: "Desarrolladores y empresas con equipos de desarrollo que usan JavaScript o Node.js y que instalaron alguno de los paquetes npm comprometidos"
verificacion: "Revisar si alguno de los paquetes npm comprometidos está en los proyectos activos del equipo de desarrollo"
impacto: "Un desarrollador comprometido expone todas las credenciales de acceso de la organización: bases de datos, servicios en la nube, repositorios de código"
grc_activo: "Equipos de trabajo de desarrolladores con proyectos JavaScript o Node.js"
grc_vector: "Paquetes npm legítimos contaminados con programa malicioso que extrae credenciales y se propaga entre paquetes"
grc_condicion: "El equipo de desarrollo instaló uno de los 50+ paquetes npm comprometidos"
grc_explotacion: "activa"
grc_alcance: "Organizaciones con equipos de desarrollo que usan npm"
grc_confianza: "alta"
publicacion: "published"
---

## Qué ocurrió

Dos ataques coordinados contaminaron más de 50 paquetes de programación en npm, el repositorio principal de herramientas para desarrollo en JavaScript. El primero distribuye un programa malicioso que extrae todas las contraseñas, claves y accesos almacenados en el equipo del desarrollador, y se oculta de forma que los programas de seguridad no lo detectan. El segundo se replica solo: pasa de un paquete a otro sin necesidad de que nadie lo active.

## Quién está expuesto

### Para personas

Desarrolladores de software que instalaron alguno de los paquetes afectados en sus proyectos. El programa malicioso copia todo lo que hay en el equipo: contraseñas guardadas, claves de acceso a servicios, tokens de herramientas de trabajo. El equipo sigue funcionando con normalidad. No hay señal visible de que algo ocurrió.

### Para organizaciones

Empresas con equipos de desarrollo que usan JavaScript o Node.js. Si un desarrollador instaló un paquete afectado, el programa malicioso pudo haber copiado todo lo que ese equipo tenía: contraseñas de bases de datos, claves de servicios en la nube, accesos a repositorios de código, credenciales de herramientas internas. El riesgo no llega por correo ni por clic. Llega disfrazado de herramienta de trabajo.

## A considerar

La lista de paquetes comprometidos fue publicada por JFrog. Se puede revisar si alguno aparece en los archivos de dependencias de los proyectos activos. Los equipos que hayan instalado paquetes afectados deben rotar sus credenciales antes de determinar el alcance completo: el programa malicioso puede llevar activo días o semanas sin dejar rastro visible.

## Impacto potencial

Un solo desarrollador comprometido puede ser el punto de entrada a todos los sistemas de la organización. Las credenciales robadas no se usan de inmediato: se almacenan y se explotan cuando conviene, semanas o meses después. Para cuando el ataque sea visible, el acceso ya existe desde hace tiempo.
