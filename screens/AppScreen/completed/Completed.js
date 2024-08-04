import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import { styles } from "./styles";
import Checked from "../../../assets/svg/checked.svg";
const { width, height } = Dimensions.get("screen");

const Completed = ({ navigation }) => {
	setTimeout(() => {
		navigation.navigate("Home");
	}, 2000);

	return (
		<View style={styles.container}>
			<Checked width={width / 2} height={width} />
			<Text style={styles.title}>Completed !!!</Text>
            <Text style={styles.subtitle}>You've completed the quiz, Thanks for partcipating well done.</Text>

		</View>
	);
};

export default Completed;
