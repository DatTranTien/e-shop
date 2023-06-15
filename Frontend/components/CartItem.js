import { StyleSheet, Text, View,TouchableOpacity,Image, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { Avatar, Headline } from 'react-native-paper'
import { colors } from '../styles/styles'
import { Toast } from 'react-native-toast-message/lib/src/Toast';
import { useDispatch } from 'react-redux';



const windowHeight = Dimensions.get('window').height;
export default function CartItem({key,index,item,decrementHandle,incrementHandle}) {
    const [disableDecrement, setDisableDecrement] = useState(false)
    const [quantity, setQuantity] = useState(item.quantity ||0)
    const dispatch=useDispatch()
    
    
    
    const incrementQty = ()=>{
        if (item.stock<=quantity) {
            return Toast.show({
                type:"error",
                text1:"Stock = quantity"
            })
        }
            setDisableDecrement(false)
        setQuantity((prev)=>{
            dispatch({
                type:"addToCart",
                payload:{
                  ...item,
                  quantity:quantity+1
                }
              })
           return prev+1})
    }
    const decrementQty = ()=>{
        
        Promise.resolve(
            setQuantity((prev)=>{
                dispatch({
                    type:"addToCart",
                    payload:{
                      ...item,
                      quantity:quantity-1
                    }
                  })
                if (prev<3) {
                    setDisableDecrement(true)
                }
                
              return  prev-1
            })
        ).then(()=>{
            console.log("quan tity----->",quantity)
            
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
            <Text style={{fontWeight:"500"}}>{item.name}</Text>
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