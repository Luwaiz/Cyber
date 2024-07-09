import { StyleSheet } from "react-native";
import { colors } from "../../../constants/styling";

export const styles = StyleSheet.create({
	item: {
		padding: 10,
		marginVertical: 8,
		marginHorizontal: 16,
		borderRadius: 5,
		borderWidth: 1,
		borderColor: colors.Grey1,
		justifyContent: "center",
        alignItems: "center",
	},
	text: { 
        color: colors.TextGrey1 
    },
	subTitle: {
		color: colors.primaryBlack,
		marginHorizontal: 30,
        marginTop: 20,
        marginBottom: 30,
	},
});
