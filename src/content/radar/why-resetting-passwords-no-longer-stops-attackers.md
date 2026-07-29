---
title: "Cambiar la contraseña después de un aviso de riesgo ya no cierra la puerta al atacante"
pubDate: 2026-07-27
source: "Dark Reading"
link: "https://www.darkreading.com/endpoint-security/why-resetting-passwords-no-longer-stop-attacks"
category: "Seguridad"
señal: "Los atacantes se están moviendo del robo de contraseñas al robo de la sesión activa (el token que queda guardado después de iniciar sesión), lo que les permite evadir la verificación en dos pasos sin necesitar la contraseña en absoluto."
supuesto: "Que restablecer la contraseña de una cuenta, después de detectar actividad sospechosa, es suficiente para sacar al atacante y cerrar el incidente."
observación: "Si la organización puede cerrar de forma remota una sesión activa y detectar cuándo esa sesión se usa desde dos ubicaciones distintas al mismo tiempo, no solo cuando cambia la contraseña asociada."
context: "Restablecer una contraseña asume que el atacante necesita esa contraseña para seguir dentro. Cuando el atacante ya tiene la sesión activa, cambiar la contraseña no lo saca de nada, la sesión sigue viva de forma independiente. La defensa que protegía el punto de entrada deja de servir una vez que el atacante ya está adentro."
grc_cambio: "La seguridad de identidad se desplaza de proteger el inicio de sesión (la contraseña, la verificación en dos pasos) a proteger la sesión que queda activa después de iniciar sesión."
grc_paradigma: "Que restablecer la contraseña de una cuenta comprometida es la acción que cierra el incidente y saca al atacante del sistema."
publicacion: "published"
---

## La señal

Los atacantes están cambiando su objetivo: en vez de robar contraseñas para usarlas después, roban la sesión activa (el token que el sistema guarda una vez que alguien ya inició sesión) directamente del equipo de la víctima. Con esa sesión en su poder, el atacante entra sin necesitar la contraseña ni volver a pasar por la verificación en dos pasos, porque esa verificación ya ocurrió cuando la víctima inició sesión legítimamente.

## El supuesto que se rompe

La creencia de que restablecer la contraseña de una cuenta, en cuanto se detecta actividad sospechosa, es la acción que cierra el incidente y saca al atacante. Si el atacante ya tiene la sesión activa, esa sesión sigue funcionando de forma independiente a la contraseña; cambiarla no la revoca automáticamente.

## Qué observar

Si la organización tiene forma de cerrar sesiones activas de forma remota y de detectar cuándo una misma sesión se usa desde dos ubicaciones distintas al mismo tiempo, no solo de exigir una nueva contraseña tras un aviso de riesgo. La pregunta pasa de "¿la contraseña es segura?" a "¿podemos ver y cortar una sesión que ya no debería seguir viva?".
