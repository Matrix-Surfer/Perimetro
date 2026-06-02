---
title: "Alertas falsas de virus en juegos móviles distribuyen malware"
date: "2026-06-02"
categoria: "Malware"
nivelAtencion: "Medio"
status: "Activa"
parche: "Desconocido"
explotacion: "No confirmado"
resumen: "Anuncios dentro de juegos móviles están mostrando alertas falsas de infección que simulan ser avisos del sistema operativo. El objetivo es asustar al usuario para que instale una supuesta solución que en realidad es malware —software malicioso— capaz de robar datos o comprometer el dispositivo."
source: "Malwarebytes Labs"
link: "https://www.malwarebytes.com/blog/mobile/2026/06/fake-virus-alerts-are-invading-mobile-games"
publicacion: "published"
---

## Contexto

Malwarebytes documentó una campaña activa donde anuncios dentro de juegos móviles muestran mensajes de advertencia que imitan las notificaciones reales del sistema operativo: "¡Tu dispositivo está infectado!", "Se detectaron amenazas", "Actualiza ahora para protegerte". Al tocar el anuncio, el usuario es redirigido a una página que lo induce a descargar una aplicación maliciosa disfrazada de herramienta de seguridad. Esta técnica —llamada scareware— explota el miedo como mecanismo de ingeniería social: el usuario actúa rápido sin verificar si la alerta es real.

## Por qué importa

Los juegos móviles son una de las categorías de apps más usadas en México en todos los rangos de edad. La misma táctica aplica en cualquier app con publicidad de terceros. El vector no es una app maliciosa descargada directamente: es un anuncio dentro de una app legítima que lleva al usuario a instalar algo dañino. Los filtros del Play Store no siempre capturan este tipo de campaña porque el anuncio llega de redes publicitarias externas.

## Impacto potencial

### Para personas

Si el usuario instala la app maliciosa: acceso a contactos, fotos, mensajes, cuentas almacenadas en el dispositivo, y en algunos casos acceso a la cámara y micrófono. En dispositivos donde se accede a banca en línea, el riesgo incluye robo de credenciales financieras.

### Para organizaciones

Si el dispositivo comprometido tiene acceso a correo corporativo o sistemas de la empresa, el malware puede acceder a esa información. El riesgo es mayor en empresas con políticas BYOD donde los empleados usan sus teléfonos personales para trabajo.

## Recomendaciones

### Para personas

Regla práctica: ninguna app de juego ni anuncio dentro de un juego puede detectar un virus en tu teléfono. Si ves una alerta de virus dentro de un juego, es falsa. Cierra el juego. No toques el anuncio ni instales nada. Si ya instalaste algo a través de este mecanismo, desinstala la app de inmediato y revisa las apps con acceso a tu ubicación, contactos y cámara en la configuración de tu teléfono.

### Para organizaciones

Comunicar a los empleados que ninguna alerta de virus legítima aparece dentro de un juego móvil. Incluir este escenario en la próxima capacitación de concienciación en seguridad. Para empresas con BYOD, considerar una política que limite qué apps pueden instalarse en dispositivos con acceso a recursos corporativos.

## Pregunta diagnóstica

¿Tiene la empresa alguna política sobre qué tipo de aplicaciones pueden instalarse en dispositivos con acceso al correo o sistemas corporativos?
