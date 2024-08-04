import { StyleSheet } from "react-native";
import { colors } from "../../../constants/styling";

export const styles = StyleSheet.create({
    container:{
		flex: 1,
		backgroundColor: colors.primaryWhite,
		padding:20
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
    bottomContainer:{
        marginTop:20
    },


})