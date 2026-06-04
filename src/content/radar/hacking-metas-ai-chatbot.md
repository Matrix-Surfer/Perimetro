---
title: "Un asistente de IA de soporte entregó cuentas a desconocidos — y lo hizo correctamente"
pubDate: 2026-06-04
source: "Schneier on Security"
link: "https://www.schneier.com/blog/archives/2026/06/hacking-metas-ai-chatbot.html"
category: "AI"
señal: "El chatbot de soporte de Meta transfirió cuentas de Instagram a atacantes que proporcionaron la información correcta. El asistente no fue hackeado: siguió el proceso para el que fue diseñado."
supuesto: "Un sistema de soporte basado en IA puede verificar la identidad del usuario antes de tomar acciones sobre su cuenta."
observación: "Qué acciones pueden ejecutar los sistemas de atención automatizados que la organización usa o evalúa usar, y si existe un paso humano de verificación antes de que el sistema modifique accesos o datos."
context: "El atacante no explotó una vulnerabilidad técnica. Proporcionó la información que el asistente pedía — y el asistente actuó. La premisa que falla es que un asistente de IA puede servir como verificador de identidad confiable. Cualquier empresa que use IA para soporte al cliente enfrenta la misma pregunta sin haber tenido que responderla explícitamente todavía."
grc_cambio: "los asistentes de IA de soporte no pueden verificar la identidad del usuario antes de actuar"
grc_paradigma: "un sistema de soporte con IA puede autenticar usuarios antes de modificar cuentas o datos"
grc_horizonte: "meses"
grc_confianza: "alta"
publicacion: "published"
---

## La señal

Atacantes tomaron control de cuentas de Instagram manipulando al chatbot de soporte de Meta. El bot no fue hackeado en el sentido técnico: siguió el proceso para el que fue diseñado. El atacante proporcionó la información que el sistema pedía. El asistente la aceptó y actuó. Meta corrigió esta instancia específica. El patrón persiste en cualquier sistema de soporte automatizado con acceso a cuentas.

## El supuesto que se rompe

Un asistente de IA de soporte puede verificar la identidad de quien lo consulta antes de tomar acciones sobre cuentas o datos. Este supuesto aplica a cualquier empresa que use IA para atender solicitudes de cambio de contraseña, acceso a cuentas, o modificación de datos de clientes — sin haber revisado explícitamente si el asistente puede distinguir entre el usuario legítimo y un atacante con la información correcta.

## Qué observar

Si la organización usa o evalúa asistentes de IA para soporte o atención al cliente, qué acciones concretas puede ejecutar ese asistente sobre cuentas o datos. Si existe un paso humano de verificación antes de que el sistema modifique accesos. Cómo se confirma la identidad del usuario antes de que el asistente tome una acción que no puede revertirse fácilmente.
