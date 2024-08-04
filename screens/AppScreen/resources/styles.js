import { StyleSheet } from "react-native";
import { colors } from "../../../constants/styling";

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: colors.primaryWhite,
        padding: 20,
    },
    cards:{
        justifyContent: 'center',
        alignItems: 'center',
    }
})