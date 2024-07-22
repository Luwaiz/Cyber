import React from "react";
import { Dimensions, Image, Pressable, StyleSheet, Text, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
const { width, height } = Dimensions.get("screen");
import { colors } from "../constants/styling";
import { useNavigation } from "@react-navigation/native";

const Suggestions = ({ item, index }) => {
	
	const navigation = useNavigation()
	const goToDetails = () => {
        navigation.navigate("Course Detail", { item })
    }
	const Loop = () => {
		let icons = [];
		for (let i = 0; i < 5; i++) {
			icons.push(
				<Entypo name="star" size={18} color={colors.primaryBlue} key={i} /> 
			);
		}
		return icons;
	};

	return (
		<Pressable onPress={goToDetails} key={index} style={styles.section}>
			<Image
				source={require("../assets/images/phonePic.jpg")}
				resizeMode="cover"
				style={styles.image}
			/>
			<View style={styles.infoContainer}>
				<Text style={styles.text}>{item?.topic}</Text>
				<Text style={styles.subText}>Irolem ipsum</Text>
				<View style={styles.ratingContainer}>{Loop()}</View>
			</View>
		</Pressable>
	);
};

export default Suggestions;

const styles = StyleSheet.create({
	section: {
		marginBottom: 10,
		backgroundColor: "#fff",
		borderWidth: 1,
		borderColor: "#ddd",
		borderRadius: 5,
		width: width - 30,
		height: 130,
		flexDirection: "row",
	},
	image: {
		width: "40%",
		height: "100%",
	},
	infoContainer: {
		flex: 1,
		padding: 10,
	},
	text: {
		fontSize: 16,
		color: colors.TextGrey1,
        fontFamily: "Inter-Bold",
	},
	subText: {
		fontSize: 14,
		color: colors.Grey3,
		marginTop: 3,
        fontFamily: "Inter-Regular",
	},
	ratingContainer: {
		flexDirection: "row",
		marginTop: "auto",
	},
});
