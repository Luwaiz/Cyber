import { StyleSheet } from "react-native";
import { colors } from "../../../constants/styling";

export const styles = StyleSheet.create({
    container:{
		flex: 1,
		backgroundColor: colors.primaryWhite,
		paddingHorizontal: 20,
		paddingTop: 20,
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
    textContainer: {
		paddingHorizontal: 10,
		marginTop: 20,
        marginBottom:40,
        borderRadius:5,
        borderWidth:1,
        borderColor:colors.Grey1,
        padding:10,
        maxHeight:200,
        minHeight: 100,
	},
    descriptionText: {
		fontSize: 14,
		color: colors.TextGrey1,
	},
})