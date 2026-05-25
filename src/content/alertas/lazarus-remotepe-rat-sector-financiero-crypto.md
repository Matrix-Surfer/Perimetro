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

Investigadores de Fox-IT documentaron una nueva herramienta del grupo Lazarus —un actor de amenazas persistentes avanzadas (APT, grupos con recursos estatales y objetivos de largo plazo) vinculado al régimen de Corea del Norte— llamada RemotePE. Se trata de un RAT de solo memoria, es decir, un troyano de acceso remoto —software malicioso que le da al atacante control total sobre el sistema infectado— que opera exclusivamente en la memoria RAM del equipo sin escribir archivos en el disco duro.

La cadena de ataque tiene tres etapas:

1. **DPAPILoader:** un cargador inicial que usa DPAPI —una interfaz legítima del sistema operativo Windows para cifrado de datos— para descifrar y cargar el siguiente componente. Al usar funciones nativas del sistema, evita disparar alertas en soluciones de seguridad que detectan comportamientos anómalos.

2. **RemotePELoader:** carga el troyano final directamente en memoria sin tocar el disco. Los antivirus tradicionales basados en análisis de archivos no detectan la amenaza porque no hay ningún archivo malicioso que analizar.

3. **RemotePE:** el troyano activo. Establece comunicación con los servidores del atacante y ejecuta comandos remotos en el sistema comprometido.

## Impacto potencial

Lazarus tiene un historial documentado de ataques contra instituciones financieras —incluyendo el robo de 81 millones de dólares al Banco de Bangladesh en 2016— y en los últimos años ha intensificado su actividad contra empresas del sector cripto. El uso de RemotePE indica una evolución táctica orientada a evadir las defensas modernas de organizaciones con mayor madurez en seguridad.

Para una empresa fintech, casa de cambio o plataforma que procese transacciones financieras, la consecuencia concreta de una infección exitosa es la **pérdida de control operativo sin señal de alerta**: el atacante puede permanecer activo en los sistemas durante semanas o meses antes de actuar, observando operaciones y acumulando acceso. Cuando decide actuar, puede vaciar cuentas, manipular transacciones o destruir registros.

Esto también tiene una dimensión regulatoria crítica: si la empresa maneja fondos de terceros o datos financieros de clientes y hay una brecha, **las obligaciones de notificación y respuesta no son opcionales**. El costo de un incidente no es solo la pérdida directa — incluye la gestión legal, la notificación a clientes afectados y el impacto reputacional en un sector donde la confianza es el activo principal.

## Recomendaciones

- **Revisar con tu proveedor de seguridad si las herramientas actuales incluyen detección de comportamiento en tiempo real (EDR):** un antivirus tradicional que analiza archivos no detecta malware que opera solo en memoria. Si la respuesta es que se usa únicamente antivirus, el nivel de protección frente a esta amenaza es insuficiente para empresas que manejan dinero.
- **Solicitar una evaluación del principio de mínimo privilegio:** preguntar a TI si cada cuenta de usuario y servicio tiene solo los permisos estrictamente necesarios para operar. Limitar el acceso reduce el radio de daño si un equipo es comprometido.
- **Revisar el plan de respuesta a incidentes:** asegurarse de que el equipo legal y de cumplimiento tenga un protocolo documentado para la revocación de accesos y la notificación a clientes en caso de compromiso detectado.
- **Capacitar al equipo en el vector de acceso inicial:** Lazarus utiliza principalmente correos de phishing dirigidos y ofertas de empleo falsas en LinkedIn. Establecer una regla simple: ningún contacto no solicitado que traiga archivos adjuntos o enlaces debe abrirse sin verificación directa con el remitente por otro canal.
