import {
	Dimensions,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
const { width, height } = Dimensions.get("screen");

const BackButton = ({ text }) => {
	const navigation = useNavigation();
	const goBack = () => {
		navigation.goBack();
	};
	//back button component
	return (
		<View style={styles.headCont}>
			<TouchableOpacity activeOpacity={0.8} onPress={goBack}>
				<View style={styles.back}>
					<AntDesign name="arrowleft" size={24} color="black" />
				</View>
			</TouchableOpacity>
			<Text style={styles.title}>{text}</Text>
		</View>
	);
};

export default BackButton;

const styles = StyleSheet.create({
	headCont: {
		flexDirection: "row",
		alignItems: "center",
		gap:10
	},
	back: {
		height: 48,
		borderRadius: 50,
		justifyContent: "center",
	},
	title: {
		fontSize: 18,
        fontWeight: "bold",
	}
});
