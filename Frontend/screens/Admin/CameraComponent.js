import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState,useEffect } from 'react'
import { Camera, CameraType } from 'expo-camera';
import { Avatar } from 'react-native-paper';
import { colors } from '../../styles/styles';
import * as ImagePicker from 'expo-image-picker';

export default function CameraComponent({navigation,route}) {
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [camera, setCamera] = useState(null)

  const openImagePicker=async()=>{
    const permissionResult=await ImagePicker.requestCameraPermissionsAsync()
    if (permissionResult.granted===false) {
      return alert("Permission to access gallery is required!")
    }
    const data= await ImagePicker.launchImageLibraryAsync({
      allowsEditing:true,
      aspect:[1,1],
      quality:1
    })
    if (route.params?.newProduct) 
      return navigation.navigate("newProduct",{
        image:data.uri
      })
    if (route.params?.updateProduct)
      return navigation.navigate("productimages",{
        id:route.params.id,
        images:route.params.images,
        pic:data.uri

      })
    if (route.params?.updateProfile) 
      return navigation.navigate("profile",{
        image:data.uri
      });
      else navigation.navigate("signup",{
        image:data.uri
      })
  }
  const clickPicture=async()=>{
    const data=await camera.takePictureAsync()
  }

  useEffect(() => {
    (async()=>{
      const {status}=await Camera.requestCameraPermissionsAsync()
      requestPermission(status==="granted")
    })()
    }, [])

    if (requestPermission===null) {
      return <View/>
    }
    if (requestPermission===false) {
      return <Text>No access to camera!</Text>
    }
  
  return (
    <View style={{
      flex:1
    }}>
        <Camera
        type={type}
        style={{
          flex:1,
          aspectRatio:1,
        }}
        ratio={'1:1'}
        ref={(e)=>setCamera(e)}
        />
          <View
        style={{
          flexDirection:"row",
          bottom:10,
          width:"100%",
          justifyContent:"space-evenly",
          position:"absolute",
        }}
        >
          <MyIcon icon="image" handler={openImagePicker} />
          <MyIcon icon="camera" handler={clickPicture} />
          <MyIcon icon="camera-flip" handler={()=>{
            setType(prev=> prev===CameraType.back?CameraType.front:CameraType.back)
          }} />

        </View>

        
    </View>
  )
}

const MyIcon=({icon,handler})=>{
return  <TouchableOpacity onPress={handler}>
    <Avatar.Icon size={40} icon={icon}
    color={colors.color2}
    style={{
      backgroundColor:colors.color1
    }}
    />
  </TouchableOpacity>
}

const styles = StyleSheet.create({})