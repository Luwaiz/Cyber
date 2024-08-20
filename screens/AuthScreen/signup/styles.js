import { StyleSheet } from "react-native";
import { colors } from "../../../constants/styling";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "white",
      },
      signup: {
        width: 350,
        marginTop: 50,
        paddingTop: 30,
        alignItems: "center",
        marginBottom: 30,
      },
      signupTxt: {
        color: colors.primaryBlue,
        fontSize: 50,
        fontWeight: "bold",
        textDecorationStyle: "solid",
        textDecorationColor: "black",
        textShadowColor: "black",
        textShadowRadius: 10,
        textShadowOffset: { height: 2, width: 2 },
      },
      TextInputs: {
        backgroundColor: "#D9D9D9",
        alignItems: "center",
        height: 50,
        width: 300,
        borderColor: colors.primaryBlue,
        borderWidth: 1,
        borderRadius: 30,
        justifyContent: "center",
        marginVertical: 25,
      },
      textBox: {
        width: 300,
        textAlign: "center",
      },
      button: {
        justifyContent: "center",
        alignItems: "center",
        width: 230,
        height: 60,
        borderRadius: 30,
       
      },
      text: {
        marginTop: 10,
        flexDirection: "row",
        borderColor: colors.primaryBlue,
        borderBottomWidth: 1,
      },
      bigCircle: {
        height: 200,
        width: 200,
        borderRadius: 100,
        backgroundColor: colors.primaryBlue,
        position: "absolute",
        top: -110,
        right: -110,
      },
      smallCircle: {
        height: 100,
        width: 100,
        borderRadius: 100,
        backgroundColor: colors.primaryBlue,
        position: "absolute",
        right: 0,
      },
      bigCircle2: {
        height: 200,
        width: 200,
        borderRadius: 100,
        backgroundColor: colors.primaryBlue,
        position: "absolute",
        bottom: -110,
        left: -110,
      },
      smallCircle2: {
        height: 100,
        width: 100,
        borderRadius: 100,
        backgroundColor: colors.primaryBlue,
        position: "absolute",
        bottom: 0,
        left: 0,
      },
      error:{
        color: "red",
        fontSize: 12,
      }
})