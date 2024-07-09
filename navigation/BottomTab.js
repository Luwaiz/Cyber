import {
	Dimensions,
	View,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { colors } from "../constants/styling";
// import NavHeader from "../components/NavHeader";
import Dashboard from "../screens/AppScreen/dashboard/Dashboard";
import Courses from "../screens/AppScreen/courses/Courses";
import Progress from "../screens/AppScreen/progress/Progress";
import Settings from "../screens/AppScreen/settings/Settings";
import Profile from "../screens/AppScreen/Profile/Profile";
const { width, height } = Dimensions.get("screen");

const Tab = createBottomTabNavigator();
const HomeTab = () => {
	return (
		<Tab.Navigator
			screenOptions={({ route }) => ({
				headerShadowVisible: false,
				
			})}
		>
			<Tab.Screen
				name="Dashboard"
				component={Dashboard}
				options={{
					tabBarIcon: ({ focused }) => (
						<View>
							{focused ? (
								<Ionicons name="home" size={26} color={colors.primaryColor} />
							) : (
								<Ionicons name="home-outline" size={24} color={"grey"} />
							)}
						</View>
					),
				}}
			/>
			<Tab.Screen
				name="Courses"
				component={Courses}
				options={{
					tabBarIcon: ({ focused }) => (
						<View>
							{focused ? (
								<Ionicons
									name="chatbox"
									size={26}
									color={colors.primaryColor}
								/>
							) : (
								<Ionicons name="chatbox-outline" size={24} color={"grey"} />
							)}
						</View>
					),
				}}
			/>
			<Tab.Screen
				name="Progress"
				component={Progress}
				options={{
					tabBarIcon: ({ focused }) => (
						<View>
							{focused ? (
								<MaterialCommunityIcons name="account-group" size={28} color={colors.primaryColor} />
							) : (
								<MaterialCommunityIcons name="account-group-outline" size={26} color="grey" />
							)}
						</View>
					),
				}}
			/>
			<Tab.Screen
				name="Settings"
				component={Settings}
				options={{
					tabBarIcon: ({ focused }) => (
						<View>
							{focused ? (
								<Ionicons
									name="settings"
									size={26}
									color={colors.primaryColor}
								/>
							) : (
								<Ionicons name="settings-outline" size={24} color={"grey"} />
							)}
						</View>
					),
				}}
			/>
						<Tab.Screen
				name="Profile"
				component={Profile}
				options={{
					tabBarIcon: ({ focused }) => (
						<View>
							{focused ? (
								<Ionicons
									name="settings"
									size={26}
									color={colors.primaryColor}
								/>
							) : (
								<Ionicons name="settings-outline" size={24} color={"grey"} />
							)}
						</View>
					),
				}}
			/>
		</Tab.Navigator>
	);
};

export default HomeTab;

