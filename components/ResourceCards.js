import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { colors } from "../constants/styling";

const ResourceCards = ({ text }) => {
	// TODO: Implement ResourceCards component to display resources in a grid layout
	const options = [
		{ name: "Glossary" },
		{ name: "Links" },
		{ name: "Downloadable content" },
	];
	return (
		<View style={styles.container}>
			<Text style={styles.HeadText}>{text}</Text>
			<View style={styles.optionContainer}>
				{options.map((option, index) => (
					<View style={styles.option} key={index}>
						<Text style={styles.optionText}>{option.name}</Text>
						<AntDesign name="right" size={20} color={colors.TextGrey1} />
					</View>
				))}
			</View>
		</View>
	);
};

export default ResourceCards;

const styles = StyleSheet.create({
	container: {
		width: "100%",
		borderRadius: 10,
		margin: 10,
		padding: 20,
		borderColor: colors.Grey1,
		borderWidth: 1,
	},
	HeadText: {
		fontWeight: "bold",
		fontSize: 16,
	},
	optionContainer: {
		marginVertical: 10,
	},
	optionText: {
		color: colors.TextGrey1,
	},
	option: {
		flexDirection: "row",
		padding: 10,
		borderBottomWidth: 1,
		borderColor: colors.Grey1,
		justifyContent: "space-between",
		marginBottom: 10,
		alignItems: "center",
	},
});
