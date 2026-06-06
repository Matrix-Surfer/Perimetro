---
title: "Pantallas falsas de inicio de sesión aparecen en sitios web que siguen usando una biblioteca JavaScript comprometida"
date: "2026-06-05"
source: "BleepingComputer"
link: "https://www.bleepingcomputer.com/news/security/suspicious-polyfill-login-prompts-pop-up-on-toshiba-muji-websites/"
categoria: "Terceros"
ambito: "Mixto"
nivelAtencion: "Alto"
status: "Activa"
resumen: "Sitios web con polyfill.io muestran formularios falsos para robar contraseñas a visitantes. Empresas con este código en su sitio exponen a sus clientes sin saberlo. Verificar si el sitio propio usa polyfill.io."
expuestos: "Empresas con sitios web que cargan código de polyfill.io y los visitantes que ingresan datos en los formularios que aparecen"
verificacion: "Validar si el código fuente del sitio web de la organización incluye referencias a polyfill.io"
impacto: "El sitio web de la organización funciona como trampa contra sus propios clientes sin que ningún sistema interno lo detecte"
grc_activo: "Sitios web que cargan código de polyfill.io"
grc_vector: "Código JavaScript malicioso inyectado en biblioteca de terceros"
grc_condicion: "El sitio web usa polyfill.io y los visitantes ingresan datos en el formulario falso que aparece"
grc_explotacion: "activa"
grc_alcance: "Cualquier empresa con sitio web que use polyfill.io y sus visitantes"
grc_confianza: "alta"
publicacion: "published"
---

## Qué ocurrió

Toshiba y Muji alertaron a sus visitantes: una pantalla de inicio de sesión sospechosa estaba apareciendo en sus sitios web. No fue un ataque a sus servidores. La causa fue polyfill.io, una biblioteca de código JavaScript externa que ambos sitios cargaban. Esa biblioteca fue comprometida y modificada para mostrar formularios falsos que capturan las contraseñas de quienes los llenan.

## Quién está expuesto

### Para personas

Visitantes de sitios web que usan polyfill.io y que ingresaron sus datos en un formulario de inicio de sesión que apareció de forma inusual. Si el formulario se vio diferente a lo habitual, o apareció en un contexto inesperado, las contraseñas ingresadas pueden estar en manos del atacante.

### Para organizaciones

Empresas con sitios web que cargan código de polyfill.io, muchas veces sin saberlo porque lo incluyeron sus desarrolladores hace años. Si el sitio usa esta biblioteca, sus visitantes pueden estar viendo formularios falsos ahora mismo. El riesgo no está en los servidores de la empresa. Está en el código que el sitio carga desde afuera.


## Impacto potencial

Un visitante que ingresó sus datos en el formulario falso entregó su contraseña al atacante. Para la organización, su propio sitio web funciona como trampa contra sus clientes, sin que ningún sistema de seguridad interno lo detecte. El daño reputacional llega cuando los clientes reportan el problema, no antes.
