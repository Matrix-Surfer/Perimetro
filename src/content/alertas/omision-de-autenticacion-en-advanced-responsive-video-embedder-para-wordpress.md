---
title: "Un plugin de WordPress para insertar videos tiene una puerta trasera oculta que permite tomar el control total del sitio sin contraseña"
date: "2026-08-03"
source: "INCIBE-CERT"
link: "https://www.incibe.es/incibe-cert/alerta-temprana/avisos/omision-de-autenticacion-en-advanced-responsive-video-embedder-para-wordpress"
categoria: "Vulnerabilidad"
ambito: "Mixto"
nivelAtencion: "Crítico"
status: "Activa"
resumen: "El plugin de WordPress 'Advanced Responsive Video Embedder', usado para insertar videos de YouTube, Vimeo y otras plataformas, contiene una puerta trasera codificada en su propio programa: un atacante que conoce el token secreto puede autenticarse como cualquier cuenta de administrador existente sin contraseña y tomar control total del sitio. La explotación ya está confirmada y no existe parche disponible; la recomendación es desinstalar el plugin."
expuestos: "Sitios de WordPress con el plugin Advanced Responsive Video Embedder instalado, en su versión 10.8.7 o anterior."
verificacion: "Confirmar si el sitio tiene instalado el plugin Advanced Responsive Video Embedder y, en tal caso, desinstalarlo de inmediato."
impacto: "Control administrativo total del sitio de WordPress, incluyendo capacidad de modificar contenido, instalar otros plugins maliciosos, o acceder a datos de usuarios registrados."
grc_activo: "Sitios de WordPress con el plugin Advanced Responsive Video Embedder instalado"
grc_vector: "CVE-2026-18072: puerta trasera codificada en la función '_arve_uc_init()' del plugin, que se ejecuta antes de cualquier verificación de identidad y permite a un atacante autenticarse como una cuenta de administrador existente usando un token conocido"
grc_condicion: "Tener instalado el plugin Advanced Responsive Video Embedder en la versión 10.8.7 o anterior"
grc_explotacion: "activa"
grc_alcance: "Todos los sitios de WordPress con este plugin instalado; no existe parche disponible"
grc_confianza: "alta"
publicacion: "published"
---

## Qué ocurrió

El plugin de WordPress "Advanced Responsive Video Embedder", usado para insertar videos de YouTube, Vimeo, Rumble y otras plataformas, contiene una puerta trasera codificada dentro de su propio programa. Una función del plugin se ejecuta automáticamente antes de cualquier verificación de identidad, y lee un token que el atacante puede enviar en la solicitud. Si el token coincide con el esperado, el atacante queda autenticado como una cuenta de administrador existente del sitio, sin necesidad de contraseña. La explotación de esta falla ya está confirmada y, hasta ahora, no existe una versión corregida disponible.

## Quién está expuesto

Sitios de WordPress con el plugin Advanced Responsive Video Embedder instalado, en la versión 10.8.7 o cualquier anterior.

## A considerar

Como no hay parche disponible, la única forma de eliminar el riesgo es desinstalar el plugin y buscar una alternativa. Si el sitio ya estuvo expuesto, conviene revisar si se crearon cuentas de administrador nuevas o si hubo cambios de contenido no autorizados, ya que la explotación ya se confirmó activa.

## Impacto potencial

Control administrativo total del sitio de WordPress, con capacidad de modificar contenido, instalar otros plugins maliciosos, o acceder a datos de usuarios registrados en el sitio.
