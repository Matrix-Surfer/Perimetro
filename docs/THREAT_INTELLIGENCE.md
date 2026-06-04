# Threat Intelligence y Monitoreo

## Objetivo

Identificar amenazas relevantes para organizaciones mexicanas — especialmente MiPYMES — mediante monitoreo continuo de fuentes OSINT, Telegram y dark web.

---

## Fuentes monitoreadas

### Telegram

Canales especializados de ciberseguridad y monitoreo de amenazas activas.

### OSINT

Fuentes públicas relacionadas con ransomware, leaks, malware, actores de amenaza y campañas activas.

### Dark Web

Monitoreo indirecto de foros clandestinos, leak sites, marketplaces y publicaciones de actores ransomware.

---

## Restricciones

Perímetro NO publica:

- Datos robados o credenciales filtradas
- Bases de datos o documentos confidenciales completos
- Enlaces a contenido ilegal
- Información que facilite acceso no autorizado
- Contenido que promueva actores maliciosos

---

## Flujo CTI

1. Detección inicial en fuentes monitoreadas
2. Clasificación por categoría (ver tabla)
3. Validación preliminar — verificar cuando sea posible
4. Evaluación de impacto para audiencia MX/MiPYME
5. Si pasa → pipeline editorial → ALERTAS o RADAR

---

## Clasificación inicial

| Categoría | Qué cubre |
|---|---|
| `Vulnerabilidad` | CVE explotado, falla activa en software |
| `Malware` | Programa malicioso en distribución activa |
| `Fuga de datos` | Brecha o exposición de datos confirmada |
| `Phishing` | Campaña de engaño activa |
| `Fraude` | Fraude financiero o por ingeniería social |
| `Terceros` | Compromiso vía proveedor o cadena de suministro |
| `IA` | Riesgo relacionado con sistemas de IA |
| `IoT/OT` | Dispositivos conectados o sistemas industriales |
| `Otro` | Incidentes que no encajan en las categorías anteriores |

Filtro geográfico: rechazar incidentes exclusivamente de EE.UU. sin ángulo MX/LATAM. Conservar si el software, técnica o actor tiene relevancia directa en México.

---

## Objetivo estratégico

Construir una capacidad editorial ligera de cyber threat intelligence enfocada en México y MiPYMES.
