import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { styles } from "./styles";
import Option from "../../../components/Option";
import SearchBar from "../../../components/SearchBar";
import Secure from "../../../assets/svg/secure.svg";
import Notification from "../../../assets/svg/notification.svg";
import Privacy from "../../../assets/svg/privacy.svg";
import Accessibility from "../../../assets/svg/accessibility.svg";
import Language from "../../../assets/svg/language.svg";
import Subscription from "../../../assets/svg/subscribe.svg";


const Settings = () => {
	const preferenceOptions = [
		{
			icons: <Notification width={26} height={26} />,
			text: "Notification settings",
		},
		{
			icons: <Accessibility width={26} height={26} />,
			text: "Accessibility settings",
		},
		{
			icons: <Language width={26} height={26} />,
			text: "Language settings",
		},
		{
			icons: <Privacy width={26} height={26} />,
			text: "Privacy settings",
		},
	];
	const AccountSettings = [
		{
			icons: <Secure width={26} height={26} />,
			text: "Security settings",
		},
		{
			icons: <Subscription width={26} height={26} />,
			text: "Subscription",
		},
	];
	return (
		<View style={styles.container}>
			<SearchBar />
			<Text style={styles.sectionTitle}>Preferences</Text>
			{preferenceOptions.map((item, index) => (
				<Option
					key={index}
					icons={item.icons}
					text={item.text}
					onPress={item.onPress ? item.onPress : null}
				/>
			))}
			<Text style={styles.sectionTitle}>Account</Text>
			{AccountSettings.map((item, index) => (
				<Option key={index} icons={item.icons} text={item.text} />
			))}
		</View>
	);
};

export default Settings;
