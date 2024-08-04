import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { styles } from "./styles";
import BlueButton from "../../../components/BlueButton";
import Option from "../../../components/Option";
import { Imagery } from "../../../constants/OnBoard";

const CourseDetails = ({ route, navigation }) => {
	const { item } = route.params;
	const [expanded, setExpanded] = useState(false);
	console.log(item?.topic);
	const goToLesson = () => {
		navigation.navigate("Lesson", { item });
	};
	const toggleExpanded = () => {
		setExpanded(!expanded);
	};
	const options = [
		{
			text: "Course outline",
		},
		{
			text: "Objectives",
		},
		{
			text: "Prerequisites",
		},
	];
	return (
		<View style={styles.container}>
			<ScrollView showsVerticalScrollIndicator={false} bounces={false}>
				<View style={styles.topContainer}>
					<Text style={styles.title}>{item?.topic}</Text>
					<View>{item?.image}</View>
					<View style={styles.button}>
						<BlueButton title="Enroll" onPress={goToLesson} />
					</View>
				</View>
				<View style={styles.bottomContainer}>
					<Text style={styles.title}>Course description</Text>
					<View style={styles.textContainer}>
						<Text
							numberOfLines={expanded ? undefined : 3}
							style={styles.descriptionText}
						>
							"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
							reprehenderit in voluptate velit esse cillum dolore eu fugiat
							nulla pariatur. Excepteur sint occaecat cupidatat non proident,
							sunt in culpa qui officia deserunt mollit anim id est laborum
						</Text>
						<TouchableOpacity activeOpacity={0.8} onPress={toggleExpanded}>
							<Text style={styles.Read}>
								{expanded ? "Read less" : "Read more"}
							</Text>
						</TouchableOpacity>
					</View>
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
					<View style={styles.button}>
						<BlueButton title="Enroll" onPress={goToLesson} />
					</View>
				</View>
			</ScrollView>
		</View>
	);
};

export default CourseDetails;
