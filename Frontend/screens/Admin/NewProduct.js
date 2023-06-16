import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../../components/Header'
import { colors, defaultStyle } from '../../styles/styles'
import Loader from '../../components/Loader'
import { Avatar, Button, TextInput } from 'react-native-paper'
import { inputOptions } from '../ForgetPassword'
import SelectComponent from '../../components/SelectComponent'
import { useDispatch } from 'react-redux'
import { newProduct } from '../../redux/actions/productAction'
import mime from 'mime'
import { Toast } from 'react-native-toast-message/lib/src/Toast'

export default function NewProduct({navigation,route}) {
    const [name, setName] = useState("")
    const [image, setImage] = useState("")
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
    const dispatch=useDispatch()
    const [visible, setVisible] = useState(false)
    const loading=false


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
    myForm.append("file",{
      uri:image,
      type: mime.getType(image),
      name:image.split("/").pop()
  })
      dispatch(newProduct(myForm,callSuccess,callError))
    }
    useEffect(() => {
    if (route.params?.image) {
      setImage(route.params.image)
    }
    }, [route.params])
    
  return (
    <>
    <View style={{...defaultStyle}}>
       <Header back={true} />
<View style={{marginBottom:20}}>
    <Text style={{fontWeight:"900", textAlign:"center",fontSize:24}}>New Product</Text>
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



      <View
      style={{
        width:80,
        height:80,
        alignSelf:"center",
        marginBottom:20,
      }}>
        <Avatar.Image
        size={80}
        style={{
          backgroundColor:colors.color1
        }}
        source={{
          uri: image?image:null
        }}
        />
        <TouchableOpacity
        onPress={()=>navigation.navigate("camera",{newProduct:true})}>
          <Avatar.Icon
          size={30}
          icon={'camera'}
          color={colors.color3}
          style={{
            backgroundColor:"cyan",
            backgroundColor:colors.color2,
            position:"absolute",
            bottom:0,
            right:-5,
            zIndex:1
          }}
          />
        </TouchableOpacity>
      </View>




        <Button 
        onPress={()=>navigation.navigate("productimages",{id:route.params.id,
            images:[]
        })}
        textColor={colors.color1}
        style={{}}
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
        value={price}
        keyboardType="number-pad"
        onChangeText={setPrice}
        />
        <TextInput style={{...inputOptions,marginBottom:20}} 
        placeholder="Stock"
        value={stock}
        keyboardType="number-pad"
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
        loading={loading}
        disabled={loading}
        >
            Create
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