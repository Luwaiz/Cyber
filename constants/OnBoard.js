import ApplicationSec from "../assets/svg/applicationSec.svg";
import EndPoint from "../assets/svg/endpoint.svg";
import Network from "../assets/svg/networkSec.svg";

export const Preference = [
	{ number: 1, title: "Please pick a topic of interest" },
	{ number: 2, title: "Network security" },
	{ number: 3, title: "How much do you know?" },
	{ number: 4, title: "How much time would like to spend learning?" },
];

export const interest = [
	{ topic: "Block chain", rate: 20, image: <EndPoint /> },
	{ topic: "Network security", rate: 78, image: <Network /> },
	{ topic: "Internet of Things", rate: 50, image: <ApplicationSec /> },
];
export const chapters = [
	{	
		topic: "FOUNDATION OF CYBER SECURITY",
		image: <EndPoint />,
		modules: [
			{ title: "Introduction To Cybersecurity" },
			{ title: "Benefits Of Cybersecurity" },
			{ title: "Responsibility Of An Entry Level Cybersecurity Analyst" },
			{ title: "Key Cybersecurity Terms And Concept" },
			{ title: "Core Skills For Cybersecurity Professional" },
			{ title: "The Importance Of Security" },
			{ title: "Common Attacks And Their Effectiveness" },
			{ title: "Introduction To Security Frameworks And Control" },
			{ title: "Ethics Of Cybersecurity" },
		],
	},
	{
		topic: "RISK MANAGEMENT",
		image: <Network />,
		modules: [
			{ title: "Risk Management" },
			{ title: "Security Frame Work" },
			{ title: "Nist Framework" },
			{ title: "Oswap Security Principle" },
			{ title: "Security Audit" },
			{ title: "Log, Siem Dashboard" },
		],
	},
	{
		topic: "NETWORK AND NETWORK SECURITY",
		image: <ApplicationSec />,
		modules: [
			{ title: "Network" },
			{ title: "Cloud - Network" },
			{ title: "Network Communication" },
			{ title: "Network Protocols" },
			{ title: "Network Security" },
			{ title: "Security Hardening" },
		],
	},
	{
		topic: "ASSET, THREAT VULNERABILITY",
		image: <EndPoint />,
		modules: [
			{ title: "Risk, Asset And Vulnerability" },
			{ title: "Security Control" },
			{ title: "Cryptography" },
			{ title: "Assets Control Nd Authentication System" },
			{ title: "Osint" },
			{ title: "Vulnerability Assessment" },
		],
	},
	{
		topic: "DETECTION AND RESPONSE",
		image: <Network />,
		modules: [
			{ title: "The Incident Response Life Cycle" },
			{ title: "Documentation" },
			{ title: "The Detection And Analysis Phase Of Incident Response" },
			{ title: "Triangle In Incident Response" },
			{ title: "The Post Incident Phase Of Incident Response" },
			{ title: "Building A Career In Cyber Security" }
		],
	},
];
