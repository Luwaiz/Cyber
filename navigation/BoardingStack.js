import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Start from '../screens/onBoarding/start/Start'
import Preferences from '../screens/onBoarding/preferences/Preference'

const Stack = createNativeStackNavigator()
const BoardingStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='Start' component={Start}/>
        <Stack.Screen name='Preferences' component={Preferences}/>
    </Stack.Navigator>
  )
}

export default BoardingStack