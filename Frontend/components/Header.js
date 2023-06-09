import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors } from '../styles/styles'
import { useNavigation, useRoute } from '@react-navigation/core'
import { Avatar } from 'react-native-paper'

export default function Header({back, emptyCart = false,hideArrow}) {

    const navigate = useNavigation()
    const route = useRoute()
    const emptyCartHandle=()=>{
      console.log("first")
    }
  return (
    <>
    {back&&(
      <View style={{
      flexDirection:"row",
      justifyContent:hideArrow?"flex-end":"space-between",
      alignItems:"center"
      }}>
        {!hideArrow&&(
          <TouchableOpacity
          onPress={()=>navigate.goBack()}
          >
              <Avatar.Icon
              style={{
                  backgroundColor:colors.color4
              }}
              icon={"arrow-left"}
              color={route.name==="productdetails"?colors.color2: colors.color3}
              />
          </TouchableOpacity>
        )}
    
    <TouchableOpacity
    onPress={emptyCart?emptyCartHandle:()=>navigate.navigate('cart')}
    >
        <Avatar.Icon
        style={{
            backgroundColor:colors.color4
        }}
        icon={  emptyCart?"delete-outline":"cart-outline"}
        color={route.name==="productdetails"?colors.color2: colors.color3}
        />
    </TouchableOpacity>
    </View>
    )}
    </>
  )
}

const styles = StyleSheet.create({})