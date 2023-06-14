import { Dimensions, StyleSheet, Image, View, Text, TouchableOpacity, SafeAreaView } from 'react-native'
import React, { useRef,useState } from 'react'
import { colors, defaultStyle } from '../styles/styles'
import Header from '../components/Header'
import Carousel from 'react-native-snap-carousel'
import { Avatar, Button } from 'react-native-paper'
import { Toast } from 'react-native-toast-message/lib/src/Toast'

const SLIDER_WIDTH= Dimensions.get('window').width
const ITEM_WIDTH = SLIDER_WIDTH

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function ProductDetails({route:{params}}) {
    const {
    stock,
    name,
    price,
    image,
    // addToCardHandler,
    id,
    key,
    i,
    navigate,
    item
    } = params
    const isCarousel = useRef(null)
    const [quantity, setQuantity] = useState(2)
    const [disableDecrement, setDisableDecrement] = useState(false)
    
    const incrementQty = ()=>{
        if (stock<=quantity) {
            return
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
                text2:"This is text 2"
            })
        }

        Toast.show({
            type:"success",
            text1:"Đã thêm vào giỏ hàng!",
            text2:"This is text 2"
        })
    }
//     const images = [
//         {
//         id:"djafkjksdf",
//         url:"https://thumbs.dreamstime.com/b/business-training-courses-concept-modern-vector-illustration-flat-style-landing-page-mobile-app-poster-banner-flyer-189016731.jpg"
//     },
//         {
//         id:"djafkjksdf",
//         url:"https://previews.123rf.com/images/alisarut/alisarut2002/alisarut200200035/141061471-vector-illustration-coaching-training-communication-contact-using-mobile-app-concept.jpg"
//     },
//         {
//         id:"djafkjksdf",
//         url:"https://img.freepik.com/free-vector/organic-flat-people-business-training_23-2148909572.jpg?w=2000"
//     },
//         {
//         id:"djafkjksdf",
//         url:"https://img.freepik.com/premium-vector/student-woman-with-laptop-studying-online-course-online-education-concept-vector-illustration-flat_186332-1147.jpg?w=2000"
//     },
// ]
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