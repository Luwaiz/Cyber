import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import React, { useEffect, useState } from "react";
import  { FontAwesome } from "@expo/vector-icons";


export default function FontResources() {
	const [fontLoaded, setFontLoaded] = useState(false);

	useEffect(() => {
		async function LoadFonts() {
			try {
				SplashScreen.preventAutoHideAsync();
				await Font.loadAsync({
					...FontAwesome.font,
                    "Teko-Bold": require("./assets/fonts/Teko-Bold.ttf"),
					'Inter-Bold': require("./assets/fonts/Inter-Bold.ttf"),
					'Inter-ExtraBold': require("./assets/fonts/Inter-ExtraBold.ttf"),
					'Inter-Light': require("./assets/fonts/Inter-Light.ttf"),
					'Inter-Medium': require("./assets/fonts/Inter-Medium.ttf"),
					'Inter-Regular': require("./assets/fonts/Inter-Regular.ttf"),
					'Inter-SemiBold': require("./assets/fonts/Inter-SemiBold.ttf"),
				});
			} catch (error) {
				console.warn(error);
			} finally {
				setFontLoaded(true);
				SplashScreen.hideAsync();
			}
		}
		LoadFonts();
	}, []);
	return fontLoaded;
}
