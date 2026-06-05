---
title: "Siemens Siemens ROS#"
date: "2026-05-14"
source: "CISA Alerts"
link: "https://www.cisa.gov/news-events/ics-advisories/icsa-26-134-08"
categoria: "Phishing"
ambito: "Organizaciones"
nivelAtencion: "Alto"
status: "En monitoreo"
resumen: "View CSAF Summary ROS# contains a ROS service file_server, that before version 2.2.2 contains a path traversal vulnerability which could allow an attacker to access, i.e. read and write, arbitrary files, which are…"
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

View CSAF Summary ROS# contains a ROS service file_server, that before version 2.2.2 contains a path traversal vulnerability which could allow an attacker to access, i.e. read and write, arbitrary files, which are accessible with the user rights of the user that runs the service, on the system that hosts service. Siemens has released a new version for ROS# and recommends to update to the latest version. The following versions of Siemens Siemens ROS# are affected: ROS# vers:intdot/<2.2.2 CVSS Vendor Equipment Vulnerabilities v3 9.1 Siemens Siemens Siemens ROS# Relative Path Traversal Background Critical Infrastructure Sectors: Critical Manufacturing Countries/Areas Deployed: Worldwide Company Headquarters Location: Germany Vulnerabilities Expand All + CVE-2026-41551 Affected versions contain a path traversal vulnerability because user input is not properly sanitized. This could allow a remote attacker to access arbitrary files on the device. View CVE Details Affected Products Siemens Siemens ROS# Vendor: Siemens Product Version: ROS# Product Status: known_affected Remediations Mitigation For versions before 2.2.2: - run file_server on a trusted network only. - run file_server with appropriate user rights. - run file_server only for tasks it was designed for, transferring URDF files from ROS host to target system, not as a service that runs continuously in the background. - run file_server only if manually transferring files is not possible. Vendor fix Update to V2.2.2 or later version https://github.com/siemens/ros-sharp/releases/tag/2.2.2 Relevant CWE: CWE-23 Relative Path Traversal Metrics CVSS Version Base Score Base Severity Vector String 3.1 9.1 CRITICAL CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:N Acknowledgments Alifia Rahmah of VyPr AI reported this vulnerability to Siemens. General Recommendations As a general security measure, Siemens strongly recommends to protect network access to devices with appropriate mechanisms. In order to operate the devices in a protected IT environment, Siemens recommends to configure the environment according to Siemens' operational guidelines for Industrial Security (Download: https://www.siemens.com/cert/operational-guidelines-industrial-security), and to follow the recommendations in the product manuals. Additional information on Industrial Security by Siemens can be found at: https://www.siemens.com/industrialsecurity Additional Resources For further inquiries on security vulnerabilities in Siemens products and solutions, please contact the Siemens ProductCERT: https://www.siemens.com/cert/advisories Terms of Use The use of Siemens Security Advisories is subject to the terms and conditions listed on: https://www.siemens.com/productcert/terms-of-use. Legal Notice and Terms of Use This product is provided subject to this Notification (https://www.cisa.gov/notification) and this Privacy & Use policy (https://www.cisa.gov/privacy-policy). Recommended Practices CISA recommends users take defensive measures to minimize the exploitation risk of these vulnerabilities. Minimize network exposure for all control system devices and/or systems, and ensure they are not accessible from the internet. Locate control system networks and remote devices behind firewalls and isolate them from business networks. When remote access is required, use more secure methods, such as Virtual Private Networks (VPNs), recognizing VPNs may have vulnerabilities and should be updated to the most recent version available. Also recognize VPN is only as secure as its connected devices. CISA reminds organizations to perform proper impact analysis and risk assessment prior to deploying defensive measures. CISA also provides a section for control systems security recommended practices on the ICS webpage on cisa.gov. Several CISA products detailing cyber defense best practices are available for reading and download, including Improving Industrial Control Systems Cybersecurity with Defense-in-Depth Strategies. CISA encourages organizations to implement recommended cybersecurity strategies for proactive defense of ICS assets. Additional mitigation guidance and recommended practices are publicly available on the ICS webpage at cisa.gov in the technical information paper, ICS-TIP-12-146-01B--Targeted Cyber Intrusion Detection and Mitigation Strategies. Organizations observing suspected malicious activity should follow established internal procedures and report findings to CISA for tracking and correlation against other incidents. Advisory Conversion Disclaimer This ICSA is a verbatim republication of Siemens ProductCERT SSA-357982 from a direct conversion of the vendor's Common Security Advisory Framework (CSAF) advisory. This is republished to CISA's website as a means of increasing visibility and is provided "as-is" for informational purposes only. CISA is not responsible for the editorial or technical accuracy of republished advisories and provides no warranties of any kind regarding any information contained within this advisory. Further, CISA does not endorse any commercial product or service. Please contact Siemens ProductCERT directly for any questions regarding this advisory. Revision History Initial Release Date: 2026-05-12 Date Revision Summary 2026-05-12 1 Publication Date 2026-05-14 2 Initial CISA Republication of Siemens ProductCERT SSA-357982 advisory Legal Notice and Terms of Use

## Quién está expuesto



## Qué verificar



## Impacto potencial


