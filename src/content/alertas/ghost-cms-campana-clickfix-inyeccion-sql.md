---
title: "Ghost CMS comprometido en campaña masiva de ClickFix"
date: "2026-05-24"
tipo: "Phishing"
status: "Activa"
resumen: "Una campaña masiva explota una vulnerabilidad crítica en Ghost CMS para inyectar código que muestra avisos falsos a los visitantes y los manipula para que ejecuten malware en sus propios equipos. Los sitios sin actualizar pueden estar comprometidos sin saberlo."
source: "BleepingComputer"
link: "https://www.bleepingcomputer.com/news/security/ghost-cms-sql-injection-flaw-exploited-in-large-scale-clickfix-campaign/"
publicacion: "published"
---

## Contexto

Se detectó una campaña a gran escala que explota CVE-2026-26980, una vulnerabilidad crítica de inyección SQL —un fallo que permite a un atacante insertar comandos directamente en la base de datos de un sitio y modificar su contenido— en Ghost CMS, la plataforma de código abierto usada para blogs y newsletters.

Los atacantes aprovechan esta falla para inyectar código JavaScript malicioso en los sitios comprometidos. Ese código muestra a los visitantes un aviso falso —técnica conocida como ClickFix— que simula ser una advertencia de seguridad o una verificación CAPTCHA y les instruye a copiar y ejecutar un comando en su propio equipo. Quien sigue las instrucciones termina instalando malware sin darse cuenta.

## Impacto potencial

Hay dos grupos afectados con consecuencias distintas:

**Operadores de Ghost CMS:** un sitio comprometido sirve malware a sus propios lectores sin que el administrador lo sepa. Esto tiene consecuencias directas: **pérdida de confianza y reputación** entre la audiencia que construyó el sitio, posible suspensión por el proveedor de hosting o el registrador del dominio si se detecta actividad maliciosa, y en casos donde los lectores son clientes o suscriptores, **responsabilidad por los daños** causados a quienes fueron infectados desde la plataforma.

**Visitantes de sitios comprometidos:** quien sigue el aviso falso instala malware que puede robar contraseñas y sesiones activas del navegador, lo que incluye acceso a correo, banca en línea o herramientas de trabajo. Para un empleado en una empresa, eso puede convertirse en el punto de entrada de un incidente más amplio.

## Recomendaciones

- **Si usas Ghost CMS:** confirmar con el equipo técnico o el proveedor que gestiona el sitio que la instalación está actualizada a la versión que corrige CVE-2026-26980. Esta acción no puede esperar — un sitio vulnerable puede estar afectando a sus visitantes en este momento.
- Solicitar una revisión de los logs del servidor en busca de modificaciones inesperadas en las páginas del sitio desde principios de mayo.
- **Regla para todo el equipo:** ninguna página web legítima pide que copies y ejecutes un comando en tu computadora. Si alguien en el equipo reporta haber visto ese tipo de aviso en algún sitio, fue un intento de ataque.
