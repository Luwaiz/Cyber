import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { colors } from "../constants/styling";
import { ProgressBar } from "react-native-paper";
import * as Progress from "react-native-progress";

const BlueBox = () => {
	const [tracker, setTracker] = useState(78);
	const track = () => {};
	return (
		<View style={styles.container}>
			<Text style={styles.topic}>Network Security</Text>
			<View style={styles.lowerContainer}>
				<Progress.Bar
					progress={tracker / 100}
					color={colors.secondaryBlue}
					style={styles.Progress}
					borderWidth={0}
					
				/>
				<Text style={styles.topic}>{tracker}%</Text>
			</View>
		</View>
	);
};

export default BlueBox;

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.primaryBlue,
		height: 150,
		width: 250,
		borderRadius: 10,
		padding: 20,
		justifyContent: "space-between",
	},
	Progress: {
		height: 5,
		borderRadius: 10,
		backgroundColor: colors.tertiaryBlue,
	},
	progressBar: {
		borderRadius: 50,
	},
	topic: {
		color: colors.primaryWhite,
		fontSize: 16,
		fontWeight: "bold",
	},
	lowerContainer: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
	},
});
