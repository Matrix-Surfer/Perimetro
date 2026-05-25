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

### Tono

El tweet es una extensión del tono editorial: analítico, directo, útil. No es un titular de diario sensacionalista ni un comunicado corporativo.

- ❌ "¡URGENTE! Hackers norcoreanos atacan empresas. ¿Está tu empresa en riesgo?"
- ❌ "Lazarus Group ha desplegado RemotePE, un RAT de solo memoria que usa DPAPILoader."
- ✅ "El grupo norcoreano Lazarus tiene un nuevo malware que opera sin dejar archivos en disco. Tu antivirus no lo detecta. Objetivo: empresas financieras y de criptomonedas."

---

## Ejemplos de referencia (25 mayo 2026)

**Alerta — Phishing / Kali365**
```
Un empleado puede autorizar el acceso de un atacante a tu correo
creyendo que completó un proceso de seguridad normal. El FBI
advierte sobre Kali365: phishing industrial que abusa del mecanismo
de autenticación de Microsoft 365. La verificación en dos pasos
no lo detiene.

jsilva.io/alertas/kali365-phishing-como-servicio-cuentas-microsoft-365
```

**Alerta — Malware / Lazarus**
```
El grupo norcoreano Lazarus tiene un nuevo malware que opera sin
dejar archivos en disco. Tu antivirus no lo detecta. Objetivo:
empresas financieras y de criptomonedas. Una infección puede
significar pérdida de control operativo sin ninguna señal de alerta.

jsilva.io/alertas/lazarus-remotepe-rat-sector-financiero-crypto
```

**Alerta — Supply chain / Megalodon**
```
5,500 repositorios de GitHub comprometidos con automatización
maliciosa. Si tu equipo usa GitHub con pipelines de despliegue,
las credenciales de tu infraestructura pueden estar en manos de
atacantes ahora. Acción prioritaria: rotar credenciales sin
esperar confirmación.

jsilva.io/alertas/megalodon-github-actions-5500-repositorios-comprometidos
```

**Alerta — Supply chain / TrapDoor**
```
34 paquetes maliciosos en npm, PyPI y Crates.io desde el 22 de
mayo. Si tu equipo instaló dependencias esta semana, las credenciales
de producción pueden estar comprometidas. El acceso al desarrollador
es el acceso a toda la infraestructura del negocio.

jsilva.io/alertas/trapdoor-ataque-cadena-suministro-npm-pypi-crates
```

**Alerta — Phishing / Ghost CMS**
```
Más de 700 sitios con Ghost CMS están sirviendo malware a sus
visitantes sin que los administradores lo sepan. Vulnerabilidad
activamente explotada. Si usas Ghost, confirmar que está actualizado
no puede esperar.

jsilva.io/alertas/ghost-cms-campana-clickfix-inyeccion-sql
```

**Alerta — Supply chain / Laravel Lang**
```
Paquetes de desarrollo PHP ampliamente usados en México fueron
comprometidos para robar credenciales. Si tu empresa o agencia
mantiene proyectos Laravel, tratar el entorno de desarrollo como
potencialmente comprometido es el paso correcto mientras se confirma
el alcance.

jsilva.io/alertas/laravel-lang-paquetes-comprometidos-malware-credenciales
```

**Radar — AI / Mythos**
```
La IA de Anthropic analizó 1,000 proyectos de software y detectó
23,000 vulnerabilidades. El plazo de 15 o 30 días que tiene tu
proveedor de TI para aplicar parches ya no es competitivo. El
atacante ahora descubre fallas más rápido que el parche que las cierra.

jsilva.io/radar/anthropic-mythos-ia-descubre-23000-vulnerabilidades-oss
```
