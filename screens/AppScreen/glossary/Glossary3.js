import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { styles } from './styles';

const Glossary3 = () => {
  return (
    <ScrollView style={styles.container}  contentContainerStyle={{paddingVertical:16}}>
      <Text style={styles.heading}>Chapter Three: Glossary</Text>

      <Text style={styles.letterSection}>A</Text>
      <GlossaryItem 
        term="Active Packet Sniffing" 
        definition="A type of attack where data packets are manipulated in transit." 
      />

      <Text style={styles.letterSection}>B</Text>
      <GlossaryItem 
        term="Bandwidth" 
        definition="The maximum data transmission capacity over a network, measured by bits per second." 
      />
      <GlossaryItem 
        term="Bluetooth" 
        definition="Used for wireless communication with nearby physical devices." 
      />

      <Text style={styles.letterSection}>C</Text>
      <GlossaryItem 
        term="Cloud-Based Firewalls" 
        definition="Software firewalls that are hosted by the cloud service provider." 
      />
      <GlossaryItem 
        term="Cloud Computing" 
        definition="The practice of using remote servers, applications, and network services that are hosted on the internet instead of on local physical devices." 
      />
      <GlossaryItem 
        term="Cloud Network" 
        definition="A collection of servers or computers that stores resources and data in remote data centers that can be accessed via the internet." 
      />
      <GlossaryItem 
        term="Controlled Zone" 
        definition="A subnet that protects the internal network from the uncontrolled zone." 
      />

      <Text style={styles.letterSection}>D</Text>
      <GlossaryItem 
        term="Data Packet" 
        definition="A basic unit of information that travels from one device to another within a network." 
      />
      <GlossaryItem 
        term="Denial of Service (DoS) Attack" 
        definition="An attack that targets a network or server and floods it with network traffic." 
      />
      <GlossaryItem 
        term="Distributed Denial of Service (DDoS) Attack" 
        definition="A type of denial of service attack that uses multiple devices or servers located in different locations to flood the target network with unwanted traffic." 
      />
      <GlossaryItem 
        term="Domain Name System (DNS)" 
        definition="A networking protocol that translates internet domain names into IP addresses." 
      />

      <Text style={styles.letterSection}>E</Text>
      <GlossaryItem 
        term="Encapsulation" 
        definition="A process performed by a VPN service that protects your data by wrapping sensitive data in other data packets." 
      />

      <Text style={styles.letterSection}>F</Text>
      <GlossaryItem 
        term="File Transfer Protocol (FTP)" 
        definition="Used to transfer files from one device to another over a network." 
      />
      <GlossaryItem 
        term="Firewall" 
        definition="A network security device that monitors traffic to or from your network." 
      />
      <GlossaryItem 
        term="Forward Proxy Server" 
        definition="A server that regulates and restricts a person’s access to the internet." 
      />

      <Text style={styles.letterSection}>H</Text>
      <GlossaryItem 
        term="Hardware" 
        definition="The physical components of a computer." 
      />
      <GlossaryItem 
        term="Hub" 
        definition="A network device that broadcasts information to every device on the network." 
      />
      <GlossaryItem 
        term="Hypertext Transfer Protocol (HTTP)" 
        definition="An application layer protocol that provides a method of communication between clients and website servers." 
      />
      <GlossaryItem 
        term="Hypertext Transfer Protocol Secure (HTTPS)" 
        definition="A network protocol that provides a secure method of communication between clients and servers." 
      />

      <Text style={styles.letterSection}>I</Text>
      <GlossaryItem 
        term="Identity and Access Management (IAM)" 
        definition="A collection of processes and technologies that helps organizations manage digital identities in their environment." 
      />
      <GlossaryItem 
        term="Internet Protocol (IP)" 
        definition="A set of standards used for routing and addressing data packets as they travel between devices on a network." 
      />
      <GlossaryItem 
        term="Internet Protocol (IP) Address" 
        definition="A unique string of characters that identifies the location of a device on the internet." 
      />
      <GlossaryItem 
        term="IP Spoofing" 
        definition="A network attack performed when an attacker changes the source IP of a data packet to impersonate an authorized system and gain access to a network." 
      />

      <Text style={styles.letterSection}>L</Text>
      <GlossaryItem 
        term="Local Area Network (LAN)" 
        definition="A network that spans small areas like an office building, a school, or a home." 
      />

      <Text style={styles.letterSection}>M</Text>
      <GlossaryItem 
        term="Media Access Control (MAC) Address" 
        definition="A unique alphanumeric identifier that is assigned to each physical device on a network." 
      />
      <GlossaryItem 
        term="Modem" 
        definition="A device that connects your router to the internet and brings internet access to the LAN." 
      />
      <GlossaryItem 
        term="Multi-Factor Authentication (MFA)" 
        definition="A security measure that requires a user to verify their identity in two or more ways to access a system or network." 
      />

      <Text style={styles.letterSection}>N</Text>
      <GlossaryItem 
        term="Network" 
        definition="A group of connected devices." 
      />
      <GlossaryItem 
        term="Network Log Analysis" 
        definition="The process of examining network logs to identify events of interest." 
      />
      <GlossaryItem 
        term="Network Protocols" 
        definition="A set of rules used by two or more devices on a network to describe the order of delivery of data and the structure of data." 
      />
      <GlossaryItem 
        term="Network Segmentation" 
        definition="A security technique that divides the network into segments." 
      />

      <Text style={styles.letterSection}>O</Text>
      <GlossaryItem 
        term="Operating System (OS)" 
        definition="The interface between computer hardware and the user." 
      />
      <GlossaryItem 
        term="Open Systems Interconnection (OSI) Model" 
        definition="A standardized concept that describes the seven layers computers use to communicate and send data over the network." 
      />
      <GlossaryItem 
        term="On-Path Attack" 
        definition="An attack where a malicious actor places themselves in the middle of an authorized connection and intercepts or alters the data in transit." 
      />

      <Text style={styles.letterSection}>P</Text>
      <GlossaryItem 
        term="Penetration Testing" 
        definition="A simulated attack that helps identify vulnerabilities in systems, networks, websites, applications, and processes." 
      />
      <GlossaryItem 
        term="Port" 
        definition="A software-based location that organizes the sending and receiving of data between devices on a network." 
      />
      <GlossaryItem 
        term="Port Filtering" 
        definition="A firewall function that blocks or allows certain port numbers to limit unwanted communication." 
      />
      <GlossaryItem 
        term="Proxy Server" 
        definition="A server that fulfills the requests of its clients by forwarding them to other servers." 
      />

      <Text style={styles.letterSection}>R</Text>
      <GlossaryItem 
        term="Router" 
        definition="A network device that connects multiple networks together." 
      />

      <Text style={styles.letterSection}>S</Text>
      <GlossaryItem 
        term="Security Hardening" 
        definition="The process of strengthening a system to reduce its vulnerabilities and attack surface." 
      />
      <GlossaryItem 
        term="Security Information and Event Management (SIEM)" 
        definition="An application that collects and analyzes log data to monitor critical activities for an organization." 
      />
      <GlossaryItem 
        term="Security Zone" 
        definition="A segment of a company’s network that protects the internal network from the internet." 
      />
      <GlossaryItem 
        term="Smurf Attack" 
        definition="A network attack performed when an attacker sniffs an authorized user’s IP address and floods it with ICMP packets." 
      />
      <GlossaryItem 
        term="Speed" 
        definition="The rate at which a device sends and receives data, measured by bits per second." 
      />
      <GlossaryItem 
        term="Stateless" 
        definition="A class of firewall that operates based on predefined rules and that does not keep track of information from data packets." 
      />
      <GlossaryItem 
        term="Switch" 
        definition="A device that makes connections between specific devices on a network by sending and receiving data between them." 
      />

      <Text style={styles.letterSection}>T</Text>
      <GlossaryItem 
        term="TCP/IP Model" 
        definition="A framework used to visualize how data is organized and transmitted across a network." 
      />
      <GlossaryItem 
        term="Transmission Control Protocol (TCP)" 
        definition="An internet communication protocol that allows two devices to form a connection and stream data." 
      />
      <GlossaryItem 
        term="Transmission Control Protocol (TCP) 3-Way Handshake" 
        definition="A three-step process used to establish an authenticated connection between two devices on a network." 
      />

      <Text style={styles.letterSection}>U</Text>
      <GlossaryItem 
        term="Uncontrolled Zone" 
        definition="The portion of the network outside the organization." 
      />
      <GlossaryItem 
        term="User Datagram Protocol (UDP)" 
        definition="A connectionless protocol that does not establish a connection between devices before transmissions." 
      />

      <Text style={styles.letterSection}>V</Text>
      <GlossaryItem 
        term="Virtual Private Network (VPN)" 
        definition="A network security service that changes your public IP address and masks your virtual location so that you can keep your data private when you are using a public network like the internet." 
      />

      <Text style={styles.letterSection}>W</Text>
      <GlossaryItem 
        term="Wide Area Network (WAN)" 
        definition="A network that spans a large geographic area like a city, state, or country." 
      />
      <GlossaryItem 
        term="Wi-Fi Protected Access (WPA)" 
        definition="A wireless security protocol for devices to connect to the internet." 
      />
    </ScrollView>
  )
}
const GlossaryItem = ({ term, definition }) => (
    <View style={styles.glossaryItem}>
      <Text style={styles.term}>{term}</Text>
      <Text style={styles.definition}>{definition}</Text>
    </View>
  );

export default Glossary3