import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { colors } from "../../../constants/styling";
import { RadioButton } from "react-native-paper";
import { styles } from "./styles";

const Schedule = () => {
    const questions=[
        {name: "30 Minutes per day"},
        {name: "1 hour per day"},
        {name: "2 hours per day"}
    ]
	const [selected, setSelected] = useState();
	const Parent = () => {
		return (
			<View>
				<FlatList
					keyExtractor={(item, index) => index.toString()}
					data={questions}
					renderItem={renderItem}
				/>
			</View>
		);
	};

	const renderItem = ({ item, index }) => {
		return (
			<View style={styles.item}>
				<Text style={styles.text}>{item.name}</Text>
				<RadioButton
					value={item.name}
					status={selected === item.name ? "checked" : "unchecked"}
					onPress={() => setSelected(item.name)}
					color={colors.primaryBlue}
					uncheckedColor={colors.Grey2}
				/>
			</View>
		);
	};
	return <Parent />;
};
export default Schedule;
