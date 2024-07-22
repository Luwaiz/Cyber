import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeTab from "./BottomTab";
import Resources from "../screens/AppScreen/resources/Resources";
import NavHeader from "../components/NavHeader";
import CourseDetails from "../screens/AppScreen/courseDetails/CourseDetails";
import Lesson from "../screens/AppScreen/lesson/Lesson";
import Quiz from "../screens/AppScreen/quiz/Quiz";
import Certifications from "../screens/AppScreen/certifications/Certifications";

const Stack = createNativeStackNavigator();
const AppStack = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="Home"
				component={HomeTab}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="Resources"
				component={Resources}
				options={{ header: ({ route }) => <NavHeader title={route.name} /> }}
			/>
			<Stack.Screen
				name="Course Detail"
				component={CourseDetails}
				options={{ header: ({ route }) => <NavHeader title={route.name} /> }}
			/>
			<Stack.Screen
				name="Lesson"
				component={Lesson}
				options={{ header: ({ route }) => <NavHeader title={route.name} /> }}
			/>
			<Stack.Screen
				name="Quiz"
				component={Quiz}
				options={{ header: ({ route }) => <NavHeader title={route.name} /> }}
			/>
			<Stack.Screen
				name="Certifications"
				component={Certifications}
				options={{ header: ({ route }) => <NavHeader title={route.name} /> }}
			/>
		</Stack.Navigator>
	);
};

export default AppStack;
