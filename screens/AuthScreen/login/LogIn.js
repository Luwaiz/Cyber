import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import TextInput1 from '../../../components/TextInput1';
import BlueButton from '../../../components/BlueButton';
import { styles } from './styles';

const LogIn = ({navigation}) => {
  const navigateToHome = () => {
		navigation.navigate("AppStack", {
			screen: "Home",
		});
	};
	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.headerContainer}>
				<Text style={styles.title}>Login</Text>
				<Text style={styles.subTitle}>
        or if you don’t have an account
					<TouchableOpacity>
          <Text style={styles.LoginText}> SignUp</Text>
          </TouchableOpacity>
				</Text>
			</View>
			<View style={styles.input}>
				<TextInput1 text={"Username"} placeholder={"Enter your last name"} />
				<TextInput1 text={"Password"} placeholder={"Enter your password"} />
			</View>
			<View style={styles.button}>
				<BlueButton title={"Login"} onPress={navigateToHome}/>
			</View>
		</SafeAreaView>
	);
}

export default LogIn

