import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { styles } from './styles';

const Glossary1 = () => {
    return (
      <ScrollView style={styles.container}  contentContainerStyle={{paddingVertical:16}}>
        <Text style={styles.heading}>Chapter One: Glossary</Text>
  
        <Text style={styles.letterSection}>A</Text>
        <GlossaryItem term="Asset" definition="An item perceived as having value to an organization." />
        <GlossaryItem term="Authentication" definition="The process of verifying who someone is." />
        <GlossaryItem term="Availability" definition="The idea that data is accessible to those who are authorized to access it." />
  
        <Text style={styles.letterSection}>B</Text>
        <GlossaryItem 
          term="Business Email Compromise (BEC)" 
          definition="A type of phishing attack where a threat actor impersonates a known source to obtain financial advantage." 
        />
  
        <Text style={styles.letterSection}>C</Text>
        <GlossaryItem 
          term="Computer Virus" 
          definition="Malicious code written to interfere with computer operations and cause damage to data and software." 
        />
        <GlossaryItem 
          term="Confidentiality" 
          definition="Only authorized users can access specific assets or data." 
        />
        <GlossaryItem 
          term="Confidentiality, Integrity, Availability (CIA) Triad" 
          definition="A model that helps inform how organizations consider risk when setting up systems and security policies." 
        />
        <GlossaryItem 
          term="Cryptographic Attack" 
          definition="An attack that affects secure forms of communication between a sender and intended recipient." 
        />
        <GlossaryItem 
          term="Cybersecurity (or Security)" 
          definition="The practice of ensuring confidentiality, integrity, and availability of information by protecting networks, devices, people, and data from unauthorized access or criminal exploitation." 
        />
  
        <Text style={styles.letterSection}>D</Text>
        <GlossaryItem 
          term="Database" 
          definition="An organized collection of information or data." 
        />
        <GlossaryItem 
          term="Data Point" 
          definition="A specific piece of information." 
        />
  
        <Text style={styles.letterSection}>H</Text>
        <GlossaryItem 
          term="Hacker" 
          definition="Any person or group who uses computers to gain unauthorized access to data." 
        />
        <GlossaryItem 
          term="Hacktivist" 
          definition="A person who uses hacking to achieve a political goal." 
        />
        <GlossaryItem 
          term="Health Insurance Portability and Accountability Act (HIPAA)" 
          definition="A U.S. federal law established to protect patients’ health information." 
        />
  
        <Text style={styles.letterSection}>I</Text>
        <GlossaryItem 
          term="Integrity" 
          definition="The idea that the data is correct, authentic, and reliable." 
        />
        <GlossaryItem 
          term="Internal Threat" 
          definition="A current or former employee, external vendor, or trusted partner who poses a security risk." 
        />
        <GlossaryItem 
          term="Intrusion Detection System (IDS)" 
          definition="An application that monitors system activity and alerts on possible intrusions." 
        />
              <Text style={styles.letterSection}>L</Text>
      <GlossaryItem term="Log" definition="A record of events that occur within an organization’s systems." />

      <Text style={styles.letterSection}>M</Text>
      <GlossaryItem term="Malware" definition="Software designed to harm devices or networks." />

      <Text style={styles.letterSection}>N</Text>
      <GlossaryItem 
        term="National Institute of Standards and Technology (NIST) Cyber Security Framework (CSF)" 
        definition="A voluntary framework that consists of standards, guidelines, and best practices to manage cybersecurity risk." 
      />
      <GlossaryItem 
        term="Network Protocol Analyzer (Packet Sniffer)" 
        definition="A tool designed to capture and analyze data traffic within a network." 
      />
      <GlossaryItem 
        term="Network Security" 
        definition="The practice of keeping an organization's network infrastructure secure from unauthorized access." 
      />

      <Text style={styles.letterSection}>O</Text>
      <GlossaryItem 
        term="Open Web Application Security Project (OWASP)" 
        definition="A non-profit organization focused on improving software security." 
      />

      <Text style={styles.letterSection}>P</Text>
      <GlossaryItem 
        term="Password Attack" 
        definition="An attempt to access password-secured devices, systems, networks, or data." 
      />
      <GlossaryItem 
        term="Personally Identifiable Information (PII)" 
        definition="Any information used to infer an individual’s identity." 
      />
      <GlossaryItem 
        term="Phishing" 
        definition="The use of digital communications to trick people into revealing sensitive data or deploying malicious software." 
      />
      <GlossaryItem 
        term="Physical Attack" 
        definition="A security incident that affects not only digital but also physical environments where the incident is deployed." 
      />
      <GlossaryItem 
        term="Physical Social Engineering" 
        definition="An attack in which a threat actor impersonates an employee, customer, or vendor to obtain unauthorized access to a physical location." 
      />
      <GlossaryItem 
        term="Privacy Protection" 
        definition="The act of safeguarding personal information from unauthorized use." 
      />
      <GlossaryItem 
        term="Programming" 
        definition="A process that can be used to create a specific set of instructions for a computer to execute tasks." 
      />

      <Text style={styles.letterSection}>S</Text>
      <GlossaryItem 
        term="Security Architecture" 
        definition="A type of security design composed of multiple components, such as tools and processes, that are used to protect an organization from risks and external threats." 
      />
      <GlossaryItem 
        term="Security Controls" 
        definition="Safeguards designed to reduce specific security risks." 
      />
      <GlossaryItem 
        term="Security Ethics" 
        definition="Guidelines for making appropriate decisions as a security professional." 
      />
      <GlossaryItem 
        term="Security Frameworks" 
        definition="Guidelines used for building plans to help mitigate risks and threats to data and privacy." 
      />
      <GlossaryItem 
        term="Security Information and Event Management (SIEM)" 
        definition="An application that collects and analyzes log data to monitor critical activities in an organization." 
      />
      <GlossaryItem 
        term="Sensitive Personally Identifiable Information (SPII)" 
        definition="A specific type of PII that falls under stricter handling guidelines." 
      />
      <GlossaryItem 
        term="Social Engineering" 
        definition="A manipulation technique that exploits human error to gain private information, access, or valuables." 
      />
      <GlossaryItem 
        term="Social Media Phishing" 
        definition="A type of attack where a threat actor collects detailed information about their target on social media sites before initiating the attack." 
      />

      <Text style={styles.letterSection}>T</Text>
      <GlossaryItem 
        term="Technical Skills" 
        definition="Skills that require knowledge of specific tools, procedures, and policies." 
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
        term="Transferable Skills" 
        definition="Skills from other areas that can apply to different careers." 
      />

      <Text style={styles.letterSection}>U</Text>
      <GlossaryItem 
        term="USB Baiting" 
        definition="An attack in which a threat actor strategically leaves a malware USB stick for an employee to find and install to unknowingly infect a network." 
      />

      <Text style={styles.letterSection}>V</Text>
      <GlossaryItem 
        term="Virus" 
        definition="Refer to 'Computer Virus'." 
      />
      <GlossaryItem 
        term="Vishing" 
        definition="The exploitation of electronic voice communication to obtain sensitive information or to impersonate a known source." 
      />

      <Text style={styles.letterSection}>W</Text>
      <GlossaryItem 
        term="Watering Hole Attack" 
        definition="A type of attack where a threat actor compromises a website frequently visited by a specific group of users." 
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

export default Glossary1
