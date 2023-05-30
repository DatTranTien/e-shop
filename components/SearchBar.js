import { BackHandler, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import { Avatar, Headline, Searchbar } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '../styles/styles';



export default function SearchBar({setActiveSearch,products}) {
    const [searchQuery, setSearchQuery] = React.useState('');

    const onChangeSearch = query => setSearchQuery(query);

    const backAction =()=>{
        setSearchQuery("")
        setActiveSearch(false)
    }

    useEffect(() => {
      BackHandler.addEventListener('hardwareBackPress',backAction)
    
      return () => {
    BackHandler.removeEventListener('hardwareBackPress',backAction)
      }
    }, [])
    
  
    return (
      <SafeAreaView>
        <Avatar.Icon
        onTouchStart={()=>setActiveSearch(false)}
        style={{
            backgroundColor:colors.color4
        }}
        icon={"arrow-left"}
        color={colors.color3}
        />
        <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
      <TouchableOpacity>
        <View style={
            {
                padding:20,
                borderRadius:10,
                backgroundColor:colors.color2,
                elevation:5,
                width:"100%",
                alignItems:"center",
                justifyContent:"flex-end",
                flexDirection:"row",
                marginVertical:30
            }
        }>
            <Image
            source={{
                uri:products[0].images[0].url
            }}
            style={{
                width:80,
                height:80,
                position:"absolute",
                resizeMode:"contain",
                // top:-15,
                left:10,
                borderRadius:20
            }}
            />
            <View style={{width:"80%", paddingHorizontal:30}}>
                <Text numberOfLines={1}>{products[0].name}</Text>
                <Headline
                style={{fontWeight:"900"}}
                >{products[0].price}$</Headline>
            </View>
        </View>
      </TouchableOpacity>
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({})