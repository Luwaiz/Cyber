import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { colors } from "../../../constants/styling";
import { RadioButton } from "react-native-paper";
import { styles } from "./styles";

const Knowledged = () => {
    const questions=[
        {name: "I’m new to the field"},
        {name: "I want to add to my already existing knowledge"},
        {name: "i just want to brush up on the\nknowledge i already have"}
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
export default Knowledged;
