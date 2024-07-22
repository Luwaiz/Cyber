import { StyleSheet } from "react-native";
import { colors } from "../../../constants/styling";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primaryWhite,
    },
    title: {
        fontSize: 20,
		fontFamily: "Inter-Bold",
    },
    headerContainer:{
        marginTop: 20,
        marginBottom: 60,
        marginHorizontal:24,
    },
    subTitle: {
        fontWeight: 'regular',
        marginTop: 20,
        fontSize: 14,
		fontFamily: "Inter-Regular",
    },
    LoginText:{
        fontWeight: "800",
        color:colors.primaryBlue,
		fontFamily: "Inter-ExtraBold",
    },
    input:{
        paddingHorizontal: 20,
    },
    button:{
        paddingHorizontal: 20,
        marginTop:50
    }
})