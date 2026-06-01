---
title: "Paquete malicioso suplanta SDK bancario de Sicoob para robar credenciales de desarrolladores en LATAM"
date: "2026-05-29"
categoria: "Terceros"
nivelAtencion: "Medio"
status: "En monitoreo"
parche: "Desconocido"
explotacion: "Reportada"
resumen: "Investigadores encontraron un paquete malicioso en NuGet — el repositorio de componentes para .NET — que se hace pasar por el SDK oficial de Sicoob, una de las cooperativas financieras más grandes de Brasil. El paquete roba certificados e IDs de clientes usados para integraciones bancarias."
source: "The Hacker News"
link: "https://thehackernews.com/2026/05/malicious-sicoob-nuget-steals-banking.html"
publicacion: "published"
---

## Contexto

Investigadores de Socket descubrieron versiones maliciosas (2.0.0 a 2.0.4) del paquete "Sicoob.Sdk" en NuGet, el repositorio de componentes de software para la plataforma .NET de Microsoft. El paquete se hacía pasar por el SDK (kit de desarrollo) oficial de Sicoob — una cooperativa financiera brasileña — y robaba certificados PFX e IDs de cliente usados para autenticarse con los sistemas bancarios. Un certificado PFX es un archivo que funciona como llave digital para acceder a servicios financieros. El incidente ilustra un patrón creciente: atacantes apuntan a las herramientas que los desarrolladores usan para conectarse a sistemas financieros en toda la región.

## Por qué importa

- Un SDK bancario malicioso puede robar las credenciales que permiten acceder a cuentas, hacer transacciones o consultar saldos de forma automatizada.
- El patrón no es exclusivo de Sicoob: cualquier banco o fintech de LATAM que publique SDKs en repositorios públicos puede ser suplantado.
- Los desarrolladores confían implícitamente en los paquetes que instalan — no los auditan línea por línea.

## Impacto potencial

### Para personas

- Los desarrolladores que usaron estas versiones del paquete pueden tener sus credenciales de integración bancaria comprometidas.
- Señal de alerta: accesos inusuales a cuentas de integración bancaria, o movimientos no autorizados en cuentas conectadas.

### Para organizaciones

- Las credenciales robadas pueden ser usadas para acceder a cuentas bancarias corporativas, ejecutar transacciones o extraer información financiera sensible.
- Si la integración comprometida tiene acceso a cuentas de clientes o sistemas de pago, el impacto se extiende más allá de la organización.
- El riesgo aplica a cualquier empresa en LATAM que use integraciones bancarias desarrolladas con SDKs de terceros.

## Recomendaciones

### Para personas

- Si eres desarrollador y usas el SDK de Sicoob u otro SDK bancario en tus proyectos .NET, verifica que la versión instalada es la oficial del proveedor — no una versión desconocida del repositorio público.

### Para organizaciones

**Gestión**
- Preguntar al equipo de desarrollo qué SDKs bancarios o financieros usan, de qué fuente los obtienen y cuándo fue la última verificación de versión.
- Establecer que los SDKs para integraciones financieras deben ser verificados directamente con el proveedor bancario antes de usarse en producción.

**Técnicas**
- Verificar que los paquetes NuGet para integraciones bancarias provienen del repositorio oficial del banco o fintech, no de copias no verificadas.
- Rotar los certificados y credenciales de integración si se detecta el paquete comprometido en algún entorno.
- Si no tienes equipo de TI: consultar con tu desarrollador o proveedor técnico qué SDKs bancarios están en uso y si son las versiones oficiales.

## Pregunta diagnóstica

¿Sabe qué componentes externos usa su software para conectarse a sistemas bancarios y quién responde por mantenerlos verificados?
