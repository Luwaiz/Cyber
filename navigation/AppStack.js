import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/AppScreen/Home/Home";
import Start from "../screens/onBoarding/start/Start";
import Preferences from "../screens/onBoarding/preferences/Preference";

const Stack = createNativeStackNavigator();
const AppStack = () => {
	return (
		<Stack.Navigator screenOptions={{headerShown:false}}>
			<Stack.Screen name="Home" component={Home} />
		</Stack.Navigator>
	);
};

export default AppStack;
