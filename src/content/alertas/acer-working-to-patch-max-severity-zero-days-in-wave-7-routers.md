---
title: "Dos zero-days de severidad máxima en routers Acer Wave 7 sin parche disponible"
date: "2026-06-03"
tipo: "Otro"
categoria: "Vulnerabilidad"
nivelAtencion: "Alto"
status: "En monitoreo"
parche: "No"
explotacion: "Reportada"
resumen: "Acer trabaja en un parche para dos vulnerabilidades zero-day de severidad máxima en sus routers WiFi mesh Wave 7. Mientras el parche no esté disponible, los dispositivos expuestos a internet permiten a un atacante tomar control remoto sin autenticación."
source: "BleepingComputer"
link: "https://www.bleepingcomputer.com/news/security/acer-warns-of-max-severity-zero-days-affecting-wave-7-routers/"
publicacion: "published"
---

## Contexto

Acer anunció que está trabajando en parches para dos vulnerabilidades zero-day —fallos desconocidos sin solución disponible— de severidad máxima (CVSS 10.0) en sus routers WiFi mesh Wave 7. Los routers mesh son dispositivos que crean redes WiFi de cobertura amplia en hogares y oficinas pequeñas.

Las vulnerabilidades permiten a un atacante tomar control remoto del router sin necesidad de autenticarse. Un router comprometido puede interceptar tráfico de red, redirigir usuarios a sitios maliciosos, o servir como punto de acceso a la red interna.

No existe parche disponible. Acer dice estar trabajando en él.

## Impacto potencial

### Para personas

Usuarios domésticos con un router Acer Wave 7 conectado directamente a internet sin cortafuegos adicional tienen el dispositivo expuesto. Un atacante puede interceptar su tráfico de red o comprometer otros dispositivos conectados al router.

### Para organizaciones

Las pymes que usan estos routers como infraestructura de red de oficina están expuestas a que un atacante acceda a toda la red interna desde internet, sin necesidad de credenciales.

## Recomendaciones

### Para personas

Verificar si tu router es un Acer Wave 7. Si es así, deshabilitar la administración remota desde internet en la configuración del router, y mantener el firmware actualizado en cuanto Acer publique el parche. Suscribirse a las notificaciones de seguridad de Acer para recibir aviso cuando el parche esté disponible.

### Para organizaciones

Si los routers Wave 7 se usan en oficinas, revisar si tienen administración remota habilitada y deshabilitarla. Evaluar si existe un proceso de actualización de firmware para equipos de red —muchas organizaciones actualizan endpoints pero no routers ni switches—.

---

Los routers son la puerta de entrada a cualquier red. Son también el dispositivo que menos frecuentemente se actualiza. La lección permanente: los equipos de red necesitan el mismo ciclo de gestión de parches que los servidores y endpoints. Un router con firmware de hace dos años en una red corporativa es una vulnerabilidad sin nombre.
