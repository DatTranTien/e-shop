import {createReducer} from '@reduxjs/toolkit'
export const otherReducer= createReducer({},(builder)=>{
    
    builder.addCase("updatePasswordRequest",(state)=>{
        state.loading = true
    }).addCase("updatePasswordSuccess",(state,action)=>{
        state.loading=true
        state.message=action.payload.message
    })
    .addCase("updatePasswordFail",(state,action)=>{
        state.loading=true
        state.error=action.payload
    })



    builder.addCase("orderRequest",(state)=>{
        state.loading = true
    }).addCase("orderSuccess",(state,action)=>{
        state.loading=true
        state.message=action.payload.message
    })
    .addCase("orderFail",(state,action)=>{
        state.loading=true
        state.error=action.payload
    })



    builder.addCase("orderOnlineRequest",(state)=>{
        state.loading = true
    }).addCase("orderOnlineSuccess",(state,action)=>{
        state.loading=true
        state.message=action.payload.message
    })
    .addCase("orderOnlineFail",(state,action)=>{
        state.loading=true
        state.error=action.payload
    })



    builder.addCase("getOrderRequest",(state)=>{
        state.loading = true
    }).addCase("getOrderSuccess",(state,action)=>{
        state.loading=true
        console.log("action.payload--->",action.payload)
        state.orders=action.payload
    })
    .addCase("getOrderFail",(state,action)=>{
        state.loading=true
        state.error=action.payload
    })


    

    builder.addCase("updateProfileRequest",(state)=>{
        state.loading = true
    }).addCase("updateProfileSuccess",(state,action)=>{
        state.loading=true
        state.message=action.payload.message
    }).addCase("updateProfileFail",(state,action)=>{
        state.loading=true
        state.error=action.payload
    })
    
    builder.addCase("updatePicRequest",(state)=>{
        state.loading = true
    }).addCase("updatePicSuccess",(state,action)=>{
        state.loading=true
        state.message=action.payload.message
    }).addCase("updatePicFail",(state,action)=>{
        state.loading=true
        state.error=action.payload
    })

    builder.addCase("clearMessage",(state,action)=>{
        state.message=null
    })
    builder.addCase("clearError",(state,action)=>{
        state.error=null
    })
})