---
title: "Una página de phishing permanece invisible para los filtros de correo hasta que se abre en el navegador"
date: "2026-07-08"
source: "The Hacker News"
link: "https://thehackernews.com/2026/07/new-ghost-phishing-wave-is-breaking.html"
categoria: "Phishing"
ambito: "Organizaciones"
nivelAtencion: "Alto"
status: "Activa"
resumen: "Una campaña activa de phishing esconde la página falsa dentro de contenido cifrado que los filtros de correo no pueden leer; solo se revela cuando el navegador de la víctima la abre. Se usa para autorizar el acceso a cuentas de Microsoft 365 sin robar la contraseña directamente. Afecta a organizaciones de tecnología, manufactura, educación, banca y consultoría en Estados Unidos y Europa."
expuestos: "Empleados con cuentas de Microsoft 365 en organizaciones de tecnología, manufactura, educación, banca, consultoría y servicios financieros."
verificacion: "Si el equipo de TI depende únicamente del filtro de correo, sin revisar el contenido que se activa dentro del navegador, para detectar phishing."
impacto: "Acceso del atacante a la cuenta de Microsoft 365 sin generar alertas de contraseña incorrecta o inicio de sesión sospechoso."
grc_activo: "Acceso a cuentas de Microsoft 365 mediante autorización de dispositivo"
grc_vector: "Phishing con código de dispositivo de Microsoft y contenido cifrado que se revela solo dentro del navegador de la víctima"
grc_condicion: "Que la víctima abra el enlace y complete el flujo real de inicio de sesión de Microsoft, autorizando sin saberlo el acceso del atacante"
grc_explotacion: "activa"
grc_alcance: "Organizaciones de tecnología, manufactura, educación, banca, consultoría y servicios financieros en EE. UU. y Europa"
grc_confianza: "alta"
publicacion: "review"
---

## Qué ocurrió

Una campaña activa de phishing esconde su página falsa dentro de contenido cifrado que viaja oculto a través del correo. El contenido solo se descifra y se muestra cuando el navegador de la víctima abre el enlace, por lo que los filtros de correo tradicionales no encuentran nada sospechoso que bloquear. Una vez visible, la página usa el mecanismo real de inicio de sesión por código de dispositivo de Microsoft para que la víctima autorice el acceso del atacante sin necesidad de robarle la contraseña directamente.

## Quién está expuesto

Empleados con cuentas de Microsoft 365 en organizaciones de tecnología, manufactura, educación, banca, consultoría, servicios financieros y proveedores de seguridad gestionada, principalmente en Estados Unidos y Europa.

## A considerar

El correo con el enlace de phishing puede pasar todas las revisiones automáticas porque el contenido malicioso viaja cifrado y solo se activa dentro del navegador de la víctima. Si el equipo de TI depende solo del filtro de correo para detectar phishing, este ataque no deja rastro visible hasta que ya es tarde.

## Impacto potencial

Al completar el flujo de inicio de sesión, la víctima autoriza al atacante a acceder a su cuenta de Microsoft 365 sin necesidad de robar la contraseña. Eso da acceso a correo y documentos sin activar las alertas habituales por contraseña incorrecta o inicio de sesión sospechoso.
