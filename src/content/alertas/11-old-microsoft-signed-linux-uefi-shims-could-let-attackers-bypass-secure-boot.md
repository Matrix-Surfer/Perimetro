---
title: "Bootloaders antiguos firmados por Microsoft permiten instalar programas maliciosos antes de que arranque el sistema"
date: "2026-07-14"
source: "The Hacker News"
link: "https://thehackernews.com/2026/07/11-old-microsoft-signed-linux-uefi.html"
categoria: "Vulnerabilidad"
ambito: "Organizaciones"
nivelAtencion: "Alto"
status: "En monitoreo"
resumen: "Investigadores identificaron 11 programas de arranque (bootloaders) antiguos, firmados por Microsoft, que permiten evadir el Arranque Seguro (Secure Boot) en la mayoría de los equipos con firmware moderno. Microsoft ya revocó estos bootloaders en su actualización de junio de 2026, pero los equipos que no la instalaron siguen expuestos."
expuestos: "Organizaciones con equipos Windows o Linux que no aplicaron la actualización de seguridad de Microsoft de junio de 2026."
verificacion: "Confirmar que el equipo tiene instalada la actualización de junio de 2026 y que el Arranque Seguro está activo."
impacto: "Un atacante con acceso al equipo podría instalar un programa malicioso que se ejecuta antes que el propio sistema operativo, haciéndolo casi invisible para el antivirus."
grc_activo: "Firmware UEFI y proceso de arranque de equipos Windows y Linux"
grc_vector: "Bootloaders (shims) antiguos, firmados digitalmente por Microsoft, que no verifican correctamente el código que ejecutan"
grc_condicion: "Que el equipo no tenga instalada la actualización de junio de 2026 que revoca los bootloaders vulnerables"
grc_alcance: "La mayoría de sistemas con firmware UEFI moderno, en particular equipos con RedHat, CentOS, Oracle Linux, openSUSE, o herramientas como Baramundi, WipeDrive y PC-Doctor"
publicacion: "published"
---

## Qué ocurrió

Investigadores descubrieron 11 programas de arranque (bootloaders) antiguos, firmados digitalmente por Microsoft, que pueden usarse para evadir el Arranque Seguro (Secure Boot: la protección que verifica que solo software confiable se ejecute al encender un equipo). Un atacante que logre instalar uno de estos bootloaders puede ejecutar código no autorizado antes de que arranque el sistema operativo. Microsoft ya revocó los bootloaders vulnerables en su actualización de seguridad de junio de 2026.

## Quién está expuesto

### Para personas

Usuarios que no instalan actualizaciones de seguridad de forma regular en sus equipos Windows o Linux.

### Para organizaciones

Empresas con inventario de equipos Linux (RedHat, CentOS, Oracle Linux, openSUSE) o que usan herramientas como Baramundi Management Suite, WipeDrive o PC-Doctor, especialmente si la administración de actualizaciones no está centralizada.

## A considerar

La actualización de junio de 2026 revoca los certificados de estos bootloaders. Vale la pena confirmar que todos los equipos, incluidos los que rara vez se reinician o actualizan, ya la recibieron.

## Impacto potencial

Un atacante que aproveche esta falla puede instalar un programa malicioso que se ejecuta antes que el sistema operativo y el antivirus, lo que lo hace extremadamente difícil de detectar y eliminar. El acceso resultante puede persistir incluso después de reinstalar el sistema.
