import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import { styles } from "./styles";
import Checked from "../../../assets/svg/checked.svg";
import BlueButton from "../../../components/BlueButton";
const { width, height } = Dimensions.get("screen");

const Completed = ({ navigation, route }) => {

	const Dashboard =()=>{
		navigation.navigate("Dashboard");
	}
	const { correctCount, totalQuestions } = route.params;

	return (
		<View style={styles.container}>
			<Checked width={width / 2} height={width} />
			<Text style={styles.title}>Completed !!!</Text>
			<Text style={styles.title}>You got {correctCount}/{totalQuestions}</Text>
			<Text style={styles.subtitle}>
				You've completed the quiz, Thanks for partcipating well done.
			</Text>
			<View style={styles.button}>
				<BlueButton title={"Back to Dashboard"} onPress={()=>Dashboard()}/>
			</View>
		</View>
	);
};

export default Completed;
