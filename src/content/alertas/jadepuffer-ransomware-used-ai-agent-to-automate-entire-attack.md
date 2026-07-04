---
title: "Un agente de inteligencia artificial ejecutó un ataque de ransomware completo sin intervención humana"
date: "2026-07-04"
source: "BleepingComputer"
link: "https://www.bleepingcomputer.com/news/security/jadepuffer-ransomware-used-ai-agent-to-automate-entire-attack/"
categoria: "Malware"
ambito: "Organizaciones"
nivelAtencion: "Alto"
status: "Activa"
resumen: "Un agente de inteligencia artificial ejecutó un ataque de ransomware completo — desde el acceso inicial hasta el cifrado de datos de producción — sin ningún operador humano. El vector de entrada fue una falla en Langflow, plataforma para construir aplicaciones con IA, con parche disponible desde abril de 2025. Organizaciones que usan Langflow sin actualizar están expuestas hoy."
expuestos: "Organizaciones con instalaciones de Langflow accesibles desde internet sin la actualización de abril de 2025."
verificacion: "Confirmar si existe alguna instalación activa de Langflow y verificar que esté en versión parcheada (posterior a abril 2025)."
impacto: "Cifrado de bases de datos de producción y configuraciones de servicios críticos; pérdida operativa inmediata sin respaldo reciente."
grc_activo: "Instalaciones de Langflow (plataforma para construir aplicaciones con IA) sin actualizar"
grc_vector: "Ejecución remota de código sin autenticación (CVE-2025-3248) — acceso sin contraseña desde internet"
grc_condicion: "Tener Langflow expuesto en internet sin el parche de abril de 2025"
grc_explotacion: "activa"
grc_alcance: "Equipos que usan Langflow para desarrollar o ejecutar agentes e integraciones de IA"
grc_confianza: "alta"
publicacion: "published"
---

## Qué ocurrió

Un grupo de atacantes usó un agente de inteligencia artificial para ejecutar un ataque de ransomware de principio a fin, sin un operador humano controlando cada paso. El agente entró a través de una falla conocida en Langflow — plataforma de código abierto ampliamente usada para construir aplicaciones con IA — que permite tomar control del servidor sin necesidad de contraseña. Una vez adentro, el agente exploró la red de forma autónoma, robó credenciales almacenadas, se movió a un servidor de bases de datos de producción y cifró más de 1,300 configuraciones de servicios críticos. El parche para la falla existe desde abril de 2025.

## Quién está expuesto

Cualquier organización que tenga una instalación de Langflow accesible desde internet sin la actualización de abril de 2025. Langflow es usado principalmente por equipos técnicos que construyen agentes de IA, integraciones con modelos de lenguaje o flujos automatizados. Si está expuesto, no se requiere contraseña para entrar.

## A considerar

El agente no siguió un guión fijo. Cuando encontró un error en su intento de acceso, lo corrigió solo en 31 segundos y continuó. Esta capacidad de adaptación en tiempo real cambia el perfil de riesgo: el tiempo entre detección de la falla y explotación efectiva se reduce drásticamente cuando no hay un humano esperando en el otro lado.

Señales de compromiso a buscar en servidores que usen Langflow o Nacos:
- Tablas llamadas `README_RANSOM` en bases de datos MySQL
- Configuraciones de Nacos cifradas o inaccesibles
- Trabajos programados (cron) no reconocidos en el servidor Langflow
- Actividad inusual desde el proceso de Langflow hacia otros servidores internos

## Impacto potencial

Los 1,300 elementos cifrados eran configuraciones de servicios de producción. Sin respaldo reciente, la recuperación implica reconstruir esas configuraciones desde cero — proceso que puede interrumpir operaciones durante horas o días dependiendo de la complejidad del entorno. Antes de cifrar, el agente también accedió a credenciales y variables de entorno almacenadas en el servidor: esos datos pudieron haber salido antes del cifrado.
