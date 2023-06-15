import {createReducer} from '@reduxjs/toolkit'
export const cartReducer= createReducer({
    cartItems:[]
},(builder)=>{
    builder.addCase("addToCart",(state,action)=>{
        console.log("action.payload",action.payload)
       const item = action.payload
       const isExist = state.cartItems.find((i)=>i.product===item.product)
    let newArr=[...state.cartItems]
       
       if (isExist) {
        state.cartItems.map((i,index)=> 
        {
            if (i.product === isExist.product) {
                newArr.splice(index,1,item)
            }
        }
        )
        state.cartItems = [...newArr]
       } else {
        state.cartItems.push(item)
       }
    })
    .addCase("removeFromCart",(state,action)=>{
        const id = action.payload
        state.cartItems = state.cartItems.filter((i)=>i.product!==id)
    })
    .addCase("clearCart",(state,action)=>{
        state.cartItems = []
    })
})