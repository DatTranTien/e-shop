import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors, defaultStyle } from '../../styles/styles'
import Header from '../../components/Header'
import Loader from '../../components/Loader'
import ButtonBox from '../../components/ButtonBox'
import ProductListHeading from '../../components/ProductListHeading'
import ProductListItem from '../../components/ProductListItem'
import { products } from '../Home'
import Chart from '../../components/Chart'

export default function AdminPanel({navigation}) {
    const loading = true
    const navigateHandler=(text)=>{
        switch (text) {
            case "Category":
                navigation.navigate("categories")
                break;
            case "All Orders":
                navigation.navigate("adminorders")
                break;
            case "Product":
                navigation.navigate("newproduct")
                break;
        
            default:
                navigation.navigate("adminorders")
                break;
        }
    }
    const deleteProductHandler=(id)=>{
        console.log("first")
    }
  return (
    <View style={defaultStyle}>
        <Header back={true}/>

        <View style={{marginBottom:20}}>
            <Text style={{color:colors.color1,fontWeight:"800",fontSize:25,textAlign:"center"}}>Admin Panel</Text>
        </View>
        <Chart inStock={12} outOfStock={2}/>

        <View>
            <View style={{
                flexDirection:"row",
                margin:10,
                justifyContent:"space-between"
            }}>
                <ButtonBox 
                icon={"plus"} 
                text={"Product"} 
                handler={navigateHandler} />
                <ButtonBox 
                icon={"format-list-bulleted-square"} 
                text={"All Orders"} 
                handler={navigateHandler}
                reverse={true}
                />
                <ButtonBox 
                icon={"plus"} 
                text={"Category"} 
                handler={navigateHandler}
                />
            </View>
        </View>
    
    <ProductListHeading/>

    <ScrollView showsVerticalScrollIndicator={false}>
        <View>
            {products.map((item,index)=>(
                <ProductListItem
                deleteHandler={deleteProductHandler}
                navigate={navigation}
                id={item._id}
                i={index}
                price={item.price}
                stock={item.stock}
                name={item.name}
                category={item.category}
                imgSrc={item.images[0].url}
                />
            ))}
        </View>
    </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.color3,
        flexDirection:"row",
        justifyContent:"space-between",
        height:40,
        alignItems:"center",
        borderRadius:5,
        padding:10
    }
})