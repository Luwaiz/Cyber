import { Dimensions, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { styles } from "./styles";
import Animated, {
	Easing,
	ReduceMotion,
	useAnimatedProps,
	useAnimatedStyle,
	useSharedValue,
	withTiming,
} from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";
import BlueButton from "../../../components/BlueButton";
import WhiteButton from "../../../components/WhiteButton";
const { width, height } = Dimensions.get("screen");

const Start = ({ navigation }) => {
	const WIDTH = useSharedValue(width);
	const HEIGHT = useSharedValue(height);
	const borderRadius = useSharedValue(0);

	const ToPreference = () => {
		navigation.navigate("Preferences");
	};
	const ToLogin = () => {
		navigation.navigate("AuthStack", {
			screen: "Log In",
		});
	};

	const moveCircle = () => {
		if (HEIGHT.value === height && WIDTH.value === width) {
			const newHeight = HEIGHT.value / 4.4;
			const newWidth = WIDTH.value / 2;

			HEIGHT.value = withTiming(newHeight, { duration: 2000 });
			WIDTH.value = withTiming(newWidth, { duration: 2000 });
			borderRadius.value = withTiming(500, { duration: 2000 });
		}
	};

	const animatedStyle = useAnimatedStyle(() => ({
		width: WIDTH.value,
		height: HEIGHT.value,
		borderRadius: borderRadius.value,
	}));

	useEffect(() => {
		moveCircle();
	}, []);

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.circleContainer}>
				<Animated.View style={[styles.Circle, animatedStyle]}>
					<Text style={styles.cybus}>Cybus</Text>
				</Animated.View>
			</View>
			<View style={styles.button}>
				<BlueButton title={"Get Started"} onPress={ToPreference} />
				<WhiteButton title={"Already have an account"} onPress={ToLogin} />
			</View>
		</SafeAreaView>
	);
};

export default Start;
