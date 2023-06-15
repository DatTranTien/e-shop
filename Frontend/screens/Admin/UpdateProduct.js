import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Header from '../../components/Header'
import { colors, defaultStyle } from '../../styles/styles'
import Loader from '../../components/Loader'
import { Button, TextInput } from 'react-native-paper'
import { inputOptions } from '../ForgetPassword'
import SelectComponent from '../../components/SelectComponent'
import { useDispatch, useSelector } from 'react-redux'
import { useFocusEffect } from '@react-navigation/native'
import { getDetailProduct, updateProduct } from '../../redux/actions/productAction'
import { Toast } from 'react-native-toast-message/lib/src/Toast'

export default function UpdateProduct({navigation,route}) {
    const [name, setName] = useState(route.params.name)
    const [description, setDescription] = useState(route.params.description)
    const [price, setPrice] = useState(route.params.price)
    const [stock, setStock] = useState(route.params.stock)
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

    const callSuccess=(message)=>{
        Toast.show({
          type:"success",
          text1:message
        })
        navigation.goBack()
       }
       const callError=(message)=>{
        Toast.show({
          type:"error",
          text1:message
        })
       }
  
    const submitHandler =()=>{
        const myForm = new FormData()
        myForm.append("name",name)
      myForm.append("description",description)
      myForm.append("price",price)
      myForm.append("stock",stock)
        dispatch(updateProduct(myForm,route.params.id,callSuccess,callError))
    }

    const {product}= useSelector((state)=>state.product)

    const dispatch=useDispatch()
    useFocusEffect(
      React.useCallback(() => {
        dispatch(getDetailProduct(route.params.id))
      }, [])
    );
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
        height:550,
    }}>
        <Button 
        onPress={()=>navigation.navigate("productimages",{id:route.params.id,
            images: product.images
        })}
        style={{backgroundColor:colors.color1,marginBottom:15}}
        textColor={colors.color2}
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