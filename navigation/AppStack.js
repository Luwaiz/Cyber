import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeTab from "./BottomTab";
import Resources from "../screens/AppScreen/resources/Resources";
import NavHeader from "../components/NavHeader";
import CourseDetails from "../screens/AppScreen/courseDetails/CourseDetails";
import Lesson1 from "../screens/AppScreen/lesson/Lesson1";
import Quiz from "../screens/AppScreen/quiz/Quiz";
import Certifications from "../screens/AppScreen/certifications/Certifications";
import Completed from "../screens/AppScreen/completed/Completed";
import CourseOutline from "../components/CourseOutline";
import Lesson2 from "../screens/AppScreen/lesson/Lesson2";
import Lesson3 from "../screens/AppScreen/lesson/Lesson3";
import Lesson4 from "../screens/AppScreen/lesson/Lesson4";
import Lesson5 from "../screens/AppScreen/lesson/Lesson5";
import Glossary1 from "../screens/AppScreen/glossary/Glossary1";
import Glossary2 from "../screens/AppScreen/glossary/Glossary2";
import Glossary3 from "../screens/AppScreen/glossary/Glossary3";
import Glossary4 from "../screens/AppScreen/glossary/Glossary4";
import Glossary5 from "../screens/AppScreen/glossary/Glossary5";

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
			<Stack.Screen name="Lesson1" component={Lesson1} />
			<Stack.Screen name="Lesson2" component={Lesson2} />
			<Stack.Screen name="Lesson3" component={Lesson3} />
			<Stack.Screen name="Lesson4" component={Lesson4} />
			<Stack.Screen name="Lesson5" component={Lesson5} />
			<Stack.Screen name="Glossary1" component={Glossary1} />
			<Stack.Screen name="Glossary2" component={Glossary2}/>
			<Stack.Screen name="Glossary3" component={Glossary3} />
			<Stack.Screen name="Glossary4" component={Glossary4} />
			<Stack.Screen name="Glossary5" component={Glossary5}/>
			<Stack.Screen name="Quiz" component={Quiz} />
			<Stack.Screen name="Certifications" component={Certifications} />
			<Stack.Screen
				name="Completed"
				component={Completed}
				options={{ headerShown: false }}
			/>
			<Stack.Screen name="Course Outline" component={CourseOutline} />
		</Stack.Navigator>
	);
};

export default AppStack;
