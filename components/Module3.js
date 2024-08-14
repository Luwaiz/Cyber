import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

const Module3 = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Module 3: Blockchain Networks and Architecture</Text>

      <Text style={styles.subHeading}>Blockchain Network Architecture</Text>
      <Text style={styles.paragraph}>
        Overview:{'\n'}
        Blockchain network architecture refers to the structure and organization of nodes in a blockchain network, how they communicate, and the protocols they follow.{'\n'}
        {'\n'}
        Components:{'\n'}
        Nodes: Devices or entities participating in the blockchain network. They can be full nodes, light nodes, or miners.{'\n'}
        Network Topology: The layout of the connections and interactions between nodes. Common topologies include peer-to-peer (P2P) and client-server.{'\n'}
        Protocols: Rules and procedures that govern how data is communicated and transactions are processed in the network.{'\n'}
      </Text>

      <Text style={styles.subHeading}>Nodes and Network Topology</Text>
      <Text style={styles.paragraph}>
        Nodes:{'\n'}
        Full Nodes: Maintain a complete copy of the blockchain, validate transactions and blocks, and participate in consensus.{'\n'}
        Light Nodes: Store only a subset of the blockchain and rely on full nodes for validation.{'\n'}
        Miners/Validators: Nodes that validate transactions and add them to the blockchain, earning rewards for their efforts.{'\n'}
        {'\n'}
        Network Topology:{'\n'}
        Peer-to-Peer (P2P): Each node connects directly to multiple other nodes, creating a decentralized and distributed network.{'\n'}
        Client-Server: Centralized approach where clients connect to a central server, which controls the network.{'\n'}
      </Text>

      <Text style={styles.subHeading}>Distributed Ledger Technology</Text>
      <Text style={styles.paragraph}>
        Definition:{'\n'}
        Distributed Ledger Technology (DLT) refers to a digital system for recording transactions across multiple nodes or computers. Unlike traditional databases, DLT does not have a central authority.{'\n'}
        {'\n'}
        Key Features:{'\n'}
        Decentralization: No single point of control or failure.{'\n'}
        Transparency: All transactions are visible to all participants.{'\n'}
        Security: Data is cryptographically secured and immutable.{'\n'}
      </Text>

      <Text style={styles.subHeading}>Immutable Records</Text>
      <Text style={styles.paragraph}>
        Definition:{'\n'}
        Immutability in blockchain means that once data is written to the blockchain, it cannot be altered or deleted.{'\n'}
        {'\n'}
        Benefits:{'\n'}
        Data Integrity: Ensures the accuracy and reliability of data.{'\n'}
        Trust: Participants can trust that the recorded data has not been tampered with.{'\n'}
      </Text>

      <Text style={styles.subHeading}>Consensus Algorithms</Text>
      <Text style={styles.paragraph}>
        Purpose:{'\n'}
        Consensus algorithms are protocols used by blockchain networks to achieve agreement on the state of the blockchain among distributed nodes.{'\n'}
        {'\n'}
        Types:{'\n'}
        Proof of Work (PoW): Nodes compete to solve complex mathematical puzzles. The first to solve adds the block to the blockchain.{'\n'}
        Proof of Stake (PoS): Nodes are chosen to add blocks based on the number of coins they hold and are willing to "stake."{'\n'}
        Delegated Proof of Stake (DPoS): Stakeholders elect delegates to validate transactions and create blocks.{'\n'}
        Proof of Authority (PoA): Validators are pre-approved and trusted entities.{'\n'}
      </Text>

      <Text style={styles.subHeading}>Smart Contracts</Text>
      <Text style={styles.paragraph}>
        Definition:{'\n'}
        Smart contracts are self-executing contracts with the terms of the agreement directly written into code.{'\n'}
        {'\n'}
        Use Cases:{'\n'}
        Automated Transactions: Automatically execute transactions when predefined conditions are met.{'\n'}
        Decentralized Applications (DApps): Applications that run on a blockchain network without centralized control.{'\n'}
        Supply Chain Management: Track products and verify authenticity throughout the supply chain.{'\n'}
        {'\n'}
        Writing and Deploying Smart Contracts:{'\n'}
        Tools: Solidity (for Ethereum), Hyperledger Composer.{'\n'}
        Steps:{'\n'}
        Write the smart contract code.{'\n'}
        Test the contract in a local environment.{'\n'}
        Deploy the contract to the blockchain.{'\n'}
        Interact with the deployed contract through a web interface or application.{'\n'}
      </Text>

      <Text style={styles.subHeading}>Module 4: Blockchain in Cybersecurity</Text>
      <Text style={styles.paragraph}>
        Blockchain for Secure Transactions{'\n'}
        Overview:{'\n'}
        Blockchain enhances the security of transactions by providing a decentralized, transparent, and immutable ledger.{'\n'}
        {'\n'}
        Benefits:{'\n'}
        Fraud Prevention: Reduces the risk of fraud by ensuring that all transactions are verifiable and immutable.{'\n'}
        Data Integrity: Ensures that data cannot be altered once it is recorded on the blockchain.{'\n'}
        {'\n'}
        Preventing Fraud:{'\n'}
        Mechanisms:{'\n'}
        Decentralization: Eliminates a single point of failure, making it difficult for attackers to manipulate the system.{'\n'}
        Cryptographic Security: Transactions are secured using cryptographic algorithms, making it difficult for unauthorized parties to alter the data.{'\n'}
        {'\n'}
        Ensuring Data Integrity:{'\n'}
        Methods:{'\n'}
        Immutability: Once data is written to the blockchain, it cannot be altered or deleted.{'\n'}
        Hash Functions: Ensure that data has not been tampered with by producing unique hashes for each data block.{'\n'}
        {'\n'}
        Decentralized Identity Management:{'\n'}
        Overview:{'\n'}
        Decentralized identity management allows users to create and manage their digital identities without relying on a central authority.{'\n'}
        Benefits:{'\n'}
        User Control: Users have control over their own identities.{'\n'}
        Privacy: Reduces the risk of identity theft and data breaches.{'\n'}
        {'\n'}
        Digital Identities:{'\n'}
        Definition:{'\n'}
        A digital identity is a digital representation of an individual or entity.{'\n'}
        Components:{'\n'}
        Public Key: Identifies the user.{'\n'}
        Private Key: Used to sign transactions and verify identity.{'\n'}
        {'\n'}
        Authentication and Authorization:{'\n'}
        Authentication:{'\n'}
        Verifies the identity of the user.{'\n'}
        Methods: Public and private keys, digital signatures.{'\n'}
        Authorization:{'\n'}
        Grants or denies access to resources based on the user’s identity and permissions.{'\n'}
      </Text>

      <Text style={styles.subHeading}>Blockchain in Supply Chain Security</Text>
      <Text style={styles.paragraph}>
        Tracking and Verification:{'\n'}
        Blockchain Solutions: Track products from origin to destination.{'\n'}
        Verification: Ensure the authenticity and integrity of products and data.{'\n'}
      </Text>

      <Text style={styles.subHeading}>Module 5: Advanced Topics in Blockchain</Text>
      <Text style={styles.paragraph}>
        Scalability and Interoperability{'\n'}
        Scalability:{'\n'}
        Challenges: Blockchain networks can become slow and inefficient as they grow.{'\n'}
        Solutions: Layer 2 scaling solutions, sharding, improved consensus algorithms.{'\n'}
        {'\n'}
        Interoperability:{'\n'}
        Challenges: Different blockchain networks cannot easily communicate with each other.{'\n'}
        Solutions: Cross-chain communication protocols, blockchain interoperability platforms.{'\n'}
        {'\n'}
        Blockchain and IoT:{'\n'}
        Integration:{'\n'}
        Benefits: Enhanced security, transparency, and automation in IoT networks.{'\n'}
        Use Cases: Smart homes, supply chain management, autonomous vehicles.{'\n'}
        {'\n'}
        Legal and Regulatory Aspects:{'\n'}
        Compliance:{'\n'}
        Challenges: Navigating the complex and evolving legal landscape.{'\n'}
        Strategies: Staying informed about regulations, implementing compliance measures.{'\n'}
        {'\n'}
        Legal Challenges:{'\n'}
        Issues: Data privacy, smart contract enforceability, jurisdictional conflicts.{'\n'}
      </Text>

      <Text style={styles.subHeading}>Module 6: Hands-On Labs and Projects</Text>
      <Text style={styles.paragraph}>
        Setting Up a Blockchain Network{'\n'}
        Objective: Set up a private blockchain network using platforms like Ethereum or Hyperledger.{'\n'}
        Steps:{'\n'}
        Install and Configure Software:{'\n'}
        Install Ethereum (Geth) or Hyperledger Fabric.{'\n'}
        Create and Connect Nodes:{'\n'}
        Configure nodes to participate in the network.{'\n'}
        Deploy and Test:{'\n'}
        Deploy the network and test its functionality.{'\n'}
        {'\n'}
        Creating and Managing Wallets:{'\n'}
        Objective: Create and manage cryptocurrency wallets.{'\n'}
        Steps:{'\n'}
        Generate Wallets:{'\n'}
        Use tools like MetaMask or MyEtherWallet.{'\n'}
        Manage Wallets:{'\n'}
        Store, send, and receive cryptocurrencies.{'\n'}
        {'\n'}
        Developing Smart Contracts:{'\n'}
        Objective: Write, test, and deploy smart contracts.{'\n'}
        Steps:{'\n'}
        Write Code:{'\n'}
        Use Solidity to write a smart contract.{'\n'}
        Test Contract:{'\n'}
        Test the contract using Remix IDE.{'\n'}
        Deploy Contract:{'\n'}
        Deploy the contract to an Ethereum network.{'\n'}
        {'\n'}
        Building a Decentralized Application (DApp):{'\n'}
        Objective: Develop a DApp from end to end.{'\n'}
        Steps:{'\n'}
        Frontend Development:{'\n'}
        Use frameworks like React or Angular.{'\n'}
        Smart Contract Integration:{'\n'}
        Integrate smart contracts with the frontend.{'\n'}
        Testing and Deployment:{'\n'}
        Test the DApp and deploy it to the blockchain.{'\n'}
        {'\n'}
        Security Analysis of Blockchain Applications:{'\n'}
        Objective: Identify and mitigate vulnerabilities in blockchain applications.{'\n'}
        Steps:{'\n'}
        Conduct Security Audits:{'\n'}
        Review smart contract code for vulnerabilities.{'\n'}
        Implement Security Measures:{'\n'}
        Use best practices for secure coding and deployment.{'\n'}
      </Text>

      <Text style={styles.subHeading}>Lab Exercises</Text>
      <Text style={styles.paragraph}>
        Lab 1: Blockchain Basics{'\n'}
        Set up a private blockchain network.{'\n'}
        Create and connect nodes.{'\n'}
        Add blocks to the chain.{'\n'}
        {'\n'}
        Lab 2: Cryptographic Implementations{'\n'}
        Generate public and private keys.{'\n'}
        Implement digital signatures.{'\n'}
        Verify data integrity using hash functions.{'\n'}
        {'\n'}
        Lab 3: Smart Contract Development{'\n'}
        Write a simple smart contract in Solidity.{'\n'}
        Deploy the smart contract on Ethereum.{'\n'}
        Interact with the smart contract using a web interface.{'\n'}
        {'\n'}
        Lab 4: Secure Transactions{'\n'}
        Create and manage cryptocurrency wallets.{'\n'}
        Execute secure transactions between wallets.{'\n'}
        Analyze transaction records on the blockchain.{'\n'}
        {'\n'}
        Lab 5: Decentralized Identity Management{'\n'}
        Implement a decentralized identity management system.{'\n'}
        Authenticate users using blockchain-based digital identities.{'\n'}
        {'\n'}
        Lab 6: Blockchain in Supply Chain{'\n'}
        Develop a blockchain solution for tracking products in a supply chain.{'\n'}
        Verify the authenticity and integrity of product data.{'\n'}
      </Text>

      <Text style={styles.subHeading}>Additional Resources</Text>
      <Text style={styles.paragraph}>
        Books:{'\n'}
        "Mastering Bitcoin" by Andreas M. Antonopoulos{'\n'}
        "Blockchain Basics: A Non-Technical Introduction in 25 Steps" by Daniel Drescher{'\n'}
        {'\n'}
        Online Courses:{'\n'}
        "Blockchain and Cryptocurrency Explained" on Coursera{'\n'}
        "Ethereum and Solidity: The Complete Developer's Guide" on Udemy{'\n'}
        {'\n'}
        Websites:{'\n'}
        Ethereum{'\n'}
        Hyperledger{'\n'}
        Blockchain Council{'\n'}
        {'\n'}
        Tools and Software:{'\n'}
        Ethereum Development Tools (e.g., Remix, Truffle){'\n'}
        Hyperledger Fabric{'\n'}
        MetaMask{'\n'}
        {'\n'}
        Communities and Forums:{'\n'}
        Reddit: r/Blockchain{'\n'}
        Stack Exchange: Blockchain Q&A{'\n'}
        GitHub Repositories{'\n'}
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor:"white"
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subHeading: {
    fontSize: 16,
    fontWeight: '600',
    marginVertical: 8,
  },
  paragraph: {
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 10,
  },
});

export default Module3;
