---
title: "Zero-day en VS Code permite robar tokens de GitHub con un solo clic"
date: "2026-06-03"
tipo: "Otro"
categoria: "Vulnerabilidad"
nivelAtencion: "Crítico"
status: "En monitoreo"
parche: "No"
explotacion: "Reportada"
resumen: "Un investigador publicó código de exploit para una vulnerabilidad zero-day en Visual Studio Code que permite robar el token de autenticación de GitHub con solo hacer clic en un enlace. El token robado da acceso completo de lectura y escritura a todos los repositorios del desarrollador, incluyendo los privados."
source: "BleepingComputer"
link: "https://www.bleepingcomputer.com/news/security/vs-code-zero-day-lets-hackers-steal-github-tokens-in-one-click/"
publicacion: "published"
---

## Contexto

Un investigador publicó código de exploit funcional para una vulnerabilidad zero-day en Visual Studio Code —el editor de código más usado del mundo—. La falla permite a un atacante robar el token de autenticación de GitHub de un desarrollador con solo hacer que haga clic en un enlace. El token es la llave que GitHub usa para identificar al usuario: con él, el atacante tiene acceso completo de lectura y escritura a todos sus repositorios, incluyendo los privados.

El exploit está publicado. No existe parche disponible al momento de este reporte.

## Impacto potencial

### Para personas

Cualquier desarrollador que use VS Code con la integración de GitHub activa está expuesto. Un token robado permite al atacante leer, modificar, o eliminar código de todos los repositorios del usuario.

### Para organizaciones

El impacto puede extenderse más allá del desarrollador individual. Si el token tiene permisos sobre repositorios organizacionales —código fuente, pipelines de CI/CD, secretos de configuración—, el atacante tiene acceso a la infraestructura técnica de la empresa.

Un repositorio comprometido puede introducir código malicioso en producción sin que nadie lo note de inmediato.

## Perspectiva GRC

Los tokens de acceso personal de GitHub son credenciales de alto valor que muchas organizaciones no inventarian ni rotan regularmente. No están sujetos a las mismas políticas de expiración que las contraseñas corporativas.

La pregunta de gobernanza: ¿tu organización tiene una política de expiración y rotación para tokens de acceso a repositorios de código?

## Recomendaciones

### Para personas

Revisa los tokens de acceso activos en tu cuenta de GitHub (Settings → Developer settings → Personal access tokens). Revoca cualquiera que no reconozcas o que tenga más permisos de los necesarios. No hagas clic en enlaces desconocidos mientras tengas VS Code abierto con sesión de GitHub activa.

### Para organizaciones

Auditar qué tokens de GitHub tienen acceso a repositorios organizacionales y con qué permisos. Los tokens con acceso de escritura a repositorios de producción deben tener fecha de expiración y estar documentados con su propietario. Evaluar si los repositorios críticos tienen protección de ramas que requiera revisión de código antes de cualquier merge.

---

Los tokens de autenticación son contraseñas que no parecen contraseñas. Se crean una vez, se usan por meses o años, y rara vez se auditan. La lección permanente: cualquier credencial de larga duración con acceso amplio es un riesgo de gobierno, no solo un riesgo técnico. El developer que dejó un token activo con permisos de escritura en producción tomó una decisión de gestión de accesos, aunque no lo haya percibido así.
