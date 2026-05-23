---
title: "Ataque a cadena de suministro PHP: paquetes Laravel-Lang comprometidos para robar credenciales"
date: "2026-05-23"
tipo: "Otro"
status: "Activa"
resumen: "Cuatro paquetes del ecosistema Laravel-Lang fueron comprometidos para distribuir un framework de robo de credenciales multiplataforma. Proyectos PHP con estas dependencias deben auditarse de inmediato."
source: "The Hacker News"
link: "https://thehackernews.com/2026/05/laravel-lang-php-packages-compromised.html"
publicacion: "published"
---

## Contexto

Investigadores identificaron un ataque coordinado a la cadena de suministro que comprometió paquetes del ecosistema Laravel-Lang en Packagist, el repositorio oficial de PHP. Los paquetes afectados son: `laravel-lang/lang`, `laravel-lang/http-statuses`, `laravel-lang/attributes` y `laravel-lang/actions` — todos de uso extendido en proyectos Laravel en México y Latinoamérica. El código malicioso inyectado despliega un framework completo de robo de credenciales multiplataforma.

## Impacto potencial

Aplicaciones Laravel que instalaron o actualizaron estas dependencias durante el período de compromiso pueden tener credenciales, tokens y datos sensibles expuestos. El riesgo afecta directamente a startups, agencias digitales y empresas de e-commerce que usan Laravel como base de sus sistemas.

## Recomendaciones

- Verificar en `composer.lock` las versiones instaladas de los paquetes afectados.
- Ejecutar `composer audit` para detectar dependencias comprometidas conocidas.
- Rotar credenciales de bases de datos, APIs y servicios en cualquier entorno que haya actualizado estos paquetes recientemente.
- Actualizar solo a versiones publicadas después del incidente (verificar el changelog oficial del paquete).
