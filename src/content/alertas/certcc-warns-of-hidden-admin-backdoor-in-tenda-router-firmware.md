---
title: "Un acceso oculto en el firmware de routers Tenda permite tomar control total sin la contraseña correcta"
date: "2026-07-07"
source: "The Hacker News"
link: "https://thehackernews.com/2026/07/certcc-warns-of-hidden-admin-backdoor.html"
categoria: "Vulnerabilidad"
ambito: "Mixto"
nivelAtencion: "Medio"
status: "En monitoreo"
resumen: "Investigadores encontraron un acceso oculto integrado en el firmware de cinco modelos de router Tenda, que permite entrar como administrador sin conocer la contraseña real del dispositivo. Tenda aún no publicó una corrección. Quien tenga uno de estos routers debe confirmar el modelo y restringir el acceso a la administración desde internet mientras no exista parche."
expuestos: "Personas y pequeños negocios con alguno de los cinco modelos de router Tenda afectados (FH1201V1.0, W15E V1.0, AC10 V1.0, AC5 V1.0, AC6 V2.0)."
verificacion: "Confirmar el modelo y versión de firmware del router; si coincide, restringir el acceso a la administración desde fuera de la red."
impacto: "Un atacante con acceso a la interfaz de administración del router puede tomar control total sin necesidad de la contraseña real."
grc_activo: "Routers Tenda con los modelos y versiones de firmware afectados"
grc_vector: "Ruta de autenticación alterna oculta en el firmware que compara la contraseña ingresada contra un valor de configuración interno en texto plano"
grc_condicion: "Acceso a la interfaz de administración del router, desde la red local o desde internet si la administración remota está habilitada"
grc_explotacion: "investigacion"
grc_alcance: "Usuarios de los cinco modelos de firmware Tenda listados por CERT/CC"
grc_confianza: "alta"
publicacion: "published"
---

## Qué ocurrió

El CERT Coordination Center (CERT/CC) advirtió que varias versiones del firmware de los routers Tenda, fabricante chino de equipos de red, incluyen un acceso oculto de administrador que no está documentado en ningún manual. Investigadores encontraron que, si la contraseña ingresada no es correcta, el sistema revisa un segundo valor guardado en la configuración interna del dispositivo y, si coincide, concede acceso total como si fuera el administrador legítimo. Tenda no ha publicado una corrección para esta falla, identificada como CVE-2026-11405.

## Quién está expuesto

### Para personas

Quien tenga instalado en casa alguno de los cinco modelos de router Tenda afectados.

### Para organizaciones

Pequeños negocios que usan estos mismos modelos como router principal de su red.

## A considerar

Mientras no exista parche, CERT/CC recomienda dos medidas: desactivar la administración remota del router, que permite configurarlo desde internet y no solo desde la red local, y cambiar la dirección IP interna que el router trae por defecto.

## Impacto potencial

Un atacante con acceso a la interfaz de administración del router, directamente si la administración remota está activa o desde la misma red si no lo está, puede tomar control total del dispositivo sin conocer la contraseña real: ver y redirigir el tráfico de internet de la casa u oficina, o usar el router como punto de entrada a otros equipos conectados a esa red.
