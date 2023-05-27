import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Avatar from 'react-native-paper'
import { colors } from '../styles/styles'
import { useNavigation } from '@react-navigation/core'

export default function Header({back}) {

    const navigate = useNavigation()
  return (
    <>
    {back&&(
    <TouchableOpacity
    style={{
        position:"absolute",
        left:20,
        top:40,
        zIndex:10
    }}
    onPress={()=>navigate.goBack()}
    >
        <Avatar.Icon
        style={{
            backgroundColor:colors.color4
        }}
        icon={"arrow-left"}
        color={colors.color3}
        />
    </TouchableOpacity>
    
    )}
    </>
  )
}

const styles = StyleSheet.create({})