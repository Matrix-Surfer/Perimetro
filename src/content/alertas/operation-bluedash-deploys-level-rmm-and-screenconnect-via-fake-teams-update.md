---
title: "Una actualización falsa de Microsoft Teams instala herramientas de acceso remoto no autorizadas"
date: "2026-07-27"
source: "The Hacker News"
link: "https://thehackernews.com/2026/07/operation-bluedash-deploys-level-rmm.html"
categoria: "Phishing"
ambito: "Organizaciones"
nivelAtencion: "Alto"
status: "Activa"
resumen: "Una campaña activa de engaño por correo dirige a las víctimas hacia una página falsa que simula ser la tienda oficial de Microsoft, donde se les pide actualizar Microsoft Teams para abrir un supuesto documento compartido. Esa 'actualización' instala en realidad herramientas legítimas de acceso remoto que el atacante usa para controlar el equipo."
expuestos: "Empleados de cualquier organización que use Microsoft Teams, especialmente quienes reciben avisos de documentos compartidos por correo."
verificacion: "Confirmar si algún empleado recibió un correo pidiendo actualizar Microsoft Teams para abrir un documento, y si llegó a instalar algo desde un enlace fuera de los canales oficiales de la organización."
impacto: "Un atacante obtiene control remoto legítimo del equipo de la víctima, con las mismas capacidades que tendría el propio equipo de soporte técnico de la organización."
grc_activo: "Equipos de trabajo de empleados que usan Microsoft Teams"
grc_vector: "Correo de engaño que simula un aviso de documento compartido, dirige a una página falsa de la tienda de Microsoft y hace que la víctima instale, ella misma, herramientas legítimas de administración remota (Level RMM y ScreenConnect)"
grc_condicion: "Que un empleado reciba el correo, siga el enlace y ejecute la instalación que se le presenta como una actualización de Teams"
grc_alcance: "Organizaciones cuyos empleados usan Microsoft Teams y reciben correos externos; campaña documentada como activa"
grc_confianza: "alta"
publicacion: "published"
---

## Qué ocurrió

Investigadores identificaron una campaña activa de correos de engaño con el nombre en clave "Operation BlueDash" que se hace pasar por un aviso de documento compartido en Microsoft Teams. El correo dirige a la víctima hacia una página falsa que imita la tienda oficial de Microsoft, donde se le indica que debe actualizar Teams antes de poder abrir el documento. Esa supuesta actualización instala, en realidad, herramientas legítimas de acceso remoto (Level RMM y ScreenConnect), que el atacante usa después para controlar el equipo de la víctima como si fuera soporte técnico autorizado.

## Quién está expuesto

Empleados de cualquier organización que use Microsoft Teams para comunicación interna, en particular quienes reciben avisos de documentos compartidos por correo y no verifican la fuente antes de seguir un enlace de actualización.

## A considerar

Las herramientas que el atacante instala (Level RMM, ScreenConnect) no son maliciosas en sí mismas: son programas legítimos de soporte técnico remoto, lo que dificulta que un antivirus las detecte como amenaza. Vale la pena confirmar con el equipo de TI si esas herramientas están autorizadas y en uso legítimo en la organización; si aparecen sin que TI las haya instalado, es señal de compromiso.

## Impacto potencial

Un atacante con acceso remoto legítimo al equipo puede leer archivos, instalar programas adicionales o moverse hacia otros sistemas de la red interna, con el mismo nivel de control que tendría el propio equipo de soporte técnico de la organización.
