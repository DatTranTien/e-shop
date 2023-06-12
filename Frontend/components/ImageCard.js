import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors } from '../styles/styles'
import { Image } from 'react-native'
import { Avatar } from 'react-native-paper'

export default function ImageCard({src,id, deleteHandler}) {
    console.log("src--->",src)
  return (
    <View style={styles.container}>
      <Image
      source={{
        uri:"https://campustechnology.com/-/media/EDU/CampusTechnology/2019-Images/20191209online.jpg"
      }}
      style={{
        width:"100%",
        height:"80%",
        resizeMode:"contain"
      }}
      />
      <TouchableOpacity onPress={()=>deleteHandler(id)}>
        <Avatar.Icon
        size={30}
        icon={'delete'}
        style={{
            backgroundColor:colors.color1
        }}
        />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.color2,
        elevation:5,
        margin:10,
        padding:15,
        alignItems:"center",
        borderRadius:10,
        height:300
    }
})