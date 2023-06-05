import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { colors, defaultStyle } from '../styles/styles'
import { Avatar, Button } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'
import ButtonBox from '../components/ButtonBox'
import Footer from '../components/Footer'
import Loader from '../components/Loader'



const user = {
    name:"Dat",
    email:"dat@gmail.com"
}
const loading=false
export default function Profile({navigation}) {
    const [avatar, setAvatar] = useState("")
    const navigate=useNavigation()
const logoutHandler=()=>{
    console.log("signing out")
}



    const navigateHandler=(text)=>{
        switch (text) {
            case "Admin":
                navigation.navigate("adminpanel")
                break;
            case "Orders":
                navigation.navigate("orders")
                break;
            case "Profile":
                navigation.navigate("updateprofile")
                break;
            case "Password":
                navigation.navigate("changepassword")
                break;
            case "Sign Out":
                logoutHandler()
                break;
        
            default:
                break;
        }
    }
  return (
    loading
    ?<Loader/>
    :<>
    <View style={[defaultStyle,{alignItems:"center"}]}>
        <View style={{marginBottom:20}}>
            <Text style={{color:colors.color1,fontWeight:"800",fontSize:25}}>Hồ sơ</Text>
        </View>


        <View style={styles.container}>
            <Avatar.Image
            source={{
                uri:avatar
            }}
            size={100}
            style={{backgroundColor:colors.color1}}
            />
            <TouchableOpacity
            onPress={()=>navigate.navigate("camera", {updateProfile:true})}
            >
                <Button>Change Photo</Button>
            </TouchableOpacity>

            <Text style={{fontWeight:"800",color:colors.color1,fontSize:18}}>{user?.name}</Text>
            <Text style={{fontWeight:"400",color:colors.color1}}>{user?.email}</Text>
        </View>


        <View>
            <View style={{
                flexDirection:"row",
                margin:10,
                justifyContent:"center",
                // backgroundColor:"red",
                // width:"100%",
                // flexBasis:1
            }}>
                <ButtonBox 
                handler={navigateHandler}
                text={"Orders"}
                icon={"format-list-bulleted-square"}
                />
                <ButtonBox
                handler={navigateHandler}
                icon={"view-dashboard"}
                text={"Admin"}
                reverse={true}
                />
                <ButtonBox
                handler={navigateHandler}
                text={"Profile"}
                icon={"pencil"}
                />

            </View>



            <View style={{
                flexDirection:"row",
                margin:10,
                justifyContent:"space-evenly",
                // backgroundColor:"red",
                // width:"100%",
                // flexBasis:1
            }}>
                <ButtonBox 
                handler={navigateHandler}
                text={"Password"}
                icon={"format-list-bulleted-square"}
                />
                <ButtonBox
                handler={navigateHandler}
                icon={"exit-to-app"}
                text={"Sign Out"}
                reverse={true}
                />

            </View>
        </View>

    </View>
    <Footer/>
    </>
  )
}

const styles = StyleSheet.create({
    container:{
        elevation: 7,
        backgroundColor: colors.color2,
        padding:30,
        borderRadius: 10,
        alignItems: "center",
        borderColor:colors.color1,
        borderWidth:2
    }
})