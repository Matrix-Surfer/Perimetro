---
title: "Una falla en PrestaShop permite insertar comandos maliciosos que se activan al exportar los datos de clientes en CSV"
date: "2026-07-13"
source: "INCIBE-CERT"
link: "https://www.incibe.es/incibe-cert/alerta-temprana/avisos/neutralizacion-incorrecta-en-el-firmware-de-prestashop"
categoria: "Vulnerabilidad"
ambito: "Organizaciones"
nivelAtencion: "Medio"
status: "En monitoreo"
resumen: "Se identificó una vulnerabilidad de severidad media en PrestaShop, el sistema usado para crear y administrar tiendas en línea, que permite insertar fórmulas maliciosas a través del campo 'Alias' de la libreta de direcciones. El riesgo se activa cuando el administrador de la tienda exporta los datos de clientes a un archivo CSV y lo abre en un programa de hojas de cálculo como Excel. Afecta a tiendas que usan la versión 8.2.1 de PrestaShop. Aún no existe una corrección disponible."
expuestos: "Negocios que operan una tienda en línea con PrestaShop versión 8.2.1, en particular quienes exportan periódicamente datos de clientes a CSV."
verificacion: "Confirmar la versión de PrestaShop instalada y, mientras no exista una corrección, evitar abrir directamente en Excel u otro programa de hojas de cálculo los archivos CSV exportados desde la tienda sin revisarlos antes en un editor de texto simple."
impacto: "Al abrir el archivo exportado, el programa de hojas de cálculo puede ejecutar el comando oculto en la fórmula, lo que podría dar a un atacante acceso no autorizado a información personal de los clientes de la tienda."
grc_activo: "Datos de clientes almacenados y exportados desde tiendas PrestaShop."
grc_vector: "Inyección de fórmulas maliciosas a través del campo 'Alias' en la libreta de direcciones, que se activan cuando el administrador exporta y abre el archivo de datos en un programa de hojas de cálculo."
grc_condicion: "Un atacante debe registrar o modificar una dirección con una fórmula maliciosa en el campo 'Alias'; el administrador de la tienda debe exportar los datos a CSV y abrirlos con un programa de hojas de cálculo."
grc_alcance: "Tiendas en línea que operan sobre PrestaShop versión 8.2.1."
publicacion: "published"
---

## Qué ocurrió

Se identificó una vulnerabilidad de severidad media en PrestaShop, el sistema de gestión de contenido usado para crear y administrar tiendas en línea. La falla está en el campo "Alias" de la libreta de direcciones: si no se valida correctamente lo que ahí se escribe, un atacante puede insertar una fórmula maliciosa. Esa fórmula no hace nada por sí sola, pero se activa cuando el administrador de la tienda usa la función "Obtener mis datos en CSV" para exportar información de clientes y abre ese archivo en un programa de hojas de cálculo como Excel. Afecta a la versión 8.2.1 de PrestaShop y, por el momento, no hay una corrección disponible.

## Quién está expuesto

Negocios que operan una tienda en línea con PrestaShop 8.2.1, en particular quienes exportan periódicamente los datos de clientes a un archivo CSV para revisarlos o respaldarlos.

## A considerar

Mientras no exista una corrección, revisar el contenido de los archivos CSV exportados en un editor de texto simple antes de abrirlos en un programa de hojas de cálculo reduce el riesgo, porque permite detectar fórmulas sospechosas antes de que se ejecuten.

## Impacto potencial

Si la fórmula maliciosa se ejecuta, el programa de hojas de cálculo puede correr comandos ocultos en el equipo del administrador, lo que podría exponer datos personales de los clientes de la tienda o comprometer el equipo desde el que se hizo la exportación.
