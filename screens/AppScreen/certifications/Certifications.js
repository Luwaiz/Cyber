import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { styles } from "./styles";
import Certificates from "../../../components/Certificates";

const Certifications = ({ navigation }) => {
	const Certificate = [
		{ certification: "Cybersecurity Certification", date: "2021", id: 1 },
		{ certification: "Phishing Certification", date: "2022", id: 2 },
		{ certification: "Malware Certification", date: "2023", id: 3 },
		{ certification: "Spoofing Certification", date: "2024", id: 4 },
		// Add more certifications as needed...
	];
	return (
		<View style={{flex:1}}>
			<ScrollView style={styles.container} contentContainerStyle={{paddingBottom:20}}>
				{Certificate?.map((item, index) => (
					<Certificates certify={item?.certification} key={index} />
				))}
			</ScrollView>
		</View>
	);
};

export default Certifications;
