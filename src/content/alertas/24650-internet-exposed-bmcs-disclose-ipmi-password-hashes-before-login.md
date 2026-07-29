---
title: "Miles de servidores exponen en internet las claves de su acceso de administración remota"
date: "2026-07-28"
source: "The Hacker News"
link: "https://thehackernews.com/2026/07/24650-internet-exposed-bmcs-disclose.html"
categoria: "Vulnerabilidad"
ambito: "Organizaciones"
nivelAtencion: "Alto"
status: "En monitoreo"
resumen: "Investigadores encontraron más de 36,800 servidores con su interfaz de administración remota (BMC) expuesta directamente a internet; 24,650 de ellos revelan la clave de acceso cifrada antes de que nadie inicie sesión. Cualquier organización con servidores propios o alquilados debe confirmar si esa interfaz está accesible desde fuera de su red. Descifrar esas claves permite a un atacante tomar control del servidor a un nivel más profundo que el propio sistema operativo."
expuestos: "Organizaciones con servidores físicos propios o alquilados (centros de datos, proveedores de hosting, empresas con infraestructura propia) que dejan su interfaz de administración remota accesible desde internet."
verificacion: "Confirmar si los servidores de la organización tienen su interfaz BMC conectada directamente a internet, sin pasar por una red interna protegida."
impacto: "Un atacante que descifre la clave puede tomar control del servidor por debajo del sistema operativo, sin que ningún antivirus o registro de actividad lo detecte."
grc_activo: "Interfaces de administración remota (BMC, tarjetas que permiten encender, reiniciar y controlar un servidor físico desde fuera, incluso apagado) expuestas a internet"
grc_vector: "El protocolo IPMI, usado por estas interfaces para autenticar el acceso, entrega la clave de acceso cifrada a cualquiera que se conecte, antes de pedir usuario y contraseña"
grc_condicion: "Tener la interfaz BMC conectada directamente a internet en vez de a una red interna aislada"
grc_alcance: "Al menos 24,650 servidores identificados públicamente con esta exposición; el número real de organizaciones afectadas es mayor"
grc_confianza: "alta"
publicacion: "published"
---

## Qué ocurrió

Investigadores de ciberseguridad identificaron más de 36,800 interfaces de administración remota de servidores (conocidas como BMC, tarjetas que permiten encender, apagar y controlar un servidor físico desde fuera, incluso cuando está apagado) conectadas directamente a internet. De esas, 24,650 entregan la clave de acceso cifrada de administrador a cualquiera que se conecte, antes incluso de que la persona introduzca usuario y contraseña. La falla proviene del protocolo que estas interfaces usan para autenticar el acceso (IPMI), que por diseño expone ese dato de forma temprana.

## Quién está expuesto

Organizaciones que operan sus propios servidores físicos, sea en sus instalaciones o en un centro de datos alquilado, y que administran esos equipos mediante una tarjeta BMC accesible desde internet en lugar de mantenerla en una red interna separada. Esto incluye proveedores de hosting, empresas con infraestructura propia y cualquier organización que administre servidores de terceros.

## A considerar

Una clave de acceso cifrada no es inútil para un atacante: con suficiente capacidad de cómputo, puede intentar descifrarla fuera de línea, sin que el servidor registre ningún intento fallido. La mitigación inmediata mientras se revisa la exposición es restringir el acceso a la interfaz BMC solo a la red interna, nunca a internet abierto.

## Impacto potencial

Un atacante que logre descifrar la clave obtiene un nivel de control sobre el servidor que está por debajo del sistema operativo: puede reiniciarlo, alterar su configuración de arranque o instalar herramientas maliciosas que ningún antivirus alcanza a ver, porque operan en una capa distinta a la que el sistema operativo vigila.
