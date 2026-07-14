---
title: "Correos falsos de alerta de seguridad buscan robar el acceso a gestores de contraseñas populares"
date: "2026-07-14"
source: "BleepingComputer"
link: "https://www.bleepingcomputer.com/news/security/lastpass-bitwarden-users-targeted-with-fake-security-alerts/"
categoria: "Phishing"
ambito: "Mixto"
nivelAtencion: "Alto"
status: "Activa"
resumen: "Una campaña activa de correos falsos se hace pasar por avisos oficiales de LastPass y Bitwarden, dos gestores de contraseñas ampliamente usados, para dirigir a las víctimas a sitios fraudulentos que imitan páginas de firma de documentos. Busca robar la contraseña maestra que protege todas las demás contraseñas guardadas."
expuestos: "Usuarios de LastPass y Bitwarden que reciban un correo con supuestas actualizaciones de política de seguridad."
verificacion: "Confirmar que el correo proviene del dominio oficial del servicio; ni LastPass ni Bitwarden piden la contraseña maestra por correo o en un sitio externo."
impacto: "Quien entregue su contraseña maestra en el sitio falso expone todas las contraseñas guardadas en su gestor, incluyendo las de banca en línea, correo y redes sociales."
grc_activo: "Cuentas de gestores de contraseñas (LastPass, Bitwarden) y todas las credenciales que protegen"
grc_vector: "Correos que suplantan notificaciones oficiales, con enlaces a sitios falsos que imitan páginas de firma de documentos (tipo DocuSign) y solicitan la contraseña maestra"
grc_condicion: "Que la víctima haga clic en el enlace del correo falso y entregue su contraseña maestra en el sitio fraudulento"
grc_alcance: "Usuarios de LastPass y Bitwarden; dominios falsos identificados: lastpasscompliance[.]com y bitwardencompliance[.]com"
publicacion: "published"
---

## Qué ocurrió

Una campaña activa de correos falsos se hace pasar por avisos oficiales de LastPass y Bitwarden, dos de los gestores de contraseñas más usados, para anunciar supuestas "actualizaciones de política de seguridad". El correo incluye un botón que lleva a un sitio fraudulento que imita una página de firma de documentos, donde se pide instalar un archivo o iniciar un chat de soporte falso. El objetivo final es obtener la contraseña maestra, la única llave que protege todas las demás contraseñas guardadas en el gestor.

## Quién está expuesto

### Para personas

Cualquier usuario de LastPass o Bitwarden que reciba uno de estos correos, sin importar si administra pocas o muchas cuentas en el gestor.

### Para organizaciones

Empresas donde empleados usan estos gestores para almacenar contraseñas corporativas, incluyendo accesos administrativos.

## A considerar

Ni LastPass ni Bitwarden piden la contraseña maestra por correo ni fuera de la aplicación oficial. Quien haya entregado su contraseña maestra en el sitio falso debe cambiarla de inmediato desde un dispositivo confiable y revisar el gestor en busca de actividad sospechosa.

## Impacto potencial

La contraseña maestra es la llave de todas las demás. Si un atacante la obtiene, puede acceder a la banca en línea, el correo, las redes sociales y cualquier otra cuenta guardada en el gestor de la víctima.
