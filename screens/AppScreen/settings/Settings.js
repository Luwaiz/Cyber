import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { styles } from "./styles";
import Option from "../../../components/Option";
import SearchBar from "../../../components/SearchBar";

const Settings = () => {
	return (
		<View style={styles.container}>
		<SearchBar/>
			<Text style={styles.sectionTitle}>Preferences</Text>
			<Option />
			<Option />
			<Option />
			<Option /> 
			<Text style={styles.sectionTitle}>Account</Text>
			<Option />
			<Option />
		</View>
	);
};

export default Settings;
