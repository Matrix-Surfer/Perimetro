---
title: "Una IA descubrió 21 vulnerabilidades nuevas en la biblioteca que procesa video en casi cualquier aplicación y navegador"
date: "2026-06-06"
source: "The Hacker News"
link: "https://thehackernews.com/2026/06/ai-agent-uncovers-21-zero-days-in.html"
categoria: "Vulnerabilidad"
ambito: "Mixto"
nivelAtencion: "Medio"
status: "En monitoreo"
resumen: "Un agente de inteligencia artificial autónomo descubrió 21 vulnerabilidades previamente desconocidas en FFmpeg, la biblioteca de procesamiento multimedia integrada en la mayoría de reproductores, navegadores y aplicaciones de video. Las fallas no han sido explotadas activamente, pero su amplia presencia en el ecosistema de software las convierte en objetivo prioritario. Las organizaciones que desarrollan software con FFmpeg deben monitorear la publicación de parches."
expuestos: "Organizaciones que desarrollan software con FFmpeg como dependencia; usuarios de aplicaciones de video, reproductores multimedia y navegadores que aún no hayan aplicado correcciones."
verificacion: "Confirmar si las aplicaciones de producción de la organización integran FFmpeg y si el proveedor ha publicado parches para las versiones afectadas."
impacto: "Un archivo multimedia malicioso podría ejecutar código en el dispositivo de quien lo procese sin que el usuario haga nada más que abrirlo."
grc_activo: "FFmpeg — biblioteca de procesamiento multimedia integrada en reproductores, navegadores, plataformas de streaming y herramientas de edición de video"
grc_vector: "21 vulnerabilidades de memoria descubiertas por agente de IA; aún sin explotación activa conocida"
grc_condicion: "El atacante debe poder hacer que el dispositivo objetivo procese un archivo multimedia malicioso"
grc_explotacion: "poc_publica"
grc_alcance: "Aplicaciones que integran FFmpeg: reproductores multimedia, navegadores, plataformas de streaming, herramientas de edición de video"
grc_confianza: "alta"
publicacion: "published"
---

## Qué ocurrió

Un agente de inteligencia artificial desarrollado por una startup de seguridad encontró 21 vulnerabilidades hasta ahora desconocidas en FFmpeg, la biblioteca que procesa video y audio en casi toda aplicación que maneja contenido multimedia: reproductores, navegadores, plataformas de streaming y herramientas de edición. Ninguna ha sido explotada de forma conocida, pero el hallazgo fue suficiente para que los mantenedores de FFmpeg iniciaran el proceso de corrección. La misma semana, Chrome publicó correcciones para 429 fallas de seguridad, la cifra más alta en una sola versión.

## Quién está expuesto

### Para organizaciones

Las que desarrollan o distribuyen software que integra FFmpeg, ya sea directamente o como dependencia de otra biblioteca. Si ese software llega a usuarios finales, cualquier retraso en aplicar los parches traslada el riesgo a los propios clientes de la organización.

### Para personas

Quienes usan reproductores multimedia, aplicaciones de edición de video o servicios de streaming que integran FFmpeg. El riesgo concreto depende de que los proveedores publiquen las correcciones y de que los usuarios las instalen.

## A considerar

Este hallazgo fue posible porque una IA analizó FFmpeg a escala y velocidad que ningún equipo humano puede igualar. Lo que hoy hizo un equipo de investigación legítimo puede hacerse con intención ofensiva. El tiempo entre el descubrimiento de una vulnerabilidad y su explotación se está comprimiendo — la ventana para aplicar correcciones es cada vez más corta.

## Impacto potencial

Un archivo multimedia malicioso — video, audio o imagen — podría ejecutar código en el dispositivo de quien lo procese, sin que el usuario haga nada más que abrirlo. FFmpeg corre dentro de muchas aplicaciones sin que el usuario final lo sepa ni pueda controlarlo directamente.
