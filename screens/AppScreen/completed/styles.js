import { StyleSheet } from "react-native";
import { colors } from "../../../constants/styling";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.primaryWhite,
		alignItems:"center",
		justifyContent: "center",
	},
	title: {
		fontSize: 20,
		fontFamily: "Inter-Bold",
	},
	subtitle:{
		fontSize: 16,
		fontFamily: "Inter-Regular",
		paddingHorizontal:40,
		textAlign: "center",
		marginTop:10
	},
	button:{
		width:"80%",
		marginTop:50,
	}
});
