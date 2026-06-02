---
title: "Nueva oleada de phishing usa archivos SVG para evadir filtros de correo"
date: "2026-06-02"
categoria: "Phishing"
nivelAtencion: "Medio"
status: "En monitoreo"
parche: "Desconocido"
explotacion: "No confirmado"
resumen: "El SANS Internet Storm Center detectó una campaña activa de phishing que distribuye archivos SVG —formato de imagen vectorial— adjuntos en correos, en lugar de incluir enlaces directos. La técnica evade los filtros de correo que escanean URLs, y al abrir el archivo, ejecuta código malicioso o redirige a páginas de robo de credenciales."
source: "SANS Internet Storm Center"
link: "https://isc.sans.edu/diary/rss/33040"
publicacion: "published"
---

## Contexto

El SANS Internet Storm Center reporta que en los últimos días los correos de phishing están llegando sin URLs en el cuerpo del mensaje, sino con archivos SVG adjuntos. Un SVG —Scalable Vector Graphics— es un formato de imagen vectorial que los navegadores pueden renderizar, pero que también puede contener código ejecutable (JavaScript). Al adjuntar el SVG en lugar de un enlace, el correo llega como "imagen", evadiendo los filtros que escanean URLs maliciosas. Al abrir el archivo, el navegador ejecuta el código incrustado, que puede redirigir al usuario a una página de phishing o ejecutar código directamente.

## Por qué importa

Los filtros de correo empresariales están diseñados para detectar URLs maliciosas y archivos ejecutables obvios. Los archivos SVG no son ejecutables en el sentido tradicional, por lo que muchos filtros los dejan pasar. Esta campaña es una señal de adaptación activa de los atacantes a las defensas existentes. No es una técnica teórica: está siendo usada en este momento, según el SANS ISC.

## Impacto potencial

### Para personas

Si se abre el archivo SVG y el código se ejecuta, el usuario puede ser redirigido a una página que imita un servicio conocido (Microsoft 365, Google, banco) y solicita sus credenciales. Robo de credenciales corporativas o personales es el resultado más probable.

### Para organizaciones

Una cuenta corporativa comprometida a través de phishing permite al atacante acceder al correo, documentos internos, herramientas de comunicación y en algunos casos sistemas de negocio. El costo de respuesta a un incidente de phishing exitoso incluye tiempo de investigación, posible notificación a clientes si se compromete información de terceros, y en el peor caso, fraude financiero.

## Recomendaciones

### Para personas

No abras archivos SVG adjuntos en correos que no esperabas recibir, especialmente si el remitente es desconocido o el mensaje crea urgencia. Si el correo parece venir de un servicio que usas (tu banco, Microsoft, Google), entra al servicio directamente desde el navegador, no desde el correo.

### Para organizaciones

Solicitar a TI que verifique si los filtros de correo actuales bloquean o inspeccionan archivos SVG adjuntos. Si no lo hacen, configurar una regla que ponga en cuarentena correos con archivos SVG de remitentes externos hasta que se confirme su legitimidad. Incluir en la próxima comunicación de seguridad a empleados: archivos SVG adjuntos en correos inesperados son una nueva táctica de phishing activa.

## Pregunta diagnóstica

¿Bloquea o inspecciona tu sistema de filtrado de correo los archivos SVG adjuntos provenientes de remitentes externos?
