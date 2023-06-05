import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { colors, defaultStyle, inputStyling } from '../styles/styles'
import { Button, TextInput } from 'react-native-paper'
import Footer from '../components/Footer'
import { useNavigation } from '@react-navigation/native'

export default function Verify({navigation}) {
  const [OTP, setOTP] = useState("")
  const [reset, setReset] = useState("")
  const navigate =useNavigation() 
  const imputOptions={
    style: inputStyling,
    mode:"outlined",
    activeOutlineColor:colors.color1
  }
  return (
    <View style={[defaultStyle,{backgroundColor:colors.color2}]}>
      <View style={{marginBottom:20}}>
        <Text style={styles.heading}>Xác thực</Text>
      </View>
      <View style={styles.container}>
        <TextInput style={{...imputOptions}} 
        placeholder="OTP"
        keyboardType="email-address"
        value={OTP}
        onChangeText={setOTP}
        />
        <TextInput style={{...imputOptions,marginTop:15,marginBottom:15}} 
        placeholder="Reset"
        keyboardType="email-address"
        value={reset}
        onChangeText={setReset}
        />



        <TouchableOpacity onPress={()=>navigate.navigate("confirmoder")}>
        <Button
        disabled={OTP==""|| reset == ""}
        textColor={colors.color3}
        style={{
        borderWidth:2,
        borderColor:colors.color1,
        borderRadius:100,
          // padding:5,
        }}>
         <Text style={{
          color:colors.color1
         }}> Reset</Text>
        </Button>
      </TouchableOpacity>
      </View>

      
      <Footer activeRoute='profile' />
    </View>
  )
}

const styles = StyleSheet.create({
  heading:{
    fontSize:25,
    fontWeight:"500",
    textAlign:"center",
    backgroundColor:colors.color1,
    color:colors.color2,
    padding:5,
    borderRadius:10
  },
  forget:{
    color:colors.color2,
    marginHorizontal:20,
    marginVertical:15,
    alignSelf:"flex-end"
  },
  container:{
    backgroundColor:colors.color2,
    height:"80%",
    justifyContent:"center",
    borderRadius:15,
    marginBottom:"10%",
    paddingHorizontal:10,
    borderWidth:2,
    borderColor:colors.color1
  }
})