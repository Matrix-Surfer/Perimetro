---
title: "Hackers iraníes despliegan MiniFast y MiniJunk V2 mediante phishing y envenenamiento SEO"
date: "2026-05-26"
tipo: "Phishing"
status: "En monitoreo"
resumen: "La campaña de Nimbus Manticore combina phishing dirigido con resultados de búsqueda manipulados: el primer resultado de Google para ciertas búsquedas de software legítimo puede llevar directo al malware. Si la empresa no tiene filtrado de DNS ni controles de navegación, el empleado no tiene señales visuales de alerta — el sitio malicioso parece exactamente lo que estaba buscando."
source: "The Hacker News"
link: "https://thehackernews.com/2026/05/iranian-hackers-deploy-minifast-and.html"
publicacion: "published"
---

## Contexto

El grupo iraní Nimbus Manticore (UNC1549) está desplegando dos nuevas herramientas de acceso persistente — MiniFast y MiniJunk V2 — mediante una combinación de spear phishing y envenenamiento SEO. En el vector SEO, los atacantes posicionan páginas falsas en los primeros resultados de búsqueda para términos relacionados con software del sector aeronáutico y tecnológico. En el vector de phishing, usan señuelos que imitan comunicaciones de organizaciones conocidas del sector.

## Impacto potencial

MiniFast y MiniJunk V2 son implantes de acceso persistente: una vez instalados, el atacante mantiene presencia en el sistema durante meses sin generar alertas evidentes. El objetivo es espionaje y recopilación de información — no cifrado ni extorsión. Para empresas cuyos empleados buscan software técnico en Google sin filtros de navegación, el riesgo de instalación inadvertida es real incluso sin abrir un correo de phishing.

## Recomendaciones

- Activar filtrado de DNS con categorías de protección contra sitios de phishing y dominios recién registrados.
- Capacitar al equipo sobre que los resultados patrocinados y orgánicos de Google pueden llevar a sitios maliciosos — especialmente para búsquedas de software técnico.
- Revisar IOCs publicados para MiniFast y MiniJunk en sistemas críticos.
