---
title: "Plataforma de inteligencia de negocio comprometida expone datos de cientos de empresas, incluidas firmas de seguridad"
date: "2026-06-22"
source: "The Register — Security"
link: "https://www.theregister.com/cyber-crime/2026/06/22/security-shops-among-the-hundreds-of-klue-hack-victims/5259743"
categoria: "Fuga de datos"
ambito: "Organizaciones"
nivelAtencion: "Alto"
status: "En monitoreo"
resumen: "El hackeo a Klue, plataforma de inteligencia competitiva, expuso datos de cientos de organizaciones clientes. Entre las víctimas confirmadas hay empresas del sector de ciberseguridad. El ataque aprovechó tokens OAuth — autorizaciones de acceso que funcionan como llaves digitales persistentes entre plataformas."
expuestos: "Organizaciones que usan o usaban Klue como plataforma de inteligencia competitiva, especialmente aquellas integradas mediante OAuth"
verificacion: "Confirmar si la organización es o fue cliente de Klue y qué integraciones tenían activas"
impacto: "Datos de inteligencia competitiva, estrategias comerciales y accesos conectados a través de OAuth pueden estar en manos de los atacantes"
publicacion: "published"
---

## Qué ocurrió

El hackeo a Klue, una plataforma de inteligencia competitiva usada por empresas para analizar a sus competidores y gestionar estrategia comercial, afectó a cientos de organizaciones. Los atacantes accedieron a través de tokens OAuth — autorizaciones digitales que funcionan como llaves de acceso permanente entre plataformas. Entre las víctimas confirmadas hay empresas del propio sector de ciberseguridad.

## Quién está expuesto

Organizaciones que usan Klue o que en algún momento conectaron sus sistemas a la plataforma mediante OAuth. El riesgo no termina al cancelar la suscripción: si las autorizaciones no fueron revocadas, pueden seguir siendo válidas.

## A considerar

Salesforce desactivó la integración de Klue en su plataforma como medida de contención. Si la organización conectó Klue a otras herramientas — CRM, plataformas de ventas, repositorios — conviene revisar qué permisos otorgó y si esas autorizaciones siguen activas.

## Impacto potencial

Los datos accedidos pueden incluir información estratégica, análisis de clientes, comunicaciones internas sincronizadas desde otras plataformas, o accesos transitivos a sistemas conectados a través de las mismas autorizaciones OAuth.
