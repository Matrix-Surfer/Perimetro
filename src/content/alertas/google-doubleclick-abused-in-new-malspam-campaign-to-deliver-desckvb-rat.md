---
title: "Campaña de malspam abusa del dominio de Google DoubleClick para entregar el RAT DesckVB"
date: "2026-06-03"
tipo: "Otro"
categoria: "Malware"
nivelAtencion: "Alto"
status: "Activa"
parche: "Desconocido"
explotacion: "Activa"
resumen: "Una nueva campaña de malspam usa el dominio legítimo de Google DoubleClick —una plataforma de publicidad— como intermediario antes de redirigir a la víctima a infraestructura maliciosa. El objetivo final es instalar DesckVB RAT, un troyano de acceso remoto. Los filtros de correo no lo detectan porque el primer enlace pertenece a Google."
source: "The Hacker News"
link: "https://thehackernews.com/2026/06/google-doubleclick-abused-in-new.html"
publicacion: "published"
---

## Contexto

Investigadores detectaron una campaña de malspam —spam con malware— que usa el dominio de Google DoubleClick como capa de redirección antes de llevar a la víctima a infraestructura controlada por el atacante. DoubleClick es la plataforma de publicidad de Google; su dominio aparece en millones de correos legítimos, lo que lo convierte en un bypass efectivo de filtros de seguridad.

El objetivo final es instalar DesckVB RAT —un troyano de acceso remoto que da al atacante control del dispositivo comprometido—. El vector inicial es un correo con un enlace que pasa los filtros porque apunta a un dominio de Google antes de redirigir.

## Impacto potencial

### Para personas

Cualquier usuario que reciba estos correos y haga clic en el enlace puede terminar con un RAT instalado en su dispositivo, dando al atacante acceso completo.

### Para organizaciones

El RAT instalado puede usarse para espionaje corporativo, robo de credenciales, o como punto de entrada para un ataque de ransomware posterior. La efectividad de la campaña radica en que los filtros de correo corporativos no bloquean el enlace inicial.

## Recomendaciones

### Para personas

No hacer clic en enlaces de correos no solicitados aunque el enlace parezca ir a un dominio de Google. Si no esperabas el correo, verificar con el supuesto remitente antes de interactuar con él.

### Para organizaciones

Considerar la implementación de sandboxing de URLs —análisis del destino final de un enlace, no solo del dominio inicial—. Los filtros de correo que solo evalúan el primer dominio del enlace son vulnerables a esta técnica de redirección.

---

La confianza en dominios conocidos es una heurística que los atacantes aprenden a explotar. DoubleClick hoy; mañana puede ser cualquier servicio de Google, Microsoft o Amazon. La lección permanente: la seguridad del correo no termina en el filtro. Termina en el criterio del usuario y en la capacidad de analizar el destino real de cada enlace.
