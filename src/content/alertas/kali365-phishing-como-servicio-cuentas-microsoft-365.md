---
title: "Kali365: servicio de phishing industrial apunta a cuentas Microsoft 365 de empresas"
date: "2026-05-25"
tipo: "Phishing"
status: "Activa"
resumen: "El FBI advierte sobre Kali365, una plataforma que vende capacidad de ataque de phishing a terceros y usa el mecanismo de autenticación OAuth de Microsoft para robar sesiones activas y eludir la verificación en dos pasos. Cualquier empresa que use Microsoft 365 está en el radio de acción."
source: "BleepingComputer"
link: "https://www.bleepingcomputer.com/news/security/fbi-warns-of-kali365-phishing-service-targeting-microsoft-365-accounts/"
publicacion: "published"
---

## Contexto

El FBI emitió una advertencia formal. Kali365 es una plataforma que vende capacidad de ataque a otros delincuentes. Sin conocimientos técnicos. Sin infraestructura propia. Solo pagan y atacan.

El método es difícil de detectar. Abusa del flujo de autenticación OAuth por código de dispositivo. Es un mecanismo que Microsoft creó para equipos sin navegador: televisores inteligentes, impresoras en red. Legítimo por diseño.

El ataque funciona así. El operador genera un código válido desde la propia infraestructura de Microsoft. Envía un correo al empleado objetivo. Le pide visitar una URL auténtica de Microsoft. No una página falsa. Una página real. El empleado ingresa el código. Cree que completa una verificación de seguridad. No lo es. Acaba de autorizar la sesión del atacante.

El resultado: un token de acceso en manos del delincuente. Una credencial digital que opera la cuenta sin contraseña.

## Impacto potencial

La verificación en dos pasos no lo detiene. El empleado es quien hace la autenticación. Voluntariamente. El segundo factor queda satisfecho. El atacante entra igual.

El riesgo más directo: **fraude por desvío de pagos**. El atacante monitorea conversaciones de facturación activas. Intercepta una transferencia. Redirige los fondos. Nadie lo nota hasta que el dinero ya salió. Es uno de los fraudes más difíciles de revertir.

El segundo riesgo es contractual. El atacante opera desde el correo real de la empresa. Puede engañar a clientes. Puede filtrar contratos. Puede atacar a proveedores en nombre de la organización. Eso no es un incidente técnico. Es un evento legal.

Si el acceso alcanza nóminas, contratos o datos de empleados, se activan **obligaciones de notificación** ante reguladores.

## Recomendaciones

- **Solicitar a TI la desactivación del flujo de autenticación por código de dispositivo.** No debe estar activo salvo necesidad documentada. La mayoría de las empresas no lo necesitan. Se controla con Políticas de Acceso Condicional: reglas que definen qué métodos de autenticación se permiten y desde dónde.
- **Activar alertas de inicio de sesión inusual.** Azure Active Directory notifica cuando una cuenta entra desde una ubicación nueva, un dispositivo desconocido o un método poco habitual.
- **Establecer una regla con el equipo.** Ningún proceso legítimo de Microsoft pide ingresar un código recibido por correo. Si alguien recibe esa instrucción, es un ataque. Aunque la URL parezca oficial.
- **Pregunta de gobierno para TI:** ¿Qué métodos de autenticación están activos en nuestras cuentas de Microsoft 365? ¿Cuándo se auditaron por última vez?
