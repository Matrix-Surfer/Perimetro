---
title: "Paquetes falsos de conectores de pago en NPM y PyPI robaron credenciales de desarrolladores"
date: "2026-07-08"
source: "BleepingComputer"
link: "https://www.bleepingcomputer.com/news/security/fake-paysafe-skrill-sdks-on-npm-and-pypi-steal-credentials/"
categoria: "Terceros"
ambito: "Organizaciones"
nivelAtencion: "Alto"
status: "Activa"
resumen: "Investigadores encontraron 17 paquetes falsos en los repositorios NPM y PyPI que se hacían pasar por conectores oficiales de plataformas de pago para robar contraseñas, llaves de API y tokens de acceso a servicios en la nube. Los afectados son equipos de desarrollo que integraron estos paquetes en plataformas de comercio electrónico, criptomonedas o trading en línea. Quien instaló alguno debe rotar de inmediato sus credenciales y revisar sus registros de actividad."
expuestos: "Equipos de desarrollo que integraron los paquetes falsos en plataformas de pago, comercio electrónico, criptomonedas o trading."
verificacion: "Si el proyecto instaló alguno de los 17 paquetes identificados (13 en NPM, 4 en PyPI) y, de ser así, revisar registros de integración continua y el árbol de dependencias."
impacto: "Robo de contraseñas, llaves de API y accesos a servicios en la nube usados para tomar control de cuentas o sistemas de pago."
grc_activo: "Credenciales de desarrolladores: contraseñas, llaves de API, tokens de AWS, GitHub y npm."
grc_vector: "Paquetes falsos en NPM y PyPI que imitan SDKs oficiales de plataformas de pago."
grc_condicion: "Que el equipo de desarrollo instale alguno de los 17 paquetes falsos identificados."
grc_explotacion: "activa"
grc_alcance: "Desarrolladores que integran SDKs de pago en plataformas de comercio electrónico, criptomonedas, trading o videojuegos."
grc_confianza: "alta"
publicacion: "published"
---

## Qué ocurrió

Investigadores identificaron 17 paquetes maliciosos (13 en el repositorio NPM y 4 en PyPI) que se hacían pasar por conectores oficiales de plataformas de pago en línea como Paysafe, Skrill y Neteller. Estos paquetes falsos contenían código que buscaba contraseñas, llaves de API y tokens de acceso guardados en el entorno donde se instalaban, y enviaba esa información a servidores controlados por los atacantes.

## Quién está expuesto

Equipos de desarrollo que integraron alguno de estos paquetes en plataformas de comercio electrónico, videojuegos en línea, criptomonedas o trading. El riesgo es directo para quien instaló el paquete, no para los usuarios finales de esas plataformas.

## A considerar

Rotar de inmediato todas las credenciales que hayan estado presentes en el entorno donde se instaló el paquete: contraseñas, llaves de API y tokens de acceso a servicios en la nube, GitHub o npm. Revisar el árbol de dependencias del proyecto y los registros de integración continua para confirmar si el paquete llegó a ejecutarse.

## Impacto potencial

Con las credenciales robadas, un atacante puede acceder a cuentas de servicios en la nube, repositorios de código o sistemas de pago conectados al proyecto, lo que abre la puerta a fraude financiero o filtración de información adicional.
