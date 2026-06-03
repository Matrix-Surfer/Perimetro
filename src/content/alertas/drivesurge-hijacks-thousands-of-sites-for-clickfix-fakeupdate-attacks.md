---
title: "DriveSurge compromete miles de sitios para distribuir ataques ClickFix y FakeUpdate"
date: "2026-06-02"
tipo: "Otro"
categoria: "Malware"
nivelAtencion: "Alto"
status: "Activa"
parche: "Desconocido"
explotacion: "Activa"
resumen: "Una operación de distribución de malware a gran escala comprometió miles de sitios web legítimos para redirigir visitantes a páginas falsas. Usa dos técnicas: ClickFix —que engaña al usuario para que ejecute comandos en su propio equipo— y FakeUpdate, que imita alertas de actualización de software para instalar malware."
source: "Dark Reading"
link: "https://www.darkreading.com/cyberattacks-data-breaches/drivesurge-hijacks-thousands-sites-clickfix-fakeupdate-attacks"
publicacion: "published"
---

## Contexto

La operación DriveSurge usa un sistema de distribución de tráfico malicioso —TDS, por sus siglas en inglés: Traffic Distribution System— para redirigir visitantes de sitios web legítimos y comprometidos hacia páginas de ataque. Una vez ahí, usa dos técnicas: ClickFix, que muestra un mensaje de error falso y pide al usuario que pegue un comando en su teclado para "arreglarlo" —ejecutando así el malware—; y FakeUpdate, que imita alertas de actualización de Chrome, Firefox u otros programas para instalar código malicioso disfrazado de parche.

El sitio web visitado por el usuario puede ser completamente legítimo. El compromiso ocurre en el servidor del sitio, no en el dispositivo del visitante —hasta que el visitante interactúa con el contenido inyectado—.

## Impacto potencial

### Para personas

Cualquier persona que visite un sitio comprometido y siga las instrucciones de una alerta de "actualización" o un mensaje de error falso puede tener malware instalado en su dispositivo. ClickFix es especialmente efectivo porque usa el portapapeles del usuario y parece legítimo.

### Para organizaciones

Las organizaciones están expuestas por dos vías: empleados que visitan sitios comprometidos desde dispositivos de trabajo; y empresas que operan sitios web que pueden haber sido comprometidos sin saberlo, exponiendo a sus visitantes.

## Perspectiva GRC

ClickFix es eficaz precisamente porque le pide al usuario que ejecute el comando él mismo. Elude los controles técnicos porque la acción la toma un humano, no el malware. La defensa técnica no es suficiente: requiere que los usuarios sepan reconocer esta técnica.

## Recomendaciones

### Para personas

Nunca pegar en tu teclado o terminal un texto que una página web te pide copiar para "solucionar un error". Ningún sitio legítimo necesita que ejecutes comandos en tu equipo desde el navegador. Actualizar software siempre desde el programa mismo o desde el sitio oficial del fabricante, nunca desde una alerta emergente en el navegador.

### Para organizaciones

Verificar si los sitios web propios tienen código no autorizado inyectado —un proveedor de seguridad web o un scan básico puede detectarlo—. Capacitar a equipos sobre ClickFix: es la amenaza de ingeniería social más eficaz del año, y la defensa requiere que las personas sepan cómo se ve.

---

ClickFix no es un exploit técnico. Es un exploit de confianza: convence al usuario de que el problema es suyo y de que tiene la solución. La lección permanente: los controles técnicos no reemplazan el criterio del usuario. Una organización donde los empleados no saben distinguir una alerta falsa de una real tiene una brecha de seguridad que ningún software puede cerrar.
