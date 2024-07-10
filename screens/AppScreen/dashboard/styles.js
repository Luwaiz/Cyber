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
        paddingLeft: 20,
        gap:10,
        marginBottom:40
    },
    vertical:{
        gap: 10,
        alignItems: 'center'
    },
    sectionTitle:{
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 20,
        marginLeft:20
    }
})