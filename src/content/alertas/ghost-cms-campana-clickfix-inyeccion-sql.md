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

Hay dos grupos afectados:

**Operadores de Ghost CMS:** si la instalación no está actualizada y parchada, el sitio puede estar sirviendo código malicioso a sus audiencias sin que el administrador lo sepa. La reputación del sitio queda comprometida junto con la seguridad de sus lectores.

**Visitantes de sitios comprometidos:** cualquier persona que visite un sitio afectado y siga el aviso falso instala malware en su equipo, lo que puede resultar en robo de contraseñas, tokens de acceso o datos sensibles almacenados en el navegador o el sistema.

## Recomendaciones

- **Si usas Ghost CMS:** actualizar a la versión más reciente que corrige CVE-2026-26980 de forma inmediata. No esperar.
- Revisar los logs del servidor en busca de consultas SQL inusuales o modificaciones inesperadas a la base de datos.
- Verificar el código fuente del sitio en busca de JavaScript externo no reconocido inyectado en las páginas.
- **Regla general para todos:** ninguna página web legítima pide que copies y ejecutes un comando en tu computadora. Si ves ese tipo de aviso, es una trampa.
