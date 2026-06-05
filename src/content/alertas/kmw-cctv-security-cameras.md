---
title: "KMW CCTV Security Cameras"
date: "2026-05-28"
source: "CISA Alerts"
link: "https://www.cisa.gov/news-events/ics-advisories/icsa-26-148-06"
categoria: "Phishing"
ambito: "Organizaciones"
nivelAtencion: "Medio"
status: "En monitoreo"
resumen: "View CSAF Summary Successful exploitation of this vulnerability may grant full unauthorized access to camera feeds and settings. The following versions of KMW CCTV Security Cameras are affected: KM-IP521…"
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

View CSAF Summary Successful exploitation of this vulnerability may grant full unauthorized access to camera feeds and settings. The following versions of KMW CCTV Security Cameras are affected: KM-IP521 IPCAM_V4.04.91.230307 KM-IP421 IPCAM_V4.04.53.210416 CVSS Vendor Equipment Vulnerabilities v3 9.1 KMW KMW CCTV Security Cameras Unverified Password Change Background Critical Infrastructure Sectors: Commercial Facilities, Government Services and Facilities, Critical Manufacturing, Financial Services, Transportation Systems Countries/Areas Deployed: Worldwide Company Headquarters Location: Romania Vulnerabilities Expand All + CVE-2026-5386 The affected product is vulnerable to a critical unauthenticated password reset. This flaw allows an attacker to remotely reset the administrator password to a known value without authentication, granting full access to the camera feeds and settings. View CVE Details Affected Products KMW CCTV Security Cameras Vendor: KMW Product Version: KMW KM-IP521: IPCAM_V4.04.91.230307, KMW KM-IP421: IPCAM_V4.04.53.210416 Product Status: known_affected Remediations Mitigation KMW has issued a firmware update to address this vulnerability. The firmware update can be found at https://main.kmw.ro/pub/Firmware/521_421.zip. https://main.kmw.ro/pub/Firmware/521_421.zip Vendor fix KM-IP421 - will lose the cloud authorization after this update so users will need to contact customer support to re-authorize the P2P connection. Mitigation KMW recommends connecting surveillance equipment on a separate network, allow only specific devices access to the internet, check for firmware updates regularly, and use cloud connections responsibly. Mitigation If there are any issues customers are encouraged to contact KMW directly. Relevant CWE: CWE-620 Unverified Password Change Metrics CVSS Version Base Score Base Severity Vector String 3.1 9.1 CRITICAL CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:N Acknowledgments Reporter Name(s): Souvik Kandar reported this vulnerability to CISA Legal Notice and Terms of Use This product is provided subject to this Notification (https://www.cisa.gov/notification) and this Privacy & Use policy (https://www.cisa.gov/privacy-policy). Recommended Practices CISA recommends users take defensive measures to minimize the risk of exploitation of this vulnerability. Minimize network exposure for all control system devices and/or systems, ensuring they are not accessible from the internet. Locate control system networks and remote devices behind firewalls and isolating them from business networks. When remote access is required, use more secure methods, such as Virtual Private Networks (VPNs), recognizing VPNs may have vulnerabilities and should be updated to the most current version available. Also recognize VPN is only as secure as the connected devices. CISA reminds organizations to perform proper impact analysis and risk assessment prior to deploying defensive measures. CISA also provides a section for control systems security recommended practices on the ICS webpage on cisa.gov/ics. Several CISA products detailing cyber defense best practices are available for reading and download, including Improving Industrial Control Systems Cybersecurity with Defense-in-Depth Strategies. CISA encourages organizations to implement recommended cybersecurity strategies for proactive defense of ICS assets. Additional mitigation guidance and recommended practices are publicly available on the ICS webpage at cisa.gov/ics in the technical information paper, ICS-TIP-12-146-01B--Targeted Cyber Intrusion Detection and Mitigation Strategies. Organizations observing suspected malicious activity should follow established internal procedures and report findings to CISA for tracking and correlation against other incidents. CISA also recommends users take the following measures to protect themselves from social engineering attacks: Do not click web links or open attachments in unsolicited email messages. Refer to Recognizing and Avoiding Email Scams for more information on avoiding email scams. Refer to Avoiding Social Engineering and Phishing Attacks for more information on social engineering attacks. No known public exploitation specifically targeting this vulnerability has been reported to CISA at this time. Revision History Initial Release Date: 2026-05-28 Date Revision Summary 2026-05-28 1 Initial Publication Legal Notice and Terms of Use

## Quién está expuesto



## Qué verificar



## Impacto potencial


