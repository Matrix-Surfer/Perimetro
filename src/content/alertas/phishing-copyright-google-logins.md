---
title: "Avisos falsos de violación de derechos de autor engañan a desarrolladores de Chrome para robar sus cuentas de Google"
date: "2026-06-03"
tipo: "Phishing"
status: "Activa"
resumen: "Una campaña activa de phishing usa notificaciones falsas de violación de copyright con temporizadores de cuenta regresiva y pantallas de inicio de sesión falsas para robar credenciales de Google de desarrolladores que publican extensiones en la Chrome Web Store."
publicacion: "published"
---

## Contexto

Malwarebytes Labs reportó el 2 de junio de 2026 una campaña de phishing dirigida específicamente a desarrolladores de extensiones para Chrome. El ataque usa un aviso de apariencia oficial que notifica al desarrollador sobre una supuesta violación de derechos de autor en su extensión publicada.

El aviso incluye un temporizador de cuenta regresiva que simula urgencia: si el desarrollador no responde en el tiempo indicado, su extensión será removida y su cuenta suspendida. Al hacer clic en el botón de respuesta, se presenta una pantalla de inicio de sesión falsificada de Google que captura las credenciales.

El objetivo final es obtener acceso a la cuenta de Google del desarrollador, que incluye el acceso a la Chrome Web Store y, en muchos casos, a los repositorios y sistemas relacionados. Con ese acceso, un atacante puede publicar actualizaciones maliciosas de la extensión —que serán distribuidas automáticamente a todos sus usuarios.

## Impacto potencial

### Para personas

Si usas extensiones de Chrome publicadas por desarrolladores individuales o equipos pequeños, un atacante que comprometa la cuenta del desarrollador puede empujar una actualización maliciosa de esa extensión a tu navegador de forma transparente. La extensión comprometida puede robar contraseñas, interceptar sesiones o monitorear lo que escribes.

### Para organizaciones

Si algún miembro de tu equipo desarrolla herramientas o extensiones de Chrome —incluso para uso interno— y su cuenta de Google es comprometida por esta campaña:

- El atacante puede modificar extensiones publicadas y distribuir malware a todos los usuarios que las tengan instaladas.
- Si esa cuenta de Google también se usa para Gmail corporativo, Drive, Google Workspace u otras plataformas empresariales, el radio de daño se multiplica.

## Perspectiva GRC

Este ataque combina tres elementos que lo hacen difícil de detectar: urgencia artificial (el temporizador), contexto legítimo (los avisos de copyright son reales en la Chrome Web Store) y apariencia profesional (pantallas que imitan con precisión las páginas de Google).

Para organizaciones que usan Google Workspace, el riesgo de gobernanza es claro: **las cuentas de Google de los empleados son el punto de entrada a toda la infraestructura de Google**. Si un empleado que tiene acceso a Drive, Gmail y sistemas internos cae en un phishing de este tipo, la organización pierde el control de esos accesos en segundos.

## Recomendaciones

### Para personas

- Si recibes un aviso de violación de copyright sobre algo que publicaste, no hagas clic en los botones del correo. Ve directamente a la plataforma correspondiente desde el navegador y verifica desde allí.
- Los temporizadores de cuenta regresiva en correos de plataformas como Google son una señal de alerta: Google no usa esa mecánica de urgencia en notificaciones legítimas.
- Activa la verificación en dos pasos en tu cuenta de Google si aún no lo has hecho.

### Para organizaciones

La pregunta que debes poder responder hoy: ¿qué nivel de acceso tienen las cuentas de Google de tu equipo a sistemas y datos críticos de la empresa?

- Revisa qué aplicaciones y sistemas están conectados a las cuentas de Google de los empleados con acceso a sistemas sensibles.
- Considera implementar llaves de seguridad físicas (FIDO2/hardware keys) para cuentas con acceso privilegiado a sistemas críticos —estas no pueden ser robadas por phishing convencional.
- Capacita al equipo para que cualquier aviso que genere urgencia y pida autenticar sea tratado como sospechoso por defecto, sin importar la apariencia.

---

Las campañas de phishing más efectivas no se disfrazan de mensajes genéricos. Se disfrazan de notificaciones específicas, relevantes para lo que la víctima hace. Un desarrollador que publica extensiones espera recibir avisos de la Chrome Web Store. El atacante lo sabe. La defensa no es no abrir correos: es nunca autenticarse a través de un enlace en un correo, sin importar qué tan legítimo se vea.
