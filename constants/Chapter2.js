import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { colors } from "../constants/styling";

export const Quiz2 = [
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
		question: "Which of the following is a risk management strategy?",
		answer: 4,
		options: [
			{ id: 1, option: "Risk avoidance" },
			{ id: 2, option: "Risk transfer" },
			{ id: 3, option: "Risk mitigation" },
			{ id: 4, option: "All of the above" },
		],
	},
	{
		question: "What is the purpose of a risk assessment matrix?",
		answer: 4,
		options: [
			{ id: 1, option: "To identify potential risks" },
			{ id: 2, option: "To assess the likelihood and impact of risks" },
			{ id: 3, option: "To implement risk mitigation measures" },
			{ id: 4, option: "To prioritize risks" },
		],
	},
	{
		question: "Which of the following is a type of risk assessment?",
		answer: 4,
		options: [
			{ id: 1, option: "Qualitative risk assessment" },
			{ id: 2, option: "Quantitative risk assessment" },
			{ id: 3, option: "Hybrid risk assessment" },
			{ id: 4, option: "All of the above" },
		],
	},
	{
		question: "What is the purpose of a risk management framework?",
		answer: 1,
		options: [
			{ id: 1, option: "To provide a structure for managing risks" },
			{ id: 2, option: "To provide a methodology for assessing risks" },
			{ id: 3, option: "To provide a set of tools for mitigating risks" },
			{
				id: 4,
				option: "To provide a set of best practices for managing risks",
			},
		],
	},
	{
		question: "Which of the following is a benefit of risk management?",
		answer: 4,
		options: [
			{ id: 1, option: "Reduced risk" },
			{ id: 2, option: "Improved compliance" },
			{ id: 3, option: "Enhanced reputation" },
			{ id: 4, option: "All of the above" },
		],
	},
	{
		question: "What is the purpose of a security framework?",
		answer: 1,
		options: [
			{ id: 1, option: "To provide a structure for managing security" },
			{
				id: 2,
				option: "To provide a methodology for assessing security risks",
			},
			{
				id: 3,
				option: "To provide a set of tools for implementing security controls",
			},
			{
				id: 4,
				option: "To provide a set of best practices for managing security",
			},
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
		question: "What is the purpose of the NIST Cybersecurity Framework?",
		answer: 1,
		options: [
			{ id: 1, option: "To provide a structure for managing cybersecurity" },
			{
				id: 2,
				option: "To provide a methodology for assessing cybersecurity risks",
			},
			{
				id: 3,
				option:
					"To provide a set of tools for implementing cybersecurity controls",
			},
			{
				id: 4,
				option: "To provide a set of best practices for managing cybersecurity",
			},
		],
	},
	{
		question:
			"Which of the following is a component of the NIST Cybersecurity Framework?",
		answer: 4,
		options: [
			{ id: 1, option: "Identify" },
			{ id: 2, option: "Protect" },
			{ id: 3, option: "Detect" },
			{ id: 4, option: "All of the above" },
		],
	},
	{
		question: "What is the purpose of the ISO 27001 standard?",
		answer: 1,
		options: [
			{
				id: 1,
				option: "To provide a structure for managing information security",
			},
			{
				id: 2,
				option:
					"To provide a methodology for assessing information security risks",
			},
			{
				id: 3,
				option:
					"To provide a set of tools for implementing information security controls",
			},
			{
				id: 4,
				option:
					"To provide a set of best practices for managing information security",
			},
		],
	},
	{
		question:
			"Which of the following is a benefit of using a security framework?",
		answer: 4,
		options: [
			{ id: 1, option: "Improved security posture" },
			{ id: 2, option: "Enhanced compliance" },
			{ id: 3, option: "Increased efficiency" },
			{ id: 4, option: "All of the above" },
		],
	},
	{
		question: "What is the purpose of a security control?",
		answer: 1,
		options: [
			{ id: 1, option: "To prevent security incidents" },
			{ id: 2, option: "To detect security incidents" },
			{ id: 3, option: "To respond to security incidents" },
			{ id: 4, option: "To provide a framework for managing security" },
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
		question: "What is the purpose of a security audit?",
		answer: 1,
		options: [
			{ id: 1, option: "To assess the effectiveness of security controls" },
			{ id: 2, option: "To identify vulnerabilities and weaknesses" },
			{ id: 3, option: "To detect and respond to security incidents" },
			{ id: 4, option: "To provide a framework for managing security" },
		],
	},
	{
		question: "What is the primary purpose of a security audit?",
		answer: 1,
		options: [
			{ id: 1, option: "To assess the effectiveness of security controls" },
			{ id: 2, option: "To identify vulnerabilities and weaknesses" },
			{ id: 3, option: "To detect and respond to security incidents" },
			{ id: 4, option: "To provide a framework for managing security" },
		],
	},
	{
		question: "Which of the following is a type of security audit?",
		answer: 4,
		options: [
			{ id: 1, option: "Compliance audit" },
			{ id: 2, option: "Vulnerability audit" },
			{ id: 3, option: "Penetration test" },
			{ id: 4, option: "All of the above" },
		],
	},
	{
		question: "What is the purpose of a security audit report?",
		answer: 1,
		options: [
			{ id: 1, option: "To provide a summary of the audit findings" },
			{ id: 2, option: "To provide recommendations for improving security" },
			{ id: 3, option: "To provide a framework for managing security" },
			{ id: 4, option: "To detect and respond to security incidents" },
		],
	},
	{
		question:
			"Which of the following is a benefit of conducting regular security audits?",
		answer: 4,
		options: [
			{ id: 1, option: "Improved security posture" },
			{ id: 2, option: "Enhanced compliance" },
			{ id: 3, option: "Increased efficiency" },
			{ id: 4, option: "All of the above" },
		],
	},
	{
		question: "What is the purpose of a risk assessment in a security audit?",
		answer: 2,
		options: [
			{ id: 1, option: "To identify potential risks" },
			{ id: 2, option: "To assess the likelihood and impact of risks" },
			{ id: 3, option: "To implement risk mitigation measures" },
			{ id: 4, option: "To monitor and review risks" },
		],
	},
	{
		question: "What is the primary purpose of log management?",
		answer: 1,
		options: [
			{ id: 1, option: "To collect and store log data" },
			{ id: 2, option: "To analyze and interpret log data" },
			{ id: 3, option: "To provide real-time monitoring and alerting" },
			{ id: 4, option: "To provide forensic analysis and incident response" },
		],
	},
	{
		question: "Which of the following is a type of log data?",
		answer: 4,
		options: [
			{ id: 1, option: "Security logs" },
			{ id: 2, option: "System logs" },
			{ id: 3, option: "Application logs" },
			{ id: 4, option: "All of the above" },
		],
	},
];

export const Module1 = () => {
	return (
	  <ScrollView style={styles.container}>
		<Text style={styles.heading}>
		  Module 1: Risk Management
		</Text>
  
		<Text style={styles.paragraph}>
		  Risk Management in cybersecurity involves identifying, evaluating, and addressing potential risks that could negatively impact an organization’s data, systems, or infrastructure. The goal is to minimize vulnerabilities and protect critical assets from cyber threats like data breaches, malware, and phishing attacks.
		</Text>
  
		<Text style={styles.subHeading}>Seven Steps in Risk Management Framework</Text>
  
		<Text style={styles.subHeading}>1. Prepare</Text>
		<Text style={styles.paragraph}>
		  Activities that are necessary to manage security and privacy risks before a breach occurs.
		</Text>
  
		<Text style={styles.subHeading}>2. Categorize</Text>
		<Text style={styles.paragraph}>
		  Used to develop risk management processes and tasks.
		</Text>
  
		<Text style={styles.subHeading}>3. Select</Text>
		<Text style={styles.paragraph}>
		  To choose, categorize, and capture documentation of the controls that protect an organization.
		</Text>
  
		<Text style={styles.subHeading}>4. Implement</Text>
		<Text style={styles.paragraph}>
		  Implementing security and privacy plans for the organization.
		</Text>
  
		<Text style={styles.subHeading}>5. Assess</Text>
		<Text style={styles.paragraph}>
		  To determine if established controls are implemented correctly.
		</Text>
  
		<Text style={styles.subHeading}>Common Strategies used to Manage Risk</Text>
  
		<Text style={styles.paragraph}>
		  • Acceptance{"\n"}
		  • Avoidance{"\n"}
		  • Transference{"\n"}
		  • Mitigation
		</Text>
	  </ScrollView>
	);
  };

  export const Module2 = () => {
	return (
	  <ScrollView style={styles.container}>
		<Text style={styles.heading}>
		  Module 2: Risk Assessment in Cybersecurity
		</Text>
  
		<Text style={styles.paragraph}>
		  Risk assessment is the process of identifying, evaluating, and prioritizing
		  potential risks in an organization’s IT systems. In cybersecurity, risk
		  assessment is essential for identifying vulnerabilities and threats to the
		  organization’s data, assets, and overall security posture. By understanding
		  these risks, organizations can implement effective mitigation strategies and
		  make informed decisions to protect critical systems.
		</Text>
  
		<Text style={styles.subHeading}>Steps in Conducting a Cybersecurity Risk Assessment</Text>
		<Text style={styles.paragraph}>
		  1. <Text style={styles.bold}>Identify Critical Assets:</Text> Identify all critical assets in the organization, including data, applications, network infrastructure, and hardware.
		</Text>
		<Text style={styles.paragraph}>
		  2. <Text style={styles.bold}>Identify Potential Threats:</Text> Recognize potential threats that could exploit vulnerabilities and affect critical assets, including cybercriminals and insider threats.
		</Text>
		<Text style={styles.paragraph}>
		  3. <Text style={styles.bold}>Evaluate Vulnerabilities:</Text> Identify weaknesses in the organization’s systems, processes, or people that could be exploited by threats.
		</Text>
		<Text style={styles.paragraph}>
		  4. <Text style={styles.bold}>Analyze the Impact:</Text> Consider the financial, operational, legal, and reputational consequences of an attack or breach.
		</Text>
		<Text style={styles.paragraph}>
		  5. <Text style={styles.bold}>Assess Likelihood:</Text> Evaluate the probability of a threat exploiting a vulnerability based on historical data and the current security posture.
		</Text>
		<Text style={styles.paragraph}>
		  6. <Text style={styles.bold}>Mitigation Strategy:</Text> Develop strategies to mitigate risks by strengthening controls, improving awareness, or implementing technological solutions.
		</Text>
		<Text style={styles.paragraph}>
		  7. <Text style={styles.bold}>Monitor and Review:</Text> Risk assessment is an ongoing process, and regular monitoring and reviews are necessary to keep the organization protected.
		</Text>
  
		<Text style={styles.subHeading}>Common Risk Assessment Methodologies</Text>
		<Text style={styles.paragraph}>
		  1. <Text style={styles.bold}>Qualitative Risk Assessment:</Text> Based on subjective judgment and uses rating scales to assess the impact and likelihood of risks.
		</Text>
		<Text style={styles.paragraph}>
		  2. <Text style={styles.bold}>Quantitative Risk Assessment:</Text> Uses numerical data and metrics to calculate risk levels, often in terms of financial impact.
		</Text>
		<Text style={styles.paragraph}>
		  3. <Text style={styles.bold}>Hybrid Risk Assessment:</Text> A combination of both qualitative and quantitative methods for a comprehensive risk view.
		</Text>
  
		<Text style={styles.subHeading}>Key Tools for Risk Assessment</Text>
		<Text style={styles.paragraph}>
		  1. <Text style={styles.bold}>Risk Management Software:</Text> Tools like RSA Archer or RiskWatch to identify, assess, and monitor risks across systems.
		</Text>
		<Text style={styles.paragraph}>
		  2. <Text style={styles.bold}>Vulnerability Scanners:</Text> Tools like Nessus or OpenVAS to scan systems and identify vulnerabilities.
		</Text>
		<Text style={styles.paragraph}>
		  3. <Text style={styles.bold}>Penetration Testing Tools:</Text> Tools such as Metasploit or Burp Suite for simulating attacks to discover exploitable vulnerabilities.
		</Text>
  
		<Text style={styles.subHeading}>Importance of Regular Risk Assessment</Text>
		<Text style={styles.paragraph}>
		  Cybersecurity threats are constantly evolving, and new risks emerge as technologies change. Regular risk assessments allow organizations to stay proactive, ensuring defenses are updated. They also help allocate resources efficiently, prioritize the most critical vulnerabilities, and ensure compliance with regulations like GDPR or HIPAA.
		</Text>
  
		<Text style={styles.subHeading}>Conclusion</Text>
		<Text style={styles.paragraph}>
		  Risk assessment is a critical component of any cybersecurity strategy. By continually identifying, evaluating, and mitigating risks, organizations can safeguard their critical assets and stay ahead of emerging threats. Regular assessments enable organizations to make informed decisions and improve their overall security posture.
		</Text>
	  </ScrollView>
	);
  };
  export const Module3 = () => {
	return (
	  <ScrollView style={styles.container}>
		<Text style={styles.heading}>
		  Module 3: NIST Framework
		</Text>
  
		<Text style={styles.paragraph}>
		  NIST cybersecurity framework is a voluntary framework that consists of standards, guidelines, and best practices to manage cybersecurity risks.
		</Text>
  
		<Text style={styles.subHeading}>Five Importance Functions of NIST Framework</Text>
  
		<Text style={styles.subHeading}>1. Identify</Text>
		<Text style={styles.paragraph}>
		  The management of cybersecurity risks and its effects on an organization’s people and assets.
		</Text>
  
		<Text style={styles.subHeading}>2. Protect</Text>
		<Text style={styles.paragraph}>
		  The strategy used to protect an organization through the implementation of policies, procedures, training, and tools that help to mitigate cybersecurity threats.
		</Text>
  
		<Text style={styles.subHeading}>3. Detect</Text>
		<Text style={styles.paragraph}>
		  Identifying potential security incidents and improving monitoring capabilities to increase the speed and efficiency of detection.
		</Text>
  
		<Text style={styles.subHeading}>4. Respond</Text>
		<Text style={styles.paragraph}>
		  Making sure that the proper procedures are used to contain, neutralize, and analyze security incidents and implement improvements to return affected systems to normal.
		</Text>
  
		<Text style={styles.subHeading}>5. Recover</Text>
		<Text style={styles.paragraph}>
		  The process of returning affected systems back to normal operation.
		</Text>
	  </ScrollView>
	);
  };

  export const Module4 = () => {
	return (
	  <ScrollView style={styles.container}>
		<Text style={styles.heading}>
		  Module 4: OWASP Security Principles
		</Text>
  
		<Text style={styles.paragraph}>
		  Open Web Application Security Project (OWASP) identifies the most critical web application security risks, providing developers and security teams with key insights into common vulnerabilities and threats.
		</Text>
  
		<Text style={styles.subHeading}>OWASP Principles</Text>
  
		<Text style={styles.subHeading}>1. Minimize the Attack Surface Areas and Vectors</Text>
		<Text style={styles.paragraph}>
		  Attack Vector: These are pathways attackers use to penetrate security defenses. For example, phishing emails and weak passwords.
		</Text>
  
		<Text style={styles.subHeading}>2. Principle of Least Privilege</Text>
		<Text style={styles.paragraph}>
		  Means ensuring that users have the least amount of access required to perform their everyday tasks.
		</Text>
  
		<Text style={styles.subHeading}>3. Defense in Depth</Text>
		<Text style={styles.paragraph}>
		  Means that an organization should have multiple security controls that address risks and threats in different ways.
		</Text>
  
		<Text style={styles.subHeading}>4. Separation of Duties</Text>
		<Text style={styles.paragraph}>
		  Means that no one should be given so many privileges that they can misuse the system.
		</Text>
  
		<Text style={styles.subHeading}>5. Keep Security Simple</Text>
		<Text style={styles.paragraph}>
		  Keep the security design as simple as possible to avoid complexities that can create vulnerabilities.
		</Text>
  
		<Text style={styles.subHeading}>6. Fix Security Issues Correctly</Text>
		<Text style={styles.paragraph}>
		  Security issues should be addressed and fixed properly rather than just patching them to create a temporary solution.
		</Text>
	  </ScrollView>
	);
  };

  export const Module5 = () => {
	return (
	  <ScrollView style={styles.container}>
		<Text style={styles.heading}>
		  Module 5: Security Audit
		</Text>
  
		<Text style={styles.paragraph}>
		  A security audit is a review of an organization’s security controls, policies, and procedures against a set of expectations.
		</Text>
  
		<Text style={styles.subHeading}>Types of Security Audits</Text>
  
		<Text style={styles.paragraph}>
		  1. External{"\n"}
		  2. Internal
		</Text>
  
		<Text style={styles.subHeading}>Purpose of Security Audits</Text>
		<Text style={styles.paragraph}>
		  - Identify organizational risks{"\n"}
		  - Asset control{"\n"}
		  - Correct compliance issues
		</Text>
  
		<Text style={styles.subHeading}>Common Elements of Internal Audits</Text>
		<Text style={styles.paragraph}>
		  - Establishing the scope and goals of the audits{"\n"}
		  - Conducting a risk assessment of the organization's assets{"\n"}
		  - Assessing compliance{"\n"}
		  - Completing a controls assessment{"\n"}
		  - Communicating results to the stakeholders
		</Text>
	  </ScrollView>
	);
  };

  export const Module6 = () => {
	return (
	  <ScrollView style={styles.container}>
		<Text style={styles.heading}>
		  Module 6: Log, SIEM Dashboard
		</Text>
  
		<Text style={styles.subHeading}>LOG</Text>
		<Text style={styles.paragraph}>
		  A log is a record of events that occur within an organization’s system and network.
		</Text>
  
		<Text style={styles.subHeading}>Common Log Sources</Text>
		<Text style={styles.paragraph}>
		  1. Firewall logs{"\n"}
		  2. Network logs{"\n"}
		  3. Server logs
		</Text>
  
		<Text style={styles.subHeading}>Firewall Log</Text>
		<Text style={styles.paragraph}>
		  A firewall log is a record of attempted or established connections for incoming traffic from the internet. It includes outbound requests to the internet from within the network.
		</Text>
  
		<Text style={styles.subHeading}>Network Log</Text>
		<Text style={styles.paragraph}>
		  A network log is a record of all computers and devices that enter and leave the network. It also records connections between devices and services on the network.
		</Text>
  
		<Text style={styles.subHeading}>Server Log</Text>
		<Text style={styles.paragraph}>
		  A server log is a record of events related to services, such as websites, emails, or file shares. It includes actions such as login, password, and username requests.
		</Text>
  
		<Text style={styles.subHeading}>SIEM</Text>
		<Text style={styles.paragraph}>
		  SIEM is an application that collects and analyzes log data to monitor critical activities in an organization.
		</Text>
  
		<Text style={styles.subHeading}>Functions of SIEM</Text>
		<Text style={styles.paragraph}>
		  - It stores all log data in a centralized location.{"\n"}
		  - It indexes and minimizes the number of logs a security analyst must manually review and analyze.{"\n"}
		  - It increases efficiency and saves time.
		</Text>
  
		<Text style={styles.subHeading}>Types of SIEM Tools</Text>
		<Text style={styles.paragraph}>
		  1. Self-hosted: Requires organizations to install, operate, and maintain the tools using their own physical infrastructure, such as server capabilities.{"\n"}
		  2. Cloud-hosted: These are maintained and managed by SIEM providers, making them accessible through the internet.{"\n"}
		  3. Hybrid solution: A combination of both self-hosted and cloud-hosted.
		</Text>
  
		<Text style={styles.subHeading}>SIEM Dashboard</Text>
		<Text style={styles.paragraph}>
		  SIEM dashboards help security analysts quickly and easily access their organization’s security information, presented as charts, graphs, or tables.
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

  