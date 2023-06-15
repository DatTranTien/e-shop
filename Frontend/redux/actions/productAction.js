import axios from "axios"
import { server } from "../store"

export const getAdminProducts = ()=>async(dispatch)=>{
    
    try {
        dispatch({
            type:"getAdminProductsRequest"
        })

    const {data}= await axios.get(`${server}/product/admin`,
    {
        withCredentials:true
    })

    dispatch({
        type: "getAdminProductsSuccess",
        payload: data.all
    })
    } catch (error) {
        dispatch({
            type: "getAdminProductsFail",
            payload: error.response.data.message
        })
    }
}
export const getDetailProduct = (id)=>async(dispatch)=>{
    
    try {
        dispatch({
            type:"getProductDetailRequest"
        })

    const {data}= await axios.get(`${server}/product/single/${id}`,
    {
        withCredentials:true
    })
    console.log("cos dat nef ---->",data)

    dispatch({
        type: "getProductDetailSuccess",
        payload: data.detail
    })
    } catch (error) {
        dispatch({
            type: "getProductDetailFail",
            payload: error.response.data.message
        })
    }
}
export const deleteProduct = (id,callSuccess,callError)=>async(dispatch)=>{
    
    try {
        dispatch({
            type:"deleteProductRequest"
        })

    const {data}= await axios.delete(`${server}/product/deleteProduct/${id}`,
    {
        withCredentials:true
    })
    dispatch({
        type: "deleteProductSuccess",
        payload: data.message
    })
    callSuccess(data.message)
    } catch (error) {
        callError(error.response.data.message)
        dispatch({
            type: "deleteProductFail",
            payload: error.response.data.message
        })
    }
}
export const deleteImageProduct = (id,callSuccess,callError)=>async(dispatch)=>{
    
    try {
        dispatch({
            type:"deleteImageProductRequest"
        })

    const {data}= await axios.delete(`${server}/product/deleteImageProduct/${id}`,
    {
        withCredentials:true
    })
    dispatch({
        type: "deleteImageProductSuccess",
        payload: data.message
    })
    callSuccess(data.message)
    } catch (error) {
        callError(error.response.data.message)
        dispatch({
            type: "deleteImageProductFail",
            payload: error.response.data.message
        })
    }
}
export const getAllProducts = (keyword)=>async(dispatch)=>{
    
    try {
        dispatch({
            type:"getAllProductsRequest"
        })

    const {data}= await axios.get(`${server}/product/all?keyword=${keyword}`,
    {
        withCredentials:true
    })
    console.log("check data--->",data.all)

    dispatch({
        type: "getAllProductsSuccess",
        payload: data.all
    })
    } catch (error) {
        dispatch({
            type: "getAllProductsFail",
            payload: error.response.data.message
        })
    }
}

export const updateImageProduct = (form,id,callSuccess,callError)=>async(dispatch)=>{
    
    try {
        dispatch({
            type:"updateImageProductRequest"
        })

    const {data}= await axios.put(`${server}/product/updateImageProduct/${id}`,form,
    {
        headers:{
            "Content-Type":"multipart/form-data"
        },
        withCredentials:true
    })

    dispatch({
        type: "updateImageProductSuccess",
        payload:{message:data.message,callSuccess:callSuccess(data.message)}
    })
    } catch (error) {
        dispatch({
            type: "updateImageProductFail",
            payload: {message:error.response.data.message,callError:callError(error.response.data.message)}
        })
    }
}
export const updateProduct = (form,id,callSuccess,callError)=>async(dispatch)=>{
    
    try {
        dispatch({
            type:"updateProductRequest"
        })

    const {data}= await axios.put(`${server}/product/updateProduct/${id}`,form,
    {
        headers:{
            "Content-Type":"multipart/form-data"
        },
        withCredentials:true
    })
    console.log("check dât------>",data)

    dispatch({
        type: "updateProductSuccess",
        payload:data.message
    })
    callSuccess(data.message)
    } catch (error) {
        dispatch({
            type: "updateProductFail",
            payload:error.response.data.message
        })
        callError(error.response.data.message)
    }
}