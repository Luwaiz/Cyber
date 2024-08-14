import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

const Module1 = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Module 1: Introduction to Blockchain Technology</Text>
      
      <Text style={styles.subHeading}>Overview of Blockchain Technology</Text>
      <Text style={styles.paragraph}>
        Definition: Blockchain is a decentralized ledger technology that records transactions across multiple computers so that the record cannot be altered retroactively without altering all subsequent blocks and the consensus of the network.{"\n"}
        {"\n"}
        History:{"\n"}
        1991: Concept of cryptographically secured chains by Stuart Haber and W. Scott Stornetta.{"\n"}
        2008: Satoshi Nakamoto introduced Bitcoin and its underlying blockchain technology.{"\n"}
        2015: Ethereum introduced, expanding blockchain's use to smart contracts and decentralized applications.{"\n"}
      </Text>

      <Text style={styles.subHeading}>Key Characteristics</Text>
      <Text style={styles.paragraph}>
        Decentralization: No single point of control; data is distributed across a network of nodes.{"\n"}
        Transparency: All transactions are visible to all participants, promoting trust.{"\n"}
        Immutability: Once data is recorded, it cannot be altered or deleted.{"\n"}
        Security: Utilizes cryptographic algorithms to secure data.{"\n"}
      </Text>

      <Text style={styles.subHeading}>Types of Blockchain</Text>
      <Text style={styles.paragraph}>
        Public Blockchain: Open to anyone; fully decentralized (e.g., Bitcoin, Ethereum).{"\n"}
        Private Blockchain: Restricted access; controlled by a single organization (e.g., Hyperledger).{"\n"}
        Consortium Blockchain: Controlled by a group of organizations; partially decentralized (e.g., R3 Corda).{"\n"}
      </Text>

      <Text style={styles.subHeading}>Blockchain vs Traditional Databases</Text>
      <Text style={styles.paragraph}>
        Traditional Databases:{"\n"}
        Centralized control.{"\n"}
        CRUD operations (Create, Read, Update, Delete).{"\n"}
        High performance for read/write operations.{"\n"}
        {"\n"}
        Blockchain:{"\n"}
        Decentralized control.{"\n"}
        Immutable records (only add operations).{"\n"}
        Enhanced security and transparency.{"\n"}
        Reduced risk of data tampering and fraud.{"\n"}
      </Text>

      <Text style={styles.subHeading}>Components of a Blockchain</Text>
      <Text style={styles.paragraph}>
        Blocks: Data structure containing a list of transactions, timestamp, and a reference to the previous block (hash).{"\n"}
        Chains: Sequence of blocks linked together in a linear, chronological order.{"\n"}
        Nodes: Computers that participate in the blockchain network, maintaining and validating the ledger.{"\n"}
      </Text>

      <Text style={styles.subHeading}>Consensus Mechanisms</Text>
      <Text style={styles.paragraph}>
        Proof of Work (PoW):{"\n"}
        Mechanism: Miners solve complex mathematical puzzles to validate transactions and add new blocks.{"\n"}
        Pros: Highly secure.{"\n"}
        Cons: Energy-intensive, slower transaction speeds.{"\n"}
        {"\n"}
        Proof of Stake (PoS):{"\n"}
        Mechanism: Validators are chosen based on the amount of cryptocurrency they hold and are willing to "stake" as collateral.{"\n"}
        Pros: Energy-efficient, faster transaction speeds.{"\n"}
        Cons: Potential for centralization if few participants hold most of the stake.{"\n"}
        {"\n"}
        Other Mechanisms:{"\n"}
        Delegated Proof of Stake (DPoS): Stakeholders elect delegates to validate transactions.{"\n"}
        Proof of Authority (PoA): Validators are pre-approved and act as trusted entities.{"\n"}
      </Text>

      <Text style={styles.subHeading}>Lab Exercises</Text>
      <Text style={styles.paragraph}>
        Lab 1: Blockchain Basics{"\n"}
        Objective: Set up a private blockchain network, create and connect nodes, and add blocks to the chain.{"\n"}
        {"\n"}
        Step-by-Step Instructions:{"\n"}
        {"\n"}
        Setting Up the Environment{"\n"}
        Install Necessary Software:{"\n"}
        Download and install Node.js and npm.{"\n"}
        Install Ganache (a personal Ethereum blockchain).{"\n"}
        Create a Project Directory:{"\n"}
        Open terminal/command prompt and create a directory for your blockchain project.{"\n"}
        Navigate to the directory.{"\n"}
        {"\n"}
        Create and Configure Nodes{"\n"}
        Initialize Ganache:{"\n"}
        Start Ganache and create a new workspace.{"\n"}
        Set Up Multiple Nodes:{"\n"}
        Configure multiple accounts in Ganache to simulate nodes.{"\n"}
        {"\n"}
        Create and Deploy a Simple Blockchain{"\n"}
        Write a Simple Smart Contract:{"\n"}
        Use Remix IDE to write a simple Solidity smart contract (e.g., a basic storage contract).{"\n"}
        Compile and deploy the contract using one of the accounts in Ganache.{"\n"}
        Interact with the Contract:{"\n"}
        Use Web3.js (a JavaScript library) to interact with the deployed contract.{"\n"}
        Write a simple JavaScript script to call functions on the contract and log results.{"\n"}
        {"\n"}
        Add Blocks to the Chain{"\n"}
        Mine Blocks:{"\n"}
        Use Ganache’s built-in tools to mine new blocks.{"\n"}
        Observe the blockchain’s state and the changes in blocks.{"\n"}
        View Transactions:{"\n"}
        Use Ganache’s transaction viewer to examine the details of transactions included in blocks.{"\n"}
        {"\n"}
        Validate the Blockchain{"\n"}
        Check Integrity:{"\n"}
        Write a script to validate the blockchain by checking the hash of each block and ensuring they are linked correctly.{"\n"}
        Simulate a Tamper Attempt:{"\n"}
        Modify a block’s data and observe how it affects the blockchain’s integrity.{"\n"}
        {"\n"}
        Expected Outcomes:{"\n"}
        Understand the basic structure and functioning of a blockchain.{"\n"}
        Gain practical experience in setting up a blockchain network and interacting with it.{"\n"}
        Learn to identify and validate the integrity of the blockchain.{"\n"}
        {"\n"}
        Tools and Software Needed:{"\n"}
        Node.js and npm{"\n"}
        Ganache{"\n"}
        Remix IDE{"\n"}
        Web3.js{"\n"}
        {"\n"}
        Assessment:{"\n"}
        Submission of the project directory with scripts and configurations.{"\n"}
        A brief report explaining the setup process, interactions, and validation results.{"\n"}
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "white",
    
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

export default Module1;
