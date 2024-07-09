import { StyleSheet } from "react-native";
import { colors } from "../../../constants/styling";

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: colors.primaryWhite,
        justifyContent: 'center',
        alignItems: 'center'
    },
    horizontal:{
        padding: 20,
        gap:10,
        marginBottom:50
    },
    vertical:{
        gap: 10,
        alignItems: 'center'
    },
    sectionTitle:{
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
        marginLeft:20
    }
})