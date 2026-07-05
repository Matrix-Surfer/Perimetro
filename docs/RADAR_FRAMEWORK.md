# Framework Editorial — RADAR

## La trilogía de Perímetro

| Sección  | Pregunta central                                | Horizonte |
|----------|-------------------------------------------------|-----------|
| ALERTAS  | ¿Qué requiere atención inmediata?               | Hoy       |
| RADAR    | ¿Qué requiere reflexión antes de ser urgente?   | Semanas / meses |
| ANÁLISIS | ¿Qué requiere comprensión profunda?             | Permanente |

Un buen RADAR debería sentirse escaso. Cuando un lector ve un item de RADAR debería pensar: *"Esto no es una noticia. Esto es algo que debería empezar a observar."*

---

## Los 4 filtros (en orden)

### Filtro 1 — ¿Existe un cambio estructural?

**Pregunta:** ¿Hay algo que está cambiando en la forma en que funciona la seguridad, la confianza o el riesgo?

Si la respuesta es no → ALERTA o descarte.

### Filtro 2 — ¿La señal sobrevivirá 30 días?

**Pregunta:** Si alguien lee esto dentro de un mes, ¿seguirá siendo relevante?

| Ejemplo | ¿Sobrevive? | Clasificación |
|---------|-------------|---------------|
| Nueva campaña de phishing con SVG | No | ALERTA |
| Las voces sintéticas destruyen la confianza en autenticación por llamada | Sí | RADAR |
| MiPYMEs usan IA para competir con empresas más grandes | Sí | RADAR |

Si la señal no sobrevive a la noticia → ALERTA.

### Filtro 3 — ¿Puede responder las tres preguntas?

```
señal:       ¿Cuál es el cambio estructural?          [una frase]
supuesto:    ¿Qué creencia deja de ser válida?         [una frase]
observación: ¿Qué debería empezar a vigilar el lector? [una frase]
```

Si no puede responder las tres → no es RADAR.

**Ejemplo que pasa:**
```
señal:       Los asistentes de IA comienzan a operar sistemas completos.
supuesto:    La automatización requiere supervisión humana constante.
observación: Qué permisos reciben los agentes y cómo se monitorean sus acciones.
```

**Ejemplo que no pasa:**
```
señal:       OpenAI lanzó GPT-5.5.
supuesto:    ??? (no hay supuesto roto)
observación: Actualiza tu integración. (acción operativa inmediata)
```

### Filtro 4 — ¿El horizonte es estratégico?

La distinción no es el verbo. Es el horizonte temporal de la acción.

| Tipo   | Horizonte       | Verbos típicos al final |
|--------|-----------------|-------------------------|
| ALERTA | Horas / días    | Actualice, Parchee, Cambie, Desactive, Rote |
| RADAR  | Semanas / meses | Observe, Monitoree, Evalúe, Cuestione, Considere, Revise estrategia |

Excepción: "revisar estrategias de continuidad" es estratégico → RADAR. "Revisar accesos activos" es operativo → ALERTA.

---

## Categorías válidas de RADAR

Un item entra a RADAR si pertenece a al menos una:

| Categoría | Ejemplos |
|-----------|----------|
| Cambio tecnológico | IA agencial, prompt injection, deepfakes, modelos autónomos, AI-to-AI |
| Cambio económico | Ciberseguros, costos de ransomware, adopción IA en MiPYMEs |
| Cambio regulatorio | Legislación IA, NIS2, DORA, nuevos requisitos de privacidad |
| Cambio cultural | Shadow AI, dependencia SaaS, uso sin autorización |
| Cambio geopolítico | Restricciones chips, IA como seguridad nacional, soberanía digital |

---

## Schema obligatorio

```yaml
title:        # Nombra el cambio estructural, no la noticia
pubDate:      # Fecha sin comillas (YYYY-MM-DD)
source:       # Fuente original
category:     # "AI" | "Seguridad"

# Campos de control editorial (no aparecen en la UI)
señal:        # El cambio estructural — una frase
supuesto:     # El paradigma que se rompe — una frase
observación:  # Qué vigilar — una frase (no "qué hacer")

# Campo editorial principal
context:      # 2-3 oraciones. Desarrolla señal + supuesto + observación.
              # Tono staccato. Ángulo GRC. No resume la noticia.
              # Termina en una pregunta o en una observación, nunca en una instrucción operativa.

publicacion:  # draft | review | published | rejected
```

---

## Estructura del cuerpo

```markdown
## La señal

Una o dos oraciones. El hecho desnudo. Qué está cambiando.

## El supuesto que se rompe

Qué creíamos que era cierto y ya no lo es — o pronto no lo será.

## Qué observar

No qué hacer. Qué vigilar. Qué pregunta hacerse. Qué indicador monitorear.
```

**Prohibido en RADAR:**
- "Actualice / Parchee / Revise accesos / Cambie contraseñas" como cierre
- "¿Está preparado?" como pregunta retórica vacía
- Resumir la noticia sin extraer la señal

---

## Lo que NO entra a RADAR

| Tipo | Ejemplo | Va a |
|------|---------|------|
| Vulnerabilidad explotada | CVE activo en Oracle WebLogic | ALERTAS |
| Campaña activa | Phishing con facturas falsas | ALERTAS |
| Parche publicado | Android patches 124 flaws | ALERTAS |
| Nota operativa | OpenAI retira modelos legacy | Descarte |
| Noticia sin señal duradera | Caída de Exchange Online (si se enfoca en la caída, no en la dependencia) | Descarte |
| Item redundante | Misma señal ya publicada | Descarte |

---

## Regla de escasez

RADAR no es un feed de noticias comentadas. Es una capa de inteligencia anticipatoria.

Una semana con 2-3 items de RADAR bien construidos es mejor que 10 items que parecen noticias con pregunta retórica al final.

Si más del 20% de los candidatos a RADAR pasan los 4 filtros, probablemente los filtros no se están aplicando con rigor.

---

## Test de junta directiva (filtro final antes de publicar)

Leer únicamente `title`, `señal`, `supuesto` y `observación`.

Si un director general, director financiero o director de operaciones entiende el punto central sin leer el cuerpo del artículo, el RADAR pasó.

Si necesita conocer términos de seguridad o IA para entenderlo, todavía está demasiado técnico.

**Criterio de selección adicional:** antes de enriquecer un candidato a RADAR, preguntarse si un lector nuevo — alguien que llega al sitio por primera vez — entendería de qué se habla con solo leer el titular. Si la señal requiere contexto de industria que ese lector no tiene, descartarla o reformularla hasta que sea autoexplicativa. Un buen RADAR no necesita que el lector ya sepa qué es la señal para entender por qué importa.

Si el título menciona una tecnología específica pero el cambio estructural puede explicarse sin ella, el título debe centrarse en el cambio y no en la tecnología.

| | Ejemplo |
|---|---|
| ❌ | Anthropic expande Mythos a 150 organizaciones. |
| ✅ | Las empresas empiezan a delegar tareas de seguridad a sistemas de IA que aún no pueden auditar completamente. |

La noticia desaparece. La señal permanece.

**Ejemplo que pasa:**
```
título:      Los agentes de IA llegan a las empresas antes de que alguien defina qué pueden hacer
señal:       Los agentes de IA se integran en operaciones antes de que existan criterios para supervisar lo que hacen.
supuesto:    El software hace lo que le pedimos — nada más, nada inesperado.
observación: Qué agentes de IA están operando en la organización, a qué sistemas tienen acceso, y si existe algún registro de lo que hacen.
```

---

## Arquitectura editorial — las tres capas de Perímetro

| Sección  | Pregunta central                                       | Produce                 |
|----------|--------------------------------------------------------|-------------------------|
| ALERTAS  | ¿Qué debo verificar hoy?                               | Atención inmediata      |
| RADAR    | ¿Qué debería empezar a observar?                       | Vigilancia estratégica  |
| ANÁLISIS | ¿Qué supuesto estoy dando por cierto sin cuestionarlo? | Cambio de modelo mental |

RADAR existe en el medio: después de la urgencia operativa (ALERTAS) y antes de la comprensión profunda (ANÁLISIS). Su función es anticipar lo que todavía no es urgente pero pronto lo será.

La diferencia no es el tema — es el valor que recibe el lector en cada sección.
