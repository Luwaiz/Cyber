import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { interest } from "../../../constants/OnBoard";
import { colors } from "../../../constants/styling";
import { styles } from "./styles";
import { RadioButton } from "react-native-paper";

const Interest = () => {
	const [selected, setSelected] = useState();
	const Parent = () => {
		return (
			<>
				<FlatList
					keyExtractor={(item, index) => index.toString()}
					data={interest}
					renderItem={renderItem}
				/>
			</>
		);
	};

	const renderItem = ({ item, index }) => {
		return (
			<View style={styles.item}>
				<Text style={styles.text}>{item.topic}</Text>
				<RadioButton
					value={item.topic}
					status={selected === item.topic ? "checked" : "unchecked"}
					onPress={() => setSelected(item.topic)}
					color={colors.primaryBlue}
					uncheckedColor={colors.Grey2}
				/>
			</View>
		);
	};
	return <Parent />;
};
export default Interest;
