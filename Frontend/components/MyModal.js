import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors } from '../styles/styles'
import { Avatar, Button } from 'react-native-paper'

export default function MyModal({
    id,
    deleteHandler,
    navigate,
    setOpenModal
}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
      style={{
        position:"absolute",
        top:10,
        right:10
      }}
      onPress={()=>setOpenModal(false)}
      >
        <Avatar.Icon
        icon={"close"}
        size={25}
        style={{
            backgroundColor:colors.color1
        }}/>
      </TouchableOpacity>

      <Text 
      onPress={()=>navigate.navigate("updateproduct",{id})}
      style={{fontWeight:"900",alignSelf:"center"}}>Edit</Text>

      <Button 
      onPress={()=>deleteHandler(id)}
      >Delete</Button>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        width:200,
        height:100,
        alignSelf:"center",
        justifyContent:"center",
        zIndex:100,
        backgroundColor:colors.color2,
        padding:20,
        borderRadius:10,
        elevation:10
    }
})