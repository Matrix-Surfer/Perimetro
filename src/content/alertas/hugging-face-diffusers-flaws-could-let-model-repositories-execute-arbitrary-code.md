---
title: "Tres fallas en una librería de IA muy usada permiten que un modelo descargado ejecute código en el equipo que lo carga, sin que el usuario lo note"
date: "2026-08-03"
source: "The Hacker News"
link: "https://thehackernews.com/2026/08/hugging-face-diffusers-flaws-could-let.html"
categoria: "Vulnerabilidad"
ambito: "Organizaciones"
nivelAtencion: "Alto"
status: "En monitoreo"
resumen: "Investigadores encontraron tres fallas críticas en Diffusers, la librería de Hugging Face para cargar modelos de inteligencia artificial que generan imágenes, video y audio, con más de 8 millones de descargas mensuales. Las fallas evaden la protección diseñada para bloquear código no revisado (trust_remote_code), permitiendo que un repositorio de modelo manipulado ejecute código arbitrario en la máquina que lo carga. Ya existe una versión corregida (0.38.0)."
expuestos: "Equipos de desarrollo u organizaciones que usan la librería Diffusers de Hugging Face para cargar modelos de inteligencia artificial en versiones anteriores a 0.38.0."
verificacion: "Confirmar si algún sistema de la organización usa la librería Diffusers para cargar modelos de Hugging Face, y actualizar a la versión 0.38.0 o posterior; cargar modelos únicamente de fuentes auditadas y confiables."
impacto: "Ejecución de código no autorizado en máquinas de producción, sistemas de desarrollo o contenedores empresariales que carguen un modelo manipulado, con acceso potencial a datos y sistemas internos."
grc_activo: "Sistemas que usan la librería Diffusers de Hugging Face para cargar modelos de inteligencia artificial"
grc_vector: "CVE-2026-44827, CVE-2026-45804 y CVE-2026-44513 (conjunto llamado 'FaceHugger'): permiten inyectar y ejecutar código evadiendo la protección trust_remote_code, mediante un archivo oculto que se ejecuta en la carga, una condición de carrera entre descargas, y el flujo de canalización personalizada del modelo"
grc_condicion: "Cargar un modelo de un repositorio no confiable o comprometido usando una versión de Diffusers anterior a 0.38.0"
grc_explotacion: "poc_publica"
grc_alcance: "Cualquier organización que use Diffusers para cargar modelos de Hugging Face; la librería registra más de 8.1 millones de descargas mensuales"
grc_confianza: "alta"
publicacion: "published"
---

## Qué ocurrió

Investigadores de Zafran Labs identificaron tres fallas críticas, agrupadas bajo el nombre "FaceHugger", en Diffusers, la librería de Hugging Face que se usa para cargar modelos de inteligencia artificial que generan imágenes, video y audio, con más de 8.1 millones de descargas mensuales. Las tres fallas logran evadir trust_remote_code, la protección diseñada específicamente para impedir que se ejecute código no revisado al cargar un modelo: una inyecta código mediante un archivo que se ejecuta pese a la protección activa, otra aprovecha una condición de tiempo entre dos descargas para modificar la configuración del modelo, y la tercera inyecta código a través del flujo de canalización personalizada. En conjunto, permiten que un repositorio de modelo manipulado ejecute código arbitrario en la máquina que lo carga. Hugging Face liberó la versión 0.38.0 de Diffusers, que corrige las tres fallas.

## Quién está expuesto

Equipos de desarrollo u organizaciones que usan la librería Diffusers para cargar modelos de inteligencia artificial en versiones anteriores a 0.38.0.

## A considerar

El riesgo no depende solo de actualizar la librería: cargar un modelo de un repositorio no verificado, incluso con la versión corregida, sigue siendo una decisión de confianza. Conviene revisar qué modelos y de qué fuentes carga la organización, y limitar esa práctica a repositorios auditados.

## Impacto potencial

Ejecución de código no autorizado en máquinas de producción, sistemas de desarrollo o contenedores empresariales que carguen un modelo manipulado, con acceso potencial a datos y sistemas internos conectados.
