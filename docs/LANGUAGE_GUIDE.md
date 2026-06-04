# Guía de Lenguaje — Perímetro

## Principio editorial

Perímetro traduce riesgos tecnológicos para personas que toman decisiones, administran procesos o usan tecnología sin conocimientos técnicos avanzados.

**La prioridad es que el lector entienda el riesgo. No demostrar conocimiento técnico.**

---

## REGLA 1 — Explicar antes de usar

Si un término técnico es necesario, se explica la primera vez que aparece.

| ❌ Incorrecto | ✅ Correcto |
|---|---|
| Vulnerabilidad RCE explotada activamente. | Vulnerabilidad que permite ejecutar código remoto (tomar control del sistema a distancia). |
| Ataque de fuerza bruta contra bóvedas cifradas. | Ataque de fuerza bruta (pruebas masivas de contraseñas hasta encontrar la correcta). |

---

## REGLA 2 — Preferir lenguaje cotidiano

Cuando exista una alternativa comprensible, usarla.

| Evitar | Preferir |
|--------|----------|
| Credenciales | Usuarios y contraseñas |
| Endpoint | Equipo |
| Payload | Código malicioso |
| Exfiltración | Robo de información |
| Actor de amenaza | Delincuente o atacante |
| Vector de ataque | Forma de ataque |
| Compromiso | Intrusión o acceso no autorizado |
| Vulnerabilidad crítica | Falla grave de seguridad |
| Malware | Programa malicioso |
| IOC | Señal de compromiso |
| Patch | Actualización de seguridad |

---

## REGLA 3 — Definir términos inevitables

Algunos términos son imposibles de evitar. Deben explicarse brevemente entre paréntesis.

| Término | Definición operativa |
|---------|---------------------|
| MFA | Autenticación multifactor (verificación adicional además de la contraseña). |
| Ransomware | Programa malicioso que secuestra archivos y exige un pago para recuperarlos. |
| Phishing | Mensajes falsos que buscan robar contraseñas o datos personales. |
| Zero-Day | Falla de seguridad explotada antes de que exista una corrección disponible. |
| Deepfake | Audio o video generado por IA para imitar a una persona real. |
| SaaS | Software que funciona desde Internet sin instalarse localmente. |
| API | Mecanismo que permite que dos sistemas intercambien información automáticamente. |
| EDR | Sistema de protección avanzada para equipos (antivirus de siguiente generación). |
| CVE | Identificador oficial de una vulnerabilidad de seguridad documentada. |
| Token | Credencial temporal que sustituye a la contraseña en una sesión activa. |
| Prompt Injection | Técnica que inyecta instrucciones maliciosas en un asistente de IA para manipular su comportamiento. |

---

## REGLA 4 — Nunca asumir conocimiento previo

No asumir que el lector conoce estos términos. Si aparecen, explicarlos o reemplazarlos:

CVE · OAuth · SSO · DLP · CASB · EDR · SIEM · Prompt Injection · Token · SDK · JWT · RCE · NTLM · RAT · TDS · KEV · APT · IAM · MaaS · PhaaS · ClickFix · C2 · OPSEC

---

## REGLA 5 — Explicar la consecuencia, no la tecnología

La mayoría de los lectores no necesitan entender cómo funciona el ataque. Necesitan entender qué puede pasar.

| ❌ Incorrecto | ✅ Correcto |
|---|---|
| Vulnerabilidad de deserialización insegura en WebLogic. | Una falla de seguridad permite a un atacante tomar control del servidor desde Internet. |
| Explotación de NTLM relay para movimiento lateral. | Un atacante que entra a un equipo puede moverse a otros sistemas de la red sin necesitar contraseñas adicionales. |

---

## REGLA 6 — La prueba editorial

Antes de publicar una ALERTA o RADAR:

> **¿Una persona de Recursos Humanos, Finanzas o Administración entendería este texto sin buscar términos en Google?**

Si la respuesta es "no" → reescribir, simplificar, explicar.

---

## REGLA 7 — Audiencia objetivo de escritura

**Para quién se escribe:**
- Director general
- Dueño de MiPyME
- Gerente administrativo
- Responsable de cumplimiento
- Usuario de tecnología

**No para:**
- Pentesters
- Red Team
- Investigadores de malware
- Arquitectos cloud

Esos perfiles ya leen las fuentes originales. Perímetro existe para traducir.

---

## REGLA 8 — Fórmula Perímetro

Cuando aparezca un término técnico inevitable, usar esta fórmula:

**Término técnico → Traducción (entre paréntesis) → Consecuencia**

Ejemplo correcto:
> "Los atacantes explotaron una vulnerabilidad de ejecución remota de código (falla que permite tomar control del sistema a distancia). El riesgo es que puedan acceder a información o interrumpir operaciones sin credenciales válidas."

---

## Regla resumen

> **Si un lector necesita buscar un término en Internet para entender la alerta, la alerta aún no está terminada.**

Este principio diferencia a Perímetro de los sitios de ciberseguridad escritos para especialistas. El espacio de traducción entre el mundo técnico y el mundo de negocio es el valor central de Perímetro.
