# Distribución en Redes Sociales — Perímetro

## Dominio de producción

```
jsilva.io
```

URLs canónicas por sección:
- `jsilva.io/alertas/[slug]`
- `jsilva.io/radar/[slug]`
- `jsilva.io/analisis/[slug]`

---

## Objetivo del tweet

El objetivo no es informar toda la noticia.

El objetivo es lograr que la persona detenga el scroll porque detectó un riesgo, un cambio o un patrón que le afecta.

Si el usuario entiende toda la noticia sin entrar al sitio, el tweet fracasó.
Si el usuario no entiende nada, también fracasó.

Debe existir una tensión natural entre entender el riesgo y querer leer el análisis completo.

**La pregunta que debe pasar cada tweet:**

> ¿Estoy describiendo una noticia o explicando por qué importa?

Si describes la noticia, es contenido commodity.
Si explicas por qué importa, es contenido Perímetro.

---

## Formato de publicación

Cada tweet sigue esta estructura:

```
[emoji] [SECCIÓN]

[cuerpo — 40 a 70 palabras]

jsilva.io/[sección]/[slug]

#[HashtagSección] #Ciberseguridad
```

| Sección | Emoji | Etiqueta | Hashtag |
|---|---|---|---|
| ALERTAS | 🚨 | ALERTA | #AlertaPerímetro |
| RADAR | 📡 | RADAR | #RadarPerímetro |

**Reglas generales:**

- **Link antes de hashtags**, sin `https://` — formato `jsilva.io/...`
- **40 a 70 palabras** — menos de 30 parece titular, más de 90 pierde alcance
- **Archivo de tweets:** `tweets/tweets-YYYY-MM-DD.txt`

---

## ALERTAS — estructura

El tweet de ALERTA muestra el riesgo.

**Fórmula principal:**

```
Hecho
↓
Consecuencia
↓
Por qué importa
↓
Link
```

**Fórmula alternativa:**

```
Lo que pasó
↓
Lo que rompe
↓
Link
```

**Ejemplos:**

```
Una falla en la GitHub Action de Claude Code permitía tomar control de
repositorios públicos con un solo issue.

El repositorio de Anthropic era vulnerable. Un ataque exitoso habría
propagado código malicioso a todos los proyectos que dependen de ella.

La falla fue corregida. Los equipos que no actualizaron siguen expuestos.

jsilva.io/alertas/claude-code-github-action-flaw-let-one-malicious-issue-hijack-repositories
```

```
El instalador oficial de Hola Browser fue comprometido para distribuir
un programa malicioso.

No fue un sitio falso ni un correo de phishing. Fue el instalador
descargado del sitio oficial del proveedor.

Descargar desde la fuente original reduce el riesgo. No lo elimina.

jsilva.io/alertas/hola-browser-for-windows-compromised-to-deliver-cryptominer
```

```
Una campaña activa roba datos de tarjeta en el momento del pago — y usa
la propia infraestructura de Stripe para extraerlos.

El tráfico parece legítimo porque técnicamente lo es.

Operar con Stripe no protege si el código del checkout fue modificado.

jsilva.io/alertas/credit-card-theft-campaign-abuses-stripe-to-host-stolen-payment-info
```

---

## RADAR — estructura

El tweet de RADAR muestra el cambio de paradigma.

RADAR no habla de incidentes. Habla de señales. La estructura refleja eso.

**Fórmula:**

```
Observación
↓
Cambio de paradigma
↓
Link
```

**Ejemplos:**

```
Tres grupos criminales distintos ya usan llamadas falsas de soporte
técnico para obtener accesos corporativos.

Cuando una táctica se replica entre grupos, deja de ser una excepción
y se convierte en un método estándar.

El riesgo ya no requiere un atacante sofisticado. Requiere un número
de teléfono y un guión.

jsilva.io/radar/pink-is-the-latest-goon-squad-to-use-fake-helpdesk-calls-to-steal-creds
```

```
Meta incorporó reconocimiento facial en aplicaciones instaladas en
millones de teléfonos sin comunicarlo.

El usuario no activó nada. El código ya estaba ahí.

Cuando las capacidades biométricas pueden desplegarse sin aviso en
aplicaciones de consumo, la línea entre dispositivo personal y entorno
corporativo controlado se vuelve difusa.

jsilva.io/radar/meta-silently-added-face-recognition-code-for-its-smart-glasses-to-millions-of-p
```

---

## Qué evitar

| ❌ | Motivo |
|---|---|
| Repetir la nota ("Cisco publicó una vulnerabilidad CVE-2026-XX con score 10.0...") | Parece RSS, no análisis |
| Sensacionalismo ("¡URGENTE! ¡Millones en peligro!") | Reduce credibilidad |
| Recomendaciones obvias ("Actualice sus sistemas") | No aporta valor |
| Demasiados detalles técnicos ("afecta el endpoint /api/v1...") | La mayoría de los lectores no lo necesitan |
| Preguntas retóricas vacías ("¿Está preparado?") | No aporta tensión real |

---

## La diferencia que define el proyecto

| Sección | El tweet muestra |
|---|---|
| ALERTAS | El riesgo |
| RADAR | El cambio de paradigma |

Esta distinción evita que RADAR se convierta en otra sección de noticias y obliga a que cada pieza aporte una observación estratégica.
