---
title: "Paquete malicioso en npm roba tokens de acceso de OpenAI Codex — 29,000 descargas semanales"
date: "2026-06-01"
categoria: "Terceros"
nivelAtencion: "Medio"
status: "En monitoreo"
parche: "Desconocido"
explotacion: "Activa"
resumen: "Un paquete malicioso llamado 'codexui-android' fue publicado en npm haciéndose pasar por una interfaz legítima para OpenAI Codex. Con 29,000 descargas semanales, el paquete roba los tokens de acceso de los desarrolladores que lo instalan. Sigue disponible para descarga."
source: "The Hacker News"
link: "https://thehackernews.com/2026/06/openai-codex-authentication-tokens.html"
publicacion: "published"
---

## Contexto

Investigadores de seguridad descubrieron un paquete malicioso en npm (el repositorio de componentes de software más usado por desarrolladores de JavaScript) llamado "codexui-android". El paquete se presenta como una interfaz gráfica para OpenAI Codex — la herramienta de IA (inteligencia artificial) de OpenAI para asistencia en escritura de código — y tiene más de 29,000 descargas semanales, lo que indica que muchos desarrolladores ya lo tienen instalado. Lo que el paquete hace en realidad es robar los tokens de acceso a la API de OpenAI del desarrollador. Con ese token, el atacante puede usar los servicios de OpenAI a expensas del afectado y potencialmente acceder a otros recursos vinculados.

## Por qué importa

- El paquete sigue disponible en el repositorio — cualquier desarrollador que lo instale hoy sigue expuesto.
- Los tokens de API robados representan acceso real: el atacante puede usar la cuenta de OpenAI de la víctima para generar costos o acceder a datos.
- El volumen de descargas (29,000 semanales) sugiere que el impacto ya alcanzó a muchos desarrolladores antes de la detección.

## Impacto potencial

### Para personas

- Si instalaste "codexui-android" como interfaz para OpenAI Codex, tus tokens de API pueden estar comprometidos.
- Señal de alerta: actividad inusual o cargos inesperados en tu cuenta de OpenAI, o usos de API que no reconoces.

### Para organizaciones

- Si el equipo de desarrollo usa Codex con tokens corporativos de OpenAI y tiene este paquete instalado, esos tokens pueden haber sido robados.
- Un token de API corporativo comprometido puede generar costos inesperados, acceso a prompts enviados a la API, o movimiento lateral hacia otros sistemas si el token tiene acceso más amplio.

## Recomendaciones

### Para personas

- Si usas npm en tu entorno de desarrollo, verifica si tienes "codexui-android" instalado: `npm list -g codexui-android` o busca en tus dependencias.
- Si lo tienes instalado, desinstálalo y rota tus tokens de API de OpenAI desde el panel de configuración de tu cuenta.

### Para organizaciones

**Gestión**
- Informar al equipo de desarrollo sobre este paquete y solicitar verificación de si está instalado en entornos de trabajo.
- Si se confirma la instalación, revocar y regenerar los tokens de API de OpenAI usados en esos entornos.

**Técnicas**
- Revisar las dependencias de proyectos activos buscando "codexui-android".
- Considerar agregar revisión de nuevos paquetes de fuentes desconocidas como paso en el proceso de desarrollo.
- Si no tienes equipo de TI: consultar con tu desarrollador o proveedor técnico si utilizan este paquete.

## Pregunta diagnóstica

¿Sabe qué herramientas usan sus desarrolladores y quién es responsable de verificar que no estén comprometidas?
