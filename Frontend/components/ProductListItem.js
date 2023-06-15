import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../styles/styles'
import MyModal from './MyModal'

export default function ProductListItem({
    deleteHandler,
    navigate,
    id,
    i,
    price,
    stock,
    name,
    category,
    imgSrc,
    item,
    image
}) {
    const [openModal, setOpenModal] = useState(true)
    
  return (
    <>
      <TouchableOpacity 
      onLongPress={()=>{
        if (!openModal) {
            setOpenModal((prev)=>!prev)
        }
      }}
      onPress={()=>navigate.navigate("productdetails",{
        stock,
        name,
        price,
        image,
        id,
        i,
        navigate,
        item
        })}>
        <View style={{
            ...styles.container,
            backgroundColor: i%2 === 0 ?colors.color1:colors.color3
        }}>
            <Image
            source={{
                uri:imgSrc
            }}
            style={{
                width:40,
                height:40,
                resizeMode:"contain"
            }}
            />
            <Text style={{
                color:colors.color2,
                width:40,
            }}
            numberOfLines={1}
            >{price}</Text>
            <Text style={{
                color:colors.color2,
                width:50
            }}
            numberOfLines={1}
            >{name}</Text>
            <Text style={{
                color:colors.color2,
                width:50
            }}
            numberOfLines={1}
            >{category}</Text>
            <Text style={{
                color:colors.color2,
                width:30
            }}
            numberOfLines={1}
            >{stock}</Text>
        </View>
      </TouchableOpacity>

      {openModal&&(
        <MyModal
        id={id}
        deleteHandler={deleteHandler}
        navigate={navigate}
        setOpenModal={setOpenModal}
        />
      )}
    </>
  )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        justifyContent:"space-between",
        height:70,
        alignItems:"center",
        padding:10,
        borderRadius:10,
        marginVertical:10
    }
})