import axios from "axios"
import { server } from "../store"



export const getCategory = ()=>async(dispatch)=>{
    
    try {
        dispatch({
            type:"getCategoryRequest"
        })

    const {data}= await axios.get(`${server}/product/category`,
    {
        withCredentials:true
    })

    dispatch({
        type: "getCategorySuccess",
        payload: data.categories
    })
    } catch (error) {
        dispatch({
            type: "getCategoryFail",
            payload: error.response.data.message
        })
    }
}