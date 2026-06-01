---
title: "Paquete malicioso en npm robaba archivos del directorio de trabajo de Claude AI — usuarios de herramientas de IA en la mira"
pubDate: 2026-05-27
source: "The Hacker News"
link: "https://thehackernews.com/2026/05/malicious-npm-package-stole-files-from.html"
category: "IA"
nivelAtencion: "Medio"
ambito: "Personas"
categoria: "IA"
resumen: "Investigadores de OX Security encontraron el paquete malicioso 'mouse5212-super-formatter' en npm diseñado para robar archivos del directorio de usuario de Claude, la herramienta de IA de Anthropic. El paquete cargaba los archivos a un repositorio de GitHub controlado por el atacante."
publicacion: "published"
---

## Qué está pasando

Investigadores encontraron el paquete "mouse5212-super-formatter" en npm — publicado con apariencia de una utilidad de formato — que en realidad buscaba y subía archivos desde el directorio `/mnt/user-data`, el directorio que Claude (la herramienta de IA de Anthropic) usa para manejar archivos de trabajo del usuario. Los archivos robados eran enviados a un repositorio de GitHub bajo control del atacante. El ataque apunta específicamente a quienes usan Claude con la integración de archivos activa.

## Por qué importa ahora

- Las herramientas de IA como Claude, Copilot o ChatGPT manejan archivos reales de trabajo: documentos, código, datos. Un paquete que accede a ese directorio puede robar información confidencial sin que el usuario lo note.
- La proliferación de herramientas de IA en entornos de trabajo amplía la superficie de ataque: cada herramienta nueva es un nuevo directorio de datos sensibles.
- El patrón — paquete aparentemente inofensivo que apunta a una herramienta de IA específica — sugiere que atacantes están mapeando activamente qué herramientas de IA usan los desarrolladores y cómo acceder a sus datos.

## Para organizaciones

- Cualquier equipo que use herramientas de IA integradas con archivos de trabajo debe preguntar: ¿qué datos tiene acceso esa herramienta y dónde los almacena temporalmente?
- Los directorios de trabajo de herramientas de IA son candidatos a contener documentos corporativos sensibles — su exposición es equivalente a una filtración de esos documentos.
- El flujo de trabajo "abrir documento → compartir con IA → analizar" crea un punto de concentración de información que los atacantes están aprendiendo a apuntar.

## Decisión recomendada

Revisar qué herramientas de IA usa el equipo, qué archivos pueden acceder y si los directorios temporales de esas herramientas están monitoreados o protegidos en equipos corporativos.
