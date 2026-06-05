---
title: "XCharge C6"
date: "2026-05-28"
source: "CISA Alerts"
link: "https://www.cisa.gov/news-events/ics-advisories/icsa-26-148-08"
categoria: "Phishing"
ambito: "Organizaciones"
nivelAtencion: "Alto"
status: "En monitoreo"
resumen: "View CSAF Summary Successful exploitation of these vulnerabilities could allow an attacker to gain administrator rights or execute code on the affected device. The following versions of XCharge C6 are affected: C6 CVSS…"
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

View CSAF Summary Successful exploitation of these vulnerabilities could allow an attacker to gain administrator rights or execute code on the affected device. The following versions of XCharge C6 are affected: C6 CVSS Vendor Equipment Vulnerabilities v3 9.8 XCharge XCharge C6 Download of Code Without Integrity Check, Stack-based Buffer Overflow, Initialization of a Resource with an Insecure Default Background Critical Infrastructure Sectors: Transportation Systems Countries/Areas Deployed: Worldwide Company Headquarters Location: United States Vulnerabilities Expand All + CVE-2026-9037 A firmware update mechanism in the affected charging controller fails to validate the authenticity of firmware packages delivered through the device's management interface. Because cryptographic signatures are not verified, an attacker with the ability to interfere with or impersonate the management channel could cause the device to install an unauthorized firmware package. This condition could allow execution of unauthorized code with high privileges on the device, View CVE Details Affected Products XCharge C6 Vendor: XCharge Product Version: XCharge C6: <May_22_2026 Product Status: known_affected Remediations Mitigation XCharge has confirmed that the update has been deployed for all affected chargers. Users with questions can reach out to XCharge Support for further details if needed. https://www.xcharge.com/contact https://www.xcharge.com/contact Relevant CWE: CWE-494 Download of Code Without Integrity Check Metrics CVSS Version Base Score Base Severity Vector String 3.1 9.8 CRITICAL CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H CVE-2026-9038 A stack-based buffer overflow vulnerability in the charging controller's signal-processing logic allows an attacker with physical access to the charging interface to supply message fields that exceed expected bounds. Because the input is not sufficiently validated, memory corruption may occur, which can lead to execution of unauthorized code with elevated privileges. View CVE Details Affected Products XCharge C6 Vendor: XCharge Product Version: XCharge C6: <May_22_2026 Product Status: known_affected Remediations Mitigation XCharge has confirmed that the update has been deployed for all affected chargers. Users with questions can reach out to XCharge Support for further details if needed. https://www.xcharge.com/contact https://www.xcharge.com/contact Relevant CWE: CWE-121 Stack-based Buffer Overflow Metrics CVSS Version Base Score Base Severity Vector String 3.1 7.6 HIGH CVSS:3.1/AV:P/AC:L/PR:N/UI:N/S:C/C:H/I:H/A:H CVE-2026-9039 A configuration weakness in the device's remote management service allows an authenticated session to be established over a communication channel intended solely for vehicle-charger signaling. The service is accessible on interfaces exposed through the charging connector, and it accepts a default administrative credential. A malicious device physically connected to the charging interface could leverage this misconfiguration to obtain full administrative access. View CVE Details Affected Products XCharge C6 Vendor: XCharge Product Version: XCharge C6: <May_22_2026 Product Status: known_affected Remediations Mitigation XCharge has confirmed that the update has been deployed for all affected chargers. Users with questions can reach out to XCharge Support for further details if needed. https://www.xcharge.com/contact https://www.xcharge.com/contact Relevant CWE: CWE-1188 Initialization of a Resource with an Insecure Default Metrics CVSS Version Base Score Base Severity Vector String 3.1 7.6 HIGH CVSS:3.1/AV:P/AC:L/PR:N/UI:N/S:C/C:H/I:H/A:H Acknowledgments Lionel R. Saposnik of SaiFlow reported these vulnerabilities to CISA Legal Notice and Terms of Use This product is provided subject to this Notification (https://www.cisa.gov/notification) and this Privacy & Use policy (https://www.cisa.gov/privacy-policy). Recommended Practices CISA recommends users take defensive measures to minimize the risk of exploitation of these vulnerabilities. Minimize network exposure for all control system devices and/or systems, ensuring they are not accessible from the internet. Locate control system networks and remote devices behind firewalls and isolating them from business networks. When remote access is required, use more secure methods, such as Virtual Private Networks (VPNs), recognizing VPNs may have vulnerabilities and should be updated to the most current version available. Also recognize VPN is only as secure as the connected devices. CISA reminds organizations to perform proper impact analysis and risk assessment prior to deploying defensive measures. CISA also provides a section for control systems security recommended practices on the ICS webpage on cisa.gov/ics. Several CISA products detailing cyber defense best practices are available for reading and download, including Improving Industrial Control Systems Cybersecurity with Defense-in-Depth Strategies. CISA encourages organizations to implement recommended cybersecurity strategies for proactive defense of ICS assets. Additional mitigation guidance and recommended practices are publicly available on the ICS webpage at cisa.gov/ics in the technical information paper, ICS-TIP-12-146-01B--Targeted Cyber Intrusion Detection and Mitigation Strategies. Organizations observing suspected malicious activity should follow established internal procedures and report findings to CISA for tracking and correlation against other incidents. CISA also recommends users take the following measures to protect themselves from social engineering attacks: Do not click web links or open attachments in unsolicited email messages. Refer to Recognizing and Avoiding Email Scams for more information on avoiding email scams. Refer to Avoiding Social Engineering and Phishing Attacks for more information on social engineering attacks. No known public exploitation specifically targeting these vulnerabilities has been reported to CISA at this time. Revision History Initial Release Date: 2026-05-28 Date Revision Summary 2026-05-28 1 Initial Publication Legal Notice and Terms of Use

## Quién está expuesto



## Qué verificar



## Impacto potencial


