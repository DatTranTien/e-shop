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

    dispatch({
        type: "getProductDetailsSuccess",
        payload: data.detail
    })
    } catch (error) {
        dispatch({
            type: "getProductDetailFail",
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