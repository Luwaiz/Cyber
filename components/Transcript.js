import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../constants/styling";

const Transcript = () => {
	return (
		<View style={styles.textContainer}>
			<ScrollView>
				<Text style={styles.descriptionText}>
					What is Blockchain?{"\n"}
					{"\n"}
					Blockchain is a decentralized digital ledger that records transactions
					across many computers in such a way that the registered transactions
					cannot be altered retroactively. This ensures a secure, transparent
					way to handle data.{"\n"}
					{"\n"}
					Key Components{"\n"}
					{"\n"}
					1. Blocks: Each block contains a list of transactions. Once a block is
					filled with data, it’s added to the chain in a linear, chronological
					order.{"\n"}
					{"\n"}
					2. Chain: Blocks are linked together in a chronological order, forming
					a chain. Each block contains a hash of the previous block, creating a
					secure connection between them.{"\n"}
					{"\n"}
					3. Decentralization: Instead of relying on a central authority (like a
					bank), blockchain operates on a network of computers (nodes). Each
					node has a copy of the entire blockchain, ensuring transparency and
					redundancy.{"\n"}
					{"\n"}
					4. Consensus Mechanisms: To add a new block to the chain, nodes must
					agree on its validity. Common consensus mechanisms include:
					{"\n"}- Proof of Work (PoW): Requires solving complex mathematical
					problems. Bitcoin uses PoW.{"\n"}- Proof of Stake (PoS): Validators
					are chosen based on the amount of cryptocurrency they hold and are
					willing to "stake" as collateral. Ethereum is transitioning to PoS.
					{"\n"}
					{"\n"}
					5. Cryptography: Blockchain uses cryptographic techniques to secure
					transactions. Each block has a unique cryptographic hash of the
					previous block, ensuring data integrity.{"\n"}
					{"\n"}
					How It Works{"\n"}
					{"\n"}
					1. Transaction Initiation: A transaction is created and broadcast to
					the network.{"\n"}
					2. Validation: Nodes validate the transaction using consensus rules.
					{"\n"}
					3. Block Creation: Validated transactions are grouped into a block.
					{"\n"}
					4. Consensus and Addition: Nodes reach consensus on the block, which
					is then added to the blockchain.{"\n"}
					5. Propagation: The updated blockchain is propagated to all nodes.
					{"\n"}
					{"\n"}
					Key Features{"\n"}
					{"\n"}
					1. Immutability: Once a transaction is added to the blockchain, it
					cannot be altered without changing all subsequent blocks, which
					requires network consensus.{"\n"}
					2. Transparency: All transactions are visible to participants on the
					network, providing full visibility.{"\n"}
					3. Security: The decentralized nature and cryptographic hashing make
					it difficult for attackers to alter transaction data.{"\n"}
					{"\n"}
					Use Cases{"\n"}
					{"\n"}
					1. Cryptocurrencies: Bitcoin, Ethereum, and other digital currencies
					use blockchain to manage transactions and maintain a secure ledger.
					{"\n"}
					2. Smart Contracts: Self-executing contracts with the terms of the
					agreement directly written into code. Used on platforms like Ethereum.
					{"\n"}
					3. Supply Chain Management: Tracks goods through every stage of
					production, enhancing transparency and traceability.{"\n"}
					4. Voting Systems: Offers a tamper-proof method for recording votes.
					{"\n"}
					{"\n"}
					Challenges{"\n"}
					{"\n"}
					1. Scalability: As the number of transactions grows, so does the size
					of the blockchain, which can affect performance.{"\n"}
					2. Energy Consumption: Proof of Work mechanisms can be
					energy-intensive.{"\n"}
					3. Regulation: Legal and regulatory issues are still evolving,
					especially concerning privacy and data protection.{"\n"}
					{"\n"}
					Future Outlook{"\n"}
					{"\n"}
					Blockchain technology continues to evolve, with advancements in
					scalability solutions, more energy-efficient consensus mechanisms, and
					broader adoption across various industries. Its potential for
					disrupting traditional systems and creating new models of trust and
					transparency is significant.{"\n"}
					{"\n"}
					If you have any specific aspects of blockchain you’re curious about,
					feel free to ask!
				</Text>
			</ScrollView>
		</View>
	);
};

export default Transcript;

const styles = StyleSheet.create({
	textContainer: {
		paddingHorizontal: 10,
		marginTop: 20,
		marginBottom: 40,
		borderRadius: 5,
		borderWidth: 1,
		borderColor: colors.Grey1,
		padding: 10,
		maxHeight: 250,
		minHeight: 100,
	},
	descriptionText: {
		fontSize: 14,
		color: colors.TextGrey1,
	},
});
