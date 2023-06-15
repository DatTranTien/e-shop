import {FlatList, Platform, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { colors, defaultStyle } from '../styles/styles';
import Header from '../components/Header';
import { Avatar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import SearchBar from '../components/SearchBar';
import ProductCard from '../components/ProductCard';
import Footer from '../components/Footer';
import Heading from '../components/Heading';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../redux/actions/productAction';
import { getCategory } from '../redux/actions/categoryAction';
import { Toast } from 'react-native-toast-message/lib/src/Toast';





// const categories=[
//   {category:"DAT",_id:"tran"},
//   {category:"DAT1",_id:"tran1"},
//   {category:"DAT2",_id:"tran2"},
//   {category:"DAT3",_id:"tran3"},
//   {category:"DAT4",_id:"tran4"},
//   {category:"DAT5",_id:"tran5"},
// ]

// export const products=[
//   {
//     price:213,
//     category:"category1111",
//     stock:23,
//     name:"Sample 1",
//     _id:"lll",
//     images:[
//       {url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-2cuj7vo91zOktcl875LgU2ITbubYs3TlIGX1zxU-&s"}
//     ]
//   },
//   {
//     price:213,
//     category:"category1111",
//     stock:23,
//     name:"Sample 2",
//     _id:"lll",
//     images:[
//       {url:"https://prod-discovery.edx-cdn.org/media/course/image/0e575a39-da1e-4e33-bb3b-e96cc6ffc58e-8372a9a276c1.png"}
//     ]
//   },
// ]
export default function Home() {
  const [category, setCategory] = useState("")
  const [activeSearch, setActiveSearch] = useState(false)
  const navigate=useNavigation()
  const dispatch=useDispatch()
  const {products}=useSelector((state)=>state.product)
  const {categories}=useSelector((state)=>state.categories)

  const categoryButtonHandler = (id)=>{
    setCategory(id)
  }

  useEffect(()=>{
    dispatch(getAllProducts(""))
    dispatch(getCategory())
  },[])


  const renderItemProduct=(item,index)=>{
    console.log("item===>",item)
    console.log("index===>",index)
    return  <ProductCard
      stock={item.stock}
      name={item.name}
      price={item.price}
      image={item.images[0]?.url}
      id={item._id}
      key={item._id}
      i={index}
      navigate={navigate}
      item={item}
      />
    
  }
  
  return (
    <>
    {activeSearch ? 
      <SearchBar setActiveSearch={setActiveSearch}
      products={products}
      />
      :
      <View style={{
        // padding:35,
    paddingTop: Platform.OS === "android" ?StatusBar.currentHeight : 0,
    flex:1,
    backgroundColor: colors.color2
      }}>
        <Header back={true} hideArrow={true}/>
      <View style={
        {
        padding:"2%",
      flexDirection:"row",
      justifyContent:"space-between",
      alignItems:"center"
      }
      }>
      <Heading/>
      <View>
        <TouchableOpacity
        onPress={()=>setActiveSearch(true)}
        >
          <Avatar.Icon icon={'magnify'}
          size={50}
          color={'gray'} 
          style={{
            backgroundColor:colors.color2
          }} />
        </TouchableOpacity>
      </View>
      </View>


      {/* ========category========== */}

      <View>
      <ScrollView 
      horizontal
      showsHorizontalScrollIndicator={false}
      >
        {categories.map((item)=>
        (
          <TouchableOpacity 
          onPress={()=>categoryButtonHandler(item._id)}
          style={
            {
              padding:10,
              backgroundColor:category===item._id?colors.color1: colors.color5,
              margin:10,
              borderRadius:15
            }
          }>
            <Text 
            style={
              {
                fontSize:12,
                color:category===item._id?colors.color2: "gray",
                fontWeight:category===item._id?"800": "500",
              }
            }
            >{item.category}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      </View>


      {/* =============products============ */}
      <View style={{flex:1}}>
        <ScrollView 
        // horizontal
        showsHorizontalScrollIndicator={false}
        >
          <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={products}
          renderItem={(item)=>renderItemProduct(item.item,item.index)}
          keyExtractor={item => item._id}
          />
        </ScrollView>
      </View>


      {/* =============Footer=========== */}
      <Footer/>

    </View>
    }
    
    
    </>
  )
}

const styles = StyleSheet.create({})