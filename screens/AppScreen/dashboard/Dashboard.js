import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { styles } from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import BlueBox from "../../../components/BlueBox";
import Suggestions from "../../../components/Suggestions";
import { chapters, interest } from "../../../constants/OnBoard";

const Dashboard = () => {
	return (
		<SafeAreaView style={styles.container}>
			<ScrollView showsVerticalScrollIndicator={false}>
				<Text style={styles.sectionTitle}>My progress</Text>
				<ScrollView
					horizontal
					contentContainerStyle={styles.horizontal}
					showsHorizontalScrollIndicator={false}
				>
					{chapters.map((item, index) => (
						<BlueBox key={index} item={item} index={index}/>
					))}
				</ScrollView>
				<Text style={styles.sectionTitle}>Available Topics</Text>
				<View style={styles.vertical}>
					{chapters.map((item, index) => (
						<Suggestions key={index} item={item} index={index} />
					))}
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default Dashboard;
