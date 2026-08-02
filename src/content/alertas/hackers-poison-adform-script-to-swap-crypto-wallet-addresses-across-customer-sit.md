---
title: "Script de publicidad alterado reescribe direcciones de criptomonedas en sitios de cientos de empresas"
date: "2026-08-01"
source: "The Hacker News"
link: "https://thehackernews.com/2026/08/hackers-poison-adform-script-to-swap.html"
categoria: "Terceros"
ambito: "Mixto"
nivelAtencion: "Alto"
status: "En monitoreo"
resumen: "Atacantes modificaron un script publicitario de Adform, distribuido a cerca de 1,800 sitios clientes, para reescribir direcciones de Bitcoin, Ethereum y Tron copiadas o escritas por los visitantes. Adform detectó y removió el código el mismo día, el 27 de julio. Quien haya copiado una dirección de criptomonedas ese día en un sitio con publicidad de Adform debe verificarla."
expuestos: "Personas que visitaron sitios con el script publicitario de Adform el 27 de julio y copiaron o escribieron una dirección de criptomonedas; empresas clientes de la red publicitaria de Adform."
verificacion: "Si copiaste o escribiste una dirección de Bitcoin, Ethereum o Tron el 27 de julio en cualquier sitio, confirma que la transacción llegó al destinatario correcto. Limpia también la caché del navegador."
impacto: "Fondos enviados a una dirección alterada por el atacante no se pueden recuperar; las empresas que usan Adform enfrentan además el riesgo reputacional de haber servido código malicioso a sus visitantes sin saberlo."
grc_activo: "Direcciones de criptomonedas (Bitcoin, Ethereum, Tron) copiadas o escritas en sitios que usan el script publicitario de Adform"
grc_vector: "Modificación de un archivo JavaScript (trackpoint-async.js) distribuido por Adform a los sitios de sus clientes, que interceptaba el portapapeles y reescribía direcciones de criptomonedas copiadas o escritas"
grc_condicion: "Visitar un sitio que sirve el script alterado de Adform y copiar o escribir una dirección de Bitcoin, Ethereum o Tron el 27 de julio de 2026"
grc_explotacion: "activa"
grc_alcance: "Visitantes de cualquiera de los aproximadamente 1,800 sitios clientes de Adform el 27 de julio de 2026; empresas que usan la red publicitaria de Adform"
grc_confianza: "media"
publicacion: "published"
---

## Qué ocurrió

Atacantes modificaron un archivo JavaScript llamado trackpoint-async.js, que la empresa de tecnología publicitaria Adform distribuye a los sitios de sus clientes. El código alterado vigilaba el portapapeles del visitante y, cuando detectaba una dirección de criptomonedas copiada, la reemplazaba por una controlada por el atacante. También reescribía direcciones escritas manualmente en formularios. Adform detectó el incidente el 27 de julio de 2026, removió el código el mismo día, notificó a sus clientes y reportó el caso a las autoridades. La empresa no ha revelado cuántos de sus aproximadamente 1,800 sitios clientes sirvieron el código alterado, ni cuántos visitantes resultaron afectados.

## Quién está expuesto

### Para personas

Cualquiera que haya visitado un sitio con publicidad de Adform el 27 de julio de 2026 y copiado o escrito una dirección de Bitcoin, Ethereum o Tron para enviar fondos.

### Para organizaciones

Empresas que usan la red publicitaria de Adform en sus sitios, expuestas al riesgo reputacional de haber distribuido código malicioso a sus visitantes sin saberlo.

## A considerar

Limpiar la caché del navegador es una acción concreta: el archivo alterado pudo quedar almacenado localmente incluso después de que Adform corrigiera el original.

## Impacto potencial

Una transferencia de criptomonedas enviada a una dirección alterada no se puede revertir ni recuperar. El dinero se pierde de forma permanente en cuanto se confirma la transacción.
