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

El FBI emitió una advertencia formal sobre Kali365, una plataforma de phishing-as-a-service (PhaaS) —es decir, un servicio que alquila infraestructura de ataque a otros delincuentes sin que necesiten conocimientos técnicos— diseñada específicamente para comprometer cuentas de Microsoft 365 corporativas.

El método que usa es técnicamente sofisticado y difícil de detectar: abusa del flujo de autenticación OAuth por código de dispositivo, un mecanismo legítimo que Microsoft creó para que equipos sin navegador —como televisores inteligentes o impresoras en red— puedan autenticarse en servicios corporativos.

El ataque funciona así: el operador de Kali365 genera un código de dispositivo válido desde la propia infraestructura de Microsoft y envía un correo de phishing al empleado objetivo. El correo le pide que visite una URL auténtica de Microsoft —no una página falsa— e ingrese ese código para "verificar" su cuenta. La víctima cree que completa un proceso normal de seguridad; en realidad, acaba de autorizar la sesión del atacante.

El resultado es un token de acceso —una credencial digital temporal que permite operar la cuenta sin contraseña— en manos del delincuente.

## Impacto potencial

El problema más grave de este vector es que **la verificación en dos pasos (MFA) no lo detiene**. Como es la propia víctima quien realiza la autenticación voluntariamente, el segundo factor queda satisfecho de forma legítima. Un empleado bien entrenado para no entregar contraseñas puede caer igual.

Desde el correo corporativo comprometido, el riesgo más directo es el **fraude por desvío de pagos**: el atacante puede monitorear conversaciones de facturación activas e interceptar una transferencia, redirigiendo los fondos a una cuenta bajo su control sin que ninguna de las partes lo note hasta que es tarde. Es uno de los fraudes más comunes y más difíciles de revertir.

El segundo riesgo es la **responsabilidad contractual y reputacional**. Un atacante que opera desde una dirección de correo legítima de la empresa puede engañar a clientes o proveedores, filtrar información confidencial de contratos o lanzar ataques en nombre de la organización. Eso no es solo un incidente técnico — es un evento con consecuencias legales y de confianza que la empresa debe responder.

Por último, si el acceso alcanza datos personales de empleados o clientes —nóminas, contratos, archivos de recursos humanos— puede activar **obligaciones de notificación por brecha de datos** ante las autoridades correspondientes.

## Recomendaciones

- **Solicitar a TI la desactivación del flujo de autenticación por código de dispositivo** en el panel de administración de Microsoft 365, a menos que haya una necesidad operativa documentada. La mayoría de las empresas no lo necesitan activo. El mecanismo se controla mediante Políticas de Acceso Condicional —reglas que definen qué métodos de autenticación se permiten y desde qué contextos.
- **Solicitar que se activen alertas de inicio de sesión inusual:** Azure Active Directory puede notificar cuando una cuenta inicia sesión desde una ubicación nueva, un dispositivo desconocido o usando un método de autenticación poco habitual.
- **Establecer una regla clara con el equipo:** ningún proceso legítimo de Microsoft pide que un empleado ingrese en una página un código recibido por correo. Si alguien recibe esa instrucción, es un ataque. Esto aplica aunque la URL parezca oficial.
- **Pregunta de gobierno para revisar con TI:** ¿Podemos ver un inventario de los métodos de autenticación activos en nuestras cuentas de Microsoft 365 y cuándo fue la última vez que se auditaron?
