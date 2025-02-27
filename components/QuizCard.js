import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { colors } from "../constants/styling";
import { RadioButton } from "react-native-paper";

const QuizCard = ({ question, questionNumber, options, onAnswer }) => {
	const [selected, setSelected] = useState();

	const handleSelect = (optionId) => {
		setSelected(optionId);
		onAnswer(optionId); // Pass the selected answer to the parent
	};

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
							<Text style={styles.optionText}>{option?.id}. </Text>
							<Text style={styles.optionText}>{option?.option}</Text>
						</View>
						<View style={styles.RadioButton}>

						<RadioButton
							value={option.id}
							status={selected === option.id ? "checked" : "unchecked"}
							onPress={() => handleSelect(option.id)}
							color={colors.primaryBlue}
							uncheckedColor={colors.TextGrey1}
							
						/>
						</View>
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
		flexWrap:"wrap",
		maxWidth: 250,
	},
	option: {
		flexDirection: "row",
		alignItems: "center",
		maxWidth: "100%",
		justifyContent: "space-between",
	},
	left: {
		flexDirection: "row",
	},

});
