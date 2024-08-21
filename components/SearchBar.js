import {
	Dimensions,
	Pressable,
	StyleSheet,
	Text,
	TextInput,
	View,
} from "react-native";
import React, { useState } from "react";
import { Feather } from "@expo/vector-icons";
import { colors } from "../constants/styling";

const SearchBar = ({Search,setSearch,RunSearch}) => {
	const [data, setData] = useState([]);
	return (
		<>
			<View style={styles.searchContainer}>
				<Pressable style={styles.searchIcon} >
					<Feather name="search" size={24} color={colors.Grey3} />
				</Pressable>
				<TextInput
					style={styles.searchBox}
					placeholder="search"
					value={Search}
					cursorColor={colors.primaryBlack}
                    placeholderTextColor={colors.Grey3}
				/>
			</View>
			
		</>
	);
};

export default SearchBar;

const styles = StyleSheet.create({
	searchContainer: {
		width: "100%",
		height: 50,
		borderRadius: 50,
		flexDirection: "row",
		alignItems: "center",
		paddingHorizontal: 5,
		justifyContent: "space-between",
		marginBottom: 40,
        borderColor:colors.Grey2,
        borderWidth: 1,
	},
	searchIcon: {
		height: 40,
		width: 40,
		justifyContent: "center",
		alignItems: "center",
	},
	searchBox: {
		width: "85%",
		height: 40,
	},
});
