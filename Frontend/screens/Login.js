import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { colors, defaultStyle, inputStyling } from '../styles/styles'
import { Button, TextInput } from 'react-native-paper'
import Footer from '../components/Footer'
import { useNavigation } from '@react-navigation/native'
import {useDispatch,useSelector} from 'react-redux'
import { login } from '../redux/actions/userAction'
import { Toast } from 'react-native-toast-message/lib/src/Toast'

export default function Login({navigation}) {
  const [email, setEmail] = useState("")
  const [pass, setPass] = useState("")
  const navigate =useNavigation() 
  const dispatch = useDispatch()
  const {loading, message,error, isAuthenticated} = useSelector(
    (state)=>state.user
  )
  console.log("loaddiingf----->",loading,"message",message,"error",error,"isAuthenticated",isAuthenticated)

  const imputOptions={
    style: inputStyling,
    mode:"outlined",
    activeOutlineColor:colors.color1
  }
  const submitHandle = ()=>{
    dispatch(login(email,pass))
  }
  useEffect(()=>{
    if (!message && !error) {
      return
    }
    if (message) {
      navigation.navigate("profile")
      Toast.show({
        type:"success",
        text1:message
      })
      dispatch({
        type:"clearMessage"
      })
    }else{
      Toast.show({
        type:"error",
        text1:error
      })
      dispatch({
        type:"clearError"
      })
    }
  },[message,error])
  return (
    <View style={[defaultStyle,{backgroundColor:colors.color2}]}>
      <View style={{marginBottom:20}}>
        <Text style={styles.heading}>Login</Text>
      </View>
      <View style={styles.container}>
        <TextInput style={{...imputOptions}} 
        placeholder="Email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
        />
        <TextInput style={{...imputOptions,marginTop:15}} 
        placeholder="Password"
        value={pass}
        onChangeText={setPass}
        />

        <TouchableOpacity 
        onPress={()=>navigation.navigate("forgetpassword")}
        >
          <Text style={styles.forget}>
            Forget Password
          </Text>
        </TouchableOpacity>



        <TouchableOpacity onPress={submitHandle}>
        <Button
        disabled={email==""|| pass == ""}
        textColor={colors.color3}
        style={{
          backgroundColor:colors.color2,
          borderRadius:100,
          // padding:5,
        }}>
         <Text style={{
          color:colors.color1
         }}> ĐĂNG NHẬP</Text>
        </Button>
      </TouchableOpacity>

      <Text style={{
          alignSelf:"center",
          fontSize:20,
          fontWeight:"600",
          color:colors.color2,
          margin:30
          }}>OR</Text>

<TouchableOpacity onPress={()=>navigate.navigate("signup")}>
        <Button
        disabled={email==""|| pass == ""}
        style={{
          backgroundColor:colors.color2,
          // borderRadius:100,
          // padding:5
        }}>
          <Text style={{
            color:colors.color1,
          }}>ĐĂNG KÝ</Text>
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