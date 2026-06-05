---
title: "NAVTOR NavBox"
date: "2026-06-04"
source: "CISA Alerts"
link: "https://www.cisa.gov/news-events/ics-advisories/icsa-26-155-01"
categoria: "Phishing"
ambito: "Organizaciones"
nivelAtencion: "Medio"
status: "En monitoreo"
resumen: "View CSAF Summary Successful exploitation of this vulnerability could allow a local attacker to gain unauthorized access to SOAP methods, resulting in a disruption of operations. The following versions of NAVTOR NavBox…"
expuestos: ""
verificacion: ""
impacto: ""
grc_activo: ""
grc_vector: ""
grc_condicion: ""
grc_explotacion: "investigacion"
grc_alcance: ""
grc_confianza: "baja"
publicacion: "draft"
---

## Qué ocurrió

View CSAF Summary Successful exploitation of this vulnerability could allow a local attacker to gain unauthorized access to SOAP methods, resulting in a disruption of operations. The following versions of NAVTOR NavBox are affected: NavBox 4.16.1.20 (CVE-2026-21404) CVSS Vendor Equipment Vulnerabilities v3 6.3 NAVTOR NAVTOR NavBox Use of Hard-coded Credentials Background Critical Infrastructure Sectors: Information Technology Countries/Areas Deployed: Worldwide Company Headquarters Location: Norway Vulnerabilities Expand All + CVE-2026-21404 NAVTOR NavBox through version 4.16.1.20 contains hard-coded credentials within its Windows Communication Foundation (SOAP) implementation. If the SOAP functionality is enabled, a local attacker can extract credentials to bypass the intended transfer workflow. Successful authentication against the SOAP interface grants access to privileged WCF methods, enabling an attacker to write or overwrite files within application-defined paths. View CVE Details Affected Products NAVTOR NavBox Vendor: NAVTOR Product Version: NAVTOR NavBox: 4.16.1.20 Product Status: known_affected Remediations Vendor fix NAVTOR has released a patch for NavBox in April 2026. Version 4.17.2.6 and later includes the fix. Users that have an active NavBox connection will automatically be kept up to date with the latest version. No user action required. Relevant CWE: CWE-798 Use of Hard-coded Credentials Metrics CVSS Version Base Score Base Severity Vector String 3.1 6.3 MEDIUM CVSS:3.1/AV:L/AC:H/PR:L/UI:N/S:U/C:N/I:H/A:H 4.0 5.8 MEDIUM CVSS:4.0/AV:L/AC:H/AT:N/PR:L/UI:N/VC:N/VI:H/VA:H/SC:N/SI:N/SA:N Acknowledgments Cydome Security Ltd reported this vulnerability to CISA Legal Notice and Terms of Use This product is provided subject to this Notification (https://www.cisa.gov/notification) and this Privacy & Use policy (https://www.cisa.gov/privacy-policy). Recommended Practices CISA recommends users take defensive measures to minimize the risk of exploitation of this vulnerability. Minimize network exposure for all control system devices and/or systems, ensuring they are not accessible from the internet. Locate control system networks and remote devices behind firewalls and isolating them from business networks. When remote access is required, use more secure methods, such as Virtual Private Networks (VPNs), recognizing VPNs may have vulnerabilities and should be updated to the most current version available. Also recognize VPN is only as secure as the connected devices. CISA reminds organizations to perform proper impact analysis and risk assessment prior to deploying defensive measures. CISA also provides a section for control systems security recommended practices on the ICS webpage on cisa.gov/ics. Several CISA products detailing cyber defense best practices are available for reading and download, including Improving Industrial Control Systems Cybersecurity with Defense-in-Depth Strategies. CISA encourages organizations to implement recommended cybersecurity strategies for proactive defense of ICS assets. Additional mitigation guidance and recommended practices are publicly available on the ICS webpage at cisa.gov/ics in the technical information paper, ICS-TIP-12-146-01B--Targeted Cyber Intrusion Detection and Mitigation Strategies. Organizations observing suspected malicious activity should follow established internal procedures and report findings to CISA for tracking and correlation against other incidents. CISA also recommends users take the following measures to protect themselves from social engineering attacks: Do not click web links or open attachments in unsolicited email messages. Refer to Recognizing and Avoiding Email Scams for more information on avoiding email scams. Refer to Avoiding Social Engineering and Phishing Attacks for more information on social engineering attacks. No known public exploitation specifically targeting this vulnerability has been reported to CISA at this time. This vulnerability is not exploitable remotely. This vulnerability has a high attack complexity. Revision History Initial Release Date: 2026-06-04 Date Revision Summary 2026-06-04 1 Initial Publication Legal Notice and Terms of Use

## Quién está expuesto



## Qué verificar



## Impacto potencial


