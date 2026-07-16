---
title: "Falso aviso de verificación en Mac bloquea aplicaciones hasta que la víctima escribe su contraseña, e instala un ladrón de credenciales"
date: "2026-07-16"
source: "The Hacker News"
link: "https://thehackernews.com/2026/07/new-clicklock-macos-stealer-kills-apps.html"
categoria: "Malware"
ambito: "Mixto"
nivelAtencion: "Alto"
status: "Activa"
resumen: "Un programa malicioso para Mac se hace pasar por una verificación de seguridad (una ventana falsa que imita a Cloudflare) y pide a la víctima copiar y pegar un comando en la Terminal. Si la persona se niega a escribir su contraseña, el programa cierra aplicaciones repetidamente hasta que cede. Ya afectó a más de 100 personas en 33 países, en su mayoría en Europa, robando contraseñas guardadas, billeteras de criptomonedas y accesos guardados."
expuestos: "Usuarios de Mac que reciben instrucciones de copiar y pegar comandos en la Terminal, presentadas como una verificación de seguridad."
verificacion: "Confirmar si alguien pegó un comando en la Terminal del Mac tras ver un aviso de verificación, y revisar la carpeta ~/Library/LaunchAgents en busca de archivos llamados com.authirity.plist o com.chromer.plist."
impacto: "Robo de contraseñas guardadas en el navegador, billeteras de criptomonedas, gestores de contraseñas y sesiones activas; con esas credenciales el atacante puede entrar a cuentas personales o corporativas."
grc_activo: "Equipos Mac de personas y empleados; contraseñas, billeteras de criptomonedas y gestores de contraseñas almacenados en el equipo"
grc_vector: "Ingeniería social mediante una ventana falsa de verificación (CAPTCHA) que induce a la víctima a copiar y pegar un comando en la Terminal de macOS"
grc_condicion: "Que la persona copie y pegue el comando en la Terminal cuando lo pide la ventana falsa; el programa después presiona repetidamente hasta obtener la contraseña"
grc_explotacion: "activa"
grc_alcance: "Al menos 100 víctimas en 33 países desde mayo de 2026, más de la mitad en Europa"
grc_confianza: "alta"
publicacion: "published"
---

## Qué ocurrió

Investigadores de Group-IB identificaron un programa malicioso para Mac que se presenta como una verificación de seguridad falsa: una ventana que imita el sistema de verificación de Cloudflare y pide a la víctima copiar y pegar un comando en la Terminal de macOS. Al ejecutarlo, el programa se instala en el equipo. Si la persona se niega a entregar su contraseña cuando el sistema la solicita, el programa cierra las aplicaciones abiertas de forma repetida, varias veces por segundo y durante semanas si es necesario, hasta que la víctima cede y la escribe. Una vez obtenida la contraseña, el programa roba credenciales guardadas en el navegador, billeteras de criptomonedas y gestores de contraseñas, y se mantiene activo después de reiniciar el equipo. La campaña, detectada desde mayo de 2026, ya afectó a más de 100 personas en 33 países, más de la mitad en Europa.

## Quién está expuesto

### Para personas

Usuarios de Mac que reciben instrucciones de copiar y pegar comandos en la Terminal como parte de una supuesta verificación, actualización o solución de problemas.

### Para organizaciones

Empleados que usan equipos Mac, especialmente si no existe una política clara que prohíba ejecutar comandos de fuentes externas en la Terminal.

## A considerar

Los archivos que el programa deja para mantenerse activo se llaman com.authirity.plist y com.chromer.plist, ubicados en la carpeta de inicio automático del sistema (~/Library/LaunchAgents). Si aparecen, es señal de infección. Apple introdujo en macOS 26.4 avisos al pegar contenido y bloqueo de programas maliciosos conocidos, pero esa protección tiene formas de evadirse, así que no sustituye la verificación manual.

## Impacto potencial

Con las contraseñas y billeteras robadas, el atacante puede entrar a cuentas personales o corporativas, tomar control del correo, acceder a servicios financieros o vaciar billeteras de criptomonedas. Las sesiones del navegador también quedan comprometidas, por lo que cambiar solo la contraseña no basta: es necesario cerrar todas las sesiones activas.
