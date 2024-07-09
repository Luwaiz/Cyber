import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { SafeAreaView } from 'react-native-safe-area-context'

const SignUp = () => {
  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.headerContainer}>
      <Text style={styles.title}>SignUp</Text>
      <Text style={styles.subTitle}>or if you have an account
      <Text style={styles.LoginText}> login</Text>
      </Text>
    </View>
    </SafeAreaView>
  )
}

export default SignUp

