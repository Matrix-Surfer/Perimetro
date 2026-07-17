---
title: "Falsos avisos de verificación en el navegador instalan un programa que roba contraseñas y documentos de Microsoft 365"
date: "2026-07-17"
source: "The Hacker News"
link: "https://thehackernews.com/2026/07/acr-stealer-uses-clickfix-lures-to.html"
categoria: "Malware"
ambito: "Mixto"
nivelAtencion: "Alto"
status: "Activa"
resumen: "Un programa malicioso llamado ACR Stealer se distribuye mediante ventanas falsas de verificación que inducen a copiar y pegar un comando en Windows. Roba contraseñas del navegador, sesiones activas y documentos de Microsoft 365, OneDrive y SharePoint. Las organizaciones deben confirmar si algún empleado pegó ese tipo de comando y revocar accesos, no solo cambiar contraseñas."
expuestos: "Empleados de organizaciones que usan Microsoft 365, OneDrive y SharePoint en equipos Windows, y que reciben ventanas falsas de verificación pidiendo copiar y pegar un comando."
verificacion: "Confirmar si algún empleado copió y pegó un comando en el cuadro 'Ejecutar' de Windows tras ver un aviso de verificación, y revisar accesos recientes e inusuales a cuentas de Microsoft 365."
impacto: "Acceso no autorizado a correo, documentos compartidos y sistemas conectados a Microsoft 365, incluso después de cambiar la contraseña, porque el robo incluye la sesión activa."
grc_activo: "Contraseñas guardadas en el navegador, sesiones activas y documentos de Microsoft 365 (OneDrive, SharePoint) en equipos Windows"
grc_vector: "Ingeniería social por ClickFix: una ventana falsa de verificación induce a la víctima a copiar y pegar un comando en el cuadro 'Ejecutar' de Windows, que descarga el programa ladrón de credenciales ACR Stealer"
grc_condicion: "Que un empleado copie y pegue el comando indicado por la ventana falsa en el cuadro 'Ejecutar' de Windows"
grc_alcance: "Usuarios de Windows en organizaciones que usan Microsoft 365, OneDrive y SharePoint; el programa estuvo entre las seis amenazas más reportadas por la firma Red Canary en abril de 2026"
grc_confianza: "alta"
publicacion: "published"
---

## Qué ocurrió

Microsoft reportó el 16 de julio de 2026 una campaña activa de un programa malicioso llamado ACR Stealer (también conocido como AcridRain o, en su versión revendida en foros criminales, Amatera Stealer), en circulación desde 2024. Se distribuye mediante ClickFix: una ventana falsa de verificación de seguridad, que imita servicios legítimos, convence a la víctima de copiar y pegar un comando en el cuadro "Ejecutar" de Windows. Ese comando descarga el programa, que roba contraseñas guardadas en el navegador, sesiones activas (los accesos temporales que permiten entrar a una cuenta sin volver a escribir la contraseña) y documentos sincronizados de OneDrive y SharePoint.

## Quién está expuesto

### Para personas

Cualquier persona que reciba una ventana falsa de verificación, imitando por ejemplo a un servicio conocido, y copie el comando que indica en el cuadro "Ejecutar" de Windows.

### Para organizaciones

Empresas que usan Microsoft 365, OneDrive o SharePoint en equipos Windows. El robo de sesiones activas permite al atacante entrar a cuentas corporativas sin necesitar la contraseña de la víctima.

## A considerar

El robo no se limita a contraseñas: incluye las sesiones activas, lo que deja sin efecto un simple cambio de contraseña. Si se sospecha una infección, la medida efectiva es revocar las sesiones y los accesos activos, no solo cambiar la contraseña.

## Impacto potencial

Con las sesiones y documentos robados, un atacante puede entrar al correo corporativo, a los documentos compartidos y a los sistemas conectados a Microsoft 365 de la víctima, sin que un cambio de contraseña por sí solo bloquee ese acceso.
