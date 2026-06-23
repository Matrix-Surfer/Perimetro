---
title: "LastPass confirma filtración de datos de clientes a través de un proveedor de software comprometido"
date: "2026-06-23"
source: "BleepingComputer"
link: "https://www.bleepingcomputer.com/news/security/lastpass-confirms-data-breach-in-klue-supply-chain-attack/"
categoria: "Terceros"
ambito: "Mixto"
nivelAtencion: "Medio"
status: "En monitoreo"
resumen: "LastPass confirmó que datos de sus clientes — nombres, correos, teléfonos, direcciones y casos de soporte — quedaron expuestos después de que el grupo extorsionista Icarus comprometiera a Klue, una plataforma de inteligencia de mercado que LastPass usaba. Las contraseñas almacenadas en las bóvedas no fueron afectadas. Los datos expuestos pueden usarse para ataques de ingeniería social dirigidos."
expuestos: "Clientes de LastPass cuyos datos de contacto y casos de soporte estaban registrados en el sistema de CRM de la empresa."
verificacion: "Estar alerta a contactos que se presenten como soporte de LastPass solicitando verificación de cuenta o cambio de contraseña maestra — especialmente si conocen detalles reales del cliente."
impacto: "Con nombre real, correo y casos de soporte previos, un atacante puede suplantar al equipo de LastPass con suficiente credibilidad para inducir a un cliente a entregar su contraseña maestra, lo que daría acceso a todas las contraseñas almacenadas."
grc_activo: "Datos de contacto y casos de soporte de clientes de LastPass almacenados en Salesforce a través de Klue."
grc_vector: "Compromiso de cadena de suministro — el grupo Icarus accedió a Klue usando credenciales antiguas de un servicio de integración, y desde ahí llegó a los datos de los clientes de LastPass."
grc_condicion: "Ser cliente de LastPass con datos de contacto en su sistema de CRM. Las bóvedas de contraseñas no fueron comprometidas."
grc_explotacion: "activa"
grc_alcance: "Clientes de LastPass — personas y organizaciones — con datos registrados en el sistema de ventas y soporte de la empresa."
grc_confianza: "alta"
publicacion: "published"
---

## Qué ocurrió

El grupo extorsionista Icarus comprometió a Klue — una plataforma de inteligencia de mercado que integra datos de Salesforce, Gong y herramientas similares — usando credenciales antiguas de un servicio de integración. Klue tenía acceso a los datos de clientes de LastPass almacenados en su CRM. La brecha expuso nombres, correos, teléfonos, direcciones físicas y casos de soporte técnico. Otras empresas también fueron afectadas: Recorded Future, Tanium, Jamf y Sprout Social. Las bóvedas de contraseñas de LastPass no fueron tocadas.

## Quién está expuesto

Clientes de LastPass — personas y organizaciones — cuyos datos de contacto aparecían en el sistema de CRM de la empresa. No es posible saber exactamente quién fue afectado sin comunicación directa de LastPass.

## A considerar

LastPass nunca solicita la contraseña maestra por correo, teléfono o chat. Si alguien contacta afirmando ser soporte de LastPass y conoce detalles reales de la cuenta — nombre, correo, caso de soporte previo — eso no es verificación de identidad; puede ser un atacante usando los datos filtrados. Verificar cualquier comunicación ingresando directamente al sitio oficial antes de responder.

## Impacto potencial

Un atacante con nombre real, correo registrado y casos de soporte anteriores puede construir un mensaje de ingeniería social que parece completamente legítimo. El objetivo probable es la contraseña maestra — que da acceso a todas las contraseñas almacenadas en la bóveda. Si esa contraseña cae, todas las cuentas que dependen de LastPass quedan expuestas.
