import {createReducer} from '@reduxjs/toolkit'
export const otherReducer= createReducer({},(builder)=>{
    
    builder.addCase("updatePasswordRequest",(state)=>{
        state.loading = true
    }).addCase("updatePasswordSuccess",(state,action)=>{
        state.loading=true
        state.message=action.payload.message
    }).addCase("updatePasswordFail",(state,action)=>{
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