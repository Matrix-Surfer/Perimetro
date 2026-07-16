---
title: "Fallas en un software de gestión de configuración de red usado por telecomunicaciones y grandes empresas permiten ejecutar código sin necesitar contraseña"
date: "2026-07-16"
source: "INCIBE-CERT"
link: "https://www.incibe.es/incibe-cert/alerta-temprana/avisos/multiples-vulnerabilidades-en-ibm-tivoli-netcool-configuration-manager"
categoria: "Vulnerabilidad"
ambito: "Organizaciones"
nivelAtencion: "Alto"
status: "En monitoreo"
resumen: "IBM corrigió 7 fallas de seguridad en Tivoli Netcool Configuration Manager, software usado por operadores de telecomunicaciones y grandes empresas para administrar la configuración de sus redes. Una de las fallas es crítica y permite ejecutar código de forma remota; otra permite evadir la verificación de identidad y entrar sin contraseña a aplicaciones administrativas. No hay evidencia de explotación activa, pero el parche ya está disponible."
expuestos: "Organizaciones, principalmente operadores de telecomunicaciones y grandes empresas, que usan IBM Tivoli Netcool Configuration Manager en versiones 6.4.2 GA a 6.4.2.24 sin el parche de julio de 2026."
verificacion: "Confirmar la versión instalada de IBM Tivoli Netcool Configuration Manager y actualizar a la versión 6.4.2, que corrige las vulnerabilidades."
impacto: "Ejecución de código malicioso en el sistema, acceso no autorizado a aplicaciones administrativas, y posible manipulación del tráfico de red de la organización."
grc_activo: "IBM Tivoli Netcool Configuration Manager (software de gestión de configuración de red) y las aplicaciones administrativas de IBM WebSphere que lo soportan"
grc_vector: "Deserialización insegura de datos en el conector SOAP/JMX que permite ejecución remota de código; mecanismo de autenticación incorrecto en aplicaciones JAX-WS; además fallas de manipulación de solicitudes HTTP y ejecución de código en el navegador"
grc_condicion: "Tener IBM Tivoli Netcool Configuration Manager en versión 6.4.2 GA a 6.4.2.24 sin el parche de julio 2026, con los privilegios necesarios para alcanzar el componente vulnerable"
grc_explotacion: "investigacion"
grc_alcance: "Operadores de telecomunicaciones y grandes empresas que administran redes complejas con este software"
grc_confianza: "alta"
publicacion: "published"
---

## Qué ocurrió

IBM publicó 7 correcciones de seguridad para Tivoli Netcool Configuration Manager, software que usan operadores de telecomunicaciones y grandes empresas para administrar la configuración de sus redes. Una de las fallas es de severidad crítica y permite ejecutar código de forma remota a través de un componente de comunicación del sistema. Otra falla permite evadir la verificación de identidad y obtener acceso no autorizado a aplicaciones administrativas. Las cinco fallas restantes, de severidad alta y media, permiten manipular el procesamiento de solicitudes web y ejecutar código malicioso en el navegador de un usuario autenticado. INCIBE, el centro de respuesta a incidentes de España, no reporta explotación activa de ninguna de las siete fallas. IBM recomienda actualizar a la versión 6.4.2, que corrige el conjunto completo de vulnerabilidades.

## Quién está expuesto

### Para organizaciones

Operadores de telecomunicaciones y empresas grandes que administran redes complejas con IBM Tivoli Netcool Configuration Manager en versiones 6.4.2 GA a 6.4.2.24.

## Impacto potencial

Un atacante que aproveche la falla crítica podría ejecutar código en el sistema de gestión de red y, desde ahí, alterar la configuración de la infraestructura de red de la organización. La falla de evasión de verificación de identidad permite acceder a funciones administrativas sin credenciales válidas, lo que amplía el riesgo de manipulación no autorizada.
