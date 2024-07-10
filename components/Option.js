import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { colors } from "../constants/styling";
import { useNavigation } from "@react-navigation/native";

const Option = ({text,icons,onPress}) => {

	return (
		<TouchableOpacity onPress={onPress} activeOpacity={0.5} style={styles.container}>
			<View style={styles.icon}>
                {icons}
            </View>
			<View style={styles.leftContainer}>
				<Text style={styles.text}>{text}</Text>
				<AntDesign name="right" size={20} color={colors.TextGrey1} />
			</View>
		</TouchableOpacity>
	);
};
export default Option;

const styles = StyleSheet.create({
	container: {
		width: "100%",
		backgroundColor: colors.primaryWhite,
		marginBottom: 10,
		borderRadius: 10,
		borderWidth: 1,
		borderColor: colors.Grey1,
		flexDirection: "row",
		alignItems: "center",
		paddingHorizontal: 20,
		paddingVertical: 15,
	},
	leftContainer: {
		justifyContent: "space-between",
		alignItems: "center",
		flex: 1,
		flexDirection: "row",
	},
	icon: {
		width: 30,
		justifyContent: "center",
		alignItems: "center",
		marginRight: 10,
	},
    text: {
        color: colors.TextGrey1,
        fontSize: 16,
    },
    
});