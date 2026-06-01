---
title: "Más de 30 paquetes npm de Red Hat comprometidos para robar credenciales de desarrolladores"
date: "2026-06-01"
categoria: "Terceros"
nivelAtencion: "Alto"
status: "Activa"
parche: "Desconocido"
explotacion: "Activa"
resumen: "Más de 30 paquetes npm bajo el espacio oficial de Red Hat '@redhat-cloud-services' fueron comprometidos en un ataque de cadena de suministro. Los paquetes distribuían 'Miasma', una variante de malware diseñada para robar credenciales de los desarrolladores que los instalan."
source: "BleepingComputer"
link: "https://www.bleepingcomputer.com/news/security/red-hat-npm-packages-compromised-to-steal-developer-credentials/"
publicacion: "published"
---

## Contexto

Más de 30 paquetes npm (componentes de software reutilizables) publicados bajo el espacio oficial de Red Hat —`@redhat-cloud-services`— fueron comprometidos en un ataque de cadena de suministro. Los paquetes contenían "Miasma", una variante nueva de malware diseñada para robar credenciales de los desarrolladores que los descargaban. Red Hat es una empresa de software empresarial ampliamente usada en infraestructura de nube. Los paquetes afectados están siendo usados por equipos que trabajan con servicios en la nube de Red Hat, lo que amplía significativamente el alcance potencial del robo.

## Por qué importa

- Los paquetes venían de un espacio de nombres oficial y confiable — los desarrolladores no tenían razón para dudar de ellos.
- Las credenciales robadas pueden incluir accesos a infraestructura en la nube, bases de datos, repositorios de código y sistemas de despliegue.
- El ataque apunta al momento más vulnerable de la cadena de software: cuando un desarrollador instala una dependencia.

## Impacto potencial

### Para personas

- Desarrolladores que usan paquetes `@redhat-cloud-services` pueden tener credenciales de trabajo comprometidas.
- Señal de alerta: actividad inusual en cuentas de nube (AWS, Azure, GCP) o accesos a repositorios desde ubicaciones no reconocidas.

### Para organizaciones

- Las credenciales robadas a un desarrollador son equivalentes a las credenciales de la infraestructura que ese desarrollador administra.
- Un atacante con esas claves puede leer datos, modificar configuraciones, desplegar código malicioso o paralizar servicios.
- Si la organización usa Red Hat OpenShift, Ansible o cualquier componente del ecosistema `@redhat-cloud-services`, debe asumir exposición potencial.

## Perspectiva Perímetro

El patrón es "confianza en el origen como vulnerabilidad": los atacantes no falsificaron el paquete con un nombre similar — comprometieron los paquetes reales bajo el espacio de Red Hat. Eso elimina el filtro más común ("¿viene de una fuente confiable?"). Las organizaciones que confían en que sus proveedores de software gestionan la seguridad de sus propias dependencias están delegando un riesgo que no pueden verificar directamente.

## Perspectiva GRC

- **Gobierno:** ¿Quién en la organización autoriza o supervisa qué paquetes de software puede instalar el equipo de desarrollo?
- **Riesgo:** Los paquetes de terceros instalados en entornos de desarrollo son una superficie de ataque activa — ¿está inventariada?
- **Terceros:** La confianza en un proveedor de software no elimina la responsabilidad de verificar su integridad periódicamente.
- **Continuidad:** Si las credenciales de infraestructura fueron robadas, el daño puede estar ocurriendo ahora — no esperar confirmación para rotar accesos.

## Recomendaciones

### Para personas

- Si trabajas con paquetes `@redhat-cloud-services`, revisa si tienes versiones instaladas en las últimas semanas y rota tus credenciales de acceso a la nube de inmediato.
- Activa alertas de actividad en tus cuentas de AWS, Azure o GCP para detectar accesos inusuales.

### Para organizaciones

**Gestión**
- Confirmar con el equipo de desarrollo si usan paquetes del espacio `@redhat-cloud-services` y en qué proyectos.
- Rotar todas las credenciales de infraestructura accesibles desde entornos de desarrollo como medida preventiva.
- No esperar confirmación de compromiso — si los paquetes estuvieron instalados, tratar las credenciales como potencialmente expuestas.

**Técnicas**
- Auditar los paquetes npm instalados en proyectos que usen `@redhat-cloud-services` y compararlos contra los checksums oficiales de Red Hat.
- Revocar y regenerar tokens de API, llaves de acceso a nube y credenciales de CI/CD accesibles desde los entornos afectados.
- Si no tienes equipo de TI: contactar hoy a tu proveedor de desarrollo y solicitar revisión del inventario de dependencias y rotación de credenciales de infraestructura.

## Pregunta diagnóstica

¿Sabe qué herramientas usan sus desarrolladores y quién es responsable de verificar que no estén comprometidas?
