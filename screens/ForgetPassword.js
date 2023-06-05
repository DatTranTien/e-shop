import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { colors, defaultStyle, inputStyling } from '../styles/styles'
import { Button, TextInput } from 'react-native-paper'
import Footer from '../components/Footer'
import { useNavigation } from '@react-navigation/native'

export default function ForgetPassword({navigation}) {
  const [email, setEmail] = useState("")
  const [pass, setPass] = useState("")
  const navigate =useNavigation() 
  const imputOptions={
    style: inputStyling,
    mode:"outlined",
    activeOutlineColor:colors.color1
  }
  return (
    <View style={[defaultStyle,{backgroundColor:colors.color2}]}>
      <View style={{marginBottom:20}}>
        <Text style={styles.heading}>Quên mật khẩu</Text>
      </View>
      <View style={styles.container}>
        <TextInput style={{...imputOptions,marginBottom:20}} 
        placeholder="Email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
        />

        <TouchableOpacity onPress={()=>navigate.navigate("verify")}>
        <Button
        disabled={email==""|| password == ""}
        textColor={colors.color3}
        style={{
          backgroundColor:colors.color1,
          borderRadius:100,
          // padding:5,
        }}>
         <Text style={{
          color:colors.color2
         }}>Lấy Mã OTP</Text>
        </Button>
      </TouchableOpacity>

      {/* <Text style={{
          alignSelf:"center",
          fontSize:20,
          fontWeight:"600",
          color:colors.color2,
          margin:30
          }}>OR</Text>

<TouchableOpacity onPress={()=>navigate.navigate("login")}>
        <Button
        disabled={email==""|| password == ""}
        style={{
          backgroundColor:colors.color2,
          // borderRadius:100,
          // padding:5
        }}>
          <Text style={{
            color:colors.color1,
          }}>ĐĂNG NHẬP</Text>
        </Button>
      </TouchableOpacity> */}
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
    borderColor:colors.color1,
    borderWidth:2
  }
})