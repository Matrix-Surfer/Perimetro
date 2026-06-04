---
title: "Anuncios en Google y YouTube distribuyen programa malicioso con acceso oculto en equipos Mac"
date: "2026-06-04"
source: "The Hacker News"
link: "https://thehackernews.com/2026/06/fluttershell-backdoor-spreads-to-macos.html"
categoria: "Malware"
ambito: "Mixto"
nivelAtencion: "Medio"
status: "En monitoreo"
resumen: "Una campaña activa usa anuncios en Google y YouTube para distribuir un programa malicioso diseñado para equipos Mac. Al instalar lo que parece software legítimo, el equipo queda con un acceso oculto que permite al atacante controlarlo de forma remota. El vector son los anuncios publicitarios, no correos sospechosos."
expuestos: "Usuarios de equipos Mac que descargan software siguiendo anuncios en Google o YouTube."
verificacion: "Verificar que los usuarios de Mac tienen instrucción de descargar software solo desde la App Store o sitios oficiales del fabricante, nunca desde anuncios publicitarios."
impacto: "Un acceso oculto en un Mac de trabajo da control total del dispositivo: archivos, contraseñas, sesiones activas, y acceso a sistemas corporativos desde ese equipo."
grc_activo: "equipos macOS con capacidad de instalación de software"
grc_vector: "malvertising en plataformas publicitarias más instalador troyanizado"
grc_condicion: "usuario hace clic en anuncio e instala el programa ofrecido"
grc_explotacion: "activa"
grc_alcance: "usuarios de Mac que descargan software siguiendo anuncios en Google o YouTube"
grc_confianza: "alta"
publicacion: "published"
---

## Qué ocurrió

Investigadores de Palo Alto Networks documentaron la operación FlutterBridge, una campaña que usa anuncios en Google y YouTube para distribuir un programa malicioso diseñado específicamente para equipos Mac. El anuncio parece legítimo y lleva a un sitio que ofrece software real. Al instalarlo, el equipo queda con un acceso oculto (backdoor) que permite al grupo atacante controlarlo de forma remota desde cualquier ubicación.

## Quién está expuesto

### Personas

Usuarios de Mac que hacen clic en anuncios de software en Google o YouTube y descargan el programa ofrecido.

### Organizaciones

Empresas con equipos Mac en uso cuyos empleados no tienen una política clara sobre dónde descargar software. Un Mac de trabajo comprometido puede dar acceso a sistemas corporativos.

## Qué verificar

Confirmar si hay equipos Mac en la organización. Verificar que los usuarios tienen instrucción de descargar software solo desde la App Store de Apple o los sitios oficiales del fabricante —no desde anuncios. Si alguien descargó software recientemente siguiendo un anuncio en Google o YouTube, revisar ese equipo.

## Impacto potencial

Un acceso oculto en un Mac de trabajo da al atacante control total del dispositivo: acceso a archivos, captura de contraseñas, lectura de correo, y uso del equipo como punto de entrada a los sistemas internos de la empresa o servicios en la nube corporativos. Los equipos Mac ya no son inmunes al malware.
