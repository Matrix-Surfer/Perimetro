---
title: "Un grupo de extorsión de datos ataca software de gestión de manufactura expuesto en Internet para robar diseños de productos"
date: "2026-07-25"
source: "The Hacker News"
link: "https://thehackernews.com/2026/07/cl0p-affiliates-target-internet-exposed.html"
categoria: "Vulnerabilidad"
ambito: "Organizaciones"
nivelAtencion: "Alto"
status: "Activa"
resumen: "Atacantes vinculados al grupo de extorsión de datos Cl0p explotan fallas en PTC Windchill y FlexPLM, software usado por empresas de manufactura para gestionar el diseño de sus productos, cuando estas instalaciones quedan expuestas directamente a internet sin necesitar contraseña."
expuestos: "Empresas de manufactura que usan PTC Windchill o FlexPLM para gestionar el diseño de sus productos, con esos sistemas accesibles directamente desde internet."
verificacion: "Confirmar si la organización usa PTC Windchill o FlexPLM y si esos sistemas están expuestos directamente a internet en lugar de restringidos a la red interna."
impacto: "Robo de información confidencial de diseño de productos, con la amenaza adicional de extorsión si la organización no paga para evitar la publicación de esos datos."
grc_activo: "Instalaciones de PTC Windchill y FlexPLM, software de gestión del ciclo de vida de productos usado en manufactura"
grc_vector: "Los atacantes combinan una falla de divulgación de información sin autenticar en el punto de conexión de FlexPLM (WSDL) con una falla del lado del servidor en el módulo de inicio de sesión de Windchill, lo que permite acceder sin contraseña válida"
grc_condicion: "Tener PTC Windchill o FlexPLM expuestos directamente a internet, sin restringir el acceso a la red interna de la organización"
grc_alcance: "Empresas de manufactura, incluidas maquiladoras y proveedores industriales, que usan estos sistemas con acceso expuesto; campaña de extorsión activa"
grc_confianza: "alta"
publicacion: "published"
---

## Qué ocurrió

Atacantes vinculados al grupo de extorsión de datos Cl0p (también conocido como Chubby Scorpius, FIN11 o Lace Tempest) están explotando fallas encadenadas en PTC Windchill y FlexPLM, software que las empresas de manufactura usan para gestionar el diseño y ciclo de vida de sus productos. Cuando estos sistemas quedan expuestos directamente a internet, los atacantes combinan una falla que revela información sin necesitar contraseña con otra en el módulo de inicio de sesión, lo que les permite entrar sin credenciales válidas y extraer datos como parte de una campaña de extorsión.

## Quién está expuesto

Empresas de manufactura, incluidas maquiladoras y proveedores de la cadena industrial, que usan PTC Windchill o FlexPLM para administrar el diseño de sus productos y que mantienen esos sistemas accesibles directamente desde internet en lugar de restringirlos a su red interna.

## A considerar

El sector de manufactura tiene presencia importante en México, particularmente en la industria maquiladora, lo que hace relevante confirmar si algún proveedor o planta propia usa estos sistemas con exposición directa a internet. Restringir el acceso a la red interna, aunque no elimine la falla de origen, reduce de inmediato la superficie de ataque mientras se aplican las correcciones del fabricante.

## Impacto potencial

El robo de diseños de productos representa una pérdida de ventaja competitiva y propiedad intelectual, además del riesgo de extorsión: el grupo Cl0p amenaza con publicar los datos robados si la organización no paga.
