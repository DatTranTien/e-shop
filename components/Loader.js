import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ActivityIndicator } from 'react-native-paper'
import { colors } from '../styles/styles'

export default function Loader() {
  return (
    <ActivityIndicator
    size={50}
    color={colors.color1}
    style={{
        height:"100%"
    }}
    />
  )
}

const styles = StyleSheet.create({})