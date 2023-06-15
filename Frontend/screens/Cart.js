import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors, defaultStyle } from '../styles/styles'
import Header from '../components/Header'
import Heading from '../components/Heading'
import { Button } from 'react-native-paper'
import CartItem from '../components/CartItem'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'



export default function Cart() {
  const navigate=useNavigation()
  const {cartItems}=useSelector((state)=>state.cart)

  console.log("check cartItems--->",cartItems)

  let totalItem=0;
  let totalMoney=0;
          cartItems.forEach(element => {
            totalMoney+=parseInt(element.price)*parseInt(element.quantity)
            totalItem+=parseInt(element.quantity)
          });
  
  return (
    <View
    style={{
      ...defaultStyle,
      padding:"2%"
    }}>
      {/* ========Header======== */}
      <Header back={true} emptyCart={true} />
      <Heading text1="Shopping" text2="Cart" />
      
      <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{
        paddingVertical:20,
        flex:1
      }}>
        {cartItems.length ? cartItems.map((item,index)=>{
          return <CartItem index={index} item={item} 
          incrementHandle={()=>incrementHandle(item.id,item.stock,item.quantity)}
          decrementHandle={()=>decrementHandle(item.id,item.stock,item.quantity)}
          />
        }):null}

      </View>
      </ScrollView>

      <View style={{
        flexDirection:"row",
        justifyContent:"space-between",
        paddingHorizontal:35
      }}>
        <Text style={{fontWeight:"800"}}>{totalItem} items</Text>
        <Text style={{fontWeight:"800"}}>{totalMoney}VNĐ</Text>
      </View>

      <TouchableOpacity onPress={()=>{
        var count=0
        const promise= Promise.resolve(true)
        promise.then(()=>{
          cartItems.forEach(element => {
            count+=parseInt(element.price)*parseInt(element.quantity)
          });
          return count
        }).then((value)=>{
          navigate.navigate("confirmoder",{cartItems,price:value})
        }  )
      }}>
        <Button
        icon={'cart'}
        textColor={colors.color2}
        style={{
          backgroundColor:colors.color1,
          borderRadius:100,
          padding:5
        }}>
          Checkout
        </Button>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({})