import axios from "axios"
import { server } from "../store"
export const register = (formData)=>async(dispatch)=>{
    
    try {
        dispatch({
            type:"registerRequest"
        })

    const {data}= await axios.post(`${server}/user/signup`,formData,
    {
        headers:{
            "Content-Type":"multipart/form-data"
        },
        withCredentials:true
    })

    dispatch({
        type: "registerSuccess",
        payload: data.message
    })
    } catch (error) {
        dispatch({
            type: "registerFail",
            payload: error.response.data.message
        })
    }
}
export const login = (email,password)=>async(dispatch)=>{
    
    try {
        dispatch({
            type:"loginRequest"
        })

    const {data}= await axios.post(`${server}/user/login`,{
        email,
        password
    },
    {
        headers:{
            "Content-Type":"application/json"
        },
        withCredentials:true
    })

    dispatch({
        type: "loginSuccess",
        payload: data.message
    })
    } catch (error) {
        dispatch({
            type: "loginFail",
            payload: error.response.data.message
        })
    }
}
export const forgetPassword = (email,callSuccess,callError)=>async(dispatch)=>{
    
    try {
        dispatch({
            type:"forgetPassRequest"
        })

    const {data}= await axios.post(`${server}/user/forgetPassword`,{
        email
    },
    {
        headers:{
            "Content-Type":"application/json"
        },
        withCredentials:true
    })

    dispatch({
        type: "forgetPassSuccess",
        payload: data.message
    })
    callSuccess(data.message)
    } catch (error) {
        dispatch({
            type: "forgetPassFail",
            payload: error.response.data.message
        })
        callError(error.response.data.message)
    }
}
export const resetPass = (otp,newPassword,callSuccess,callError)=>async(dispatch)=>{
    
    try {
        dispatch({
            type:"resetPassRequest"
        })

    const {data}= await axios.put(`${server}/user/forgetPassword`,{
        otp,
        newPassword
    },
    {
        headers:{
            "Content-Type":"application/json"
        },
        withCredentials:true
    })

    dispatch({
        type: "resetPassSuccess",
        payload: data.message
    })
    callSuccess(data.message)
    } catch (error) {
        dispatch({
            type: "resetPassFail",
            payload: error.response.data.message
        })
        callError(error.response.data.message)
    }
}
export const loadUser = ()=>async(dispatch)=>{
    
    try {
        dispatch({
            type:"loadUserRequest"
        })

    const {data}= await axios.get(`${server}/user/me`,
    {
        withCredentials:true
    })

    dispatch({
        type: "loadUserSuccess",
        payload: data.userInfor
    })
    } catch (error) {
        dispatch({
            type: "loginFail",
            payload: error.response.data.message
        })
    }
}
export const logout = (callSuccess,callError)=>async(dispatch)=>{
    
    try {
        dispatch({
            type:"logoutRequest"
        })

    const {data}= await axios.get(`${server}/user/logout`,
    {
        withCredentials:true
    })

    dispatch({
        type: "logoutSuccess",
        payload: data.message
    })
    } catch (error) {
        dispatch({
            type: "logoutFail",
            payload: error.response.data.message
        })
    }
}