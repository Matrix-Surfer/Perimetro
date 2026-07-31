---
title: "Anuncios falsos en buscadores instalan un programa espía en computadoras Mac disfrazado de actualización del sistema"
date: "2026-07-30"
source: "The Hacker News"
link: "https://thehackernews.com/2026/07/dprk-linked-macos-malvertising-uses.html"
categoria: "Malware"
ambito: "Mixto"
nivelAtencion: "Alto"
status: "Activa"
resumen: "Una campaña vinculada a Corea del Norte usa anuncios patrocinados en buscadores para llevar a usuarios de Mac a sitios falsos que simulan una actualización del sistema operativo y los engañan para ejecutar un comando malicioso. El programa resultante roba carteras de criptomonedas y credenciales de servicios en la nube guardadas en el navegador."
expuestos: "Personas con computadora Mac que hacen clic en resultados de búsqueda patrocinados, en particular quienes guardan carteras de criptomonedas o credenciales de trabajo (AWS, Azure, repositorios de código) en el navegador."
verificacion: "Confirmar si en los últimos días se siguió una instrucción de 'actualizar macOS' desde un sitio inesperado que pedía pegar un comando en la aplicación Terminal, y revisar las extensiones instaladas en el navegador."
impacto: "Robo de credenciales de servicios en la nube, código fuente y carteras de criptomonedas; en equipos de trabajo, esto puede convertirse en una puerta de entrada a la infraestructura de la organización."
grc_activo: "Equipos Mac de personas y empleados; carteras de criptomonedas y credenciales guardadas en el navegador (SSH, AWS, Azure, npm)"
grc_vector: "Anuncios patrocinados en buscadores que redirigen a sitios falsos con una pantalla de 'actualización de macOS' que engaña a la persona para copiar y ejecutar un comando en Terminal (técnica ClickFix)"
grc_condicion: "Hacer clic en un resultado de búsqueda patrocinado, ver la pantalla falsa de actualización y ejecutar el comando en Terminal"
grc_alcance: "Usuarios de macOS en general; forma parte de la operación norcoreana 'Contagious Interview', que antes usaba ofertas de empleo falsas y ahora se extiende a búsquedas cotidianas"
grc_confianza: "alta"
publicacion: "published"
---

## Qué ocurrió

Investigadores identificaron una campaña de publicidad maliciosa vinculada a Corea del Norte que usa anuncios patrocinados en buscadores para dirigir a usuarios de Mac hacia sitios falsos. Estos sitios muestran una pantalla completa que simula una actualización del sistema operativo y engañan a la persona para que copie y pegue, sin darse cuenta, un comando malicioso en la aplicación Terminal. El comando instala un programa que se conecta cada cinco minutos a un servidor controlado por los atacantes y ejecuta instrucciones adicionales. La campaña es una nueva variante de una operación conocida como "Contagious Interview", que antes usaba ofertas de empleo falsas como señuelo y ahora se extiende a situaciones de navegación cotidianas, como búsquedas de equipo médico o de laboratorio.

## Quién está expuesto

Cualquier persona con una computadora Mac que haga clic en resultados de búsqueda patrocinados, especialmente quienes guardan carteras de criptomonedas o credenciales de trabajo, como accesos a AWS, Azure, repositorios de código o servidores, en el navegador.

## A considerar

El programa también instala una extensión de navegador falsa que se hace pasar por "Google Drive Offline" para vaciar carteras de criptomonedas, y roba credenciales guardadas en Chrome, Brave, Edge, Firefox, Opera y Vivaldi. Quien haya seguido instrucciones para "actualizar macOS" desde un sitio inesperado debería revisar las extensiones instaladas en su navegador y cambiar las credenciales guardadas en él.

## Impacto potencial

El robo de credenciales de servicios en la nube, repositorios de código y accesos remotos puede convertirse en una puerta de entrada a la infraestructura de una organización, además de la pérdida directa de fondos en criptomonedas de la persona afectada.
