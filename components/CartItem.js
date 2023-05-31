import { StyleSheet, Text, View,TouchableOpacity,Image, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { Avatar, Headline } from 'react-native-paper'
import { colors } from '../styles/styles'



const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default function CartItem({key,index,item,decrementHandle,incrementHandle}) {
    const [disableDecrement, setDisableDecrement] = useState(false)
    const [quantity, setQuantity] = useState(2)
    
    
    
    const incrementQty = ()=>{
        // if (stock<=quantity) {
        //     return
        // }
            setDisableDecrement(false)
        setQuantity((prev)=>prev+1)
    }
    const decrementQty = ()=>{
        
        setQuantity((prev)=>{
            if (prev<2) {
                setDisableDecrement(true)
            }
          return  prev-1
        })
    }



    return (
    <View
    style={{
        flexDirection:"row",
        height:windowHeight*0.15,
        marginVertical:20,
    }}
    >
        <View 
        style={{
            width:"40%",
            backgroundColor: index%2===0?colors.color1:colors.color3,
            borderTopRightRadius:100,
            borderBottomRightRadius:100,
        }}
        >
            <Image
            source={{
                uri:item.image
            }}
            style={{
                width:"60%",
                height:"100%",
                resizeMode:"contain",
                borderTopRightRadius:40,
                borderBottomRightRadius:40,
                // borderBottomLeftRadius:40,
                borderTopLeftRadius:40,
                alignSelf:"flex-end",
                borderWidth:2,
                borderColor:colors.color1,
            }}
            />

        </View>
        


        <View
        style={{
            width:"40%",
            justifyContent:"center",
            alignItems:"center"
        }}
        >
            <Text style={{fontWeight:"500"}}>Cart item</Text>
        </View>


        <View
        style={{
            width:"20%",
            justifyContent:"center",
            alignItems:"center"
        }}
        >
            <View style={{
                width:80,
                flexDirection:"column",
                justifyContent:"space-between",
                alignItems:"center"
            }}>
                <TouchableOpacity 
                disabled={disableDecrement}
                style={{opacity:disableDecrement?0.5:1}}
                onPress={decrementQty}>
                    <Avatar.Icon icon={"minus"}
                    style={{backgroundColor:colors.color1}}
                    size={25}
                    />
                </TouchableOpacity>


                <Text style={{
                    backgroundColor:colors.color5,
                    height:25,
                    width:25,
                    textAlignVertical:"center",
                    textAlign:"center",
                    borderRadius:10
                }}>
                   {quantity}
                </Text>
                <TouchableOpacity 
                onPress={incrementQty}>
                    <Avatar.Icon icon={"plus"}
                    style={{backgroundColor:colors.color1}}
                    size={25}
                    />
                </TouchableOpacity>

            </View>
        </View>
        
    </View>
  )
}

const styles = StyleSheet.create({})