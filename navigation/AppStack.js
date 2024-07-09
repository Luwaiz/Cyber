import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/AppScreen/Home/Home";
import Start from "../screens/onBoarding/start/Start";
import Preferences from "../screens/onBoarding/preferences/Preference";
import Dashboard from "../screens/AppScreen/dashboard/Dashboard";
import HomeTab from "./BottomTab";

const Stack = createNativeStackNavigator();
const AppStack = () => {
	return (
		<Stack.Navigator screenOptions={{headerShown:false}}>
			<Stack.Screen name="Home" component={HomeTab} />
		</Stack.Navigator>
	);
};

export default AppStack;
