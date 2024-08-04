import { Image, StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../constants/styling";
import BackButton from "./BackButton";
import Profile from "../assets/svg/profile.svg";

const NavHeader = (props) => {
	return (
		<View style={styles.overlay}>
			{props.title === "Dashboard" ? (
				<View style={styles.leftContainer}>
					<View style={styles.picture}>
						<Image
							source={require("../assets/images/phonePic.jpg")}
							resizeMode="cover"
							style={styles.pic}
						/>
					</View>
					<Text style={styles.welcome}>
						Welcome
						<Text style={styles.title}> {props.title}</Text>
					</Text>
				</View>
			) : (
				<View style={styles.leftContainer}>
					<BackButton text={props.title} />
				</View>
			)}
		</View>
	);
};

export default NavHeader;

const styles = StyleSheet.create({
	overlay: {
		width: "100%",
		backgroundColor: colors.primaryWhite,
		paddingTop: StatusBar.currentHeight ,
		flexDirection: "row",
		alignItems: "center",
		paddingHorizontal: 20,
	},
	title: {
		fontFamily: "Inter-Bold",
	},
	welcome: {
		fontSize: 18,
		fontFamily: "Inter-Regular",
	},
	picture: {
		width: 40,
		height: 40,
		borderRadius: 30,
		alignItems: "center",
		justifyContent: "center",
	},
	pic: {
		width: "100%",
		height: "100%",
		borderRadius: 30,
	},
	leftContainer: {
		flexDirection: "row",
		alignItems: "center",
		gap: 10,
	},
});
