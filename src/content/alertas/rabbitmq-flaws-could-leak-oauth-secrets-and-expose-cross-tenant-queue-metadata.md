---
title: "Dos fallas en RabbitMQ permitían tomar control total del sistema de mensajería sin autenticarse"
date: "2026-07-14"
source: "The Hacker News"
link: "https://thehackernews.com/2026/07/rabbitmq-flaws-could-leak-oauth-secrets.html"
categoria: "Vulnerabilidad"
ambito: "Organizaciones"
nivelAtencion: "Alto"
status: "En monitoreo"
resumen: "Dos fallas de control de acceso en RabbitMQ, un sistema de mensajería usado para conectar aplicaciones empresariales, podían filtrar secretos de acceso y exponer información de otros clientes que comparten el mismo servicio. Ya existen versiones corregidas. No hay evidencia de que hayan sido explotadas antes de conocerse públicamente."
expuestos: "Organizaciones que usan RabbitMQ para conectar aplicaciones internas, en versiones 3.13.0 en adelante."
verificacion: "Confirmar la versión de RabbitMQ instalada y actualizar a 4.3.0, 4.2.6, 4.1.11, 4.0.20 o 3.13.15 según corresponda."
impacto: "Un atacante sin cuenta podía obtener acceso administrativo completo al sistema de mensajería, incluyendo todos los mensajes, colas y configuraciones."
grc_activo: "Sistema de mensajería RabbitMQ usado para conectar aplicaciones empresariales"
grc_vector: "Dos fallas de control de acceso: una expone un secreto de autenticación a cualquiera sin necesitar cuenta; otra permite ver información de colas de otros clientes que comparten el mismo servicio"
grc_condicion: "Tener una instalación de RabbitMQ 3.13.0 o posterior sin la actualización de seguridad más reciente"
grc_alcance: "Instalaciones de RabbitMQ con la configuración de autenticación OAuth activada, presente desde 2024"
publicacion: "published"
---

## Qué ocurrió

Investigadores encontraron dos fallas de seguridad en RabbitMQ, un sistema de mensajería que muchas empresas usan para conectar aplicaciones internas entre sí. La primera permitía que cualquier persona, sin necesitar una cuenta, obtuviera un secreto de autenticación (una especie de llave maestra) que abre acceso administrativo completo al sistema. La segunda permitía a cualquier usuario autenticado ver información de colas y mensajes de otros clientes que comparten el mismo servicio, algo que no debería ser visible entre ellos. Ya existen versiones corregidas. No hay evidencia de que alguien haya aprovechado estas fallas antes de que se hicieran públicas.

## Quién está expuesto

### Para organizaciones

Empresas que usan RabbitMQ en versiones 3.13.0 o posteriores, especialmente si el panel de administración es accesible desde Internet.

## A considerar

Además de actualizar, conviene cambiar los secretos de autenticación si el panel de administración estuvo expuesto a Internet, y restringir el acceso al puerto que usa ese panel (15672) mediante el firewall.

## Impacto potencial

Con la llave maestra filtrada, un atacante podía tomar control administrativo total del sistema de mensajería: ver, modificar o eliminar mensajes, y controlar la configuración completa del servicio. Esto puede interrumpir la comunicación entre aplicaciones internas que dependen de RabbitMQ para funcionar.
