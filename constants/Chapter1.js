import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { colors } from "../constants/styling";

export const Quiz1 = [
	{
		question: "What is the primary goal of cybersecurity?",
		answer: 2,
		options: [
			{ id: 1, option: "To protect against all threats" },
			{ id: 2, option: "To minimize the impact of threats" },
			{ id: 3, option: "To eliminate all vulnerabilities" },
			{ id: 4, option: "To detect all incidents" },
		],
	},
	{
		question: "Which of the following is a core concept of cybersecurity?",
		answer: 4,
		options: [
			{ id: 1, option: "Confidentiality" },
			{ id: 2, option: "Integrity" },
			{ id: 3, option: "Availability" },
			{ id: 4, option: "All of the above" },
		],
	},
	{
		question: "What is the difference between a threat and a vulnerability?",
		answer: 2,
		options: [
			{
				id: 1,
				option:
					"A threat is a weakness, while a vulnerability is a potential occurrence",
			},
			{
				id: 2,
				option:
					"A threat is a potential occurrence, while a vulnerability is a weakness",
			},
			{
				id: 3,
				option:
					"A threat is a type of malware, while a vulnerability is a type of virus",
			},
			{
				id: 4,
				option:
					"A threat is a type of virus, while a vulnerability is a type of malware",
			},
		],
	},
	{
		question: "Which of the following is a type of cybersecurity control?",
		answer: 4,
		options: [
			{ id: 1, option: "Administrative" },
			{ id: 2, option: "Technical" },
			{ id: 3, option: "Physical" },
			{ id: 4, option: "All of the above" },
		],
	},
	{
		question: "What is the purpose of a firewall?",
		answer: 2,
		options: [
			{ id: 1, option: "To detect and prevent malware" },
			{ id: 2, option: "To detect and prevent unauthorized access" },
			{ id: 3, option: "To detect and prevent denial-of-service attacks" },
			{ id: 4, option: "To detect and prevent phishing attacks" },
		],
	},
	{
		question: "Which of the following is a type of encryption?",
		answer: 4,
		options: [
			{ id: 1, option: "Symmetric" },
			{ id: 2, option: "Asymmetric" },
			{ id: 3, option: "Hashing" },
			{ id: 4, option: "All of the above" },
		],
	},
	{
		question: "What is the purpose of an intrusion detection system (IDS)?",
		answer: 1,
		options: [
			{ id: 1, option: "To detect and prevent unauthorized access" },
			{ id: 2, option: "To detect and prevent malware" },
			{ id: 3, option: "To detect and prevent denial-of-service attacks" },
			{ id: 4, option: "To detect and prevent phishing attacks" },
		],
	},
	{
		question: "Which of the following is a type of cybersecurity framework?",
		answer: 4,
		options: [
			{ id: 1, option: "NIST Cybersecurity Framework" },
			{ id: 2, option: "ISO 27001" },
			{ id: 3, option: "COBIT" },
			{ id: 4, option: "All of the above" },
		],
	},
	{
		question: "What is the purpose of a risk assessment?",
		answer: 1,
		options: [
			{ id: 1, option: "To identify and assess potential risks" },
			{ id: 2, option: "To implement security controls" },
			{ id: 3, option: "To detect and respond to incidents" },
			{ id: 4, option: "To provide training and awareness" },
		],
	},

	{
		question: "Which of the following is a type of cybersecurity threat?",
		answer: 1,
		options: [
			{ id: 1, option: "Malware" },
			{ id: 2, option: "Phishing" },
			{ id: 3, option: "Denial-of-service attack" },
			{ id: 4, option: "All of the above" },
		],
	},
	{
		question:
			"What is the primary benefit of implementing cybersecurity measures?",
		answer: 3,
		options: [
			{ id: 1, option: "To reduce costs" },
			{ id: 2, option: "To improve productivity" },
			{ id: 3, option: "To protect against cyber threats" },
			{ id: 4, option: "To improve customer satisfaction" },
		],
	},
	{
		question: "Which of the following is a benefit of cybersecurity?",
		answer: 4,
		options: [
			{ id: 1, option: "Improved compliance" },
			{ id: 2, option: "Enhanced reputation" },
			{ id: 3, option: "Increased customer trust" },
			{ id: 4, option: "All of the above" },
		],
	},
	{
		question:
			"What is the benefit of implementing a cybersecurity awareness program?",
		answer: 1,
		options: [
			{ id: 1, option: "To reduce the risk of cyber attacks" },
			{ id: 2, option: "To improve employee productivity" },
			{ id: 3, option: "To enhance customer satisfaction" },
			{ id: 4, option: "To reduce costs" },
		],
	},
	{
		question:
			"Which of the following is a benefit of conducting regular cybersecurity audits?",
		answer: 1,
		options: [
			{ id: 1, option: "To identify vulnerabilities and weaknesses" },
			{ id: 2, option: "To improve compliance" },
			{ id: 3, option: "To enhance reputation" },
			{ id: 4, option: "To reduce costs" },
		],
	},
	{
		question: "What is the benefit of implementing an incident response plan?",
		answer: 4,
		options: [
			{ id: 1, option: "To reduce the risk of cyber attacks" },
			{ id: 2, option: "To improve employee productivity" },
			{ id: 3, option: "To enhance customer satisfaction" },
			{
				id: 4,
				option: "To respond quickly and effectively to cybersecurity incidents",
			},
		],
	},
	{
		question:
			"What is the primary responsibility of an entry-level cybersecurity analyst?",
		answer: 4,
		options: [
			{ id: 1, option: "To implement security controls" },
			{ id: 2, option: "To detect and respond to incidents" },
			{ id: 3, option: "To conduct risk assessments" },
			{ id: 4, option: "To monitor and analyze security event logs" },
		],
	},
	{
		question:
			"Which of the following is a responsibility of an entry-level cybersecurity analyst?",
		answer: 3,
		options: [
			{ id: 1, option: "To develop and implement cybersecurity policies" },
			{ id: 2, option: "To conduct penetration testing" },
			{ id: 3, option: "To monitor and analyze security event logs" },
			{ id: 4, option: "To provide training and awareness" },
		],
	},
	{
		question:
			"What is the responsibility of an entry-level cybersecurity analyst in regards to incident response?",
		answer: 2,
		options: [
			{ id: 1, option: "To develop and implement incident response plans" },
			{ id: 2, option: "To detect and respond to incidents" },
			{ id: 3, option: "To conduct post-incident activities" },
			{ id: 4, option: "To provide training and awareness" },
		],
	},
	{
		question: "Why is security important in today's digital world?",
		answer: 2,
		options: [
			{ id: 1, option: "To protect against physical threats" },
			{ id: 2, option: "To protect against cyber threats" },
			{ id: 3, option: "To improve system performance" },
			{ id: 4, option: "To reduce costs" },
		],
	},
	{
		question: "What is the primary consequence of a security breach?",
		answer: 4,
		options: [
			{ id: 1, option: "Financial loss" },
			{ id: 2, option: "Reputation damage" },
			{ id: 3, option: "Legal liability" },
			{ id: 4, option: "All of the above" },
		],
	},
	{
		question:
			"Which of the following is a benefit of implementing security measures?",
		answer: 4,
		options: [
			{ id: 1, option: "Improved productivity" },
			{ id: 2, option: "Enhanced reputation" },
			{ id: 3, option: "Increased customer trust" },
			{ id: 4, option: "All of the above" },
		],
	},
	{
		question: "What is the purpose of a security policy?",
		answer: 3,
		options: [
			{ id: 1, option: "To provide technical guidance" },
			{ id: 2, option: "To provide management guidance" },
			{ id: 3, option: "To provide a framework for security decisions" },
			{ id: 4, option: "To provide a checklist for security audits" },
		],
	},
	{
		question: "Which of the following is a key principle of security?",
		answer: 4,
		options: [
			{ id: 1, option: "Confidentiality" },
			{ id: 2, option: "Integrity" },
			{ id: 3, option: "Availability" },
			{ id: 4, option: "All of the above" },
		],
	},
	{
		question: "What is the importance of security awareness training?",
		answer: 1,
		options: [
			{ id: 1, option: "To reduce the risk of security breaches" },
			{ id: 2, option: "To improve employee productivity" },
			{ id: 3, option: "To enhance customer satisfaction" },
			{ id: 4, option: "To reduce costs" },
		],
	},
	{
		question:
			"Which of the following is a benefit of implementing a security incident response plan?",
		answer: 4,
		options: [
			{ id: 1, option: "To reduce the risk of security breaches" },
			{ id: 2, option: "To improve employee productivity" },
			{ id: 3, option: "To enhance customer satisfaction" },
			{
				id: 4,
				option: "To respond quickly and effectively to security incidents",
			},
		],
	},
	{
		question: "What is the purpose of a risk assessment?",
		answer: 1,
		options: [
			{ id: 1, option: "To identify and assess potential risks" },
			{ id: 2, option: "To implement security controls" },
			{ id: 3, option: "To detect and respond to incidents" },
			{ id: 4, option: "To provide training and awareness" },
		],
	},
	{
		question: "Which of the following is a type of security threat?",
		answer: 4,
		options: [
			{ id: 1, option: "Malware" },
			{ id: 2, option: "Phishing" },
			{ id: 3, option: "Denial-of-service attack" },
			{ id: 4, option: "All of the above" },
		],
	},
	{
		question: "What is the importance of security in the cloud?",
		answer: 2,
		options: [
			{ id: 1, option: "To protect against physical threats" },
			{ id: 2, option: "To protect against cyber threats" },
			{ id: 3, option: "To improve system performance" },
			{ id: 4, option: "To reduce costs" },
		],
	},
	{
		question: "What is the purpose of a phishing attack?",
		answer: 1,
		options: [
			{ id: 1, option: "To steal sensitive information" },
			{ id: 2, option: "To install malware" },
			{ id: 3, option: "To disrupt system operations" },
			{ id: 4, option: "To all of the above" },
		],
	},
	{
		question: "Which of the following is a type of malware?",
		answer: 4,
		options: [
			{ id: 1, option: "Virus" },
			{ id: 2, option: "Worm" },
			{ id: 3, option: "Trojan" },
			{ id: 4, option: "All of the above" },
		],
	},
	{
		question: "What is the purpose of a denial-of-service attack?",
		answer: 3,
		options: [
			{ id: 1, option: "To steal sensitive information" },
			{ id: 2, option: "To install malware" },
			{ id: 3, option: "To disrupt system operations" },
			{ id: 4, option: "To all of the above" },
		],
	},
	{
		question: "Which of the following is a type of cyber attack?",
		answer: 4,
		options: [
			{ id: 1, option: "Insider threat" },
			{ id: 2, option: "Outsider threat" },
			{ id: 3, option: "Physical threat" },
			{ id: 4, option: "All of the above" },
		],
	},
	{
		question: "What is the purpose of a man-in-the-middle attack?",
		answer: 1,
		options: [
			{ id: 1, option: "To steal sensitive information" },
			{ id: 2, option: "To install malware" },
			{ id: 3, option: "To disrupt system operations" },
			{ id: 4, option: "To all of the above" },
		],
	},
	{
		question: "Which of the following is a type of social engineering attack?",
		answer: 4,
		options: [
			{ id: 1, option: "Phishing" },
			{ id: 2, option: "Pretexting" },
			{ id: 3, option: "Baiting" },
			{ id: 4, option: "All of the above" },
		],
	},
	{
		question: "What is the purpose of a ransomware attack?",
		answer: 4,
		options: [
			{ id: 1, option: "To steal sensitive information" },
			{ id: 2, option: "To install malware" },
			{ id: 3, option: "To disrupt system operations" },
			{ id: 4, option: "To extort money from victims" },
		],
	},
	{
		question: "Which of the following is a type of cyber threat?",
		answer: 4,
		options: [
			{ id: 1, option: "Malware" },
			{ id: 2, option: "Phishing" },
			{ id: 3, option: "Denial-of-service attack" },
			{ id: 4, option: "All of the above" },
		],
	},
	{
		question: "What is the purpose of a SQL injection attack?",
		answer: 4,
		options: [
			{ id: 1, option: "To steal sensitive information" },
			{ id: 2, option: "To install malware" },
			{ id: 3, option: "To disrupt system operations" },
			{ id: 4, option: "To manipulate database data" },
		],
	},
	{
		question: "Which of the following is a type of cyber attack?",
		answer: 4,
		options: [
			{ id: 1, option: "Insider threat" },
			{ id: 2, option: "Outsider threat" },
			{ id: 3, option: "Physical threat" },
			{ id: 4, option: "All of the above" },
		],
	},
	{
		question: "What is the purpose of a security framework?",
		answer: 3,
		options: [
			{ id: 1, option: "To provide technical guidance" },
			{ id: 2, option: "To provide management guidance" },
			{
				id: 3,
				option: "To provide a structure for implementing security controls",
			},
			{ id: 4, option: "To provide a checklist for security audits" },
		],
	},
	{
		question: "Which of the following is a type of security control?",
		answer: 4,
		options: [
			{ id: 1, option: "Administrative" },
			{ id: 2, option: "Technical" },
			{ id: 3, option: "Physical" },
			{ id: 4, option: "All of the above" },
		],
	},
	{
		question: "What is the purpose of a risk assessment?",
		answer: 1,
		options: [
			{ id: 1, option: "To identify and assess potential risks" },
			{ id: 2, option: "To implement security controls" },
			{ id: 3, option: "To detect and respond to incidents" },
			{ id: 4, option: "To provide training and awareness" },
		],
	},
	{
		question: "Which of the following is a security framework?",
		answer: 4,
		options: [
			{ id: 1, option: "NIST Cybersecurity Framework" },
			{ id: 2, option: "ISO 27001" },
			{ id: 3, option: "COBIT" },
			{ id: 4, option: "All of the above" },
		],
	},
	{
		question: "What is the purpose of a security policy?",
		answer: 3,
		options: [
			{ id: 1, option: "To provide technical guidance" },
			{ id: 2, option: "To provide management guidance" },
			{ id: 3, option: "To provide a framework for security decisions" },
			{ id: 4, option: "To provide a checklist for security audits" },
		],
	},
	{
		question: "Which of the following is a type of security control?",
		answer: 4,
		options: [
			{ id: 1, option: "Preventive" },
			{ id: 2, option: "Detective" },
			{ id: 3, option: "Corrective" },
			{ id: 4, option: "All of the above" },
		],
	},
	{
		question: "What is the purpose of a incident response plan?",
		answer: 3,
		options: [
			{ id: 1, option: "To provide technical guidance" },
			{ id: 2, option: "To provide management guidance" },
			{
				id: 3,
				option: "To provide a framework for responding to security incidents",
			},
			{ id: 4, option: "To provide a checklist for security audits" },
		],
	},
	{
		question: "Which of the following is a security control?",
		answer: 4,
		options: [
			{ id: 1, option: "Firewall" },
			{ id: 2, option: "Intrusion detection system" },
			{ id: 3, option: "Encryption" },
			{ id: 4, option: "All of the above" },
		],
	},
	{
		question: "What is the purpose of a vulnerability assessment?",
		answer: 1,
		options: [
			{ id: 1, option: "To identify and assess potential vulnerabilities" },
			{ id: 2, option: "To implement security controls" },
			{ id: 3, option: "To detect and respond to incidents" },
			{ id: 4, option: "To provide training and awareness" },
		],
	},
	{
		question: "Which of the following is a type of security framework?",
		answer: 4,
		options: [
			{ id: 1, option: "NIST Cybersecurity Framework" },
			{ id: 2, option: "ISO 27001" },
			{ id: 3, option: "COBIT" },
			{ id: 4, option: "All of the above" },
		],
	},
	{
		question: "What is the primary ethical principle in cybersecurity?",
		answer: 4,
		options: [
			{ id: 1, option: "Confidentiality" },
			{ id: 2, option: "Integrity" },
			{ id: 3, option: "Availability" },
			{ id: 4, option: "Respect for autonomy" },
		],
	},
	{
		question:
			"Which of the following is an ethical consideration in cybersecurity?",
		answer: 4,
		options: [
			{ id: 1, option: "Protecting sensitive information" },
			{ id: 2, option: "Respecting user privacy" },
			{ id: 3, option: "Avoiding harm to others" },
			{ id: 4, option: "All of the above" },
		],
	},
];

export const Module1 = () => {
	return (
		<ScrollView style={styles.container}>
			<Text style={styles.heading}>
				Module 1: Introduction to Cybersecurity
			</Text>

			<Text style={styles.subHeading}>What is Security?</Text>
			<Text style={styles.paragraph}>
				Security means to protect an organization and the people it serves.
			</Text>

			<Text style={styles.subHeading}>What is Cybersecurity?</Text>
			<Text style={styles.paragraph}>
				Cybersecurity is the practice of ensuring confidentiality, integrity,
				and availability of information by protecting network devices, people,
				and data from unauthorized access or command from a threat actor.
			</Text>

			<Text style={styles.subHeading}>Who is a Threat Actor?</Text>
			<Text style={styles.paragraph}>
				A threat actor is any person or group who presents a security risk.
			</Text>

			<Text style={styles.subHeading}>The CIA Triad</Text>
			<Text style={styles.paragraph}>
				The CIA Triad is a foundational model that helps inform how
				organizations consider risk when setting up systems and security
				policies. Cybersecurity is often discussed in terms of the CIA triad of
				software security. The terms confidentiality, integrity, and
				availability are considered the three fundamental aspects of security.
			</Text>

			<Text style={styles.subHeading}>Confidentiality</Text>
			<Text style={styles.paragraph}>
				Confidentiality means that only authorized users can access specific
				assets or data.
			</Text>

			<Text style={styles.subHeading}>Integrity</Text>
			<Text style={styles.paragraph}>
				Integrity means data is correct, authentic, and reliable.
			</Text>

			<Text style={styles.subHeading}>Availability</Text>
			<Text style={styles.paragraph}>
				Availability means data is accessible to those who are authorized to
				access it.
			</Text>
		</ScrollView>
	);
};

export const Module2 = () => {
	return (
		<ScrollView style={styles.container}>
			<Text style={styles.heading}>Module 2: Benefits of Cybersecurity</Text>

			<Text style={styles.subHeading}>
				1. Protect Against External and Internal Threats
			</Text>
			<Text style={styles.paragraph}>
				Cybersecurity helps protect an organization from both external threats
				(e.g., hackers, malware) and internal threats (e.g., insider attacks,
				employee negligence).
			</Text>

			<Text style={styles.subHeading}>2. Meets Regulatory Compliance</Text>
			<Text style={styles.paragraph}>
				Cybersecurity ensures that an organization complies with industry
				regulations and standards, which often require safeguarding sensitive
				information.
			</Text>

			<Text style={styles.subHeading}>
				3. Maintain and Improve Business Productivity
			</Text>
			<Text style={styles.paragraph}>
				By protecting critical systems and data, cybersecurity ensures that
				business operations are not disrupted, maintaining productivity and
				operational continuity.
			</Text>

			<Text style={styles.subHeading}>4. Reduce Expenses</Text>
			<Text style={styles.paragraph}>
				Investing in cybersecurity can reduce the potential financial damage
				caused by cyberattacks, including costs related to data breaches,
				downtime, and recovery.
			</Text>

			<Text style={styles.subHeading}>5. Maintain Brand Trust</Text>
			<Text style={styles.paragraph}>
				A strong cybersecurity posture helps maintain customer trust by ensuring
				their data is secure, which is vital for protecting an organization’s
				reputation.
			</Text>
		</ScrollView>
	);
};
export const Module3 = () => {
	return (
		<ScrollView style={styles.container}>
			<Text style={styles.heading}>
				Module 3: Responsibility of an Entry-Level Cybersecurity Analyst
			</Text>

			<Text style={styles.subHeading}>
				Security Analysts Are Responsible For Monitoring and Protecting
				Information and Systems
			</Text>
			<Text style={styles.paragraph}>
				Entry-level cybersecurity analysts play a critical role in safeguarding
				organizational data and systems from various security threats.
			</Text>

			<Text style={styles.subHeading}>Responsibilities Include:</Text>

			<Text style={styles.paragraph}>
				1. Protecting Computer and Network Systems{"\n"}
				Cybersecurity analysts are responsible for ensuring the security of both
				computer systems and networks, protecting them from unauthorized access
				and attacks.
			</Text>

			<Text style={styles.paragraph}>
				2. Installing Prevention Software{"\n"}
				They must install and maintain security software that helps prevent
				cyberattacks, such as antivirus programs, firewalls, and intrusion
				detection systems.
			</Text>

			<Text style={styles.paragraph}>
				3. Conducting Periodic Security Audits{"\n"}
				Security analysts are tasked with conducting regular security audits to
				identify vulnerabilities in systems and networks, ensuring that security
				measures are effective.
			</Text>
		</ScrollView>
	);
};
export const Module4 = () => {
	return (
		<ScrollView style={styles.container}>
			<Text style={styles.heading}>
				Module 4: Key Concepts in Cybersecurity
			</Text>

			<Text style={styles.subHeading}>1. Compliance</Text>
			<Text style={styles.paragraph}>
				Compliance refers to the process of adhering to internal standards and
				regulations to enable an organization to avoid fines and security
				breaches.
			</Text>

			<Text style={styles.subHeading}>2. Security Framework</Text>
			<Text style={styles.paragraph}>
				A security framework provides guidelines for building plans that help
				mitigate risks and threats to data and privacy.
			</Text>

			<Text style={styles.subHeading}>3. Security Control</Text>
			<Text style={styles.paragraph}>
				Security controls are safeguards designed to reduce specific security
				risks. They are used with security frameworks to establish a strong
				security posture.
			</Text>

			<Text style={styles.subHeading}>4. Security Posture</Text>
			<Text style={styles.paragraph}>
				Security posture refers to an organization’s ability to manage its
				defense of critical assets and data, and react to changes in the threat
				landscape.
			</Text>

			<Text style={styles.subHeading}>5. A Threat Actor</Text>
			<Text style={styles.paragraph}>
				A threat actor is any person or group who presents a security risk. The
				risk can be related to computers, applications, networks, and data.
			</Text>

			<Text style={styles.subHeading}>6. Network Security</Text>
			<Text style={styles.paragraph}>
				Network security is the practice of keeping an organization’s network
				infrastructure secure from unauthorized access.
			</Text>

			<Text style={styles.subHeading}>7. Cloud Security</Text>
			<Text style={styles.paragraph}>
				Cloud security ensures that assets stored in the cloud are properly
				configured and that access to those assets is limited to authorized
				users.
			</Text>

			<Text style={styles.subHeading}>8. Programming</Text>
			<Text style={styles.paragraph}>
				Programming is the process of creating a specific set of instructions
				for a computer to execute tasks.
			</Text>
		</ScrollView>
	);
};

export const Module5 = () => {
	return (
		<ScrollView style={styles.container}>
			<Text style={styles.heading}>
				Module 5: Core Skills for Cybersecurity Professionals
			</Text>

			<Text style={styles.subHeading}>Transferable Skills</Text>
			<Text style={styles.paragraph}>
				Transferable skills are skills from other areas that can be applied to
				different careers.
			</Text>

			<Text style={styles.subHeading}>Examples of Transferable Skills</Text>
			<Text style={styles.paragraph}>
				1. Communication{"\n"}
				2. Collaboration{"\n"}
				3. Analysis{"\n"}
				4. Problem Solving skills{"\n"}
			</Text>

			<Text style={styles.subHeading}>Technical Skills</Text>
			<Text style={styles.paragraph}>
				Technical skills are skills that require knowledge of specific tools,
				procedures, and policies.
			</Text>

			<Text style={styles.subHeading}>Examples of Technical Skills</Text>
			<Text style={styles.paragraph}>
				1. Programming languages{"\n"}
				2. Event management{"\n"}
				3. Computer Forensics{"\n"}
			</Text>
		</ScrollView>
	);
};

export const Module6 = () => {
	return (
		<ScrollView style={styles.container}>
			<Text style={styles.heading}>Module 6: The Importance of Security</Text>

			<Text style={styles.paragraph}>
				Security is a critical aspect of any organization, protecting data,
				systems, and operations from potential threats. Here are the key reasons
				why security is essential:
			</Text>

			<Text style={styles.subHeading}>1. Increase User Trust</Text>
			<Text style={styles.paragraph}>
				By protecting Personally Identifiable Information (PII) and Sensitive
				Personally Identifiable Information (SPII), organizations can foster
				trust with their users.
			</Text>
			<Text style={styles.paragraph}>
				<Text style={styles.bold}>- PII:</Text> Any information used to infer an
				individual's identity, such as name, address, or phone number.
			</Text>
			<Text style={styles.paragraph}>
				<Text style={styles.bold}>- SPII:</Text> A specific type of PII that
				falls under stricter handling guidelines due to its sensitive nature,
				such as Social Security Numbers, financial data, or medical records.
			</Text>

			<Text style={styles.subHeading}>2. Keeping Organizations Secure</Text>
			<Text style={styles.paragraph}>
				Security measures ensure the protection of an organization's systems,
				networks, and data from unauthorized access, breaches, and other
				threats, maintaining the integrity and continuity of business
				operations.
			</Text>
		</ScrollView>
	);
};

export const Module7 = () => {
	return (
		<ScrollView style={styles.container}>
			<Text style={styles.heading}>
				Module 7: Common Attacks and Their Effectiveness
			</Text>

			<Text style={styles.subHeading}>1. Social Engineering</Text>
			<Text style={styles.paragraph}>
				A manipulation technique that exploits human error to gain access to
				private information, assets, and valuables.
			</Text>
			<Text style={styles.paragraph}>
				<Text style={styles.bold}>Types of Social Engineering:</Text>
			</Text>
			<Text style={styles.bullet}>• Social Media Phishing:</Text>
			<Text style={styles.paragraph}>
				Collecting information about targets from social media platforms.
			</Text>
			<Text style={styles.bullet}>• Watering Hole Attack:</Text>
			<Text style={styles.paragraph}>
				A threat actor attacks a website frequently visited by a specific group
				of users.
			</Text>
			<Text style={styles.bullet}>• USB Baiting:</Text>
			<Text style={styles.paragraph}>
				A threat actor strategically leaves a malware-infected USB stick for an
				employee to find and unknowingly install on the network.
			</Text>

			<Text style={styles.subHeading}>2. Phishing Attacks</Text>
			<Text style={styles.paragraph}>
				The use of digital communication to trick people into revealing
				sensitive data or deploying malicious software.
			</Text>
			<Text style={styles.paragraph}>
				<Text style={styles.bold}>Common Types of Phishing Attacks:</Text>
			</Text>
			<Text style={styles.bullet}>• Business Email Compromise (BEC):</Text>
			<Text style={styles.paragraph}>
				A threat actor sends an email that seems to be from a trusted source,
				requesting information or financial actions.
			</Text>
			<Text style={styles.bullet}>• Spear Phishing:</Text>
			<Text style={styles.paragraph}>
				Targeted malicious email attacks pretending to be from a trusted source.
			</Text>
			<Text style={styles.bullet}>• Whaling:</Text>
			<Text style={styles.paragraph}>
				A form of spear phishing targeting company executives to gain access to
				sensitive data.
			</Text>
			<Text style={styles.bullet}>• Vishing:</Text>
			<Text style={styles.paragraph}>
				Exploiting voice communication (calls) to obtain sensitive information
				or impersonate a known source.
			</Text>
			<Text style={styles.bullet}>• Smishing:</Text>
			<Text style={styles.paragraph}>
				Using text messages to deceive users and obtain sensitive information or
				impersonate a known source.
			</Text>

			<Text style={styles.subHeading}>3. Malware</Text>
			<Text style={styles.paragraph}>
				Software designed to harm devices or networks.
			</Text>
			<Text style={styles.paragraph}>
				<Text style={styles.bold}>Types of Malware:</Text>
			</Text>
			<Text style={styles.bullet}>• Viruses:</Text>
			<Text style={styles.paragraph}>
				Malicious code written to interfere with operations and damage data or
				software.
			</Text>
			<Text style={styles.bullet}>• Worms:</Text>
			<Text style={styles.paragraph}>
				Malware that duplicates and spreads itself across systems without user
				action.
			</Text>
			<Text style={styles.bullet}>• Ransomware:</Text>
			<Text style={styles.paragraph}>
				A malicious attack where threat actors encrypt an organization's data
				and demand payment for its decryption.
			</Text>
			<Text style={styles.bullet}>• Spyware:</Text>
			<Text style={styles.paragraph}>
				Malware designed to gather and sell information without the user's
				consent.
			</Text>
		</ScrollView>
	);
};

export const Module8 = () => {
	return (
		<ScrollView style={styles.container}>
			<Text style={styles.heading}>
				Module 8: Introduction to Security Frameworks and Control
			</Text>

			<Text style={styles.subHeading}>1. Security Frameworks</Text>
			<Text style={styles.paragraph}>
				Security frameworks are guidelines used for building plans to help
				mitigate risks and threats to data and privacy. The security life cycle
				is a constantly evolving set of policies and standards that defines how
				an organization manages risks, follows established guidelines, and meets
				regulatory compliance or laws.
			</Text>

			<Text style={styles.subHeading}>2. Purpose of Security Frameworks</Text>
			<Text style={styles.bullet}>
				• Protecting Personally Identifiable Information (PII):
			</Text>
			<Text style={styles.paragraph}>
				Ensuring sensitive information is safeguarded from unauthorized access
				or breaches.
			</Text>
			<Text style={styles.bullet}>• Securing Financial Information:</Text>
			<Text style={styles.paragraph}>
				Protecting financial data from theft or exploitation.
			</Text>
			<Text style={styles.bullet}>• Identifying Security Weaknesses:</Text>
			<Text style={styles.paragraph}>
				Proactively uncovering vulnerabilities to strengthen security.
			</Text>
			<Text style={styles.bullet}>• Managing Organizational Risks:</Text>
			<Text style={styles.paragraph}>
				Reducing potential impacts from cyber threats.
			</Text>
			<Text style={styles.bullet}>
				• Aligning Security with Business Goals:
			</Text>
			<Text style={styles.paragraph}>
				Integrating security measures to support and align with organizational
				objectives.
			</Text>

			<Text style={styles.subHeading}>
				3. Components of a Security Framework
			</Text>
			<Text style={styles.bullet}>
				• Identifying and Documenting Security Goals:
			</Text>
			<Text style={styles.paragraph}>
				Establishing clear security objectives, such as compliance with GDPR.
			</Text>
			<Text style={styles.bullet}>
				• Setting Guidelines to Achieve Security Goals:
			</Text>
			<Text style={styles.paragraph}>
				Developing specific strategies to meet security objectives.
			</Text>
			<Text style={styles.bullet}>
				• Implementing Strong Security Processes:
			</Text>
			<Text style={styles.paragraph}>
				Ensuring effective measures are in place to protect data and systems.
			</Text>
			<Text style={styles.bullet}>• Monitoring and Communicating Results:</Text>
			<Text style={styles.paragraph}>
				Continuously reviewing and sharing progress toward security objectives.
			</Text>

			<Text style={styles.subHeading}>4. Security Controls</Text>
			<Text style={styles.paragraph}>
				Security controls are safeguards designed to reduce specific risks.
			</Text>
		</ScrollView>
	);
};

export const Module9 = () => {
	return (
		<ScrollView style={styles.container}>
			<Text style={styles.heading}>Module 9: Ethics of Cybersecurity</Text>

			<Text style={styles.paragraph}>
				Security ethics are guidelines for making appropriate decisions as a
				security professional.
			</Text>

			<Text style={styles.subHeading}>1. Ethical Principles in Security</Text>

			<Text style={styles.bullet}>• Confidentiality:</Text>
			<Text style={styles.paragraph}>
				Confidentiality ensures that only authorized users can access specific
				assets or data.
			</Text>

			<Text style={styles.bullet}>• Integrity:</Text>
			<Text style={styles.paragraph}>
				Integrity means that data is correct, authentic, and reliable.
			</Text>

			<Text style={styles.bullet}>• Privacy Protection:</Text>
			<Text style={styles.paragraph}>
				Privacy protection involves safeguarding personal information from
				unauthorized use.
			</Text>

			<Text style={styles.bullet}>• Law:</Text>
			<Text style={styles.paragraph}>
				Laws are rules recognized by a community and enforced by a governing
				entity.
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
