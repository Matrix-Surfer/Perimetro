---
title: "Siemens gWAP"
date: "2026-05-14"
source: "CISA Alerts"
link: "https://www.cisa.gov/news-events/ics-advisories/icsa-26-134-01"
categoria: "Vulnerabilidad"
ambito: "Organizaciones"
nivelAtencion: "Alto"
status: "En monitoreo"
resumen: "View CSAF Summary Siemens gPROMS Web Applications Publisher (gWAP) is affected by a remote code execution vulnerability introduced through a third-party component, namely the Axios HTTP client library. The vulnerability…"
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

View CSAF Summary Siemens gPROMS Web Applications Publisher (gWAP) is affected by a remote code execution vulnerability introduced through a third-party component, namely the Axios HTTP client library. The vulnerability stems from a specific "Gadget" attack chain that allows prototype pollution in other third-party libraries, potentially allowing an attacker to execute arbitrary code. Siemens has released a new version for gWAP and recommends to update to the latest version. The following versions of Siemens gWAP are affected: gWAP vers:intdot/<3.1.1 CVSS Vendor Equipment Vulnerabilities v3 8 Siemens Siemens gWAP Improper Neutralization of CRLF Sequences in HTTP Headers ('HTTP Request/Response Splitting') Background Critical Infrastructure Sectors: Critical Manufacturing Countries/Areas Deployed: Worldwide Company Headquarters Location: Germany Vulnerabilities Expand All + CVE-2026-40175 Axios is a promise based HTTP client for the browser and Node.js. Prior to 1.15.0 and 0.3.1, the Axios library is vulnerable to a specific "Gadget" attack chain that allows Prototype Pollution in any third-party dependency to be escalated into Remote Code Execution (RCE) or Full Cloud Compromise (via AWS IMDSv2 bypass). This vulnerability is fixed in 1.15.0 and 0.3.1. View CVE Details Affected Products Siemens gWAP Vendor: Siemens Product Version: gWAP Product Status: known_affected Remediations Vendor fix Update to V3.1.1 or later version https://support.sw.siemens.com/product/284395347/ Relevant CWE: CWE-113 Improper Neutralization of CRLF Sequences in HTTP Headers ('HTTP Request/Response Splitting') Metrics CVSS Version Base Score Base Severity Vector String 3.1 8 HIGH CVSS:3.1/AV:N/AC:H/PR:H/UI:N/S:C/C:H/I:H/A:H Acknowledgments Siemens ProductCERT reported this vulnerability to CISA. General Recommendations As a general security measure, Siemens strongly recommends to protect network access to devices with appropriate mechanisms. In order to operate the devices in a protected IT environment, Siemens recommends to configure the environment according to Siemens' operational guidelines for Industrial Security (Download: https://www.siemens.com/cert/operational-guidelines-industrial-security), and to follow the recommendations in the product manuals. Additional information on Industrial Security by Siemens can be found at: https://www.siemens.com/industrialsecurity Additional Resources For further inquiries on security vulnerabilities in Siemens products and solutions, please contact the Siemens ProductCERT: https://www.siemens.com/cert/advisories Terms of Use The use of Siemens Security Advisories is subject to the terms and conditions listed on: https://www.siemens.com/productcert/terms-of-use. Legal Notice and Terms of Use This product is provided subject to this Notification (https://www.cisa.gov/notification) and this Privacy & Use policy (https://www.cisa.gov/privacy-policy). Recommended Practices CISA recommends users take defensive measures to minimize the exploitation risk of these vulnerabilities. Minimize network exposure for all control system devices and/or systems, and ensure they are not accessible from the internet. Locate control system networks and remote devices behind firewalls and isolate them from business networks. When remote access is required, use more secure methods, such as Virtual Private Networks (VPNs), recognizing VPNs may have vulnerabilities and should be updated to the most recent version available. Also recognize VPN is only as secure as its connected devices. CISA reminds organizations to perform proper impact analysis and risk assessment prior to deploying defensive measures. CISA also provides a section for control systems security recommended practices on the ICS webpage on cisa.gov. Several CISA products detailing cyber defense best practices are available for reading and download, including Improving Industrial Control Systems Cybersecurity with Defense-in-Depth Strategies. CISA encourages organizations to implement recommended cybersecurity strategies for proactive defense of ICS assets. Additional mitigation guidance and recommended practices are publicly available on the ICS webpage at cisa.gov in the technical information paper, ICS-TIP-12-146-01B--Targeted Cyber Intrusion Detection and Mitigation Strategies. Organizations observing suspected malicious activity should follow established internal procedures and report findings to CISA for tracking and correlation against other incidents. Advisory Conversion Disclaimer This ICSA is a verbatim republication of Siemens ProductCERT SSA-876049 from a direct conversion of the vendor's Common Security Advisory Framework (CSAF) advisory. This is republished to CISA's website as a means of increasing visibility and is provided "as-is" for informational purposes only. CISA is not responsible for the editorial or technical accuracy of republished advisories and provides no warranties of any kind regarding any information contained within this advisory. Further, CISA does not endorse any commercial product or service. Please contact Siemens ProductCERT directly for any questions regarding this advisory. Revision History Initial Release Date: 2026-05-12 Date Revision Summary 2026-05-12 1 Publication Date 2026-05-14 2 Initial CISA Republication of Siemens ProductCERT SSA-876049 advisory Legal Notice and Terms of Use

## Quién está expuesto



## Qué verificar



## Impacto potencial


