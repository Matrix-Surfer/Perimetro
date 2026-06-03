---
title: "Zero-day en VS Code permite robar tokens de GitHub con un solo clic"
date: "2026-06-03"
tipo: "Otro"
status: "Activa"
resumen: "Un investigador publicó el código de explotación de una vulnerabilidad sin parche en Visual Studio Code que permite robar tokens de autenticación de GitHub engañando al usuario para que abra un enlace."
publicacion: "published"
---

## Contexto

Visual Studio Code (VS Code) es el editor de código más usado en el mundo, con decenas de millones de usuarios activos. El 3 de junio de 2026, un investigador de seguridad publicó el código de explotación de una vulnerabilidad de día cero —una falla sin parche disponible— que permite a un atacante robar el token de autenticación de GitHub de la víctima.

El ataque funciona así: el usuario recibe un enlace, lo abre, y VS Code procesa en segundo plano una instrucción que extrae el token OAuth de GitHub —la "llave digital" que permite a VS Code acceder a los repositorios del usuario. El atacante ya tiene acceso completo a la cuenta de GitHub de la víctima sin necesidad de contraseña ni doble autenticación.

El mismo incidente fue reportado por BleepingComputer y The Hacker News bajo el título "One-Click GitHub Dev Attack". Hasta el momento de publicación, Microsoft no ha publicado un parche.

## Impacto potencial

### Para personas

Si usas VS Code conectado a tu cuenta de GitHub, un enlace malicioso podría darte acceso total a todos tus repositorios —incluyendo privados— a alguien que no conoces. Puede leer tu código, copiar proyectos, modificar archivos o usar tus repositorios para distribuir software malicioso.

### Para organizaciones

GitHub es la plataforma donde vive el código fuente de la mayoría de las empresas de software y muchas startups. Un token robado puede otorgar acceso a:

- Código propietario y secretos de la empresa (contraseñas de base de datos, claves de API, credenciales de infraestructura).
- Pipelines de CI/CD —los sistemas automatizados que convierten código en software— que permiten inyectar código malicioso en los productos antes de que lleguen a los clientes.
- Repositorios privados de clientes si se trata de una agencia o consultora.

El acceso al código fuente puede derivar en extorsión, espionaje industrial o compromiso de la cadena de suministro de software.

## Perspectiva GRC

Este incidente evidencia un riesgo de gobernanza frecuente: **las herramientas de desarrollo tienen acceso irrestricto a activos críticos sin revisión de seguridad**. VS Code conectado a GitHub es una herramienta de trabajo, no un sistema bajo contrato o auditoría.

La pregunta de fondo: ¿cuántos desarrolladores de tu empresa tienen VS Code con acceso de escritura a repositorios de producción? Si no hay una política de permisos mínimos —donde cada usuario solo accede a lo que necesita— el radio de daño de un token robado es enorme.

## Recomendaciones

### Para personas

- Desconecta VS Code de GitHub temporalmente si no necesitas esa integración para trabajar hoy.
- Revisa en GitHub qué aplicaciones tienen acceso a tu cuenta: `github.com → Settings → Applications → Authorized OAuth Apps`. Revoca cualquier acceso que no reconozcas.
- No abras enlaces enviados por mensajes directos, correos o chats que prometan ver código, demos o repositorios.

### Para organizaciones

La pregunta que debes poder responder hoy: ¿qué acceso tiene cada desarrollador a los repositorios de producción, y cuándo fue la última revisión?

- Implementa el principio de acceso mínimo: los desarrolladores junior no deberían tener permisos de escritura en repositorios de producción.
- Activa la revisión de tokens de acceso activos en GitHub a nivel organización.
- Evalúa si el CI/CD de tu empresa requiere tokens de larga duración o si puede operar con accesos de corto plazo y menor privilegio.

---

El patrón detrás de este ataque es viejo: las herramientas de trabajo de los desarrolladores son puerta de acceso al código, y el código es el activo más crítico de las empresas de software. Revisar qué tiene acceso a qué no es un ejercicio técnico. Es una decisión de riesgo que corresponde a quien lidera la organización.
