import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { colors, defaultStyle } from '../../styles/styles'
import Header from '../../components/Header'
import { Avatar, Button } from 'react-native-paper'

const categories = [
    {
        name:"Laptop",
        _id:"Adaksdfsd1"
    },
    {
        name:"mac",
        _id:"Adaksdfsd2"
    },
    {
        name:"win",
        _id:"Adaksdfsd3"
    },
    {
        name:"PC",
        _id:"Adaksdfsd4"
    },
    {
        name:"Car",
        _id:"Adaksdfsd5"
    },
]
export default function Categories() {
    const [category, setCategory] = useState("")
    const deleteHandler=(id)=>{

    }
    const submitHandler=()=>{

    }
    const loading = false
  return (
    <View style={{...defaultStyle}}>
        <Header back={true} />

        <View style={{marginBottom:20}}>
            <Text style={{fontWeight:"900", textAlign:"center",fontSize:24}}>Categories</Text>
        </View>

        <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
            marginBottom:20
        }}>
            <View style={{
                backgroundColor:colors.color2,
                padding:20,
                minHeight:400
            }}>
                {categories.map((i)=>(
                    <CategoryCard
                    name={i.name}
                    id={i._id}
                    key={i._id}
                    deleteHandler={deleteHandler}
                    />
                ))}
            </View>
        </ScrollView>

        <View style={styles.container}>
        <TextInput style={{height:40,borderRadius:10,marginTop:10}} 
        placeholder="Categories"
        keyboardType="email-address"
        value={category}
        onChangeText={setCategory}
        />

        <Button 
        loading={loading}
        onPress={submitHandler}
        disabled={!categories}
        textColor={colors.color2}
        style={{
            backgroundColor:colors.color1,
            margin:20,
            padding:6
        }}>
            Add
        </Button>
        </View>
    </View>
  )
}

const CategoryCard = ({name,id,deleteHandler})=>{
    return <View style={{
        backgroundColor:colors.color2,
        elevation:5,
        margin:10,
        padding:15,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        borderRadius:10
    }}>
        <Text style={{fontWeight:"600", fontSize:18,textTransform:"uppercase"}}>{name}</Text>
        <TouchableOpacity onPress={()=>deleteHandler(id)}>
            <Avatar.Icon
            icon={"delete"}
            size={30}
            style={{backgroundColor:colors.color1}}
            />
        </TouchableOpacity>
    </View>
}

const styles = StyleSheet.create({
    container:{
        padding:20,
        elevation:10,
        borderRadius:10,
        backgroundColor:colors.color3
    }
})