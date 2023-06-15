import { initPaymentSheet, presentPaymentSheet, useStripe } from "@stripe/stripe-react-native"
import axios from "axios"
import { Toast } from "react-native-toast-message/lib/src/Toast"
import { server } from "../store"

export const updatePic = (form,callSuccess,callError)=>async(dispatch)=>{
    
    try {
        dispatch({
            type:"updatePicRequest"
        })

    const {data}= await axios.put(`${server}/user/updatePic`,form,
    {
        headers:{
            "Content-Type":"multipart/form-data"
        },
        withCredentials:true
    })

    dispatch({
        type: "updatePicSuccess",
        payload:{message:data.message,callSuccess:callSuccess(data.message)}
    })
    } catch (error) {
        dispatch({
            type: "updatePicFail",
            payload: {message:error.response.data.message,callError:callError(error.response.data.message)}
        })
    }
}
export const updatePassword = (oldPass,newPass,callSuccess,callError)=>async(dispatch)=>{
    
    try {
        dispatch({
            type:"updatePasswordRequest"
        })

    const {data}= await axios.put(`${server}/user/changePassword`,{
      oldPassword:  oldPass,
      newPassword: newPass
    },
    {
        headers:{
            "Content-Type":"application/json"
        },
        withCredentials:true
    })

    dispatch({
        type: "updatePasswordSuccess",
        payload:{message:data.message,callSuccess:callSuccess(data.message)}
    })
    } catch (error) {
        dispatch({
            type: "updatePasswordFail",
            payload: {message:error.response.data.message,callError:callError(error.response.data.message)}
        })
    }
}
export const updateProfile = (name,email,address,city,country,pinCode,callSuccess,callError)=>async(dispatch)=>{
    
    try {
        dispatch({
            type:"updateProfileRequest"
        })

    const {data}= await axios.put(`${server}/user/updateProfile`,{
        name,email,address,city,country,pinCode
    },
    {
        headers:{
            "Content-Type":"application/json"
        },
        withCredentials:true
    })

    dispatch({
        type: "updateProfileSuccess",
        payload:{message:data.message,callSuccess:callSuccess(data.message)}
    })
    } catch (error) {
        dispatch({
            type: "updateProfileFail",
            payload: {message:error.response.data.message,callError:callError(error.response.data.message)}
        })
    }
}



export const paymentOrder = (
    itemPrice,shippingCharges,taxPrice,totalAmount,paymentMethod,cartItems,shippingInfo,callSuccess,callError
)=>async(dispatch)=>{
    
    try {
        dispatch({
            type:"orderRequest"
        })

    const {data}= await axios.post(`${server}/order/new`,{
        shippingInfo,
        orderItems:cartItems,
        itemPrice,
        taxPrice,
        shippingCharges,
        totalAmount,
    },
    {
        headers:{
            "Content-Type":"application/json"
        },
        withCredentials:true
    })

    dispatch({
        type: "orderSuccess",
        payload:{message:data.message,callSuccess:callSuccess(data.message)}
    })
    } catch (error) {
        dispatch({
            type: "orderFail",
            payload: {message:error.response.data.message,callError:callError(error.response.data.message)}
        })
    }
}
export const getOrders = ()=>async(dispatch)=>{
    
    try {
        dispatch({
            type:"getOrderRequest"
        })

    const {data}= await axios.get(`${server}/order/my`,
    {
        headers:{
            "Content-Type":"application/json"
        },
        withCredentials:true
    })

    dispatch({
        type: "getOrderSuccess",
        payload:data.orders
    })
    } catch (error) {
        dispatch({
            type: "getOrderFail",
            payload:error.response.data.message
        })
    }
}

export const paymentOrderOnline = (
    totalAmount
    ,callSuccess,callError,
    codeHandle,
    stripe
)=>async(dispatch)=>{
    try {
        dispatch({
            type:"orderOnlineRequest"
        })
    const {data:{client_secret}}= await axios.post(`${server}/order/payment`,{
        totalAmount,
    },
    {
        headers:{
            "Content-Type":"application/json"
        },
        withCredentials:true
    })
    const init =await stripe.initPaymentSheet({
        paymentIntentClientSecret:client_secret,
        merchantDisplayName:"DatTran"
    })

    if (init.error) {
        return Toast.show({type: "error",text1: init.error.message})
    }
    const presentSheet=await presentPaymentSheet()
    if (presentSheet.error) {
        return Toast.show({type: "error",text1: presentSheet.error.message})
    }
    const {paymentIntent}=await stripe.retrievePaymentIntent(client_secret)
if (paymentIntent.status==="Succeeded") {
    // console.log(paymentIntent)
    codeHandle({id: paymentIntent.id,status: paymentIntent.status})
}

    // dispatch({
    //     type: "orderOnlineSuccess",
    //     payload:{message:data.message,callSuccess:callSuccess(data.message)}
    // })
    } catch (error) {
        dispatch({
            type: "orderOnlineFail",
            payload: {message:error.response.data.message,callError:callError(error.response.data.message)}
        })
    }
}