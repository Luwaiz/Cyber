import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { colors } from "../constants/styling";

//active button component
const BlueButton = ({ title, onPress }) => {
	return (
		<TouchableOpacity onPress={onPress} activeOpacity={0.5}>
			<View style={styles.button}>
				<Text style={styles.buttonText}>{title}</Text>
			</View>
		</TouchableOpacity>
	);
};

export default BlueButton;

const styles = StyleSheet.create({
	button: {
		backgroundColor: colors.primaryBlue,
		minWidth: 167,
		height: 48,
		borderRadius: 10,
		alignItems: "center",
		justifyContent: "center",
	},
	buttonText: {
		fontSize: 16,
		fontWeight: "500",
        color: colors.primaryWhite
	},
});
