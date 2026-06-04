# Framework Editorial — ALERTAS

## Definición

ALERTAS responde: **¿Qué requiere atención inmediata?**

Un item de ALERTAS siempre termina con algo verificable hoy. Si termina con "¿qué significa esto para el futuro?", es RADAR. Si termina con "¿qué debo revisar hoy?", es ALERTA.

---

## Los 7 controles

### CONTROL 1 — Test de inclusión (3 preguntas)

Todo item debe poder responder las tres:

```
¿Qué ocurre?         Hecho concreto.
¿Quién está expuesto? Usuarios, empresas, desarrolladores, administradores.
¿Qué debe verificarse? No necesariamente corregir — pero sí revisar.
```

Si no puede responder las tres → no es ALERTA.

**Ejemplo que pasa:**
```
¿Qué ocurre?          Android corrige zero-day explotado activamente.
¿Quién está expuesto?  Usuarios Android sin actualizar.
¿Qué verificar?       Estado de actualización del sistema.
```

**Ejemplo que no pasa:**
```
¿Qué ocurre?          "La IA cambiará la forma de trabajar."
¿Quién está expuesto? ???
¿Qué verificar?       No existe acción inmediata.
```

---

### CONTROL 2 — Categorías válidas

Solo entra si pertenece a al menos una:

| Categoría | Ejemplo |
|-----------|---------|
| Vulnerabilidad activa | CVE explotado |
| Campaña activa | Phishing, malware en distribución |
| Compromiso confirmado | Brecha, robo de datos |
| Supply chain | Paquetes comprometidos |
| Credenciales | Robo o filtración |
| Configuración riesgosa | Exposición masiva por mala configuración |
| Fraude activo | Campañas vigentes |
| Servicio crítico | Falla con impacto operativo |

---

### CONTROL 3 — Categorías excluidas

No publicar como ALERTA:

| Tipo de contenido | Ejemplo | Va a |
|-------------------|---------|------|
| Estudios/estadísticas | "El 70% de las empresas..." | RADAR |
| Opiniones | "Experto afirma que..." | Descartar |
| Roadmaps/anuncios | "Google lanzará..." | RADAR |
| Predicciones | "Podría ocurrir..." | RADAR |
| Marketing | "Lanzamos nueva solución" | Descartar |

---

### CONTROL 4 — Schema obligatorio

```yaml
title:         # Titular del incidente — claro, factual, en español
date:          # "YYYY-MM-DD" (con comillas, z.string())
source:        # Fuente original
link:          # URL del artículo
categoria:     # Ver tabla de valores válidos
ambito:        # "Personas" | "Organizaciones" | "Mixto"
nivelAtencion: # "Bajo" | "Medio" | "Alto" | "Crítico"
status:        # "Activa" | "En monitoreo" | "Resuelta"
resumen:       # 2-3 oraciones. Hecho + quién expuesto + qué verificar.
               # En español. Tono directo. Sin jerga sin explicar.
publicacion:   # draft | review | published | rejected

# Campos editoriales internos (no aparecen en UI, obligan a pensar)
expuestos:    # Quién está expuesto — una frase
verificacion: # Qué debería verificarse — una frase
impacto:      # Qué podría pasar si no se verifica — una frase
```

**Valores válidos para `categoria`:**
`Vulnerabilidad` | `Malware` | `Fuga de datos` | `Phishing` | `Fraude` | `Terceros` | `IA` | `IoT/OT` | `Otro`

**Criterio para `nivelAtencion`:**
- **Crítico**: Explotación activa, sin parche, impacto masivo
- **Alto**: Explotación confirmada o riesgo amplio
- **Medio**: Riesgo real pero con mitigaciones disponibles
- **Bajo**: Señal temprana, riesgo acotado

**Criterio para `status`:**
- **Activa**: Incidente en curso, explotación confirmada
- **En monitoreo**: Detectado, sin explotación confirmada, o parcheado pero sin validar adopción
- **Resuelta**: Incidente cerrado, parche aplicado, riesgo eliminado

---

### CONTROL 5 — Estructura editorial del cuerpo

```markdown
## Qué ocurrió
[1 párrafo. Solo hechos. Sin análisis ni especulación.]

## Quién está expuesto
[Personas, organizaciones o ambos. Específico — no "todos".]

## Qué verificar
[No es un playbook técnico. Es una validación operativa.
 Preguntas concretas que alguien puede responder hoy.]

## Impacto potencial
[Qué podría ocurrir si aplica y no se verifica.]
```

---

### CONTROL 6 — Regla de lenguaje

ALERTAS usa verbos operativos. No reflexivos.

**Verbos de ALERTA:** Verifique, Revise, Actualice, Confirme, Identifique, Rote, Desactive, Valide

**Verbos de RADAR:** Observe, Monitoree, Evalúe, Cuestione, Considere

Si el cierre del artículo usa verbos de RADAR → reclasificar o reencuadrar.

---

### CONTROL 7 — Formato Twitter/X

Formula fija:

```
🚨 [Qué ocurrió]

[Quién podría estar afectado]

[Qué debe verificarse]

jsilva.io/alertas/[slug]

#AlertaPerímetro
```

**Ejemplo correcto:**
```
🚨 Android corrige una vulnerabilidad explotada activamente.

Los dispositivos sin actualizar siguen expuestos.

Si utiliza Android, verifique el estado de actualización del sistema.

jsilva.io/alertas/...

#AlertaPerímetro
```

**Lo que no debe aparecer en un tweet de ALERTA:**
- Preguntas retóricas ("¿Está preparado?")
- Reflexión estratégica ("Esto representa un cambio en...")
- Análisis de implicaciones futuras

---

## Regla de oro

> **"¿Qué significa esto para el futuro?" → RADAR**
> **"¿Qué debo revisar hoy?" → ALERTA**

---

## Estado actual del schema

El campo `tipo` es **legacy** — se mantiene para compatibilidad con alertas publicadas anteriores pero no se usa en items nuevos. El campo canónico es `categoria`.

El campo `ambito` es **nuevo** y obligatorio desde esta versión del framework.

Los campos `expuestos`, `verificacion` e `impacto` son **nuevos** — controles editoriales internos, no se renderizan en la UI.
