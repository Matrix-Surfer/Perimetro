---
title: "Grupo Lazarus despliega nuevo malware sin archivos contra empresas financieras y de criptomonedas"
date: "2026-05-25"
tipo: "Otro"
status: "Activa"
resumen: "El grupo de ciberespionaje vinculado a Corea del Norte opera una nueva cadena de ataque multietapa que instala un troyano de acceso remoto directamente en memoria del sistema, sin escribir archivos en disco, para evadir herramientas de detección tradicionales. Objetivo principal: sector financiero y empresas que operan con criptomonedas."
source: "The Hacker News"
link: "https://thehackernews.com/2026/05/lazarus-deploys-remotepe-memory-only.html"
publicacion: "published"
---

## Contexto

Investigadores de Fox-IT documentaron una nueva herramienta del grupo Lazarus. Lazarus es un APT vinculado a Corea del Norte: grupos con recursos estatales y objetivos de largo plazo. La herramienta se llama RemotePE. Es un RAT de solo memoria. Un troyano de acceso remoto que opera exclusivamente en la RAM. No escribe archivos en disco. Tu antivirus no lo detecta. No tiene nada que analizar.

La cadena de ataque tiene tres etapas:

1. **DPAPILoader:** usa DPAPI, una interfaz legítima de Windows para cifrado de datos. Al usar funciones nativas del sistema, no dispara alertas de seguridad.

2. **RemotePELoader:** carga el troyano directamente en memoria. Sin tocar el disco. Sin dejar huella que analizar.

3. **RemotePE:** el troyano activo. Establece contacto con los servidores del atacante. Ejecuta comandos remotos. El sistema está comprometido. Nada lo indica.

## Impacto potencial

Lazarus robó 81 millones de dólares al Banco de Bangladesh en 2016. En los últimos años escaló su actividad contra el sector cripto. RemotePE es la herramienta con la que ahora evade las defensas modernas.

Para una fintech, casa de cambio o plataforma de transacciones, el riesgo es concreto. El atacante puede permanecer activo semanas o meses. Observando. Acumulando acceso. Sin dejar rastro. Cuando activa el ataque, puede vaciar cuentas. Manipular transacciones. Destruir registros.

Hay una dimensión regulatoria que no es opcional. Si la empresa maneja fondos de terceros y hay una brecha, debe notificar. El costo no es solo la pérdida directa. Incluye la gestión legal. La notificación a clientes. El daño reputacional. En un sector donde la confianza es el activo principal.

## Recomendaciones

- **Preguntar a tu proveedor de seguridad si las herramientas actuales incluyen detección de comportamiento en tiempo real (EDR).** Un antivirus tradicional no detecta malware que opera solo en memoria. Si la respuesta es "solo tenemos antivirus", el nivel de protección es insuficiente para empresas que manejan dinero.
- **Solicitar a TI una evaluación de permisos.** ¿Cada cuenta de usuario tiene solo los permisos que necesita? Limitar el acceso reduce el daño si un equipo es comprometido.
- **Revisar el plan de respuesta a incidentes.** ¿El equipo legal sabe qué hacer si se detecta una brecha? ¿Hay un protocolo para revocar accesos y notificar a clientes? Si no existe, este incidente justifica crearlo.
- **Establecer una regla con el equipo.** Lazarus entra por correos de phishing dirigidos y ofertas de empleo falsas en LinkedIn. La regla: ningún archivo adjunto ni enlace de un contacto no solicitado se abre sin verificar con el remitente por otro canal.
