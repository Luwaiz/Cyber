import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { colors } from "../constants/styling";

export const Quiz3 = [
	{
		question: "What is the primary function of a router?",
		answer: 1,
		options: [
			{ id: 1, option: "To connect multiple networks" },
			{ id: 2, option: "To connect multiple devices to a network" },
			{ id: 3, option: "To provide network security" },
			{ id: 4, option: "To provide network management" },
		],
	},
	{
		question: "Which of the following network protocols is used for routing?",
		answer: 4,
		options: [
			{ id: 1, option: "TCP/IP" },
			{ id: 2, option: "HTTP" },
			{ id: 3, option: "FTP" },
			{ id: 4, option: "BGP" },
		],
	},
	{
		question: "What is the difference between a LAN and a WAN?",
		answer: 2,
		options: [
			{
				id: 1,
				option: "A LAN is a small network, while a WAN is a large network",
			},
			{
				id: 2,
				option: "A LAN is a local network, while a WAN is a wide-area network",
			},
			{
				id: 3,
				option: "A LAN is a wireless network, while a WAN is a wired network",
			},
			{
				id: 4,
				option: "A LAN is a public network, while a WAN is a private network",
			},
		],
	},
	{
		question:
			"Which of the following network devices is used to connect multiple devices to a network?",
		answer: 2,
		options: [
			{ id: 1, option: "Router" },
			{ id: 2, option: "Switch" },
			{ id: 3, option: "Hub" },
			{ id: 4, option: "Modem" },
		],
	},
	{
		question: "What is the primary function of a firewall?",
		answer: 3,
		options: [
			{ id: 1, option: "To block incoming traffic" },
			{ id: 2, option: "To allow outgoing traffic" },
			{ id: 3, option: "To provide network security" },
			{ id: 4, option: "To provide network management" },
		],
	},
	{
		question:
			"Which of the following network protocols is used for secure communication?",
		answer: 2,
		options: [
			{ id: 1, option: "HTTP" },
			{ id: 2, option: "HTTPS" },
			{ id: 3, option: "FTP" },
			{ id: 4, option: "SSH" },
		],
	},
	{
		question:
			"What is the difference between a static IP address and a dynamic IP address?",
		answer: 2,
		options: [
			{
				id: 1,
				option:
					"A static IP address is assigned by a DHCP server, while a dynamic IP address is manually configured",
			},
			{
				id: 2,
				option:
					"A static IP address is manually configured, while a dynamic IP address is assigned by a DHCP server",
			},
			{
				id: 3,
				option:
					"A static IP address is used for public networks, while a dynamic IP address is used for private networks",
			},
			{
				id: 4,
				option:
					"A static IP address is used for private networks, while a dynamic IP address is used for public networks",
			},
		],
	},
	{
		question:
			"Which of the following network devices is used to connect a local network to the Internet?",
		answer: 4,
		options: [
			{ id: 1, option: "Router" },
			{ id: 2, option: "Switch" },
			{ id: 3, option: "Hub" },
			{ id: 4, option: "Modem" },
		],
	},
	{
		question: "What is the primary function of a VPN?",
		answer: 3,
		options: [
			{ id: 1, option: "To provide network security" },
			{ id: 2, option: "To provide network management" },
			{ id: 3, option: "To provide remote access to a network" },
			{ id: 4, option: "To provide network connectivity" },
		],
	},
	{
		question: "What is the primary benefit of using a cloud network?",
		answer: 4,
		options: [
			{ id: 1, option: "Improved security" },
			{ id: 2, option: "Increased scalability" },
			{ id: 3, option: "Reduced costs" },
			{ id: 4, option: "All of the above" },
		],
	},
	{
		question: "Which of the following cloud network models is most secure?",
		answer: 2,
		options: [
			{ id: 1, option: "Public cloud" },
			{ id: 2, option: "Private cloud" },
			{ id: 3, option: "Hybrid cloud" },
			{ id: 4, option: "Community cloud" },
		],
	},
	{
		question: "What is the primary function of a cloud network firewall?",
		answer: 3,
		options: [
			{ id: 1, option: "To block incoming traffic" },
			{ id: 2, option: "To allow outgoing traffic" },
			{ id: 3, option: "To provide network security" },
			{ id: 4, option: "To provide network management" },
		],
	},
	{
		question:
			"Which of the following cloud network protocols is used for secure communication?",
		answer: 2,
		options: [
			{ id: 1, option: "HTTP" },
			{ id: 2, option: "HTTPS" },
			{ id: 3, option: "FTP" },
			{ id: 4, option: "SSH" },
		],
	},
	{
		question:
			"What is the primary benefit of using a cloud network load balancer?",
		answer: 2,
		options: [
			{ id: 1, option: "Improved security" },
			{ id: 2, option: "Increased scalability" },
			{ id: 3, option: "Reduced costs" },
			{ id: 4, option: "All of the above" },
		],
	},
	{
		question: "Which of the following cloud network models is most scalable?",
		answer: 1,
		options: [
			{ id: 1, option: "Public cloud" },
			{ id: 2, option: "Private cloud" },
			{ id: 3, option: "Hybrid cloud" },
			{ id: 4, option: "Community cloud" },
		],
	},
	{
		question:
			"What is the primary function of a cloud network access control list (ACL)?",
		answer: 3,
		options: [
			{ id: 1, option: "To block incoming traffic" },
			{ id: 2, option: "To allow outgoing traffic" },
			{ id: 3, option: "To provide network security" },
			{ id: 4, option: "To provide network management" },
		],
	},
	{
		question:
			"Which of the following cloud network protocols is used for network routing?",
		answer: 1,
		options: [
			{ id: 1, option: "BGP" },
			{ id: 2, option: "OSPF" },
			{ id: 3, option: "EIGRP" },
			{ id: 4, option: "RIP" },
		],
	},
	{
		question:
			"What is the primary benefit of using a cloud network content delivery network (CDN)?",
		answer: 2,
		options: [
			{ id: 1, option: "Improved security" },
			{ id: 2, option: "Increased scalability" },
			{ id: 3, option: "Reduced costs" },
			{ id: 4, option: "All of the above" },
		],
	},
	{
		question:
			"What is the primary function of the Transport Layer in the OSI model?",
		answer: 1,
		options: [
			{ id: 1, option: "To provide error-free transfer of data" },
			{ id: 2, option: "To provide routing of data between networks" },
			{ id: 3, option: "To provide logical addressing of devices" },
			{ id: 4, option: "To provide physical addressing of devices" },
		],
	},
	{
		question:
			"Which of the following network communication methods is used for broadcast transmissions?",
		answer: 3,
		options: [
			{ id: 1, option: "Unicast" },
			{ id: 2, option: "Multicast" },
			{ id: 3, option: "Broadcast" },
			{ id: 4, option: "Anycast" },
		],
	},
	{
		question:
			"What is the primary function of the Network Layer in the OSI model?",
		answer: 2,
		options: [
			{ id: 1, option: "To provide error-free transfer of data" },
			{ id: 2, option: "To provide routing of data between networks" },
			{ id: 3, option: "To provide logical addressing of devices" },
			{ id: 4, option: "To provide physical addressing of devices" },
		],
	},
	{
		question:
			"Which of the following network communication protocols is used for email transmission?",
		answer: 3,
		options: [
			{ id: 1, option: "HTTP" },
			{ id: 2, option: "FTP" },
			{ id: 3, option: "SMTP" },
			{ id: 4, option: "DNS" },
		],
	},
	{
		question:
			"What is the primary function of the Data Link Layer in the OSI model?",
		answer: 4,
		options: [
			{ id: 1, option: "To provide error-free transfer of data" },
			{ id: 2, option: "To provide routing of data between networks" },
			{ id: 3, option: "To provide logical addressing of devices" },
			{ id: 4, option: "To provide physical addressing of devices" },
		],
	},
	{
		question:
			"Which of the following network communication methods is used for one-to-one transmissions?",
		answer: 1,
		options: [
			{ id: 1, option: "Unicast" },
			{ id: 2, option: "Multicast" },
			{ id: 3, option: "Broadcast" },
			{ id: 4, option: "Anycast" },
		],
	},
	{
		question:
			"What is the primary function of the Physical Layer in the OSI model?",
		answer: 4,
		options: [
			{ id: 1, option: "To provide error-free transfer of data" },
			{ id: 2, option: "To provide routing of data between networks" },
			{ id: 3, option: "To provide logical addressing of devices" },
			{ id: 4, option: "To provide physical means of transmitting data" },
		],
	},
	{
		question:
			"Which of the following network communication protocols is used for web page transmission?",
		answer: 1,
		options: [
			{ id: 1, option: "HTTP" },
			{ id: 2, option: "FTP" },
			{ id: 3, option: "SMTP" },
			{ id: 4, option: "DNS" },
		],
	},
	{
		question:
			"What is the primary function of the Session Layer in the OSI model?",
		answer: 4,
		options: [
			{ id: 1, option: "To provide error-free transfer of data" },
			{ id: 2, option: "To provide routing of data between networks" },
			{ id: 3, option: "To provide logical addressing of devices" },
			{ id: 4, option: "To establish, maintain, and terminate connections" },
		],
	},
	{
		question:
			"Which of the following network protocols is used for routing data between networks?",
		answer: 3,
		options: [
			{ id: 1, option: "TCP" },
			{ id: 2, option: "UDP" },
			{ id: 3, option: "IP" },
			{ id: 4, option: "ICMP" },
		],
	},
	{
		question: "What is the primary function of the TCP protocol?",
		answer: 1,
		options: [
			{ id: 1, option: "To provide error-free transfer of data" },
			{ id: 2, option: "To provide routing of data between networks" },
			{ id: 3, option: "To provide logical addressing of devices" },
			{ id: 4, option: "To provide physical addressing of devices" },
		],
	},
	{
		question:
			"Which of the following network protocols is used for error-reporting and diagnostic functions?",
		answer: 4,
		options: [
			{ id: 1, option: "TCP" },
			{ id: 2, option: "UDP" },
			{ id: 3, option: "IP" },
			{ id: 4, option: "ICMP" },
		],
	},
	{
		question: "What is the primary function of the DNS protocol?",
		answer: 4,
		options: [
			{ id: 1, option: "To provide error-free transfer of data" },
			{ id: 2, option: "To provide routing of data between networks" },
			{ id: 3, option: "To provide logical addressing of devices" },
			{ id: 4, option: "To translate domain names to IP addresses" },
		],
	},
	{
		question: "What is the primary function of the FTP protocol?",
		answer: 4,
		options: [
			{ id: 1, option: "To provide error-free transfer of data" },
			{ id: 2, option: "To provide routing of data between networks" },
			{ id: 3, option: "To provide logical addressing of devices" },
			{ id: 4, option: "To transfer files between systems" },
		],
	},
	{
		question: "What is the primary function of the HTTPS protocol?",
		answer: 4,
		options: [
			{ id: 1, option: "To provide error-free transfer of data" },
			{ id: 2, option: "To provide routing of data between networks" },
			{ id: 3, option: "To provide logical addressing of devices" },
			{ id: 4, option: "To provide secure web page transmission" },
		],
	},
	{
		question:
			"Which of the following network protocols is used for secure remote access?",
		answer: 3,
		options: [
			{ id: 1, option: "HTTP" },
			{ id: 2, option: "FTP" },
			{ id: 3, option: "SSH" },
			{ id: 4, option: "DNS" },
		],
	},
	{
		question: "What is the primary goal of network security?",
		options: [
			"A) To provide access to network resources",
			"B) To prevent unauthorized access to network resources",
			"C) To detect and respond to security incidents",
			"D) To provide network management",
		],
		answer: "B) To prevent unauthorized access to network resources",
	},
	{
		question: "What is the purpose of a Network Access Control (NAC) system?",
		answer: 3,
		options: [
			{ id: 1, option: "To provide secure remote access" },
			{ id: 2, option: "To detect and respond to security incidents" },
			{ id: 3, option: "To control access to network resources" },
			{ id: 4, option: "To provide network management" },
		],
	},
	{
		question:
			"Which of the following network security measures is used to detect and respond to security incidents?",
		answer: 2,
		options: [
			{ id: 1, option: "Firewall" },
			{ id: 2, option: "Intrusion Detection System (IDS)" },
			{ id: 3, option: "Intrusion Prevention System (IPS)" },
			{ id: 4, option: "Virtual Private Network (VPN)" },
		],
	},
	{
		question: "What is the purpose of a Virtual Private Network (VPN)?",
		answer: 1,
		options: [
			{ id: 1, option: "To provide secure remote access" },
			{ id: 2, option: "To detect and respond to security incidents" },
			{ id: 3, option: "To control access to network resources" },
			{ id: 4, option: "To provide network management" },
		],
	},
	{
		question:
			"Which of the following network security protocols is used for secure communication?",
		answer: 2,
		options: [
			{ id: 1, option: "HTTP" },
			{ id: 2, option: "HTTPS" },
			{ id: 3, option: "FTP" },
			{ id: 4, option: "DNS" },
		],
	},
	{
		question:
			"What is the purpose of a Secure Sockets Layer/Transport Layer Security (SSL/TLS) certificate?",
		answer: 4,
		options: [
			{ id: 1, option: "To provide secure remote access" },
			{ id: 2, option: "To detect and respond to security incidents" },
			{ id: 3, option: "To control access to network resources" },
			{ id: 4, option: "To provide secure communication" },
		],
	},
	{
		question: "What is the primary goal of security hardening?",
		answer: 2,
		options: [
			{ id: 1, option: "To provide access to network resources" },
			{ id: 2, option: "To prevent unauthorized access to network resources" },
			{ id: 3, option: "To detect and respond to security incidents" },
			{ id: 4, option: "To provide network management" },
		],
	},
	{
		question:
			"Which of the following security hardening measures is used to reduce the attack surface of a system?",
		answer: 4,
		options: [
			{ id: 1, option: "Patch management" },
			{ id: 2, option: "Vulnerability scanning" },
			{ id: 3, option: "Configuration management" },
			{ id: 4, option: "All of the above" },
		],
	},
	{
		question: "What is the purpose of a security baseline?",
		answer: 1,
		options: [
			{ id: 1, option: "To provide a secure configuration for a system" },
			{ id: 2, option: "To detect and respond to security incidents" },
			{ id: 3, option: "To control access to network resources" },
			{ id: 4, option: "To provide network management" },
		],
	},
	{
		question:
			"Which of the following security hardening measures is used to ensure that systems are configured securely?",
		answer: 3,
		options: [
			{ id: 1, option: "Patch management" },
			{ id: 2, option: "Vulnerability scanning" },
			{ id: 3, option: "Configuration management" },
			{ id: 4, option: "All of the above" },
		],
	},
	{
		question: "What is the purpose of a vulnerability scan?",
		answer: 1,
		options: [
			{ id: 1, option: "To detect vulnerabilities in a system" },
			{ id: 2, option: "To exploit vulnerabilities in a system" },
			{ id: 3, option: "To patch vulnerabilities in a system" },
			{ id: 4, option: "To configure a system securely" },
		],
	},
];

export const Module1 = () => {
	return (
	  <ScrollView style={styles.container}>
		<Text style={styles.heading}>
		  Module 1: Network Fundamentals
		</Text>
  
		<Text style={styles.paragraph}>
		  A network is a group of connected devices that communicate with each other, allowing data to be exchanged across different devices. Networks are essential for the functioning of organizations and for personal communication. In this module, we will explore the different types of networks, devices used in networks, and network virtualization tools.
		</Text>
  
		<Text style={styles.subHeading}>Types of Networks</Text>
		<Text style={styles.paragraph}>
		  1. <Text style={styles.bold}>LAN (Local Area Network):</Text> A network that connects devices within a limited geographical area, such as a home, office, or campus. LANs typically use Ethernet or Wi-Fi to connect devices.
		</Text>
		<Text style={styles.paragraph}>
		  2. <Text style={styles.bold}>WAN (Wide Area Network):</Text> A network that spans a large geographical area, often connecting multiple LANs. The internet is the most common example of a WAN.
		</Text>
  
		<Text style={styles.subHeading}>Network Devices</Text>
		<Text style={styles.paragraph}>
		  Network devices are used to maintain and manage information and services for users on the network. Below are common network devices:
		</Text>
		<Text style={styles.paragraph}>
		  <Text style={styles.bold}>• HUB:</Text> A basic network device that broadcasts data to all connected devices in a network. It is a simple, less efficient device.
		</Text>
		<Text style={styles.paragraph}>
		  <Text style={styles.bold}>• SWITCH:</Text> A device that connects specific devices in the network by sending data to particular addresses, ensuring efficient data flow.
		</Text>
		<Text style={styles.paragraph}>
		  <Text style={styles.bold}>• ROUTER:</Text> A device that connects different networks, typically a LAN to the internet (WAN). It routes data between these networks.
		</Text>
		<Text style={styles.paragraph}>
		  <Text style={styles.bold}>• MODEM:</Text> A device that converts digital data from a router into analog signals for transmission over telephone lines or cable, enabling internet connectivity.
		</Text>
  
		<Text style={styles.subHeading}>Virtualization Tools</Text>
		<Text style={styles.paragraph}>
		  Virtualization tools are software systems used to perform network operations, often offered by cloud service providers. These tools play a crucial role in network management and security.
		</Text>
		<Text style={styles.paragraph}>
		  <Text style={styles.bold}>• FIREWALL:</Text> A security device that monitors and controls incoming and outgoing network traffic based on security rules, preventing unauthorized access.
		</Text>
		<Text style={styles.paragraph}>
		  <Text style={styles.bold}>• SERVERS:</Text> Servers are powerful computers that provide specific services, such as hosting websites, storing data, or running applications, to devices within a network.
		</Text>
		<Text style={styles.paragraph}>
		  <Text style={styles.bold}>• WIRELESS ACCESS POINT (WAP):</Text> A device that enables wireless devices to connect to a wired network by transmitting and receiving data over radio waves.
		</Text>
		<Text style={styles.paragraph}>
		  <Text style={styles.bold}>• WIFI:</Text> A set of standards and protocols used by devices to communicate wirelessly over short to medium distances, providing flexibility in device connectivity.
		</Text>
  
		<Text style={styles.subHeading}>Conclusion</Text>
		<Text style={styles.paragraph}>
		  Understanding the basics of networks, the devices that connect them, and how network operations work is essential for any cybersecurity professional. Networks form the backbone of modern communication and play a pivotal role in maintaining organizational and personal security.
		</Text>
	  </ScrollView>
	);
  };

  export const Module2 = () => {
	return (
	  <ScrollView style={styles.container}>
		<Text style={styles.heading}>
		  Module 2: Cloud-Network
		</Text>
  
		<Text style={styles.subHeading}>Cloud Computing</Text>
		<Text style={styles.paragraph}>
		  Cloud computing is the practice of using remote servers, applications, and network services that are hosted on the internet, rather than relying on local physical devices. It offers flexibility and scalability for businesses and individuals to access computing resources on demand. Cloud computing has revolutionized the way data is stored, processed, and managed, making it easier for organizations to scale their infrastructure without the need for on-premise equipment.
		</Text>
  
		<Text style={styles.subHeading}>Cloud-Network</Text>
		<Text style={styles.paragraph}>
		  A cloud-network is a collection of servers or computers that store resources and data in remote data centers. These networks can be accessed via the internet, providing users with the ability to access data and applications from anywhere at any time. Cloud networks provide essential services to organizations and users.
		</Text>
		
		<Text style={styles.subHeading}>Key Services Provided by Cloud-Networks</Text>
		<Text style={styles.paragraph}>
		  1. <Text style={styles.bold}>On-Demand Storage:</Text> Cloud networks offer scalable storage solutions, allowing users to store vast amounts of data without worrying about physical storage devices.
		</Text>
		<Text style={styles.paragraph}>
		  2. <Text style={styles.bold}>Processing Power:</Text> Cloud networks provide access to powerful computational resources that can handle complex tasks such as data analysis, machine learning, and more.
		</Text>
		<Text style={styles.paragraph}>
		  3. <Text style={styles.bold}>Analytics:</Text> Cloud networks offer data processing capabilities that can help organizations analyze large sets of data to gain valuable insights and make informed decisions.
		</Text>
  
		<Text style={styles.subHeading}>Conclusion</Text>
		<Text style={styles.paragraph}>
		  Cloud networks play a crucial role in modern IT infrastructure. By providing flexible storage, powerful processing power, and advanced analytics capabilities, cloud computing enables organizations to remain competitive while reducing overhead costs associated with physical hardware.
		</Text>
	  </ScrollView>
	);
  };

  export const Module3 = () => {
	return (
	  <ScrollView style={styles.container}>
		<Text style={styles.heading}>
		  Module 3: Network Communication
		</Text>
  
		<Text style={styles.subHeading}>Network Communication</Text>
		<Text style={styles.paragraph}>
		  Network communication refers to the exchange of data, information, or messages between devices, computers, or nodes within a network. This exchange enables devices to share resources, exchange information, and coordinate actions. Communication over a network is essential for the functionality of internet services, cloud applications, and local network operations.
		</Text>
  
		<Text style={styles.subHeading}>Data Packet</Text>
		<Text style={styles.paragraph}>
		  A data packet is a unit of information that travels from one device to another within a network. It is made up of three parts: a header (containing the IP address, MAC address, and protocol number), the body (which contains the actual data being transmitted), and the footer (which contains error-checking information).
		</Text>
  
		<Text style={styles.subHeading}>Bandwidth and Speed</Text>
		<Text style={styles.paragraph}>
		  <Text style={styles.bold}>Bandwidth</Text> refers to the amount of data that can be received by a device every second. It is typically measured in bits per second (bps).
		</Text>
		<Text style={styles.paragraph}>
		  <Text style={styles.bold}>Speed</Text> refers to the rate at which data packets are received. Speed is often used interchangeably with bandwidth but refers to the actual performance and efficiency of the network connection.
		</Text>
  
		<Text style={styles.subHeading}>Packet Sniffing</Text>
		<Text style={styles.paragraph}>
		  Packet sniffing is the practice of capturing and analyzing data packets as they traverse a network. This technique is used by network administrators for troubleshooting and security purposes but can also be used maliciously to intercept sensitive data.
		</Text>
  
		<Text style={styles.subHeading}>Network Communication Technologies</Text>
		<Text style={styles.paragraph}>
		  Network communication is facilitated by various technologies, which enable different types of communication between devices. Some key technologies include:
		</Text>
		<Text style={styles.paragraph}>
		  1. <Text style={styles.bold}>TCP/IP (Transmission Control Protocol/Internet Protocol):</Text> The foundational communication protocol for the internet, responsible for breaking data into packets and ensuring reliable delivery.
		</Text>
		<Text style={styles.paragraph}>
		  2. <Text style={styles.bold}>HTTP (Hypertext Transfer Protocol):</Text> A protocol used for transferring web pages over the internet.
		</Text>
		<Text style={styles.paragraph}>
		  3. <Text style={styles.bold}>FTP (File Transfer Protocol):</Text> A protocol used for transferring files between computers over a network.
		</Text>
		<Text style={styles.paragraph}>
		  4. <Text style={styles.bold}>Email Protocols (SMTP, POP3, IMAP):</Text> Protocols that govern the sending, receiving, and managing of email messages.
		</Text>
		<Text style={styles.paragraph}>
		  5. <Text style={styles.bold}>Wireless Communication Protocols (Wi-Fi, Bluetooth, Cellular Networks):</Text> Protocols that enable wireless communication between devices over short or long ranges.
		</Text>
  
		<Text style={styles.subHeading}>Conclusion</Text>
		<Text style={styles.paragraph}>
		  Network communication is the backbone of modern information systems. Understanding how data travels, how bandwidth and speed impact performance, and how various communication protocols work is essential for both network administrators and end users.
		</Text>
	  </ScrollView>
	);
  };

  export const Module4 = () => {
	return (
	  <ScrollView style={styles.container}>
		<Text style={styles.heading}>
		  Module 4: Network Protocols
		</Text>
  
		<Text style={styles.subHeading}>Network Protocol</Text>
		<Text style={styles.paragraph}>
		  A network protocol is a set of rules that governs the exchange of data between devices on a network. It defines the order of delivery and the structure of the data being transmitted to ensure proper communication between devices.
		</Text>
  
		<Text style={styles.subHeading}>Categories of Network Protocols</Text>
  
		<Text style={styles.subHeading}>1. Communication Protocols</Text>
		<Text style={styles.paragraph}>
		  Communication protocols govern the exchange of information between devices during network transmission. These protocols ensure that data is transmitted correctly and efficiently. Some examples of communication protocols include:
		</Text>
		<Text style={styles.paragraph}>
		  - <Text style={styles.bold}>TCP (Transmission Control Protocol):</Text> Ensures reliable data transmission by establishing a connection between sender and receiver.
		</Text>
		<Text style={styles.paragraph}>
		  - <Text style={styles.bold}>UDP (User Datagram Protocol):</Text> A simpler protocol that does not guarantee delivery but is faster than TCP.
		</Text>
		<Text style={styles.paragraph}>
		  - <Text style={styles.bold}>HTTP (Hypertext Transfer Protocol):</Text> Used for transmitting web pages over the internet.
		</Text>
		<Text style={styles.paragraph}>
		  - <Text style={styles.bold}>DNS (Domain Name System):</Text> A protocol used to resolve domain names to IP addresses.
		</Text>
  
		<Text style={styles.subHeading}>2. Management Protocols</Text>
		<Text style={styles.paragraph}>
		  Management protocols are used to monitor and manage activity on a network. These protocols help network administrators keep track of the status and performance of devices and network traffic. Examples of management protocols include:
		</Text>
		<Text style={styles.paragraph}>
		  - <Text style={styles.bold}>SNMP (Simple Network Management Protocol):</Text> A protocol used for managing devices in a network by providing a framework for network management.
		</Text>
		<Text style={styles.paragraph}>
		  - <Text style={styles.bold}>ICMP (Internet Control Message Protocol):</Text> A protocol used for diagnostic and error-reporting purposes, such as the "ping" command to check connectivity.
		</Text>
  
		<Text style={styles.subHeading}>3. Security Protocols</Text>
		<Text style={styles.paragraph}>
		  Security protocols ensure that data is transmitted securely across a network, protecting it from unauthorized access and ensuring integrity during transmission. Some examples of security protocols include:
		</Text>
		<Text style={styles.paragraph}>
		  - <Text style={styles.bold}>HTTPS (Hypertext Transfer Protocol Secure):</Text> A secure version of HTTP that uses encryption to protect data transmitted over the web.
		</Text>
		<Text style={styles.paragraph}>
		  - <Text style={styles.bold}>SFTP (Secure File Transfer Protocol):</Text> A secure version of FTP that ensures encrypted transmission of files over a network.
		</Text>
  
		<Text style={styles.subHeading}>Conclusion</Text>
		<Text style={styles.paragraph}>
		  Network protocols are essential for the smooth and secure operation of any network. They help ensure that data is delivered accurately, securely, and efficiently between devices. Understanding the different categories of protocols and their functions is vital for maintaining a healthy and secure network infrastructure.
		</Text>
	  </ScrollView>
	);
  };

  export const Module5 = () => {
	return (
	  <ScrollView style={styles.container}>
		<Text style={styles.heading}>
		  Module 5: Network Security
		</Text>
  
		<Text style={styles.subHeading}>Network Security</Text>
		<Text style={styles.paragraph}>
		  Network security refers to the practices and technologies designed to protect computer networks, including local area networks (LANs), wide area networks (WANs), and the Internet, from unauthorized access, misuse, or theft. Its primary goal is to safeguard the integrity, confidentiality, and availability of computer networks and data using both hardware and software technologies.
		</Text>
  
		<Text style={styles.subHeading}>Key Aspects of Network Security</Text>
  
		<Text style={styles.subHeading}>1. Preventing Unauthorized Access</Text>
		<Text style={styles.paragraph}>
		  Controlling who can access the network and what resources they can access is a crucial aspect of network security. Ensuring that only authorized users can interact with sensitive systems is essential for protecting network resources.
		</Text>
  
		<Text style={styles.subHeading}>2. Detecting and Responding to Threats</Text>
		<Text style={styles.paragraph}>
		  Identifying potential security breaches and taking swift action to mitigate them is key to minimizing the damage caused by attacks. Timely detection and response are vital for reducing risks and limiting the impact of security threats.
		</Text>
  
		<Text style={styles.subHeading}>3. Ensuring Data Integrity and Confidentiality</Text>
		<Text style={styles.paragraph}>
		  Protecting sensitive data from unauthorized access, theft, or tampering is a critical concern in network security. Encryption, access control mechanisms, and data integrity checks are essential for maintaining the confidentiality and accuracy of data.
		</Text>
  
		<Text style={styles.subHeading}>4. Maintaining Network Availability</Text>
		<Text style={styles.paragraph}>
		  Ensuring that the network remains operational and accessible to authorized users is essential for smooth business operations. This involves protecting against attacks like Distributed Denial of Service (DDoS) and ensuring the network infrastructure remains resilient to disruptions.
		</Text>
  
		<Text style={styles.subHeading}>Technologies and Strategies for Network Security</Text>
  
		<Text style={styles.subHeading}>1. Firewalls</Text>
		<Text style={styles.paragraph}>
		  Firewalls are network security systems that monitor and control incoming and outgoing network traffic. They enforce security policies by filtering traffic based on predefined rules and help block unauthorized access.
		</Text>
  
		<Text style={styles.subHeading}>2. Intrusion Detection and Prevention Systems (IDPS)</Text>
		<Text style={styles.paragraph}>
		  IDPS solutions detect and prevent potential security threats by continuously monitoring network traffic and analyzing patterns that may indicate malicious activity. These systems help identify and stop cyberattacks before they cause damage.
		</Text>
  
		<Text style={styles.subHeading}>3. Virtual Private Networks (VPNs)</Text>
		<Text style={styles.paragraph}>
		  VPNs are technologies that create secure, encrypted connections between devices and networks. They allow users to securely access the network from remote locations and protect sensitive data while it is being transmitted over the internet.
		</Text>
  
		<Text style={styles.subHeading}>4. Network Segmentation</Text>
		<Text style={styles.paragraph}>
		  Network segmentation involves dividing a network into smaller, isolated segments. This reduces the attack surface by limiting the scope of potential attacks and preventing lateral movement by attackers within the network.
		</Text>
  
		<Text style={styles.subHeading}>5. Zero Trust Architecture</Text>
		<Text style={styles.paragraph}>
		  Zero Trust Architecture is an approach to network security that assumes all users and devices are potential threats, regardless of their location. It verifies the identity and permissions of users and devices before granting access, enforcing strict access controls and minimizing risks.
		</Text>
  
		<Text style={styles.subHeading}>Conclusion</Text>
		<Text style={styles.paragraph}>
		  Network security is a critical aspect of any organization’s cybersecurity strategy. By preventing unauthorized access, detecting and responding to threats, ensuring data integrity, and maintaining network availability, organizations can protect their networks and sensitive information. The adoption of security technologies like firewalls, VPNs, and Zero Trust Architecture helps to create a secure environment for both users and data.
		</Text>
	  </ScrollView>
	);
  };

  export const Module6 = () => {
	return (
	  <ScrollView style={styles.container}>
		<Text style={styles.heading}>
		  Module 6: Security Hardening
		</Text>
  
		<Text style={styles.subHeading}>Security Hardening</Text>
		<Text style={styles.paragraph}>
		  Security hardening is the process of securing a system, network, or application by reducing its vulnerability to attacks. This is achieved by configuring the system to minimize its attack surface, implementing security best practices, and removing or disabling unnecessary features and services.
		</Text>
  
		<Text style={styles.subHeading}>Goal of Security Hardening</Text>
		<Text style={styles.paragraph}>
		  The goal of security hardening is to make it more difficult for attackers to exploit vulnerabilities and gain unauthorized access to the system or its data. This is typically done by:
		</Text>
  
		<Text style={styles.paragraph}>
		  1. Removing or disabling unnecessary services and features {"\n"}
		  2. Configuring secure authentication and authorization mechanisms {"\n"}
		  3. Implementing secure communication protocols (e.g., HTTPS, SSH) {"\n"}
		  4. Configuring firewalls and access controls {"\n"}
		  5. Keeping software and systems up-to-date with the latest security patches {"\n"}
		  6. Conducting regular security audits and vulnerability assessments {"\n"}
		  7. Implementing a least privilege access model {"\n"}
		  8. Encrypting sensitive data {"\n"}
		  9. Implementing a secure boot process {"\n"}
		  10. Continuously monitoring the system for security breaches.
		</Text>
  
		<Text style={styles.subHeading}>Benefits of Security Hardening</Text>
		<Text style={styles.paragraph}>
		  Security hardening brings many benefits to an organization:
		</Text>
  
		<Text style={styles.paragraph}>
		  - Reduced risk of security breaches {"\n"}
		  - Improved compliance with regulatory requirements {"\n"}
		  - Enhanced protection of sensitive data {"\n"}
		  - Reduced downtime and data loss in the event of a security breach {"\n"}
		  - Improved overall security posture
		</Text>
  
		<Text style={styles.subHeading}>Application of Security Hardening</Text>
		<Text style={styles.paragraph}>
		  Security hardening can be applied to various systems, including:
		</Text>
  
		<Text style={styles.paragraph}>
		  - Operating systems (e.g., Windows, Linux) {"\n"}
		  - Network devices (e.g., routers, firewalls) {"\n"}
		  - Web applications {"\n"}
		  - Databases {"\n"}
		  - Cloud infrastructure
		</Text>
  
		<Text style={styles.subHeading}>Ongoing Process</Text>
		<Text style={styles.paragraph}>
		  It's worth noting that security hardening is not a one-time task; it's an ongoing process that requires continuous monitoring and maintenance to ensure the system remains secure.
		</Text>
  
		<Text style={styles.subHeading}>Conclusion</Text>
		<Text style={styles.paragraph}>
		  Security hardening is a crucial aspect of maintaining a secure environment. By systematically reducing the attack surface, implementing security best practices, and continuously updating and monitoring the system, organizations can greatly reduce the risk of attacks and ensure the integrity and confidentiality of their data.
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
