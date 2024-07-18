import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeTab from "./BottomTab";
import Resources from "../screens/AppScreen/resources/Resources";
import NavHeader from "../components/NavHeader";

const Stack = createNativeStackNavigator();
const AppStack = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen name="Home" component={HomeTab} options={{ headerShown: false }}/>
			<Stack.Screen
				name="Resources"
				component={Resources}
				options={{ header: ({route}) => <NavHeader title={route.name} /> }}
			/>
		</Stack.Navigator>
	);
};

export default AppStack;
