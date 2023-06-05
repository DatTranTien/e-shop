import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors, defaultStyle } from '../styles/styles'
import Header from '../components/Header'
import { Headline } from 'react-native-paper'
import OrderItem from '../components/OrderItem'


const orders=[
  {
    _id:"dat1",
    shippingInfo:{
      address:"77 ha dong",
      city:"Ha Noi",
      country:"Viet Nam",
      pinCode:10000,
    },
    createdAt:"12-2-2022T2343",
    orderStatus:"Processing",
    paymentMethod:"COD",
    totalAmount:2000
  },
  {
    _id:"dat2",
    shippingInfo:{
      address:"77 ha dong",
      city:"Ha Noi",
      country:"Viet Nam",
      pinCode:10000,
    },
    createdAt:"12-2-2022T2343",
    orderStatus:"Processing",
    paymentMethod:"ONLINE",
    totlAmount:2000
  },
]
export default function Orders() {
  return (
    <View 
    style={{
      ...defaultStyle,
      backgroundColor:colors.color5
    }}
    >
      <Header back={true}/>
      <ScrollView showsVerticalScrollIndicator={false} >
        {orders.length > 0?orders.map((item,index)=><OrderItem 
        key={item._id}
        id={item._id}
        i={index}
        price={item.totalAmount}
        status={item.orderStatus}
        paymentMethod={item.paymentMethod}
        orderedOn={item.createdAt.split("T")[0]}
        address={`${item.shippingInfo.address}`}
        admin={true}
        />): <Headline style={{textAlign:"center"}}>No Orders Yet</Headline> }
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({})