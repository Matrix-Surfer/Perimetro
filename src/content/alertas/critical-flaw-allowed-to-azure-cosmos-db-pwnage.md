---
title: "Una falla ya corregida en Azure Cosmos DB habría permitido acceso total a las bases de datos de cualquier cliente"
date: "2026-07-31"
source: "SecurityWeek"
link: "https://www.securityweek.com/critical-flaw-led-to-azure-cosmos-db-pwnage/"
categoria: "Vulnerabilidad"
ambito: "Organizaciones"
nivelAtencion: "Bajo"
status: "Resuelta"
resumen: "Investigadores de seguridad descubrieron una falla crítica en Azure Cosmos DB, el servicio de base de datos de Microsoft, que habría permitido a un atacante obtener una llave maestra y acceder en lectura y escritura a las bases de datos de cualquier cliente del servicio. Microsoft confirmó que no hubo explotación real y ya corrigió la falla por completo."
expuestos: "Organizaciones que usan Azure Cosmos DB. Microsoft indicó que no se accedió a datos de ningún cliente durante el periodo en que existió la falla."
verificacion: "Confirmar que el servicio de Cosmos DB corre sobre la corrección desplegada por Microsoft en julio de 2026, y revisar los registros de acceso del periodo entre noviembre de 2025 y julio de 2026 por precaución."
impacto: "De haberse explotado, un atacante habría podido leer y modificar los datos de cualquier cuenta de Cosmos DB en cualquier región, sin necesidad de autenticarse primero."
grc_activo: "Servicio Azure Cosmos DB de Microsoft, específicamente la llave maestra que protege el acceso a las cuentas de todos los clientes"
grc_vector: "Explotación de la API de consultas Gremlin para ejecutar código dentro de la infraestructura compartida del servicio y extraer la llave maestra"
grc_condicion: "Ninguna acción del cliente era necesaria para quedar expuesto; la falla estaba en la infraestructura del propio servicio de Microsoft"
grc_alcance: "Todas las cuentas de Azure Cosmos DB, en todas las regiones, hasta que Microsoft completó la corrección"
grc_confianza: "alta"
publicacion: "published"
---

## Qué ocurrió

Investigadores de la firma Wiz descubrieron una falla crítica en Azure Cosmos DB, el servicio de base de datos en la nube de Microsoft, a la que llamaron "CosmosEscape". Al aprovechar una función de consultas del servicio (la API Gremlin), lograron ejecutar código dentro de la infraestructura compartida y extraer una llave maestra que Microsoft usa internamente para recuperar las llaves de acceso de cualquier cuenta de cliente, sin necesidad de autenticarse primero. Microsoft desplegó una corrección de emergencia dos días después de recibir el reporte, en noviembre de 2025, y completó una corrección arquitectónica definitiva en julio de 2026. La empresa confirmó que no encontró evidencia de que la falla se explotara fuera de las pruebas controladas del investigador que la reportó.

## Quién está expuesto

Organizaciones que usan Azure Cosmos DB para almacenar datos. Dado que la falla estaba en la infraestructura compartida del servicio y no en la configuración de cada cliente, no había nada que una organización pudiera haber hecho de forma individual para prevenirla.

## Impacto potencial

De haberse explotado antes de la corrección, un atacante habría podido leer y modificar los datos de cualquier cuenta de Cosmos DB, en cualquier región, sin necesidad de credenciales previas. Al no haber evidencia de explotación real y estar la falla ya corregida, el riesgo actual para los clientes del servicio es bajo.
