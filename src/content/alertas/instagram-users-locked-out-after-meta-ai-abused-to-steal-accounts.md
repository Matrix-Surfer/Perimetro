---
title: "Atacantes manipulan el asistente de IA de Meta para robar cuentas de Instagram"
date: "2026-06-02"
categoria: "IA"
nivelAtencion: "Alto"
status: "Activa"
parche: "Desconocido"
explotacion: "No confirmado"
resumen: "Atacantes engañaron al chatbot de soporte de Meta para que transfiriera el control de cuentas de Instagram a correos bajo su control. El método no requirió hackear contraseñas ni explotar código: bastó con manipular al asistente de IA para que reconociera al atacante como el dueño legítimo de la cuenta."
source: "BleepingComputer"
link: "https://www.bleepingcomputer.com/news/security/instagram-users-locked-out-after-meta-ai-abused-to-steal-accounts/"
publicacion: "published"
---

## Contexto

Múltiples usuarios de Instagram reportaron que perdieron acceso a sus cuentas después de que atacantes utilizaron los asistentes de soporte con inteligencia artificial de Meta —los chatbots que ayudan a recuperar acceso a cuentas— para convencer al sistema de que ellos eran los dueños legítimos. La técnica explotó una debilidad en cómo el chatbot verifica identidad: sin requerir documentación sólida, el sistema aceptó las afirmaciones del atacante y transfirió el correo de recuperación asociado a la cuenta. El propietario real quedó bloqueado.

## Por qué importa

Este tipo de ataque —llamado confused deputy, o suplantación por delegación— es nuevo en el contexto de IA. No hackea el sistema de seguridad técnico: engaña al intermediario de IA para que haga el trabajo sucio. A medida que más servicios usan chatbots para soporte y verificación de identidad, este vector se vuelve más relevante. Instagram tiene decenas de millones de usuarios en México y América Latina, muchos de ellos con cuentas vinculadas a negocios, ingresos y reputación.

## Impacto potencial

### Para personas

Pérdida de acceso permanente a la cuenta de Instagram, incluyendo años de contenido, seguidores, y en el caso de creadores o comerciantes, fuentes directas de ingreso. El atacante que toma el control puede suplantar la identidad, hacer scam a los seguidores, o vender la cuenta.

### Para organizaciones

Para negocios con presencia en Instagram —tiendas, restaurantes, marcas, agencias— la pérdida de la cuenta es una interrupción operativa real. El daño reputacional y la pérdida de canales de venta directa pueden ser significativos.

## Perspectiva Perímetro

El chatbot de soporte fue el punto débil, no la contraseña ni el doble factor. Esta es la señal más importante de este incidente: añadir IA a los flujos de soporte y recuperación de acceso sin diseñar defensas específicas para ataques de ingeniería social crea una superficie de ataque nueva. El doble factor de Instagram no protegió a los usuarios afectados porque el ataque evitó ese mecanismo por completo.

## Perspectiva GRC

Para empresas que dependen de cuentas en redes sociales como canal de negocio: ¿hay un proceso documentado para proteger esas cuentas? ¿Está habilitada la protección más fuerte disponible? ¿Solo una persona tiene acceso, o hay un proceso de acceso compartido con registro? La ausencia de gobierno sobre activos digitales externos —redes sociales, canales de YouTube, páginas web— es un riesgo subestimado.

## Recomendaciones

### Para personas

Activa la verificación en dos pasos en tu cuenta de Instagram con una app autenticadora (Google Authenticator, Authy), no con SMS. Agrega un correo de recuperación confiable y mantén actualizado el número de teléfono. Guarda en un lugar seguro el código de recuperación de emergencia que Instagram te ofrece al activar el doble factor —ese código es tu último recurso si pierdes acceso.

### Para organizaciones

Si la empresa tiene cuentas de Instagram vinculadas al negocio, verificar que estén bajo una cuenta de correo corporativa —no personal de un empleado— y que tengan habilitada la autenticación más fuerte disponible. Documentar quién tiene acceso y en qué dispositivos. Si el empleado que administraba las redes deja la empresa, cambiar las credenciales de inmediato.

## Pregunta diagnóstica

¿Las cuentas de redes sociales de la empresa están bajo correos corporativos controlados por la empresa, o bajo cuentas personales de empleados que podrían dejar la organización?
