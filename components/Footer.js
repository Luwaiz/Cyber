import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import BlueButton from "./BlueButton";
import { colors } from "../constants/styling";
const {width, height} = Dimensions.get("screen")

const Footer = ({nextPage,navigate,currentIndex}) => {
	return (
		<View style={styles.container}>
			<BlueButton title={"Continue"} onPress={currentIndex === 3? navigate : nextPage}/>
		</View>
	);
};

export default Footer;

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        height:height/9,
        backgroundColor: colors.primaryWhite,
        paddingHorizontal: 30,
        borderTopWidth: 0.5,
        borderTopColor: colors.primaryBlack
    },
});
