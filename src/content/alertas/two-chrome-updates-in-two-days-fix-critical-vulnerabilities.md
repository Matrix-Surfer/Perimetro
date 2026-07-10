---
title: "Google corrige dos fallas críticas en Chrome que permitirían tomar control del navegador"
date: "2026-07-10"
source: "Malwarebytes Labs"
link: "https://www.malwarebytes.com/blog/news/2026/07/two-chrome-updates-in-two-days-fix-critical-vulnerabilities"
categoria: "Vulnerabilidad"
ambito: "Mixto"
nivelAtencion: "Medio"
status: "En monitoreo"
resumen: "Google corrigió 27 fallas de seguridad en Chrome, incluidas dos críticas que podrían permitir tomar control del navegador. No hay explotación activa confirmada, pero la actualización ya está disponible y conviene aplicarla de inmediato."
expuestos: "Cualquier persona u organización que use Google Chrome."
verificacion: "Confirmar que Chrome esté actualizado a la versión 150.0.7871.114 o superior (menú de Chrome > Configuración > Acerca de Chrome)."
impacto: "Toma de control del navegador y acceso a sesiones activas o datos que la víctima esté manejando en ese momento."
grc_activo: "Navegador Google Chrome (Windows, macOS, Linux)"
grc_vector: "Dos fallas críticas de tipo 'use-after-free' (uso de memoria después de liberada)"
grc_condicion: "Usar una versión de Chrome anterior a 150.0.7871.114/.115"
grc_explotacion: "investigacion"
grc_alcance: "Cualquier persona u organización que use Google Chrome"
grc_confianza: "alta"
publicacion: "published"
---

## Qué ocurrió

Google lanzó dos actualizaciones de Chrome en días consecutivos para corregir un total de 27 fallas de seguridad, incluidas dos críticas de tipo "use-after-free" (un error de memoria que un atacante puede aprovechar para tomar control del navegador). Google no ha reportado que alguna de estas fallas esté siendo explotada activamente. Las versiones que corrigen el problema son 150.0.7871.114/.115 en Windows y macOS, y 150.0.7871.114 en Linux.

## Quién está expuesto

### Para personas

Cualquier persona que use Google Chrome en computadora.

### Para organizaciones

Cualquier negocio cuyos equipos de trabajo usen Chrome como navegador principal.

## Impacto potencial

Un atacante que aproveche estas fallas podría tomar control del navegador y, desde ahí, acceder a lo que la víctima esté haciendo en ese momento: sesiones abiertas, formularios, datos de pago.
