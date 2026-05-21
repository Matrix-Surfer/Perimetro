---
title: "Grupos con IA atacan gobiernos y sector financiero en América Latina"
date: "2026-05-21"
tipo: "Otro"
status: "Activa"
resumen: "Dos grupos de amenaza identificados como SHADOW-AETHER-040 y SHADOW-AETHER-064 están usando agentes de IA para ejecutar intrusiones dirigidas a gobiernos y sector financiero en América Latina. Uno de los grupos sigue activo desde abril de 2026."
source: "The Hacker News"
link: "https://thehackernews.com/2026/05/threatsday-bulletin-linux-rootkits.html"
publicacion: "published"
---

## Contexto

Campañas activas desde diciembre 2025. Dos grupos independientes usan IA agentica para generar herramientas dinámicamente y enrutar accesos vía ProxyChains y SSH. Las tácticas de ambos grupos son notablemente similares, lo que sugiere un modelo compartido o derivado. SHADOW-AETHER-040 operó entre diciembre 2025 y enero 2026; SHADOW-AETHER-064 continúa activo desde abril.

El uso de IA reduce el costo y tiempo de preparación de los ataques, permitiendo mayor volumen y personalización de intrusiones sin requerir capacidades técnicas avanzadas por parte del operador.

## Impacto potencial

Organizaciones gubernamentales y del sector financiero en América Latina son el objetivo directo. México, por su tamaño económico y digitalización creciente, es un objetivo natural dentro de esta región. La IA permite a estos grupos escalar y personalizar ataques que antes requerían equipos especializados.

## Recomendaciones

- Revisar logs de acceso remoto (SSH, VPN) en busca de conexiones desde IPs anónimas o rangos inusuales.
- Verificar que los accesos privilegiados cuenten con MFA y monitoreo de sesión activo.
- Alertar al equipo de TI sobre el uso de proxies encadenados como señal de movimiento lateral.
- En organizaciones financieras o con contratos gubernamentales, elevar el nivel de alerta y revisar accesos de terceros.
