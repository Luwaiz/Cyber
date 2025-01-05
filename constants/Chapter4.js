import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { colors } from "../constants/styling";

export const Quiz4 = [
	{
		question: "What is the primary goal of risk management?",
		answer: 4,
		options: [
			{ id: 1, option: "To eliminate all risks" },
			{ id: 2, option: "To minimize the impact of risks" },
			{ id: 3, option: "To transfer risks to other parties" },
			{ id: 4, option: "To accept and manage risks" },
		],
	},
	{
		question:
			"Which of the following is a step in the risk management process?",
		answer: 4,
		options: [
			{ id: 1, option: "Risk identification" },
			{ id: 2, option: "Risk assessment" },
			{ id: 3, option: "Risk mitigation" },
			{ id: 4, option: "All of the above" },
		],
	},
	{
		question: "What is the purpose of a risk assessment?",
		answer: 2,
		options: [
			{ id: 1, option: "To identify potential risks" },
			{ id: 2, option: "To assess the likelihood and impact of risks" },
			{ id: 3, option: "To implement risk mitigation measures" },
			{ id: 4, option: "To monitor and review risks" },
		],
	},
	{
		question: "Which of the following is a type of risk?",
		answer: 4,
		options: [
			{ id: 1, option: "Strategic risk" },
			{ id: 2, option: "Operational risk" },
			{ id: 3, option: "Financial risk" },
			{ id: 4, option: "All of the above" },
		],
	},
	{
		question: "What is the purpose of a risk management plan?",
		answer: 4,
		options: [
			{ id: 1, option: "To identify potential risks" },
			{ id: 2, option: "To assess the likelihood and impact of risks" },
			{ id: 3, option: "To implement risk mitigation measures" },
			{ id: 4, option: "To provide a framework for managing risks" },
		],
	},
	{
		question: "What is an asset in the context of risk management?",
		answer: 1,
		options: [
			{ id: 1, option: "A resource that is valuable to an organization" },
			{ id: 2, option: "A threat to an organization's resources" },
			{ id: 3, option: "A vulnerability in an organization's systems" },
			{ id: 4, option: "A risk to an organization's assets" },
		],
	},
	{
		question: "Which of the following is an example of an asset?",
		answer: 4,
		options: [
			{ id: 1, option: "A company's financial data" },
			{ id: 2, option: "A company's employee data" },
			{ id: 3, option: "A company's customer data" },
			{ id: 4, option: "All of the above" },
		],
	},
	{
		question: "What is the purpose of asset classification?",
		answer: 4,
		options: [
			{
				id: 1,
				option: "To identify potential risks to an organization's assets",
			},
			{
				id: 2,
				option:
					"To assess the likelihood and impact of risks to an organization's assets",
			},
			{
				id: 3,
				option:
					"To implement risk mitigation measures to protect an organization's assets",
			},
			{
				id: 4,
				option: "To provide a framework for managing an organization's assets",
			},
		],
	},
	{
		question: "Which of the following is a benefit of asset management?",
		answer: 4,
		options: [
			{ id: 1, option: "Improved security posture" },
			{ id: 2, option: "Enhanced compliance" },
			{ id: 3, option: "Increased efficiency" },
			{ id: 4, option: "All of the above" },
		],
	},
	{
		question: "What is the purpose of asset inventory?",
		answer: 4,
		options: [
			{
				id: 1,
				option: "To identify potential risks to an organization's assets",
			},
			{
				id: 2,
				option:
					"To assess the likelihood and impact of risks to an organization's assets",
			},
			{
				id: 3,
				option:
					"To implement risk mitigation measures to protect an organization's assets",
			},
			{ id: 4, option: "To maintain a list of an organization's assets" },
		],
	},
	{
		question: "What is a vulnerability in the context of risk management?",
		answer: 1,
		options: [
			{ id: 1, option: "A weakness in an organization's systems or processes" },
			{ id: 2, option: "A threat to an organization's resources" },
			{ id: 3, option: "A risk to an organization's assets" },
			{
				id: 4,
				option: "A control to mitigate risks to an organization's assets",
			},
		],
	},
	{
		question: "Which of the following is an example of a vulnerability?",
		answer: 4,
		options: [
			{ id: 1, option: "A software bug" },
			{ id: 2, option: "A misconfigured system" },
			{ id: 3, option: "A weak password" },
			{ id: 4, option: "All of the above" },
		],
	},
	{
		question: "What is the purpose of vulnerability scanning?",
		answer: 1,
		options: [
			{
				id: 1,
				option:
					"To identify potential vulnerabilities in an organization's systems",
			},
			{
				id: 2,
				option: "To assess the likelihood and impact of vulnerabilities",
			},
			{
				id: 3,
				option:
					"To implement risk mitigation measures to address vulnerabilities",
			},
			{ id: 4, option: "To provide a framework for managing vulnerabilities" },
		],
	},
	{
		question:
			"Which of the following is a benefit of vulnerability management?",
		answer: 4,
		options: [
			{ id: 1, option: "Improved security posture" },
			{ id: 2, option: "Enhanced compliance" },
			{ id: 3, option: "Increased efficiency" },
			{ id: 4, option: "All of the above" },
		],
	},
	{
		question: "What is the purpose of a vulnerability management plan?",
		answer: 4,
		options: [
			{
				id: 1,
				option:
					"To identify potential vulnerabilities in an organization's systems",
			},
			{
				id: 2,
				option: "To assess the likelihood and impact of vulnerabilities",
			},
			{
				id: 3,
				option:
					"To implement risk mitigation measures to address vulnerabilities",
			},
			{ id: 4, option: "To provide a framework for managing vulnerabilities" },
		],
	},
	{
		question: "What is a security control in the context of risk management?",
		answer: 1,
		options: [
			{
				id: 1,
				option: "A measure to mitigate risks to an organization's assets",
			},
			{ id: 2, option: "A threat to an organization's resources" },
			{ id: 3, option: "A vulnerability in an organization's systems" },
			{ id: 4, option: "A risk to an organization's assets" },
		],
	},
	{
		question: "Which of the following is an example of a security control?",
		answer: 4,
		options: [
			{ id: 1, option: "A firewall" },
			{ id: 2, option: "An intrusion detection system" },
			{ id: 3, option: "An encryption algorithm" },
			{ id: 4, option: "All of the above" },
		],
	},
	{
		question: "What is the primary purpose of cryptography?",
		answer: 1,
		options: [
			{ id: 1, option: "To provide secure data transmission" },
			{ id: 2, option: "To provide secure data storage" },
			{ id: 3, option: "To provide secure authentication" },
			{ id: 4, option: "To provide secure authorization" },
		],
	},
	{
		question:
			"Which of the following cryptographic techniques is used for encryption?",
		answer: 3,
		options: [
			{ id: 1, option: "Hashing" },
			{ id: 2, option: "Digital signatures" },
			{ id: 3, option: "Symmetric encryption" },
			{ id: 4, option: "Asymmetric encryption" },
		],
	},
	{
		question:
			"What is the difference between symmetric and asymmetric encryption?",
		answer: 1,
		options: [
			{
				id: 1,
				option:
					"Symmetric encryption uses the same key for encryption and decryption, while asymmetric encryption uses different keys.",
			},
			{
				id: 2,
				option:
					"Symmetric encryption uses different keys for encryption and decryption, while asymmetric encryption uses the same key.",
			},
			{
				id: 3,
				option: "Symmetric encryption is faster than asymmetric encryption.",
			},
			{
				id: 4,
				option: "Asymmetric encryption is faster than symmetric encryption.",
			},
		],
	},
	{
		question:
			"Which of the following cryptographic protocols is used for secure web browsing?",
		answer: 1,
		options: [
			{ id: 1, option: "HTTPS" },
			{ id: 2, option: "SSH" },
			{ id: 3, option: "FTP" },
			{ id: 4, option: "SFTP" },
		],
	},
	{
		question: "What is the purpose of a digital certificate?",
		answer: 4,
		options: [
			{ id: 1, option: "To provide secure authentication" },
			{ id: 2, option: "To provide secure authorization" },
			{ id: 3, option: "To provide secure encryption" },
			{ id: 4, option: "To verify the identity of a website or organization." },
		],
	},
	{
		question:
			"Which of the following cryptographic techniques is used for data integrity?",
		answer: 1,
		options: [
			{ id: 1, option: "Hashing" },
			{ id: 2, option: "Digital signatures" },
			{ id: 3, option: "Symmetric encryption" },
			{ id: 4, option: "Asymmetric encryption" },
		],
	},
	{
		question: "What is the purpose of a hash function?",
		answer: 3,
		options: [
			{ id: 1, option: "To provide secure encryption" },
			{ id: 2, option: "To provide secure authentication" },
			{ id: 3, option: "To provide data integrity" },
			{ id: 4, option: "To provide secure authorization" },
		],
	},
	{
		question: "What is the primary purpose of asset control?",
		answer: 3,
		options: [
			{ id: 1, option: "To provide secure data transmission" },
			{ id: 2, option: "To provide secure data storage" },
			{ id: 3, option: "To control access to sensitive assets" },
			{ id: 4, option: "To provide secure authentication" },
		],
	},
	{
		question:
			"Which of the following asset control measures is used to restrict access to sensitive assets?",
		answer: 4,
		options: [
			{ id: 1, option: "Access control lists (ACLs)" },
			{ id: 2, option: "Role-based access control (RBAC)" },
			{ id: 3, option: "Mandatory access control (MAC)" },
			{ id: 4, option: "All of the above" },
		],
	},
	{
		question: "What is the purpose of a least privilege principle?",
		answer: 3,
		options: [
			{ id: 1, option: "To provide secure authentication" },
			{ id: 2, option: "To provide secure authorization" },
			{ id: 3, option: "To restrict access to sensitive assets" },
			{ id: 4, option: "To provide secure data transmission" },
		],
	},
	{
		question:
			"Which of the following asset control measures is used to monitor and track access to sensitive assets?",
		answer: 4,
		options: [
			{ id: 1, option: "Auditing" },
			{ id: 2, option: "Logging" },
			{ id: 3, option: "Monitoring" },
			{ id: 4, option: "All of the above" },
		],
	},
	{
		question: "What is the purpose of a separation of duties principle?",
		answer: 4,
		options: [
			{ id: 1, option: "To provide secure authentication" },
			{ id: 2, option: "To provide secure authorization" },
			{ id: 3, option: "To restrict access to sensitive assets" },
			{
				id: 4,
				option:
					"To prevent a single individual from having too much control over sensitive assets.",
			},
		],
	},
	{
		question:
			"Which of the following asset control measures is used to classify and label sensitive assets?",
		answer: 4,
		options: [
			{ id: 1, option: "Data classification" },
			{ id: 2, option: "Data labeling" },
			{ id: 3, option: "Access control" },
			{ id: 4, option: "All of the above" },
		],
	},
	{
		question: "What is the primary purpose of an authentication system?",
		answer: 3,
		options: [
			{ id: 1, option: "To provide secure data transmission" },
			{ id: 2, option: "To provide secure data storage" },
			{ id: 3, option: "To verify the identity of users or systems" },
			{ id: 4, option: "To provide secure authorization" },
		],
	},
	{
		question:
			"Which of the following authentication protocols is used for secure remote access?",
		answer: 4,
		options: [
			{ id: 1, option: "RADIUS" },
			{ id: 2, option: "TACACS+" },
			{ id: 3, option: "Kerberos" },
			{ id: 4, option: "All of the above" },
		],
	},
	{
		question: "What is the purpose of a password policy?",
		answer: 4,
		options: [
			{ id: 1, option: "To provide secure authentication" },
			{ id: 2, option: "To provide secure authorization" },
			{ id: 3, option: "To restrict access to sensitive assets" },
			{ id: 4, option: "To ensure that passwords are strong and unique." },
		],
	},
	{
		question:
			"Which of the following authentication methods is considered the most secure?",
		answer: 2,
		options: [
			{ id: 1, option: "Single-factor authentication" },
			{ id: 2, option: "Multi-factor authentication" },
			{ id: 3, option: "Biometric authentication" },
			{ id: 4, option: "Smart card authentication" },
		],
	},
	{
		question:
			"What is the purpose of a challenge-response authentication mechanism?",
		answer: 4,
		options: [
			{ id: 1, option: "To provide secure authentication" },
			{ id: 2, option: "To provide secure authorization" },
			{ id: 3, option: "To restrict access to sensitive assets" },
			{ id: 4, option: "To verify the identity of users or systems." },
		],
	},
	{
		question: "What is OSINT?",
		answer: 1,
		options: [
			{ id: 1, option: "Open-Source Intelligence" },
			{ id: 2, option: "Open-Source Investigation" },
			{ id: 3, option: "Open-Source Information" },
			{ id: 4, option: "Open-Source Insight" },
		],
	},
	{
		question: "Which of the following is an example of OSINT?",
		answer: 1,
		options: [
			{ id: 1, option: "Social media monitoring" },
			{ id: 2, option: "Network traffic analysis" },
			{ id: 3, option: "System log analysis" },
			{ id: 4, option: "All of the above" },
		],
	},
	{
		question: "What is the primary goal of OSINT?",
		answer: 4,
		options: [
			{ id: 1, option: "To gather information about a target" },
			{ id: 2, option: "To analyze information about a target" },
			{ id: 3, option: "To use information to make informed decisions" },
			{ id: 4, option: "All of the above" },
		],
	},
	{
		question: "Which of the following tools is commonly used for OSINT?",
		answer: 3,
		options: [
			{ id: 1, option: "Nmap" },
			{ id: 2, option: "Nessus" },
			{ id: 3, option: "Maltego" },
			{ id: 4, option: "Burp Suite" },
		],
	},
	{
		question: "What is the difference between OSINT and HUMINT?",
		answer: 2,
		options: [
			{
				id: 1,
				option:
					"OSINT is human intelligence, while HUMINT is open-source intelligence",
			},
			{
				id: 2,
				option:
					"OSINT is open-source intelligence, while HUMINT is human intelligence",
			},
			{
				id: 3,
				option:
					"OSINT is used for gathering information, while HUMINT is used for analyzing information",
			},
			{
				id: 4,
				option:
					"OSINT is used for analyzing information, while HUMINT is used for gathering information",
			},
		],
	},
	{
		question: "Which of the following is an example of OSINT collection?",
		answer: 3,
		options: [
			{ id: 1, option: "Social engineering" },
			{ id: 2, option: "Phishing" },
			{ id: 3, option: "Open-source research" },
			{ id: 4, option: "All of the above" },
		],
	},
	{
		question: "What is the primary benefit of using OSINT?",
		answer: 4,
		options: [
			{ id: 1, option: "It is a cost-effective way to gather information" },
			{ id: 2, option: "It is a time-effective way to gather information" },
			{ id: 3, option: "It provides a comprehensive view of a target" },
			{ id: 4, option: "All of the above" },
		],
	},
	{
		question: "Which of the following is a challenge associated with OSINT?",
		answer: 4,
		options: [
			{ id: 1, option: "Verifying the accuracy of information" },
			{ id: 2, option: "Ensuring the completeness of information" },
			{ id: 3, option: "Protecting against bias in information" },
			{ id: 4, option: "All of the above" },
		],
	},
	{
		question: "What is the primary goal of OSINT analysis?",
		answer: 1,
		options: [
			{ id: 1, option: "To identify patterns and trends in information" },
			{ id: 2, option: "To verify the accuracy of information" },
			{ id: 3, option: "To ensure the completeness of information" },
			{ id: 4, option: "To protect against bias in information" },
		],
	},
	{
		question: "What is a vulnerability assessment?",
		answer: 1,
		options: [
			{
				id: 1,
				option: "A process of identifying and classifying vulnerabilities",
			},
			{ id: 2, option: "A process of exploiting vulnerabilities" },
			{ id: 3, option: "A process of mitigating vulnerabilities" },
			{ id: 4, option: "A process of monitoring vulnerabilities" },
		],
	},
	{
		question: "Which of the following is a type of vulnerability assessment?",
		answer: 4,
		options: [
			{ id: 1, option: "Network-based vulnerability assessment" },
			{ id: 2, option: "Host-based vulnerability assessment" },
			{ id: 3, option: "Application-based vulnerability assessment" },
			{ id: 4, option: "All of the above" },
		],
	},
	{
		question: "What is the primary goal of a vulnerability assessment?",
		answer: 1,
		options: [
			{ id: 1, option: "To identify vulnerabilities" },
			{ id: 2, option: "To exploit vulnerabilities" },
			{ id: 3, option: "To mitigate vulnerabilities" },
			{ id: 4, option: "To monitor vulnerabilities" },
		],
	},
	{
		question:
			"Which of the following tools is commonly used for vulnerability assessment?",
		answer: 4,
		options: [
			{ id: 1, option: "Nmap" },
			{ id: 2, option: "Nessus" },
			{ id: 3, option: "OpenVAS" },
			{ id: 4, option: "All of the above" },
		],
	},
	{
		question:
			"What is the difference between a vulnerability scan and a penetration test?",
		answer: 1,
		options: [
			{
				id: 1,
				option:
					"A vulnerability scan identifies vulnerabilities, while a penetration test exploits vulnerabilities",
			},
			{
				id: 2,
				option:
					"A vulnerability scan exploits vulnerabilities, while a penetration test identifies vulnerabilities",
			},
			{
				id: 3,
				option:
					"A vulnerability scan is a manual process, while a penetration test is an automated process",
			},
			{
				id: 4,
				option:
					"A vulnerability scan is an automated process, while a penetration test is a manual process",
			},
		],
	},
	{
		question: "Which of the following is a type of cryptography?",
		answer: 3,
		options: [
			{ id: 1, option: "Quantum cryptography" },
			{ id: 2, option: "Steganography" },
			{ id: 3, option: "Symmetric cryptography" },
			{ id: 4, option: "Hashing" },
		],
	},
];

export const Module1 = () => {
	return (
	  <ScrollView style={styles.container}>
		<Text style={styles.heading}>
		  Module 1: Risk, Asset and Vulnerability
		</Text>
  
		<Text style={styles.subHeading}>Risk</Text>
		<Text style={styles.paragraph}>
		  Risk refers to anything that can impact the confidentiality, integrity, or availability of assets. It can come in many forms and poses a potential threat to an organization's critical functions and data.
		</Text>
  
		<Text style={styles.subHeading}>Asset</Text>
		<Text style={styles.paragraph}>
		  Assets are items perceived as having value to an organization. These can include physical devices, intellectual property, data, and other resources critical for the organization’s operations.
		</Text>
  
		<Text style={styles.subHeading}>Threat</Text>
		<Text style={styles.paragraph}>
		  A threat is any circumstance or event that can negatively impact assets. Threats can come from various sources, including natural disasters, cyber-attacks, or human error.
		</Text>
  
		<Text style={styles.subHeading}>Vulnerability</Text>
		<Text style={styles.paragraph}>
		  Vulnerability refers to a weakness that can be exploited by threats. These can be system flaws, unpatched software, or improper configurations that leave an organization exposed to risks.
		</Text>
  
		<Text style={styles.subHeading}>How to Prevent Risk</Text>
		<Text style={styles.paragraph}>
		  To effectively manage and prevent risks, consider the following:
		</Text>
  
		<Text style={styles.paragraph}>
		  - Prevent costly and disruptive events {"\n"}
		  - Identify improvements that can be made to systems and processes {"\n"}
		  - Determine which risks can be tolerated {"\n"}
		  - Prioritize the critical assets that require attention
		</Text>
  
		<Text style={styles.subHeading}>Asset Management</Text>
		<Text style={styles.paragraph}>
		  Asset management involves the process of tracking assets and the risks that affect them. It ensures that assets are properly protected and that the risks associated with them are effectively managed.
		</Text>
  
		<Text style={styles.subHeading}>Asset Inventory</Text>
		<Text style={styles.paragraph}>
		  An asset inventory is a catalog of assets that need to be protected. This list helps organizations identify what needs to be secured and maintained to ensure operational continuity.
		</Text>
  
		<Text style={styles.subHeading}>Asset Classifications</Text>
		<Text style={styles.paragraph}>
		  Asset classification is the practice of labeling assets based on their severity and importance to the organization. Proper classification helps organizations prioritize protection efforts.
		</Text>
  
		<Text style={styles.paragraph}>
		  Levels of Asset Classification:
		</Text>
  
		<Text style={styles.paragraph}>
		  - Public {"\n"}
		  - Confidential {"\n"}
		  - Internal only {"\n"}
		  - Restricted
		</Text>
  
	  </ScrollView>
	);
  };


export const Module2 = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>
        Module 2: Security Control
      </Text>

      <Text style={styles.subHeading}>Security Control</Text>
      <Text style={styles.paragraph}>
        A security control is a measure or mechanism implemented to prevent, detect, or respond to security threats or vulnerabilities. Security controls can be technical, administrative, or physical in nature.
      </Text>

      <Text style={styles.subHeading}>Types of Security Controls</Text>
      <Text style={styles.paragraph}>
        1. Preventive controls: Designed to prevent security breaches or attacks. Examples include firewalls, access controls, and encryption.
      </Text>
      <Text style={styles.paragraph}>
        2. Detective controls: Intended to detect security breaches or attacks. Examples include intrusion detection systems, log monitoring, and security information and event management (SIEM) systems.
      </Text>
      <Text style={styles.paragraph}>
        3. Corrective controls: Implemented to correct or mitigate the effects of a security breach or attack. Examples include incident response plans, backup and recovery processes, and patch management.
      </Text>
      <Text style={styles.paragraph}>
        4. Deterrent controls: Designed to discourage or deter individuals from attempting to breach security. Examples include warning signs, security cameras, and access controls.
      </Text>
      <Text style={styles.paragraph}>
        5. Recovery controls: Implemented to restore systems, data, or operations after a security breach or disruption. Examples include disaster recovery plans, business continuity plans, and backup and recovery processes.
      </Text>

      <Text style={styles.subHeading}>Security Control Categories</Text>
      <Text style={styles.paragraph}>
        1. Technical controls: Include measures such as firewalls, intrusion detection systems, and encryption.
      </Text>
      <Text style={styles.paragraph}>
        2. Administrative controls: Encompass policies, procedures, and training programs that govern security practices.
      </Text>
      <Text style={styles.paragraph}>
        3. Physical controls: Include measures such as access controls, surveillance cameras, and secure storage facilities.
      </Text>

      <Text style={styles.subHeading}>Implementing Security Controls</Text>
      <Text style={styles.paragraph}>
        1. Conduct a risk assessment to identify potential security threats and vulnerabilities.
      </Text>
      <Text style={styles.paragraph}>
        2. Develop a security plan that outlines the security controls to be implemented.
      </Text>
      <Text style={styles.paragraph}>
        3. Implement security controls that address identified risks and vulnerabilities.
      </Text>
      <Text style={styles.paragraph}>
        4. Monitor and evaluate the effectiveness of security controls.
      </Text>
      <Text style={styles.paragraph}>
        5. Continuously update and refine security controls to address emerging threats and vulnerabilities.
      </Text>
    </ScrollView>
  );
};

export const Module3 = () => {
	return (
	  <ScrollView style={styles.container}>
		<Text style={styles.heading}>
		  Module 3: Cryptography
		</Text>
  
		<Text style={styles.subHeading}>Cryptography</Text>
		<Text style={styles.paragraph}>
		  Cryptography is the practice and study of techniques for secure communication in the presence of third-party adversaries. It involves the use of algorithms and protocols to protect the confidentiality, integrity, and authenticity of messages, data, and communications.
		</Text>
  
		<Text style={styles.subHeading}>Goals of Cryptography</Text>
		<Text style={styles.paragraph}>
		  1. Confidentiality: Protecting information from unauthorized access or disclosure.
		</Text>
		<Text style={styles.paragraph}>
		  2. Integrity: Ensuring that information is not modified or tampered with during transmission or storage.
		</Text>
		<Text style={styles.paragraph}>
		  3. Authenticity: Verifying the identity of the sender or receiver of information.
		</Text>
  
		<Text style={styles.subHeading}>Types of Cryptography</Text>
		<Text style={styles.paragraph}>
		  1. Symmetric-key cryptography: Uses the same secret key for both encryption and decryption. Examples include AES and DES.
		</Text>
		<Text style={styles.paragraph}>
		  2. Asymmetric-key cryptography: Uses a pair of keys: a public key for encryption and a private key for decryption. Examples include RSA and elliptic curve cryptography.
		</Text>
		<Text style={styles.paragraph}>
		  3. Hash functions: One-way functions that take input data of any size and produce a fixed-size output, known as a message digest. Examples include SHA-256 and MD5.
		</Text>
  
		<Text style={styles.subHeading}>Cryptography Techniques</Text>
		<Text style={styles.paragraph}>
		  1. Encryption: Converting plaintext data into unreadable ciphertext to protect it from unauthorized access.
		</Text>
		<Text style={styles.paragraph}>
		  2. Decryption: Converting ciphertext back into plaintext data.
		</Text>
		<Text style={styles.paragraph}>
		  3. Digital signatures: Using asymmetric-key cryptography to authenticate the sender of a message and ensure its integrity.
		</Text>
		<Text style={styles.paragraph}>
		  4. Key exchange: Securely exchanging cryptographic keys between parties.
		</Text>
  
		<Text style={styles.subHeading}>Applications of Cryptography</Text>
		<Text style={styles.paragraph}>
		  1. Secure online transactions: Protecting sensitive information, such as credit card numbers and personal data.
		</Text>
		<Text style={styles.paragraph}>
		  2. Secure communication: Protecting emails, instant messages, and other forms of communication.
		</Text>
		<Text style={styles.paragraph}>
		  3. Data protection: Protecting sensitive data, such as financial information and personal identifiable information.
		</Text>
		<Text style={styles.paragraph}>
		  4. Digital rights management: Protecting copyrighted content, such as music and movies.
		</Text>
  
		<Text style={styles.subHeading}>Summary</Text>
		<Text style={styles.paragraph}>
		  In summary, cryptography is a critical component of modern information security, enabling secure communication, data protection, and authentication in a wide range of applications.
		</Text>
	  </ScrollView>
	);
  };

  export const Module4 = () => {
	return (
	  <ScrollView style={styles.container}>
		<Text style={styles.heading}>
		  Module 4: Assets Control and Authentication System
		</Text>
  
		<Text style={styles.subHeading}>Asset Control and Authentication System (ACAS)</Text>
		<Text style={styles.paragraph}>
		  An Asset Control and Authentication System (ACAS) is a security solution designed to manage, monitor, and control access to sensitive assets, such as physical devices, digital data, or intellectual property. The primary goal of an ACAS is to ensure that only authorized individuals or systems can access, use, or modify the protected assets.
		</Text>
  
		<Text style={styles.subHeading}>Key Components of an ACAS</Text>
		<Text style={styles.paragraph}>
		  1. Asset Identification: Inventory and categorization of sensitive assets, including hardware, software, and data.
		</Text>
		<Text style={styles.paragraph}>
		  2. Access Control: Mechanisms to regulate and manage access to assets, such as authentication, authorization, and accounting (AAA) protocols.
		</Text>
		<Text style={styles.paragraph}>
		  3. Authentication: Verification of the identity of users, devices, or systems attempting to access assets, using techniques like passwords, biometrics, or tokens.
		</Text>
		<Text style={styles.paragraph}>
		  4. Authorization: Determination of the level of access or privileges granted to authenticated users or systems, based on their role, clearance, or need-to-know.
		</Text>
		<Text style={styles.paragraph}>
		  5. Accounting and Auditing: Tracking and logging of all access attempts, successful or unsuccessful, to assets, for monitoring, incident response, and compliance purposes.
		</Text>
  
		<Text style={styles.subHeading}>Types of ACAS</Text>
		<Text style={styles.paragraph}>
		  1. Physical ACAS: Controls access to physical assets, such as data centers, servers, or equipment.
		</Text>
		<Text style={styles.paragraph}>
		  2. Logical ACAS: Regulates access to digital assets, including data, applications, or network resources.
		</Text>
		<Text style={styles.paragraph}>
		  3. Hybrid ACAS: Combines physical and logical controls to protect both physical and digital assets.
		</Text>
  
		<Text style={styles.subHeading}>Benefits of an ACAS</Text>
		<Text style={styles.paragraph}>
		  1. Improved Security: Reduces the risk of unauthorized access, data breaches, or asset theft.
		</Text>
		<Text style={styles.paragraph}>
		  2. Compliance: Helps organizations meet regulatory requirements and industry standards for asset protection.
		</Text>
		<Text style={styles.paragraph}>
		  3. Increased Efficiency: Streamlines access management, reduces administrative burdens, and enhances productivity.
		</Text>
		<Text style={styles.paragraph}>
		  4. Better Asset Management: Provides visibility and control over assets, enabling more effective management and decision-making.
		</Text>
  
		<Text style={styles.subHeading}>Examples of ACAS Implementations</Text>
		<Text style={styles.paragraph}>
		  1. Smart cards or tokens: Used for authentication and authorization in physical or logical access control systems.
		</Text>
		<Text style={styles.paragraph}>
		  2. Biometric authentication: Utilizes unique physical characteristics, such as fingerprints or facial recognition, for secure authentication.
		</Text>
		<Text style={styles.paragraph}>
		  3. Role-Based Access Control (RBAC): Grants access to assets based on a user's role or job function within an organization.
		</Text>
		<Text style={styles.paragraph}>
		  4. Encryption: Protects digital assets by converting them into unreadable ciphertext, accessible only with authorized decryption keys.
		</Text>
	  </ScrollView>
	);
  };

  export const Module5 = () => {
	return (
	  <ScrollView style={styles.container}>
		<Text style={styles.heading}>Module 5: OSINT (Open-Source Intelligence)</Text>
  
		<Text style={styles.subHeading}>What is OSINT?</Text>
		<Text style={styles.paragraph}>
		  OSINT (Open-Source Intelligence) refers to the collection and analysis of information from publicly available sources, such as the internet, social media, and other online platforms. This type of intelligence gathering is used to gather information about individuals, organizations, or events without relying on classified or proprietary sources.
		</Text>
  
		<Text style={styles.subHeading}>Types of OSINT</Text>
		<Text style={styles.paragraph}>
		  1. Social Media Intelligence (SOCMINT): Collecting information from social media platforms, such as Twitter, Facebook, and Instagram.
		</Text>
		<Text style={styles.paragraph}>
		  2. Web Intelligence (WEBINT): Gathering information from websites, blogs, and online forums.
		</Text>
		<Text style={styles.paragraph}>
		  3. Geospatial Intelligence (GEOINT): Analyzing satellite and aerial imagery, as well as geospatial data.
		</Text>
		<Text style={styles.paragraph}>
		  4. Human Intelligence (HUMINT): Collecting information from human sources, such as interviews, surveys, and focus groups.
		</Text>
		<Text style={styles.paragraph}>
		  5. Open-Source Data (OSD): Collecting and analyzing data from publicly available sources, such as databases, reports, and documents.
		</Text>
  
		<Text style={styles.subHeading}>OSINT Tools and Techniques</Text>
		<Text style={styles.paragraph}>
		  1. Search engines: Using search engines like Google, Bing, or DuckDuckGo to find information.
		</Text>
		<Text style={styles.paragraph}>
		  2. Social media monitoring tools: Utilizing tools like Hootsuite, Sprout Social, or Brandwatch to monitor social media conversations.
		</Text>
		<Text style={styles.paragraph}>
		  3. Web scraping: Using tools like BeautifulSoup or Scrapy to extract data from websites.
		</Text>
		<Text style={styles.paragraph}>
		  4. Geospatial analysis tools: Utilizing tools like Google Earth, ArcGIS, or QGIS to analyze geospatial data.
		</Text>
		<Text style={styles.paragraph}>
		  5. Data visualization tools: Using tools like Tableau, Power BI, or D3.js to visualize and analyze data.
		</Text>
  
		<Text style={styles.subHeading}>OSINT Applications</Text>
		<Text style={styles.paragraph}>
		  1. National security: OSINT is used by intelligence agencies to gather information about potential threats.
		</Text>
		<Text style={styles.paragraph}>
		  2. Business intelligence: Companies use OSINT to gather information about competitors, market trends, and customer behavior.
		</Text>
		<Text style={styles.paragraph}>
		  3. Cybersecurity: OSINT is used to gather information about potential cyber threats and vulnerabilities.
		</Text>
		<Text style={styles.paragraph}>
		  4. Marketing and advertising: OSINT is used to gather information about target audiences and market trends.
		</Text>
		<Text style={styles.paragraph}>
		  5. Research and academia: OSINT is used by researchers and academics to gather information and data for studies and papers.
		</Text>
	  </ScrollView>
	);
  };

  export const Module6 = () => {
	return (
	  <ScrollView style={styles.container}>
		<Text style={styles.heading}>Module 6: Vulnerability Assessment</Text>
  
		<Text style={styles.subHeading}>What is Vulnerability Assessment?</Text>
		<Text style={styles.paragraph}>
		  Vulnerability assessments are a systematic process of identifying, classifying, and prioritizing vulnerabilities in computer systems, networks, and applications. The goal of a vulnerability assessment is to identify potential weaknesses that could be exploited by attackers, and to provide recommendations for remediation or mitigation.
		</Text>
  
		<Text style={styles.subHeading}>Types of Vulnerability Assessments</Text>
		<Text style={styles.paragraph}>
		  1. Network Vulnerability Assessment: Identifies vulnerabilities in network devices, such as routers, switches, and firewalls.
		</Text>
		<Text style={styles.paragraph}>
		  2. System Vulnerability Assessment: Identifies vulnerabilities in operating systems, applications, and software.
		</Text>
		<Text style={styles.paragraph}>
		  3. Application Vulnerability Assessment: Identifies vulnerabilities in web applications, mobile applications, and other software applications.
		</Text>
		<Text style={styles.paragraph}>
		  4. Cloud Vulnerability Assessment: Identifies vulnerabilities in cloud-based systems, such as Amazon Web Services (AWS), Microsoft Azure, and Google Cloud Platform (GCP).
		</Text>
  
		<Text style={styles.subHeading}>Steps Involved in a Vulnerability Assessment</Text>
		<Text style={styles.paragraph}>
		  1. Planning and Preparation: Define the scope of the assessment, identify the systems and networks to be tested, and gather information about the systems and networks.
		</Text>
		<Text style={styles.paragraph}>
		  2. Vulnerability Scanning: Use automated tools to scan the systems and networks for vulnerabilities.
		</Text>
		<Text style={styles.paragraph}>
		  3. Vulnerability Identification: Analyze the scan results to identify potential vulnerabilities.
		</Text>
		<Text style={styles.paragraph}>
		  4. Risk Assessment: Assess the likelihood and potential impact of each identified vulnerability.
		</Text>
		<Text style={styles.paragraph}>
		  5. Prioritization: Prioritize the vulnerabilities based on their risk assessment.
		</Text>
		<Text style={styles.paragraph}>
		  6. Recommendations: Provide recommendations for remediation or mitigation of the identified vulnerabilities.
		</Text>
		<Text style={styles.paragraph}>
		  7. Reporting: Provide a comprehensive report detailing the findings, recommendations, and prioritization of the vulnerabilities.
		</Text>
  
		<Text style={styles.subHeading}>Benefits of Vulnerability Assessments</Text>
		<Text style={styles.paragraph}>
		  1. Improved Security: Identifies and addresses potential vulnerabilities, reducing the risk of security breaches.
		</Text>
		<Text style={styles.paragraph}>
		  2. Compliance: Helps organizations comply with regulatory requirements and industry standards.
		</Text>
		<Text style={styles.paragraph}>
		  3. Reduced Risk: Prioritizes vulnerabilities based on their risk assessment, allowing organizations to focus on the most critical vulnerabilities first.
		</Text>
		<Text style={styles.paragraph}>
		  4. Cost Savings: Identifies potential vulnerabilities before they can be exploited, reducing the cost of remediation and mitigation.
		</Text>
		<Text style={styles.paragraph}>
		  5. Improved Incident Response: Provides a comprehensive understanding of the organization's security posture, allowing for more effective incident response.
		</Text>
	  </ScrollView>
	);
  };

  const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "white",
	},
	heading: {
		fontSize: 18,
		fontWeight: "bold",
		marginBottom: 10,
		color: colors.primaryBlue,
	},
	subHeading: {
		fontSize: 16,
		fontWeight: "600",
		marginVertical: 8,
		borderBottomColor: colors.primaryBlue,
		borderTopColor: colors.primaryBlue,
		borderTopWidth: 1,
		borderBottomWidth: 1,
		paddingVertical: 8,
		textAlign: "center",
	},
	paragraph: {
		fontSize: 14,
		lineHeight: 30,
		marginBottom: 20,
	},
});