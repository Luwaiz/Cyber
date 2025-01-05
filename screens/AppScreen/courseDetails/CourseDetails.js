import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { styles } from "./styles";
import BlueButton from "../../../components/BlueButton";
import Option from "../../../components/Option";
import StageManger from "../../../middlewares/StageManger";
import { Quiz1 } from "../../../constants/Chapter1";
import { Quiz2 } from "../../../constants/Chapter2";
import { Quiz3 } from "../../../constants/Chapter3";
import { Quiz4 } from "../../../constants/Chapter4";
import { Quiz5 } from "../../../constants/Chapter5";



const CourseDetails = ({ route, navigation }) => {
	const { item, index } = route.params;
	const markModule = StageManger((state) => state.setVisitedModules);

	const handleVisit = (selectedModuleId) => {
		markModule(index, selectedModuleId);
		navigateToLesson(selectedModuleId);
		console.log("updated module " + selectedModuleId + "topic " + index);
	};
	const navigateToLesson = (selectedModuleId) => {
		switch (index) {
			case 0:
				navigation.navigate("Lesson1", { selectedModuleId });
				break;
			case 1:
				navigation.navigate("Lesson2", { selectedModuleId });
				break;
			case 2:
				navigation.navigate("Lesson3", { selectedModuleId });
				break;
			case 3:
				navigation.navigate("Lesson4", { selectedModuleId });
				break;
			case 4:
				navigation.navigate("Lesson5", { selectedModuleId });
				break;
			default:
				navigation.navigate("Lesson1", { selectedModuleId });
				break;
		}
	};
	const Glossaries = () => {
		switch (index) {
			case 0:
				navigation.navigate("Glossary1");
				break;
			case 1:
				navigation.navigate("Glossary2");
				break;
			case 2:
				navigation.navigate("Glossary3");
				break;
			case 3:
				navigation.navigate("Glossary4");
				break;
			case 4:
				navigation.navigate("Glossary5");
				break;
			default:
				navigation.navigate("Glossary1");
				break;
		}
	};
	const navigateToQuiz = () => {
		const selectedQuiz = (() => {
			switch (index) {
				case 1:
					return Quiz1;
				case 2:
					return Quiz2;
				case 3:
					return Quiz3;
				case 4:
					return Quiz4;
				case 5:
					return Quiz5;
				default:
					return Quiz1;
			}
		})();

		navigation.navigate("Quiz", { Quizzes: selectedQuiz });
	};

	return (
		<View style={styles.container}>
			<ScrollView
				showsVerticalScrollIndicator={false}
				bounces={false}
				contentContainerStyle={{ paddingVertical: 16 }}
			>
				<View style={styles.topContainer}>
					<Text style={styles.title}>{item?.topic}</Text>
				</View>
				<View style={styles.bottomContainer}>
					<Text style={styles.title}>Topic Modules</Text>
					<View style={styles.options}>
						{item?.modules?.map((item, index) => (
							<Option
								key={index}
								icons={item.icons}
								text={<Text>Module {index + 1}</Text>}
								onPress={() => handleVisit(index + 1)}
							/>
						))}
					</View>
					<View style={styles.button}>
						<BlueButton title="Glossary" onPress={Glossaries}/>
						<BlueButton title="Take Quiz" onPress={navigateToQuiz} />
					</View>
				</View>
			</ScrollView>
		</View>
	);
};

export default CourseDetails;
