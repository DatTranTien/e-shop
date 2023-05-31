import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ConfirmOrderItem({key,item}) {
  return (
    <View style={{
      flexDirection:"row",
      justifyContent:"space-between",
      alignItems:"center",
      margin:10
    }}>
      <Image
      source={{
        uri:item.image
      }}
      resizeMode={"contain"}
      style={{width:50,height:50}}
      />
      <View style={{justifyContent:"center",alignItems:"center"}}>
        <Text>{item.name}</Text>
        </View>
      <View style={{
        flexDirection:"row"
      }}>
      <View style={{justifyContent:"center",alignItems:"center"}}>
      <Text>{item.quantity}</Text>
      <Text>x</Text>
      <Text>{item.price}</Text>
      </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({})