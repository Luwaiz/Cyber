import { StyleSheet } from "react-native";
import { colors } from "../../../constants/styling";


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primaryWhite
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20
    },
    Circle: {
        backgroundColor:colors.primaryBlue,
        alignSelf: 'center',
        top:"auto",
        bottom:"auto",
    },
    circleContainer :{
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        paddingHorizontal: 30,
        borderRadius: 5,
        marginTop: "auto",
        marginBottom:30
    }
})