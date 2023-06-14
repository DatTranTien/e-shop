import {createReducer} from '@reduxjs/toolkit'
export const productReducer= createReducer({
    products:[],
    product:{}
},(builder)=>{
    
    builder.addCase("getAllProductsRequest",(state)=>{
        state.loading = true
    })
    .addCase("getAdminProductsRequest",(state)=>{
        state.loading = true
    })
    .addCase("getProductDetailRequest",(state)=>{
        state.loading = true
    })



    .addCase("getAllProductsSuccess",(state,action)=>{
        state.loading=true
        state.products=action.payload
    })
    .addCase("getAdminProductsSuccess",(state,action)=>{
        state.loading=true
        state.products=action.payload
        state.inStock = action.payload.inStock
        state.outOfStock = action.payload.outOfStock
    })
    .addCase("getProductDetailsSuccess",(state,action)=>{
        state.loading=true
        state.product=action.payload
    })



    .addCase("getAllProductsFail",(state,action)=>{
        state.loading=false
        state.error=action.payload
    })
    .addCase("getAdminProductsFail",(state,action)=>{
        state.loading=false
        state.error=action.payload
    })
    .addCase("getProductDetailFail",(state,action)=>{
        state.loading=false
        state.error=action.payload
    })
})