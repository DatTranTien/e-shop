import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { colors, defaultStyle } from '../styles/styles'
import Header from '../components/Header'
import Heading from '../components/Heading'
import ConfirmOrderItem from '../components/ConfirmOrderItem'
import { Button } from 'react-native-paper'
import { useFocusEffect, useNavigation } from '@react-navigation/native'

export default function ConfirmOrder({route:{params}}) {
  // const [price, setPrice] = useState(0)
  const {cartItems,price}=params
  console.log("cartItems",cartItems)
  
  // useFocusEffect(
  //   React.useCallback(() => {
     
  //   }, [])
  // );
    // const itemPrices=400
    const shippingCharges=200
    const tax = parseInt(0.18* price)
    const totalAmount = parseInt(price + shippingCharges +tax)
    const navigate=useNavigation() 
    return (
    
      <View style={defaultStyle}>
      <Header back={true} />
      <Heading text1="Confirm" text2='Order' />
      <View style={{
        paddingVertical:20,
        flex:1
      }}>
        <ScrollView showsVerticalScrollIndicator={false}>
            {cartItems.map((item,index)=>{
                return <ConfirmOrderItem key={index} item={item}/>
            })}
        </ScrollView>
        <PriceTag heading={"Subtotal"} value={price} />
        <PriceTag heading={"Shipping"} value={shippingCharges} />
        <PriceTag heading={"Tax"} value={tax} />
        <PriceTag heading={"Total"} value={totalAmount} />
      </View>

      <TouchableOpacity onPress={()=>navigate.navigate("payment",{cartItems,totalAmount,taxPrice:tax,shippingCharges,itemPrice:price})}>
        <Button
        icon={'credit-card'}
        textColor={colors.color2}
        style={{
          backgroundColor:colors.color1,
          borderRadius:100,
          padding:5,
          justifyContent:"center",
          alignItems:"center",
        }}>
          Thanh Toán
        </Button>
      </TouchableOpacity>

      
    </View>
    
 )
}
const PriceTag = ({heading,value})=>{
    return <View style={{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        marginVertical:5
    }}>
        <Text style={{fontWeight:"800"}}>
            {heading}
        </Text>
        <Text style={{fontWeight:"800"}}>
            {value}
        </Text>
    </View>
}

const styles = StyleSheet.create({})