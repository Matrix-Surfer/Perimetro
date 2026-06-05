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

## A considerar
[Opcional. Solo si aporta algo que el lector no puede deducir por sí mismo.
 Ver regla de oro de la sección "A considerar" más abajo.]

## Impacto potencial
[Qué podría ocurrir si aplica y no se verifica.]
```

---

## Regla de oro — "A considerar"

La sección `## A considerar` solo existe cuando aporta acciones, decisiones o señales específicas que se desprenden directamente del incidente. Si eliminarla no hace perder información importante para tomar una decisión, debe eliminarse.

**Cuándo SÍ incluir:**

| Caso | Ejemplo |
|---|---|
| Acción concreta derivada de la alerta | VS Code: revisar accesos a repositorios, identificar tokens sin expiración |
| Mitigación temporal (sin parche) | Deshabilitar integración, restringir acceso, aumentar monitoreo |
| Indicadores de compromiso observables | Reglas de reenvío en M365, clonaciones masivas de repos, sesiones desde países inusuales |
| Decisión de gestión del riesgo | ¿Seguir usando esta integración? ¿Reducir permisos? ¿Cambiar política? |

**Cuándo NO incluir:**

| Caso | Ejemplo |
|---|---|
| Repite quién está expuesto | ❌ "Confirmar si existen equipos Mac" — ya está en "Quién está expuesto" |
| Recomendación universal | ❌ "Mantener sistemas actualizados" / "Capacitar usuarios" — válida siempre, no nace de la alerta |
| Acción obvia que la propia alerta ya implica | ❌ "Preguntar si usan Mirasvit" — si la alerta ya dice "si lo usa, aplique el parche" |
| Alerta principalmente operativa o de contexto | No toda alerta genera una checklist. A veces el valor está en el impacto, no en la acción. |

**Prueba práctica:** "¿Si elimino 'A considerar', el lector pierde información importante para tomar una decisión?" Si la respuesta es NO → eliminar.

---

## CONTROL 6 — Test de eliminación

Eliminar cualquier párrafo que describa la tecnología, el CVE, el exploit o el malware con detalle técnico si esa información no cambia lo que el lector debe verificar.

| ❌ Sobra | ✅ Sirve |
|---|---|
| "La vulnerabilidad es una falla de deserialización insegura en el componente X." | "Un atacante podría obtener acceso al sistema sin autorización." |

**La regla:** si el párrafo desaparece y la sección `## A considerar` (o `## Impacto potencial`) sigue siendo válida, el párrafo sobraba.

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

Ver formato completo, ejemplos y reglas en [`docs/SOCIAL_MEDIA.md`](SOCIAL_MEDIA.md).

Regla editorial para ALERTAS: lidera con la consecuencia de negocio, no con el nombre técnico ni el CVE. El nombre de la marca aparece como contexto en el cuerpo — nunca en el titular ni en el tweet.

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

---

## Apéndice — Estándar especial: brechas de datos personales

Cuando se comprometen datos de un banco, institución financiera, organismo de gobierno o cualquier entidad que concentra información sensible de personas, el impacto no termina en la filtración. **El dato robado es la materia prima de un ataque posterior.**

La obligación editorial es explicar la cadena de daño completa. El lector sin contexto no conecta "se filtraron tus datos" con las consecuencias reales.

**Cadenas de daño por tipo de dato filtrado:**

**Datos bancarios (número de cuenta, CLABE, saldo, movimientos):**
Con datos bancarios reales, un atacante puede llamar a la víctima haciéndose pasar por su banco — sabe el saldo, sabe el último movimiento, todo parece legítimo. El objetivo: que la víctima entregue su código de acceso o autorice una transferencia. Esta técnica se llama ingeniería social.

**Documentos de identidad (INE, pasaporte, comprobante de domicilio, CURP, RFC):**
Con documentos reales, un atacante puede solicitar créditos, tarjetas o servicios a nombre de la víctima en instituciones que no verifican presencialmente. El daño llega al historial crediticio — puede tardarse meses en detectarse y años en resolverse.

**Datos de acceso (correo y contraseña):**
Si la contraseña filtrada se usa en otros servicios — práctica muy común — el atacante entra a todos: correo, banca en línea, plataformas de proveedores. Esto se llama relleno de credenciales: probar la misma combinación en decenas de servicios de forma automatizada.

**Datos de contacto (nombre, teléfono, dirección):**
Con nombre y teléfono reales, un atacante puede suplantar el número ante la operadora y tomar el control del WhatsApp de la víctima o de los SMS que su banco usa para confirmar operaciones.

**Datos combinados (nombre + RFC + domicilio + datos bancarios):**
El perfil completo habilita fraude de identidad: apertura de empresas fantasma, solicitud de créditos fiscales, trámites ante el SAT o el IMSS a nombre de la víctima.

**Cómo aplicar este estándar:**

La sección `## Impacto potencial` en este tipo de alerta debe responder: ¿qué puede hacer el atacante con estos datos específicos, en la vida real?

- ❌ "La filtración expone datos personales que pueden usarse para actividades fraudulentas."
- ✅ "Con nombre, CURP y datos de cuenta expuestos, un atacante puede llamar a la víctima haciéndose pasar por el banco — conoce los datos reales, por eso parece legítimo — e inducirla a entregar su código de acceso o autorizar una transferencia."
