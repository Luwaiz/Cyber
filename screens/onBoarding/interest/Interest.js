import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { interest } from "../../../constants/OnBoard";
import { colors } from "../../../constants/styling";
import { styles } from "./styles";

const Interest = () => {
	return (
		<View>
			<FlatList data={interest} renderItem={renderItem} />
		</View>
	);
};
const renderItem = ({ item }) => {
	return (
		<View style={styles.item}>
			<Text style={styles.text}>{item.topic}</Text>
		</View>
	);
};
export default Interest;

