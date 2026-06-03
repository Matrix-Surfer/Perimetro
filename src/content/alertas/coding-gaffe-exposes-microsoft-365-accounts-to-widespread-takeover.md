---
title: "Error de programación en apps de Microsoft 365 para Android expone cuentas corporativas"
date: "2026-06-03"
tipo: "Otro"
categoria: "Vulnerabilidad"
nivelAtencion: "Alto"
status: "En monitoreo"
parche: "Desconocido"
explotacion: "Reportada"
resumen: "Un ajuste de seguridad desactivado en las versiones para Android de Word, PowerPoint y Excel permitía a cualquier otra app del teléfono robar tokens de autenticación de Microsoft 365. El token robado da acceso a la cuenta corporativa sin necesidad de contraseña ni doble factor."
source: "Dark Reading"
link: "https://www.darkreading.com/application-security/coding-gaffe-exposes-microsoft-365-accounts-takeover"
publicacion: "published"
---

## Contexto

Un ajuste de seguridad desactivado en las versiones para Android de las apps principales de Microsoft 365 —Word, PowerPoint y Excel— dejaba expuestos los tokens de autenticación. Un token de autenticación es la credencial temporal que el sistema usa después de que el usuario ingresa su contraseña; quien lo tiene puede actuar como ese usuario sin necesidad de volver a autenticarse.

Cualquier otra app instalada en el mismo dispositivo Android podía acceder a estos tokens. No se necesitaba una app maliciosa conocida: el fallo estaba en cómo Microsoft configuró la protección por defecto.

## Impacto potencial

### Para personas

Cualquier persona que use Word, Excel o PowerPoint en Android para acceso a cuentas de trabajo estuvo expuesta. Una app aparentemente inocente instalada en el mismo teléfono podía robar el acceso a su cuenta corporativa.

### Para organizaciones

El acceso a una cuenta corporativa de Microsoft 365 incluye correo, archivos en OneDrive y SharePoint, Teams, y en muchos casos integración con sistemas internos. Un token robado es equivalente a una sesión abierta permanente en la cuenta del empleado.

## Perspectiva GRC

Este tipo de fallo —una configuración de seguridad desactivada por error en el código de una app ampliamente desplegada— ilustra un riesgo que las organizaciones no pueden controlar directamente: la seguridad de los clientes de software de sus proveedores. No es un error del administrador de TI. Es un error del fabricante.

La pregunta de gobernanza: ¿qué proceso tiene tu organización para evaluar vulnerabilidades en aplicaciones de proveedores clave antes de que se publiquen parches?

## Recomendaciones

### Para personas

Actualiza las apps de Microsoft 365 en tu Android desde la Play Store. Si usas estas apps para acceso laboral, asegúrate de que el sistema operativo de tu teléfono también esté actualizado.

### Para organizaciones

Verificar que las apps de Microsoft 365 en dispositivos corporativos y BYOD estén en la versión más reciente. Si tu organización usa una política de gestión de dispositivos móviles (MDM), este es el momento de confirmar que las actualizaciones de apps se estén forzando automáticamente.

---

Los tokens de sesión son credenciales de segunda generación: no requieren contraseña para funcionar, pero dan el mismo acceso. Las organizaciones invierten en políticas de contraseñas y doble factor, pero rara vez auditan si los tokens de sesión que generan tienen una vida útil controlada. La lección permanente: proteger la autenticación no termina con el inicio de sesión. Termina cuando el token expira.
