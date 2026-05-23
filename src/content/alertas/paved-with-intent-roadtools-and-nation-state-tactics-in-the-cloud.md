---
title: "Actores estado-nación usan ROADtools para infiltrarse en entornos Azure y Microsoft 365"
date: "2026-05-23"
tipo: "Otro"
status: "Activa"
resumen: "Grupos como Midnight Blizzard y Void Blizzard están usando el framework open source ROADtools para comprometer entornos Azure y Entra ID. Organizaciones con Microsoft 365 deben revisar sus configuraciones de identidad."
source: "Unit 42 — Palo Alto Networks"
link: "https://unit42.paloaltonetworks.com/roadtools-cloud-attacks/"
publicacion: "published"
---

## Contexto

Unit 42 documentó cómo actores de amenaza de nivel estado-nación — incluyendo Midnight Blizzard (Rusia) y Void Blizzard — están usando ROADtools, un framework open source de auditoría de Azure AD, como arma ofensiva. ROADtools permite enumerar usuarios, grupos, roles y permisos en Entra ID (antes Azure Active Directory), y los atacantes lo usan para mapear la infraestructura antes de moverse lateralmente. Su uso legítimo en herramientas de auditoría hace que sea difícil de detectar solo por nombre de proceso.

## Impacto potencial

Organizaciones que usan Microsoft 365, Azure o Entra ID son el objetivo directo. Un atacante con credenciales válidas de un empleado puede usar ROADtools para entender toda la estructura de permisos de la organización antes de escalar privilegios o acceder a correo, SharePoint o Teams. El impacto real ocurre semanas o meses después del compromiso inicial.

## Recomendaciones

- Habilitar autenticación multifactor (MFA) en todas las cuentas de Microsoft 365 sin excepción.
- Revisar logs de Azure AD en busca de enumeraciones masivas de usuarios o grupos inusuales.
- Auditar los permisos de aplicaciones registradas en Entra ID y revocar accesos no reconocidos.
- Activar alertas de acceso anómalo en Microsoft Defender for Identity si está disponible en el plan.
