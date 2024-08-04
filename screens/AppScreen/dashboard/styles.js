import { StyleSheet } from "react-native";
import { colors } from "../../../constants/styling";

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: colors.primaryWhite,
        justifyContent: 'center',
    },
    horizontal:{
        paddingBottom: 20,
        paddingHorizontal: 20,
        gap:10,
        marginBottom:40
    },
    vertical:{
        gap: 10,
        alignItems: 'center'
    },
    sectionTitle:{
        marginBottom: 20,
        marginLeft:20,
        fontSize: 18,
        fontFamily: "Inter-Bold",

    }
})