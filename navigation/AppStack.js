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
import CourseOutline from "../components/CourseOutline";
import Module1 from "../components/BlockIntro";
import Module2 from "../components/Module2";
import Module3 from "../components/Module3";

const Stack = createNativeStackNavigator();
const AppStack = () => {
	return (
		<Stack.Navigator
			screenOptions={{
				header: ({ route }) => <NavHeader title={route.name} />,
			}}
		>
			<Stack.Screen
				name="Home"
				component={HomeTab}
				options={{ headerShown: false }}
			/>
			<Stack.Screen name="Resources" component={Resources} />
			<Stack.Screen name="Course Detail" component={CourseDetails} />
			<Stack.Screen name="Lesson" component={Lesson} />
			<Stack.Screen name="Quiz" component={Quiz} />
			<Stack.Screen name="Certifications" component={Certifications} />
			<Stack.Screen
				name="Completed"
				component={Completed}
				options={{ headerShown: false }}
			/>
			<Stack.Screen name="Course Outline" component={CourseOutline} />
			<Stack.Screen name="Module1" component={Module1} />
			<Stack.Screen name="Module2" component={Module2} />
			<Stack.Screen name="Module3" component={Module3} />
		</Stack.Navigator>
	);
};

export default AppStack;
