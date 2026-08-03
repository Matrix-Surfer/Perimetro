---
title: "Dos fallas en el núcleo de WordPress permiten robar datos de la base y, combinadas, ejecutar código en el servidor sin haber iniciado sesión"
date: "2026-08-03"
source: "INCIBE-CERT"
link: "https://www.incibe.es/incibe-cert/alerta-temprana/avisos/multiples-vulnerabilidades-en-wordpress-core"
categoria: "Vulnerabilidad"
ambito: "Mixto"
nivelAtencion: "Alto"
status: "En monitoreo"
resumen: "WordPress corrigió dos vulnerabilidades en su núcleo: una crítica que permite ejecutar código en el servidor combinando una falla en la API REST con una inyección SQL, y otra de severidad alta que permite acceder a información sensible de la base de datos sin necesidad de iniciar sesión. Afecta las versiones 6.8 anteriores a 6.8.6, 6.9 anteriores a 6.9.5 y 7.0 anteriores a 7.0.2; ya hay versiones corregidas disponibles."
expuestos: "Sitios que usan WordPress Core en versión 6.8 anterior a 6.8.6, 6.9 anterior a 6.9.5, o 7.0 anterior a 7.0.2."
verificacion: "Confirmar la versión de WordPress Core instalada en el sitio y actualizar a 6.8.6, 6.9.5, 7.0.2 o cualquier versión posterior."
impacto: "Un atacante sin necesidad de cuenta puede acceder a información sensible de la base de datos, y en el peor caso, ejecutar código en el servidor y tomar control del sitio."
grc_activo: "Sitios web que usan WordPress Core en las versiones 6.8, 6.9 o 7.0 sin actualizar"
grc_vector: "CVE-2026-63030: desincronización entre validación y enrutamiento en el endpoint de procesamiento por lotes de la API REST que, combinada con una inyección SQL, permite ejecución remota de código; CVE-2026-60137: saneamiento insuficiente de un parámetro de búsqueda que permite inyección SQL sin autenticación"
grc_condicion: "Tener un sitio con WordPress Core en una de las versiones afectadas sin el parche aplicado"
grc_explotacion: "investigacion"
grc_alcance: "Todos los sitios con WordPress Core 6.8 anterior a 6.8.6, 6.9 anterior a 6.9.5, o 7.0 anterior a 7.0.2; WordPress es el gestor de contenidos más usado del mundo"
grc_confianza: "alta"
publicacion: "published"
---

## Qué ocurrió

WordPress publicó parches para dos vulnerabilidades en su núcleo. La más grave, de severidad crítica, combina una falla en el endpoint de procesamiento por lotes de la API REST con una inyección SQL, permitiendo a un atacante remoto ejecutar código en el servidor. La segunda, de severidad alta, se debe a un filtrado insuficiente de uno de los parámetros de búsqueda, y permite a un atacante sin cuenta acceder a información almacenada en la base de datos del sitio. Ambas afectan a WordPress Core en las versiones 6.8 (anteriores a 6.8.6), 6.9 (anteriores a 6.9.5) y 7.0 (anteriores a 7.0.2); ya existen versiones corregidas.

## Quién está expuesto

Cualquier sitio que use WordPress Core en las versiones 6.8, 6.9 o 7.0 sin actualizar a la corrección correspondiente.

## A considerar

Ninguno de los dos fallos requiere que el atacante tenga una cuenta en el sitio, por lo que no hay una señal de alerta previa como un inicio de sesión sospechoso; la única defensa efectiva es actualizar. Sitios con muchos plugins o personalizaciones deben probar la actualización en un entorno de prueba antes de aplicarla en producción, para evitar incompatibilidades.

## Impacto potencial

Acceso no autorizado a información sensible almacenada en la base de datos del sitio (usuarios, contraseñas cifradas, contenido), y en el escenario más grave, control total del servidor mediante ejecución remota de código.
