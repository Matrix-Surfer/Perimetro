---
title: "Técnica permite capturar datos de empresas que eliminaron sus contenedores de almacenamiento en la nube"
date: "2026-06-22"
source: "Unit 42 — Palo Alto Networks"
link: "https://unit42.paloaltonetworks.com/cloud-bucket-hijacking-risks/"
categoria: "Vulnerabilidad"
ambito: "Organizaciones"
nivelAtencion: "Medio"
status: "En monitoreo"
resumen: "Investigadores de Palo Alto documentaron una técnica que permite capturar datos de organizaciones cuando eliminan un contenedor de almacenamiento en la nube sin actualizar las referencias que apuntan a él. Un atacante puede reclamar el mismo nombre y recibir archivos, registros o datos que las aplicaciones seguían enviando a esa dirección."
expuestos: "Organizaciones con infraestructura en la nube que han eliminado o migrado contenedores de almacenamiento en AWS, Azure o GCP"
verificacion: "Auditar qué contenedores de almacenamiento han sido eliminados en el último año y verificar que ninguna aplicación activa siga referenciándolos"
impacto: "Datos enviados a un contenedor eliminado — registros internos, respaldos, archivos de configuración — pueden caer en manos de quien reclame el nombre"
publicacion: "published"
---

## Qué ocurrió

Investigadores de Unit 42 (Palo Alto Networks) documentaron una técnica que afecta a cualquier organización que use almacenamiento en la nube de AWS, Azure o Google Cloud. Cuando una empresa elimina un contenedor de almacenamiento sin actualizar todas las referencias que apuntan a él, un atacante puede registrar el mismo nombre y empezar a recibir archivos, registros y datos que las aplicaciones de la víctima siguen enviando a esa dirección.

## Quién está expuesto

Organizaciones con infraestructura en la nube que han eliminado o migrado contenedores de almacenamiento. El riesgo aumenta cuando hubo reestructuraciones, migraciones a otro proveedor o proyectos eliminados sin revisión completa de qué otros sistemas los referenciaban.

## A considerar

La técnica no explota ninguna vulnerabilidad en el proveedor de nube — aprovecha un comportamiento normal del sistema de nombres. La auditoría debe enfocarse en identificar qué aplicaciones activas todavía hacen referencia a contenedores que ya no existen en la cuenta de la organización.

## Impacto potencial

Un atacante que reclame el nombre puede recibir silenciosamente registros internos, respaldos automáticos, archivos de configuración u otros datos que las aplicaciones siguen enviando. Dependiendo del contenido, esto puede exponer credenciales, datos de clientes o información confidencial de operaciones.
