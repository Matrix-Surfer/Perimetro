---
title: "Una técnica evade el registro de accesos y permite validar en silencio credenciales robadas de Microsoft Entra ID"
date: "2026-07-14"
source: "The Hacker News"
link: "https://thehackernews.com/2026/07/oauth-client-id-spoofing-lets-attackers.html"
categoria: "Vulnerabilidad"
ambito: "Organizaciones"
nivelAtencion: "Alto"
status: "Activa"
resumen: "Dos grupos de atacantes distintos usan una técnica de suplantación para probar contraseñas robadas contra cuentas de Microsoft Entra ID sin que aparezca un inicio de sesión exitoso en los registros. Una campaña afectó a un millón de cuentas en casi 4,000 organizaciones. La otra apuntó a más de 2 millones de usuarios."
expuestos: "Organizaciones que usan Microsoft Entra ID para gestionar identidades corporativas (correo, documentos, inicio de sesión único)."
verificacion: "Revisar los registros de inicio de sesión de Entra ID en busca de intentos con un identificador de aplicación pero sin nombre de aplicación asociado."
impacto: "El atacante puede confirmar qué contraseñas robadas siguen siendo válidas sin activar las alertas normales de inicio de sesión fallido, preparando un acceso no autorizado posterior."
grc_activo: "Cuentas e identidades corporativas en Microsoft Entra ID"
grc_vector: "Suplantación del identificador de cliente OAuth (OAuth client ID spoofing) en solicitudes al sistema de autenticación de Microsoft"
grc_condicion: "Que el atacante ya cuente con una lista de credenciales robadas o filtradas que quiera validar sin ser detectado"
grc_alcance: "Casi 4,000 organizaciones y más de 3 millones de cuentas combinadas en las dos campañas identificadas"
publicacion: "published"
---

## Qué ocurrió

Dos grupos de atacantes distintos están usando una técnica llamada suplantación del identificador de cliente OAuth (OAuth: mecanismo que permite que dos sistemas intercambien accesos sin compartir la contraseña) para probar contraseñas robadas contra cuentas de Microsoft Entra ID, el sistema que muchas empresas usan para gestionar el correo corporativo y el inicio de sesión único. El sistema responde de forma distinta según si el identificador usado es válido, lo que permite al atacante confirmar cuentas y contraseñas sin que quede registrado un inicio de sesión exitoso. Una campaña usó más de 700,000 identificadores falsos contra un millón de cuentas en casi 4,000 organizaciones. Otra, con infraestructura de Cloudflare, apuntó a más de 2 millones de usuarios.

## Quién está expuesto

### Para organizaciones

Cualquier empresa que use Microsoft Entra ID para el correo corporativo, los documentos compartidos o el inicio de sesión único. El riesgo es mayor si no hay monitoreo activo de los registros de autenticación.

### Para personas

Empleados cuyas contraseñas ya fueron filtradas en alguna brecha anterior y las reutilizan en su cuenta corporativa.

## A considerar

Los registros de inicio de sesión que muestran un identificador de aplicación sin nombre asociado son la señal más clara de este ataque. Las políticas de acceso condicional configuradas solo para aplicaciones específicas no detienen esta técnica, porque el atacante nunca completa un inicio de sesión reconocido como tal.

## Impacto potencial

Si el atacante confirma que una contraseña robada es válida, el siguiente paso habitual es usarla para entrar a la cuenta real, sin necesidad de adivinar ni de generar alertas previas. Esto puede derivar en acceso al correo corporativo, documentos compartidos o sistemas conectados mediante inicio de sesión único.
