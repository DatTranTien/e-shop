import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import { colors, defaultStyle } from '../styles/styles'
import Header from '../components/Header'
import Heading from '../components/Heading'
import { RadioButton,Button } from 'react-native-paper'
import { useDispatch, useSelector } from 'react-redux'
import { paymentOrder, paymentOrderOnline } from '../redux/actions/otherAction'
import { Toast } from 'react-native-toast-message/lib/src/Toast'
import { useStripe } from '@stripe/stripe-react-native'

export default function Payment({navigation,route }) {
    const [paymentMethod, setPaymentMethod] = useState("COD")
    const {user, isAuthenticated} = useSelector(
      (state)=>state.user
    )
    const stripe = useStripe()
    const dispatch = useDispatch()


    const redirecToLogin=()=>{
        navigation.navigate("login")
    }
    const codHandler=()=>{
      console.log("first")
      const shippingInfo = {
        address: user.address,
        city: user.city,
        country: user.country,
        pinCode: user.pinCode,
      }
      const itemPrice = route.params.itemPrice
      const shippingCharges = route.params.shippingCharges
      const taxPrice = route.params.taxPrice
      const totalAmount = route.params.totalAmount
      dispatch(paymentOrder(itemPrice,shippingCharges,taxPrice,totalAmount,paymentMethod,cartItems=route.params.cartItems,shippingInfo,callSuccess,callError))
    }
    const onlineHandler=()=>{
      dispatch(paymentOrderOnline(route.params.totalAmount,callSuccess,callError,codHandler,stripe))
    }
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