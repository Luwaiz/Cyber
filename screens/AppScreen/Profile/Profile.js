import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import Option from "../../../components/Option";
import { styles } from "./styles";
import Secure from "../../../assets/svg/secure.svg";
import Resource from "../../../assets/svg/resource.svg";
import Certificate from "../../../assets/svg/certificate.svg";
import BlueButton from "../../../components/BlueButton";

const Profile = ({ navigation }) => {
	const navigateToSettings = () => {
		navigation.navigate("Settings");
	};
	const navigateToResource = () => {
		navigation.navigate("Resources");
	};
	const navigateToCertifications = () => {
		navigation.navigate("Certifications");
	};
	const LogOut = () => {
		navigation.navigate("AuthStack", {
			params: "SignUp",
		});
	}
	const options = [
		{
			icons: <Certificate width={26} height={26} />,
			text: "My Certificates",
			onPress: navigateToCertifications
		},
		{
			icons: <Ionicons name="settings-outline" size={24} color={"black"} />,
			text: "Settings",
			onPress: navigateToSettings,
		},
		{
			icons: <Secure width={26} height={26} />,
			text: "Security",
		},
		{
			icons: <Resource width={26} height={26} />,
			text: "Resources",
			onPress: navigateToResource,
		},
	];
	return (
		<View style={styles.container}>
			<View style={styles.topContainer}>
				<View style={styles.picture}>
					<Image
						style={styles.pic}
						source={require("../../../assets/images/phonePic.jpg")}
					/>
				</View>
				<View style={styles.textContainer}>
					<Text style={styles.text1}>Samuel Luwaiz</Text>
					<Text style={styles.text2}>
						Software Engineer | Backend Developer | Freelancer
					</Text>
				</View>
			</View>
			<View style={styles.bottomContainer}>
				{options.map((item, index) => (
					<Option
						key={index}
						icons={item.icons}
						text={item.text}
						onPress={item.onPress ? item.onPress : null}
					/>
				))}
				<View style={styles.button}> 
					<BlueButton onPress={LogOut} title={"Log out"} />
				</View>
			</View>
		</View>
	);
};

export default Profile;
