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

Una cuenta de Microsoft 365 comprometida entrega al atacante acceso inmediato a:

- Correo corporativo, historial y libreta de contactos
- Conversaciones y archivos compartidos en Microsoft Teams
- Documentos en SharePoint y OneDrive
- La capacidad de enviar correos desde una dirección real de la empresa para atacar clientes, proveedores o socios

Para una empresa que opera en Microsoft 365, una sola cuenta comprometida puede escalar a fraude financiero, fuga de información contractual o campañas de phishing contra toda la cadena de contactos del negocio.

## Recomendaciones

- **Bloquear el flujo de código de dispositivo:** a menos que exista una necesidad operativa específica y documentada, este mecanismo debe deshabilitarse en el panel de administración de Microsoft 365 mediante Políticas de Acceso Condicional —reglas que definen qué métodos de autenticación se permiten y desde qué contextos—. La mayoría de las empresas no necesitan tenerlo activo.
- **Activar alertas de inicio de sesión inusual:** Azure Active Directory permite configurar notificaciones automáticas cuando se detectan sesiones desde ubicaciones nuevas, dispositivos desconocidos o flujos de autenticación poco habituales.
- **Capacitar con un caso concreto:** ningún proceso legítimo de Microsoft requiere que un empleado ingrese en una página un código generado en otro dispositivo o recibido por correo. Si alguien recibe ese tipo de instrucción, es un ataque, independientemente de que la URL parezca oficial.
- **Auditar sesiones activas:** si hay sospecha de compromiso, verificar en el portal de administración de Microsoft 365 las sesiones activas y revocar los tokens de acceso de las cuentas potencialmente afectadas.
