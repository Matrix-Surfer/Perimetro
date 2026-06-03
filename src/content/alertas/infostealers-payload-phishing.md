---
title: "Los infostealers se consolidan como el payload preferido en campañas de phishing"
date: "2026-06-03"
tipo: "Phishing"
status: "Activa"
resumen: "Un análisis de Malwarebytes Labs publicado el 3 de junio confirma que los infostealers —software diseñado para robar contraseñas y sesiones activas— desplazaron a otras cargas maliciosas como el payload preferido en campañas de phishing por su bajo costo operativo y alta escalabilidad."
publicacion: "published"
---

## Contexto

Malwarebytes Labs publicó el 3 de junio de 2026 un análisis sobre el cambio en la composición del ecosistema criminal de phishing. La conclusión es directa: los **infostealers** —malware diseñado para robar contraseñas guardadas, cookies de sesión, tokens de autenticación y datos del navegador— se convirtieron en la carga preferida de los atacantes que distribuyen phishing.

Un infostealer no cifra archivos ni pide rescate. Simplemente extrae silenciosamente todo lo que el navegador tiene guardado: contraseñas de correo, banca en línea, plataformas de trabajo, tokens de acceso a servicios como Google, Microsoft 365 y AWS. Luego envía esa información al atacante y desaparece sin levantar alarmas visibles.

La razón del desplazamiento es económica: los infostealers son más fáciles de operar, más difíciles de detectar y más fáciles de monetizar que el ransomware tradicional. Los datos robados se venden en mercados clandestinos en minutos.

## Impacto potencial

### Para personas

Si instalas sin querer un infostealer —por hacer clic en un enlace de phishing, descargar un archivo adjunto o instalar un programa de fuente dudosa— el atacante obtiene acceso a todo lo que tu navegador tiene guardado. Eso incluye contraseñas de correo personal, redes sociales, aplicaciones bancarias, servicios de streaming y cualquier otra cuenta donde hayas guardado la contraseña.

Con esas credenciales, el atacante puede:

- Acceder a tu correo y suplantar tu identidad con contactos reales.
- Acceder a tu banca en línea si la contraseña guardada coincide o si la cookie de sesión sigue activa.
- Tomar el control de redes sociales para fraudes a tus contactos.

### Para organizaciones

Un empleado con un infostealer instalado en su equipo de trabajo es equivalente a una llave maestra entregada al atacante. Los infostealers extraen credenciales corporativas guardadas en el navegador: accesos a correo, ERP, CRM, plataformas de nómina, paneles de administración web, repositorios de código.

Las credenciales robadas se venden en mercados de acceso inicial. Otro actor criminal las compra y usa para entrar a la organización días o semanas después. El empleado nunca sabe que fue la fuente del compromiso.

## Perspectiva GRC

La proliferación de infostealers como payload de phishing tiene una implicación directa para la gestión de identidades: **las contraseñas guardadas en el navegador no son seguras**. La práctica de "guardar la contraseña" que el navegador ofrece como conveniencia se convierte en inventario listo para robar.

El patrón de gobernanza que esto expone: la mayoría de las organizaciones pequeñas y medianas no tienen una política sobre cómo los empleados deben gestionar contraseñas de trabajo. Sin esa política, la superficie de robo es el total de contraseñas que cada empleado tiene guardadas en su navegador personal o corporativo.

## Recomendaciones

### Para personas

- No guardes contraseñas de cuentas importantes directamente en el navegador. Usa un gestor de contraseñas —como Bitwarden o 1Password— que las cifra de forma independiente.
- Si sospechas que descargaste algo sospechoso, cambia las contraseñas de tus cuentas más importantes desde un dispositivo diferente.
- Activa la autenticación de dos factores en correo, banca y redes sociales. Un infostealer roba contraseñas, pero el segundo factor —código a tu teléfono o app de autenticación— sigue siendo una barrera si está activo.

### Para organizaciones

La pregunta que debes poder responder hoy: ¿tienen los equipos corporativos de tu empresa una política sobre el almacenamiento de contraseñas en navegadores?

- Implementa un gestor de contraseñas corporativo como parte del acceso estándar de cada empleado.
- Habilita la autenticación de dos factores para todos los sistemas internos que lo permitan, especialmente correo y plataformas de gestión.
- Considera implementar una solución de gestión de identidades que permita revocar sesiones activas en caso de compromiso sospechoso —esto es crítico cuando un infostealer ya robó cookies de sesión válidas.

---

El infostealer no es el fin del ataque. Es el principio. Lo que roba se convierte en material para el siguiente: acceso a correo que permite phishing interno, credenciales que permiten acceso a sistemas, sesiones activas que evitan el segundo factor de autenticación. La defensa más efectiva está en la capa de identidades: qué tienen acceso los empleados, cómo lo autentican y qué pasa cuando ese acceso se compromete.
