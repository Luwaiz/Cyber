import { StyleSheet } from "react-native";
import { colors } from "../../../constants/styling";

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: colors.primaryWhite,
        paddingHorizontal: 20,
        alignItems: 'center'
    },
    topContainer:{
        marginVertical:30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    picture:{
        width:130,
        height:130,
        marginBottom:20
    },
    pic:{
        width: "100%",
        height: "100%",
        borderRadius: 75,
        resizeMode: "cover"
    },
    textContainer:{
        gap:10
    },
    text1:{
        fontSize:18,
        fontWeight: 'bold',
        color: colors.primaryBlack,
        textAlign: "center"
    },
    text2:{
        fontSize:14,
        color: colors.TextGrey1,
        textAlign: "center"
    }
})