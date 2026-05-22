---
title: "Ataque a la cadena de suministro npm compromete GitHub y múltiples empresas"
date: "2026-05-22"
tipo: "Filtración"
status: "En monitoreo"
resumen: "Hackers comprometieron una extensión de VS Code (Nx Console) mediante un ataque a paquetes npm de TanStack, lo que les permitió robar tokens y acceder a 3,800 repositorios internos de GitHub. El vector: una actualización maliciosa en herramientas de desarrollo ampliamente usadas."
source: "BleepingComputer"
link: "https://www.bleepingcomputer.com/news/security/github-links-repo-breach-to-tanstack-npm-supply-chain-attack/"
publicacion: "published"
---

## Contexto

GitHub confirmó que atacantes accedieron a 3,800 de sus repositorios internos mediante tokens robados a través de una versión maliciosa de la extensión Nx Console para VS Code. Esa extensión fue comprometida en un ataque previo a paquetes npm del proyecto TanStack. Grafana y otras empresas también fueron afectadas por el mismo vector. El grupo TeamPCP asumió responsabilidad.

## Impacto potencial

Empresas con equipos de desarrollo que usan VS Code y paquetes npm están potencialmente expuestas. Si algún desarrollador instaló la extensión Nx Console o dependencias de TanStack durante la ventana del ataque, sus tokens de GitHub pudieron ser exfiltrados y usados para acceder a repositorios de código, secretos de configuración o pipelines de CI/CD.

## Recomendaciones

Revisar extensiones instaladas en VS Code y eliminar versiones no verificadas de Nx Console. Rotar tokens de GitHub y revisar el historial de acceso a repositorios. Auditar dependencias npm en busca de paquetes comprometidos del ecosistema TanStack.
