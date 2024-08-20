import { Text, View, TouchableOpacity, KeyboardAvoidingView, Platform } from "react-native";
import React, { useContext, useEffect, useState } from "react";

import { LinearGradient } from "expo-linear-gradient";
import { styles } from "./styles";
import TextInputBox from "../../../components/TextinputBox";
import { colors } from "../../../constants/styling";
import { SafeAreaView } from "react-native-safe-area-context";

const LogIn = ({ navigation }) => {
	const navigateToHome = () => {
		navigation.navigate("AppStack", {
			screen: "Home",
		});
	};
	const navigateToSignUp = () => {
		navigation.navigate("SignUp");
	};
	return (
		<SafeAreaView style={styles.container}>
			{/* Circle design at the top */}

			<View style={styles.bigCircle} />

			<View style={{ alignItems: "center" }}>
				<View style={styles.signup}>
					<Text style={styles.signupTxt}>LOG IN</Text>
				</View>
				<View>
					<TextInputBox placeholder={"USERNAME"} />
					<TextInputBox password placeholder={"PASSWORD"} />
				</View>
			</View>

			<View style={styles.text}>
				<Text>Don't have an account?</Text>
				<Text onPress={navigateToSignUp} style={{ color: colors.primaryBlue }}>
					Sign up
				</Text>
			</View>

			{/* button */}
			<View
				style={{
					bottom: 30,
					position: "absolute",
					width: "100%",
					alignItems: "center",
				}}
			>
				<LinearGradient
					colors={[colors.primaryBlue, colors.secondaryBlue]}
					start={{ x: 0.2, y: 0.5 }}
					end={{ x: 1, y: 1 }}
					style={{ borderRadius: 30 }}
				>
					<TouchableOpacity style={styles.button} onPress={navigateToHome}>
						<Text style={{ color: "white" }}>Log in</Text>
					</TouchableOpacity>
				</LinearGradient>
			</View>
			{/* Circle design at the bottom */}
			<View style={styles.bigCircle2} />
		</SafeAreaView>
	);
};

export default LogIn;
