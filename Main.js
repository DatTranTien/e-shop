import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import Login from './screens/Login';
import ProductDetails from './screens/ProductDetails';
import Toast  from 'react-native-toast-message';
import Cart from './screens/Cart';
import ConfirmOrder from './screens/ConfirmOrder';
import Payment from './screens/Payment';

const Stack = createNativeStackNavigator();

export default function Main() {
  return (
    <>
    <Stack.Navigator initialRouteName="Home"
    screenOptions={{
        headerShown:false
    }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="productdetails" component={ProductDetails} />
      <Stack.Screen name="cart" component={Cart} />
      <Stack.Screen name="confirmoder" component={ConfirmOrder} />
      <Stack.Screen name="payment" component={Payment} />
    </Stack.Navigator>
    <Toast position="top" bottomOffset={20} />
    </>
  );
}

const styles = StyleSheet.create({})