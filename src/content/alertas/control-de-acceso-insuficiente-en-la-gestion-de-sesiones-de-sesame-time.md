---
title: "Una falla en la app de control horario Sesame Time permite suplantar sesiones de otros usuarios"
date: "2026-07-14"
source: "INCIBE-CERT"
link: "https://www.incibe.es/incibe-cert/alerta-temprana/avisos/control-de-acceso-insuficiente-en-la-gestion-de-sesiones-de-sesame-time"
categoria: "Vulnerabilidad"
ambito: "Organizaciones"
nivelAtencion: "Medio"
status: "En monitoreo"
resumen: "Sesame Time, una aplicación de gestión de recursos humanos y control horario usada en empresas, tiene una falla que no verifica correctamente a quién pertenece cada sesión activa. Quien obtenga un identificador de sesión válido podría suplantar a otro usuario y acceder a sus datos. Ya existe una versión corregida."
expuestos: "Organizaciones que usan Sesame Time para gestión de personal y control de horarios."
verificacion: "Confirmar si la organización usa Sesame Time y actualizar a la versión más reciente disponible."
impacto: "Un atacante que obtenga un identificador de sesión válido podría acceder al correo, identificador de usuario, rol y datos corporativos confidenciales de la víctima."
grc_activo: "Cuentas y datos de empleados gestionados en la aplicación Sesame Time"
grc_vector: "El sistema valida las solicitudes usando únicamente el identificador de sesión (USID), sin verificar que pertenezca legítimamente a quien lo presenta"
grc_condicion: "Que un atacante obtenga un identificador de sesión (USID) válido de otro usuario"
grc_alcance: "Instalaciones de Sesame Time sin la actualización que refuerza la validación de autorización"
publicacion: "published"
---

## Qué ocurrió

Sesame Time, una aplicación web de gestión de recursos humanos y control de horarios usada en entornos corporativos, tiene una falla en la forma en que valida las sesiones activas. El sistema confía únicamente en el identificador de sesión (USID) que acompaña cada solicitud, sin comprobar que ese identificador pertenezca realmente a la persona que lo está usando. Un atacante que consiga un identificador válido, por ejemplo interceptado o filtrado, podría suplantar la sesión de otro usuario y acceder a su información sin necesitar su contraseña. Ya existe una versión que corrige el problema, reforzando la verificación de autorización.

## Quién está expuesto

### Para organizaciones

Empresas que usan Sesame Time para administrar personal, nómina o control de horarios, especialmente si no han actualizado a la versión más reciente.

## A considerar

Confirmar con el proveedor o el equipo de TI si la organización usa Sesame Time y en qué versión, y aplicar la actualización disponible que refuerza la validación de sesiones.

## Impacto potencial

Con una sesión suplantada, un atacante podría ver el correo, el identificador de usuario, el rol asignado y otros datos corporativos confidenciales de la víctima dentro del sistema de recursos humanos.
