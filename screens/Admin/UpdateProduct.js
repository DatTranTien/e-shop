import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Header from '../../components/Header'
import { colors, defaultStyle } from '../../styles/styles'
import Loader from '../../components/Loader'
import { Button, TextInput } from 'react-native-paper'
import { inputOptions } from '../ForgetPassword'
import SelectComponent from '../../components/SelectComponent'

export default function UpdateProduct({navigation,route}) {
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState("")
    const [stock, setStock] = useState("")
    const [category, setCategory] = useState("")
    const [categoryID, setCategoryID] = useState("")
    const [categories, setCategories] = useState([
        {
            _id:"cate",
            category:"hello world!"
        }
    ])
    const [visible, setVisible] = useState(false)
    const loading=false
    const loadingOther=false
    const images=[
        {
            _id:"adasd1",
            url:"https://campustechnology.com/-/media/EDU/CampusTechnology/2019-Images/20191209online.jpg",
        },
        {
            _id:"adasd2",
            url:"https://campustechnology.com/-/media/EDU/CampusTechnology/2019-Images/20191209online.jpg",
        }
    ]
    const submitHandler =()=>{

    }
  return (
    <>
    <View style={{...defaultStyle}}>
       <Header back={true} />
<View style={{marginBottom:20}}>
    <Text style={{fontWeight:"900", textAlign:"center",fontSize:24}}>Update Product</Text>
</View>


{loading
? <Loader/>
:<ScrollView style={{padding:20,
elevation:10,
borderRadius:10,
backgroundColor:colors.color3
}}>

    <View style={{
        justifyContent:"center",
        height:650
    }}>
        <Button 
        onPress={()=>navigation.navigate("productimages",{id:route.params.id,
            images
        })}
        textColor={colors.color1}
        > Manage Images
        </Button>


        <TextInput 
        style={{...inputOptions,marginBottom:20}} 
        placeholder="Name"
        value={name}
        onChangeText={setName}
        />
        <TextInput style={{...inputOptions,marginBottom:20}} 
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
        />
        <TextInput style={{...inputOptions,marginBottom:20}} 
        placeholder="Price"
        keyboardType="number-pad"
        value={price}
        onChangeText={setPrice}
        />
        <TextInput style={{...inputOptions,marginBottom:20}} 
        placeholder="Stock"
        keyboardType="number-pad"
        value={stock}
        onChangeText={setStock}
        />
        <Text 
        onPress={()=>setVisible(true)}
        style={{fontWeight:"600", 
        fontSize:16,
        textAlign:"center",
        textAlignVertical:"center",
        borderRadius:5}}>{category}</Text>

        <Button textColor={colors.color2}
        style={{
            backgroundColor:colors.color1,
            margin:20,
            padding:6
        }}
        onPress={submitHandler}
        loading={loadingOther}
        disabled={loadingOther}
        >
            Update
        </Button>
    </View>
</ScrollView>
}
    </View>

    <SelectComponent 
    categories={categories}
    visible={visible} 
    setCategory={setCategory} 
    setCategoryID={setCategoryID} 
    setVisible={setVisible}/>
    </>
  )
}

const styles = StyleSheet.create({})