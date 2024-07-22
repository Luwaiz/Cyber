import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignUp from "../screens/AuthScreen/signup/SignUp";
import LogIn from "../screens/AuthScreen/login/LogIn";

const Stack = createNativeStackNavigator();
const AuthStack = () => {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name="SignUp" component={SignUp} />
			<Stack.Screen name="Log In" component={LogIn} />
		</Stack.Navigator>
	);
};

export default AuthStack;
