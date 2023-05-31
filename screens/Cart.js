import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors, defaultStyle } from '../styles/styles'
import Header from '../components/Header'
import Heading from '../components/Heading'
import { Button } from 'react-native-paper'
import CartItem from '../components/CartItem'
import { useNavigation } from '@react-navigation/native'



export const cartItems=[
  {
  name:"Macbook",
  image:"https://images2.thanhnien.vn/528068263637045248/2023/2/14/macbook-air-m2-1676361464865294752901.jpg",
  product:"12345",
  stock:3,
  price:5000,
  quantity:5
},
  {
  name:"Shoes",
  image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW4oVF4VzB0zChCtbLtPeAWXCfjAhyb_OksA&usqp=CAU",
  product:"12345",
  stock:5,
  price:500,
  quantity:3
},
  {
  name:"Books",
  image:"data:image/jpeg;base64,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OceevurS1nuH73quXTKKOd2zdYbI+q7CAuksN1MpajE77+81p2ZpdxzuJjmrgtA6b/3KHl43Ezc3TTskazLufIeHzO/ojgBGLM7gPoPqs5J8OQ4/oFg5zWcS46DVzvv0Q89K+SMsJPiyHAfU/olPFUypgAaYiO6P8R8R9lsp2QvzqabmDT8x39NFPAjILtQ7yHOMdM309/TxNFmsjaemZOrjmT+3JSURWFDbbuwiIhAREQBERAEREBptVEVGOYdHNLT0cI+qodkK5a11nfk+k52XFpOfuT6hdIqS97l7VwrUn9nWbo7c6NzvlPDLNCqondSju9C2rU8bXNO8EeohcC9paSDqCQeo1XSUbdbGd2pZQ/8AubUa0HnB/ZVV8UHh3avp9mHnTEHQ6N5GQnX1UFGItJXW7gyJZrK+oSGNmBJ6BaVnSqubOFxEiDBiQdyxUGbKwWTaTiCQCQNTGQnSVit1K0va1zAYa7xDLOEGW81HJdtdVDBRY0/hk9XZke65W6LJ21UD4R3ndBu89F26lGrDR1kVdquKjU+DCeLO77aeypbXsq5udN4dydkfXQ+y65FDimerSxtenpK67nmcPbrG9jTiaRl5euiqF6cVWWq4qNT4MJ4s7vtp7Llw7jfh+04xVqi81+Cn2Yq91zd8z9+qusO85/IKtpXC+g/HSeHDe12RjqMj7KzpWQuzqafgBy/Md/TRc7LM+KlSlUc4yyfPl8RqYXPyZpvefCP8fxH2UyzWRtPTNx1ccyf25KQBGQWStUbGKVS6ssl81+WCIikrCIiAIiIAiIgCIiAIiIAiIgC02mztqNLXCQfuRzW5EDzOKvG630TpiZucPrwKgBeiKFWuyi/M02+WXyUWMk8N/pZyFuZTa+KTi5sDM8d+4L5Y7I+qYY2eJ3DqV1rbnoD/APMeZJ+ZU2nTDRDQAOAEBLELDXd30It2Xe2gyBmTm48T+imoik1pJKyCIiEhERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREB//9k=",
  product:"12345",
  stock:5,
  price:500,
  quantity:3
},
  {
  name:"Shoes",
  image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW4oVF4VzB0zChCtbLtPeAWXCfjAhyb_OksA&usqp=CAU",
  product:"12345",
  stock:5,
  price:500,
  quantity:3
},
]
export default function Cart() {
  const navigate=useNavigation()
  const incrementHandle=(id,stock,qty)=>{
    
  }
  const decrementHandle=(id,stock,qty)=>{

  }
  return (
    <View
    style={{
      ...defaultStyle,
      padding:"2%"
    }}>
      {/* ========Header======== */}
      <Header back={true} emptyCart={true} />
      <Heading text1="Shopping" text2="Cart" />
      
      <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{
        paddingVertical:20,
        flex:1
      }}>
        {cartItems.map((item,index)=>{
          return <CartItem index={index} item={item} 
          incrementHandle={()=>incrementHandle(item.id,item.stock,id.quantity)}
          decrementHandle={()=>decrementHandle(item.id,item.stock,id.quantity)}
          />
        })}

      </View>
      </ScrollView>

      <View style={{
        flexDirection:"row",
        justifyContent:"space-between",
        paddingHorizontal:35
      }}>
        <Text style={{fontWeight:"800"}}>5 items</Text>
        <Text style={{fontWeight:"800"}}>5$</Text>
      </View>

      <TouchableOpacity onPress={()=>navigate.navigate("confirmoder")}>
        <Button
        icon={'cart'}
        textColor={colors.color2}
        style={{
          backgroundColor:colors.color1,
          borderRadius:100,
          padding:5
        }}>
          Checkout
        </Button>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({})