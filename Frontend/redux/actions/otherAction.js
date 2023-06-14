import axios from "axios"
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