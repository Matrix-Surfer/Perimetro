---
title: "Miles de sitios web comprometidos para distribuir malware mediante actualizaciones falsas y captchas trampa"
date: "2026-06-01"
categoria: "Malware"
nivelAtencion: "Alto"
status: "Activa"
parche: "Desconocido"
explotacion: "Activa"
resumen: "Un grupo de amenazas comprometió miles de sitios web legítimos para convertirlos en distribuidores de malware. Usan dos técnicas: ClickFix (falsos mensajes de 'error' que piden al usuario ejecutar un comando) y FakeUpdate (alertas falsas de actualización del navegador que instalan malware)."
source: "BleepingComputer"
link: "https://www.bleepingcomputer.com/news/security/hackers-hijack-thousands-of-sites-for-clickfix-and-fakeupdate-attacks/"
publicacion: "published"
---

## Contexto

Un actor de amenazas identificado como DriveSurge está comprometiendo sitios web legítimos a escala para usarlos como plataformas de distribución de malware. Las técnicas empleadas son dos: **ClickFix** — muestra un falso mensaje de error o captcha que indica al usuario que "para continuar, copie y pegue este comando en su terminal" — y **FakeUpdate** — despliega una alerta que imita una notificación oficial del navegador pidiendo instalar una actualización. Ambas explotan la confianza del usuario en el sitio que visita y en las instrucciones que aparecen. El sitio comprometido puede verse completamente normal; solo algunas visitas o ciertos usuarios ven la trampa.

## Por qué importa

- El ataque ocurre en sitios legítimos que los usuarios ya conocen y en los que confían — no en sitios falsos o sospechosos.
- Las técnicas no requieren que el usuario descargue nada manualmente: en ClickFix, el usuario es manipulado para ejecutar el comando él mismo; en FakeUpdate, el instalador se disfraza de actualización oficial.
- Cualquier sitio web con vulnerabilidades sin parchear puede ser comprometido y convertirse en vector sin que su dueño lo sepa.

## Impacto potencial

### Para personas

- Visitar un sitio comprometido puede mostrar mensajes de error o alertas de actualización que parecen legítimas pero instalan malware.
- Señales de alerta: un sitio conocido muestra un captcha inusual que pide "presionar Win+R y pegar este texto", o una ventana que dice "tu navegador está desactualizado" con un botón de descarga.
- Esas instrucciones nunca vienen de sitios legítimos — son siempre una trampa.

### Para organizaciones

- Propietarios de sitios web: su sitio puede estar siendo usado para atacar a sus propios visitantes sin que lo sepan, con el consecuente daño reputacional.
- Empleados que visitan sitios comprometidos desde equipos corporativos pueden introducir malware en la red de la organización.
- Los sitios corporativos sin mantenimiento activo son candidatos directos a ser comprometidos y reutilizados como vectores.

## Perspectiva Perímetro

El patrón es "confianza en el contexto": el usuario no está en un sitio sospechoso — está en un sitio que ya conoce. La trampa funciona porque el contexto parece seguro. ClickFix en particular es notable porque convierte al usuario en el ejecutor del ataque: el malware no se instala automáticamente, el usuario lo ejecuta siguiendo instrucciones que parecen razonables. La defensa no es tecnológica — es saber que ningún sitio legítimo pide abrir la consola del sistema ni pegar comandos.

## Perspectiva GRC

- **Gobierno:** ¿Existe una política sobre qué pueden instalar o ejecutar los empleados en equipos corporativos sin aprobación?
- **Riesgo:** Los sitios web de la organización deben tener mantenimiento activo — un CMS desactualizado es un vector potencial para comprometer a los visitantes.
- **Terceros:** Si el sitio web es administrado por una agencia, solicitar confirmación de que está actualizado y sin código no autorizado.
- **Continuidad:** Un sitio corporativo que distribuye malware a sus visitantes genera responsabilidad reputacional y posiblemente legal.

## Recomendaciones

### Para personas

- Si un sitio web conocido muestra un mensaje de error que pide abrir la consola, presionar teclas o pegar un comando: cerrar el navegador. Nunca es una instrucción legítima.
- Si un sitio dice que tu navegador está desactualizado y ofrece descargar la actualización: actualiza el navegador desde la configuración oficial del navegador, no desde el sitio.
- Si ya ejecutaste un comando de ese tipo, escanea tu equipo con un antivirus actualizado de inmediato.

### Para organizaciones

**Gestión**
- Verificar con el responsable del sitio web que está actualizado, que no hay código no autorizado y que tiene monitoreo activo.
- Recordar al equipo que ningún sitio legítimo pide abrir la consola del sistema ni pegar comandos — si ven eso en cualquier sitio, es una trampa.

**Técnicas**
- Revisar el código fuente del sitio web buscando scripts no reconocidos, especialmente en `<head>` o antes de `</body>`.
- Si no tienes equipo de TI: pide a tu agencia o proveedor de hosting que revise el sitio esta semana y te confirme por escrito que no hay modificaciones no autorizadas.

## Pregunta diagnóstica

¿Sabe qué componentes externos tiene su sitio y quién responde por actualizarlos y monitorearlos?
