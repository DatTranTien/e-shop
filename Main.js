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
import ForgetPassword from './screens/ForgetPassword';
import Signup from './screens/SignUp';
import Verify from './screens/Verify';
import Profile from './screens/Profile';
import UpdateProfile from './screens/UpdateProfile';
import ChangePassword from './screens/ChangePassword';
import Orders from './screens/Orders';

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
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="signup" component={Signup} />
      <Stack.Screen name="forgetpassword" component={ForgetPassword} />
      <Stack.Screen name="verify" component={Verify} />
      <Stack.Screen name="profile" component={Profile} />
      <Stack.Screen name="updateprofile" component={UpdateProfile} />
      <Stack.Screen name="changepassword" component={ChangePassword} />
      <Stack.Screen name="orders" component={Orders} />
    </Stack.Navigator>
    <Toast position="top" bottomOffset={20} />
    </>
  );
}

const styles = StyleSheet.create({})