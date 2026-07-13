---
title: "Un kit de phishing rentado por 400 dólares al mes toma el control de cuentas de Microsoft 365 usando pantallas reales de Microsoft"
date: "2026-07-13"
source: "The Hacker News"
link: "https://thehackernews.com/2026/07/forg365-phaas-targets-microsoft-365.html"
categoria: "Phishing"
ambito: "Organizaciones"
nivelAtencion: "Alto"
status: "Activa"
resumen: "Un servicio de phishing por suscripción, distribuido en Telegram por 400 dólares al mes, permite a cualquiera montar campañas que roban el acceso a cuentas de Microsoft 365. La técnica usa las pantallas reales de inicio de sesión de Microsoft, por lo que el engaño es difícil de detectar a simple vista. Las organizaciones que usan Microsoft 365 deben revisar accesos recientes y restringir el método de verificación que este servicio aprovecha."
expuestos: "Organizaciones y empleados que usan cuentas de Microsoft 365 para correo y documentos."
verificacion: "Revisar en el panel de administración de Microsoft 365 si hubo inicios de sesión mediante código de verificación desde dispositivos o ubicaciones no reconocidas, y confirmar si esa forma de acceso está permitida en la organización."
impacto: "Un atacante que obtiene el acceso puede leer y reenviar correo, crear reglas de reenvío ocultas, y usar la cuenta para engañar a proveedores o clientes."
grc_activo: "Cuentas de Microsoft 365 (correo y documentos corporativos)."
grc_vector: "Servicio de phishing por suscripción que combina páginas reales de inicio de sesión de Microsoft con un método de verificación por código para robar el acceso a la cuenta sin necesitar la contraseña."
grc_condicion: "La víctima debe ingresar el código de verificación que le muestra el atacante, generalmente tras recibir un correo o mensaje que simula ser de Microsoft."
grc_alcance: "Cualquier organización que use Microsoft 365, distribuido a través de un servicio disponible por suscripción."
publicacion: "published"
---

## Qué ocurrió

Se identificó un servicio de phishing que se renta por suscripción, 400 dólares al mes, y se distribuye a través de Telegram, dirigido a robar el acceso a cuentas de Microsoft 365. En vez de imitar la pantalla de inicio de sesión, el engaño enruta a la víctima por el proceso real de verificación de Microsoft y le pide ingresar un código de acceso temporal. Ese código lo genera el atacante, y al ingresarlo la víctima le entrega, sin saberlo, una sesión activa en su propia cuenta. El servicio también evade filtros automatizados: detecta si quien visita el enlace usa una VPN o parece un sistema de análisis, y en ese caso muestra contenido inofensivo en vez del engaño. Además, incluye una extensión de navegador que mantiene el acceso activo aunque la víctima cambie su contraseña.

## Quién está expuesto

Organizaciones que usan Microsoft 365 para correo y documentos, en particular si permiten el inicio de sesión mediante código de verificación sin restricciones adicionales.

## A considerar

Este servicio existe para ser usado por cualquiera que pague la suscripción, no por un solo grupo de atacantes, así que puede aparecer en forma de campañas distintas y sin relación aparente entre sí. Restringir o desactivar el inicio de sesión por código de verificación, cuando no es indispensable, elimina la vía que este servicio aprovecha.

## Impacto potencial

Con el acceso a la cuenta, un atacante puede leer el correo, configurar reglas de reenvío ocultas, y usar la cuenta real de un empleado para engañar a proveedores, clientes o compañeros de trabajo, lo que es mucho más difícil de detectar que un correo de phishing tradicional.
