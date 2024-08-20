import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { styles } from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import BlueBox from "../../../components/BlueBox";
import Suggestions from "../../../components/Suggestions";
import { interest } from "../../../constants/OnBoard";

const Dashboard = () => {
	return (
		<SafeAreaView style={styles.container}>
			<ScrollView showsVerticalScrollIndicator={false}>
				<Text style={styles.sectionTitle}>My courses</Text>
				<ScrollView
					horizontal
					contentContainerStyle={styles.horizontal}
					showsHorizontalScrollIndicator={false}
				>
					{interest.map((item, index) => (
						<BlueBox key={index} item={item} />
					))}
				</ScrollView>
				<Text style={styles.sectionTitle}>Suggested courses</Text>
				<View style={styles.vertical}>
					{interest.map((item, index) => (
						<Suggestions key={index} item={item} index={index} />
					))}
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default Dashboard;
