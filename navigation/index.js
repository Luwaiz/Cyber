import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AppStack from "./AppStack";
import BoardingStack from "./BoardingStack";
import AuthStack from "./AuthStack";

const Stack = createNativeStackNavigator();

const Navigation = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={{ headerShown: false }}>
				<Stack.Screen name="OnBoard" component={BoardingStack}/>
				<Stack.Screen name="AuthStack" component={AuthStack}/>
				<Stack.Screen name="AppStack" component={AppStack}/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default Navigation;

const styles = StyleSheet.create({});
