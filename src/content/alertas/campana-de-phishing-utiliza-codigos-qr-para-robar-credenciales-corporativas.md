---
title: "Campaña de phishing utiliza códigos QR para robar credenciales corporativas"
date: "2026-05-20"
tipo: "Phishing"
status: "En monitoreo"
resumen: "Se detectó una campaña de phishing que utiliza códigos QR en correos electrónicos para dirigir a empleados a páginas falsas de autenticación. El objetivo es obtener credenciales de Microsoft 365 y Google Workspace utilizadas en entornos corporativos."
publicacion: "published"
---

## Contexto

Investigadores de seguridad detectaron una campaña activa de phishing que incorpora códigos QR en correos electrónicos aparentemente legítimos. Al escanear el código con un dispositivo móvil, el empleado es redirigido a una página falsa de inicio de sesión que imita los portales de autenticación de Microsoft 365 o Google Workspace.

La técnica aprovecha que los dispositivos móviles frecuentemente tienen menor protección contra sitios maliciosos que las computadoras corporativas, y que muchas soluciones de seguridad de correo no analizan el contenido de imágenes QR de la misma manera que analizan URLs directas.

La fuente del reporte es The Hacker News.

## Impacto potencial

Cualquier organización que utilice Microsoft 365 o Google Workspace como plataforma de correo y colaboración es un objetivo potencial. El robo de credenciales corporativas puede derivar en acceso no autorizado a correo, documentos, sistemas internos y herramientas conectadas mediante Single Sign-On.

## Recomendaciones

- Informar a los empleados sobre esta técnica específica: los códigos QR en correos corporativos deben tratarse con la misma precaución que los enlaces sospechosos.
- Habilitar autenticación multifactor (MFA) en todas las cuentas de Microsoft 365 y Google Workspace.
- Revisar si la solución de seguridad de correo tiene capacidad de análisis de imágenes o detección de QR maliciosos.
- Verificar los registros de acceso en busca de inicios de sesión desde dispositivos o ubicaciones inusuales.
