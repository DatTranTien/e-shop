import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors } from '../styles/styles'
import { Button } from 'react-native-paper'

export default function ProductCard({
    stock,
    name,
    price,
    image,
    addToCardHandler,
    id,
    key,
    i,
    navigate,
    item
}) {
  return (
    <TouchableOpacity
    activeOpacity={1}
    onPress={()=>navigate.navigate("productdetails",{
    stock,
    name,
    price,
    image,
    addToCardHandler,
    id,
    key,
    i,
    navigate,
    item
    })}
    >
        <View
        style={{
            elevation:5,
            width:220,
            alignItems:"center",
            justifyContent:"space-between",
            margin:20,
            borderRadius:20,
            height:400,
            backgroundColor: i%2 === 0 ? colors.color1 :colors.color2
        }}
        >
            <Image
            source={{
                uri:image
            }}
            style={{
                width:"100%",
                height:200,
                resizeMode:"contain",
                position:"absolute",
                left:50,
                top:105,
                borderRadius:20,
                borderBottomEndRadius:50,
            }}
            />
            <View style={{
                flexDirection:"row",
                padding:20,
                justifyContent:"space-between",
                width:"100%"
            }}
            >
                <Text numberOfLines={2}
                style={{
                    color: i % 2 === 0 ?colors.color2:colors.color3,
                    fontSize:25,
                    fontWeight:"300"
                }}
                >
                    {name}
                </Text>
                <Text numberOfLines={2}
                style={{
                    color: i % 2 === 0 ?colors.color2:colors.color3,
                    fontSize:25,
                    fontWeight:"700"
                }}
                >
                    {price}
                </Text>
            </View>

            <TouchableOpacity
                style={{
                    backgroundColor: i % 2 === 0 ? colors.color2: colors.color3,
                    borderBottomEndRadius:10,
                    width:"100%",
                    alignItems:"center"
                }}
                >
                    <Button
                    onPress={()=>addToCardHandler(id,stock)}
                    textColor={i%2 === 0 ? colors.color1 : colors.color2}
                    >Add to Cart</Button>
                </TouchableOpacity>

        </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({})