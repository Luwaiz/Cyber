import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { styles } from './styles'

const Glossary2 = () => {
  return (
    <ScrollView style={styles.container} contentContainerStyle={{paddingVertical:16}}>
      <Text style={styles.heading}>Chapter Two: Glossary</Text>

      <Text style={styles.letterSection}>A</Text>
      <GlossaryItem 
        term="Assess" 
        definition="The fifth step of the NIST RMF that means to determine if established controls are implemented correctly." 
      />
      <GlossaryItem 
        term="Asset" 
        definition="An item perceived as having value to an organization." 
      />
      <GlossaryItem 
        term="Attack Vectors" 
        definition="The pathways attackers use to penetrate security defenses." 
      />
      <GlossaryItem 
        term="Authentication" 
        definition="The process of verifying who someone is." 
      />
      <GlossaryItem 
        term="Authorization" 
        definition="The concept of granting access to specific resources in a system." 
      />
      <GlossaryItem 
        term="Authorize" 
        definition="The sixth step of the NIST RMF that refers to being accountable for the security and privacy risks that might exist in an organization." 
      />
      <GlossaryItem 
        term="Availability" 
        definition="The idea that data is accessible to those who are authorized to access it." 
      />

      <Text style={styles.letterSection}>C</Text>
      <GlossaryItem 
        term="Categorize" 
        definition="The second step of the NIST RMF that is used to develop risk management processes and tasks." 
      />
      <GlossaryItem 
        term="Confidentiality" 
        definition="The idea that only authorized users can access specific assets or data." 
      />
      <GlossaryItem 
        term="Confidentiality, Integrity, Availability (CIA) Triad" 
        definition="A model that helps inform how organizations consider risk when setting up systems and security policies." 
      />

      <Text style={styles.letterSection}>D</Text>
      <GlossaryItem 
        term="Detect" 
        definition="A NIST core function related to identifying potential security incidents and improving monitoring capabilities to increase the speed and efficiency of detections." 
      />

      <Text style={styles.letterSection}>E</Text>
      <GlossaryItem 
        term="Encryption" 
        definition="The process of converting data from a readable format to an encoded format." 
      />
      <GlossaryItem 
        term="External Threat" 
        definition="Anything outside the organization that has the potential to harm organizational assets." 
      />

      <Text style={styles.letterSection}>I</Text>
      <GlossaryItem 
        term="Identify" 
        definition="A NIST core function related to management of cybersecurity risk and its effect on an organization’s people and assets." 
      />
      <GlossaryItem 
        term="Implement" 
        definition="The fourth step of the NIST RMF that means to implement security and privacy plans for an organization." 
      />
      <GlossaryItem 
        term="Incident Response" 
        definition="An organization’s quick attempt to identify an attack, contain the damage, and correct the effects of a security breach." 
      />
      <GlossaryItem 
        term="Integrity" 
        definition="The idea that the data is correct, authentic, and reliable." 
      />
      <GlossaryItem 
        term="Internal Threat" 
        definition="A current or former employee, external vendor, or trusted partner who poses a security risk." 
      />

      <Text style={styles.letterSection}>L</Text>
      <GlossaryItem 
        term="Log" 
        definition="A record of events that occur within an organization’s systems." 
      />

      <Text style={styles.letterSection}>N</Text>
      <GlossaryItem 
        term="National Institute of Standards and Technology (NIST) Cybersecurity Framework (CSF)" 
        definition="A voluntary framework that consists of standards, guidelines, and best practices to manage cybersecurity risk." 
      />
      <GlossaryItem 
        term="National Institute of Standards and Technology (NIST) Special Publication (S.P.) 800-53" 
        definition="A unified framework for protecting the security of information systems within the U.S. federal government." 
      />

      <Text style={styles.letterSection}>O</Text>
      <GlossaryItem 
        term="Open Web Application Security Project (OWASP)" 
        definition="A non-profit organization focused on improving software security." 
      />
      <GlossaryItem 
        term="Operating System (OS)" 
        definition="The interface between computer hardware and the user." 
      />

      <Text style={styles.letterSection}>P</Text>
      <GlossaryItem 
        term="Playbook" 
        definition="A manual that provides details about any operational action." 
      />
      <GlossaryItem 
        term="Prepare" 
        definition="The first step of the NIST RMF related to activities that are necessary to manage security and privacy risks before a breach occurs." 
      />
      <GlossaryItem 
        term="Protect" 
        definition="A NIST core function used to protect an organization through the implementation of policies, procedures, training, and tools that help mitigate cybersecurity threats." 
      />

      <Text style={styles.letterSection}>R</Text>
      <GlossaryItem 
        term="Ransomware" 
        definition="A malicious attack where threat actors encrypt an organization’s data and demand payment to restore access." 
      />
      <GlossaryItem 
        term="Recover" 
        definition="A NIST core function related to returning affected systems back to normal operation." 
      />
      <GlossaryItem 
        term="Respond" 
        definition="A NIST core function related to making sure that the proper procedures are used to contain, neutralize, and analyze security incidents, and implement improvements to the security process." 
      />
      <GlossaryItem 
        term="Risk" 
        definition="Anything that can impact the confidentiality, integrity, or availability of an asset." 
      />
       <GlossaryItem 
        term="Risk Mitigation" 
        definition="The process of having the right procedures and rules in place to quickly reduce the impact of a risk like a breach." 
      />

      <Text style={styles.letterSection}>S</Text>
      <GlossaryItem 
        term="Security Audit" 
        definition="A review of an organization's security controls, policies, and procedures against a set of expectations." 
      />
      <GlossaryItem 
        term="Security Controls" 
        definition="Safeguards designed to reduce specific security risks." 
      />
      <GlossaryItem 
        term="Security Frameworks" 
        definition="Guidelines used for building plans to help mitigate risk and threats to data and privacy." 
      />
      <GlossaryItem 
        term="Security Information and Event Management (SIEM)" 
        definition="An application that collects and analyzes log data to monitor critical activities in an organization." 
      />
      <GlossaryItem 
        term="Security Orchestration, Automation, and Response (SOAR)" 
        definition="A collection of applications, tools, and workflows that use automation to respond to security events." 
      />
      <GlossaryItem 
        term="Security Posture" 
        definition="An organization’s ability to manage its defense of critical assets and data and react to change." 
      />
      <GlossaryItem 
        term="Select" 
        definition="The third step of the NIST RMF that means to choose, customize, and capture documentation of the controls that protect an organization." 
      />
      <GlossaryItem 
        term="Shared Responsibility" 
        definition="The idea that all individuals within an organization take an active role in lowering risk and maintaining both physical and virtual security." 
      />
      <GlossaryItem 
        term="Social Engineering" 
        definition="A manipulation technique that exploits human error to gain private information, access, or valuables." 
      />

      <Text style={styles.letterSection}>T</Text>
      <GlossaryItem 
        term="Threat" 
        definition="Any circumstance or event that can negatively impact assets." 
      />

      <Text style={styles.letterSection}>V</Text>
      <GlossaryItem 
        term="Vulnerability" 
        definition="A weakness that can be exploited by a threat." 
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
export default Glossary2