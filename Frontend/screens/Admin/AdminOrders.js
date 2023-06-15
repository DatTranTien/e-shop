import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors, defaultStyle } from '../../styles/styles'
import Loader from '../../components/Loader'
import Header from '../../components/Header'
import { Headline } from 'react-native-paper'
import OrderItem from '../../components/OrderItem'
import { useFocusEffect } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { getOrders } from '../../redux/actions/otherAction'

export default function AdminOrders() {
    const loading=false
    const processOrderLoading = false
    const updateHandler=()=>{
    }
    const {orders} = useSelector(
      (state)=>state.other
    )
    const dispatch=useDispatch()
    useFocusEffect(
      React.useCallback(() => {
        dispatch(getOrders())
      }, [])
    );
  return (
    <View style={{...defaultStyle}}>
       <Header back={true} />

<View style={{marginBottom:20}}>
    <Text style={{fontWeight:"900", textAlign:"center",fontSize:24}}>Admin Orders</Text>
</View>

{loading
? <Loader/>
:
    <View 
    style={{
      ...defaultStyle,
      backgroundColor:colors.color5,
    }}
    >
      <ScrollView showsVerticalScrollIndicator={false} >
        {orders.length > 0?orders.map((item,index)=><OrderItem 
        key={item._id}
        id={item._id}
        i={index}
        price={item.totalAmount}
        status={item.orderStatus}
        paymentMethod={item.paymentMethod}
        orderedOn={item.createAt.split("T")[0]}
        address={`${item.shippingInfo.address}`}
        admin={true}
        updateHandler={updateHandler}
        loading={processOrderLoading}
        />): <Headline style={{textAlign:"center"}}>No Orders Yet</Headline> }
      </ScrollView>
    </View>
}
    </View>
        
  )
}

const styles = StyleSheet.create({})