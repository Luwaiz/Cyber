import { Dimensions, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { colors } from "../constants/styling";
import Dashboard from "../screens/AppScreen/dashboard/Dashboard";
import Courses from "../screens/AppScreen/courses/Courses";
import Progress from "../screens/AppScreen/progress/Progress";
import Settings from "../screens/AppScreen/settings/Settings";
import Profile from "../screens/AppScreen/Profile/Profile";
import Board from "../assets/svg/dashboard.svg";
import BoardBlack from "../assets/svg/dashboard_black.svg";
import PersonBlack from "../assets/svg/person.svg";
import Person from "../assets/svg/person_black.svg";
import BookBlack from "../assets/svg/book.svg";
import ProgressBlack from "../assets/svg/progress.svg";
import Book from "../assets/svg/book_black.svg";

const { width, height } = Dimensions.get("screen");

const Tab = createBottomTabNavigator();
const HomeTab = () => {
	return (
		<Tab.Navigator
			screenOptions={({ route, focused }) => ({
				headerShadowVisible: false,
				tabBarLabelStyle: { color: focused ? "green" : "black" },
				headerShown:false
			})}
		>
			<Tab.Screen
				name="Dashboard"
				component={Dashboard}
				options={{
					tabBarIcon: ({ focused }) => (
						<View>
							{focused ? (
								<Board width={30} height={30} />
							) : (
								<BoardBlack width={25} height={25} />
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
						<View>{focused ? <Book width={27} height={27}/> : <BookBlack />}</View>
					),
				}}
			/>
			<Tab.Screen
				name="Progress"
				component={Progress}
				options={{
					tabBarIcon: ({ focused }) => (
						<View>{focused ? <ProgressBlack /> : <ProgressBlack />}</View>
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
									color={colors.primaryBlue}
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
								<Person width={25} height={25} />
							) : (
								<PersonBlack width={20} height={20} />
							)}
						</View>
					),
				}}
			/>
		</Tab.Navigator>
	);
};

export default HomeTab;
