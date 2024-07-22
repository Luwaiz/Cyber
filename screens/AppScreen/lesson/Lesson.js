import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { styles } from "./styles";
import Option from "../../../components/Option";

const Lesson = ({navigation}) => {

    const navigateToResource = () => {
        navigation.navigate("Resources");
    };
    const navigateToQuiz=()=>{
        navigation.navigate("Quiz");
    }
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
		<View style={styles.container}>
			<View>
				<Image
					source={require("../../../assets/images/phonePic.jpg")}
					resizeMode="cover"
					style={styles.image}
				/>
			</View>
            <View style={styles.bottomContainer}>
            <Text style={styles.title}>Transcript</Text>
			<View style={styles.textContainer}>
				<ScrollView>
					<Text style={styles.descriptionText}>
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat. Duis aute irure dolor in
						reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
						pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
						culpa qui officia deserunt mollit anim id est laborum "Lorem ipsum
						dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
						incididunt ut labore et dolore magna aliqua. Ut enim ad minim
						veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
						ea commodo consequat. Duis aute irure dolor in reprehenderit in
						voluptate velit esse cillum dolore eu fugiat nulla pariatur.
						Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
						officia deserunt mollit anim id est laborum "Lorem ipsum dolor sit
						amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
						ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
						nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
						consequat. Duis aute irure dolor in reprehenderit in voluptate velit
						esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
						cupidatat non proident, sunt in culpa qui officia deserunt mollit
						anim id est laborum
					</Text>
				</ScrollView>
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
            </View>
	
		</View>
	);
};

export default Lesson;
