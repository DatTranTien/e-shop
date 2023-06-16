import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { colors, defaultStyle } from '../../styles/styles'
import Header from '../../components/Header'
import { Avatar, Button } from 'react-native-paper'
import { useDispatch, useSelector } from 'react-redux'
import { getCategory } from '../../redux/actions/categoryAction'
import { deleteCategory, newCategory } from '../../redux/actions/otherAction'
import { Toast } from 'react-native-toast-message/lib/src/Toast'

export default function Categories() {
    const [category, setCategory] = useState("")
    const {categories} = useSelector(
        (state)=>state.categories
      )
      const dispatch = useDispatch()
      useEffect(()=>{
        dispatch(getCategory())
      })

      const callSuccess=(message)=>{
        Toast.show({
          type:"success",
          text1:message
        })
       }
       const callError=(message)=>{
        Toast.show({
          type:"error",
          text1:message
        })
       }
    const deleteHandler=(id)=>{
        dispatch(deleteCategory(id,callSuccess,callError))
    }
    const submitHandler=()=>{
        dispatch(newCategory(category,callSuccess,callError))
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
                {categories?.map((i)=>(
                    <CategoryCard
                    name={i.category}
                    id={i._id}
                    key={i._id}
                    deleteHandler={deleteHandler}
                    />
                ))}
            </View>
        </ScrollView>

        <View style={styles.container}>
        <TextInput style={{height:40,borderRadius:10,marginTop:10,borderWidth:0.5,padding:10}} 
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
        backgroundColor:colors.color2
    }
})