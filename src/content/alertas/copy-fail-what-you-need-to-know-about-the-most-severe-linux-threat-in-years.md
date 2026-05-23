---
title: "Copy Fail (CVE-2026-31431): vulnerabilidad crítica en el kernel Linux permite escalar a root sin dejar rastro"
date: "2026-05-23"
tipo: "Otro"
status: "Activa"
resumen: "CVE-2026-31431 es una escalación de privilegios local en el kernel Linux que permite obtener acceso root de forma sigilosa. Afecta millones de sistemas incluyendo servidores, VPS y contenedores."
source: "Unit 42 — Palo Alto Networks"
link: "https://unit42.paloaltonetworks.com/cve-2026-31431-copy-fail/"
publicacion: "published"
---

## Contexto

Unit 42 documentó Copy Fail (CVE-2026-31431), una vulnerabilidad en el mecanismo de caché de páginas del kernel Linux que permite a un usuario sin privilegios escalar a root de forma silenciosa. Afecta sistemas Linux en general, incluyendo entornos Kubernetes y contenedores. La explotación no deja señales evidentes en los logs estándar, lo que dificulta la detección post-compromiso.

## Impacto potencial

Cualquier servidor, VPS o instancia cloud con Linux sin parche es vulnerable. Un atacante con acceso básico al sistema — vía cuenta comprometida, webshell o cualquier otro vector inicial — puede obtener control total del servidor. En entornos de hosting compartido o Kubernetes, el impacto puede extenderse a otros servicios en el mismo nodo.

## Recomendaciones

- Actualizar el kernel Linux a la versión parcheada en todos los servidores y VPS.
- En entornos cloud (AWS, GCP, Azure), verificar que las imágenes base estén actualizadas.
- En Kubernetes, actualizar los nodos y revisar las imágenes de contenedor que incluyen kernel compartido.
- Priorizar servidores con acceso externo o múltiples usuarios sobre infraestructura puramente interna.
