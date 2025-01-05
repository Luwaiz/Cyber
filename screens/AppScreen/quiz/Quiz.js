import { Alert, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { styles } from "./styles";
import QuizCard from "../../../components/QuizCard";
import BlueButton from "../../../components/BlueButton";

const Quiz = ({ navigation,route }) => {
	const {Quizzes} = route.params

	const [userAnswers, setUserAnswers] = useState({});

	const handleAnswer = (questionIndex, selectedOption) => {
		setUserAnswers((prevAnswers) => ({
			...prevAnswers,
			[questionIndex]: selectedOption,
		}));
	};

	const handleSubmit = () => {
		const correctCount = Quizzes.reduce((count, question, index) => {
			const userAnswer = userAnswers[index];
			return count + (userAnswer === question.answer ? 1 : 0);
		}, 0);
		navigation.navigate("Completed", {
			correctCount,
			totalQuestions: Quizzes.length,
		});
	};

	return (
		<ScrollView
			style={styles.container}
			contentContainerStyle={{ paddingBottom: 50 }}
		>
			{Quizzes?.map((item, index) => (
				<QuizCard
					key={index}
					question={item.question}
					options={item.options}
					questionNumber={index + 1}
					onAnswer={(selectedOption) => handleAnswer(index, selectedOption)}
				/>
			))}
			<BlueButton title={"Submit"} onPress={handleSubmit} />
		</ScrollView>
	);
};

export default Quiz;
