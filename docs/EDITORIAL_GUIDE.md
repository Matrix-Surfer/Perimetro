# Guía Editorial — Perímetro

## Propósito

Perímetro es un medio editorial independiente enfocado en inteligencia artificial, ciberseguridad y riesgos tecnológicos para empresas mexicanas.

El objetivo no es informar primero. Es informar mejor.

Cada pieza debe responder: **¿Qué significa esto para una empresa en México?**

---

## Audiencia objetivo

**Primaria:**
- Dueños y directivos de MiPYMES mexicanas
- Responsables de TI en empresas de 10 a 200 personas
- Consultores tecnológicos independientes

**Secundaria:**
- Analistas de ciberseguridad
- Tomadores de decisión tecnológica
- Equipos IT pequeños

El lector típico no es técnico profundo. Entiende el negocio. Necesita contexto, no detalles de bajo nivel.

---

## Tono editorial

- Analítico, no alarmista
- Directo, no condescendiente
- Contextualizado, no genérico
- Sobrio, no frío
- Útil, no exhaustivo

El tono es el de un colega confiable que encontró algo importante y lo explica con claridad.

---

## Ritmo de escritura: Staccato

La seña de identidad de Perímetro es el fraseo corto. Oraciones breves, directas, punzantes. Sin subordinadas complejas. Sin párrafos kilométricos llenos de comas.

**Mecánica:** el punto seguido como martillo. Cada oración contiene un solo concepto, una sola acción.

**Ejemplo:**

> No hubo un "hackeo" espectacular. Hubo una decisión cotidiana. Alguien quiso terminar más rápido. Buscó una herramienta "con IA". La instaló. Le concedió acceso. El día siguió.

**Efecto:** urgencia, velocidad y claridad clínica. En mobile y newsletters, evita la fatiga visual y obliga a seguir leyendo.

**Dónde aplica con más fuerza:** secciones de Contexto e Impacto potencial en Alertas, y el campo `context` en Radar. Las Recomendaciones pueden ser ligeramente más instructivas, pero siguen el mismo principio: una idea por oración.

**Lo que evitar:**

- ❌ "Dado que el atacante opera desde una dirección de correo legítima de la empresa, lo que significa que los filtros de spam no lo detectarán, el impacto directo puede incluir fraude por desvío de pagos, especialmente en contextos donde existen flujos de facturación activos."
- ✅ "El atacante opera desde el correo real de la empresa. Los filtros de spam no lo ven. Puede interceptar facturas activas. Puede redirigir transferencias. Nadie lo nota hasta que el dinero ya salió."

---

## Definición de términos técnicos

Cuando se usa un término técnico de ciberseguridad o tecnología, **explicarlo en el mismo párrafo o en paréntesis**, en lenguaje simple. No asumir que el lector conoce el vocabulario especializado.

Ejemplos del estándar:

- ❌ "La campaña usa ClickFix para comprometer sistemas."
- ✅ "La campaña usa ClickFix —una técnica que engaña al usuario para que ejecute comandos maliciosos en su propio equipo— para comprometer sistemas."

- ❌ "Explotaron una vulnerabilidad de inyección SQL en el CMS."
- ✅ "Explotaron una vulnerabilidad de inyección SQL —un fallo que permite a un atacante manipular la base de datos del sitio— en el CMS."

**Regla:** si el término no lo entendería alguien de administración o finanzas de una empresa mediana, hay que explicarlo. Una oración basta. No se trata de simplificar el análisis, sino de no dejar a nadie fuera.

---

## Ángulo de análisis: impacto de negocio sobre detalle técnico

El análisis en Perímetro no describe incidentes técnicos — traduce riesgo tecnológico en consecuencias de negocio. Este principio aplica especialmente a la sección de impacto en Alertas y al campo `context` en Radar.

### Sección "Impacto potencial" en Alertas

**No responder:** ¿qué datos roba el atacante?

**Responder:** ¿qué pierde la empresa? ¿qué puede hacerle el atacante a la persona afectada?

Las tres dimensiones a cubrir:

- **Continuidad operativa:** ¿qué proceso crítico se interrumpe o queda comprometido?
- **Exposición financiera:** ¿puede derivar en fraude, pérdida directa, costo de respuesta o interrupción de facturación?
- **Responsabilidad regulatoria o contractual:** ¿activa notificaciones obligatorias, viola acuerdos de nivel de servicio o expone la empresa a reclamaciones de clientes o proveedores?

El detalle técnico de qué se filtra o cómo opera el ataque pertenece al **Contexto**, no al impacto. El impacto habla de consecuencias, no de mecanismos.

Ejemplos del estándar:

- ❌ "El atacante obtiene tokens OAuth, acceso a SharePoint y variables de entorno del servidor."
- ✅ "El acceso al correo corporativo habilita fraude por desvío de pagos: el atacante puede interceptar facturas activas y redirigir transferencias. Si accede a contratos o comunicaciones con clientes, la empresa enfrenta responsabilidad civil por filtración de información confidencial."

---

### Estándar especial: brechas de datos personales en bancos e instituciones

Cuando se comprometen datos de un banco, institución financiera, organismo de gobierno o cualquier entidad que concentra información sensible de personas, el impacto no termina en la filtración. **El dato robado es la materia prima de un ataque posterior.**

La obligación editorial es explicar la cadena de daño completa, no solo el evento. El lector sin contexto de ciberseguridad no conecta "se filtraron tus datos" con las consecuencias reales que eso habilita.

#### Cadenas de daño por tipo de dato filtrado

**Datos bancarios (número de cuenta, CLABE, saldo, movimientos):**
- Con tus datos bancarios reales, un atacante puede llamarte haciéndose pasar por tu banco. Sabe tu saldo. Sabe tu último movimiento. Todo parece legítimo. El objetivo: que tú mismo le des tu NIP, tu contraseña o que autorices una transferencia.
- Esta técnica se llama ingeniería social —manipular a una persona para que entregue información o acceso voluntariamente.

**Documentos de identidad (INE, pasaporte, comprobante de domicilio, CURP, RFC):**
- Con documentos reales, un atacante puede solicitar créditos, tarjetas o servicios a tu nombre en instituciones que no verifican presencialmente.
- El daño financiero llega a tu historial crediticio, no solo a tu cuenta. Puede tardarse meses en detectarse y años en resolverse.

**Credenciales (correo y contraseña):**
- Si la contraseña filtrada se usa en otros servicios —práctica muy común— el atacante entra a todos: correo, banca en línea, servicios de nómina, plataformas de proveedores.
- Este ataque se llama relleno de credenciales: probar la misma combinación en decenas de servicios de forma automatizada.

**Datos de contacto (nombre, teléfono, dirección):**
- Con nombre y teléfono reales, un atacante puede suplantar tu número de celular ante la operadora y tomar el control de tu WhatsApp o de los SMS que tu banco usa para confirmar operaciones.
- Con dirección real, puede recibir documentos a tu nombre o presentarse físicamente en trámites que lo requieren.

**Datos combinados (nombre + RFC + domicilio + datos bancarios):**
- El perfil completo habilita fraude de identidad de alta sofisticación: apertura de empresas fantasma, solicitud de créditos fiscales, trámites ante el SAT o el IMSS a nombre de la víctima.
- La combinación de datos de múltiples filtraciones —un fenómeno documentado en México— amplifica el daño de cada brecha individual.

#### Cómo aplicar este estándar en la redacción

La sección de impacto en una alerta de este tipo debe responder: **¿qué puede hacer el atacante con estos datos específicos, paso a paso, en la vida real?**

No basta con escribir "datos personales expuestos generan riesgo de fraude". Hay que nombrar el mecanismo:

- ❌ "La filtración expone datos personales que pueden usarse para actividades fraudulentas."
- ✅ "Con nombre, CURP y datos de cuenta expuestos, un atacante puede llamar a la víctima haciéndose pasar por el banco —conoce los datos reales, por eso parece legítimo— e inducirla a entregar su NIP o autorizar una transferencia. Si los documentos también se filtraron, puede solicitar créditos a su nombre sin necesitar su presencia."

El objetivo es que el lector entienda por qué importa, no solo que algo malo pasó.

---

### Sección "Recomendaciones" en Alertas

El formato de las recomendaciones depende del tipo de alerta. La regla: **el lector debe poder actuar con lo que lee, sin necesitar contexto adicional.**

#### Vulnerabilidades técnicas (CVEs, fallas en servidores, software empresarial)

El lector es quien toma decisiones, no quien configura. Los comandos de terminal no son la instrucción principal — son contexto secundario dentro de ella.

Formatos válidos:

- **Instrucción delegable:** "Solicitar a TI que verifique si [X] está activo / desactivado / auditado / incluido en el contrato de servicio."
- **Pregunta de gobierno:** "¿Con qué frecuencia se revisan los permisos de acceso de terceros a nuestros sistemas?"

Usar la pregunta de gobierno cuando la acción depende de una decisión de presupuesto, política o proveedor, no solo de configuración técnica.

#### Brechas de consumidor (filtraciones de datos personales)

El lector puede ser el afectado directo. Las recomendaciones son neutras y en segunda persona — aplican a cualquier persona, no a una empresa.

Formatos válidos:

- **Acción directa:** "Si tienes cuenta en [servicio], cambia tu contraseña hoy. Usa una contraseña única que no uses en ningún otro lugar."
- **Señal de alerta:** "Si recibes correos que mencionan tu nombre y dirección real, es probable que vengan de esta filtración. No hagas clic en ningún enlace."

#### Campañas de ataque activas (phishing, malware, ingeniería social)

Formato mixto: primero la acción inmediata que puede tomar el propio lector, luego la pregunta de gobernanza para la empresa.

- Primero: qué hace el lector si se enfrenta a esto hoy.
- Después: qué debería revisar o preguntar como responsable de la empresa.

### Campo `context` en Radar

No resumir la noticia — el lector ya la lee en el título y la fuente. El `context` responde una sola pregunta: **¿qué cambia en cómo esta empresa gestiona su tecnología o toma decisiones?**

Ejemplos del estándar:

- ❌ "Anthropic publicó Mythos, que detectó 23,000 vulnerabilidades en proyectos de software abierto."
- ✅ "La velocidad de descubrimiento de vulnerabilidades acaba de cambiar. Los sistemas de IA detectan fallas en el software que tu empresa usa antes de que tus proveedores las parcheen. Los plazos que acordaste con tu equipo de TI para aplicar actualizaciones ya son obsoletos."

---

## Qué publicar

**Análisis:**
- Tendencias de AI con impacto empresarial real y verificable
- Cambios regulatorios o de política tecnológica en México
- Incidentes de seguridad con lecciones aplicables
- Herramientas o prácticas con utilidad demostrada para MiPYMES
- Evaluaciones comparativas de tecnología empresarial

**Radar:**
- Noticias relevantes de la semana con contexto propio
- Señales tempranas de cambios en el ecosistema tecnológico
- Publicaciones de fuentes confiables que merezcan atención

**Alertas:**
- Incidentes de seguridad confirmados o con alta credibilidad
- Vulnerabilidades con impacto real en empresas mexicanas
- Campañas activas de phishing, ransomware o fraude
- Filtraciones con contexto verificable

---

## Qué evitar publicar

- Comunicados de prensa sin análisis propio
- Especulación sin base verificable
- Contenido que ya está en todos los medios sin valor agregado
- Noticias internacionales sin conexión con México o MiPYMES
- Listas de "X cosas que debes saber" sin profundidad
- Cualquier contenido que amplifique pánico sin utilidad práctica
- **Títulos que prometen contenido que el artículo no entrega** — si el título dice "las 10 preguntas", "los 5 pasos" o cualquier listado numerado, el artículo debe entregar ese listado completo. Si solo hay un resumen o contexto externo, el título genera una expectativa rota que hace ver el sitio mal diseñado. En ese caso: reescribir el título o rechazar el ítem.

---

## Reglas sobre filtraciones

Perímetro no publica:
- Datos personales filtrados
- Credenciales o contraseñas
- Documentos confidenciales completos
- Información que facilite acceso no autorizado

Perímetro puede publicar:
- Que ocurrió una filtración
- El alcance aproximado y el tipo de datos involucrados
- El impacto potencial para empresas afectadas
- Recomendaciones de mitigación

La regla es: informar sin convertirse en vector de daño.

---

## Reglas sobre rumores

No se publica contenido basado únicamente en:
- Capturas de pantalla sin verificar
- Fuentes anónimas sin respaldo
- Posts en foros clandestinos sin corroboración adicional

Si el rumor tiene valor informativo pero no puede verificarse, se puede mencionar como "información en monitoreo" con ese contexto explícito.

---

## Reglas sobre lenguaje alarmista

Prohibido:
- "Catastrófico", "apocalíptico", "sin precedentes" sin evidencia
- Titulares que exageran el alcance real del incidente
- Predicciones de colapso o crisis sin base técnica
- Urgencia artificial que presiona al lector sin razón

Permitido:
- Describir riesgos reales con precisión
- Recomendar acción cuando hay razón genuina para actuar
- Señalar gravedad cuando la gravedad existe

---

## Enfoque empresarial mexicano

Todo contenido debe considerar:
- Capacidad operativa real de una MiPYME en México
- Contexto regulatorio mexicano cuando aplique
- Proveedores y herramientas accesibles en el mercado local
- Limitaciones de presupuesto y personal de IT

Una vulnerabilidad que solo afecta Fortune 500 en EE.UU. no es una alerta para Perímetro.

---

## Prioridad editorial

1. Utilidad para el lector sobre alcance de la noticia
2. Contexto propio sobre velocidad de publicación
3. Precisión sobre exhaustividad
4. Impacto real sobre impacto percibido
