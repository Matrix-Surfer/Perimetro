---
title: "DriveSurge secuestra miles de sitios legítimos para lanzar ataques ClickFix y FakeUpdate"
date: "2026-06-03"
tipo: "Phishing"
status: "Activa"
resumen: "La operación DriveSurge usa un sistema malicioso de distribución de tráfico para redirigir visitantes de sitios legítimos comprometidos hacia páginas que instalan malware mediante las técnicas ClickFix y FakeUpdate."
publicacion: "published"
---

## Contexto

DriveSurge es una operación de cibercrimen clasificada como IAB —Initial Access Broker, un negocio criminal que vende accesos a sistemas comprometidos a otros grupos— que fue reportada el 2 de junio de 2026 por Dark Reading.

La operación funciona en tres pasos. Primero, los atacantes comprometen miles de sitios web legítimos. Segundo, inyectan en esos sitios un sistema de distribución de tráfico —TDS por sus siglas en inglés— que analiza a cada visitante y decide, en milisegundos, si debe redirigirlo a una página maliciosa o dejar que vea el contenido normal. Tercero, los visitantes seleccionados son enviados a páginas que usan dos técnicas de engaño:

**ClickFix**: simula un error en el sistema o en la página y pide al usuario que ejecute un comando para "arreglarlo". El comando en realidad instala malware.

**FakeUpdate**: muestra una alerta falsa que dice que el navegador o el sistema operativo necesita actualización urgente. La "actualización" es malware.

La peligrosidad de este ataque está en el origen: el visitante llega desde un sitio que ya conoce y en el que confía.

## Impacto potencial

### Para personas

Puedes llegar a una página maliciosa simplemente buscando en Google y entrando a un resultado que ya conocías. Si el sitio fue comprometido por DriveSurge, el TDS puede redirigirte sin que la dirección del sitio cambie. Si sigues las instrucciones de la alerta falsa, terminas con malware instalado en tu equipo.

El malware instalado por estas campañas suele ser un infostealer —software que roba contraseñas guardadas, tokens de sesión y cookies de navegador— o un loader que descarga ransomware.

### Para organizaciones

- **Compromiso de equipos de empleados**: un colaborador que visita un sitio de proveedor comprometido puede terminar con un infostealer en su equipo de trabajo.
- **Robo de credenciales corporativas**: el infostealer extrae contraseñas guardadas en el navegador, incluyendo accesos a herramientas de trabajo, correo y sistemas internos.
- **Cadena de compromisos**: el acceso inicial vendido por DriveSurge a terceros puede resultar en ataques de ransomware días o semanas después.

## Perspectiva GRC

Este tipo de operación explota un supuesto de confianza difícil de eliminar: los sitios conocidos son seguros. La realidad es que un sitio puede ser legítimo y estar comprometido al mismo tiempo. El contenido que ves puede ser el original; el sistema de redirección opera en segundo plano.

Las organizaciones que no tienen políticas sobre qué pueden ejecutar los empleados en sus equipos de trabajo son especialmente vulnerables a ClickFix: el empleado tiene intención legítima de "arreglar un error", y el equipo no tiene restricciones que le impidan ejecutar el comando malicioso.

## Recomendaciones

### Para personas

- Nunca ejecutes comandos de terminal o PowerShell que un sitio web te pida copiar y pegar, sin importar qué error dice que tiene tu sistema. Ningún sitio legítimo necesita que ejecutes comandos para funcionar.
- Desconfía de alertas de actualización que aparecen dentro de una página web. Las actualizaciones reales de tu sistema operativo o navegador llegan a través del propio sistema, no de páginas que visitas.
- Si tu navegador empieza a mostrar este tipo de alertas con frecuencia, considera reiniciar el navegador o revisar las extensiones instaladas.

### Para organizaciones

La pregunta que debes poder responder hoy: ¿pueden los empleados ejecutar scripts o comandos con privilegios en sus equipos de trabajo sin aprobación previa?

- Implementa restricciones de ejecución de scripts en equipos corporativos —especialmente PowerShell en Windows— de modo que solo se ejecuten scripts firmados o aprobados.
- Capacita al equipo con un ejemplo concreto de cómo se ve un ataque ClickFix: la imagen de una alerta falsa que pide "presionar Windows+R y pegar este comando" debería ser reconocible por cualquier persona con acceso a equipo corporativo.
- Si la organización usa soluciones de seguridad en endpoints, verifica que tengan detección de comportamiento activa, no solo firmas de malware conocido.

---

Los ataques de ingeniería social no necesitan vulnerabilidades técnicas. Necesitan que el usuario siga una instrucción. La defensa más efectiva no es el software de seguridad, aunque ayuda. Es el criterio: saber que ningún sitio web tiene autoridad para pedirte que ejecutes comandos en tu propio equipo.
