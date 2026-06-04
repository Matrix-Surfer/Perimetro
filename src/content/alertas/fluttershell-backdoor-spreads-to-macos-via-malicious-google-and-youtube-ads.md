---
title: "Anuncios en Google y YouTube distribuyen programa malicioso con acceso oculto en equipos Mac"
date: "2026-06-04"
source: "The Hacker News"
link: "https://thehackernews.com/2026/06/fluttershell-backdoor-spreads-to-macos.html"
categoria: "Malware"
ambito: "Mixto"
nivelAtencion: "Alto"
status: "Activa"
resumen: "Campaña activa usa anuncios en Google y YouTube para instalar un programa malicioso con acceso oculto en equipos Mac. El vector son los anuncios publicitarios, no correos sospechosos. Empresas con Macs deben verificar su política de descarga de software."
expuestos: "Usuarios de Mac que descargan software siguiendo anuncios en Google o YouTube."
verificacion: "Confirmar que los usuarios de Mac tienen instrucción de descargar software solo desde la App Store o sitios oficiales del fabricante, nunca desde anuncios."
impacto: "Un acceso oculto en un Mac de trabajo da control remoto del dispositivo: archivos, contraseñas, sesiones activas y acceso a sistemas corporativos."
grc_activo: "equipos Mac en uso corporativo"
grc_vector: "instalación de programa malicioso desde anuncios en buscadores y plataformas de video"
grc_condicion: "usuario descarga e instala software siguiendo un anuncio publicitario"
grc_explotacion: "activa"
grc_alcance: "usuarios de Mac que descargan software desde anuncios en Google o YouTube"
grc_confianza: "alta"
publicacion: "published"
---

## Qué ocurrió

Investigadores de Palo Alto Networks documentaron la operación FlutterShell: una campaña activa que usa anuncios en Google y YouTube para distribuir un programa malicioso diseñado para equipos Mac. El anuncio parece legítimo. El sitio al que lleva replica con exactitud la apariencia de un programa real. Al instalar lo descargado, el equipo queda con un acceso oculto que permite a los atacantes controlarlo de forma remota.

## Quién está expuesto

### Para personas

Usuarios de Mac que hacen clic en anuncios de software en Google o YouTube y descargan el programa ofrecido.

### Para organizaciones

Empresas con equipos Mac en uso cuyos empleados no tienen una política clara sobre dónde descargar software. Un Mac de trabajo comprometido puede dar acceso a sistemas corporativos y al correo de la empresa.

## Qué verificar

- Confirmar si hay equipos Mac en la organización.
- Verificar que los usuarios tienen instrucción de descargar software solo desde la App Store de Apple o sitios oficiales del fabricante — no desde anuncios.
- Si alguien descargó software recientemente siguiendo un anuncio en Google o YouTube, revisar ese equipo antes de continuar usándolo.

## Impacto potencial

Un acceso oculto en un Mac de trabajo da al atacante control total del dispositivo: archivos, contraseñas capturadas, correo corporativo, y acceso a los sistemas internos de la empresa. Los equipos Mac no son inmunes al programa malicioso. La creencia de que "los Mac no se infectan" es exactamente el supuesto que esta campaña explota.
