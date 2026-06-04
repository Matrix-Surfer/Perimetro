---
title: "Contraseñas encontradas en campos de notas del directorio de usuarios — un problema más común de lo que parece"
pubDate: 2026-06-04
source: "The Register — Security"
link: "https://www.theregister.com/security/2026/06/04/all-the-passwords-were-stored-in-active-directory-description-fields/5250820"
category: "Seguridad"
señal: "Contraseñas de múltiples sistemas encontradas en texto plano en los campos de notas del directorio de usuarios de Windows — visibles para cualquier cuenta de la red, sin privilegios especiales."
supuesto: "Las contraseñas de la organización están donde se gestionan las contraseñas. El resto del directorio de usuarios es información administrativa inerte."
observación: "Si en la organización alguien ha revisado alguna vez qué hay almacenado en los campos de descripción, comentarios y atributos de las cuentas de administrador, servicio y sistemas heredados en Active Directory."
context: "Los administradores usan los campos de texto libre del directorio de usuarios para anotar información útil sobre las cuentas. Con el tiempo, contraseñas temporales, accesos de emergencia y credenciales de sistemas heredados terminan ahí porque es conveniente. Cualquier usuario de la red — incluso con permisos mínimos — puede leer esos campos. Un atacante que entre por cualquier cuenta puede extraerlos en segundos."
grc_cambio: "contraseñas encontradas en campos de texto libre visibles en el directorio corporativo de usuarios"
grc_paradigma: "las contraseñas de la organización están en bóvedas o sistemas dedicados, no en el directorio de usuarios"
grc_horizonte: "meses"
grc_confianza: "media"
publicacion: "published"
---

## La señal

Un auditor de seguridad documentó un caso real: contraseñas de múltiples sistemas encontradas en texto plano dentro de los campos de descripción del directorio de usuarios de Windows (Active Directory). Esos campos son visibles para cualquier cuenta de la red, sin privilegios especiales.

## El supuesto que se rompe

Las contraseñas de la organización están donde se gestionan las contraseñas — en bóvedas o sistemas dedicados. Este supuesto ignora años de decisiones prácticas tomadas bajo presión: "lo anoto aquí por si acaso", "es temporal", "solo lo verá TI". Con el tiempo, ese conocimiento tácito se convierte en riesgo invisible acumulado.

## Qué observar

Si la organización usa Active Directory y si alguien ha revisado alguna vez los campos de descripción, comentarios y atributos de las cuentas de servicio, administrador y sistemas heredados. Las herramientas de auditoría estándar pueden extraer esa información en minutos. Antes de que lo haga un atacante, conviene hacerlo internamente.
