---
title: "Ataque a la cadena de suministro compromete 32 paquetes NPM de Red Hat"
date: "2026-06-02"
categoria: "Terceros"
nivelAtencion: "Medio"
status: "En monitoreo"
parche: "Desconocido"
explotacion: "No confirmado"
resumen: "Atacantes publicaron 96 versiones maliciosas de 32 paquetes de software de Red Hat en el registro NPM —repositorio de código abierto que millones de aplicaciones web usan como dependencia— inyectando un gusano que roba credenciales. Proyectos que instalaron estas versiones comprometidas pueden haber incorporado el código malicioso sin saberlo."
source: "SecurityWeek"
link: "https://www.securityweek.com/supply-chain-attack-hits-32-red-hat-npm-packages/"
publicacion: "published"
---

## Contexto

Atacantes comprometieron las cuentas de publicación de paquetes NPM asociadas a Red Hat y publicaron 96 versiones maliciosas de 32 paquetes legítimos. NPM es el registro de paquetes de JavaScript más grande del mundo —repositorio donde los desarrolladores publican y descargan código reutilizable. Los paquetes comprometidos contenían un gusano —tipo de malware que se replica automáticamente— similar a Mini Shai-Hulud, diseñado para robar credenciales del entorno de desarrollo. Cualquier proyecto que haya actualizado estas dependencias durante el período de compromiso puede tener el código malicioso en su base de código.

## Por qué importa

Los ataques a la cadena de suministro de software apuntan a un punto ciego de la mayoría de equipos de desarrollo: las dependencias de terceros. Un proyecto web moderno puede tener cientos de paquetes NPM como dependencias; nadie revisa el código de cada uno. Si un paquete legítimo se contamina, el malware llega como una actualización normal. Para empresas con equipos de desarrollo —o que contratan desarrollo externo— el riesgo es que el código malicioso termine en los sistemas de producción sin que nadie lo note.

## Impacto potencial

### Para personas

Indirecto. Si una aplicación web que usas fue construida con código comprometido y el gusano capturó credenciales del equipo de desarrollo, esas credenciales pueden incluir acceso a sistemas donde están tus datos.

### Para organizaciones

Para empresas con equipos de desarrollo: las credenciales capturadas del entorno de desarrollo pueden incluir acceso a repositorios de código, sistemas de CI/CD —pipelines de integración y despliegue continuo—, bases de datos de staging, y en el peor caso, claves de producción. Un equipo de desarrollo comprometido es una puerta a toda la infraestructura que ese equipo administra.

## Recomendaciones

### Para personas

No aplica acción directa a menos que seas desarrollador de software.

### Para organizaciones

Si la empresa tiene equipo de desarrollo o contratos con proveedores de desarrollo de software: solicitar a TI o al equipo de desarrollo que verifique si algún proyecto tiene dependencias en los paquetes comprometidos. Los paquetes afectados están documentados en el reporte de SecurityWeek. Como medida de higiene: revisar el proceso de gestión de dependencias —¿hay revisión de cambios en dependencias antes de instalar actualizaciones?— y verificar si existe una lista de paquetes de terceros aprobados para uso en proyectos de la empresa.

## Pregunta diagnóstica

¿Tiene tu empresa visibilidad sobre las dependencias de terceros que usa el código de sus aplicaciones, y existe un proceso para detectar si alguna de esas dependencias fue comprometida?
