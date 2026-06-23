---
title: "Robo de número telefónico: cómo un atacante toma el control de cuentas bancarias sin tocar el teléfono de la víctima"
date: "2026-06-22"
source: "Dark Reading"
link: "https://www.darkreading.com/cyber-risk/how-a-sim-swap-attack-led-to-a-near-account-takeover"
categoria: "Fraude"
ambito: "Mixto"
nivelAtencion: "Alto"
status: "Activa"
resumen: "Un atacante que convence a la operadora telefónica de transferir el número de una víctima a una nueva tarjeta SIM bajo su control toma el control de todos los servicios que usan el teléfono como segundo factor de verificación — incluyendo banca en línea, correo y WhatsApp. No necesita acceso físico al teléfono. La víctima no recibe ninguna advertencia hasta que su número deja de funcionar."
expuestos: "Cualquier persona u organización que use verificación por SMS como segundo factor de autenticación en cuentas bancarias, correo corporativo o servicios críticos."
verificacion: "Si las cuentas críticas de la organización o del equipo directivo usan SMS como único segundo factor de autenticación."
impacto: "Con el número bajo su control, el atacante puede interceptar todos los códigos de verificación por SMS, restablecer contraseñas y vaciar cuentas bancarias antes de que la víctima note que su teléfono perdió señal."
grc_activo: "Cuentas protegidas con verificación por SMS — banca en línea, correo corporativo, plataformas de inversión, acceso a sistemas críticos."
grc_vector: "Ingeniería social a la operadora telefónica: el atacante obtiene datos personales de la víctima (a menudo de filtraciones previas) y convence al agente de soporte de transferir el número."
grc_condicion: "Que la víctima use SMS como factor de autenticación en cuentas de valor. El atacante necesita suficientes datos personales para convencer a la operadora — nombre, dirección, últimos dígitos de cuenta, etc."
grc_explotacion: "activa"
grc_alcance: "Cualquier persona con cuentas de valor protegidas únicamente con verificación por SMS. Especialmente riesgoso para directivos, personas con acceso a cuentas corporativas y quienes tienen fondos en plataformas digitales."
grc_confianza: "alta"
publicacion: "published"
---

## Qué ocurrió

Un atacante que obtiene suficiente información personal de una víctima puede llamar a su operadora telefónica, hacerse pasar por ella y pedir que el número sea transferido a una nueva tarjeta SIM bajo su control. En el momento en que la transferencia se completa, la víctima pierde señal en su teléfono — y el atacante recibe todos sus mensajes de texto, incluyendo los códigos de verificación que los bancos y servicios usan para confirmar operaciones. No hay alerta previa. El teléfono simplemente deja de funcionar.

## Quién está expuesto

Cualquier persona cuyas cuentas críticas — banca en línea, correo corporativo, WhatsApp, plataformas de inversión — usen un código por SMS como segunda verificación. Es especialmente riesgoso para directivos, personas con acceso a cuentas corporativas, y quienes tienen activos significativos en plataformas digitales. Los datos personales que necesita el atacante para suplantar a la víctima ante la operadora suelen obtenerse de filtraciones de datos previas.

## A considerar

Migrar los segundos factores de autenticación de SMS a una aplicación de autenticación (Google Authenticator, Microsoft Authenticator, Authy) en cuentas bancarias y corporativas críticas. Los códigos que genera una app viven en el dispositivo físico — un atacante que controla el número telefónico no puede acceder a ellos. Consultar con el banco si ofrece protección adicional contra cambios de SIM no autorizados o portabilidad de número sin verificación presencial.

## Impacto potencial

Un atacante con el número de teléfono bajo su control puede restablecer la contraseña del correo, luego la del banco, y completar transferencias usando los códigos de confirmación por SMS — todo en minutos, antes de que la víctima entienda qué está pasando. El teléfono sin señal es la única señal de alerta, y para entonces el daño puede estar hecho.
