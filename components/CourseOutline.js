import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";

const CourseOutline = () => {
	return (
			<ScrollView style={styles.container}>
				<Text style={styles.Title}>Module 1:</Text>
				<Text style={styles.subTitle}>
					Introduction to Blockchain Technology{"\n"}Overview of Blockchain
					Technology{"\n"}
					Definition and History{"\n"}Key Characteristics{"\n"}Types of
					Blockchain: Public, Private, Consortium{"\n"}Blockchain vs Traditional
					Databases{"\n"}Comparison and Benefits{"\n"}Components of a Blockchain
					Blocks, Chains, Nodes{"\n"}Consensus Mechanisms: Proof of Work, Proof
					of Stake, Others{"\n"}
				</Text>
				<Text style={styles.Title}>Module 2:</Text>
				<Text style={styles.subTitle}>
					Cryptographic Foundations{"\n"}Basics of Cryptography{"\n"}Symmetric
					and Asymmetric Cryptography{"\n"}Hash Functions{"\n"}Public and
					Private Keys{"\n"}Key Generation and Management{"\n"}Digital
					Signatures and Certificates{"\n"}Role in Blockchain{"\n"}Certificate
					Authorities{"\n"}
				</Text>
				<Text style={styles.Title}>Module 3:</Text>
				<Text style={styles.subTitle}>
					Blockchain Networks and Architecture{"\n"}Blockchain Network
					Architecture{"\n"}Nodes and Network Topology{"\n"}
					Distributed Ledger Technology{"\n"}Immutable Records{"\n"}Consensus
					Algorithms{"\n"}Smart Contracts{"\n"}Definition and Use Cases{"\n"}
					Writing and Deploying Smart Contracts{"\n"}
				</Text>
				<Text style={styles.Title}>Module 4:</Text>
				<Text style={styles.subTitle}>
					Blockchain in Cybersecurity{"\n"}Blockchain for Secure Transactions
					{"\n"}Preventing Fraud{"\n"}Ensuring Data Integrity{"\n"}Decentralized
					Identity Management{"\n"}Digital Identities{"\n"}Authentication and
					Authorization{"\n"}Blockchain in Supply Chain Security{"\n"}Tracking
					and Verification{"\n"}
				</Text>
				<Text style={styles.Title}>Module 5:</Text>
				<Text style={styles.subTitle}>
					Advanced Topics in Blockchain{"\n"}Scalability and Interoperability
					{"\n"}Solutions and Challenges{"\n"}Blockchain and IoT{"\n"}
					Integration and Security Implications{"\n"}Legal and Regulatory
					Aspects{"\n"}
					Compliance and Legal Challenges{"\n"}
				</Text>
				<Text style={styles.Title}>Module 6:</Text>
				<Text style={styles.subTitle}>
					Hands-On Labs and Projects{"\n"}
					Setting Up a Blockchain Network{"\n"}Installing and Configuring
					Blockchain Platforms (e.g., Ethereum, Hyperledger){"\n"}Creating and
					Managing Wallets{"\n"}
					Generating and Using Wallets{"\n"}Developing Smart Contracts{"\n"}
					Writing, Testing, and Deploying Contracts{"\n"}Building a
					Decentralized Application (DApp){"\n"}End-to-End Development{"\n"}
					Security Analysis of Blockchain Applications{"\n"}Identifying and
					Mitigating Vulnerabilities{"\n"}
				</Text>
				<Text style={styles.headText}>Lab Exercises</Text>
				<Text style={styles.Title}>Lab 1:</Text>
				<Text style={styles.subTitle}>
					Blockchain Basics{"\n"}Set up a private blockchain network.{"\n"}
					Create and connect nodes.{"\n"}Add blocks to the chain.{"\n"}

                </Text>
				<Text style={styles.Title}>Lab 2:</Text>
                <Text style={styles.subTitle}>
					Cryptographic Implementations{"\n"}Generate public and private keys.
					{"\n"}Implement digital signatures.{"\n"}Verify data integrity using
					hash functions.{"\n"}
                </Text>
                <Text style={styles.Title}>Lab 3:</Text>
                <Text style={styles.subTitle}>
                    Smart Contract Development{"\n"}Write a simple
					smart contract in Solidity.{"\n"}Deploy the smart contract on Ethereum.{"\n"}
					Interact with the smart contract using a web interface.{"\n"}
                </Text>
                <Text style={styles.Title}>Lab 4:</Text>
                <Text style={styles.subTitle}>
                    Secure
					Transactions{"\n"}Create and manage cryptocurrency wallets.{"\n"}Execute secure
					transactions between wallets.{"\n"}Analyze transaction records on the
					blockchain.{"\n"}
                </Text>
                <Text style={styles.Title}>Lab 5:</Text>
                <Text style={styles.subTitle}>
                Decentralized Identity Management{"\n"}Implement a
					decentralized identity management system.{"\n"}Authenticate users using
					blockchain-based digital identities.{"\n"}
                </Text>
                <Text style={styles.Title}>Lab 6:</Text>
                <Text style={styles.subTitle}>
                Blockchain in Supply Chain{"\n"}
					Develop a blockchain solution for tracking products in a supply chain.{"\n"}
					Verify the authenticity and integrity of product data.{"\n"}
                </Text>
                <Text style={styles.headText}>Additional</Text>
                <Text style={styles.Title}>Resources Books:</Text>
                <Text style={styles.subTitle}>
					"Mastering Bitcoin" by Andreas M. Antonopoulos{"\n"}
					"Blockchain Basics: A Non-Technical Introduction in 25 Steps" by
					Daniel Drescher{"\n"}
                </Text>
                <Text style={styles.Title}>Online Courses:</Text>
                <Text style={styles.subTitle}>
                    "Blockchain and Cryptocurrency
					Explained" on Coursera{"\n"}"Ethereum and Solidity: The Complete
					Developer's Guide" on Udemy{"\n"}Websites: Ethereum Hyperledger{"\n"}Blockchain
					Council Tools and Software: Ethereum Development Tools (e.g., Remix,
					Truffle){"\n"}Hyperledger Fabric{"\n"}MetaMask
				</Text>
                <View style={styles.whiteSpace}/>
			</ScrollView>
	);
};

export default CourseOutline;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		paddingHorizontal: 20,
		paddingVertical: 30,
	},
	headText: {
		fontSize: 20,
		fontWeight: "bold",
		marginBottom: 10,
	},
	Title: {
		fontSize: 18,
		fontWeight: "bold",
		marginBottom: 5,
	},
	subTitle: {
		fontSize: 16,
	},
    whiteSpace: {
        height: 80,
    },
});
