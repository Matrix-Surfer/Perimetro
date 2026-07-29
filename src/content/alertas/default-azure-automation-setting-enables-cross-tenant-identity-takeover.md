---
title: "Una configuración por defecto en una herramienta de automatización de Microsoft Azure permitía tomar la identidad de otra empresa en la misma nube"
date: "2026-07-24"
source: "Dark Reading"
link: "https://www.darkreading.com/cloud-security/default-azure-automation-setting-cross-tenant-identity-takeover"
categoria: "Vulnerabilidad"
ambito: "Organizaciones"
nivelAtencion: "Medio"
status: "Resuelta"
resumen: "Microsoft corrigió una configuración que venía activada por defecto en Azure Automation, su herramienta para automatizar tareas en la nube, que combinada con una cadena de fallas permitía a un atacante tomar la identidad de otra empresa que comparte la misma infraestructura de nube y acceder a sus datos, credenciales y cargas de trabajo."
expuestos: "Organizaciones que usan Azure Automation de Microsoft para automatizar tareas dentro de su entorno de nube."
verificacion: "Confirmar con el equipo de TI si la organización usa Azure Automation y si sus procesos automatizados (runbooks) han estado configurados como públicos en algún momento."
impacto: "Un atacante podría haber tomado la identidad de la organización dentro de la nube compartida y accedido a sus datos, credenciales o cargas de trabajo, aunque Microsoft ya corrigió la configuración que lo permitía."
grc_activo: "Procesos automatizados (runbooks) de Azure Automation, en organizaciones que comparten la misma infraestructura de nube de Microsoft"
grc_vector: "Una configuración pública por defecto en Azure Automation, combinada con una cadena de fallas de código, permitía a un atacante en un entorno de nube tomar la identidad de otra organización distinta (cross-tenant) y acceder a sus recursos"
grc_condicion: "N/A: la corrección ya fue aplicada por Microsoft a nivel de plataforma; no requiere acción del cliente para cerrar la falla en sí"
grc_alcance: "Organizaciones que usan Azure Automation; Microsoft ya corrigió la configuración por defecto en toda la plataforma"
grc_confianza: "alta"
publicacion: "published"
---

## Qué ocurrió

Microsoft corrigió una configuración que venía activada por defecto en Azure Automation, su herramienta para automatizar tareas dentro de la nube, que combinada con una cadena de fallas de código permitía a un atacante tomar la identidad de otra organización que comparte la misma infraestructura de nube (lo que se conoce como un ataque "cross-tenant", entre distintos clientes de un mismo proveedor). Con esa identidad tomada, el atacante podría haber accedido a los datos, credenciales y cargas de trabajo de la organización afectada. Microsoft ya aplicó la corrección a nivel de plataforma.

## Quién está expuesto

Organizaciones que usan Azure Automation de Microsoft para automatizar tareas dentro de su entorno de nube, particularmente aquellas que en algún momento configuraron sus procesos automatizados (runbooks) como públicos, incluso sin saberlo, por tratarse de la configuración por defecto.

## Impacto potencial

Aunque Microsoft ya corrigió la falla a nivel de plataforma, cualquier organización que haya tenido esta exposición mientras la falla estuvo activa debería revisar sus registros de actividad en busca de accesos inusuales, ya que el impacto potencial incluía el robo de datos, credenciales y control de cargas de trabajo en la nube.
