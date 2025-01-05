import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { colors } from "../constants/styling";

export const Quiz5 = [
	{
		question: "What is the primary goal of incident response?",
		answer: 2,
		options: [
			{ id: 1, option: "To prevent security incidents" },
			{ id: 2, option: "To detect and respond to security incidents" },
			{ id: 3, option: "To recover from security incidents" },
			{ id: 4, option: "To provide security awareness training" },
		],
	},
	{
		question:
			"Which of the following is a phase of the incident response life cycle?",
		answer: 4,
		options: [
			{ id: 1, option: "Preparation" },
			{ id: 2, option: "Detection" },
			{ id: 3, option: "Containment" },
			{ id: 4, option: "All of the above" },
		],
	},
	{
		question:
			"What is the purpose of the preparation phase of incident response?",
		answer: 4,
		options: [
			{ id: 1, option: "To detect and respond to security incidents" },
			{ id: 2, option: "To contain and eradicate security incidents" },
			{ id: 3, option: "To recover from security incidents" },
			{
				id: 4,
				option: "To establish incident response policies and procedures",
			},
		],
	},
	{
		question: "Which of the following is a type of security incident?",
		answer: 4,
		options: [
			{ id: 1, option: "Malware outbreak" },
			{ id: 2, option: "Unauthorized access" },
			{ id: 3, option: "Denial of Service (DoS) attack" },
			{ id: 4, option: "All of the above" },
		],
	},
	{
		question:
			"What is the purpose of the detection phase of incident response?",
		answer: 3,
		options: [
			{ id: 1, option: "To contain and eradicate security incidents" },
			{ id: 2, option: "To recover from security incidents" },
			{ id: 3, option: "To identify and report security incidents" },
			{
				id: 4,
				option: "To establish incident response policies and procedures",
			},
		],
	},
	{
		question: "Which of the following is a tool used for incident response?",
		answer: 4,
		options: [
			{ id: 1, option: "Incident response plan" },
			{ id: 2, option: "Incident response team" },
			{ id: 3, option: "Incident response software" },
			{ id: 4, option: "All of the above" },
		],
	},
	{
		question:
			"What is the purpose of the containment phase of incident response?",
		answer: 2,
		options: [
			{ id: 1, option: "To detect and respond to security incidents" },
			{ id: 2, option: "To contain and eradicate security incidents" },
			{ id: 3, option: "To recover from security incidents" },
			{
				id: 4,
				option: "To establish incident response policies and procedures",
			},
		],
	},
	{
		question: "Which of the following is a benefit of incident response?",
		answer: 4,
		options: [
			{ id: 1, option: "Improved security posture" },
			{ id: 2, option: "Enhanced compliance" },
			{ id: 3, option: "Increased efficiency" },
			{ id: 4, option: "All of the above" },
		],
	},
	{
		question: "What is the purpose of the recovery phase of incident response?",
		answer: 3,
		options: [
			{ id: 1, option: "To detect and respond to security incidents" },
			{ id: 2, option: "To contain and eradicate security incidents" },
			{ id: 3, option: "To recover from security incidents" },
			{
				id: 4,
				option: "To establish incident response policies and procedures",
			},
		],
	},
	{
		question: "What is the purpose of incident response documentation?",
		answer: 1,
		options: [
			{ id: 1, option: "To provide a framework for incident response" },
			{ id: 2, option: "To provide guidance for incident response" },
			{ id: 3, option: "To provide evidence of incident response" },
			{ id: 4, option: "To provide training for incident response" },
		],
	},
	{
		question:
			"Which of the following is a type of incident response documentation?",
		answer: 4,
		options: [
			{ id: 1, option: "Incident response plan" },
			{ id: 2, option: "Incident response procedure" },
			{ id: 3, option: "Incident response report" },
			{ id: 4, option: "All of the above" },
		],
	},
	{
		question: "What is the purpose of an incident response plan?",
		answer: 2,
		options: [
			{ id: 1, option: "To provide guidance for incident response" },
			{ id: 2, option: "To provide a framework for incident response" },
			{ id: 3, option: "To provide evidence of incident response" },
			{ id: 4, option: "To provide training for incident response" },
		],
	},
	{
		question:
			"Which of the following is a benefit of incident response documentation?",
		answer: 4,
		options: [
			{ id: 1, option: "Improved security posture" },
			{ id: 2, option: "Enhanced compliance" },
			{ id: 3, option: "Increased efficiency" },
			{ id: 4, option: "All of the above" },
		],
	},
	{
		question: "What is the purpose of an incident response report?",
		answer: 3,
		options: [
			{ id: 1, option: "To provide guidance for incident response" },
			{ id: 2, option: "To provide a framework for incident response" },
			{ id: 3, option: "To provide evidence of incident response" },
			{ id: 4, option: "To provide training for incident response" },
		],
	},
	{
		question:
			"Which of the following is a best practice for incident response documentation?",
		answer: 4,
		options: [
			{ id: 1, option: "To review and update documentation regularly" },
			{ id: 2, option: "To use a standardized template for documentation" },
			{ id: 3, option: "To include all relevant details in documentation" },
			{ id: 4, option: "All of the above" },
		],
	},
	{
		question:
			"What is the purpose of incident response documentation templates?",
		answer: 4,
		options: [
			{ id: 1, option: "To provide guidance for incident response" },
			{ id: 2, option: "To provide a framework for incident response" },
			{ id: 3, option: "To provide evidence of incident response" },
			{ id: 4, option: "To provide a standardized format for documentation" },
		],
	},
	{
		question:
			"Which of the following is a benefit of using incident response documentation templates?",
		answer: 4,
		options: [
			{ id: 1, option: "Improved security posture" },
			{ id: 2, option: "Enhanced compliance" },
			{ id: 3, option: "Increased efficiency" },
			{ id: 4, option: "All of the above" },
		],
	},
	{
		question:
			"What is the primary goal of the detection and analysis phase of incident response?",
		answer: 4,
		options: [
			{ id: 1, option: "To contain the incident" },
			{ id: 2, option: "To eradicate the incident" },
			{ id: 3, option: "To recover from the incident" },
			{ id: 4, option: "To identify and analyze the incident" },
		],
	},
	{
		question:
			"Which of the following is a type of detection method used in incident response?",
		answer: 4,
		options: [
			{ id: 1, option: "Anomaly-based detection" },
			{ id: 2, option: "Signature-based detection" },
			{ id: 3, option: "Behavioral-based detection" },
			{ id: 4, option: "All of the above" },
		],
	},
	{
		question:
			"What is the purpose of incident analysis in the detection and analysis phase?",
		answer: 4,
		options: [
			{ id: 1, option: "To identify the root cause of the incident" },
			{ id: 2, option: "To determine the scope of the incident" },
			{ id: 3, option: "To assess the impact of the incident" },
			{ id: 4, option: "All of the above" },
		],
	},
	{
		question:
			"Which of the following tools is commonly used for incident analysis?",
		answer: 4,
		options: [
			{ id: 1, option: "Incident response software" },
			{ id: 2, option: "Forensic analysis tools" },
			{ id: 3, option: "Network monitoring tools" },
			{ id: 4, option: "All of the above" },
		],
	},
	{
		question:
			"What is the purpose of creating an incident timeline in the detection and analysis phase?",
		answer: 4,
		options: [
			{ id: 1, option: "To identify the root cause of the incident" },
			{ id: 2, option: "To determine the scope of the incident" },
			{ id: 3, option: "To assess the impact of the incident" },
			{ id: 4, option: "To provide a chronological record of the incident" },
		],
	},
	{
		question:
			"Which of the following is a type of data that may be collected during the detection and analysis phase?",
		answer: 4,
		options: [
			{ id: 1, option: "Network logs" },
			{ id: 2, option: "System logs" },
			{ id: 3, option: "Application logs" },
			{ id: 4, option: "All of the above" },
		],
	},
	{
		question:
			"What is the purpose of conducting a root cause analysis (RCA) in the detection and analysis phase?",
		answer: 1,
		options: [
			{ id: 1, option: "To identify the root cause of the incident" },
			{ id: 2, option: "To determine the scope of the incident" },
			{ id: 3, option: "To assess the impact of the incident" },
			{ id: 4, option: "To provide recommendations for incident prevention" },
		],
	},
	{
		question:
			"Which of the following is a benefit of using a structured approach to incident analysis?",
		answer: 4,
		options: [
			{ id: 1, option: "Improved incident response times" },
			{ id: 2, option: "Enhanced incident response effectiveness" },
			{ id: 3, option: "Increased incident response efficiency" },
			{ id: 4, option: "All of the above" },
		],
	},
	{
		question: "What is the purpose of documenting incident analysis results?",
		answer: 4,
		options: [
			{ id: 1, option: "To provide a record of the incident" },
			{ id: 2, option: "To provide recommendations for incident prevention" },
			{ id: 3, option: "To provide a basis for incident response improvement" },
			{ id: 4, option: "All of the above" },
		],
	},
	{
		question: "What is the triangle in incident response?",
		answer: 1,
		options: [
			{ id: 1, option: "People, Process, Technology" },
			{ id: 2, option: "Prevention, Detection, Response" },
			{ id: 3, option: "Preparation, Response, Recovery" },
			{ id: 4, option: "Identification, Containment, Eradication" },
		],
	},
	{
		question:
			"Which of the following is a component of the people element of the triangle?",
		answer: 4,
		options: [
			{ id: 1, option: "Incident response team" },
			{ id: 2, option: "Incident response plan" },
			{ id: 3, option: "Incident response training" },
			{ id: 4, option: "All of the above" },
		],
	},
	{
		question: "What is the purpose of the process element of the triangle?",
		answer: 1,
		options: [
			{ id: 1, option: "To provide a framework for incident response" },
			{ id: 2, option: "To provide guidance for incident response" },
			{ id: 3, option: "To provide training for incident response" },
			{ id: 4, option: "To provide technology for incident response" },
		],
	},
	{
		question:
			"Which of the following is a component of the technology element of the triangle?",
		answer: 4,
		options: [
			{ id: 1, option: "Incident response software" },
			{ id: 2, option: "Network monitoring tools" },
			{ id: 3, option: "Forensic analysis tools" },
			{ id: 4, option: "All of the above" },
		],
	},
	{
		question:
			"What is the benefit of using a balanced approach to incident response, incorporating all three elements of the triangle?",
		answer: 4,
		options: [
			{ id: 1, option: "Improved incident response times" },
			{ id: 2, option: "Enhanced incident response effectiveness" },
			{ id: 3, option: "Increased incident response efficiency" },
			{ id: 4, option: "All of the above" },
		],
	},
	{
		question:
			"Which of the following is a challenge associated with implementing the triangle in incident response?",
		answer: 4,
		options: [
			{ id: 1, option: "Ensuring adequate resources" },
			{ id: 2, option: "Ensuring adequate training" },
			{ id: 3, option: "Ensuring adequate technology" },
			{ id: 4, option: "All of the above" },
		],
	},
	{
		question:
			"What is the purpose of continuously reviewing and updating the triangle in incident response?",
		answer: 4,
		options: [
			{ id: 1, option: "To ensure incident response effectiveness" },
			{ id: 2, option: "To ensure incident response efficiency" },
			{ id: 3, option: "To ensure incident response compliance" },
			{ id: 4, option: "To ensure incident response improvement" },
		],
	},
	{
		question:
			"Which of the following is a benefit of using the triangle in incident response?",
		answer: 4,
		options: [
			{ id: 1, option: "Improved incident response times" },
			{ id: 2, option: "Enhanced incident response effectiveness" },
			{ id: 3, option: "Increased incident response efficiency" },
			{ id: 4, option: "All of the above" },
		],
	},
	{
		question:
			"What is the primary goal of the post-incident phase of incident response?",
		answer: 4,
		options: [
			{ id: 1, option: "To contain the incident" },
			{ id: 2, option: "To eradicate the incident" },
			{ id: 3, option: "To recover from the incident" },
			{ id: 4, option: "To document lessons learned" },
		],
	},
	{
		question:
			"Which of the following activities is typically performed during the post-incident phase?",
		answer: 4,
		options: [
			{ id: 1, option: "Incident containment" },
			{ id: 2, option: "Incident eradication" },
			{ id: 3, option: "Incident recovery" },
			{ id: 4, option: "Post-incident review" },
		],
	},
	{
		question: "What is the purpose of a post-incident review?",
		answer: 4,
		options: [
			{ id: 1, option: "To identify the root cause of the incident" },
			{ id: 2, option: "To determine the scope of the incident" },
			{ id: 3, option: "To assess the impact of the incident" },
			{ id: 4, option: "To document lessons learned" },
		],
	},
	{
		question:
			"Which of the following is a benefit of conducting a post-incident review?",
		answer: 4,
		options: [
			{ id: 1, option: "Improved incident response times" },
			{ id: 2, option: "Enhanced incident response effectiveness" },
			{ id: 3, option: "Increased incident response efficiency" },
			{ id: 4, option: "Identification of areas for improvement" },
		],
	},
	{
		question: "What is the purpose of creating a lessons learned document?",
		answer: 3,
		options: [
			{ id: 1, option: "To provide a record of the incident" },
			{ id: 2, option: "To provide recommendations for incident prevention" },
			{ id: 3, option: "To provide a basis for incident response improvement" },
			{ id: 4, option: "To provide a framework for incident response" },
		],
	},
	{
		question:
			"Which of the following is a best practice for post-incident activities?",
		answer: 4,
		options: [
			{ id: 1, option: "To conduct a post-incident review" },
			{ id: 2, option: "To create a lessons learned document" },
			{ id: 3, option: "To update incident response policies and procedures" },
			{ id: 4, option: "All of the above" },
		],
	},
	{
		question:
			"What is the purpose of updating incident response policies and procedures?",
		answer: 1,
		options: [
			{ id: 1, option: "To improve incident response effectiveness" },
			{ id: 2, option: "To improve incident response efficiency" },
			{ id: 3, option: "To ensure compliance with regulations" },
			{ id: 4, option: "To provide a framework for incident response" },
		],
	},
	{
		question:
			"Which of the following is a benefit of conducting post-incident activities?",
		answer: 4,
		options: [
			{ id: 1, option: "Improved incident response times" },
			{ id: 2, option: "Enhanced incident response effectiveness" },
			{ id: 3, option: "Increased incident response efficiency" },
			{ id: 4, option: "Reduced risk of future incidents" },
		],
	},
	{
		question:
			"What is the purpose of sharing lessons learned with other teams and organizations?",
		answer: 4,
		options: [
			{ id: 1, option: "To improve incident response effectiveness" },
			{ id: 2, option: "To improve incident response efficiency" },
			{ id: 3, option: "To ensure compliance with regulations" },
			{ id: 4, option: "To promote collaboration and knowledge sharing" },
		],
	},
	{
		question: "What is the primary goal of building a career in cybersecurity?",
		answer: 2,
		options: [
			{ id: 1, option: "To obtain a job in cybersecurity" },
			{ id: 2, option: "To advance in a cybersecurity career" },
			{
				id: 3,
				option:
					"To stay up-to-date with the latest cybersecurity threats and trends",
			},
			{ id: 4, option: "To transition into a cybersecurity career" },
		],
	},
	{
		question:
			"Which of the following is a key skill for a cybersecurity professional?",
		answer: 4,
		options: [
			{ id: 1, option: "Programming skills" },
			{ id: 2, option: "Networking skills" },
			{ id: 3, option: "Analytical skills" },
			{ id: 4, option: "All of the above" },
		],
	},
	{
		question:
			"What is the purpose of obtaining certifications in cybersecurity?",
		answer: 1,
		options: [
			{ id: 1, option: "To demonstrate expertise in cybersecurity" },
			{
				id: 2,
				option:
					"To stay up-to-date with the latest cybersecurity threats and trends",
			},
			{ id: 3, option: "To advance in a cybersecurity career" },
			{ id: 4, option: "To obtain a job in cybersecurity" },
		],
	},
	{
		question:
			"Which of the following is a benefit of attending conferences and workshops in cybersecurity?",
		answer: 4,
		options: [
			{
				id: 1,
				option:
					"To stay up-to-date with the latest cybersecurity threats and trends",
			},
			{ id: 2, option: "To network with other cybersecurity professionals" },
			{
				id: 3,
				option: "To learn about new cybersecurity technologies and techniques",
			},
			{ id: 4, option: "All of the above" },
		],
	},
	{
		question: "What is the purpose of creating a lessons learned document?",
		answer: 3,
		options: [
			{ id: 1, option: "To provide a record of the incident" },
			{ id: 2, option: "To provide recommendations for incident prevention" },
			{ id: 3, option: "To provide a basis for incident response improvement" },
			{ id: 4, option: "To provide a framework for incident response" },
		],
	},
	{
		question:
			"Which of the following is a best practice for post-incident activities?",
		answer: 4,
		options: [
			{ id: 1, option: "To conduct a post-incident review" },
			{ id: 2, option: "To create a lessons learned document" },
			{ id: 3, option: "To update incident response policies and procedures" },
			{ id: 4, option: "All of the above" },
		],
	},
	{
		question:
			"What is the purpose of updating incident response policies and procedures?",
		answer: 1,
		options: [
			{ id: 1, option: "To improve incident response effectiveness" },
			{ id: 2, option: "To improve incident response efficiency" },
			{ id: 3, option: "To ensure compliance with regulations" },
			{ id: 4, option: "To provide a framework for incident response" },
		],
	},
	{
		question:
			"Which of the following is a benefit of conducting post-incident activities?",
		answer: 4,
		options: [
			{ id: 1, option: "Improved incident response times" },
			{ id: 2, option: "Enhanced incident response effectiveness" },
			{ id: 3, option: "Increased incident response efficiency" },
			{ id: 4, option: "Reduced risk of future incidents" },
		],
	},
	{
		question:
			"What is the purpose of sharing lessons learned with other teams and organizations?",
		answer: 4,
		options: [
			{ id: 1, option: "To improve incident response effectiveness" },
			{ id: 2, option: "To improve incident response efficiency" },
			{ id: 3, option: "To ensure compliance with regulations" },
			{ id: 4, option: "To promote collaboration and knowledge sharing" },
		],
	},
	{
		question: "What is the primary goal of building a career in cybersecurity?",
		answer: 2,
		options: [
			{ id: 1, option: "To obtain a job in cybersecurity" },
			{ id: 2, option: "To advance in a cybersecurity career" },
			{
				id: 3,
				option:
					"To stay up-to-date with the latest cybersecurity threats and trends",
			},
			{ id: 4, option: "To transition into a cybersecurity career" },
		],
	},
	{
		question:
			"Which of the following is a key skill for a cybersecurity professional?",
		answer: 4,
		options: [
			{ id: 1, option: "Programming skills" },
			{ id: 2, option: "Networking skills" },
			{ id: 3, option: "Analytical skills" },
			{ id: 4, option: "All of the above" },
		],
	},
	{
		question:
			"What is the purpose of obtaining certifications in cybersecurity?",
		answer: 1,
		options: [
			{ id: 1, option: "To demonstrate expertise in cybersecurity" },
			{
				id: 2,
				option:
					"To stay up-to-date with the latest cybersecurity threats and trends",
			},
			{ id: 3, option: "To advance in a cybersecurity career" },
			{ id: 4, option: "To obtain a job in cybersecurity" },
		],
	},
	{
		question:
			"Which of the following is a benefit of attending conferences and workshops in cybersecurity?",
		answer: 4,
		options: [
			{
				id: 1,
				option:
					"To stay up-to-date with the latest cybersecurity threats and trends",
			},
			{ id: 2, option: "To network with other cybersecurity professionals" },
			{
				id: 3,
				option: "To learn about new cybersecurity technologies and techniques",
			},
			{ id: 4, option: "All of the above" },
		],
	},
	{
		question:
			"What is the purpose of joining online communities and forums in cybersecurity?",
		answer: 4,
		options: [
			{
				id: 1,
				option:
					"To stay up-to-date with the latest cybersecurity threats and trends",
			},
			{ id: 2, option: "To network with other cybersecurity professionals" },
			{
				id: 3,
				option: "To learn about new cybersecurity technologies and techniques",
			},
			{
				id: 4,
				option: "To collaborate with other cybersecurity professionals",
			},
		],
	},
	{
		question:
			"Which of the following is a key characteristic of a successful cybersecurity professional?",
		answer: 4,
		options: [
			{ id: 1, option: "Strong technical skills" },
			{ id: 2, option: "Strong analytical skills" },
			{ id: 3, option: "Strong communication skills" },
			{ id: 4, option: "All of the above" },
		],
	},
	{
		question: "What is the purpose of setting career goals in cybersecurity?",
		answer: 1,
		options: [
			{ id: 1, option: "To advance in a cybersecurity career" },
			{
				id: 2,
				option:
					"To stay up-to-date with the latest cybersecurity threats and trends",
			},
			{ id: 3, option: "To network with other cybersecurity professionals" },
			{ id: 4, option: "To demonstrate expertise in cybersecurity" },
		],
	},
];

export const Module1 = () => {
	return (
	  <ScrollView style={styles.container}>
		<Text style={styles.heading}>Module 1: The Incident Response Life Cycle</Text>
  
		<Text style={styles.subHeading}>What is the Incident Response Life Cycle?</Text>
		<Text style={styles.paragraph}>
		  The Incident Response Life Cycle is a structured approach to managing and responding to security incidents. It consists of several phases that help organizations detect, contain, and recover from security incidents. Below are the phases of the Incident Response Life Cycle.
		</Text>
  
		<Text style={styles.subHeading}>Phase 1: Preparation</Text>
		<Text style={styles.paragraph}>
		  1. Develop an incident response plan: Establish a plan that outlines the procedures for responding to security incidents.
		</Text>
		<Text style={styles.paragraph}>
		  2. Establish an incident response team: Assemble a team of experts who will respond to security incidents.
		</Text>
		<Text style={styles.paragraph}>
		  3. Conduct training and awareness programs: Educate employees on the importance of incident response and their roles in the process.
		</Text>
		<Text style={styles.paragraph}>
		  4. Develop incident response procedures: Create procedures for responding to specific types of incidents, such as malware outbreaks or unauthorized access.
		</Text>
  
		<Text style={styles.subHeading}>Phase 2: Identification</Text>
		<Text style={styles.paragraph}>
		  1. Monitor for potential incidents: Continuously monitor systems, networks, and applications for signs of potential security incidents.
		</Text>
		<Text style={styles.paragraph}>
		  2. Detect anomalies: Use tools and techniques to detect anomalies that may indicate a security incident.
		</Text>
		<Text style={styles.paragraph}>
		  3. Assess the situation: Evaluate the situation to determine if an incident has occurred.
		</Text>
  
		<Text style={styles.subHeading}>Phase 3: Containment</Text>
		<Text style={styles.paragraph}>
		  1. Isolate affected systems: Isolate systems or networks that have been affected by the incident to prevent further damage.
		</Text>
		<Text style={styles.paragraph}>
		  2. Block malicious traffic: Block malicious traffic to prevent further exploitation of the vulnerability.
		</Text>
		<Text style={styles.paragraph}>
		  3. Activate incident response plan: Activate the incident response plan and notify the incident response team.
		</Text>
  
		<Text style={styles.subHeading}>Phase 4: Eradication</Text>
		<Text style={styles.paragraph}>
		  1. Remove malware or threats: Remove malware or other threats from affected systems.
		</Text>
		<Text style={styles.paragraph}>
		  2. Patch vulnerabilities: Patch vulnerabilities that were exploited during the incident.
		</Text>
		<Text style={styles.paragraph}>
		  3. Restore systems: Restore systems to a known good state.
		</Text>
  
		<Text style={styles.subHeading}>Phase 5: Recovery</Text>
		<Text style={styles.paragraph}>
		  1. Restore business operations: Restore business operations to normal.
		</Text>
		<Text style={styles.paragraph}>
		  2. Restore systems and data: Restore systems and data from backups.
		</Text>
		<Text style={styles.paragraph}>
		  3. Conduct post-incident activities: Conduct post-incident activities, such as incident reporting and lessons learned.
		</Text>
  
		<Text style={styles.subHeading}>Phase 6: Lessons Learned</Text>
		<Text style={styles.paragraph}>
		  1. Conduct a post-incident review: Conduct a post-incident review to identify lessons learned.
		</Text>
		<Text style={styles.paragraph}>
		  2. Identify areas for improvement: Identify areas for improvement in the incident response process.
		</Text>
		<Text style={styles.paragraph}>
		  3. Update incident response plan: Update the incident response plan to reflect lessons learned.
		</Text>
  
		<Text style={styles.paragraph}>
		  By following the Incident Response Life Cycle, organizations can effectively manage and respond to security incidents, minimizing the impact on business operations and reducing the risk of future incidents.
		</Text>
	  </ScrollView>
	);
  };

  export const Module2 = () => {
	return (
	  <ScrollView style={styles.container}>
		<Text style={styles.heading}>Module 2: Documentation</Text>
  
		<Text style={styles.subHeading}>What is Documentation in Cybersecurity?</Text>
		<Text style={styles.paragraph}>
		  Documentation in cybersecurity is the process of creating, maintaining, and storing records of cybersecurity-related information, such as policies, procedures, incident response plans, and audit logs. Effective documentation is essential for ensuring the confidentiality, integrity, and availability of an organization's information assets.
		</Text>
  
		<Text style={styles.subHeading}>Types of Documentation in Cybersecurity:</Text>
		<Text style={styles.paragraph}>
		  <Text style={styles.bold}>1. Policies:</Text> High-level documents that outline an organization's cybersecurity goals, objectives, and principles.
		</Text>
		<Text style={styles.paragraph}>
		  <Text style={styles.bold}>2. Procedures:</Text> Step-by-step instructions for implementing cybersecurity policies and controls.
		</Text>
		<Text style={styles.paragraph}>
		  <Text style={styles.bold}>3. Incident Response Plans:</Text> Documents that outline the procedures for responding to cybersecurity incidents, such as data breaches or ransomware attacks.
		</Text>
		<Text style={styles.paragraph}>
		  <Text style={styles.bold}>4. Audit Logs:</Text> Records of system and network activity, used to detect and investigate cybersecurity incidents.
		</Text>
		<Text style={styles.paragraph}>
		  <Text style={styles.bold}>5. Risk Assessments:</Text> Documents that identify and evaluate potential cybersecurity risks to an organization's information assets.
		</Text>
		<Text style={styles.paragraph}>
		  <Text style={styles.bold}>6. Compliance Documents:</Text> Records of an organization's compliance with relevant cybersecurity laws, regulations, and standards.
		</Text>
  
		<Text style={styles.subHeading}>Benefits of Documentation in Cybersecurity:</Text>
		<Text style={styles.paragraph}>
		  <Text style={styles.bold}>1. Improved Incident Response:</Text> Effective documentation enables organizations to respond quickly and effectively to cybersecurity incidents.
		</Text>
		<Text style={styles.paragraph}>
		  <Text style={styles.bold}>2. Enhanced Compliance:</Text> Documentation helps organizations demonstrate compliance with relevant cybersecurity laws, regulations, and standards.
		</Text>
		<Text style={styles.paragraph}>
		  <Text style={styles.bold}>3. Better Risk Management:</Text> Documentation enables organizations to identify and evaluate potential cybersecurity risks, and implement controls to mitigate those risks.
		</Text>
		<Text style={styles.paragraph}>
		  <Text style={styles.bold}>4. Increased Transparency:</Text> Documentation provides a clear understanding of an organization's cybersecurity policies, procedures, and controls.
		</Text>
		<Text style={styles.paragraph}>
		  <Text style={styles.bold}>5. Improved Continuity:</Text> Documentation ensures that cybersecurity knowledge and expertise are retained within an organization, even when personnel change.
		</Text>
	  </ScrollView>
	);
  };

  export const Module3 = () => {
	return (
	  <ScrollView style={styles.container}>
		<Text style={styles.heading}>Module 3: The Detection and Analysis Phase of Incident Response</Text>
  
		<Text style={styles.subHeading}>Detection</Text>
		<Text style={styles.paragraph}>
		  The detection phase involves identifying signs of suspicious activity within systems, networks, and applications. Key steps in detection include:
		</Text>
		<Text style={styles.paragraph}>
		  <Text style={styles.bold}>1. Monitoring:</Text> Continuously monitor systems, networks, and applications for signs of suspicious activity.
		</Text>
		<Text style={styles.paragraph}>
		  <Text style={styles.bold}>2. Alerts and Notifications:</Text> Receive alerts and notifications from various sources, such as intrusion detection systems, antivirus software, and log monitoring tools.
		</Text>
		<Text style={styles.paragraph}>
		  <Text style={styles.bold}>3. Initial Assessment:</Text> Conduct an initial assessment to determine if an incident has occurred.
		</Text>
  
		<Text style={styles.subHeading}>Analysis</Text>
		<Text style={styles.paragraph}>
		  The analysis phase involves gathering data and understanding the nature of the incident. Key steps in analysis include:
		</Text>
		<Text style={styles.paragraph}>
		  <Text style={styles.bold}>1. Data Collection:</Text> Collect relevant data, such as logs, network captures, and system images.
		</Text>
		<Text style={styles.paragraph}>
		  <Text style={styles.bold}>2. Initial Analysis:</Text> Perform an initial analysis of the collected data to identify potential security incidents.
		</Text>
		<Text style={styles.paragraph}>
		  <Text style={styles.bold}>3. Threat Intelligence:</Text> Gather threat intelligence from various sources, such as security feeds, threat reports, and industry alerts.
		</Text>
		<Text style={styles.paragraph}>
		  <Text style={styles.bold}>4. Incident Classification:</Text> Classify the incident based on its severity, impact, and potential consequences.
		</Text>
  
		<Text style={styles.subHeading}>Tools and Techniques</Text>
		<Text style={styles.paragraph}>The following tools and techniques are useful during the detection and analysis phase:</Text>
		<Text style={styles.paragraph}>
		  <Text style={styles.bold}>1. Intrusion Detection Systems (IDS):</Text> Use IDS to detect and alert on potential security incidents.
		</Text>
		<Text style={styles.paragraph}>
		  <Text style={styles.bold}>2. Log Management Tools:</Text> Use log management tools to collect, store, and analyze log data.
		</Text>
		<Text style={styles.paragraph}>
		  <Text style={styles.bold}>3. Network Monitoring Tools:</Text> Use network monitoring tools to detect and analyze network traffic.
		</Text>
		<Text style={styles.paragraph}>
		  <Text style={styles.bold}>4. Reverse Engineering:</Text> Use reverse engineering techniques to analyze malware and understand its behavior.
		</Text>
		<Text style={styles.paragraph}>
		  <Text style={styles.bold}>5. Digital Forensics:</Text> Use digital forensics techniques to collect and analyze evidence from compromised systems.
		</Text>
  
		<Text style={styles.subHeading}>Best Practices</Text>
		<Text style={styles.paragraph}>Follow these best practices during the detection and analysis phase:</Text>
		<Text style={styles.paragraph}>
		  <Text style={styles.bold}>1. Continuously Monitor Systems and Networks:</Text> Continuously monitor systems and networks for signs of suspicious activity.
		</Text>
		<Text style={styles.paragraph}>
		  <Text style={styles.bold}>2. Implement an Incident Response Plan:</Text> Implement an incident response plan that outlines the procedures for detecting and responding to security incidents.
		</Text>
		<Text style={styles.paragraph}>
		  <Text style={styles.bold}>3. Provide Training and Awareness:</Text> Provide training and awareness to personnel on the importance of incident detection and response.
		</Text>
		<Text style={styles.paragraph}>
		  <Text style={styles.bold}>4. Continuously Update and Refine Incident Response Plan:</Text> Continuously update and refine the incident response plan based on lessons learned from previous incidents.
		</Text>
	  </ScrollView>
	);
  };

  export const Module4 = () => {
	return (
	  <ScrollView style={styles.container}>
		<Text style={styles.heading}>Module 4: Triangle in Incident Response</Text>
  
		<Text style={styles.paragraph}>
		  The "Triangle of Incident Response" is a conceptual model that illustrates the three key elements of effective incident response:
		</Text>
  
		<Text style={styles.subHeading}>1. Detection</Text>
		<Text style={styles.paragraph}>
		  Detection involves identifying potential security incidents through the following actions:
		</Text>
		<Text style={styles.paragraph}>
		  <Text style={styles.bold}>- Monitoring:</Text> Continuously monitor systems, networks, and applications for signs of suspicious activity.
		</Text>
		<Text style={styles.paragraph}>
		  <Text style={styles.bold}>- Logging:</Text> Collect and analyze logs to identify any anomalous or malicious activity.
		</Text>
		<Text style={styles.paragraph}>
		  <Text style={styles.bold}>- Alerting:</Text> Set up alerts for any suspicious activity that could indicate an incident.
		</Text>
		<Text style={styles.paragraph}>
		  <Text style={styles.bold}>- Initial Assessment:</Text> Conduct an initial assessment and classification of the incident to determine its severity.
		</Text>
  
		<Text style={styles.subHeading}>2. Containment</Text>
		<Text style={styles.paragraph}>
		  Containment aims to limit the impact of the incident and prevent it from spreading further:
		</Text>
		<Text style={styles.paragraph}>
		  <Text style={styles.bold}>- Isolation:</Text> Isolate affected systems, networks, or data to prevent further damage.
		</Text>
		<Text style={styles.paragraph}>
		  <Text style={styles.bold}>- Temporary Fixes:</Text> Implement temporary fixes or workarounds to mitigate the impact while the incident is being addressed.
		</Text>
  
		<Text style={styles.subHeading}>3. Eradication</Text>
		<Text style={styles.paragraph}>
		  Eradication focuses on removing the root cause of the incident and restoring systems to a secure state:
		</Text>
		<Text style={styles.paragraph}>
		  <Text style={styles.bold}>- Remove Root Cause:</Text> Eliminate the cause of the incident, such as malware or unauthorized access.
		</Text>
		<Text style={styles.paragraph}>
		  <Text style={styles.bold}>- Restoration:</Text> Restore affected systems, networks, or data to a known good state.
		</Text>
		<Text style={styles.paragraph}>
		  <Text style={styles.bold}>- Permanent Fixes:</Text> Implement permanent fixes, patches, or updates to prevent similar incidents in the future.
		</Text>
  
		<Text style={styles.paragraph}>
		  The Triangle of Incident Response emphasizes the importance of balancing detection, containment, and eradication to effectively manage and respond to security incidents.
		</Text>
	  </ScrollView>
	);
  };

  
  export const Module5 = () => {
	return (
	  <ScrollView style={styles.container}>
		<Text style={styles.heading}>Module 5: The Post-Incident Phase of Incident Response</Text>
  
		<Text style={styles.paragraph}>
		  The post-incident phase of incident response is the final stage of the incident response process. This phase involves activities that occur after the incident has been contained and eradicated. The primary goals of the post-incident phase are to:
		</Text>
  
		<Text style={styles.subHeading}>1. Lessons Learned and Improvement</Text>
		<Text style={styles.paragraph}>
		  The lessons learned from an incident are essential for improving future response efforts:
		</Text>
		<Text style={styles.paragraph}>
		  <Text style={styles.bold}>- Post-Incident Review:</Text> Gather information about the incident, including its causes, impact, and response.
		</Text>
		<Text style={styles.paragraph}>
		  <Text style={styles.bold}>- Lessons Learned:</Text> Analyze the incident and the response to identify areas for improvement.
		</Text>
		<Text style={styles.paragraph}>
		  <Text style={styles.bold}>- Implement Changes:</Text> Implement changes to policies, procedures, and systems to prevent similar incidents from occurring in the future.
		</Text>
  
		<Text style={styles.subHeading}>2. Documentation and Reporting</Text>
		<Text style={styles.paragraph}>
		  Proper documentation ensures accountability and helps organizations learn from past incidents:
		</Text>
		<Text style={styles.paragraph}>
		  <Text style={styles.bold}>- Document the Incident:</Text> Create a detailed report of the incident, including its causes, impact, and response.
		</Text>
		<Text style={styles.paragraph}>
		  <Text style={styles.bold}>- Report to Stakeholders:</Text> Report the incident to relevant stakeholders, including management, customers, and regulatory bodies.
		</Text>
		<Text style={styles.paragraph}>
		  <Text style={styles.bold}>- Maintain Incident Records:</Text> Maintain records of the incident, including documentation and evidence.
		</Text>
  
		<Text style={styles.subHeading}>3. Recovery and Restoration</Text>
		<Text style={styles.paragraph}>
		  The recovery and restoration process ensures that systems are brought back online securely:
		</Text>
		<Text style={styles.paragraph}>
		  <Text style={styles.bold}>- Restore Systems and Data:</Text> Restore systems and data to a known good state.
		</Text>
		<Text style={styles.paragraph}>
		  <Text style={styles.bold}>- Recover from Backups:</Text> Recover data from backups if necessary.
		</Text>
		<Text style={styles.paragraph}>
		  <Text style={styles.bold}>- Test Systems and Data:</Text> Test systems and data to ensure they are functioning correctly.
		</Text>
  
		<Text style={styles.subHeading}>4. Continuous Improvement</Text>
		<Text style={styles.paragraph}>
		  Continuous improvement is vital for strengthening the incident response process over time:
		</Text>
		<Text style={styles.paragraph}>
		  <Text style={styles.bold}>- Review and Update Policies:</Text> Review and update policies and procedures to ensure they are effective and up-to-date.
		</Text>
		<Text style={styles.paragraph}>
		  <Text style={styles.bold}>- Provide Training and Awareness:</Text> Provide training and awareness to personnel on the incident and the lessons learned.
		</Text>
		<Text style={styles.paragraph}>
		  <Text style={styles.bold}>- Continuously Monitor and Evaluate:</Text> Continuously monitor and evaluate the incident response process to identify areas for improvement.
		</Text>
  
		<Text style={styles.paragraph}>
		  By following these steps, organizations can improve their preparedness and response capabilities for future incidents, ensuring a more resilient and secure environment.
		</Text>
	  </ScrollView>
	);
  };

  export const Module6 = () => {
	return (
	  <ScrollView style={styles.container}>
		<Text style={styles.heading}>Module 6: Building a Career in Cybersecurity</Text>
  
		<Text style={styles.paragraph}>
		  Building a career in cybersecurity requires a combination of education, technical skills, and experience. Here are some steps to help you build a career in cybersecurity:
		</Text>
  
		<Text style={styles.subHeading}>1. Education and Certifications</Text>
		<Text style={styles.paragraph}>
		  <Text style={styles.bold}>- Bachelor's Degree in a Relevant Field:</Text> Consider a degree in computer science, information assurance, or a related field.
		</Text>
		<Text style={styles.paragraph}>
		  <Text style={styles.bold}>- Cybersecurity Certifications:</Text> Obtain certifications like CompTIA Security+, CISSP, CEH, or CISM to demonstrate your expertise.
		</Text>
  
		<Text style={styles.subHeading}>2. Technical Skills</Text>
		<Text style={styles.paragraph}>
		  <Text style={styles.bold}>- Programming Skills:</Text> Learn programming languages like Python, C++, Java, or Ruby.
		</Text>
		<Text style={styles.paragraph}>
		  <Text style={styles.bold}>- Networking Fundamentals:</Text> Understand network protocols, devices, and architectures.
		</Text>
		<Text style={styles.paragraph}>
		  <Text style={styles.bold}>- Operating System Knowledge:</Text> Familiarize yourself with Windows, Linux, and macOS.
		</Text>
		<Text style={styles.paragraph}>
		  <Text style={styles.bold}>- Security Technologies:</Text> Learn about firewalls, intrusion detection systems, and encryption technologies.
		</Text>
		<Text style={styles.paragraph}>
		  <Text style={styles.bold}>- Cloud Security:</Text> Understand cloud security platforms like AWS, Azure, or Google Cloud.
		</Text>
  
		<Text style={styles.subHeading}>3. Experience and Training</Text>
		<Text style={styles.paragraph}>
		  <Text style={styles.bold}>- Internships:</Text> Participate in internships or co-op programs to gain hands-on experience.
		</Text>
		<Text style={styles.paragraph}>
		  <Text style={styles.bold}>- Volunteer:</Text> Volunteer for cybersecurity-related projects or participate in bug bounty programs.
		</Text>
		<Text style={styles.paragraph}>
		  <Text style={styles.bold}>- Online Courses and Training:</Text> Take online courses or attend workshops to stay up-to-date with the latest technologies and threats.
		</Text>
		<Text style={styles.paragraph}>
		  <Text style={styles.bold}>- Join Online Communities:</Text> Participate in online forums like Reddit's netsec community or Stack Overflow's security community.
		</Text>
  
		<Text style={styles.subHeading}>4. Career Paths</Text>
		<Text style={styles.paragraph}>
		  Explore various career paths in cybersecurity:
		</Text>
		<Text style={styles.paragraph}>
		  <Text style={styles.bold}>- Security Analyst:</Text> Monitor and analyze security event logs to identify potential threats.
		</Text>
		<Text style={styles.paragraph}>
		  <Text style={styles.bold}>- Penetration Tester:</Text> Simulate cyber attacks to test an organization's defenses.
		</Text>
		<Text style={styles.paragraph}>
		  <Text style={styles.bold}>- Incident Responder:</Text> Respond to and manage security incidents, such as data breaches or ransomware attacks.
		</Text>
		<Text style={styles.paragraph}>
		  <Text style={styles.bold}>- Chief Information Security Officer (CISO):</Text> Oversee an organization's overall cybersecurity strategy and program.
		</Text>
  
		<Text style={styles.subHeading}>5. Soft Skills</Text>
		<Text style={styles.paragraph}>
		  Soft skills are essential for success in the cybersecurity field:
		</Text>
		<Text style={styles.paragraph}>
		  <Text style={styles.bold}>- Communication:</Text> Develop strong communication skills to effectively explain technical concepts to non-technical stakeholders.
		</Text>
		<Text style={styles.paragraph}>
		  <Text style={styles.bold}>- Problem-Solving:</Text> Cultivate strong problem-solving skills to analyze complex security issues.
		</Text>
		<Text style={styles.paragraph}>
		  <Text style={styles.bold}>- Collaboration:</Text> Learn to work effectively with cross-functional teams, including development, operations, and management.
		</Text>
  
		<Text style={styles.subHeading}>6. Staying Current</Text>
		<Text style={styles.paragraph}>
		  To stay competitive, it’s important to stay up-to-date:
		</Text>
		<Text style={styles.paragraph}>
		  <Text style={styles.bold}>- Stay Up-to-Date with Industry News:</Text> Follow cybersecurity news and trends to stay informed.
		</Text>
		<Text style={styles.paragraph}>
		  <Text style={styles.bold}>- Attend Conferences and Workshops:</Text> Attend conferences and workshops to learn from industry experts and network with peers.
		</Text>
		<Text style={styles.paragraph}>
		  <Text style={styles.bold}>- Participate in Online Communities:</Text> Engage with online communities to stay current with the latest threats and technologies.
		</Text>
  
		<Text style={styles.paragraph}>
		  By following these steps, you can build a successful career in cybersecurity and stay ahead of the evolving threat landscape.
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