---
title: "Contraseñas encontradas en campos de notas del directorio de usuarios — un problema más común de lo que parece"
pubDate: 2026-06-04
source: "The Register — Security"
link: "https://www.theregister.com/security/2026/06/04/all-the-passwords-were-stored-in-active-directory-description-fields/5250820"
category: "Seguridad"
señal: "Un auditor encontró contraseñas de múltiples sistemas almacenadas en texto plano en los campos de descripción de Active Directory —el directorio de usuarios de Windows— un lugar visible para cualquier usuario de la red."
supuesto: "Las contraseñas de la organización están donde se gestionan las contraseñas: en bóvedas o sistemas dedicados. El resto del directorio de usuarios es solo información administrativa inerte."
observación: "Si la organización usa Active Directory y si alguien ha revisado alguna vez qué hay almacenado en los campos de descripción, comentarios y atributos extendidos de las cuentas de servicio, administrador y sistemas heredados."
context: "Active Directory tiene campos de texto libre donde los administradores suelen anotar información sobre las cuentas. Con el tiempo, contraseñas de sistemas heredados, credenciales de emergencia y accesos de servicio terminan en esos campos porque es conveniente. Cualquier usuario de la red —incluso con permisos mínimos— puede leerlos. Un atacante que entra a cualquier cuenta de la empresa puede extraer esos campos en segundos."
publicacion: "published"
---

## La señal

Un auditor de seguridad documentó un caso real: contraseñas de múltiples sistemas almacenadas en texto plano en los campos de descripción de Active Directory —el sistema de gestión de usuarios de Windows. Esos campos son visibles para cualquier usuario de la red sin necesitar privilegios especiales.

## El supuesto que se rompe

Las credenciales de la organización están donde deben estar: en bóvedas de contraseñas o sistemas dedicados. Este supuesto ignora años de decisiones convenientes tomadas por administradores bajo presión: "lo anoto aquí por si acaso", "es temporal", "solo lo verá TI". Con el tiempo, ese conocimiento tácito se convierte en riesgo invisible.

## Qué observar

Si la organización usa Active Directory y si alguien ha revisado alguna vez los campos de descripción, comentarios y atributos extendidos de las cuentas de servicio, cuentas de administrador y cuentas de sistemas heredados. Herramientas estándar de auditoría pueden extraer estos campos en minutos. Antes de que lo haga un atacante, conviene hacerlo internamente.
