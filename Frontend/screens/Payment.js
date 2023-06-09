import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import { colors, defaultStyle } from '../styles/styles'
import Header from '../components/Header'
import Heading from '../components/Heading'
import { RadioButton,Button } from 'react-native-paper'

export default function Payment({navigation,route }) {
    const [paymentMethod, setPaymentMethod] = useState("COD")
    const isAuthenticated=true

    const redirecToLogin=()=>{
        navigation.navigate("login")
    }
    const codHandler=()=>{
      console.log("first")
navigation.navigate("login")
    }
    const onlineHandler=()=>{

    }
  return (
    <View style={defaultStyle}>
      <Header back={true} />
      <Heading
      text1='Thanh Toán' text2='Phương Thức' />


      <View style={styles.container}>
        <RadioButton.Group
        value={paymentMethod}
        onValueChange={setPaymentMethod}
        >
            <View style={styles.radioStyle}>
                <Text style={styles.radioText}>Tiền Mặt</Text>
                <RadioButton uncheckedColor="white"   color={colors.color2} value={"COD"}/>
            </View>
            <View style={styles.radioStyle}>
                <Text style={styles.radioText}>Chuyển Khoản</Text>
                <RadioButton uncheckedColor="white" color={colors.color2} value={"ONLINE"}/>
            </View>
        </RadioButton.Group>
      </View>


      <TouchableOpacity onPress={
        !isAuthenticated 
        ? redirecToLogin
        : paymentMethod === "COD" 
        ? codHandler
        : onlineHandler
      }>
        <Button
        icon={paymentMethod==="COD"?"check-circle":"circle-multiple-outline"}
        textColor={colors.color1}
        style={{
          backgroundColor:colors.color2,
          borderRadius:100,
          padding:5,
          marginTop:15,
          borderColor:colors.color1,
          borderWidth:2
        }}>
            Đặt Hàng
        </Button>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.color1,
        padding: 30,
        borderRadius:10,
        flex:1,
        justifyContent:"center"
    },
    radioStyle:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        marginVertical:5
    },
    radioText:{
        fontWeight:"600",
        fontSize:18,
        textTransform:"uppercase",
        color:colors.color2
    },
})