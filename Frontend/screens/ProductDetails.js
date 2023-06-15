import { Dimensions, StyleSheet, Image, View, Text, TouchableOpacity, SafeAreaView } from 'react-native'
import React, { useImperativeHandle, useRef,useState } from 'react'
import { colors, defaultStyle } from '../styles/styles'
import Header from '../components/Header'
import Carousel from 'react-native-snap-carousel'
import { Avatar, Button } from 'react-native-paper'
import { Toast } from 'react-native-toast-message/lib/src/Toast'
import { useDispatch, useSelector } from 'react-redux'
import { useFocusEffect } from '@react-navigation/native'

const SLIDER_WIDTH= Dimensions.get('window').width
const ITEM_WIDTH = SLIDER_WIDTH

const windowHeight = Dimensions.get('window').height;

export default function ProductDetails({route:{params}}) {
    const {
    stock,
    name,
    price,
    image,
    id,
    item
    } = params
  const {cartItems}=useSelector((state)=>state.cart)
  let count =0;
  
//   if (cartItems ) {
//     console.log("vao day--->",cartItems.length)
//     cartItems.map((element) => {
        
//         if (element.product === id) {
//             count = element.quantity
//             setQuantity(element.quantity)
//         }
//       });
//   }
  useFocusEffect(
    React.useCallback(() => {
        if (cartItems ) {
            cartItems.map((element) => {
                
                if (element.product === id) {
                    count = element.quantity
                    setQuantity(element.quantity)
                    console.log("count--->",count)
                    console.log("cartItems--->",cartItems)
                }
              });
          }
    }, [cartItems])
  );
  
    const isCarousel = useRef(null)
    const [quantity, setQuantity] = useState(count||1)
    const [disableDecrement, setDisableDecrement] = useState(false)
    const dispatch=useDispatch()

     const incrementQty = ()=>{
        if (stock<=quantity) {
            return Toast.show({
                type:"error",
                text1:"Stock = quantity"
            })
        }
            setDisableDecrement(false)
        setQuantity((prev)=>prev+1)
    }
    const decrementQty = ()=>{
        
        setQuantity((prev)=>{
            if (prev<2) {
                setDisableDecrement(true)
            }
          return  prev-1
        })
    }
    const addToCardHandler = ()=>{
        if (stock===0) {
            return Toast.show({
                type:"error",
                text1:"Out of Stock",
            })
        }
        dispatch({
            type:"addToCart",
            payload:{
              product: id,
              name,
              price,
              image,
              stock,
              quantity
            }
          })
          return Toast.show({
            type: "success",
            text1:"Added Successfuly!"
          })
    }
  return (
    <View style={{
        ...defaultStyle,
        padding:0,
        backgroundColor:colors.color1
    }}>
      <Header back={true} />

      <Carousel
      layout='stack'
      sliderWidth={SLIDER_WIDTH}
      itemWidth={ITEM_WIDTH}
      ref={isCarousel}
      data={item.images}
      renderItem={CarouselCardItem}
      />
      
      <View style={{
        backgroundColor: colors.color2,
        padding:35,
        flex:1,
        marginTop:-380,
        borderTopLeftRadius:55,
        borderTopRightRadius:55
      }}>
        <Text numberOfLines={2} 
        style={{
            fontSize: 25
        }}
        >
            {name}
        </Text>
        <Text numberOfLines={2} 
        style={{
            fontSize: 18,
            fontWeight:"800"
        }}
        >
            {price}$
        </Text>
        <Text numberOfLines={8} 
        style={{
            letterSpacing:1,
            lineHeight:20,
            marginVertical:15
        }}
        >
            {item.description}
        </Text>

        <View style={{
            flexDirection:"row",
            justifyContent:"space-between",
            alignItems:"center",
            paddingHorizontal:5
        }}>
            <Text
            style={{
                color:colors.color3,
                fontWeight:"700"
            }}>
                Quantity
            </Text>
            <View style={{
                width:80,
                flexDirection:"row",
                justifyContent:"space-between",
                alignItems:"center"
            }}>
                <TouchableOpacity 
                disabled={disableDecrement}
                style={{opacity:disableDecrement?0.5:1}}
                onPress={decrementQty}>
                    <Avatar.Icon icon={"minus"}
                    style={{backgroundColor:colors.color1}}
                    size={25}
                    />
                </TouchableOpacity>


                <Text style={{
                    backgroundColor:colors.color5,
                    height:25,
                    width:25,
                    textAlignVertical:"center",
                    textAlign:"center",
                    borderRadius:10
                }}>
                    {quantity}
                </Text>
                <TouchableOpacity 
                onPress={incrementQty}>
                    <Avatar.Icon icon={"plus"}
                    style={{backgroundColor:colors.color1}}
                    size={25}
                    />
                </TouchableOpacity>

            </View>
        </View>


            <Button 
            icon={"cart"}
            textColor={colors.color2}
            onPress={addToCardHandler}
            style={{backgroundColor:colors.color1,marginTop:15}}>
                Add to card
            </Button>
      </View>
    </View>
  )
}
const CarouselCardItem = ({item,index})=>(
    <View style={styles.container} key={index}>
        <Image source={{uri: item.url}} style={styles.image} />
    </View>
)
const styles = StyleSheet.create({
    image:{
        width:ITEM_WIDTH,
        resizeMode:"contain",
        height:windowHeight*0.3
    },
    container:{
        backgroundColor:colors.color1,
        width: ITEM_WIDTH,
        paddingVertical: 40
    }
})