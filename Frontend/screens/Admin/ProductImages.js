import {  ScrollView, StyleSheet, Text, TouchableOpacity, View,Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../../components/Header'
import { colors, defaultStyle } from '../../styles/styles'
import Loader from '../../components/Loader'
import { Avatar, Button, TextInput } from 'react-native-paper'
import { inputOptions } from '../ForgetPassword'
import ImageCard from '../../components/ImageCard'
import { Toast } from 'react-native-toast-message/lib/src/Toast'
import { useDispatch, useSelector } from 'react-redux'
import { useFocusEffect } from '@react-navigation/native'
import { deleteImageProduct, getDetailProduct, updateImageProduct } from '../../redux/actions/productAction'
import mime from 'mime'

export default function ProductImages({ route, navigation }) {
    console.log("route------>", route.params.images)
    const [images] = useState(route.params.images)
    const [productId] = useState(route.params.id)
    const [imageChanged, setImageChanged] = useState(false)
    const loading = false
    const deleteHandler = () => {
        dispatch(deleteImageProduct(route.params.id,callSuccess,callError))
    }
    const submitHandler = () => {
        const myForm = new FormData()
        myForm.append("file",{
            uri:route.params.pic,
            type: mime.getType(route.params.pic),
            name:route.params.pic.split("/").pop()
        })
        dispatch(updateImageProduct(myForm,route.params.id,callSuccess,callError))
    }
    // const {product}= useSelector((state)=>state.product)
    const callSuccess=(message)=>{
        Toast.show({
          type:"success",
          text1:message
        })
        navigation.navigate("profile")
       }
       const callError=(message)=>{
        Toast.show({
          type:"error",
          text1:message
        })
       }
    const dispatch=useDispatch()
    // useFocusEffect(
    //   React.useCallback(() => {
    //     dispatch(getDetailProduct(route.params.id))
    //   }, [])
    // );
    useEffect(()=>{
        if (route.params.pic) {
            setImageChanged(true)
        }
    },[route.params.pic])
    return (
        <View style={{ ...defaultStyle,backgroundColor:colors.color5 }}>
            <Header back={true} />
            <View style={{ marginBottom: 20 }}>
                <Text style={{ fontWeight: "900", textAlign: "center", fontSize: 24 }}>Images</Text>
            </View>


            <ScrollView
            showsVerticalScrollIndicator={false}
                style={{
                    marginBottom: 20
                }}>
                <View
                    style={{
                        backgroundColor: colors.color2,
                        padding: 40,
                        minHeight: 400
                    }}
                >
                    {route.params.images?.map((i) => (
                        <ImageCard
                            key={i._id}
                            src={i.url}
                            id={i._id}
                            deletehandler={deleteHandler}
                        />
                    ))}
                </View>
            </ScrollView>


            <View style={{
                        backgroundColor:colors.color3,
                        borderRadius:20
                        }}>
                <Image
                    style={{
                        backgroundColor: colors.color2,
                        width: 100,
                        height: 100,
                        alignSelf: "center",
                        resizeMode: "contain",
                        borderRadius:5,
                        borderWidth:2,
                        borderColor:colors.color1
                    }}
                    source={{ uri: `${route.params.pic}` }}
                />
                <View
                    style={{
                        justifyContent: "center",
                        flexDirection: "row",
                    }}>
                    <TouchableOpacity onPress={() => navigation.navigate("camera", { updateProduct: true,id:route.params.id,images:route.params.images })}>
                        <Avatar.Icon
                            icon={"camera"}
                            style={{
                                backgroundColor: colors.color2,
                                margin: 10
                            }}
                            size={30}
                            color={colors.color3}
                        />
                    </TouchableOpacity>
                </View>
                <Button
                    style={{
                        backgroundColor: colors.color1,
                        padding: 6,
                        opacity:!imageChanged?0.5:1
                    }}
                    loading={loading}
                    onPress={submitHandler}
                    disabled={!imageChanged}
                >
                   <Text style={{color:colors.color2}}> Add</Text>
                </Button>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({})