import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Heading({text1="Our",text2="Product",containerStyle}) {
  return (
    <View style={containerStyle}>
        <Text style={{fontSize:25}}>{text1}</Text>
        <Text style={{fontSize:25,fontWeight:"900"}}>{text2}</Text>
      </View>
  )
}

const styles = StyleSheet.create({})