import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { colors, defaultStyle, inputStyling } from '../styles/styles'
import { Button, TextInput } from 'react-native-paper'
import Footer from '../components/Footer'
import { useNavigation } from '@react-navigation/native'
import { useDispatch,useSelector } from 'react-redux'
import { updatePassword } from '../redux/actions/otherAction'
import { Toast } from 'react-native-toast-message/lib/src/Toast'

export default function ChangePassword({navigation}) {
  const [oldPass, setOldPass] = useState("")
  const [pass, setPass] = useState("")
  const navigate =useNavigation() 
  const imputOptions={
    style: inputStyling,
    mode:"outlined",
    activeOutlineColor:colors.color1
  }
 const dispatch = useDispatch()
 const callSuccess=(message)=>{
  Toast.show({
    type:"success",
    text1:message
  })
  navigation.navigate("profile")
 }
 const callError=(message)=>{
  Toast.show({
    type:"error",
    text1:message
  })
 }
  const submithandler =()=>{
    dispatch(updatePassword(oldPass,pass,callSuccess,callError))
    setOldPass("")
    setPass("")
  }
  return (
    <View style={[defaultStyle,{backgroundColor:colors.color2}]}>
      <View style={{marginBottom:20}}>
        <Text style={styles.heading}>Change Password</Text>
      </View>
      <View style={styles.container}>
        <TextInput style={{...imputOptions}} 
        placeholder="old pass"
        keyboardType="email-address"
        value={oldPass}
        onChangeText={setOldPass}
        />
        <TextInput style={{...imputOptions,marginTop:15}} 
        placeholder="new password"
        keyboardType="email-address"
        value={pass}
        onChangeText={setPass}
        />



        <TouchableOpacity 
        style={{
            marginTop:20
        }}
        onPress={submithandler}>
        <Button
        disabled={oldPass==""|| pass == ""}
        textColor={colors.color3}
        style={{
          backgroundColor:colors.color2,
          borderRadius:100
          // padding:5,
        }}>
         <Text style={{
          color:colors.color1
         }}>Reset</Text>
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
    backgroundColor:colors.color1,
    height:"80%",
    justifyContent:"center",
    borderRadius:15,
    marginBottom:"10%",
    paddingHorizontal:10
  }
})