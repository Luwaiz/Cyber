import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { styles } from "./styles";
import Suggestions from "../../../components/Suggestions";
import { interest } from "../../../constants/OnBoard";
import { SafeAreaView } from "react-native-safe-area-context";

const Courses = () => {
	return (
		<SafeAreaView style={styles.container} >
			<ScrollView showsVerticalScrollIndicator={false}>
				{interest.map((item,index)=>(<Suggestions key={index} item={item} index={index}/>))}
			</ScrollView>
		</SafeAreaView>
	);
};

export default Courses;
