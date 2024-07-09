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
	title: {
		fontSize: 24,
		textAlign: "center",
		marginBottom: 30,
		// fontFamily:"Albert-SemiBold"
	},
	subTitle: {
		fontSize: 20,
		flexWrap: "wrap",
		fontWeight: "bold",
		// fontFamily:"AlbertSans-ExtraBold"
	},
	headText: {
		paddingHorizontal:30
	},
});
