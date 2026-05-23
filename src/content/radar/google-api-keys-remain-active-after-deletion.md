---
title: "Las API keys de Google siguen activas hasta 23 minutos después de borrarlas"
pubDate: 2026-05-22
source: "Dark Reading"
link: "https://www.darkreading.com/identity-access-management-security/google-api-keys-active-after-deletion"
category: "Seguridad"
context: "Google prometía que borrar una API key era inmediato, pero investigadores confirmaron que siguen siendo válidas hasta 23 minutos después. Para empresas que usan Google Cloud o Workspace: revocar una credencial comprometida no es suficiente — hay una ventana de exposición que Google aún no ha corregido."
publicacion: "published"
---

## Resumen

Un investigador de seguridad descubrió que las API keys de Google Cloud permanecen activas hasta 23 minutos después de ser eliminadas, a pesar de que Google documenta que la revocación es inmediata. Durante esa ventana, una credencial supuestamente cancelada puede seguir siendo usada por un atacante.

## Relevancia

Cualquier empresa que use Google Cloud, Google Maps API, Workspace o servicios de Google con credenciales programáticas está afectada. Si una API key se filtra y se revoca como respuesta de emergencia, hay una ventana de casi media hora en la que el atacante puede seguir operando. El protocolo estándar de "borrar y listo" no es suficiente.
