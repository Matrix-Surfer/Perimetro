---
title: "Kali365, kit de phishing señalado por el FBI, expande su objetivo hacia AWS, Okta y plataformas rusas"
date: "2026-06-03"
tipo: "Phishing"
status: "Activa"
resumen: "La plataforma de Phishing-as-a-Service Kali365 —marcada por el FBI— amplió sus objetivos más allá de Microsoft 365 para incluir AWS, Okta y plataformas rusas, usando la técnica de device code phishing para robar sesiones activas."
publicacion: "published"
---

## Contexto

Kali365 es una plataforma de Phishing-as-a-Service —PaaS criminal, donde los atacantes rentan un kit de herramientas para lanzar campañas de phishing sin necesidad de construirlas desde cero. Fue marcada por el FBI y reportada el 2 de junio de 2026 por Dark Reading con una expansión significativa de sus capacidades.

Originalmente diseñada para robar credenciales de Microsoft 365, Kali365 ahora apunta también a **Amazon Web Services (AWS)**, **Okta** —la plataforma de gestión de identidades corporativas más usada en el mundo— y plataformas de origen ruso.

La técnica central que usa es **device code phishing**: en lugar de pedir la contraseña directamente, el atacante engaña a la víctima para que autorice un dispositivo usando un código legítimo de Microsoft o del servicio objetivo. La víctima autentica sin darse cuenta que está entregando acceso a una sesión real. Esta técnica **elude la autenticación de dos factores** en muchos escenarios.

## Impacto potencial

### Para personas

Si recibes un correo, mensaje de Teams o Slack que te pide "verificar tu dispositivo" o "autorizar acceso" usando un código de seis dígitos, confirma directamente con el remitente antes de proceder. Este es el patrón exacto del device code phishing.

### Para organizaciones

La expansión hacia AWS y Okta es el punto crítico. Okta gestiona el acceso a docenas de aplicaciones corporativas desde una sola identidad. Un token de Okta comprometido puede otorgar acceso simultáneo a correo, CRM, ERP, recursos humanos y sistemas financieros.

Para organizaciones que usan AWS, el robo de credenciales puede derivar en:

- Acceso a bases de datos en la nube
- Consumo no autorizado de infraestructura (lo que genera costos directos)
- Exfiltración de datos almacenados en S3 o equivalentes

La técnica de device code phishing es especialmente peligrosa porque las soluciones de seguridad tradicionales —filtros de spam, antivirus— no la detectan: el flujo de autenticación es técnicamente legítimo.

## Perspectiva GRC

Kali365 siendo una plataforma de renta señala el estado actual del ecosistema criminal: el phishing ya no requiere conocimiento técnico. Cualquier persona puede rentar una campaña lista para lanzar en horas, contra objetivos empresariales, incluyendo plataformas de gestión de identidad.

La brecha de gobernanza que esto explota: **las organizaciones no tienen un proceso para detectar autorizaciones de dispositivos inusuales**. Okta, Microsoft 365 y AWS registran cada autorización en sus logs. Pero si nadie revisa esos logs con regularidad, el acceso comprometido puede pasar semanas sin detectarse.

## Recomendaciones

### Para personas

- Si recibes una solicitud para autorizar un dispositivo mediante un código numérico y no lo iniciaste tú mismo, cancela y reporta a tu área de seguridad o al administrador del sistema.
- El device code phishing llega por correo, pero también por mensajes de chat, LinkedIn y SMS. No basta con desconfiar del correo.

### Para organizaciones

La pregunta que debes poder responder hoy: ¿quién en tu organización revisa los logs de autorizaciones de dispositivos en Okta, Microsoft 365 o AWS, y con qué frecuencia?

- Configura alertas en tu plataforma de identidades para detectar autorizaciones de dispositivos desde ubicaciones o navegadores inusuales.
- Si usas Okta: revisa las políticas de "Device Trust" y considera restringir el flujo de device code para usuarios que no necesitan esa modalidad de acceso.
- Capacita al equipo de trabajo sobre la apariencia del device code phishing: la solicitud parece legítima porque técnicamente lo es. El ataque está en el contexto, no en el enlace.

---

El phishing ya no intenta robar tu contraseña. Intenta convencerte de que entregues el acceso tú mismo. La diferencia entre un flujo legítimo de autorización y un ataque de device code es únicamente el contexto: ¿iniciaste tú esta solicitud? Si la respuesta no es un sí rotundo, la respuesta es no.
