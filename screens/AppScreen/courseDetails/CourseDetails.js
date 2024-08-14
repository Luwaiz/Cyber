import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { styles } from "./styles";
import BlueButton from "../../../components/BlueButton";
import Option from "../../../components/Option";

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
			onPress: () => navigation.navigate("Course Outline"),
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
							numberOfLines={expanded ? undefined : 5}
							style={styles.descriptionText}
						>
							This course provides an in-depth understanding of blockchain
							technology and its applications in cybersecurity. Students will
							explore the fundamentals of blockchain, cryptographic principles,
							smart contracts, and the implementation of blockchain in securing
							digital transactions and data. Through hands-on lab exercises,
							students will gain practical experience in working with blockchain
							technology.
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
