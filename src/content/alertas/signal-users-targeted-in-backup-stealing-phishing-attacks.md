---
title: "Atacantes suplantan al soporte de Signal para robar la llave de respaldo y acceder a todos los mensajes"
date: "2026-05-29"
categoria: "Phishing"
nivelAtencion: "Medio"
status: "En monitoreo"
parche: "No"
explotacion: "Activa"
resumen: "Grupos criminales están enviando mensajes haciéndose pasar por el equipo de soporte de Signal para engañar a los usuarios y obtener su llave de recuperación de respaldo. Con esa llave, el atacante puede acceder a todo el historial de mensajes."
source: "Malwarebytes Labs"
link: "https://www.malwarebytes.com/blog/news/2026/05/signal-users-targeted-in-backup-stealing-phishing-attacks"
publicacion: "published"
---

## Contexto

Cibercriminales están enviando mensajes falsos haciéndose pasar por el soporte oficial de Signal — la aplicación de mensajería cifrada ampliamente usada por personas que valoran la privacidad, incluyendo periodistas, abogados y activistas. El engaño busca que el usuario entregue su llave de recuperación de respaldo, un código que permite restaurar toda la cuenta y el historial de mensajes en un dispositivo nuevo. Con esa llave, el atacante puede acceder a todos los mensajes, contactos y conversaciones de la cuenta comprometida.

## Por qué importa

- Signal es usada precisamente por personas que manejan información sensible — el acceso al historial de mensajes puede exponer conversaciones confidenciales con clientes, fuentes o socios.
- La llave de respaldo da acceso completo, sin necesidad de la contraseña original ni del teléfono de la víctima.
- El daño no es recuperable: una vez que el atacante copia el historial, no hay forma de "borrar" lo que ya vio.

## Impacto potencial

### Para personas

- Si usas Signal para conversaciones de trabajo o personales sensibles, un atacante con tu llave de respaldo puede leer todo tu historial.
- Señal de alerta: un mensaje de "Signal Support" que solicita tu clave de recuperación, código QR o acceso a tu cuenta — Signal nunca pide eso.
- Si compartiste tu llave de respaldo en respuesta a un mensaje así, la cuenta debe considerarse comprometida.

### Para organizaciones

- Abogados, consultores, periodistas y cualquier profesional que use Signal para comunicaciones confidenciales con clientes están en riesgo directo.
- La exposición de conversaciones puede afectar casos activos, estrategias legales o relaciones con fuentes y clientes.
- Si el personal usa Signal para comunicarse con proveedores sobre temas sensibles, esas conversaciones también están en riesgo.

## Recomendaciones

### Para personas

- Signal nunca te pedirá tu llave de recuperación, código QR de vinculación ni contraseña por mensaje, correo o llamada.
- Si recibes ese tipo de solicitud, es un ataque de phishing — ignóralo y no respondas.
- Verifica el estado de tus dispositivos vinculados en Signal: Configuración → Dispositivos vinculados — elimina cualquier dispositivo no reconocido.
- Si crees que tu llave fue comprometida, genera una nueva desde Configuración → Privacidad → Respaldo cifrado.

### Para organizaciones

**Gestión**
- Si el equipo usa Signal para comunicaciones de trabajo, recordarles: Signal nunca contacta a usuarios para pedir llaves o accesos — cualquier mensaje así es fraude.

**Técnicas**
- Revisar en los dispositivos corporativos de Signal si hay dispositivos vinculados no autorizados.
- Si no tienes equipo de TI: comunicar la alerta al personal que usa Signal como herramienta de trabajo.

## Pregunta diagnóstica

¿Existe un canal para verificar solicitudes de acceso o datos que lleguen a nombre de proveedores de software o soporte técnico?
