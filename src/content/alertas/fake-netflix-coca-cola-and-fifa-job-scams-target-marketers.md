---
title: "Falsas entrevistas de trabajo con marcas reconocidas buscan robar cuentas de Google de profesionales de marketing"
date: "2026-07-07"
source: "Malwarebytes Labs"
link: "https://www.malwarebytes.com/blog/scams/2026/07/fake-netflix-coca-cola-and-fifa-job-scams-target-marketers"
categoria: "Phishing"
ambito: "Mixto"
nivelAtencion: "Alto"
status: "Activa"
resumen: "Una campaña de phishing activa desde hace al menos cinco meses suplanta a más de 30 marcas reconocidas, incluidas Netflix, Coca-Cola y FIFA, con falsas ofertas de entrevista de trabajo dirigidas a profesionales de marketing. El correo usa nombres y fotos reales de empleados, y el enlace pasa por varios sitios legítimos antes de llegar a una página falsa que imita el inicio de sesión de Google para robar usuario y contraseña. Quien haya recibido una oferta de entrevista no solicitada e iniciado sesión en el enlace debe cambiar su contraseña de Google de inmediato."
expuestos: "Profesionales de marketing que reciben ofertas de entrevista de trabajo no solicitadas, suplantando marcas reconocidas."
verificacion: "Si alguien del equipo de marketing recibió una oferta de entrevista por correo de una de estas marcas e ingresó su usuario y contraseña de Google en el enlace incluido."
impacto: "El atacante obtiene acceso completo a la cuenta de Google de la víctima: correo, documentos y cualquier servicio vinculado a esa cuenta."
grc_activo: "Cuentas de Google de profesionales de marketing"
grc_vector: "Correo de reclutamiento falso con cadena de redirecciones a través de sitios legítimos hacia una página que imita el inicio de sesión de Google mediante la técnica de ventana falsa incrustada en el navegador"
grc_condicion: "Que la víctima dé clic en el enlace de la oferta e ingrese sus credenciales de Google en la página falsa"
grc_explotacion: "activa"
grc_alcance: "Profesionales de marketing en cualquier organización; documentada con al menos 34 dominios fraudulentos activos"
grc_confianza: "alta"
publicacion: "published"
---

## Qué ocurrió

Una campaña de phishing activa desde hace al menos cinco meses suplanta a más de 30 marcas reconocidas, entre ellas Netflix, Coca-Cola, FIFA, Adidas, Adobe y varias aerolíneas, con falsas ofertas de entrevista de trabajo. El correo usa nombres y fotografías reales de empleados de la empresa suplantada para parecer legítimo. El enlace de la "entrevista" pasa por varios sitios legítimos de uso empresarial, entre ellos una plataforma de recursos humanos y un servicio de marketing, antes de llegar a la página fraudulenta, donde se le pide a la víctima iniciar sesión con su cuenta de Google. Esa ventana de inicio de sesión no es real: está construida dentro de la misma página para imitar la apariencia de una ventana legítima del navegador, técnica que dificulta detectar el engaño incluso a simple vista.

## Quién está expuesto

### Para personas

Profesionales de marketing que reciben ofertas de entrevista de trabajo no solicitadas, sobre todo si mencionan alguna de las marcas suplantadas.

### Para organizaciones

Empresas cuyo personal de marketing usa su correo de Google corporativo: si la cuenta comprometida está vinculada al trabajo, el acceso robado puede exponer también información de la empresa.

## A considerar

Investigadores identificaron al menos 34 dominios fraudulentos usados en esta campaña, documentados públicamente por la firma Team Cymru. Los equipos de seguridad pueden usar esa lista para bloquear esos dominios de forma preventiva.

## Impacto potencial

Con la cuenta de Google comprometida, el atacante obtiene acceso al correo, documentos y cualquier otro servicio vinculado a esa cuenta, incluyendo, si la cuenta es corporativa, información de la empresa que la persona use en su trabajo diario.
