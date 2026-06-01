---
title: "Extorsionistas se hacen pasar por soporte técnico para entrar a despachos y robar datos con una USB"
date: "2026-05-27"
categoria: "Fraude"
nivelAtencion: "Alto"
status: "En monitoreo"
parche: "No"
explotacion: "Activa"
resumen: "El FBI advierte que grupos criminales están visitando físicamente despachos de abogados y firmas profesionales haciéndose pasar por técnicos de soporte. Una vez dentro, convencen al personal de conectar una USB con software malicioso para robar datos y extorsionar a la organización."
source: "The Register — Security"
link: "https://www.theregister.com/security/2026/05/27/fbi-crooks-enter-legal-offices-and-steal-data-via-usb-drive/5247212"
publicacion: "published"
---

## Contexto

El FBI emitió una advertencia sobre grupos criminales que están visitando físicamente despachos de abogados y firmas de servicios profesionales. Los atacantes se presentan como técnicos de soporte, con uniformes o credenciales falsas, y convencen al personal de recepción o asistentes administrativos de conectar un dispositivo USB (memoria externa) en equipos de la oficina. Ese dispositivo instala software malicioso que permite robar archivos confidenciales y luego extorsionar a la firma para no hacer públicos los datos. El ataque no requiere hackeo técnico — requiere que alguien abra la puerta.

## Por qué importa

- Las firmas de servicios profesionales manejan información altamente confidencial de clientes: contratos, estados financieros, expedientes, estrategias legales.
- El ataque aprovecha el comportamiento normal del personal — recibir a un técnico que "viene a revisar el equipo" — no una falla tecnológica.
- El daño no es solo el robo de datos: la extorsión posterior puede paralizar operaciones y generar pérdida de clientes si la información se filtra.

## Impacto potencial

### Para personas

- Si trabajas en una firma o despacho, un visitante que pide conectar algo a tu computadora es señal de alerta, aunque tenga uniforme o credenciales.
- Los datos robados pueden incluir información personal tuya o de tus clientes.

### Para organizaciones

- Datos de clientes, contratos confidenciales y estrategias internas pueden ser robados en minutos desde un dispositivo conectado.
- El incidente típicamente deriva en extorsión: pagar o arriesgar que la información sea publicada o enviada a competidores.
- Firmas de abogados, contadores, consultoras y cualquier organización con expedientes sensibles son objetivo directo.
- El impacto reputacional puede ser mayor que el financiero: perder la confianza de los clientes afecta el negocio a largo plazo.
- Puede activar obligaciones de notificación si hay datos personales de clientes involucrados.

## Perspectiva Perímetro

El patrón aquí es "ingeniería social presencial": los atacantes explotan la cortesía y los protocolos informales de las oficinas. No necesitan credenciales ni acceso remoto — necesitan que un empleado bien intencionado les deje conectar un dispositivo. Las organizaciones que invierten en seguridad tecnológica pero no en cultura y protocolos de acceso físico dejan abierta esta puerta. La confianza implícita en "quien parece técnico" es el vector de ataque.

## Perspectiva GRC

- **Gobierno:** Definir quién puede autorizar el acceso de técnicos externos a equipos de la organización — y que esa autorización sea verificable, no verbal.
- **Riesgo:** ¿Existe un protocolo para recibir visitas de soporte técnico? ¿El personal de recepción sabe qué hacer si un técnico no anunciado pide conectar algo?
- **Terceros:** Solo los proveedores de TI contratados y verificados deben tener acceso a equipos — con cita previa y confirmación interna.
- **Continuidad:** Si ocurre una extorsión, ¿existe un proceso para manejar la situación sin pagar y sin exponer más datos?

## Recomendaciones

### Para personas

- Nunca conectes ni permitas conectar dispositivos USB desconocidos en equipos de la oficina, sin importar quién lo pida.
- Si alguien se presenta como técnico sin aviso previo, solicita ver identificación oficial y llama a tu proveedor de TI para confirmar la visita antes de permitir acceso.
- Reporta visitas sospechosas a quien corresponda — aunque no hayas conectado nada.

### Para organizaciones

**Gestión**
- Establecer una política simple: ningún dispositivo externo se conecta a equipos de la organización sin autorización escrita del responsable de TI o su equivalente.
- Capacitar al personal de recepción y asistentes administrativos: no deben permitir acceso a equipos a visitantes no verificados, sin importar el pretexto.
- Crear una lista de proveedores de TI autorizados y un proceso de verificación antes de cualquier visita.
- Comunicar el protocolo al equipo de manera clara y repetida — no solo en el manual de bienvenida.

**Técnicas**
- Considerar deshabilitar puertos USB en equipos que no los requieran para el trabajo diario.
- Si no tienes equipo de TI: pide a tu proveedor que configure los equipos para bloquear dispositivos desconocidos y que te confirme por escrito que está hecho.

## Pregunta diagnóstica

¿Existe un canal para verificar solicitudes de acceso físico a equipos antes de permitirlas?
