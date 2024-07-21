import { StyleSheet } from "react-native";
import { colors } from "../../../constants/styling";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.primaryWhite,
		paddingHorizontal: 20,
		paddingTop: 20,
	},
	topContainer: {
		marginBottom: 40,
	},
	title: {
		fontSize: 16,
		fontFamily: "Inter-Bold",
	},
	image: {
		width: 350,
		height: 190,
		marginVertical: 20,
		borderRadius: 5,
	},
	button: {
		alignSelf: "flex-end",
	},
	textContainer: {
		paddingHorizontal: 10,
		marginTop: 20,
	},
	descriptionText: {
		fontSize: 14,
		color: colors.TextGrey1,
	},
	Read: {
		fontSize: 14,
		fontFamily: "Inter-Bold",
		color: colors.TextGrey1,
	},
	options: {
		marginVertical: 20,
	},
});
