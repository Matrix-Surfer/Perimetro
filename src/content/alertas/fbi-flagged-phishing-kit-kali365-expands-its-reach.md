---
title: "Kit de phishing Kali365, señalado por el FBI, expande sus objetivos a AWS, Okta y más plataformas"
date: "2026-06-02"
tipo: "Phishing"
categoria: "Phishing"
nivelAtencion: "Alto"
status: "Activa"
parche: "Desconocido"
explotacion: "Activa"
resumen: "La plataforma de phishing como servicio Kali365 amplió sus objetivos. Antes atacaba solo Microsoft 365; ahora también apunta a AWS, Okta y plataformas rusas. Usa 'device code phishing', una técnica que engaña al usuario para que autorice acceso desde un segundo dispositivo sin ingresar su contraseña."
source: "Dark Reading"
link: "https://www.darkreading.com/cyber-risk/fbi-flagged-phishing-kit-kali365-expands-its-reach"
publicacion: "published"
---

## Contexto

Kali365 es una plataforma de phishing como servicio —PhaaS: un kit que grupos criminales alquilan para robar credenciales corporativas—. El FBI la señaló previamente por atacar cuentas de Microsoft 365. Ahora se reporta su expansión hacia AWS, Okta y plataformas adicionales.

La técnica central es "device code phishing": el atacante envía un enlace que parece una solicitud de inicio de sesión legítima, pero en lugar de pedir contraseña, solicita al usuario que autorice acceso ingresando un código en la pantalla de su dispositivo. El usuario cree que está completando una autenticación normal. En realidad, está autorizando acceso permanente desde un dispositivo del atacante. El doble factor de autenticación tradicional no protege contra esta técnica.

## Impacto potencial

### Para personas

Cualquier empleado que use Microsoft 365, AWS o Okta para trabajo está en el perfil de objetivo. El phishing no necesita ser sofisticado para ser efectivo: basta un correo que parezca venir de IT solicitando "verificación de cuenta".

### Para organizaciones

La expansión de Kali365 a AWS y Okta es significativa: estas son plataformas de infraestructura crítica. Una credencial robada de AWS puede dar acceso a datos almacenados en la nube, sistemas de producción, o pipelines de despliegue. Una credencial de Okta puede ser el punto de entrada a todos los sistemas integrados bajo ese proveedor de identidad.

## Perspectiva GRC

El "device code phishing" es efectivo porque explota un flujo de autenticación legítimo —el mismo que usan las apps de dispositivos sin teclado como smart TVs—. No se puede bloquear simplemente. Requiere que los usuarios entiendan que nunca deben ingresar un código de dispositivo si no lo iniciaron ellos mismos.

## Recomendaciones

### Para personas

Si recibes un correo que te pide ingresar un código numérico en un sitio para "verificar tu cuenta" o "autorizar un dispositivo" que no reconoces, no lo hagas. Reporta el correo a tu área de TI o al proveedor del servicio. Ningún proceso legítimo de tu empresa requiere que autorices dispositivos desde correos no solicitados.

### Para organizaciones

Revisar si la plataforma de identidad usada (Microsoft 365, AWS, Okta) tiene configurada la restricción de flujos de "device code" para usuarios que no los necesitan. En la mayoría de los casos, ese flujo puede desactivarse para usuarios corporativos sin impacto operativo. Si no existe un proceso documentado de qué flujos de autenticación están habilitados y por qué, ese proceso es el primer control a implementar.

---

Los kits de phishing como servicio democratizan el ataque: cualquier actor con presupuesto mínimo puede lanzar una campaña sofisticada contra tu organización. La lección permanente: la autenticación multifactor es necesaria pero no suficiente. Algunos métodos de phishing están diseñados específicamente para eludirla. La defensa real combina controles técnicos restrictivos con usuarios que entienden qué deben y qué no deben autorizar.
