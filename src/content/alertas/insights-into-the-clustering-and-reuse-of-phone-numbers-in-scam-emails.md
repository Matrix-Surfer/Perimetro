---
title: "Cisco Talos: los números telefónicos en correos de scam se reutilizan — y eso permite detectarlos"
date: "2026-05-23"
tipo: "Otro"
status: "En monitoreo"
resumen: "Talos comenzó a rastrear números telefónicos dentro de correos de scam como indicadores de compromiso. Los análisis muestran patrones de reutilización que permiten detectar campañas activas antes de que los usuarios caigan en ellas."
source: "Cisco Talos Blog"
link: "https://blog.talosintelligence.com/insights-into-the-clustering-and-reuse-of-phone-numbers-in-scam-emails/"
publicacion: "published"
---

## Contexto

Cisco Talos comenzó a recolectar números telefónicos incluidos en correos de scam como un nuevo indicador de compromiso (IOC). El análisis de patrones de reutilización muestra que los actores maliciosos reciclan los mismos números en múltiples campañas, lo que permite agrupar correos aparentemente distintos bajo el mismo operador. Este enfoque añade una capa adicional de detección que va más allá del análisis de dominios y URLs.

## Impacto potencial

Los correos de scam que incluyen un número de teléfono ("llama ahora para resolver tu problema") son una variante creciente del phishing clásico, especialmente efectiva contra usuarios no técnicos. En México, donde las estafas por llamada telefónica son frecuentes, este vector combina la credibilidad aparente del correo con la presión inmediata de una llamada. Empleados de atención a clientes, administración y finanzas son los perfiles más expuestos.

## Recomendaciones

- Capacitar al personal para no llamar a números incluidos en correos no solicitados, aunque parezcan legítimos.
- Verificar siempre el número de contacto de un proveedor o institución en su sitio web oficial, no en el correo recibido.
- Reportar correos sospechosos al área de IT antes de interactuar con ellos — los números de teléfono incluidos son útiles como IOC para bloquear campañas activas.
