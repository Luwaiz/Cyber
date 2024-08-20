import { Dimensions, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Fontisto } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import React, { useState } from 'react'
import { colors } from '../constants/styling';
const {width,height}=Dimensions.get("screen")

const TextInputBox = ({placeholder,keyboardType,onChangeText,error,mail, password,...props}) => {
    const [hidePassword,setHidePassword]=useState(!password)

    const Visible=()=>{
        setHidePassword(!hidePassword)
    }

  return (
    <View style={{marginVertical:10}}>
    <View style={styles.textBox}>
      <TextInput placeholder={placeholder}
      cursorColor={"#002"}
      password={password}
      secureTextEntry={!hidePassword}
      placeholderTextColor={"#6A6A6A"}
      style={{width:250}}
      mail={mail}
      keyboardType={keyboardType}
      onChangeText={onChangeText}
       {...props}/>
       {mail && (<MaterialIcons name="mail" size={24} color={colors.primaryBlue} />)}
           {password &&(<TouchableOpacity onPress={Visible}>{hidePassword? (<Fontisto name="locked" size={24} color={colors.primaryBlue} />):(<Fontisto name="unlocked" size={24} color={colors.primaryBlue} />)}</TouchableOpacity>)}

    </View>
    <Text>{error}</Text>
    </View>
  )
}


const styles = StyleSheet.create({
    textBox:{
        backgroundColor:"white",
        alignItems:"center",
        height:45,
        width:width-30,
        borderColor:"black",
        borderWidth:1,
        marginBottom:5,
        borderRadius:10,
        justifyContent:"space-between",
        flexDirection:"row",
        paddingHorizontal:15
    }
})
export default TextInputBox

