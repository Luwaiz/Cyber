import { StyleSheet } from "react-native";
import { colors } from "../../../constants/styling";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "white",
		paddingHorizontal: 16,
		paddingVertical: 20,
	},
	heading: {
		fontSize: 22,
		fontWeight: "bold",
		color: colors.primaryBlue,
		marginBottom: 16,
		textAlign: "center",
	},
	letterSection: {
		fontSize: 18,
		fontWeight: "bold",
		color: colors.primaryBlue,
		marginTop: 20,
		marginBottom: 10,
		borderBottomColor: colors.primaryBlue,
		borderBottomWidth: 1,
		paddingBottom: 5,
	},
	glossaryItem: {
		marginBottom: 15,
	},
	term: {
		fontSize: 16,
		fontWeight: "600",
		color: colors.primaryBlue,
	},
	definition: {
		fontSize: 14,
		lineHeight: 24,
		color: "black",
	},
});
