import { View, Text, ScrollView } from "react-native";
import React from "react";
import { styles } from "./styles";

const Glossary4 = () => {
	return (
		<ScrollView style={styles.container}  contentContainerStyle={{paddingVertical:16}}>
			<Text style={styles.heading}>Chapter Four: Glossary</Text>

			<Text style={styles.letterSection}>A</Text>
			<GlossaryItem
				term="Access Controls"
				definition="Security controls that manage access, authorization, and accountability of information."
			/>
			<GlossaryItem
				term="Adware"
				definition="A type of legitimate software that is sometimes used to display digital advertisements in applications."
			/>
			<GlossaryItem
				term="Advanced Persistent Threat (APT)"
				definition="An instance when a threat actor maintains unauthorized access to a system for an extended period of time."
			/>
			<GlossaryItem
				term="Algorithm"
				definition="A set of rules used to solve a problem."
			/>
			<GlossaryItem
				term="Angler Phishing"
				definition="A technique where attackers impersonate customer service representatives on social media."
			/>
			<GlossaryItem
				term="Application Programming Interface (API) Token"
				definition="A small block of encrypted code that contains information about a user."
			/>
			<GlossaryItem
				term="Asset"
				definition="An item perceived as having value to an organization."
			/>
			<GlossaryItem
				term="Asset Classification"
				definition="The practice of labeling assets based on sensitivity and importance to an organization."
			/>
			<GlossaryItem
				term="Asset Inventory"
				definition="A catalog of assets that need to be protected."
			/>
			<GlossaryItem
				term="Asset Management"
				definition="The process of tracking assets and the risks that affect them."
			/>
			<GlossaryItem
				term="Asymmetric Encryption"
				definition="The use of a public and private key pair for encryption and decryption of data."
			/>
			<GlossaryItem
				term="Attack Surface"
				definition="The characteristics and features of the areas where an attack can come from."
			/>
			<GlossaryItem
				term="Attack Tree"
				definition="A diagram that maps threats to assets."
			/>
			<GlossaryItem
				term="Attack Vector"
				definition="The pathways attackers use to penetrate security defenses."
			/>

			<Text style={styles.letterSection}>B</Text>
			<GlossaryItem
				term="Baiting"
				definition="A social engineering tactic that tempts people into compromising their security."
			/>
			<GlossaryItem
				term="Basic Auth"
				definition="The technology used to establish a user’s request to access a server."
			/>
			<GlossaryItem
				term="Bit"
				definition="The smallest unit of data measurement on a computer."
			/>
			<GlossaryItem
				term="Botnet"
				definition="A collection of computers infected by malware that are under the control of a single threat actor, known as the 'bot-herder.'"
			/>
			<GlossaryItem
				term="Brute Force Attack"
				definition="The trial and error process of discovering private information."
			/>
			<GlossaryItem
				term="Bug Bounty"
				definition="Programs that encourage freelance hackers to find and report vulnerabilities."
			/>

			<Text style={styles.letterSection}>C</Text>
			<GlossaryItem
				term="Cipher"
				definition="An algorithm that encrypts information."
			/>
			<GlossaryItem
				term="Common Vulnerabilities and Exposures (CVE®) List"
				definition="An openly accessible dictionary of known vulnerabilities and exposures."
			/>
			<GlossaryItem
				term="Common Vulnerability Scoring System (CVSS)"
				definition="A measurement system that scores the severity of a vulnerability."
			/>
			<GlossaryItem
				term="Compliance"
				definition="The process of adhering to internal standards and external regulations."
			/>
			<GlossaryItem term="Computer Virus" definition="See 'Virus.'" />
			<GlossaryItem
				term="Cross-Site Scripting (XSS)"
				definition="An injection attack that inserts code into a vulnerable website or web application."
			/>
			<GlossaryItem
				term="Cryptojacking"
				definition="A form of malware that installs software to illegally mine cryptocurrencies."
			/>
			<GlossaryItem
				term="Cryptographic Key"
				definition="A mechanism that decrypts ciphertext."
			/>
			<GlossaryItem
				term="Cryptography"
				definition="The process of transforming information into a form that unintended readers can’t understand."
			/>
			<GlossaryItem
				term="CVE Numbering Authority (CNA)"
				definition="An organization that volunteers to analyze and distribute information on eligible CVEs."
			/>

			<Text style={styles.letterSection}>D</Text>
			<GlossaryItem
				term="Data"
				definition="Information that is translated, processed, or stored by a computer."
			/>
			<GlossaryItem
				term="Data At Rest"
				definition="Data not currently being accessed."
			/>
			<GlossaryItem
				term="Data In Transit"
				definition="Data traveling from one point to another."
			/>
			<GlossaryItem
				term="Data In Use"
				definition="Data being accessed by one or more users."
			/>
			<GlossaryItem
				term="Data Custodian"
				definition="Anyone or anything that’s responsible for the safe handling, transport, and storage of information."
			/>
			<GlossaryItem
				term="Data Owner"
				definition="The person that decides who can access, edit, use, or destroy their information."
			/>
			<GlossaryItem
				term="Defense In Depth"
				definition="A layered approach to vulnerability management that reduces risk."
			/>
			<GlossaryItem
				term="Digital Certificate"
				definition="A file that verifies the identity of a public key holder."
			/>
			<GlossaryItem
				term="DOM-Based XSS Attack"
				definition="An instance when malicious script exists in the webpage a browser loads."
			/>
			<GlossaryItem
				term="Dropper"
				definition="A type of malware that comes packed with malicious code, which is delivered and installed onto a target system."
			/>

			<Text style={styles.letterSection}>E</Text>
			<GlossaryItem
				term="Encryption"
				definition="The process of converting data from a readable format to an encoded format."
			/>
			<GlossaryItem
				term="Exploit"
				definition="A way of taking advantage of a vulnerability."
			/>
			<GlossaryItem
				term="Exposure"
				definition="A mistake that can be exploited by a threat."
			/>

			<Text style={styles.letterSection}>F</Text>
			<GlossaryItem
				term="Fileless Malware"
				definition="Malware that does not need to be installed by the user because it uses legitimate programs that are already installed to infect a computer."
			/>

			<Text style={styles.letterSection}>H</Text>
			<GlossaryItem
				term="Hacker"
				definition="Any person who uses computers to gain access to computer systems, networks, or data."
			/>
			<GlossaryItem
				term="Hash Collision"
				definition="An instance when different inputs produce the same hash value."
			/>
			<GlossaryItem
				term="Hash Function"
				definition="An algorithm that produces a code that can’t be decrypted."
			/>
			<GlossaryItem
				term="Hash Table"
				definition="A data structure that's used to store and reference hash values."
			/>
			<Text style={styles.letterSection}>I</Text>
			<GlossaryItem
				term="Identity and Access Management (IAM)"
				definition="A collection of processes and technologies that helps organizations manage digital identities in their environment."
			/>
			<GlossaryItem
				term="Information Privacy"
				definition="The protection of unauthorized access and distribution of data."
			/>
			<GlossaryItem
				term="Information Security (Infosec)"
				definition="The practice of keeping data in all states away from unauthorized users."
			/>
			<GlossaryItem
				term="Injection Attack"
				definition="Malicious code inserted into a vulnerable application."
			/>
			<GlossaryItem
				term="Input Validation"
				definition="Programming that validates inputs from users and other programs."
			/>
			<GlossaryItem
				term="Intrusion Detection System (IDS)"
				definition="An application that monitors system activity and alerts on possible intrusions."
			/>

			<Text style={styles.letterSection}>L</Text>
			<GlossaryItem
				term="Loader"
				definition="A type of malware that downloads strains of malicious code from an external source and installs them onto a target system."
			/>

			<Text style={styles.letterSection}>M</Text>
			<GlossaryItem
				term="Malware"
				definition="Software designed to harm devices or networks."
			/>
			<GlossaryItem
				term="MITRE"
				definition="A collection of non-profit research and development centers."
			/>
			<GlossaryItem
				term="Multi-Factor Authentication (MFA)"
				definition="A technology that requires at least two distinct forms of identification."
			/>

			<Text style={styles.letterSection}>N</Text>
			<GlossaryItem
				term="National Institute of Standards and Technology (NIST) Cybersecurity Framework (CSF)"
				definition="A voluntary framework that consists of standards, guidelines, and best practices to manage cybersecurity risk."
			/>
			<GlossaryItem
				term="Non-Repudiation"
				definition="The concept that the authenticity of information can’t be denied."
			/>

			<Text style={styles.letterSection}>O</Text>
			<GlossaryItem
				term="OAuth"
				definition="An open-standard authorization protocol that shares designated access between applications."
			/>

			<Text style={styles.letterSection}>P</Text>
			<GlossaryItem
				term="Process of Attack Simulation and Threat Analysis (PASTA)"
				definition="A popular threat modeling framework that’s used across many industries."
			/>
			<GlossaryItem
				term="Payment Card Industry Data Security Standards (PCI DSS)"
				definition="A set of security standards formed by major organizations in the financial industry."
			/>
			<GlossaryItem
				term="Personally Identifiable Information (PII)"
				definition="Any information used to infer an individual's identity."
			/>
			<GlossaryItem
				term="Phishing"
				definition="The use of digital communications to trick people into revealing sensitive data or deploying malicious software."
			/>
			<GlossaryItem
				term="Phishing Kit"
				definition="A collection of software tools needed to launch a phishing campaign."
			/>
			<GlossaryItem
				term="Policy"
				definition="A set of rules that reduce risk and protect information."
			/>
			<GlossaryItem
				term="Potentially Unwanted Application (PUA)"
				definition="A type of unwanted software that is bundled in with legitimate programs, which might display ads, cause device slowdown, or install other software."
			/>
			<GlossaryItem
				term="Prepared Statement"
				definition="A coding technique that executes SQL statements before passing them onto the database."
			/>
			<GlossaryItem
				term="Principle of Least Privilege"
				definition="The concept of granting only the minimal access and authorization required to complete a task or function."
			/>
			<GlossaryItem
				term="Procedures"
				definition="Step-by-step instructions to perform a specific security task."
			/>
			<GlossaryItem
				term="Protected Health Information (PHI)"
				definition="Information that relates to the past, present, or future physical or mental health or condition of an individual."
			/>
			<GlossaryItem
				term="Public Key Infrastructure (PKI)"
				definition="An encryption framework that secures the exchange of online information."
			/>

			<Text style={styles.letterSection}>Q</Text>
			<GlossaryItem
				term="Quid Pro Quo"
				definition="A type of baiting used to trick someone into believing that they’ll be rewarded in return for sharing access, information, or money."
			/>

			<Text style={styles.letterSection}>R</Text>
			<GlossaryItem
				term="Rainbow Table"
				definition="A file of pre-generated hash values and their associated plaintext."
			/>
			<GlossaryItem
				term="Ransomware"
				definition="Type of malicious attack where attackers encrypt an organization’s data and demand payment to restore access."
			/>
			<GlossaryItem
				term="Regulations"
				definition="Rules set by a government or other authority to control the way something is done."
			/>
			<GlossaryItem
				term="Reflected XSS Attack"
				definition="An instance when malicious script is sent to a server and activated during the server’s response."
			/>
			<GlossaryItem
				term="Risk"
				definition="Anything that can impact confidentiality, integrity, or availability of an asset."
			/>
			<GlossaryItem
				term="Rootkit"
				definition="Malware that provides remote, administrative access to a computer."
			/>

			<Text style={styles.letterSection}>S</Text>
			<GlossaryItem
				term="Salting"
				definition="An additional safeguard that’s used to strengthen hash functions."
			/>
			<GlossaryItem
				term="Scareware"
				definition="Malware that employs tactics to frighten users into infecting their device."
			/>
			<GlossaryItem
				term="Security Assessment"
				definition="A check to determine how resilient current security implementations are against threats."
			/>
			<GlossaryItem
				term="Security Audit"
				definition="A review of an organization's security controls, policies, and procedures against a set of expectations."
			/>
			<GlossaryItem
				term="Security Controls"
				definition="Safeguards designed to reduce specific security risks."
			/>
			<GlossaryItem
				term="Security Hardening"
				definition="The process of strengthening a system to reduce its vulnerability and attack surface."
			/>
			<GlossaryItem
				term="Separation of Duties"
				definition="The principle that users should not be given levels of authorization that would allow them to misuse a system."
			/>
			<GlossaryItem
				term="Session"
				definition="A sequence of network HTTP basic auth requests and responses associated with the same user."
			/>
			<GlossaryItem
				term="Session Cookie"
				definition="A token that websites use to validate a session and determine how long that session should last."
			/>
			<GlossaryItem
				term="Session Hijacking"
				definition="An event when attackers obtain a legitimate user’s session ID."
			/>
			<GlossaryItem
				term="Session ID"
				definition="A unique token that identifies a user and their device while accessing a system."
			/>
			<GlossaryItem
				term="Single Sign-On (SSO)"
				definition="A technology that combines several different logins into one."
			/>
			<GlossaryItem
				term="Smishing"
				definition="The use of text messages to trick users into obtaining sensitive information or to impersonate a known source."
			/>
			<GlossaryItem
				term="Social Engineering"
				definition="A manipulation technique that exploits human error to gain private information, access, or valuables."
			/>
			<GlossaryItem
				term="Spear Phishing"
				definition="A malicious email attack targeting a specific user or group of users, appearing to originate from a trusted source."
			/>
			<GlossaryItem
				term="Spyware"
				definition="Malware that’s used to gather and sell information without consent."
			/>
			<GlossaryItem
				term="SQL (Structured Query Language)"
				definition="A programming language used to create, interact with, and request information from a database."
			/>
			<GlossaryItem
				term="SQL Injection"
				definition="An attack that executes unexpected queries on a database."
			/>
			<GlossaryItem
				term="Standards"
				definition="References that inform how to set policies."
			/>
			<GlossaryItem
				term="Stored XSS Attack"
				definition="An instance when a malicious script is injected directly on the server."
			/>
			<GlossaryItem
				term="Symmetric Encryption"
				definition="The use of a single secret key to exchange information."
			/>
			<Text style={styles.letterSection}>T</Text>
			<GlossaryItem
				term="Tailgating"
				definition="A social engineering tactic in which unauthorized people follow an authorized person into a restricted area."
			/>
			<GlossaryItem
				term="Threat"
				definition="Any circumstance or event that can negatively impact assets."
			/>
			<GlossaryItem
				term="Threat Actor"
				definition="Any person or group who presents a security risk."
			/>
			<GlossaryItem
				term="Threat Modeling"
				definition="The process of identifying assets, their vulnerabilities, and how each is exposed to threats."
			/>
			<GlossaryItem
				term="Trojan Horse"
				definition="Malware that looks like a legitimate file or program."
			/>

			<Text style={styles.letterSection}>U</Text>
			<GlossaryItem
				term="User Provisioning"
				definition="The process of creating and maintaining a user's digital identity."
			/>

			<Text style={styles.letterSection}>V</Text>
			<GlossaryItem
				term="Virus"
				definition="Malicious code written to interfere with computer operations and cause damage to data and software."
			/>
			<GlossaryItem
				term="Vishing"
				definition="The exploitation of electronic voice communication to obtain sensitive information or to impersonate a known source."
			/>
			<GlossaryItem
				term="Vulnerability"
				definition="A weakness that can be exploited by a threat."
			/>
			<GlossaryItem
				term="Vulnerability Scanner"
				definition="Software that automatically compares existing common vulnerabilities and exposures against the technologies on the network."
			/>
			<GlossaryItem
				term="Vulnerability Assessment"
				definition="The internal review process of a company’s security systems."
			/>
			<GlossaryItem
				term="Vulnerability Management"
				definition="The process of finding and patching vulnerabilities."
			/>

			<Text style={styles.letterSection}>W</Text>
			<GlossaryItem
				term="Watering Hole Attack"
				definition="A type of attack when a threat actor compromises a website frequently visited by a specific group of users."
			/>
			<GlossaryItem
				term="Whaling"
				definition="A category of spear phishing attempts that are aimed at high-ranking executives in an organization."
			/>
			<GlossaryItem
				term="Web-Based Exploits"
				definition="Malicious code or behavior that’s used to take advantage of coding flaws in a web application."
			/>
			<GlossaryItem
				term="Worm"
				definition="Malware that can duplicate and spread itself across systems on its own."
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

export default Glossary4;
