import { Text, View, TouchableOpacity } from "react-native";
import React, { useContext, useEffect, useState } from "react";

import { LinearGradient } from "expo-linear-gradient";
import { styles } from "./styles";
import TextInputBox from "../../../components/TextinputBox";
import { colors } from "../../../constants/styling";
import { SafeAreaView } from "react-native-safe-area-context";

const SignUp = ({ navigation }) => {
	const navigateToHome = () => {
		navigation.navigate("AppStack", {
			screen: "Home",
		});
	};
	const navigateToLogin = () => {
		navigation.navigate("Log In");
	};

	return (
		<SafeAreaView style={styles.container}>
			{/* Circle design at the top */}
			
			<View style={styles.bigCircle} />
		

			<View style={{ alignItems: "center" }}>
				<View style={styles.signup}>
					<Text style={styles.signupTxt}>SIGN UP</Text>
				</View>
				<View>
					<TextInputBox placeholder={"USERNAME"} />
					<TextInputBox mail placeholder={"EMAIL ADDRESS"} />
					<TextInputBox password placeholder={"PASSWORD"} />
				</View>
			</View>

			<View style={styles.text}>
				<Text>Already have an account?</Text>
				<Text onPress={navigateToLogin} style={{ color: colors.primaryBlue }}>
					Log In
				</Text>
			</View>


			{/* button */}
			<View style={{ bottom: 30, position: "absolute" }}>
				<LinearGradient
					colors={[colors.primaryBlue, colors.secondaryBlue]}
					start={{ x: 0.2, y: 0.5 }}
					end={{ x: 1, y: 1 }}
					style={{ borderRadius: 30 }}
				>
					<TouchableOpacity style={styles.button} onPress={navigateToHome}>
						<Text style={{ color: "white" }}>Sign up</Text>
					</TouchableOpacity>
				</LinearGradient>
			</View>
			{/* Circle design at the bottom */}
			<View style={styles.bigCircle2} />
		</SafeAreaView>
	);
};

export default SignUp;
