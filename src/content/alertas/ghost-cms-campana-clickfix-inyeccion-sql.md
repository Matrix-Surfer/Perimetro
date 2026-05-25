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

Se detectó una campaña a gran escala. Explota CVE-2026-26980, una vulnerabilidad crítica en Ghost CMS. Ghost CMS es la plataforma de código abierto usada para blogs y newsletters. La falla es de inyección SQL: permite insertar comandos directamente en la base de datos del sitio y modificar su contenido.

Los atacantes inyectan código en los sitios comprometidos. Ese código muestra un aviso falso a los visitantes. Simula una advertencia de seguridad. Simula un CAPTCHA. Le pide al visitante que copie y ejecute un comando en su equipo. Quien obedece instala malware sin darse cuenta. La técnica se llama ClickFix.

## Impacto potencial

Dos grupos afectados. Consecuencias distintas.

**Operadores de Ghost CMS:** el sitio sirve malware a sus lectores. Sin que el administrador lo sepa. La reputación cae. El hosting puede suspender el dominio si detecta actividad maliciosa. Si los lectores son clientes o suscriptores, la empresa puede ser **responsable por los daños** causados desde su plataforma.

**Visitantes de sitios comprometidos:** quien sigue el aviso instala malware. Roba contraseñas y sesiones activas del navegador. Correo, banca en línea, herramientas de trabajo. Para un empleado, puede ser el punto de entrada de un incidente más amplio.

## Recomendaciones

- **Si usas Ghost CMS: actualizar ahora.** Confirmar con el equipo técnico o el proveedor que la instalación está en la versión que corrige CVE-2026-26980. Un sitio vulnerable puede estar afectando a sus visitantes en este momento.
- **Solicitar revisión de logs del servidor.** Buscar modificaciones inesperadas en las páginas del sitio desde principios de mayo.
- **Regla para el equipo.** Ninguna página legítima pide ejecutar un comando en tu computadora. Si alguien reporta haber visto ese tipo de aviso, fue un intento de ataque.
