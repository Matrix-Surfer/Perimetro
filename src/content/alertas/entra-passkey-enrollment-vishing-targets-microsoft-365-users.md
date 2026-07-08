---
title: "Una llamada telefónica falsa convence a empleados de registrar una llave de acceso que controla el atacante"
date: "2026-07-08"
source: "BleepingComputer"
link: "https://www.bleepingcomputer.com/news/security/entra-passkey-enrollment-vishing-targets-microsoft-365-users/"
categoria: "Phishing"
ambito: "Organizaciones"
nivelAtencion: "Alto"
status: "Activa"
resumen: "Un grupo de extorsión llama a empleados haciéndose pasar por soporte técnico y los convence de registrar una nueva llave de acceso en su cuenta de Microsoft 365, que en realidad queda bajo el control del atacante. Ha estado activo desde abril de 2026 en varios sectores. Se recomienda confirmar si algún empleado recibió una llamada pidiendo 'activar seguridad adicional' en su cuenta."
expuestos: "Empleados con cuentas de Microsoft 365 en organizaciones de alimentos y bebidas, tecnología, salud, automotriz, construcción y aviación."
verificacion: "Si algún empleado recibió una llamada pidiendo inscribir una nueva llave de acceso o 'passkey' en su cuenta de Microsoft 365."
impacto: "Acceso permanente del atacante a la cuenta, con robo y publicación de archivos de SharePoint y OneDrive para presionar un pago."
grc_activo: "Cuentas de Microsoft 365 y archivos en SharePoint/OneDrive"
grc_vector: "Llamada de vishing que induce a inscribir una passkey de Entra controlada por el atacante, con panel que adapta el engaño al método de verificación de la víctima en tiempo real"
grc_condicion: "Que un empleado conteste la llamada y siga las instrucciones para 'inscribir' la passkey"
grc_explotacion: "activa"
grc_alcance: "Empleados de organizaciones en alimentos y bebidas, tecnología, salud, automotriz, construcción y aviación"
grc_confianza: "alta"
publicacion: "published"
---

## Qué ocurrió

Un grupo de extorsión activo desde abril de 2026 llama por teléfono a empleados de distintas organizaciones haciéndose pasar por soporte técnico. Les pide inscribir una nueva llave de acceso (passkey) en su cuenta de Microsoft 365 "por seguridad". La llamada dirige a la víctima a un sitio falso que imita el portal real de inscripción, donde un panel controlado por el atacante guía el engaño paso a paso, adaptándose al método de verificación que use cada víctima. Mientras la víctima cree estar protegiendo su cuenta, el atacante registra una llave que él mismo controla.

## Quién está expuesto

Empleados con cuentas de Microsoft 365 en organizaciones de los sectores alimentos y bebidas, tecnología, salud, automotriz, construcción y aviación.

## A considerar

Como parte del engaño, el atacante muestra una supuesta "frase de recuperación", similar a las que usan las billeteras de criptomonedas. Esa frase no tiene ninguna función real en Microsoft 365; solo busca confundir a la víctima. Si un empleado inscribió una passkey tras una llamada y vio esa pantalla, debe asumirse que la cuenta está comprometida. Establecer un método de verificación de identidad para llamadas que dicen venir de soporte técnico reduce el riesgo.

## Impacto potencial

Con la passkey registrada por el atacante, este conserva acceso a la cuenta incluso si la víctima cambia su contraseña. El grupo extrae rápidamente archivos de SharePoint y OneDrive y publica muestras del contenido robado para presionar el pago de un rescate.
