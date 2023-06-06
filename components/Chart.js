import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { PieChart } from 'react-native-chart-kit'
import { colors } from '../styles/styles'

const screenWidth= Dimensions.get("screen").width


export default function Chart({inStock=0, outOfStock}) {
    const data=[
        {
            name:"Out of Stock",
            population: outOfStock,
            color:colors.color1_light,
            legendFontColor: colors.color2
        },
        {
            name:"In Stock",
            population: inStock,
            color:colors.color1_light2,
            legendFontColor: colors.color2
        },
    ]
    const chartConfig={
        // backgroundColor: "#e26a00",
        // backgroundGradientFrom: "#fb8c00",
        // backgroundGradientTo: "#ffa726",
        // decimalPlaces: 2, // optional, defaults to 2dp
        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        // labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        // style: {
        //   borderRadius: 16
        // },
        // propsForDots: {
        //   r: "6",
        //   strokeWidth: "2",
        //   stroke: "#ffa726"
        // }
      }
  return (
    <PieChart
  data={data}
  width={screenWidth}
  height={220}
  chartConfig={chartConfig}
  accessor={"population"}
  backgroundColor={colors.color3}
  paddingLeft={"15"}
  absolute
/>
  )
}

const styles = StyleSheet.create({})