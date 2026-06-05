---
title: "ScadaBR"
date: "2026-05-19"
source: "CISA Alerts"
link: "https://www.cisa.gov/news-events/ics-advisories/icsa-26-139-03"
categoria: "Phishing"
ambito: "Organizaciones"
nivelAtencion: "Alto"
status: "En monitoreo"
resumen: "View CSAF Summary Successful exploitation of these vulnerabilities could allow an attacker to perform unauthenticated remote code execution. The following versions of ScadaBR are affected: ScadaBR 1.2.0 (CVE-2026-8602,…"
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

View CSAF Summary Successful exploitation of these vulnerabilities could allow an attacker to perform unauthenticated remote code execution. The following versions of ScadaBR are affected: ScadaBR 1.2.0 (CVE-2026-8602, CVE-2026-8603, CVE-2026-8604, CVE-2026-8605) CVSS Vendor Equipment Vulnerabilities v3 9.1 ScadaBR ScadaBR Missing Authentication for Critical Function, Improper Neutralization of Special Elements used in an OS Command ('OS Command Injection'), Cross-Site Request Forgery (CSRF), Use of Hard-coded Credentials Background Critical Infrastructure Sectors: Critical Manufacturing, Dams, Chemical, Energy, Water and Wastewater Countries/Areas Deployed: Worldwide Company Headquarters Location: Brazil Vulnerabilities Expand All + CVE-2026-8602 In ScadaBR version 1.2.0, a Missing Authentication for Critical Function vulnerability could allow an unauthenticated attacker to send a HTTP GET requests to the SCADA system and inject arbitrary sensor readings. View CVE Details Affected Products ScadaBR Vendor: ScadaBR Product Version: ScadaBR ScadaBR: 1.2.0 Product Status: known_affected Remediations Vendor fix ScadaBR has not responded to requests to work with CISA to mitigate this vulnerability. Users of affected versions of ScadaBR are invited to contact ScadaBR customer support for additional information https://github.com/ScadaBR. https://github.com/ScadaBR Relevant CWE: CWE-306 Missing Authentication for Critical Function Metrics CVSS Version Base Score Base Severity Vector String 3.1 9.1 CRITICAL CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:H/A:H CVE-2026-8603 In ScadaBR version 1.2.0, an OS Command Injection vulnerability could allow an attacker to execute commands as root on the SCADA system. View CVE Details Affected Products ScadaBR Vendor: ScadaBR Product Version: ScadaBR ScadaBR: 1.2.0 Product Status: known_affected Remediations Vendor fix ScadaBR has not responded to requests to work with CISA to mitigate this vulnerability. Users of affected versions of ScadaBR are invited to contact ScadaBR customer support for additional information https://github.com/ScadaBR. https://github.com/ScadaBR Relevant CWE: CWE-78 Improper Neutralization of Special Elements used in an OS Command ('OS Command Injection') Metrics CVSS Version Base Score Base Severity Vector String 3.1 8.8 HIGH CVSS:3.1/AV:N/AC:L/PR:L/UI:N/S:U/C:H/I:H/A:H CVE-2026-8604 In ScadaBR version 1.2.0, a CSRF vulnerability could allow an attacker to trigger any authenticated action through a victim's session by luring any logged-in user to a malicious webpage. View CVE Details Affected Products ScadaBR Vendor: ScadaBR Product Version: ScadaBR ScadaBR: 1.2.0 Product Status: known_affected Remediations Vendor fix ScadaBR has not responded to requests to work with CISA to mitigate this vulnerability. Users of affected versions of ScadaBR are invited to contact ScadaBR customer support for additional information https://github.com/ScadaBR. https://github.com/ScadaBR Relevant CWE: CWE-352 Cross-Site Request Forgery (CSRF) Metrics CVSS Version Base Score Base Severity Vector String 3.1 8.8 HIGH CVSS:3.1/AV:N/AC:L/PR:N/UI:R/S:U/C:H/I:H/A:H CVE-2026-8605 In ScadaBR version 1.2.0, a Use of Hard-Coded Credentials vulnerability could allow an attacker to access the SCADA system as admin. View CVE Details Affected Products ScadaBR Vendor: ScadaBR Product Version: ScadaBR ScadaBR: 1.2.0 Product Status: known_affected Remediations Vendor fix ScadaBR has not responded to requests to work with CISA to mitigate this vulnerability. Users of affected versions of ScadaBR are invited to contact ScadaBR customer support for additional information https://github.com/ScadaBR. https://github.com/ScadaBR Relevant CWE: CWE-798 Use of Hard-coded Credentials Metrics CVSS Version Base Score Base Severity Vector String 3.1 6.1 MEDIUM CVSS:3.1/AV:N/AC:L/PR:N/UI:R/S:C/C:L/I:L/A:N Acknowledgments Arad Inbar, Nir Somech, Ben Grinberg, Daniel Lubel, Erez Cohen, and Adiel Sol of DREAM reported these vulnerabilities to CISA Legal Notice and Terms of Use This product is provided subject to this Notification (https://www.cisa.gov/notification) and this Privacy & Use policy (https://www.cisa.gov/privacy-policy). Recommended Practices CISA recommends users take defensive measures to minimize the risk of exploitation of these vulnerabilities. Minimize network exposure for all control system devices and/or systems, ensuring they are not accessible from the internet. Locate control system networks and remote devices behind firewalls and isolating them from business networks. When remote access is required, use more secure methods, such as Virtual Private Networks (VPNs), recognizing VPNs may have vulnerabilities and should be updated to the most current version available. Also recognize VPN is only as secure as the connected devices. CISA reminds organizations to perform proper impact analysis and risk assessment prior to deploying defensive measures. CISA also provides a section for control systems security recommended practices on the ICS webpage on cisa.gov/ics. Several CISA products detailing cyber defense best practices are available for reading and download, including Improving Industrial Control Systems Cybersecurity with Defense-in-Depth Strategies. CISA encourages organizations to implement recommended cybersecurity strategies for proactive defense of ICS assets. Additional mitigation guidance and recommended practices are publicly available on the ICS webpage at cisa.gov/ics in the technical information paper, ICS-TIP-12-146-01B--Targeted Cyber Intrusion Detection and Mitigation Strategies. Organizations observing suspected malicious activity should follow established internal procedures and report findings to CISA for tracking and correlation against other incidents. CISA also recommends users take the following measures to protect themselves from social engineering attacks: Do not click web links or open attachments in unsolicited email messages. Refer to Recognizing and Avoiding Email Scams for more information on avoiding email scams. Refer to Avoiding Social Engineering and Phishing Attacks for more information on social engineering attacks. No known public exploitation specifically targeting these vulnerabilities has been reported to CISA at this time. Revision History Initial Release Date: 2026-05-19 Date Revision Summary 2026-05-19 1 Initial Publication Legal Notice and Terms of Use

## Quién está expuesto



## Qué verificar



## Impacto potencial


