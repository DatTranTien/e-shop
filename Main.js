import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import Login from './screens/Login';
import ProductDetails from './screens/ProductDetails';
import Toast  from 'react-native-toast-message';

const Stack = createNativeStackNavigator();

export default function Main() {
  return (
    <>
    <Stack.Navigator initialRouteName="Home"
    screenOptions={{
        headerShown:false
    }}
    >
      {/* <Stack.Screen name="Login" component={Login} /> */}
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="productdetails" component={ProductDetails} />
    </Stack.Navigator>
    <Toast position="top" bottomOffset={20} />
    </>
  );
}

const styles = StyleSheet.create({})