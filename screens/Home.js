import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { defaultStyle } from '../styles/styles';
import Header from '../components/Header';

export default function Home() {
  return (
    <View style={{defaultStyle}}>
        <Header back={true}/>
      <Text>Home</Text>
    </View>
  )
}

const styles = StyleSheet.create({})