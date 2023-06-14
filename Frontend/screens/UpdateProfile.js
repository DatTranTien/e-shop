import { Alert, Platform, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { colors, defaultStyle, inputStyling } from '../styles/styles'
import { Button, TextInput } from 'react-native-paper'
import Footer from '../components/Footer'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { updateProfile } from '../redux/actions/otherAction'
import { Toast } from 'react-native-toast-message/lib/src/Toast'
import { loadUser } from '../redux/actions/userAction'

export default function UpdateProfile({navigation}) {
  const userInfo = useSelector(
    (state)=>state.user
  )
  console.log("userInfo--->",userInfo)
  const [avatar, setAvatar] = useState("")
  const [name, setName] = useState(userInfo?.user?.name)
  const [email, setEmail] = useState(userInfo?.user?.email)
  const [password, setPassWord] = useState("")
  const [address, setAddress] = useState(userInfo?.user.address)
  const [city, setCity] = useState(userInfo?.user.city)
  const [country, setCountry] = useState(userInfo?.user.country)
  const [pinCode, setPincode] = useState(userInfo?.user.pinCode)
const dispatch=useDispatch()
  const navigate =useNavigation()
  const imputOptions={
    style: {
    // height:35,
    backgroundColor: Platform.OS === "android" ?StatusBar.currentHeight : 0,
    // marginVertical:10,
    // marginHorizontal: 20
    },
    mode:"outlined",
    activeOutlineColor:colors.color1
  }
  useEffect(()=>{
    dispatch(loadUser())
  },[])
  const callSuccess=(message)=>{
    Toast.show({
      type:"success",
      text1:message
    })
    dispatch(loadUser())
    navigation.navigate("profile")
   }
   const callError=(message)=>{
    Toast.show({
      type:"error",
      text1:message
    })
   }
  const updateFunction=()=>{
    dispatch(updateProfile(name,email,address,city,country,pinCode,callSuccess,callError))
  }
  return (
    <View style={[defaultStyle,{backgroundColor:colors.color2}]}>
      <View style={{marginBottom:20}}>
        <Text style={styles.heading}>Chỉnh Sửa</Text>
      </View>


      <View style={styles.container}>

<View style={{
    justifyContent:"space-between",
    paddingBottom:15
}}>



        <TextInput style={{height:40,borderRadius:10,marginTop:10}} 
        placeholder="name"
        keyboardType="email-address"
        value={name}
        onChangeText={setName}
        />
        <TextInput style={{height:40,borderRadius:10,marginTop:10,opacity:0.5}} 
        placeholder="email"
        keyboardType="email-address"
        value={email}
        editable={false}
        onChangeText={setEmail}
        />
        <TextInput style={{height:40,borderRadius:10,marginTop:10}} 
        placeholder="address"
        keyboardType="email-address"
        value={address}
        onChangeText={setAddress}
        />
        <TextInput style={{height:40,borderRadius:10,marginTop:10}} 
        placeholder="city"
        keyboardType="email-address"
        value={city}
        onChangeText={setCity}
        />
        <TextInput style={{height:40,borderRadius:10,marginTop:10}} 
        placeholder="country"
        keyboardType="email-address"
        value={country}
        onChangeText={setCountry}
        />
        <TextInput style={{height:40,borderRadius:10,marginTop:10}} 
        placeholder="pinCode"
        value={pinCode.toString()}
        onChangeText={setPincode}
        />
        {/* <TextInput style={{height:40,borderRadius:10,marginTop:10}} 
        placeholder="Password"
        keyboardType="email-address"
        value={password}
        onChangeText={setPassWord}
        /> */}


</View>

        <TouchableOpacity onPress={updateFunction}>
        <Button
        disabled={email=="" || name==""|| address==""|| city==""|| country==""|| pinCode==""}
        textColor={colors.color3}
        style={{
          backgroundColor:colors.color2,
          borderRadius:100,
          // padding:5,
        }}>
         <Text style={{
          color:colors.color1
         }}>Cập Nhật</Text>
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
    // justifyContent:"space-between",
    borderRadius:15,
    marginBottom:"10%",
    paddingHorizontal:10,
  }
})