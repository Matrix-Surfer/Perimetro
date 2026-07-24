---
title: "Un grupo de espionaje vinculado a China ataca gobiernos, hospitales y escuelas en Asia y América Latina con una nueva puerta de acceso oculta"
date: "2026-07-23"
source: "The Hacker News"
link: "https://thehackernews.com/2026/07/china-nexus-jadeprox-uses-new-triback.html"
categoria: "Malware"
ambito: "Organizaciones"
nivelAtencion: "Alto"
status: "Activa"
resumen: "Investigadores de Group-IB identificaron JadeProx, un grupo de espionaje vinculado a China que usa un programa de acceso oculto nunca antes documentado, llamado TriBack Loader, contra organizaciones de gobierno, salud y educación en Asia y América Latina. Entre sus objetivos confirmados está el Congreso Nacional de Honduras. El grupo distribuye el programa mediante correos de phishing dirigidos y sitios falsos, incluyendo uno que imitaba a un asistente de inteligencia artificial conocido."
expuestos: "Organizaciones de gobierno, salud y educación en Asia y América Latina, incluyendo instituciones legislativas y hospitales públicos."
verificacion: "Revisar si algún programa firmado y de proveedor conocido se está ejecutando desde una carpeta temporal o de inicio del sistema, y confirmar si existen copias inesperadas de archivos de sistema comunes en esas mismas carpetas."
impacto: "El acceso oculto que instala este grupo permite espionaje sostenido: lectura de correspondencia interna, documentos de gobierno o expedientes médicos, sin que la organización lo note durante meses."
grc_activo: "Redes de organizaciones de gobierno, salud y educación en Asia y América Latina"
grc_vector: "Correos de phishing dirigido con documentos falsos, y sitios fraudulentos que imitan software legítimo (incluyendo una imitación de un asistente de inteligencia artificial), que instalan un programa legítimo firmado junto con un componente malicioso"
grc_condicion: "Que la víctima abra el documento falso o descargue el instalador desde el sitio fraudulento"
grc_explotacion: "activa"
grc_alcance: "Organizaciones de gobierno, salud y educación en Vietnam, Malasia, Hong Kong y Honduras, entre otros países de Asia y América Latina"
grc_confianza: "alta"
publicacion: "published"
---

## Qué ocurrió

La firma de investigación Group-IB identificó a JadeProx, un grupo de espionaje vinculado a China, después de encontrar un servidor mal protegido en la nube que el grupo usaba para sus operaciones. Ese servidor reveló el uso de un programa de acceso oculto nunca antes documentado, llamado TriBack Loader, que el grupo instala junto a programas legítimos y firmados digitalmente, para pasar inadvertido ante los sistemas de seguridad. El grupo ha atacado un sistema de imágenes médicas en un hospital público de Vietnam, el Ministerio de Asuntos Exteriores de Malasia, instituciones educativas en Hong Kong y, en América Latina, envió una campaña de correos falsos dirigida al Congreso Nacional de Honduras. Para distribuir el programa, el grupo usó documentos de phishing dirigido y al menos un sitio web fraudulento que imitaba a un asistente de inteligencia artificial conocido para ofrecer un instalador malicioso.

## Quién está expuesto

### Para organizaciones

Organismos de gobierno (incluyendo cuerpos legislativos), instituciones de salud y educación en Asia y América Latina. El caso de Honduras confirma que la región no está fuera del radar de este tipo de operaciones de espionaje estatal.

### Para personas

Riesgo indirecto: funcionarios públicos, personal médico y administrativo cuyas cuentas de correo o equipos de trabajo puedan recibir los correos de phishing dirigido usados en esta campaña.

## A considerar

Group-IB recomienda poner atención a programas de proveedores conocidos y firmados digitalmente que se ejecuten desde carpetas temporales, de descargas o de inicio del sistema, en lugar de su ubicación habitual de instalación. También conviene revisar si existen copias inesperadas de archivos de sistema comunes en esas mismas carpetas, y bloquear el acceso a los dominios fraudulentos que el grupo ha usado para distribuir sus instaladores falsos.

## Impacto potencial

Un programa de acceso oculto instalado junto a software legítimo permite a un grupo de espionaje sostener presencia dentro de una red durante meses sin ser detectado. Para instituciones de gobierno, esto significa exposición de correspondencia oficial y documentos sensibles; para instituciones de salud, exposición de expedientes médicos e infraestructura crítica de atención a pacientes.
