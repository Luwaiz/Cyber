import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
const { width, height } = Dimensions.get("screen");

import React from "react";
import { colors } from "../constants/styling";

const Suggestions = ({ item, index }) => {
	return (
		<View key={index} style={styles.section}>
			<Image
				source={require("../assets/images/phonePic.jpg")}
				resizeMode="cover"
				style={styles.image}
			/>
			<View style={styles.infoContainer}>
				<Text style={styles.text}>{item.topic}</Text>
			</View>
		</View>
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
        fontWeight: "bold",
        color:colors.TextGrey1
    },
});
