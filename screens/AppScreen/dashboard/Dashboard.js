import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { styles } from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import BlueBox from "../../../components/BlueBox";
import Suggestions from "../../../components/Suggestions";
import { interest } from "../../../constants/OnBoard";

const Dashboard = () => {
	const data = [
		{ title: "Section 1" },
		{ title: "Section 2" },
		{ title: "Section 3" },
		{ title: "Section 4" },
		{ title: "Section 5" },
		{ title: "Section 6" },
		{ title: "Section 7" },
		{ title: "Section 8" },
		// Add more sections as needed...
	];

	return (
		<SafeAreaView style={styles.container}>
			<ScrollView
				showsVerticalScrollIndicator={false}
			>
				<ScrollView
					horizontal
					contentContainerStyle={styles.horizontal}
					showsHorizontalScrollIndicator={false}
				>
					<BlueBox />
					<BlueBox />
					<BlueBox />
				</ScrollView>
				<Text style={styles.sectionTitle}>Suggestions</Text>
				<View style={styles.vertical}>
					{interest.map((item, index) => (
						<Suggestions item={item} index={index} />
					))}
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default Dashboard;
