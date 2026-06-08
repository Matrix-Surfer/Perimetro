---
title: "Grupo de extorsión actualiza infraestructura para que sus llamadas falsas sean más difíciles de bloquear"
date: "2026-06-08"
source: "SecurityWeek"
link: "https://www.securityweek.com/silent-ransom-group-uses-dns-fast-flux-in-attacks/"
categoria: "Fraude"
ambito: "Organizaciones"
nivelAtencion: "Alto"
status: "Activa"
resumen: "El grupo Silent Ransom —conocido por llamadas telefónicas que suplantan a soporte técnico para robar accesos corporativos— adoptó una técnica que rota constantemente sus servidores de operación, haciendo que los bloqueos tradicionales por dirección IP o dominio sean ineficaces. Las campañas siguen activas."
expuestos: "Empleados con acceso a sistemas críticos que pueden recibir llamadas de soporte técnico falsas."
verificacion: "Confirmar si algún empleado recibió una llamada no solicitada de soporte técnico y concedió acceso remoto a su equipo."
impacto: "Robo de accesos corporativos que deriva en extorsión, robo de información o despliegue de ransomware."
grc_activo: "Credenciales corporativas y acceso remoto a sistemas internos"
grc_vector: "Llamadas telefónicas de vishing que inducen al empleado a instalar acceso remoto voluntariamente"
grc_condicion: "Empleado que recibe la llamada y sigue las instrucciones del supuesto soporte"
grc_explotacion: "activa"
grc_alcance: "Cualquier organización con empleados que manejan sistemas con acceso a información sensible"
grc_confianza: "alta"
publicacion: "published"
---

## Qué ocurrió

Silent Ransom es un grupo de extorsión que opera mediante llamadas telefónicas falsas. Un empleado recibe una llamada de alguien que se identifica como soporte técnico — de Microsoft, del proveedor de antivirus, o del área de TI de la propia empresa. El objetivo es convencer al empleado de instalar una herramienta de acceso remoto. Una vez instalada, el atacante entra al equipo y desde ahí a los sistemas de la organización.

El grupo adoptó una técnica de rotación rápida de servidores — conocida como DNS fast flux — que hace que los bloqueos por dirección de red sean ineficaces: cuando la organización bloquea un servidor, el grupo ya usa otro. Esta actualización dificulta las defensas técnicas y pone más peso en la detección humana.

## Quién está expuesto

### Para organizaciones

Cualquier empresa con empleados que reciben llamadas externas y tienen acceso a sistemas con información sensible. El grupo apunta especialmente a personal administrativo, de finanzas y de operaciones — no necesariamente a técnicos.

## A considerar

La actualización técnica del grupo no cambia la táctica central: el ataque sigue dependiendo de que el empleado siga las instrucciones de una llamada no solicitada. El punto de quiebre sigue siendo humano.

Una regla concreta: el soporte técnico legítimo(interno o externo), nunca llama sin previo aviso para pedir acceso remoto. Si alguien llama para eso, es la señal.

## Impacto potencial

Una vez dentro del equipo de un empleado, el grupo accede a correos, archivos, sistemas contables o bancarios. Con esa información exigen un pago para no publicar los datos. Si el empleado comprometido tenía acceso amplio, el daño puede escalar a toda la organización.
