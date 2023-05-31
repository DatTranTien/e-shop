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
    const isCarousel = useRef(null)
    const [quantity, setQuantity] = useState(2)
    const [disableDecrement, setDisableDecrement] = useState(false)
    let name="macbook"
    let price="1500"
    let stock=1
    let description=`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

    Why do we use it?
    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
    
    
    Where does it come from?
    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
    
    The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
    
    Where can I get some?
    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
    
    5
        paragraphs
        words
        bytes
        lists
        Start with 'Lorem
    ipsum dolor sit amet...'
    `
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
    const images = [
        {
        id:"djafkjksdf",
        url:"https://thumbs.dreamstime.com/b/business-training-courses-concept-modern-vector-illustration-flat-style-landing-page-mobile-app-poster-banner-flyer-189016731.jpg"
    },
        {
        id:"djafkjksdf",
        url:"https://previews.123rf.com/images/alisarut/alisarut2002/alisarut200200035/141061471-vector-illustration-coaching-training-communication-contact-using-mobile-app-concept.jpg"
    },
        {
        id:"djafkjksdf",
        url:"https://img.freepik.com/free-vector/organic-flat-people-business-training_23-2148909572.jpg?w=2000"
    },
        {
        id:"djafkjksdf",
        url:"https://img.freepik.com/premium-vector/student-woman-with-laptop-studying-online-course-online-education-concept-vector-illustration-flat_186332-1147.jpg?w=2000"
    },
]
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
      data={images}
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
            {description}
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