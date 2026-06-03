---
title: "345 días de exposición sin probar: el caso de un banco con pruebas de penetración anuales"
date: "2026-06-03"
tipo: "Otro"
categoria: "Vulnerabilidad"
nivelAtencion: "Medio"
status: "En monitoreo"
parche: "Desconocido"
explotacion: "No confirmado"
resumen: "Un análisis de caso en el sector bancario muestra que las pruebas de penetración anuales —de dos semanas— dejan 345 días del año con superficies de ataque no validadas. En un entorno donde los sistemas y configuraciones cambian constantemente, las vulnerabilidades abiertas entre prueba y prueba representan un riesgo real no medido."
source: "BleepingComputer"
link: "https://www.bleepingcomputer.com/news/security/what-345-days-of-untested-exposure-looks-like-at-a-bank/"
publicacion: "published"
---

## Contexto

Sprocket Security analiza el caso de un banco que realiza pruebas de penetración —pentests: simulaciones de ataque realizadas por expertos para encontrar vulnerabilidades— durante dos semanas al año. Las dos semanas de prueba validan la seguridad de los sistemas en ese momento. Los otros 345 días del año, los sistemas cambian: se añaden nuevas aplicaciones, se modifican configuraciones, se integran proveedores nuevos.

Las vulnerabilidades que aparecen en esos 345 días entre prueba y prueba no son detectadas hasta el siguiente ciclo anual —si es que siguen presentes y son encontradas—.

## Impacto potencial

### Para personas

No aplica directamente para usuarios individuales.

### Para organizaciones

El modelo de pentest anual era adecuado cuando los sistemas cambiaban poco. En un entorno de desarrollo ágil, servicios en la nube y constante incorporación de nuevas herramientas, la superficie de ataque cambia más rápido que el ciclo de prueba. El resultado es exposición no medida durante la mayor parte del año.

## Perspectiva GRC

El pentest anual nació como requisito de cumplimiento regulatorio —PCI DSS, ISO 27001, CNBV en México— no como herramienta de seguridad operativa. Cumplir el requisito no equivale a tener visibilidad real sobre el riesgo.

La pregunta de gobernanza: ¿qué tan rápido cambia la superficie de ataque de tu organización comparado con la frecuencia de tus pruebas de seguridad?

## Recomendaciones

### Para organizaciones

El modelo de un solo pentest anual es suficiente para cumplimiento regulatorio, pero insuficiente para gestión de riesgo real. Las alternativas no requieren presupuestos grandes: escaneo automatizado de vulnerabilidades mensual, revisión de cambios en la configuración de sistemas críticos tras cada despliegue, y pruebas focalizadas en sistemas nuevos antes de ponerlos en producción.

La priorización no tiene que ser costosa: saber qué sistemas son nuevos o cambiaron en los últimos 90 días y enfocar la revisión ahí es más efectivo que repetir el mismo pentest de los mismos sistemas estables.

---

El cumplimiento regulatorio y la seguridad real no son lo mismo. El primero es un piso mínimo documentado; el segundo es un estado dinámico que requiere atención continua. La lección permanente: una organización que solo mide su seguridad cuando lo exige un regulador está midiendo el pasado, no el riesgo actual.
