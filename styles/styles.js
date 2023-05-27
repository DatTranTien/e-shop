import { Platform } from "expo-modules-core"
import { StatusBar,StyleSheet } from "react-native"

export const colors = {
    color1:"#c70049",
    color1_light:"rgba(277,25,99)",
    color1_light2:"rgba(199,0,73,0.80",
    color2:"white",
    color3:"rgb(45,45,45)",
    color4:"transparent",
    color5:"#f2f2f2",
    color6:"#f7f7f7",
}

export const defaultStyle = StyleSheet.create({
    padding:35,
    paddingTop: Platform.OS === "android" ?StatusBar.currentHeight : 0,
    flex:1,
    backgroundColor: colors.color2
})
export const inputStyling = StyleSheet.create({
    height:35,
    backgroundColor: Platform.OS === "android" ?StatusBar.currentHeight : 0,
    marginVertical:10,
    marginHorizontal: 20
})