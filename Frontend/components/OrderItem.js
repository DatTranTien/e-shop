import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../styles/styles'
import { Button } from 'react-native-paper'

export default function OrderItem({
    id,
    price,
    address,
    orderedOn,
    status,
    paymentMethod,
    updateHandler,
    admin=false,
    loading,
    i=0,
}) {
  console.log("order on",orderedOn)
  return (
    <View style={{
        ...styles.container,
        backgroundColor:i%2?colors.color2:colors.color3
    }}>
      <Text style={{color:i%2?colors.color3:colors.color2}}>
        ID = #{id}
      </Text>

      <TextBox title={"Adress"} value={address} i={i}/>
      <TextBox title={"Ordered On"} value={orderedOn} i={i}  />
      <TextBox title={"Price"} value={price} i={i} isPrice={true} />
      <TextBox title={"Status"} value={status} i={i} />
      <TextBox title={"PaymentMethod"} value={paymentMethod} i={i} />
      {admin && (
        <Button 
        icon={"update"}
        mode="contained"
        textColor={i%2===0 ?colors.color3: colors.color2 }
        style={{
            width:120,
            alignSelf:"center",
            marginTop:20,
            backgroundColor:i%2===0 ?colors.color2: colors.color3 
        }}
        onPress={()=>updateHandler(id)}
        loading={loading}
        disabled={loading}
        >
            Update
        </Button>
      )}
    </View>
  )
}

const TextBox=({title,value,i,isPrice})=>
    <Text 
    style={{
        marginVertical:6,
        // color: colors.color1
        color: i %2 === 0 ?colors.color2:colors.color3
    }}
    >
        <Text style={{fontWeight:"900"}}>{title}-</Text>
        {value} {isPrice?'VNĐ':null} 
    </Text>


const styles = StyleSheet.create({
    container:{
        padding:20,
        borderRadius:10,
        marginVertical:10,
        elevation:5
    }
})