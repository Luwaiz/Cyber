import { StyleSheet } from "react-native";
import { colors } from "../../../constants/styling";

export const styles = StyleSheet.create({
	item: {
		padding: 10,
		marginVertical: 6,
		marginHorizontal: 16,
		borderRadius: 5,
		borderWidth: 1,
		borderColor: colors.Grey1,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
	},
	text: {
		color: colors.TextGrey1,
		fontSize: 16,
		fontFamily: "Inter-Regular",
	},
});
