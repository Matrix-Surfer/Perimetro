---
title: "Botnet activa infecta miles de routers D-Link y los convierte en herramienta de ataque"
date: "2026-06-21"
source: "BleepingComputer"
link: "https://www.bleepingcomputer.com/news/security/arystinger-botnet-infected-thousands-of-d-link-routers-worldwide/"
categoria: "Malware"
ambito: "Mixto"
nivelAtencion: "Alto"
status: "Activa"
resumen: "La botnet AryStinger comprometio mas de 4,000 routers D-Link en todo el mundo explotando vulnerabilidades sin parche en modelos que ya no reciben actualizaciones. Los routers infectados quedan bajo control remoto y pueden usarse para redirigir el trafico de internet de los usuarios, espiar conexiones de red y lanzar ataques contra terceros sin que el dueno del router lo sepa."
expuestos: "Usuarios y empresas con routers D-Link DIR-850L o DIR-818LW, especialmente si no han actualizado el firmware o tienen la gestion remota activada. Ambos modelos ya no reciben soporte de seguridad de D-Link."
verificacion: "Revisar el modelo del router en la etiqueta trasera del dispositivo. Si es un DIR-850L o DIR-818LW, el equipo es vulnerable. Verificar en la interfaz de administracion del router (normalmente en 192.168.0.1) si hay actualizaciones de firmware disponibles. Si D-Link ya no publica actualizaciones para el modelo, la solucion es reemplazar el equipo."
impacto: "Un router infectado puede modificar las respuestas DNS para redirigir a los usuarios hacia sitios falsos, capturar trafico de red no cifrado, y ser usado como intermediario para actividades delictivas atribuidas a la direccion IP del dueno. En redes de oficina, el router comprometido puede ser la puerta de entrada a equipos internos."
grc_activo: "Router de red, trafico de internet de todos los dispositivos conectados, configuracion DNS del hogar u oficina."
grc_vector: "Explotacion de vulnerabilidades conocidas (CVE-2013-3307, CVE-2016-5681, CVE-2025-11837) en firmware sin actualizar."
grc_condicion: "El router debe ser accesible desde internet o desde la red local con el firmware vulnerable sin actualizar."
grc_explotacion: "activa"
grc_alcance: "Usuarios y empresas con routers D-Link DIR-850L o DIR-818LW sin actualizaciones de firmware recientes."
grc_confianza: "alta"
publicacion: "published"
---

## Qué ocurrió

La botnet AryStinger comprometió más de 4,000 routers D-Link en todo el mundo. Lo hace explotando vulnerabilidades conocidas en el firmware de estos equipos, algunas con más de una década de antigüedad: los CVEs utilizados datan de 2013, 2016 y 2025. Los routers infectados quedan bajo control remoto de los operadores de la botnet, que los usan para lanzar ataques, ocultar el origen de tráfico malicioso, y monitorear las conexiones de red que pasan por ellos.

La infección activa está confirmada: los investigadores detectaron servidores de comando y control asignando tareas a los routers comprometidos en tiempo real.

## Quién está expuesto

Los modelos afectados son el D-Link DIR-850L y DIR-818LW — equipos de generaciones anteriores ampliamente distribuidos en hogares y oficinas pequeñas en México y América Latina. D-Link ya no publica actualizaciones de seguridad para estos modelos, lo que significa que las vulnerabilidades que explota AryStinger no tienen parche disponible.

Cualquier equipo de estos modelos conectado a internet con el firmware sin actualizar es un objetivo activo.

## A considerar

Los CVEs que usa esta botnet tienen entre 10 y 13 años de antigüedad. Que sigan siendo efectivos en 2026 no es una falla de inteligencia: es el resultado predecible de millones de routers que nadie actualiza porque funcionan bien. La botnet AVrecon explotó exactamente los mismos modelos en 2023 con el mismo resultado.

## Impacto potencial

Un router infectado puede modificar las respuestas DNS —el sistema que convierte el nombre de un sitio web en su dirección real— para redirigir a usuarios hacia páginas falsas de bancos, correo o servicios corporativos sin que lo noten. También puede capturar tráfico de red sin cifrar y servir como intermediario para actividades delictivas rastreadas hasta la dirección IP del dueño. En redes de oficina con este tipo de equipo como punto de acceso, el router comprometido puede convertirse en la puerta de entrada a sistemas internos. La única solución permanente es reemplazar el equipo por un modelo con soporte activo.
