import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Preference } from '../constants/OnBoard'
import { colors } from '../constants/styling'
const { width, height } = Dimensions.get("screen");


const Indicator = ({currentIndex}) => {
  return (
    <View style={styles.container}>
        <View style={styles.contain}>
    {Preference.map((_,index)=>(
        <View key={index}>
        <View style={[styles.indicate,currentIndex === index && styles.currentIndicator]}/>
        </View>
    ))}
    </View>
    </View>
  )
}

export default Indicator

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        height: 30,
        width: "100%",
    },
    text: {
        fontSize: 24,
    },
    contain:{
        alignItems:"center",
        flexDirection:"row",
        justifyContent:"center",
    },
    currentIndicator:{
        backgroundColor:colors.primaryBlue,
    },
    indicate:{
        backgroundColor:colors.Grey2,
        borderRadius:20,
        width:width/4.5,
        height:5,
        marginHorizontal:3
    }
})