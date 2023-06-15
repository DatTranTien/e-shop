import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors, defaultStyle } from '../styles/styles'
import Header from '../components/Header'
import { Headline } from 'react-native-paper'
import OrderItem from '../components/OrderItem'
import Loader from '../components/Loader'
import { useDispatch, useSelector } from 'react-redux'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import { getOrders } from '../redux/actions/otherAction'


// export const orders=[
//   {
//     _id:"dat1",
//     shippingInfo:{
//       address:"77 ha dong",
//       city:"Ha Noi",
//       country:"Viet Nam",
//       pinCode:10000,
//     },
//     createdAt:"12-2-2022T2343",
//     orderStatus:"Processing",
//     paymentMethod:"COD",
//     totalAmount:2000
//   },
//   {
//     _id:"dat2",
//     shippingInfo:{
//       address:"77 ha dong",
//       city:"Ha Noi",
//       country:"Viet Nam",
//       pinCode:10000,
//     },
//     createdAt:"12-2-2022T2343",
//     orderStatus:"Processing",
//     paymentMethod:"ONLINE",
//     totlAmount:2000
//   },
// ]
export default function Orders() {
  const {user, isAuthenticated} = useSelector(
    (state)=>state.user
  )
  const navi=useNavigation()
  const {orders} = useSelector(
    (state)=>state.other
  )
  const dispatch = useDispatch()
  useFocusEffect(
    React.useCallback(() => {
      dispatch(getOrders())
    }, [])
  );
  const updateHandler=()=>{
    navi.navigate("adminpanel")
  }
  const loading=false
  return (
    loading
      ? <Loader/>
      :<View 
    style={{
      ...defaultStyle,
      backgroundColor:colors.color5
    }}
    >
      <Header back={true}/>
      <ScrollView showsVerticalScrollIndicator={false} >
        {orders?.length > 0?orders.map((item,index)=><OrderItem 
        key={item._id}
        id={item._id}
        i={index}
        price={item.totalAmount}
        status={item.orderStatus}
        paymentMethod={item.paymentMethod}
        updateHandler={updateHandler}
        orderedOn={item.createAt?.split("T")[0]}
        address={`${item.shippingInfo.address}`}
        admin={user.role === "admin"}
        />): <Headline style={{textAlign:"center"}}>No Orders Yet</Headline> }
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({})