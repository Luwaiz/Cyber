import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { styles } from "./styles";
import Option from "../../../components/Option";
import Transcript from "../../../components/Transcript";

const Lesson = ({route, navigation }) => {
	const { item } = route.params;

	const navigateToResource = () => {
		navigation.navigate("Resources");
	};
	const navigateToQuiz = () => {
		navigation.navigate("Quiz");
	};
	const options = [
		{
			text: "Resources",
			onPress: navigateToResource,
		},
		{
			text: "Quiz",
			onPress: navigateToQuiz,
		},
	];
	return (
		<ScrollView contentContainerStyle={styles.container}>
			<View>
			{item?.image}
			</View>
			<View style={styles.bottomContainer}>
				<Text style={styles.title}>Transcript</Text>
				<Transcript />
				<View style={styles.options}>
					{options.map((item, index) => (
						<Option
							key={index}
							icons={item.icons}
							text={item.text}
							onPress={item.onPress ? item.onPress : null}
						/>
					))}
				</View>
			</View>
		</ScrollView>
	);
};

export default Lesson;
