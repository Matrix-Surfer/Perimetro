---
title: “CloudZ RAT activo desde enero 2026 roba mensajes OTP mediante el plugin 'Pheno'”
date: “2026-05-05”
tipo: “Otro”
status: “Activa”
resumen: “Cisco Talos documentó una intrusión activa desde enero 2026 donde un atacante desplegó el RAT CloudZ junto con un plugin inédito llamado 'Pheno' capaz de interceptar mensajes OTP, neutralizando la autenticación de dos factores.”
source: “Cisco Talos Blog”
link: “https://blog.talosintelligence.com/cloudz-pheno-infostealer/”
publicacion: “published”
---

## Contexto

Cisco Talos documentó una intrusión activa desde al menos enero de 2026 en la que un actor desconocido implantó CloudZ, un troyano de acceso remoto (RAT), junto con un plugin previamente no documentado denominado “Pheno”. La función principal de Pheno es interceptar mensajes OTP — los códigos de un solo uso enviados por SMS o apps de autenticación para verificar la identidad en banca, correo y sistemas empresariales. Al robar el OTP en el momento en que llega al dispositivo, el atacante puede eludir completamente la autenticación de dos factores.

## Impacto potencial

La combinación de un RAT con capacidad de robo de OTP es especialmente peligrosa para organizaciones que dependen del 2FA por SMS para proteger cuentas bancarias, sistemas de nómina o accesos a plataformas críticas. Un atacante con CloudZ+Pheno instalado puede vaciar cuentas o hacer transferencias no autorizadas incluso con 2FA activo, porque intercepta el código antes de que el usuario lo use.

## Recomendaciones

- Migrar donde sea posible de OTP por SMS a apps de autenticación (Google Authenticator, Microsoft Authenticator) o llaves de seguridad física — son más difíciles de interceptar.
- Revisar dispositivos corporativos en busca de procesos o servicios desconocidos activos en segundo plano.
- Activar monitoreo de accesos inusuales en cuentas bancarias y sistemas críticos, especialmente desde IPs o ubicaciones no reconocidas.
- Actualizar el software de seguridad endpoint para detectar variantes conocidas de CloudZ.
