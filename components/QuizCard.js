import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { colors } from "../constants/styling";
import { RadioButton } from "react-native-paper";

const QuizCard = ({ question, questionNumber }) => {
	// TODO: Implement ResourceCards component to display resources in a grid layout
	const [selected, setSelected] = useState();
	const options = [
		{ id: 1, answer: "Glossary" },
		{ id: 2, answer: "Links" },
		{ id: 3, answer: "Downloadable content" },
		{ id: 4, answer: "content" },
	];
	return (
		<View style={styles.container}>
			<Text style={styles.HeadText}>
				Question {questionNumber}: 
				<Text style={styles.optionText}> {question}</Text>
			</Text>
			<View>
				{options.map((option, index) => (
					<View style={styles.option} key={index}>
						<View style={styles.left}>
							<Text style={styles.optionText}>{option.id}. </Text>
							<Text style={styles.optionText}>{option.answer}</Text>
						</View>
						<RadioButton
							value={option.id}
							status={selected === option.id ? "checked" : "unchecked"}
							onPress={() => setSelected(option.id)}
							color={colors.primaryBlue}
							uncheckedColor={colors.TextGrey1}
						/>
					</View>
				))}
			</View>
		</View>
	);
};

export default QuizCard;

const styles = StyleSheet.create({
	container: {
		width: "100%",
		borderRadius: 10,
		padding: 20,
		borderColor: colors.Grey1,
		borderWidth: 1,
		marginBottom: 16,
	},
	HeadText: {
		fontFamily: "Inter-SemiBold",
		fontSize: 16,
	},
	optionText: {
		color: colors.TextGrey1,
		fontFamily: "Inter-Regular",
	},
	option: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	left: {
		flexDirection: "row",
		alignItems: "center",
	},
});
