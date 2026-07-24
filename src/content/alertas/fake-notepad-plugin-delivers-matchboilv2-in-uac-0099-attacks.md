---
title: "Un complemento falso para un editor de texto muy usado por equipos técnicos instala un programa espía disfrazado de actualización"
date: "2026-07-24"
source: "The Hacker News"
link: "https://thehackernews.com/2026/07/fake-notepad-plugin-delivers.html"
categoria: "Malware"
ambito: "Organizaciones"
nivelAtencion: "Alto"
status: "Activa"
resumen: "El Equipo de Respuesta a Emergencias de Ucrania (CERT-UA) detectó una campaña activa que distribuye un complemento falso para Notepad++, un editor de texto muy usado por personal técnico. El archivo instala en realidad un programa malicioso que abre acceso oculto al equipo. La campaña se dirige principalmente a organismos de gobierno y milicia en Europa del Este, pero la técnica (complementos falsos de software legítimo) es replicable contra cualquier organización."
expuestos: "Organizaciones y equipos técnicos que instalan complementos o extensiones para Notepad++ desde fuentes distintas al sitio oficial del proyecto."
verificacion: "Confirmar el origen de cualquier complemento de Notepad++ instalado recientemente y verificar que WinRAR, 7-Zip y Notepad++ estén actualizados a sus versiones más recientes."
impacto: "El programa malicioso instala un cargador que puede descargar componentes adicionales en el equipo, dando a un atacante acceso oculto y continuo para robar información o desplazarse hacia otros sistemas de la red."
grc_activo: "Equipos con Notepad++ instalado, especialmente en organizaciones de gobierno, militares y del sector químico, telecomunicaciones y tecnología"
grc_vector: "Correo de phishing con imagen adjunta que lleva a un enlace acortado; descarga un archivo que combina el instalador legítimo de Notepad++ con una librería maliciosa disfrazada de complemento"
grc_condicion: "Que la víctima abra el enlace del correo y ejecute el archivo descargado, instalando el paquete que incluye el complemento falso"
grc_explotacion: "activa"
grc_alcance: "Principalmente entidades de gobierno y milicia en Albania, Grecia, Moldavia y Turquía, además de organizaciones de los sectores químico, telecomunicaciones y tecnología"
grc_confianza: "alta"
publicacion: "published"
---

## Qué ocurrió

El Equipo de Respuesta a Emergencias de Ucrania (CERT-UA) advirtió sobre una campaña activa de un grupo alineado con Rusia, identificado como UAC-0099, que engaña a las víctimas con correos de phishing con una imagen adjunta. Al abrir el enlace incluido, se descarga un archivo que combina la aplicación legítima de Notepad++ (un editor de texto muy usado por administradores de sistemas y personal técnico) con una librería maliciosa que se hace pasar por un complemento. Esa librería instala, en varias etapas, un cargador llamado MATCHBOIL.V2, capaz de descargar componentes adicionales en el equipo comprometido. El mismo grupo ha usado antes fallas de seguridad en WinRAR para el mismo tipo de campañas.

## Quién está expuesto

### Para organizaciones

Principalmente organismos de gobierno y milicia en Europa del Este (Albania, Grecia, Moldavia y Turquía), así como organizaciones de los sectores químico, telecomunicaciones y tecnología. Cualquier organización que instale complementos de Notepad++ desde fuentes no oficiales corre el mismo riesgo, sin importar el sector.

### Para personas

Riesgo indirecto: personal técnico y administradores de sistemas que reciben el correo de phishing y descargan el archivo adjunto.

## A considerar

CERT-UA recomienda mantener actualizados WinRAR, 7-Zip y Notepad++, ya que el mismo grupo ha aprovechado fallas conocidas en estas herramientas en campañas previas. También conviene revisar si algún equipo instaló recientemente complementos de Notepad++ que no provengan del repositorio oficial del proyecto.

## Impacto potencial

Un cargador como MATCHBOIL.V2 no roba datos por sí mismo: su función es abrir la puerta para instalar programas adicionales según lo decida el atacante, desde herramientas de espionaje hasta programas de acceso remoto. Para una organización, esto significa que un solo equipo comprometido por este método puede convertirse en punto de entrada para operaciones de espionaje sostenidas en el tiempo.
