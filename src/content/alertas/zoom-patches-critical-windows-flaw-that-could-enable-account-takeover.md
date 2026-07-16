---
title: "Falla crítica en la aplicación de Zoom para Windows permite tomar el control de una cuenta sin necesitar contraseña"
date: "2026-07-16"
source: "The Hacker News"
link: "https://thehackernews.com/2026/07/zoom-patches-critical-windows-flaw-that.html"
categoria: "Vulnerabilidad"
ambito: "Mixto"
nivelAtencion: "Alto"
status: "En monitoreo"
resumen: "Una falla de seguridad crítica (CVE-2026-53412, con la calificación máxima de gravedad) en la aplicación de escritorio de Zoom para Windows permite a un atacante tomar el control de una cuenta sin necesitar contraseña ni autorización previa, solo acceso a la red. Zoom ya publicó la actualización que corrige el problema. No hay reportes de explotación activa, pero afecta software que personas y organizaciones usan a diario."
expuestos: "Personas y organizaciones que usan Zoom Desktop Client, Zoom VDI Client o Zoom Meeting SDK para Windows sin la actualización más reciente."
verificacion: "Confirmar que Zoom para Windows está actualizado a la versión más reciente disponible desde el sitio oficial de Zoom."
impacto: "Un atacante con acceso a la red podría tomar el control de la cuenta de Zoom de la víctima sin necesitar su contraseña."
grc_activo: "Aplicación de escritorio de Zoom para Windows (Zoom Desktop Client, VDI Client y Meeting SDK)"
grc_vector: "Validación incorrecta de datos de entrada que permite a un atacante sin autenticar, con acceso a la red, tomar control de la cuenta"
grc_condicion: "Tener instalada una versión de Zoom para Windows sin el parche de julio de 2026"
grc_explotacion: "investigacion"
grc_alcance: "Usuarios de Zoom para Windows en versiones anteriores al parche de julio 2026; también se corrigieron fallas relacionadas, de menor severidad, en Zoom Rooms y en el instalador de Windows"
grc_confianza: "alta"
publicacion: "published"
---

## Qué ocurrió

Zoom publicó actualizaciones de seguridad para corregir una falla crítica (CVE-2026-53412, con la calificación máxima de gravedad, 9.8 sobre 10) en su aplicación de escritorio para Windows. La falla permite a un atacante, sin necesidad de contraseña ni cuenta previa y con solo acceso a la red, tomar el control de la cuenta de la víctima. Afecta a Zoom Desktop Client, Zoom VDI Client y Zoom Meeting SDK para Windows. Zoom también corrigió tres fallas adicionales de menor gravedad en Zoom Rooms y en el proceso de instalación de sus aplicaciones para Windows. No hay reportes de explotación activa hasta el momento.

## Quién está expuesto

### Para personas

Cualquiera que use la aplicación de escritorio de Zoom en una computadora con Windows sin la actualización más reciente.

### Para organizaciones

Empresas que usan Zoom para reuniones, salas de conferencia (Zoom Rooms) o que integran el software Zoom Meeting SDK en sus propias aplicaciones.

## Impacto potencial

Un atacante que tome control de una cuenta de Zoom podría acceder a reuniones grabadas, contactos e historial de chats, y hacerse pasar por la víctima en llamadas o mensajes, lo que puede derivar en fraude o robo de información.
