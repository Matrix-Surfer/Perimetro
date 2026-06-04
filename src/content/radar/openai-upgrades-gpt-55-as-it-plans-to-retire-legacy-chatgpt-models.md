---
title: "OpenAI mejora GPT-5.5 y anuncia el retiro de modelos legacy de ChatGPT"
pubDate: 2026-06-02
source: "BleepingComputer"
link: "https://www.bleepingcomputer.com/news/artificial-intelligence/openai-upgrades-gpt-55-as-it-plans-to-retire-legacy-chatgpt-models/"
category: "AI"
context: "OpenAI anuncia mejoras en GPT-5.5 Instant y el retiro programado de modelos anteriores incluyendo o3. Para organizaciones que integran la API de OpenAI en flujos de trabajo o productos propios, el retiro de modelos es un riesgo de continuidad: las llamadas a modelos retirados dejarán de funcionar. La acción concreta: revisar qué integraciones usan modelos OpenAI y verificar si alguno está en la lista de retiro. Las migraciones de modelo requieren pruebas de comportamiento, no solo un cambio de parámetro."
publicacion: "published"
---

OpenAI anunció mejoras al modelo GPT-5.5 Instant y confirmó el retiro programado de varios modelos anteriores, incluyendo o3. Los modelos retirados dejan de responder peticiones en la API una vez que se alcanza la fecha de fin de vida.

Para usuarios de ChatGPT en el navegador, el cambio es transparente. Para organizaciones con integraciones de API, es un riesgo de continuidad que requiere acción proactiva.

El problema típico: una integración que funciona bien hoy apunta a un modelo específico por nombre. Cuando ese modelo se retira, la integración falla. Si nadie la revisó antes de la fecha de retiro, el fallo ocurre en producción.

La acción es concreta: identificar qué integraciones de OpenAI tiene la organización, qué modelos usan, y si alguno está en la lista de retiro publicada por OpenAI. Las migraciones requieren pruebas de comportamiento —el modelo nuevo puede responder diferente al anterior— no solo actualizar un parámetro de configuración.
