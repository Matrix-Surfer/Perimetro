---
title: "Investigadores demuestran que cargas de cómputo en la nube pueden usarse para desestabilizar la red eléctrica"
pubDate: 2026-07-20
source: "The Register — Security"
link: "https://www.theregister.com/ai-and-ml/2026/07/20/malicious-cloud-customers-can-bring-down-the-power-grid/5275193"
category: "Seguridad"
señal: "Investigadores demostraron que un cliente de un proveedor de nube puede, sin necesitar ningún exploit, manipular cargas de trabajo en GPU para generar oscilaciones de potencia capaces de desestabilizar la red eléctrica que alimenta un centro de datos."
supuesto: "El consumo eléctrico de un centro de datos es un problema de capacidad y planificación, no un vector de ataque."
observación: "Qué tan expuestos están los proveedores de nube y los operadores de red eléctrica de la región a patrones de consumo diseñados deliberadamente para desestabilizar el sistema, y si existe monitoreo capaz de distinguir una carga legítima de una maliciosa."
context: "Investigadores de la Universidad de Zhejiang demostraron, mediante un ataque llamado Bit2Watt, que un cliente legítimo de un proveedor de nube puede manipular cargas de cómputo en GPU para generar oscilaciones de potencia dentro de los canales de consumo autorizados, sin necesitar ningún exploit ni acceso no autorizado. En una simulación con mil GPU sobre una red de 1 megavatio, lograron una distorsión eléctrica que desperdició casi la mitad de la corriente y produjo una inestabilidad capaz de derivar en fallas en cascada. La convergencia entre infraestructura de cómputo y de energía deja de ser solo un tema de eficiencia para convertirse en una superficie de riesgo que casi nadie está monitoreando."
publicacion: "published"
---

## La señal

Investigadores de la Universidad de Zhejiang demostraron, mediante una técnica llamada Bit2Watt, que un cliente legítimo de un proveedor de nube puede manipular deliberadamente cargas de cómputo en GPU para generar oscilaciones de potencia eléctrica lo bastante fuertes como para desestabilizar la red que alimenta un centro de datos. El ataque no requiere ningún exploit ni acceso no autorizado: opera completamente dentro de los canales de consumo que el proveedor ya autoriza. En una simulación con mil GPU sobre una red de un megavatio, los investigadores generaron una distorsión eléctrica que desperdició casi la mitad de la corriente y produjo una inestabilidad capaz de derivar en fallas en cascada.

## El supuesto que se rompe

La idea de que el consumo eléctrico de un centro de datos es únicamente un problema de capacidad y planificación energética. El hallazgo muestra que el mismo consumo, diseñado de forma deliberada, puede convertirse en un vector de ataque contra infraestructura física crítica, sin que el proveedor de nube tenga forma sencilla de distinguirlo de una carga de trabajo legítima.

## Qué observar

Qué tan expuestos están los proveedores de nube y los operadores de red eléctrica de la región a patrones de consumo diseñados para desestabilizar el sistema, y si existe algún mecanismo de monitoreo, del lado del proveedor o del regulador, capaz de detectar esa diferencia antes de que ocurra un incidente real.
