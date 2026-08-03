---
title: "Un atacante despliega más de 100 páginas falsas de inicio de sesión para instalar un programa espía en iPhones desde el navegador"
date: "2026-08-03"
source: "The Hacker News"
link: "https://thehackernews.com/2026/08/chinese-threat-actor-uses-leaked.html"
categoria: "Vulnerabilidad"
ambito: "Mixto"
nivelAtencion: "Alto"
status: "Activa"
resumen: "Un actor de habla china identificado por la firma Censys opera más de 100 páginas falsas de inicio de sesión de AWS y Apple ID que, al abrirse en un iPhone con iOS 18.4 a 18.7, ejecutan código malicioso sin que la víctima descargue nada, instalando un programa espía que roba contraseñas guardadas, datos de wifi y archivos del dispositivo. Actualizar a la versión más reciente de iOS y evitar ingresar credenciales desde enlaces no verificados reduce el riesgo."
expuestos: "Usuarios de iPhone con iOS 18.4 a 18.7 que accedan a alguna de las más de 100 páginas falsas de inicio de sesión de AWS o Apple ID identificadas."
verificacion: "Confirmar que el iPhone tenga instalada la versión más reciente de iOS, y evitar ingresar credenciales de AWS o Apple ID desde enlaces recibidos por correo, mensaje o redes sociales sin verificar la dirección oficial."
impacto: "Robo de contraseñas guardadas en el dispositivo, datos de redes wifi, y acceso a archivos personales, sin que la víctima note ninguna descarga o instalación visible."
grc_activo: "Dispositivos iPhone con iOS 18.4 a 18.7"
grc_vector: "Más de 100 páginas falsas de inicio de sesión de AWS y Apple ID que cargan un elemento oculto con JavaScript, activando la cadena de exploits filtrada DarkSword para desplegar el programa espía GHOSTBLADE sin intervención adicional de la víctima"
grc_condicion: "Abrir una de las páginas falsas desde un iPhone con una versión de iOS vulnerable (18.4 a 18.7)"
grc_explotacion: "activa"
grc_alcance: "Cualquier usuario de iPhone que acceda a las páginas falsas identificadas; el actor es de origen chino pero las páginas no están restringidas geográficamente"
grc_confianza: "media"
publicacion: "published"
---

## Qué ocurrió

La firma de gestión de superficie de ataque Censys identificó a un actor de habla china operando más de 100 páginas web falsas, la mayoría imitando el inicio de sesión de Amazon Web Services (AWS) y de Apple ID. Al abrir alguna de estas páginas desde un iPhone con iOS 18.4 a 18.7, se carga un elemento oculto que ejecuta código malicioso y activa una cadena de exploits conocida como DarkSword, cuyo código se filtró públicamente y que ahora este actor reutiliza. La cadena instala un programa espía llamado GHOSTBLADE, que roba las contraseñas guardadas en el dispositivo, datos de redes wifi guardadas, y comienza a extraer archivos personales, todo sin que la víctima descargue ni instale nada de forma visible.

## Quién está expuesto

Usuarios de iPhone con iOS 18.4 a 18.7 que abran alguna de las páginas falsas de AWS o Apple ID, ya sea porque llegaron a ellas por un enlace en correo, mensaje o redes sociales, o porque las encontraron en un buscador.

## A considerar

Como el ataque se activa solo con abrir la página, sin necesidad de ingresar credenciales ni descargar nada, revisar el historial de navegación no basta para saber si el dispositivo fue afectado. Si hay sospecha de haber visitado una de estas páginas, conviene revisar accesos recientes a las cuentas de AWS y Apple ID desde ubicaciones o dispositivos desconocidos.

## Impacto potencial

Con las contraseñas guardadas y los datos de wifi robados, un atacante puede acceder a otras cuentas del usuario y a redes a las que el dispositivo se conectó, además de extraer archivos personales almacenados en el teléfono.
