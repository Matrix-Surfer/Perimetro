---
title: "Falsos técnicos de soporte usan llamadas de video para instalar ransomware en menos de un día"
date: "2026-07-30"
source: "BleepingComputer"
link: "https://www.bleepingcomputer.com/news/security/microsoft-teams-vishing-attacks-lead-to-chaos-ransomware-attacks/"
categoria: "Malware"
ambito: "Organizaciones"
nivelAtencion: "Alto"
status: "Activa"
resumen: "Un grupo identificado como STAC4749, ligado a antiguos operadores de los grupos de secuestro de información BlackSuit y Royal, se hace pasar por personal de soporte técnico en llamadas de Microsoft Teams para convencer a empleados de instalar herramientas de acceso remoto. Una vez dentro, instala un acceso oculto y despliega el programa de secuestro de información Chaos, que cifra los equipos y roba datos antes de exigir un rescate; en un caso documentado, el ataque completo tomó menos de 17 horas. La campaña ha afectado sobre todo a organizaciones de Canadá y Estados Unidos en servicios, manufactura, energía y construcción."
expuestos: "Empleados de organizaciones, principalmente en Canadá y Estados Unidos, en los sectores de servicios, manufactura, energía y construcción, que reciben llamadas no solicitadas por Microsoft Teams de un supuesto soporte técnico."
verificacion: "Verificar cualquier instalación reciente de herramientas de acceso remoto no solicitada por el área de TI, y confirmar si algún empleado atendió una llamada de soporte técnico no verificada por canales oficiales."
impacto: "Cifrado simultáneo de los equipos de la organización, robo de información previo al cifrado y amenaza de filtración pública si no se paga un rescate; el proceso completo puede ejecutarse en menos de un día desde el primer contacto."
grc_activo: "Endpoints corporativos con Microsoft Teams habilitado para llamadas externas"
grc_vector: "Llamadas de voz por Microsoft Teams haciéndose pasar por soporte técnico, que inducen al empleado a instalar herramientas legítimas de acceso remoto"
grc_condicion: "El empleado debe atender la llamada y autorizar la instalación de la herramienta de acceso remoto"
grc_explotacion: "activa"
grc_alcance: "Docenas de organizaciones, principalmente en Canadá y Estados Unidos, en servicios, manufactura, energía y construcción, entre febrero y junio de 2026"
grc_confianza: "alta"
publicacion: "published"
---

## Qué ocurrió

Un grupo identificado como STAC4749, con vínculos a antiguos operadores de los grupos de secuestro de información BlackSuit y Royal, contacta a empleados por medio de llamadas de Microsoft Teams haciéndose pasar por personal de soporte técnico. La llamada, de apenas dos o tres minutos, busca convencer al empleado de instalar una herramienta legítima de acceso remoto. Una vez dentro del equipo, el grupo instala un acceso oculto disfrazado como componentes de audio del sistema y despliega el programa de secuestro de información Chaos, que cifra los archivos y amenaza con filtrar la información robada si no se paga un rescate. En un caso documentado, el ataque completo tomó menos de 17 horas desde la primera llamada hasta el cifrado.

## Quién está expuesto

Organizaciones que permiten llamadas externas por Microsoft Teams, principalmente en Canadá y Estados Unidos y en los sectores de servicios, manufactura, energía y construcción, aunque la técnica no está limitada a esas regiones o giros.

## A considerar

Las señales de esta campaña incluyen: instalación no solicitada de herramientas de acceso remoto como Quick Assist, RemSupp, AnyDesk o DWAgent; ejecuciones inusuales que descargan archivos a la carpeta de datos de la aplicación; y entradas en el sistema disfrazadas con nombres de componentes de audio ("Realtek HD Audio", "WinAudio life2"). Restringir o exigir aprobación previa para llamadas externas por Teams reduce la ventana de contacto inicial.

## Impacto potencial

Cifrado simultáneo de los equipos de la organización, robo de información antes del cifrado y amenaza de filtración pública si no se paga el rescate. La velocidad del ataque, menos de un día en el caso documentado, deja poco margen para reaccionar una vez que el empleado concede el acceso.
