import { StyleSheet } from "react-native";
import { colors } from "../../../constants/styling";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primaryWhite,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    headerContainer:{
        marginTop: 20,
        marginBottom: 80,
        marginHorizontal:30,
    },
    subTitle: {
        fontWeight: 'regular',
        marginTop: 20,
        fontSize: 16,
    },
    LoginText:{
        fontWeight: "800",
        color:colors.primaryBlue
    },
    input:{
        paddingHorizontal: 20,
    },
    button:{
        paddingHorizontal: 20,
        marginTop:50
    }
})