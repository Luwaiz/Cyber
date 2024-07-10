import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import Option from "../../../components/Option";
import { styles } from "./styles";
import Secure from "../../../assets/svg/secure.svg";
import Resource from "../../../assets/svg/resource.svg";
import Certificate from "../../../assets/svg/certificate.svg";

const Profile = ({navigation}) => {
	const navigateToSettings=()=>{
		navigation.navigate("Settings")
	}
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
					<Text style={styles.text2}>Software Engineer | Backend Developer | Freelancer</Text>
				</View>
			</View>
			<View style={styles.bottomContainer}>
				<Option
					icons={<Certificate width={26} height={26} fill={"black"} />}
					text={"My Certificates"}
				/>
				<Option
					icons={<Ionicons name="settings-outline" size={24} color={"black"} />}
					text={"Settings"}
					onPress={navigateToSettings}

				/>
				<Option icons={<Secure width={26} height={26} />} text={"Security"} />
				<Option
					icons={<Resource width={26} height={26} />}
					text={"Resources"}
				/>
			</View>
		</View>
	);
};

export default Profile;
