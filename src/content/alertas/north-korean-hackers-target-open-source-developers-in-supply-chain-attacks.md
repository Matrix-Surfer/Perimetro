---
title: "Paquetes de código abierto comprometidos distribuyen troyanos y roban credenciales de desarrolladores"
date: "2026-07-06"
source: "SecurityWeek"
link: "https://www.securityweek.com/north-korean-hackers-target-open-source-developers-in-supply-chain-attacks/"
categoria: "Terceros"
ambito: "Organizaciones"
nivelAtencion: "Alto"
status: "Activa"
resumen: "Un grupo de atacantes vinculado a Corea del Norte comprometió cuentas de mantenedores y modificó 162 versiones de 108 paquetes en NPM, Packagist, Go y extensiones de Chrome para insertar código malicioso. Desarrolladores que instalaron las versiones afectadas quedan expuestos a robo de credenciales y acceso remoto no autorizado. Se recomienda revisar las dependencias del proyecto contra la lista de paquetes comprometidos."
expuestos: "Desarrolladores que instalaron los paquetes comprometidos y las organizaciones que dependen de ese código en producción."
verificacion: "Revisar si el proyecto usa alguno de los paquetes comprometidos en NPM, Packagist, Go o Chrome, y revisar el historial de Git en busca de cambios sospechosos."
impacto: "Robo de credenciales de repositorios, código fuente, accesos a la nube e infraestructura de despliegue (CI/CD)."
grc_activo: "Paquetes de código abierto en NPM, Packagist, módulos Go y extensiones de Chrome"
grc_vector: "Compromiso de cuentas de mantenedores para insertar cargadores JavaScript ocultos en paquetes legítimos"
grc_condicion: "Que el desarrollador instale o actualice a la versión comprometida del paquete"
grc_explotacion: "activa"
grc_alcance: "162 artefactos maliciosos en 108 paquetes distribuidos en NPM, Packagist, Go y Chrome"
grc_confianza: "alta"
publicacion: "published"
---

## Qué ocurrió

Un grupo de atacantes vinculado a Corea del Norte, parte de una operación más amplia dirigida a desarrolladores, comprometió cuentas de mantenedores de paquetes de código abierto. Modificó 162 versiones de 108 paquetes distintos en NPM, Packagist, módulos de Go y extensiones de Chrome. Insertó código oculto que descarga programas maliciosos adicionales desde infraestructura basada en blockchain, una técnica que dificulta el bloqueo por los sistemas de seguridad tradicionales. También alteró el historial de Git para ocultar los cambios. La campaña está activa desde diciembre de 2025 y se expandió recientemente a más plataformas.

## Quién está expuesto

### Para personas
Desarrolladores independientes que instalaron alguno de los paquetes comprometidos en sus proyectos.

### Para organizaciones
Empresas cuyo software depende de estos paquetes de código abierto, incluso sin saberlo, si algún desarrollador los instaló como dependencia indirecta.

## A considerar

Revisar el historial de cambios (Git) de las dependencias del proyecto en busca de modificaciones no explicadas es una señal de alerta adicional, más allá de simplemente comparar números de versión.

## Impacto potencial

Con acceso a credenciales de repositorios, un atacante puede robar código fuente propietario, moverse hacia los accesos de nube de la organización o insertar más código malicioso en el proceso de desarrollo, afectando a todos los clientes que usen el software final.
