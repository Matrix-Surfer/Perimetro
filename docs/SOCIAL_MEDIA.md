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

## Formato estándar de tweets

### Reglas generales

- **Un tweet por artículo** — sin hilo por defecto
- **Lidera con la consecuencia de negocio**, no con el nombre técnico de la vulnerabilidad ni con el nombre del atacante
- **Sin emojis** — consistente con el tono editorial
- **Link al final**, separado del cuerpo del tweet
- **Texto máximo ~245 caracteres** — Twitter reserva ~23 chars para el URL (t.co), total 280

### Estructura

```
[Consecuencia o implicación de negocio en 1-2 oraciones.]
[Contexto mínimo necesario para que tenga sentido.]
[Llamada a la acción implícita o dato que justifica leer más.]

jsilva.io/[seccion]/[slug]
```

### Tono y ritmo

El tweet es una extensión del tono editorial: analítico, directo, útil. No es un titular de diario sensacionalista ni un comunicado corporativo.

El ritmo es staccato. Oraciones cortas. Una idea por línea. El punto como martillo.

- ❌ "¡URGENTE! Hackers norcoreanos atacan empresas. ¿Está tu empresa en riesgo?"
- ❌ "Lazarus Group ha desplegado RemotePE, un RAT de solo memoria que usa DPAPILoader."
- ✅ "Lazarus tiene un nuevo malware. Opera solo en memoria. No escribe archivos. Tu antivirus no tiene nada que analizar."

---

## Ejemplos de referencia (25 mayo 2026)

**Alerta — Phishing / Kali365**
```
El FBI advierte sobre Kali365. Phishing industrial. Se vende como servicio.
Cualquiera puede comprarlo.

La víctima autoriza el acceso sin saberlo. La verificación en dos pasos
no lo detiene.

jsilva.io/alertas/kali365-phishing-como-servicio-cuentas-microsoft-365
```

**Alerta — Malware / Lazarus**
```
Lazarus tiene un nuevo malware. Opera solo en memoria. No escribe archivos.
Tu antivirus no tiene nada que analizar.

Objetivo: empresas financieras y cripto. Sin señal de alerta.

jsilva.io/alertas/lazarus-remotepe-rat-sector-financiero-crypto
```

**Alerta — Supply chain / Megalodon**
```
5,500 repositorios de GitHub comprometidos. Commits falsos. Automatización
maliciosa.

Si tu equipo usa GitHub con pipelines activos, las credenciales de tu
infraestructura pueden estar expuestas. Rotar. No esperar confirmación.

jsilva.io/alertas/megalodon-github-actions-5500-repositorios-comprometidos
```

**Alerta — Supply chain / TrapDoor**
```
34 paquetes maliciosos. npm, PyPI, Crates.io. Desde el 22 de mayo.

Si tu equipo instaló dependencias esta semana, asumir compromiso preventivo.
El acceso al desarrollador es el acceso a toda la infraestructura.

jsilva.io/alertas/trapdoor-ataque-cadena-suministro-npm-pypi-crates
```

**Alerta — Phishing / Ghost CMS**
```
700 sitios con Ghost CMS sirviendo malware a sus visitantes.
Los administradores no lo saben.

Si usas Ghost: actualizar ahora. No puede esperar.

jsilva.io/alertas/ghost-cms-campana-clickfix-inyeccion-sql
```

**Alerta — Supply chain / Laravel Lang**
```
Paquetes de Laravel Lang comprometidos. Malware distribuido como
actualización de rutina.

Alta penetración en México. Si tu equipo usa Laravel, tratar el entorno
como comprometido. Rotar credenciales. No esperar.

jsilva.io/alertas/laravel-lang-paquetes-comprometidos-malware-credenciales
```

**Radar — AI / Mythos**
```
La IA de Anthropic analizó 1,000 proyectos de software. Encontró 23,000
vulnerabilidades.

El atacante descubre fallas más rápido que el parche que las cierra.
El plazo de 30 días que acordaste con TI ya es obsoleto.

jsilva.io/radar/anthropic-mythos-ia-descubre-23000-vulnerabilidades-oss
```
