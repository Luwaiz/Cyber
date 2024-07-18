import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { styles } from "./styles";
import SearchBar from "../../../components/SearchBar";
import ResourceCards from "../../../components/ResourceCards";

const Resources = () => {
	const topics = [
		{ topic: "Cybersecurity" },
		{ topic: "Phishing" },
		{ topic: "Malware" },
		{ topic: "Spoofing" },
	];

	return (
		<View style={styles.container}>
			<SearchBar />
			<ScrollView
				showsVerticalScrollIndicator={false}
				contentContainerStyle={styles.cards}
			>
				{topics.map(({ topic, index }) => (
					<ResourceCards text={topic} key={index} />
				))}
			</ScrollView>
		</View>
	);
};

export default Resources;
