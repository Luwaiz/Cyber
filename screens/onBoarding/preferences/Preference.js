import {
	Dimensions,
	FlatList,
	Image,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import React, { useRef, useState } from "react";
import { Preference } from "../../../constants/OnBoard";
import Footer from "../../../components/Footer";
import Indicator from "../../../components/Indicator";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import Interest from "../interest/Interest";
import Scheme from "../scheme/Scheme";
const { width, height } = Dimensions.get("screen");

const Preferences = ({ navigation }) => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const slideRef = useRef(null);

	// function for dectecting the current page and updating indicator Bar
	const scrollFunction = (e) => {
		const contentOffsetX = e.nativeEvent.contentOffset.x;
		setCurrentIndex(Math.round(contentOffsetX / width));
	};

	//Next button function
	const NextPage = () => {
		const nextSlide = currentIndex + 1;
		if (nextSlide < Preference.length) {
			const offset = nextSlide * width;
			slideRef?.current?.scrollToOffset({ offset });
			setCurrentIndex(nextSlide);
		}
	};
	// Skip button function
	const SkipPage = () => {
		navigation.replace("AuthStack", {
			params: "AuthScreen",
		});
	};

	// function to navigate to home screen
	const navigateToSignUp = () => {
		navigation.replace("AuthStack", {
			params: "SignUp",
		});
	};

	return (
		<SafeAreaView style={styles.container}>
			<Indicator currentIndex={currentIndex} />
			<FlatList
				ref={slideRef}
				data={Preference}
				keyExtractor={(item, index) => index.toString()}
				horizontal
                contentContainerStyle={{paddingBottom:30}}
				onMomentumScrollEnd={scrollFunction}
				pagingEnabled
				showsHorizontalScrollIndicator={false}
				scrollEnabled={false}
				renderItem={({ item, index }) => (
					<View style={styles.contain}>
						<View style={styles.headText}>
							<Text style={styles.Title}>{item.title}</Text>
						</View>
                        {currentIndex === 0 && <Interest/>}
                        {currentIndex === 1 && <Scheme/>}
					</View>
				)}
			/>
			<Footer nextPage={NextPage} currentIndex={currentIndex} navigate={navigateToSignUp}/>
		</SafeAreaView>
	);
};

export default Preferences;
