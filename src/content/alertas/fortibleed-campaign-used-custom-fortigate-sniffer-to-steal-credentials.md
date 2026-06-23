---
title: "Atacantes instalaron programa oculto en firewalls Fortinet para capturar contraseñas de administradores"
date: "2026-06-22"
source: "BleepingComputer"
link: "https://www.bleepingcomputer.com/news/security/fortibleed-campaign-used-custom-fortigate-sniffer-to-steal-credentials/"
categoria: "Credenciales"
ambito: "Organizaciones"
nivelAtencion: "Alto"
status: "Activa"
resumen: "La campaña FortiBleed instaló un programa de captura de tráfico personalizado en dispositivos FortiGate comprometidos para robar credenciales de administradores en el momento del inicio de sesión. Fortinet confirmó el incidente. Organizaciones con dispositivos FortiGate deben verificar si sus equipos fueron afectados usando los indicadores publicados."
expuestos: "Organizaciones con dispositivos FortiGate usados como firewall o VPN corporativa"
verificacion: "Verificar los dispositivos FortiGate contra los indicadores de compromiso publicados por Fortinet y revisar accesos recientes de administradores"
impacto: "Credenciales de administrador comprometidas dan acceso completo a la configuración de red, VPNs y reglas de seguridad"
publicacion: "published"
---

## Qué ocurrió

Investigadores documentaron que la campaña FortiBleed — que comprometió dispositivos FortiGate en todo el mundo — incluyó un paso adicional: los atacantes instalaron en los equipos un programa de captura de tráfico diseñado a medida para registrar las credenciales de administradores en el momento exacto del inicio de sesión. El robo ocurría en tiempo real, sin necesidad de descifrar nada.

## Quién está expuesto

Organizaciones que usan dispositivos FortiGate — barreras de seguridad de red (firewalls) y concentradores de VPN — especialmente aquellas que no habían aplicado los parches disponibles antes de la campaña.

## A considerar

Fortinet publicó indicadores de compromiso — señales técnicas que permiten detectar si un dispositivo fue afectado. Ese es el primer paso antes de cualquier otra acción. Si un dispositivo estuvo expuesto, las credenciales de todos los administradores deben considerarse comprometidas y rotarse de inmediato.

## Impacto potencial

Un atacante con credenciales de administrador de FortiGate tiene acceso a la configuración completa de la red: puede abrir puertos, modificar reglas de seguridad, interceptar tráfico VPN o crear accesos ocultos para entradas futuras.
