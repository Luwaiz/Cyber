import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { styles } from "./styles";
import QuizCard from "../../../components/QuizCard";
import BlueButton from "../../../components/BlueButton";

const Quiz = ({ navigation }) => {
	const Questions = [
		{
			question: "What is the primary purpose of blockchain technology?",
			answer: "Paris",
			options: [
				{ id: 1, option: "To create digital currencies" },
				{
					id: 2,
					option: "To store and manage transactions\n in a decentralized manner",
				},
				{ id: 3, option: "To develop mobile applications" },
				{ id: 4, option: "To improve internet speed" },
			],
		},
		{
			question:
				"Which consensus mechanism is commonly used in Bitcoin's blockchain?",
			answer: "Stephen McCain",
			options: [
				{ id: 1, option: "Proof of Stake (PoS)" },
				{ id: 2, option: "Proof of Work (PoW)" },
				{ id: 3, option: "Proof of Authority (PoA)" },
				{ id: 4, option: "Delegated Proof of Stake (DPoS)" },
			],
		},
		{
			question: "What does a block in a blockchain typically contain?",
			answer: "New York City",
			options: [
				{ id: 1, option: "Only the hash of the previous block" },
				{
					id: 2,
					option:
						"Transaction data, a timestamp, and a reference to the previous block",
				},
				{ id: 3, option: "Just the miner's reward" },
				{ id: 4, option: "Personal identification details \nof the users" },
			],
		},
		{
			question: "Which of the following is a feature of blockchain technology?",
			answer: "Atlantic Ocean",
			options: [
				{ id: 1, option: "Centralized control" },
				{ id: 2, option: "Transparency and immutability" },
				{ id: 3, option: "Low security" },
				{ id: 4, option: "Limited scalability" },
			],
		},
		{
			question: " In blockchain terminology, what is a 'node'?",
			answer: "Atlantic Ocean",
			options: [
				{ id: 1, option: "A person who owns cryptocurrency" },
				{
					id: 2,
					option: "A computer that participates\n in the blockchain network",
				},
				{ id: 3, option: "A block in the blockchain" },
				{ id: 4, option: "A type of blockchain ledger" },
			],
		},
	];

	const Completed = () => {
		navigation.navigate("Completed");
	};
	return (
		<ScrollView
			style={styles.container}
			contentContainerStyle={{ paddingBottom: 50 }}
		>
			{Questions?.map((item, index) => (
				<QuizCard
					key={index}
					question={item.question}
					option={item.options}
					questionNumber={index + 1}
				/>
			))}
			<BlueButton title={"Submit"} onPress={Completed} />
		</ScrollView>
	);
};

export default Quiz;
