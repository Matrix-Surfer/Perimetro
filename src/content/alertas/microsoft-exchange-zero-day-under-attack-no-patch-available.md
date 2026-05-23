---
title: "Zero-day en Microsoft Exchange bajo ataque activo — sin parche disponible (CVE-2026-42897)"
date: "2026-05-23"
tipo: "Otro"
status: "Activa"
resumen: "CVE-2026-42897 es una vulnerabilidad XSS en Exchange que permite comprometer buzones de Outlook Web Access. Está bajo explotación activa y Microsoft aún no ha publicado parche."
source: "Dark Reading"
link: "https://www.darkreading.com/vulnerabilities-threats/microsoft-exchange-zero-day-no-patch"
publicacion: "published"
---

## Contexto

CVE-2026-42897 es una vulnerabilidad de cross-site scripting (XSS) en Microsoft Exchange que permite a un atacante comprometer buzones de Outlook Web Access (OWA). La falla está bajo explotación activa en la naturaleza y Microsoft no ha publicado parche a la fecha. Organizaciones que exponen OWA a internet son el objetivo inmediato.

## Impacto potencial

Un atacante que explote esta vulnerabilidad puede acceder, leer y manipular correos corporativos sin necesidad de credenciales válidas. Para empresas que usan Exchange On-Premises con OWA expuesto, el riesgo incluye robo de comunicaciones internas, interceptación de facturas o solicitudes de transferencia, y movimiento lateral dentro de la red.

## Recomendaciones

- Si se usa Exchange On-Premises con OWA expuesto a internet, restringir el acceso por IP o colocar detrás de VPN mientras no haya parche disponible.
- Monitorear activamente los logs de OWA en busca de accesos inusuales o desde ubicaciones no reconocidas.
- Activar alertas en Microsoft Defender o el SIEM disponible para eventos de autenticación anómalos en Exchange.
- Aplicar el parche de Microsoft en cuanto esté disponible — marcar como actualización prioritaria.
