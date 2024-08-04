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
import Completed from "../screens/AppScreen/completed/Completed";

const Stack = createNativeStackNavigator();
const AppStack = () => {
	return (
		<Stack.Navigator screenOptions={{header: ({ route }) => <NavHeader title={route.name} /> }}>
			<Stack.Screen
				name="Home"
				component={HomeTab}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="Resources"
				component={Resources}
			/>
			<Stack.Screen
				name="Course Detail"
				component={CourseDetails}
			/>
			<Stack.Screen
				name="Lesson"
				component={Lesson}
			/>
			<Stack.Screen
				name="Quiz"
				component={Quiz}
			/>
			<Stack.Screen
				name="Certifications"
				component={Certifications}
			/>
			<Stack.Screen
				name="Completed"
				component={Completed}
				options={{ headerShown: false }}
			/>
		</Stack.Navigator>
	);
};

export default AppStack;
