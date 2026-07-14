---
title: "La herramienta de programación con IA de xAI subía repositorios completos a la nube sin avisar"
date: "2026-07-14"
source: "The Hacker News"
link: "https://thehackernews.com/2026/07/grok-build-uploads-entire-git.html"
categoria: "Fuga de datos"
ambito: "Organizaciones"
nivelAtencion: "Alto"
status: "Resuelta"
resumen: "Grok Build, la herramienta de programación con inteligencia artificial de xAI, subía repositorios de código completos (incluido su historial y archivos que el modelo nunca leyó) a un servidor de almacenamiento de xAI, sin que el usuario lo supiera. xAI desactivó la función el 13 de julio, pero no publicó un aviso oficial."
expuestos: "Programadores y empresas que usaron Grok Build para asistir tareas de código, especialmente si sus repositorios contenían contraseñas o llaves de acceso en el historial."
verificacion: "Confirmar si el equipo usó Grok Build y, de ser así, rotar cualquier contraseña o llave de acceso que haya estado en el código, incluso si ya fue eliminada del historial."
impacto: "Contraseñas y llaves de acceso guardadas por error en el código, incluso años atrás, pueden haber quedado expuestas en un servidor fuera del control de la organización."
grc_activo: "Repositorios de código fuente y credenciales almacenadas en ellos (contraseñas, llaves de acceso a servicios en la nube)"
grc_vector: "La herramienta subía el repositorio completo, incluido el historial de cambios, a un servidor de xAI, en lugar de solo los archivos necesarios para la tarea solicitada"
grc_condicion: "Haber usado la herramienta Grok Build de xAI para asistir tareas de programación"
grc_alcance: "Usuarios individuales de Grok Build; los equipos empresariales con configuración de retención cero no fueron afectados"
publicacion: "published"
---

## Qué ocurrió

Grok Build, la herramienta de línea de comandos que xAI ofrece para asistir tareas de programación con inteligencia artificial, subía repositorios de código completos (con todo su historial de cambios) a un servidor de almacenamiento propiedad de xAI. El problema no era solo que los archivos usados en la tarea se compartieran con el proveedor de la herramienta, algo esperable, sino que también se subían archivos que el modelo de inteligencia artificial nunca llegó a leer, incluidos algunos que el propio usuario le había pedido explícitamente no tocar. Un investigador detectó la falla al comparar el tamaño de lo que el modelo recibía (192 KB) contra lo que realmente se transfería al servidor (más de 5 gigabytes). xAI desactivó la función el 13 de julio, pero no publicó un aviso de seguridad ni una nota de cambios explicando lo ocurrido.

## Quién está expuesto

### Para organizaciones

Empresas cuyos equipos de desarrollo usan Grok Build sin la configuración empresarial de retención cero de datos.

### Para personas

Programadores independientes que usaron la herramienta para tareas de código en repositorios propios o de clientes.

## A considerar

xAI agregó un comando llamado `/privacy` para que cada usuario pueda desactivar la retención de datos y borrar lo que ya se sincronizó. Cualquier contraseña o llave de acceso que haya estado en el código en algún momento (incluso si ya fue eliminada) debe considerarse expuesta y debe rotarse.

## Impacto potencial

Si el repositorio subido contenía contraseñas, llaves de acceso a servicios en la nube o cualquier otro dato sensible en su historial, esa información quedó fuera del control de la organización, almacenada en un servidor de un tercero sin que existiera una decisión consciente de compartirla.
