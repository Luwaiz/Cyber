import { StyleSheet, Text, View } from "react-native";
import React, { useMemo, useState } from "react";
import { colors } from "../constants/styling";
import { ProgressBar } from "react-native-paper";
import * as Progress from "react-native-progress";
import StageManger from "../middlewares/StageManger";
const BlueBox = ({ item, index }) => {
	const visitedCount = StageManger((state) => state.getVisitedModules(index));

	return (
		<View style={styles.container}>
			<Text style={styles.topic}>{item.topic}</Text>
			<View style={styles.lowerContainer}>
				<Progress.Bar
					progress={visitedCount*10/100}
					color={colors.primaryWhite}
					style={styles.Progress}
					borderWidth={0}
				/>
				<Text
					onPress={() => console.log("visited counts", visitedCount)}
					style={styles.topic}
				>{visitedCount*10 }%
				</Text>
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
		fontFamily: "Inter-Bold",
	},
	lowerContainer: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
	},
});
