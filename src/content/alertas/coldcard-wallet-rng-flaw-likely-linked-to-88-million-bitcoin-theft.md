---
title: "Una falla en la generación de claves de una billetera de hardware para criptomonedas permite calcular las llaves privadas y ya causó el robo de $88 millones en Bitcoin"
date: "2026-08-02"
source: "BleepingComputer"
link: "https://www.bleepingcomputer.com/news/security/coldcard-wallet-rng-flaw-likely-linked-to-88-million-bitcoin-theft/"
categoria: "Vulnerabilidad"
ambito: "Personas"
nivelAtencion: "Crítico"
status: "Activa"
resumen: "Una falla en el generador de números aleatorios del firmware de las billeteras de hardware COLDCARD permitió a atacantes reconstruir las semillas de miles de carteras y robar aproximadamente 1,367 Bitcoin ($88.6 millones de dólares) en tres oleadas. Actualizar el firmware no repara las semillas ya generadas: es necesario crear una nueva y migrar los fondos."
expuestos: "Dueños de billeteras de hardware COLDCARD modelos Mk2, Mk3 (firmware 4.0.1-4.1.9), Mk4, Mk5 (versiones previas a 5.6.0 estándar o 6.6.0X Edge) y Q (previas a 1.5.0Q estándar o 6.6.0QX Edge) cuya semilla se generó con esas versiones."
verificacion: "Confirmar el modelo y la versión de firmware del dispositivo COLDCARD al momento de generar la semilla actual, y si corresponde a las versiones afectadas."
impacto: "Un atacante puede calcular la llave privada de la cartera sin necesidad de acceso físico al dispositivo, y transferir los fondos a su propia dirección sin que el dueño lo note hasta revisar el saldo."
grc_activo: "Semillas (frases de recuperación) generadas por billeteras de hardware COLDCARD en las versiones de firmware afectadas"
grc_vector: "Error de integración en el firmware: en lugar de usar el generador de números aleatorios del hardware, el sistema usaba un método determinista basado en el identificador del microcontrolador y el reloj del sistema, valores que un atacante puede reconstruir para calcular la semilla y la llave privada"
grc_condicion: "Tener una semilla generada por un dispositivo COLDCARD con una de las versiones de firmware afectadas, sin haberla reemplazado después de julio de 2026"
grc_explotacion: "activa"
grc_alcance: "4,585 direcciones de Bitcoin afectadas identificadas hasta ahora, con robo confirmado en tres oleadas; el fabricante confirmó la falla el 30 de julio de 2026"
grc_confianza: "alta"
publicacion: "published"
---

## Qué ocurrió

Un error en el firmware de las billeteras de hardware COLDCARD provocó que el generador de números aleatorios usado para crear las semillas (las frases de recuperación que protegen los fondos) no fuera realmente aleatorio: en lugar de usar el componente de hardware diseñado para eso, el sistema generaba las semillas a partir de datos predecibles, como el identificador del microcontrolador y el reloj del sistema. Atacantes explotaron esta debilidad para reconstruir semillas fuera de línea, calcular las direcciones de Bitcoin asociadas y compararlas contra direcciones públicas con fondos. Al encontrar coincidencias, generaron las llaves privadas correspondientes y transfirieron el dinero. El robo confirmado hasta ahora suma aproximadamente 1,367 Bitcoin, unos $88.6 millones de dólares, repartido en tres oleadas y 4,585 direcciones distintas.

## Quién está expuesto

Dueños de billeteras de hardware COLDCARD modelos Mk2, Mk3, Mk4, Mk5 o Q, cuya semilla actual se generó con una versión de firmware anterior a la corrección liberada a partir del 30 de julio de 2026.

## A considerar

Actualizar el firmware del dispositivo no repara una semilla que ya fue generada con la falla; la única forma de estar seguro es generar una semilla completamente nueva después de instalar el firmware corregido y mover los fondos a esa nueva dirección. Conviene conservar el respaldo de la semilla anterior hasta confirmar que la migración se completó correctamente.

## Impacto potencial

Un atacante puede calcular la llave privada de la cartera sin necesidad de acceso físico al dispositivo, y transferir los fondos a su propia dirección sin que el dueño lo note hasta revisar el saldo.
