import { View, Text, ScrollView } from "react-native";
import React from "react";
import { styles } from "./styles";

const Glossary5 = () => {
	return (
		<ScrollView style={styles.container}  contentContainerStyle={{paddingVertical:16}}>
			<Text style={styles.heading}>Chapter Five: Glossary</Text>

			<Text style={styles.letterSection}>A</Text>
			<GlossaryItem
				term="Advanced Persistent Threat (APT)"
				definition="An instance when a threat actor maintains unauthorized access to a system for an extended period of time."
			/>
			<GlossaryItem
				term="Analysis"
				definition="The investigation and validation of alerts."
			/>

			<Text style={styles.letterSection}>B</Text>
			<GlossaryItem
				term="Business Continuity Plan (BCP)"
				definition="A document that outlines the procedures to sustain business operations during and after a significant disruption."
			/>

			<Text style={styles.letterSection}>C</Text>
			<GlossaryItem
				term="Chain of Custody"
				definition="The process of documenting evidence possession and control during an incident lifecycle."
			/>
			<GlossaryItem
				term="Computer Security Incident Response Teams (CSIRT)"
				definition="A specialized group of security professionals trained in incident management and response."
			/>
			<GlossaryItem
				term="Configuration File"
				definition="A file used to configure the settings of an application."
			/>
			<GlossaryItem
				term="Containment"
				definition="The act of limiting and preventing additional damage caused by an incident."
			/>
			<GlossaryItem
				term="Crowd Sourcing"
				definition="The practice of gathering information using public collaboration."
			/>

			<Text style={styles.letterSection}>D</Text>
			<GlossaryItem
				term="Data Exfiltration"
				definition="Unauthorized transmission of data from a system."
			/>
			<GlossaryItem
				term="Data Packet"
				definition="A basic unit of information that travels from one device to another within a network."
			/>
			<GlossaryItem
				term="Detection"
				definition="The prompt discovery of security events."
			/>
			<GlossaryItem
				term="Documentation"
				definition="Any form of recorded content used for a specific purpose."
			/>

			<Text style={styles.letterSection}>E</Text>
			<GlossaryItem
				term="Endpoint"
				definition="Any device connected on a network."
			/>
			<GlossaryItem
				term="Endpoint Detection and Response (EDR)"
				definition="An application that monitors an endpoint for malicious activity."
			/>
			<GlossaryItem
				term="Eradication"
				definition="The complete removal of the incident elements from all affected systems."
			/>
			<GlossaryItem
				term="Event"
				definition="An observable occurrence on a network, system, or device."
			/>

			<Text style={styles.letterSection}>F</Text>
			<GlossaryItem
				term="False Negative"
				definition="A state where the presence of a threat is not detected."
			/>
			<GlossaryItem
				term="False Positive"
				definition="An alert that incorrectly detects the presence of a threat."
			/>
			<GlossaryItem
				term="Final Report"
				definition="Documentation that provides a comprehensive review of an incident."
			/>

			<Text style={styles.letterSection}>H</Text>
			<GlossaryItem
				term="Honeypot"
				definition="A system or resource created as a decoy vulnerable to attacks with the purpose of attracting potential intruders."
			/>
			<GlossaryItem
				term="Host-Based Intrusion Detection System (HIDS)"
				definition="An application that monitors the activity of the host on which it’s installed."
			/>

			<Text style={styles.letterSection}>I</Text>
			<GlossaryItem
				term="Incident"
				definition="An occurrence that actually or imminently jeopardizes, without lawful authority, the confidentiality, integrity, or availability of information or an information system; or constitutes a violation or imminent threat of violation of law, security policies, security procedures, or acceptable use policies."
			/>
			<GlossaryItem
				term="Incident Handler’s Journal"
				definition="A form of documentation used in incident response."
			/>
			<GlossaryItem
				term="Incident Response Plan"
				definition="A document that outlines the procedures to take in each step of incident response."
			/>
			<GlossaryItem
				term="Indicators of Attack (IOA)"
				definition="The series of observed events that indicate a real-time incident."
			/>
			<GlossaryItem
				term="Indicators of Compromise (IOC)"
				definition="Observable evidence that suggests signs of a potential security incident."
			/>
			<GlossaryItem
				term="Internet Protocol (IP)"
				definition="A set of standards used for routing and addressing data packets as they travel between devices on a network."
			/>
			<GlossaryItem
				term="Intrusion Detection System (IDS)"
				definition="An application that monitors system activity and alerts on possible intrusions."
			/>
			<GlossaryItem
				term="Intrusion Prevention System (IPS)"
				definition="An application that monitors system activity for intrusive activity and takes action to stop the activity."
			/>

			<Text style={styles.letterSection}>K</Text>
			<GlossaryItem
				term="Key-Value Pair"
				definition="A set of data that represents two linked items: a key, and its corresponding value."
			/>

			<Text style={styles.letterSection}>L</Text>
			<GlossaryItem
				term="Lessons Learned Meeting"
				definition="A meeting that includes all involved parties after a major incident."
			/>
			<GlossaryItem
				term="Log Analysis"
				definition="The process of examining logs to identify events of interest."
			/>
			<GlossaryItem
				term="Log Management"
				definition="The process of collecting, storing, analyzing, and disposing of log data."
			/>
			<GlossaryItem
				term="Logging"
				definition="The recording of events occurring on computer systems and networks."
			/>

			<Text style={styles.letterSection}>M</Text>
			<GlossaryItem
				term="Media Access Control (MAC) Address"
				definition="A unique alphanumeric identifier that is assigned to each physical device on a network."
			/>

			<Text style={styles.letterSection}>N</Text>
			<GlossaryItem
				term="National Institute of Standards and Technology (NIST) Incident Response Lifecycle"
				definition="A framework for incident response consisting of four phases: preparation; detection and analysis; containment, eradication, and recovery; and post-incident activity."
			/>
			<GlossaryItem
				term="Network-Based Intrusion Detection System (NIDS)"
				definition="An application that collects and monitors network traffic and network data."
			/>
			<GlossaryItem
				term="Network Data"
				definition="The data that’s transmitted between devices on a network."
			/>
			<GlossaryItem
				term="Network Interface Card (NIC)"
				definition="Hardware that connects computers to a network."
			/>
			<GlossaryItem
				term="Network Protocol Analyzer (Packet Sniffer)"
				definition="A tool designed to capture and analyze data traffic within a network."
			/>
			<GlossaryItem
				term="Network Traffic"
				definition="The amount of data that moves across a network."
			/>

			<Text style={styles.letterSection}>O</Text>
			<GlossaryItem
				term="Object"
				definition="A data type that stores data in a comma-separated list of key-value pairs."
			/>
			<GlossaryItem
				term="Open-Source Intelligence (OSINT)"
				definition="The collection and analysis of information from publicly available sources to generate usable intelligence."
			/>

			<Text style={styles.letterSection}>P</Text>
			<GlossaryItem
				term="Packet Capture (p-Cap)"
				definition="A file containing data packets intercepted from an interface or network."
			/>
			<GlossaryItem
				term="Packet Sniffing"
				definition="The practice of capturing and inspecting data packets across a network."
			/>
			<GlossaryItem
				term="Playbook"
				definition="A manual that provides details about any operational action."
			/>
			<GlossaryItem
				term="Post-Incident Activity"
				definition="The process of reviewing an incident to identify areas for improvement during incident handling."
			/>

			<Text style={styles.letterSection}>R</Text>
			<GlossaryItem
				term="Recovery"
				definition="The process of returning affected systems back to normal operations."
			/>
			<GlossaryItem
				term="Resilience"
				definition="The ability to prepare for, respond to, and recover from disruptions."
			/>
			<GlossaryItem
				term="Root User (or Superuser)"
				definition="A user with elevated privileges to modify the system."
			/>

			<Text style={styles.letterSection}>S</Text>
			<GlossaryItem
				term="Search Processing Language (SPL)"
				definition="Splunk’s query language."
			/>
			<GlossaryItem
				term="Security Information and Event Management (SIEM)"
				definition="An application that collects and analyzes log data to monitor critical activities in an organization."
			/>
			<GlossaryItem
				term="Security Operations Center (SOC)"
				definition="An organizational unit dedicated to monitoring networks, systems, and devices for security threats or attacks."
			/>
			<GlossaryItem
				term="Security Orchestration, Automation, and Response (SOAR)"
				definition="A collection of applications, tools, and workflows that use automation to respond to security events."
			/>
			<GlossaryItem
				term="Signature"
				definition="A pattern that is associated with malicious activity."
			/>
			<GlossaryItem
				term="Signature Analysis"
				definition="A detection method used to find events of interest."
			/>
			<GlossaryItem
				term="Standards"
				definition="References that inform how to set policies."
			/>
			<GlossaryItem
				term="Sudo"
				definition="A command that temporarily grants elevated permissions to specific users."
			/>
			<GlossaryItem
				term="Suricata"
				definition="An open-source intrusion detection system and intrusion prevention system."
			/>
			<Text style={styles.letterSection}>T</Text>
			<GlossaryItem
				term="Tcpdump"
				definition="A command-line network protocol analyzer."
			/>
			<GlossaryItem
				term="Telemetry"
				definition="The collection and transmission of data for analysis."
			/>
			<GlossaryItem
				term="Threat Hunting"
				definition="The proactive search for threats on a network."
			/>
			<GlossaryItem
				term="Threat Intelligence"
				definition="Evidence-based threat information that provides context about existing or emerging threats."
			/>
			<GlossaryItem
				term="Triage"
				definition="The prioritizing of incidents according to their level of importance or urgency."
			/>
			<GlossaryItem
				term="True Negative"
				definition="A state where there is no detection of malicious activity."
			/>
			<GlossaryItem
				term="True Positive"
				definition="An alert that correctly detects the presence of an attack."
			/>

			<Text style={styles.letterSection}>V</Text>
			<GlossaryItem
				term="Virustotal"
				definition="A service that allows anyone to analyze suspicious files, domains, URLs, and IP addresses for malicious content."
			/>

			<Text style={styles.letterSection}>W</Text>
			<GlossaryItem
				term="Wildcard"
				definition="A special character that can be substituted with any other character."
			/>
			<GlossaryItem
				term="Wireshark"
				definition="An open-source network protocol analyzer."
			/>

			<Text style={styles.letterSection}>Y</Text>
			<GlossaryItem
				term="Yara-L"
				definition="A computer language used to create rules for searching through ingested log data."
			/>

			<Text style={styles.letterSection}>Z</Text>
			<GlossaryItem
				term="Zero-Day"
				definition="An exploit that was previously unknown."
			/>
		</ScrollView>
	);
};

const GlossaryItem = ({ term, definition }) => (
	<View style={styles.glossaryItem}>
		<Text style={styles.term}>{term}</Text>
		<Text style={styles.definition}>{definition}</Text>
	</View>
);

export default Glossary5;
