import {createReducer} from '@reduxjs/toolkit'
export const categoryReducer= createReducer({
    categories:[]
},(builder)=>{
    
    builder.addCase("getCategoryRequest",(state)=>{
        state.loading = true
    })
    .addCase("getCategorySuccess",(state,action)=>{
        state.loading=true
        state.categories=action.payload
    })
    .addCase("getCategoryFail",(state,action)=>{
        state.loading=false
        state.error=action.payload
    })
})