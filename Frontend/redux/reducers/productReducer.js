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
    .addCase("getProductDetailSuccess",(state,action)=>{
        state.loading=true
        state.product=action.payload
    })

    builder.addCase("newProductRequest",(state)=>{
        state.loading = true
    }).addCase("newProductSuccess",(state,action)=>{
        state.loading=true
        state.message=action.payload.message
    })
    .addCase("newProductFail",(state,action)=>{
        state.loading=true
        state.error=action.payload
    })


    .addCase("updateImageProductRequest",(state,action)=>{
        state.loading=true
    })
    .addCase("updateImageProductSuccess",(state,action)=>{
        state.loading=true
        state.message=action.payload.message
    })
    .addCase("updateImageProductFail",(state,action)=>{
        state.loading=true
        state.error=action.payload.error
    })



    .addCase("updateProductRequest",(state,action)=>{
        state.loading=true
    })
    .addCase("updateProductSuccess",(state,action)=>{
        state.loading=true
        state.message=action.payload
    })
    .addCase("updateProductFail",(state,action)=>{
        state.loading=true
        state.error=action.payload
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


    
    .addCase("deleteImageProductRequest",(state,action)=>{
        state.loading=false
        state.message=action.payload
    })
    .addCase("deleteImageProductSuccess",(state,action)=>{
        state.loading=false
        state.message=action.payload
    })
    .addCase("deleteImageProductFail",(state,action)=>{
        state.loading=false
        state.error=action.payload
    })


    
    .addCase("deleteProductRequest",(state,action)=>{
        state.loading=false
    })
    .addCase("deleteProductSuccess",(state,action)=>{
        state.loading=false
        state.message=action.payload
    })
    .addCase("deleteProductFail",(state,action)=>{
        state.loading=false
        state.error=action.payload
    })
})