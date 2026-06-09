---
title: "Suplantación del soporte técnico por Microsoft Teams: una nueva forma de engaño corporativo"
date: "2026-06-08"
source: "Unit 42 — Palo Alto Networks"
link: "https://unit42.paloaltonetworks.com/microsoft-teams-phishing/"
categoria: "Phishing"
ambito: "Organizaciones"
nivelAtencion: "Medio"
status: "Activa"
resumen: "Atacantes se hacen pasar por el soporte técnico de la organización usando Microsoft Teams para engañar a empleados y obtener acceso a sus cuentas o instalar programas de control remoto. El ataque aprovecha que Teams llega por canales internos considerados seguros y confiables dentro de la empresa."
expuestos: "Empleados de organizaciones que usan Microsoft Teams como plataforma de comunicación interna"
verificacion: "Si existen políticas documentadas sobre cómo el equipo de TI solicita acceso o información por Teams"
impacto: "Robo de credenciales, instalación de herramientas de acceso remoto, compromiso de cuentas corporativas"
grc_activo: "Cuentas corporativas y equipos de trabajo de empleados"
grc_vector: "Ingeniería social por Teams suplantando al soporte técnico interno"
grc_condicion: "Empleado sin capacitación en este tipo de ataque que confía en mensajes de Teams como internos"
grc_explotacion: "activa"
grc_alcance: "Cualquier organización que use Microsoft Teams como canal de comunicación interna"
grc_confianza: "alta"
publicacion: "published"
---

## Qué ocurrió

Investigadores de Palo Alto Networks documentaron una tendencia creciente: atacantes que abren conversaciones en Microsoft Teams fingiendo ser del departamento de soporte técnico de la empresa. El mensaje típico es "Hola, soy de IT, necesito acceder a tu equipo para una actualización urgente". El objetivo es que el empleado instale un programa de acceso remoto o entregue sus credenciales de inicio de sesión.

## Quién está expuesto

Empleados de organizaciones que usan Microsoft Teams como canal interno. A diferencia de un correo sospechoso, un mensaje de Teams se percibe como comunicación interna y confiable —lo que baja la guardia del receptor.

## A considerar

El soporte técnico legítimo de una organización nunca solicita contraseñas por Teams ni pide instalar programas que el empleado no reconoce. Definir con claridad cómo el área de tecnología se comunica —y cómo no— reduce significativamente la efectividad de este ataque. Los mensajes de Teams de cuentas fuera del directorio corporativo deben tratarse con la misma precaución que un correo externo.

## Impacto potencial

Si el empleado instala el programa solicitado, el atacante obtiene control del equipo desde una ubicación remota. Desde ahí puede acceder a archivos, correos, sistemas internos y credenciales guardadas en el navegador.
