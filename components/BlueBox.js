import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../constants/styling";

const BlueBox = () => {
	return <View style={styles.container}></View>;
};

export default BlueBox;

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.primaryBlue,
		height: 150,
		width: 250,
		borderRadius: 10,
		alignSelf: "center",
		marginTop: 20,
	},
});
