---
title: "Falla de ocho años en equipos Samsung Galaxy daba acceso al núcleo del sistema — el parche existe desde enero pero millones de equipos no lo han aplicado"
date: "2026-06-23"
source: "SecurityWeek"
link: "https://www.securityweek.com/eight-year-old-samsung-knox-flaw-exposed-millions-of-galaxy-devices-to-kernel-attacks/"
categoria: "Vulnerabilidad"
ambito: "Mixto"
nivelAtencion: "Medio"
status: "En monitoreo"
resumen: "Investigadores descubrieron una falla que existió durante ocho años en el sistema de protección Knox de los teléfonos Samsung Galaxy — desde el S9 hasta el S25. La vulnerabilidad permitía que una aplicación maliciosa tomara control del núcleo del sistema. Samsung publicó el parche en la actualización de seguridad de enero de 2026. Equipos que no aplicaron esa actualización siguen expuestos."
expuestos: "Usuarios de Galaxy S9 a S25 y series A con procesadores Exynos o Qualcomm ejecutando Android 13, 14, 15 o 16 que no tienen instalada la actualización de seguridad de enero de 2026."
verificacion: "Si los equipos Samsung del equipo o de directivos tienen instalada la actualización de seguridad de enero de 2026 o posterior (Configuración → Acerca del teléfono → Información de software)."
impacto: "Una aplicación maliciosa instalada en el teléfono podría obtener control total del sistema operativo, accediendo a todos los datos, cuentas bancarias y comunicaciones del dispositivo."
grc_activo: "Dispositivos Samsung Galaxy del inventario organizacional y de directivos con acceso a sistemas corporativos."
grc_vector: "Aplicación maliciosa instalada en el dispositivo que explota una condición de carrera en el sistema de protección Knox para acceder a memoria del kernel."
grc_condicion: "Dispositivo Samsung Galaxy con versión Android 13-16 sin la actualización de seguridad de enero de 2026. No requiere interacción adicional del usuario más allá de tener la app instalada."
grc_explotacion: "poc_publica"
grc_alcance: "Galaxy S9 a S25 y series A con Exynos o Qualcomm corriendo Android 13-16 sin actualización de enero 2026."
grc_confianza: "alta"
publicacion: "published"
---

## Qué ocurrió

Investigadores de seguridad descubrieron una vulnerabilidad en Knox — el sistema de seguridad integrado en los teléfonos Samsung Galaxy — que había existido sin detectarse por ocho años. La falla, presente desde el modelo Galaxy S9, permitía que una aplicación maliciosa en el teléfono accediera a partes del sistema a las que normalmente no tiene permiso, con la posibilidad de tomar control completo del dispositivo. Samsung publicó el parche en su actualización de seguridad de enero de 2026.

## Quién está expuesto

Usuarios de Galaxy S9 a S25 — incluyendo las series A con procesadores Exynos y Qualcomm — ejecutando Android 13 o superior que no aplicaron la actualización de enero de 2026. Dado el volumen de equipos Samsung en uso en México — están entre los teléfonos más vendidos del país — la exposición potencial es amplia, especialmente en equipos corporativos que no tienen gestión centralizada de actualizaciones.

## Impacto potencial

Un teléfono sin el parche de enero, con una aplicación maliciosa instalada, puede quedar completamente bajo el control de un atacante: acceso a mensajes, correos, cuentas bancarias, cámara y todo lo que el usuario tiene almacenado o puede alcanzar desde ese dispositivo. El riesgo aplica tanto a personas como a quienes usan el teléfono para acceder a sistemas corporativos.
