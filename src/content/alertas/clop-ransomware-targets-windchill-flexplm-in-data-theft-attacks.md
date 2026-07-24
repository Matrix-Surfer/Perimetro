---
title: "Un grupo de secuestro de información ataca plataformas de gestión de manufactura expuestas en Internet para robar datos de diseño de productos"
date: "2026-07-24"
source: "BleepingComputer"
link: "https://www.bleepingcomputer.com/news/security/clop-ransomware-targets-windchill-flexplm-in-data-theft-attacks/"
categoria: "Vulnerabilidad"
ambito: "Organizaciones"
nivelAtencion: "Crítico"
status: "Activa"
resumen: "El grupo de secuestro de información Clop explota una falla crítica en Windchill y FlexPLM, plataformas de PTC usadas por empresas aeroespaciales, de defensa, automotrices y de tecnología médica para gestionar el diseño de sus productos. La falla permite ejecutar comandos sin necesidad de contraseña en instancias expuestas a Internet. El grupo roba datos de diseño y extorsiona a las empresas por correo, sin cifrar archivos. Ya existe un parche disponible."
expuestos: "Organizaciones de los sectores aeroespacial, defensa, automotriz y tecnología médica que operan Windchill o FlexPLM de PTC expuestos a Internet."
verificacion: "Aplicar el parche de PTC publicado desde el 17 de junio de 2026, y confirmar que las instancias de Windchill o FlexPLM no estén accesibles directamente desde Internet sin una conexión privada (VPN) de por medio."
impacto: "El grupo roba datos sensibles de diseño de productos y amenaza con publicarlos si la empresa no paga, lo que puede exponer propiedad intelectual y ventajas competitivas frente a otros fabricantes."
grc_activo: "Instancias de Windchill y FlexPLM (plataformas de gestión del ciclo de vida de productos de PTC) expuestas a Internet"
grc_vector: "Falla de deserialización insegura que permite ejecutar comandos sin autenticación en instancias expuestas a Internet"
grc_condicion: "Operar Windchill o FlexPLM sin el parche de junio de 2026 y con la instancia accesible directamente desde Internet"
grc_explotacion: "activa"
grc_alcance: "Empresas de los sectores aeroespacial, defensa, automotriz y tecnología médica que usan estas plataformas para gestionar el diseño de sus productos"
grc_confianza: "alta"
publicacion: "published"
---

## Qué ocurrió

El grupo de secuestro de información conocido como Clop está explotando una falla crítica en Windchill y FlexPLM, dos plataformas de la empresa PTC que las organizaciones usan para gestionar el diseño y el ciclo de vida de sus productos, desde la idea inicial hasta la fabricación. La falla permite ejecutar comandos en el servidor sin necesidad de contraseña, siempre que la instancia esté expuesta directamente a Internet. Una vez dentro, el grupo instala una puerta de acceso oculta para mantener presencia y robar datos de diseño de productos. A diferencia de otros ataques de ransomware, Clop no cifra los archivos: extorsiona directamente enviando correos a distintos empleados de la organización, usando cuentas de correo que ya había comprometido antes, y amenaza con publicar la información robada si no se paga. PTC comenzó a publicar el parche el 17 de junio de 2026.

## Quién está expuesto

### Para organizaciones

Empresas de los sectores aeroespacial, defensa, automotriz y tecnología médica, que suelen usar Windchill o FlexPLM para gestionar el diseño de sus productos, especialmente si tienen instancias accesibles directamente desde Internet sin parchar.

### Para personas

No aplica directamente. El riesgo se concentra en la infraestructura de las organizaciones que usan estas plataformas.

## A considerar

Aplicar el parche disponible desde junio es la acción principal. Mientras eso ocurre, colocar estas plataformas detrás de una conexión privada (VPN) en lugar de exponerlas directamente a Internet, aislar cualquier servidor donde se sospeche actividad inusual y rotar las credenciales que puedan haber quedado expuestas reduce el margen de explotación.

## Impacto potencial

Los datos de diseño de productos que maneja este tipo de plataformas suelen incluir información que da ventaja competitiva a la empresa: planos, especificaciones técnicas y procesos de manufactura. Su filtración no solo implica el pago de un rescate potencial, sino la pérdida de propiedad intelectual frente a competidores y, en sectores como el aeroespacial o de defensa, posibles implicaciones de seguridad nacional.
