---
title: "Una línea de código en apps de Microsoft para Android expuso miles de millones de cuentas"
pubDate: 2026-06-02
source: "SecurityWeek"
link: "https://www.securityweek.com/exclusive-how-one-line-of-code-put-billions-of-microsoft-android-app-downloads-at-risk/"
categoria: "Vulnerabilidad"
ambito: "Mixto"
nivelAtencion: "Medio"
resumen: "Un error de configuración en las aplicaciones móviles de Microsoft para Android permitía que otras apps en el mismo dispositivo accedieran a los tokens de autenticación de cuentas Microsoft —incluyendo cuentas corporativas de Microsoft 365. La falla ya fue corregida, pero estuvo activa en miles de millones de instalaciones."
publicacion: "published"
---

## Qué está pasando

Un ajuste de configuración pensado para entornos de desarrollo —no para producción— quedó activo en las aplicaciones de Microsoft para Android, incluyendo Outlook, Teams y OneDrive. Esa configuración desactivaba las protecciones que impiden que otras aplicaciones del mismo dispositivo lean los tokens de autenticación —credenciales temporales que identifican al usuario ante los servicios de Microsoft. Cualquier app maliciosa instalada en el mismo teléfono podía aprovechar esto para acceder a cuentas de Microsoft sin necesitar la contraseña.

## Por qué importa ahora

Microsoft 365 es el ecosistema corporativo más extendido en empresas mexicanas. Android es el sistema operativo móvil dominante en el país. La combinación es directamente relevante: si un empleado tenía instalada una app maliciosa —incluso una aparentemente legítima pero comprometida— en el mismo teléfono donde usa Outlook o Teams, esa app pudo haber accedido al correo corporativo, documentos y comunicaciones.

## Quién está expuesto

### Personas

Usuarios de apps de Microsoft en Android que tienen instaladas otras aplicaciones de fuentes no verificadas, o que descargaron apps de tiendas externas al Play Store. El riesgo fue mayor en dispositivos con múltiples aplicaciones instaladas.

### Organizaciones

Empresas con políticas de BYOD —bring your own device, es decir, empleados que usan sus teléfonos personales para trabajo— son las más expuestas. El acceso al correo y documentos corporativos desde un dispositivo con apps de terceros es un riesgo que esta vulnerabilidad materializaba.

## Riesgo principal

Acceso no autorizado a correo corporativo, documentos en SharePoint, o conversaciones en Teams desde un dispositivo Android comprometido con una app maliciosa.

## Señales de alerta

- Empleados que usan sus teléfonos personales para acceder a Microsoft 365
- Sin política de gestión de dispositivos móviles (MDM) en la empresa
- Dispositivos Android con apps instaladas fuera del Play Store oficial

## Qué hacer hoy

### Para personas

Actualiza todas las apps de Microsoft en tu teléfono Android. La corrección ya está disponible. Evita instalar aplicaciones fuera del Play Store oficial.

### Para organizaciones

Solicitar a TI que verifique si los dispositivos corporativos —o los personales con acceso a Microsoft 365— tienen instaladas las versiones más recientes de las apps de Microsoft. Evaluar si existe una política de MDM que permita verificar y gestionar el estado de los dispositivos que acceden a recursos corporativos.

## Controles GRC que aplica

- Gestión de dispositivos móviles (MDM / MAM)
- Política de acceso desde dispositivos personales (BYOD)
- Gestión de parches en aplicaciones móviles

## Decisión recomendada

Si la empresa no tiene visibilidad sobre qué aplicaciones están instaladas en los dispositivos que acceden a Microsoft 365, este incidente justifica evaluar una solución de MDM o al menos una política de uso aceptable de dispositivos móviles con acceso corporativo.
