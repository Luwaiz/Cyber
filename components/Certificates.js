import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { colors } from "../constants/styling";
import { RadioButton } from "react-native-paper";
import BlueButton from "./BlueButton";

const Certificates = ({ question, questionNumber, certify }) => {
	const [selected, setSelected] = useState();

	return (
		<View style={{marginBottom:40}}>
			<View style={styles.container}>
				<View style={styles.certify}>
					<Text style={styles.HeadText}>{certify}</Text>
					<RadioButton
						value={certify}
						status={selected === certify ? "checked" : "unchecked"}
						onPress={() => setSelected(certify)}
						color={colors.primaryBlue}
						uncheckedColor={colors.TextGrey1}
					/>
				</View>
				<Text style={styles.certifyText}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
				</Text>
			</View>
			<View style={styles.button}>
				<BlueButton title={"Download"} />
			</View>
		</View>
	);
};

export default Certificates;

const styles = StyleSheet.create({
	container: {
		width: "100%",
		borderRadius: 2,
		padding: 20,
		borderColor: colors.Grey1,
		borderWidth: 1,
	},
	HeadText: {
		fontFamily: "Inter-SemiBold",
		fontSize: 16,
	},
	certifyText: {
		color: colors.TextGrey1,
		fontFamily: "Inter-Regular",
        marginTop: 20,
    
	},
	certify: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	button: {
		marginTop: 20,
	},
});
