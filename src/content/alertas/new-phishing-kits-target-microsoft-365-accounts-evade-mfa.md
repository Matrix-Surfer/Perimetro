---
title: "Nuevos kits de phishing roban cuentas de Microsoft 365 sin que la verificación en dos pasos lo impida"
date: "2026-07-14"
source: "BleepingComputer"
link: "https://www.bleepingcomputer.com/news/security/new-phishing-kits-target-microsoft-365-accounts-evade-mfa/"
categoria: "Phishing"
ambito: "Organizaciones"
nivelAtencion: "Alto"
status: "Activa"
resumen: "Dos nuevos kits de phishing, Jalisco y OmegaLord, están siendo usados para robar cuentas de Microsoft 365 sorteando la autenticación multifactor (MFA: verificación adicional además de la contraseña). Los atacantes suelen extraer información de la cuenta comprometida en menos de seis minutos, antes de que el equipo de seguridad note la intrusión."
expuestos: "Organizaciones que usan Microsoft 365 para correo y documentos compartidos."
verificacion: "Reducir el límite de dispositivos que un usuario puede registrar en Microsoft Entra ID (de 50 a uno o dos) y bloquear el inicio de sesión por código de dispositivo mediante políticas de acceso condicional."
impacto: "Un atacante puede tomar control de la cuenta de correo y buscar información sensible en documentos compartidos en minutos, seguido de amenazas de extorsión."
grc_activo: "Cuentas de correo y documentos compartidos en Microsoft 365"
grc_vector: "Jalisco genera códigos de dispositivo falsos que la víctima autoriza sin saberlo; OmegaLord usa una página falsa de lector de PDF para robar contraseña y número de teléfono, apuntando directamente a los métodos de verificación adicional"
grc_condicion: "Que la víctima autorice un código de dispositivo falso o entregue sus datos en la página falsa de PDF"
grc_alcance: "Cuentas corporativas de Microsoft 365; el ataque completo, desde el robo hasta la extracción de información, puede tomar menos de seis minutos"
publicacion: "published"
---

## Qué ocurrió

Se identificaron dos nuevos kits de phishing, llamados Jalisco y OmegaLord, diseñados para robar cuentas de Microsoft 365 y sortear la autenticación multifactor (MFA: la verificación adicional, además de la contraseña, que suele pedir un código en el teléfono). Jalisco genera automáticamente un código de acceso de dispositivo cada vez que la víctima entra a la página falsa, y lo hace validar antes de que expire, sin que la víctima note que autorizó el acceso de un atacante. OmegaLord, en cambio, usa una página falsa que imita un lector de documentos PDF para robar directamente la contraseña y el número de teléfono, este último útil para intentar sortear la verificación adicional. Una vez dentro, los atacantes suelen buscar información sensible en documentos compartidos y extraerla en menos de seis minutos, antes de que el equipo de seguridad detecte la intrusión.

## Quién está expuesto

### Para organizaciones

Empresas que usan Microsoft 365 para correo, documentos y colaboración, especialmente si no han restringido cuántos dispositivos puede registrar cada usuario.

## A considerar

Reducir el número de dispositivos que un usuario puede registrar en su cuenta (el valor por defecto permite hasta 50) y bloquear el inicio de sesión mediante código de dispositivo con políticas de acceso condicional reduce significativamente el riesgo de este ataque específico.

## Impacto potencial

Dado lo rápido del ataque, la organización puede perder control de una cuenta de correo y ver expuesta información sensible en cuestión de minutos, seguido típicamente de amenazas de extorsión basadas en lo que el atacante encontró.
