---
title: "CP Plus 8 Ch. Network Video Recorder"
date: "2026-05-28"
source: "CISA Alerts"
link: "https://www.cisa.gov/news-events/ics-advisories/icsa-26-148-05"
categoria: "Phishing"
ambito: "Organizaciones"
nivelAtencion: "Medio"
status: "En monitoreo"
resumen: "View CSAF Summary Successful exploitation of this vulnerability allows an attacker's malicious script to execute in the browser of any authenticated user or administrator who accesses the affected interface. This could…"
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

View CSAF Summary Successful exploitation of this vulnerability allows an attacker's malicious script to execute in the browser of any authenticated user or administrator who accesses the affected interface. This could lead to compromise of user sessions, execution of unauthorized actions with the victim's privileges, exposure or manipulation of sensitive data, and degradation of overall system integrity. The following versions of CP Plus 8 Ch. Network Video Recorder are affected: CP-UNR-108F1 Hardware V1.0 CP-UNR-108F1 Web V3.2.7.128806 CP-UNR-108F1 System V4.001.00AT009.0.R CVSS Vendor Equipment Vulnerabilities v3 8.4 CP Plus CP Plus 8 Ch. Network Video Recorder Improper Neutralization of Input During Web Page Generation ('Cross-site Scripting') Background Critical Infrastructure Sectors: Commercial Facilities, Critical Manufacturing, Emergency Services Countries/Areas Deployed: India, Nepal, United Arab Emirates, Gambia Company Headquarters Location: India Vulnerabilities Expand All + CVE-2026-6824 A stored Cross-Site Scripting (XSS) vulnerability exists in certain 1xxx series NVR devices due to insufficient sanitization of user-supplied input in specific functional modules. Attackers can inject malicious scripts, which are then persistently stored on the device backend. When administrators or users access affected pages, the stored scripts are executed in their browsers, leading to potential session hijacking, unauthorized actions, or data theft. View CVE Details Affected Products CP Plus 8 Ch. Network Video Recorder Vendor: CP Plus Product Version: CP Plus CP-UNR-108F1 Hardware: V1.0, CP Plus CP-UNR-108F1 Web: V3.2.7.128806, CP Plus CP-UNR-108F1 System: V4.001.00AT009.0.R Product Status: known_affected Remediations Mitigation CP Plus recommends updating the firmware on the device to the latest firmware version. Mitigation CP-UNR-AxxxMars_PN_15_Q_00_V1.00.14.01.T.260326 which can be downloaded at https://drive.google.com/file/d/1Ctxdp55UtlrQY7CSepkImM9zFgdcuCyL/view https://drive.google.com/file/d/1Ctxdp55UtlrQY7CSepkImM9zFgdcuCyL/view Mitigation For firmware access and upgrade instructions, please contact support at: Mitigation Phone: +91-8800952952 Mitigation Email: support@cpplusworld.com mailto:support@cpplusworld.com Relevant CWE: CWE-79 Improper Neutralization of Input During Web Page Generation ('Cross-site Scripting') Metrics CVSS Version Base Score Base Severity Vector String 3.1 8.4 HIGH CVSS:3.1/AV:N/AC:L/PR:H/UI:R/S:C/C:H/I:H/A:H Acknowledgments Jithin Nambiar J reported this vulnerability to CISA Legal Notice and Terms of Use This product is provided subject to this Notification (https://www.cisa.gov/notification) and this Privacy & Use policy (https://www.cisa.gov/privacy-policy). Recommended Practices CISA recommends users take defensive measures to minimize the risk of exploitation of this vulnerability. Minimize network exposure for all control system devices and/or systems, ensuring they are not accessible from the internet. Locate control system networks and remote devices behind firewalls and isolating them from business networks. When remote access is required, use more secure methods, such as Virtual Private Networks (VPNs), recognizing VPNs may have vulnerabilities and should be updated to the most current version available. Also recognize VPN is only as secure as the connected devices. CISA reminds organizations to perform proper impact analysis and risk assessment prior to deploying defensive measures. CISA also provides a section for control systems security recommended practices on the ICS webpage on cisa.gov/ics. Several CISA products detailing cyber defense best practices are available for reading and download, including Improving Industrial Control Systems Cybersecurity with Defense-in-Depth Strategies. CISA encourages organizations to implement recommended cybersecurity strategies for proactive defense of ICS assets. Additional mitigation guidance and recommended practices are publicly available on the ICS webpage at cisa.gov/ics in the technical information paper, ICS-TIP-12-146-01B--Targeted Cyber Intrusion Detection and Mitigation Strategies. Organizations observing suspected malicious activity should follow established internal procedures and report findings to CISA for tracking and correlation against other incidents. CISA also recommends users take the following measures to protect themselves from social engineering attacks: Do not click web links or open attachments in unsolicited email messages. Refer to Recognizing and Avoiding Email Scams for more information on avoiding email scams. Refer to Avoiding Social Engineering and Phishing Attacks for more information on social engineering attacks. No known public exploitation specifically targeting this vulnerability has been reported to CISA at this time. Revision History Initial Release Date: 2026-05-28 Date Revision Summary 2026-05-28 1 Initial Publication Legal Notice and Terms of Use

## Quién está expuesto



## Qué verificar



## Impacto potencial


