---
title: "Fallas en NGINX y BIG-IP de F5 permiten interrumpir servicios o ejecutar código sin necesitar contraseña"
date: "2026-07-16"
source: "SecurityWeek"
link: "https://www.securityweek.com/f5-patches-multiple-nginx-big-ip-vulnerabilities/"
categoria: "Vulnerabilidad"
ambito: "Organizaciones"
nivelAtencion: "Alto"
status: "En monitoreo"
resumen: "F5 corrigió 8 fallas de seguridad en NGINX y BIG-IP, software que miles de organizaciones usan para administrar el tráfico de sus sitios y aplicaciones web. La más grave (CVSS 9.2) permite, sin necesitar contraseña, provocar que el servidor deje de funcionar, y en equipos con ciertas configuraciones, ejecutar código malicioso. No hay evidencia de que se esté explotando activamente, pero el parche ya está disponible."
expuestos: "Organizaciones que operan NGINX Plus, NGINX Open Source, NGINX Ingress Controller o dispositivos BIG-IP de F5 sin la actualización de julio de 2026."
verificacion: "Confirmar la versión instalada de NGINX o BIG-IP y aplicar la actualización de seguridad publicada por F5 en julio de 2026."
impacto: "Interrupción del servicio (sitios y aplicaciones dejan de responder), fuga de información en memoria del servidor, y en algunos casos, ejecución de código malicioso en el servidor."
grc_activo: "Servidores que ejecutan NGINX Plus, NGINX Open Source, NGINX Ingress Controller o dispositivos BIG-IP de F5"
grc_vector: "Uso combinado de una directiva de configuración (map) con expresiones regulares que provoca un desbordamiento de memoria al procesar tráfico"
grc_condicion: "Tener una configuración de NGINX que use captura de expresiones regulares en la directiva map, expuesta a tráfico de red sin el parche de julio 2026"
grc_explotacion: "investigacion"
grc_alcance: "Organizaciones de cualquier tamaño que usan NGINX o BIG-IP para administrar tráfico web; la mayoría de las fallas no requieren autenticación"
grc_confianza: "alta"
publicacion: "published"
---

## Qué ocurrió

F5 publicó actualizaciones de seguridad que corrigen 8 fallas en NGINX y BIG-IP, software que millones de sitios y aplicaciones usan para administrar y proteger su tráfico web. La falla más grave (CVSS 9.2) ocurre cuando una configuración común de NGINX combina una directiva llamada map con expresiones regulares. Un atacante puede aprovechar esa combinación para saturar la memoria del servidor y hacer que deje de responder, y en equipos sin ciertas protecciones activadas, ejecutar código malicioso. La mayoría de las fallas no requieren contraseña ni acceso previo. No hay evidencia de que se estén explotando activamente.

## Quién está expuesto

### Para organizaciones

Empresas que operan sus propios servidores web o de aplicaciones con NGINX Plus, NGINX Open Source, NGINX Ingress Controller, o que usan dispositivos BIG-IP de F5 para administrar el tráfico de su red. Esto incluye proveedores de hosting, plataformas de comercio electrónico y cualquier organización con infraestructura web propia.

## Impacto potencial

La interrupción del servicio deja sitios y aplicaciones sin funcionar mientras dura el ataque. En los casos donde es posible ejecutar código, el atacante podría tomar control del servidor, modificar su configuración o usarlo como punto de entrada a la red interna de la organización.
