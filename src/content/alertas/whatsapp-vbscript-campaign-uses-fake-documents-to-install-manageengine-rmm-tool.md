---
title: "Campaña activa en WhatsApp usa documentos falsos para instalar control remoto en equipos de trabajo — México entre los afectados"
date: "2026-06-23"
source: "The Hacker News"
link: "https://thehackernews.com/2026/06/whatsapp-vbscript-campaign-uses-fake.html"
categoria: "Malware"
ambito: "Organizaciones"
nivelAtencion: "Alto"
status: "Activa"
resumen: "Una campaña activa distribuye archivos disfrazados de documentos financieros a través de WhatsApp. Al abrirlos, instalan silenciosamente una herramienta legítima de administración remota que da al atacante control total y persistente del equipo. México aparece entre los países con víctimas confirmadas. Cualquier archivo recibido esta semana por WhatsApp que no sea PDF, Excel o Word debe tratarse con cautela."
expuestos: "Empleados que reciben documentos de trabajo por WhatsApp — especialmente en áreas de finanzas, contabilidad y administración en empresas mexicanas."
verificacion: "Si alguien del equipo recibió y abrió un archivo .vbs, .vbe o .js disfrazado de reporte financiero o estado de cuenta a través de WhatsApp en los últimos días."
impacto: "El atacante obtiene control remoto persistente del equipo a través de una herramienta legítima que muchos controles de seguridad no bloquean, con acceso a archivos, sistemas internos y credenciales."
grc_activo: "Equipos de trabajo de empleados en áreas administrativas y financieras con acceso a sistemas internos y datos corporativos."
grc_vector: "WhatsApp — archivos VBScript (.vbs) con nombres de documentos financieros que ejecutan un proceso de instalación encadenado al ser abiertos."
grc_condicion: "Que un empleado abra el archivo adjunto en un equipo Windows. El archivo llega por WhatsApp desde contactos desconocidos o potencialmente desde contactos ya comprometidos."
grc_explotacion: "activa"
grc_alcance: "Empleados con equipos Windows que usan WhatsApp para comunicación laboral — especialmente en áreas administrativas. México aparece entre los países con víctimas confirmadas."
grc_confianza: "alta"
publicacion: "published"
---

## Qué ocurrió

Kaspersky documentó en junio de 2026 una campaña activa en WhatsApp que distribuye archivos con nombres como "Reporte Financiero.vbs" o "Estado de Cuenta.vbs". Al abrirlos, el archivo ejecuta un proceso oculto que descarga e instala ManageEngine Endpoint Central — una herramienta legítima de administración remota — dando al atacante control completo y persistente del equipo. La campaña ha afectado múltiples países incluyendo México, Malasia, Brasil, India y España. La operación permanece sin atribución, aunque se detectaron similitudes de infraestructura con grupos vinculados a China.

## Quién está expuesto

Empleados que reciben y abren documentos de trabajo por WhatsApp — canal habitual en empresas mexicanas para compartir reportes, contratos y archivos administrativos. La campaña apunta especialmente a perfiles de finanzas, contabilidad y operaciones.

## A considerar

No abrir archivos con extensiones .vbs, .vbe, .bat, .cmd, .ps1 o .js recibidos por WhatsApp, aunque provengan de contactos conocidos — el equipo de ese contacto puede estar comprometido. Los documentos legítimos de trabajo llegan en formato PDF, XLSX o DOCX, nunca como scripts ejecutables. Cualquier archivo de este tipo recibido esta semana debe verificarse directamente con el remitente por otro canal antes de abrirse.

## Impacto potencial

Una herramienta legítima de administración remota instalada sin autorización pasa desapercibida para muchos controles de seguridad porque el software en sí no es malicioso. El atacante puede operar el equipo en segundo plano, acceder a sistemas internos a los que el empleado tiene acceso y extraer información durante semanas sin ser detectado.
