import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { styles } from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import TextInput1 from "../../../components/TextInput1";
import BlueButton from "../../../components/BlueButton";

const SignUp = ({ navigation }) => {
	const navigateToHome = () => {
		navigation.navigate("AppStack", {
			params: "Home",
		});
	};
	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.headerContainer}>
				<Text style={styles.title}>SignUp</Text>
				<Text style={styles.subTitle}>
					or if you have an account
					<Text style={styles.LoginText}> login</Text>
				</Text>
			</View>
			<View style={styles.input}>
				<TextInput1 text={"First name"} placeholder={"Enter your first name"} />
				<TextInput1 text={"Last name"} placeholder={"Enter your last name"} />
				<TextInput1 text={"Password"} placeholder={"Enter your password"} />
			</View>
			<View style={styles.button}>
				<BlueButton title={"Sign up"} onPress={navigateToHome}/>
			</View>
		</SafeAreaView>
	);
};

export default SignUp;
