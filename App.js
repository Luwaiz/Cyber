import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Navigation from "./navigation";
import FontResources from "./react-native-config";

export default function App() {
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
