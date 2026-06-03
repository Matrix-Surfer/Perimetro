---
title: "Los infostealers se convierten en el método de robo preferido en campañas de phishing"
date: "2026-06-03"
tipo: "Phishing"
categoria: "Phishing"
nivelAtencion: "Alto"
status: "Activa"
parche: "Desconocido"
explotacion: "Activa"
resumen: "Los ciberdelincuentes reemplazan el phishing tradicional con infostealers: malware especializado en robar contraseñas, sesiones de navegador y tokens de autenticación guardados en el dispositivo. Son más efectivos que las páginas de login falsas porque cosechan todo lo que está almacenado localmente, no solo lo que el usuario escribe."
source: "Malwarebytes Labs"
link: "https://www.malwarebytes.com/blog/threat-intel/2026/06/infostealers-are-becoming-the-go-to-phishing-payload"
publicacion: "published"
---

## Contexto

Malwarebytes Labs reporta un cambio en la estrategia de los ciberdelincuentes: en lugar de crear páginas de inicio de sesión falsas para capturar contraseñas, ahora prefieren distribuir infostealers —malware especializado en extraer todo lo que hay en el dispositivo: contraseñas guardadas en el navegador, cookies de sesión activas, tokens de autenticación, y datos de autocompletado—.

La ventaja para el atacante es clara: un infostealer no necesita que el usuario escriba su contraseña. La toma directamente de donde Chrome, Firefox o Edge la tienen almacenada. Si el usuario tiene sesiones activas en servicios corporativos, las sesiones se roban completas, sin necesidad de contraseña ni doble factor.

Son ampliamente disponibles como malware como servicio en foros clandestinos.

## Impacto potencial

### Para personas

Cualquier persona que guarda contraseñas en su navegador o mantiene sesiones activas en servicios de trabajo está en riesgo. Un infostealer instalado en el dispositivo vacía todo lo almacenado en segundos, sin que el usuario note nada.

### Para organizaciones

El impacto organizacional es más amplio que el phishing tradicional: el atacante obtiene no solo una credencial, sino todas las credenciales y sesiones activas del empleado. Esto incluye accesos a sistemas internos, plataformas SaaS, y cualquier servicio donde el navegador recuerde la sesión.

## Perspectiva GRC

Los controles de doble factor de autenticación no protegen completamente contra infostealers. Si el atacante roba una cookie de sesión activa, ya pasó la autenticación. La defensa requiere reducir el tiempo de vida de las sesiones y no almacenar credenciales en navegadores no gestionados.

La pregunta de gobernanza: ¿tu organización tiene una política sobre qué dispositivos pueden almacenar credenciales de acceso corporativo?

## Recomendaciones

### Para personas

No guardar contraseñas del trabajo en el navegador de un dispositivo personal. Usar un gestor de contraseñas dedicado (no el del navegador). Cerrar sesión en servicios de trabajo cuando termines, en lugar de mantener sesiones activas indefinidamente.

### Para organizaciones

Revisar si los dispositivos corporativos tienen políticas que limiten el almacenamiento de contraseñas en navegadores. Evaluar si los tokens de sesión de sistemas críticos tienen tiempo de expiración corto. Considerar soluciones de protección de endpoint que detecten comportamiento de infostealer, dado que el antivirus tradicional no siempre los captura.

---

La evolución del phishing no es más sofisticada en técnica: es más eficiente en resultado. Un infostealer cosecha credenciales pasadas, presentes y futuras en un solo golpe. La lección permanente: la autenticación fuerte protege el inicio de sesión, no las credenciales que ya están almacenadas. La higiene de credenciales —no guardarlas en dispositivos no seguros, no mantener sesiones eternas— es la defensa que los controles técnicos no pueden reemplazar.
