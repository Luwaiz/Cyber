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
		justifyContent: "center",
        alignItems: "center",
	},
	text: { 
        color: colors.TextGrey1 ,
		fontSize: 16,
		fontFamily: "Inter-Regular",
    },
	subTitle: {
		color: colors.primaryBlack,
		marginHorizontal: 24,
        marginTop: 16,
        marginBottom: 30,
		fontSize: 16,
		fontFamily: "Inter-Regular",
	},
});
