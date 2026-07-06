---
title: "Falla de 16 años en el hipervisor KVM permite escapar de una máquina virtual al servidor anfitrión"
date: "2026-07-06"
source: "The Hacker News"
link: "https://thehackernews.com/2026/07/16-year-old-linux-kvm-flaw-lets-guest.html"
categoria: "Vulnerabilidad"
ambito: "Organizaciones"
nivelAtencion: "Alto"
status: "En monitoreo"
resumen: "Investigadores encontraron una falla de 16 años en KVM, la tecnología de virtualización usada por buena parte de la nube pública, que permite que una máquina virtual comprometida tome control del servidor físico que la aloja. Afecta a proveedores de nube y empresas con virtualización propia sobre procesadores Intel y AMD. Ya existe una corrección; hay que confirmar que se haya aplicado."
expuestos: "Empresas que usan servidores virtuales en la nube pública o virtualización propia sobre KVM en procesadores Intel o AMD."
verificacion: "Confirmar con el proveedor de nube o el equipo de TI si los servidores ya recibieron la actualización del kernel de Linux que corrige esta falla."
impacto: "Un atacante que ya tenga acceso a una máquina virtual podría tomar control del servidor físico completo, exponiendo a todos los demás sistemas alojados ahí."
grc_activo: "Servidores con virtualización KVM sobre procesadores Intel o AMD, incluyendo nube pública."
grc_vector: "Uso indebido de una falla en la gestión de memoria del hipervisor desde dentro de una máquina virtual."
grc_condicion: "El atacante necesita ya tener acceso o control de una máquina virtual invitada."
grc_explotacion: "poc_publica"
grc_alcance: "Proveedores de nube pública y empresas con infraestructura virtualizada propia sobre KVM."
grc_confianza: "alta"
publicacion: "review"
---

## Qué ocurrió

Investigadores descubrieron una falla de seguridad que llevaba 16 años oculta en KVM, la tecnología de virtualización usada en buena parte de los servidores de la nube pública, incluyendo Amazon Web Services y Google Cloud. La falla permite que una máquina virtual comprometida escape de su entorno aislado y tome control del servidor físico que la aloja. Ya fue corregida en el kernel de Linux, pero requiere que cada proveedor y empresa aplique la actualización.

## Quién está expuesto

Empresas que rentan servidores virtuales en la nube pública. Organizaciones que operan su propia infraestructura virtualizada sobre procesadores Intel o AMD usando KVM.

## A considerar

En algunos sistemas Linux, el archivo que controla el acceso a esta tecnología de virtualización tiene permisos demasiado abiertos por defecto. Vale la pena que el equipo de TI revise esa configuración además de aplicar la actualización.

## Impacto potencial

Si un atacante ya logró entrar a una máquina virtual, por ejemplo mediante otra falla o credenciales robadas, esta vulnerabilidad le permite dar el salto al servidor físico completo. Eso significa acceso a todas las demás máquinas virtuales alojadas ahí, incluyendo las de otros clientes en la nube compartida.
