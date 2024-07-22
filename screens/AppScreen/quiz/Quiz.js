import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { styles } from "./styles";
import QuizCard from "../../../components/QuizCard";

const Quiz = () => {
	const Questions = [
		{
			question: "What is the capital of France?",
			answer: "Paris",
			options: ["Berlin", "London", "Paris", "Madrid"],
		},
		{
			question: "Who is the current Prime Minister of Canada?",
			answer: "Stephen McCain",
			options: [
				"Barack Obama",
				"Stephen McCain",
				"Lindsey Graham Cooper",
				"Joe Biden",
			],
		},
		{
			question: "What is the largest city in the United States?",
			answer: "New York City",
			options: ["Los Angeles", "Chicago", "New York City", "Houston"],
		},
		{
			question: "What is the name of the largest ocean in the world?",
			answer: "Atlantic Ocean",
			options: [
				"Pacific Ocean",
				"Indian Ocean",
				"Atlantic Ocean",
				"Southern Ocean",
			],
		},
	];
	return (
		<ScrollView style={styles.container} contentContainerStyle={{paddingBottom:20}}>
			{Questions?.map((item, index) => (
				<QuizCard
					key={index}
					question={item.question}
					questionNumber={index + 1}
				/>
			))}
		</ScrollView>
	);
};

export default Quiz;
