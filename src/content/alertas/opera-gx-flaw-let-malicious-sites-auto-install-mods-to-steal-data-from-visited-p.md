---
title: "Una falla ya corregida en Opera GX permitía robar datos con solo visitar una página, sin necesidad de dar clic"
date: "2026-07-06"
source: "The Hacker News"
link: "https://thehackernews.com/2026/07/opera-gx-flaw-let-malicious-sites-auto.html"
categoria: "Vulnerabilidad"
ambito: "Mixto"
nivelAtencion: "Medio"
status: "En monitoreo"
resumen: "Investigadores encontraron una falla en el navegador Opera GX que permitía a un sitio malicioso instalar automáticamente una extensión y robar datos, como el correo del usuario, sin que la víctima diera clic en nada. Opera ya publicó una actualización que corrige el problema. Quien use Opera GX debe confirmar que su navegador está en la versión 130.0.5847.89 o posterior."
expuestos: "Personas y organizaciones que usan el navegador Opera GX."
verificacion: "Confirmar que Opera GX está actualizado a la versión 130.0.5847.89 o superior."
impacto: "Un atacante podía leer datos de las páginas que la víctima tenía abiertas, incluyendo su correo, sin que la víctima lo notara."
grc_activo: "Navegador Opera GX y los datos visibles en las páginas abiertas por el usuario."
grc_vector: "Instalación automática de una extensión maliciosa (mod) al visitar una página, sin permiso ni clic del usuario, que inyecta código para leer datos de otras páginas abiertas."
grc_condicion: "Que la víctima visite una página controlada por el atacante usando una versión de Opera GX anterior a la 130.0.5847.89."
grc_explotacion: "poc_publica"
grc_alcance: "Usuarios de Opera GX en cualquier país; no se limita a una industria o región."
grc_confianza: "alta"
publicacion: "published"
---

## Qué ocurrió

Investigadores de seguridad encontraron una falla en el navegador Opera GX que permitía a una página web instalar automáticamente una extensión (un "mod") con solo visitarla, sin pedir permiso ni requerir que la víctima diera clic en nada. Esa extensión aplicaba estilos a todas las páginas abiertas y permitía a un atacante leer datos específicos, como la dirección de correo de una cuenta con sesión iniciada. Opera ya corrigió el problema en la versión 130.0.5847.89 y afirma no haber encontrado evidencia de que se haya usado contra usuarios reales.

## Quién está expuesto

### Para personas
Cualquier persona que use el navegador Opera GX en una versión anterior a la 130.0.5847.89.

### Para organizaciones
Empresas que permiten Opera GX como navegador de trabajo, en especial si no gestionan de forma centralizada las actualizaciones de software en los equipos.

## A considerar

La misma falla también podía usarse para forzar el cierre inesperado del navegador en modo incógnito, con pérdida completa de la sesión abierta.

## Impacto potencial

Un atacante podía obtener datos de las páginas que la víctima tenía abiertas, como su dirección de correo, sin que la víctima lo notara ni diera ningún clic. El riesgo ya está mitigado para quienes actualizan el navegador.
