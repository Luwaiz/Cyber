import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Navigation from "./navigation";
import FontResources from "./react-native-config";
import { useEffect } from "react";
import StageManager from "./middlewares/StageManger";

export default function App() {
	useEffect(() => {
		// Load the state when the app starts
		StageManager.getState().loadState();
	}, []);
	const fontLoaded = FontResources();
	if (!fontLoaded) {
		return null;
	} else {
		return (
			<SafeAreaProvider style={styles.container}>
				<Navigation />
				<StatusBar style="auto" />
			</SafeAreaProvider>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
