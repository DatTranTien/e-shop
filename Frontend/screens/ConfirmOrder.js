import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors, defaultStyle } from '../styles/styles'
import Header from '../components/Header'
import Heading from '../components/Heading'
import { cartItems } from './Cart'
import ConfirmOrderItem from '../components/ConfirmOrderItem'
import { Button } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'

export default function ConfirmOrder() {
    const itemPrices=400
    const shippingCharges=200
    const tax = 0.18* itemPrices
    const totalAmount = itemPrices + shippingCharges +tax
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
        <PriceTag heading={"Subtotal"} value={itemPrices} />
        <PriceTag heading={"Shipping"} value={shippingCharges} />
        <PriceTag heading={"Tax"} value={tax} />
        <PriceTag heading={"Total"} value={totalAmount} />
      </View>

      <TouchableOpacity onPress={()=>navigate.navigate("payment")}>
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