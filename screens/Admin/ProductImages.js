import {  ScrollView, StyleSheet, Text, TouchableOpacity, View,Image } from 'react-native'
import React, { useState } from 'react'
import Header from '../../components/Header'
import { colors, defaultStyle } from '../../styles/styles'
import Loader from '../../components/Loader'
import { Avatar, Button, TextInput } from 'react-native-paper'
import { inputOptions } from '../ForgetPassword'
import ImageCard from '../../components/ImageCard'

export default function ProductImages({ route, navigation }) {
    console.log("route------>", route.params.images)
    const [images] = useState(route.params.images)
    const [productId] = useState(route.params.id)
    const [image, setImage] = useState(null)
    const [imageChanged, setImageChanged] = useState(false)
    const loading = false
    const deleteHandler = () => {

    }
    const submitHandler = () => {

    }
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
                    {route.params.images.map((i) => (
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
                    source={{ uri: `${route.params.images}` }}
                />
                <View
                    style={{
                        justifyContent: "center",
                        flexDirection: "row",
                    }}>
                    <TouchableOpacity onPress={() => navigation.navigate("camera", { updateProduct: true })}>
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
                        padding: 6
                    }}
                    textColor={colors.color2}
                    loading={loading}
                    onPress={submitHandler}
                    disabled={!imageChanged}
                >
                    Add
                </Button>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({})