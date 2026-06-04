# Framework Editorial — ALERTAS

## Propósito editorial

ALERTAS responde: **¿Qué necesita verificar hoy una persona u organización debido a este evento?**

Esa es la pregunta correcta. No "¿qué pasó?" ni "¿qué riesgo existe?" — sino qué acción de verificación concreta existe hoy como consecuencia del evento.

| Sección  | Pregunta central                                       | Produce                  |
|----------|--------------------------------------------------------|--------------------------|
| ALERTAS  | ¿Qué debo verificar hoy?                               | Atención inmediata       |
| RADAR    | ¿Qué debería empezar a observar?                       | Vigilancia estratégica   |
| ANÁLISIS | ¿Qué supuesto estoy dando por cierto sin cuestionarlo? | Cambio de modelo mental  |

Si un artículo no produce una acción de verificación concreta → no es ALERTA.

---

## CONTROL 0 — Test de relevancia

Antes de cualquier otra decisión:

**¿Existe una acción de verificación razonable para la audiencia?**

Si la respuesta es no → no es ALERTA.

| Ejemplo | Verificación | ¿Pasa? |
|---------|-------------|--------|
| Campaña de facturas falsas | Si alguien recibió la factura. Si llamó. Si instaló acceso remoto. | ✅ |
| Vulnerabilidad crítica en teléfonos VoIP | Si existen esos equipos. Si están inventariados. Si reciben actualizaciones. | ✅ |
| Empresa X presentó nuevo modelo de IA | ¿Qué verifico hoy? Nada. | ❌ No es ALERTA |

---

## CONTROL 1 — Categorías válidas

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

## CONTROL 2 — Categorías excluidas

No publicar como ALERTA:

| Tipo de contenido | Ejemplo | Va a |
|-------------------|---------|------|
| Estudios/estadísticas | "El 70% de las empresas..." | RADAR |
| Opiniones | "Experto afirma que..." | Descartar |
| Roadmaps/anuncios | "Google lanzará..." | RADAR |
| Predicciones | "Podría ocurrir..." | RADAR |
| Marketing | "Lanzamos nueva solución" | Descartar |

---

## CONTROL 3 — Lenguaje ciudadano

Perímetro no escribe para CISOs. Escribe para directores, administradores, dueños de negocio y profesionales no técnicos.

**Todo término técnico debe cumplir una de tres condiciones:**

**Opción A — No usarlo.**
Si el significado puede transmitirse sin el término, eliminarlo.

**Opción B — Sustituirlo.**

| ❌ Jerga técnica | ✅ Lenguaje ciudadano |
|---|---|
| Malware | Programa malicioso |
| Ransomware | Secuestro de información |
| Phishing | Engaño por correo o mensaje falso |
| Credential theft / credenciales | Robo de accesos / usuario y contraseña |
| Endpoint | Equipo de trabajo |
| Exploit | Ataque que aprovecha una falla |
| Backdoor | Acceso oculto no autorizado |
| Acceso remoto | Control del equipo desde otra ubicación |
| Autenticación | Verificación de identidad / inicio de sesión |
| Propiedades digitales | Sitios web, canales, aplicaciones y cuentas publicitarias |
| Dominio oficial del servicio | La dirección web oficial del servicio |
| Google Workspace | El correo corporativo y los documentos de Google |
| MDM | Sistema de gestión de dispositivos móviles |
| IOC / indicador de compromiso | Señal de que el equipo pudo haber sido afectado |

**Opción C — Explicarlo la primera vez.**

> Un backdoor (acceso oculto que permite entrar al equipo sin autorización)...

Después de la primera explicación, puede usarse el término.

**Nota sobre titulares:** Describir el comportamiento o riesgo, no la tecnología. "Correos con falsas amenazas legales buscan tomar control de cuentas de Google" funciona mejor que "Campaña de phishing usa avisos falsos de copyright para robo de credenciales". El primero lo entiende un director administrativo. El segundo requiere formación técnica.

---

## CONTROL 4 — Test de comprensión

Leer solamente el `title` y el `resumen`. Preguntarse:

**¿Un gerente administrativo o director de área entiende el riesgo sin conocimiento técnico?**

Si no → reescribir antes de continuar.

---

## CONTROL 5 — Estructura editorial del cuerpo

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

## CONTROL 6 — Test de eliminación

Eliminar cualquier párrafo que describa la tecnología, el CVE, el exploit o el malware con detalle técnico si esa información no cambia lo que el lector debe verificar.

| ❌ Sobra | ✅ Sirve |
|---|---|
| "La vulnerabilidad es una falla de deserialización insegura en el componente X." | "Un atacante podría obtener acceso al sistema sin autorización." |

**La regla:** si el párrafo desaparece y la sección `## Qué verificar` sigue siendo válida, el párrafo sobraba.

---

## CONTROL 7 — Schema obligatorio

```yaml
title:         # Titular del incidente — claro, factual, en español
               # Nombra el mecanismo o patrón, no la marca involucrada
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

## CONTROL 8 — Test del administrador ocupado

Si una persona tiene dos minutos para leer la alerta, ¿puede entender:

1. Qué pasó.
2. Si le afecta.
3. Qué debe verificar.

...sin conocer términos técnicos?

Si la respuesta es sí → la alerta está lista.

---

## CONTROL 9 — Formato Twitter/X

Fórmula fija:

```
🚨 [Qué ocurrió — patrón, no marca]

[Quién podría estar afectado]

[Qué debe verificarse]

jsilva.io/alertas/[slug]

#AlertaPerímetro
```

**Ejemplo correcto:**
```
🚨 Facturas inesperadas. Montos alarmantes. Un número de soporte para "cancelar".

Ese es el fraude. La llamada termina en una transferencia o en el control remoto de tu equipo.

Verifique cualquier factura inesperada por un canal distinto al correo donde llegó.

jsilva.io/alertas/facturas-falsas-amazon-paypal-campana-activa

#AlertaPerímetro
```

**No debe aparecer en un tweet de ALERTA:**
- Preguntas retóricas ("¿Está preparado?")
- Reflexión estratégica ("Esto representa un cambio en...")
- Nombres de marcas en el mensaje principal cuando el patrón puede explicarse sin ellas

---

## Regla de oro

> **"¿Qué necesita verificar hoy una persona u organización debido a este evento?"**
>
> Si no hay respuesta concreta → no es ALERTA.

---

## Estado actual del schema

El campo `tipo` es **legacy** — se mantiene para compatibilidad con alertas publicadas anteriores pero no se usa en items nuevos. El campo canónico es `categoria`.

El campo `ambito` es **nuevo** y obligatorio desde esta versión del framework.

Los campos `expuestos`, `verificacion` e `impacto` son **nuevos** — controles editoriales internos, no se renderizan en la UI.
