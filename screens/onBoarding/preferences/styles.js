import { Dimensions, StyleSheet } from "react-native";
import { colors } from "../../../constants/styling";
const { width, height } = Dimensions.get("screen");

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.primaryWhite,
	},
	contain: {
		flex: 1,
		width: width,
		paddingTop: 20,
	},
	Title: {
		fontSize: 20,
		fontFamily: "Inter-Bold",
	},
	headText: {
		paddingHorizontal:24
	},
	
});
