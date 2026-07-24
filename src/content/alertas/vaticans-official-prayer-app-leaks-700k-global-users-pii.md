---
title: "Una app de oración usada por fieles católicos en todo el mundo expuso los datos personales de más de 700 mil usuarios"
date: "2026-07-24"
source: "Dark Reading"
link: "https://www.darkreading.com/vulnerabilities-threats/vatican-official-prayer-app-leaks-700k-pii"
categoria: "Fuga de datos"
ambito: "Personas"
nivelAtencion: "Alto"
status: "En monitoreo"
resumen: "Un mecanismo de acceso a datos (API) mal protegido en la app oficial de oración del Vaticano expuso nombres, correos electrónicos y ubicación de más de 700 mil usuarios alrededor del mundo. Cualquier persona con un navegador podía obtener esta información, sin necesidad de contraseña ni técnicas avanzadas. Quienes usan esta app deben estar alertas ante mensajes o llamadas que aprovechen estos datos para parecer legítimos."
expuestos: "Usuarios de la app oficial de oración del Vaticano en cualquier país, cuyos nombres, correos y ubicación estaban expuestos."
verificacion: "Si usas esta app, prestar especial atención a correos o mensajes no solicitados que mencionen datos personales reales como si vinieran de la app o de una institución religiosa, ya que esa información ya circuló de forma expuesta."
impacto: "Con nombre, correo y ubicación real de un usuario, un atacante puede redactar mensajes de phishing muy convincentes, haciéndose pasar por la app o por una institución religiosa, para robar más datos o dinero."
grc_activo: "Datos personales (nombre, correo electrónico y ubicación) de usuarios registrados en la app"
grc_vector: "Mecanismo de acceso a datos (API) de la aplicación sin controles suficientes de autenticación, que permitía consultar información de usuarios directamente desde un navegador"
grc_condicion: "Tener una cuenta registrada en la app en el momento en que el mecanismo estuvo expuesto"
grc_explotacion: "activa"
grc_alcance: "Más de 700 mil usuarios registrados en la app a nivel global"
grc_confianza: "media"
publicacion: "published"
---

## Qué ocurrió

Un mecanismo de acceso a datos (conocido técnicamente como API, la vía por la que una app consulta y envía información desde sus servidores) de la aplicación oficial de oración del Vaticano no tenía los controles de acceso adecuados. Esto permitía que cualquier persona con un navegador, sin necesidad de contraseña ni conocimientos técnicos avanzados, consultara nombres, correos electrónicos y ubicación de los usuarios registrados. La exposición afectó a más de 700 mil usuarios de la app en distintos países.

## Quién está expuesto

### Para personas

Usuarios registrados en la app oficial de oración del Vaticano en cualquier parte del mundo, cuyo nombre, correo electrónico y ubicación quedaron accesibles.

### Para organizaciones

No aplica directamente. Este es un incidente centrado en datos de usuarios individuales de una aplicación de consumo.

## Impacto potencial

Con el nombre real, correo y ubicación de una persona, un atacante puede redactar mensajes de phishing mucho más convincentes que un intento genérico, haciéndose pasar por la propia app, por una institución religiosa o por un contacto conocido, para inducir a la víctima a entregar más información o dinero. La combinación de datos personales reales es, en sí misma, la materia prima de intentos de engaño posteriores, aunque no incluya contraseñas ni datos financieros directamente.
