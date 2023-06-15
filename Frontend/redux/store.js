import { userReducer } from "./reducers/userReducer"
import {configureStore} from '@reduxjs/toolkit'
import { otherReducer } from "./reducers/otherReducer"
import { productReducer } from "./reducers/productReducer"
import { categoryReducer } from "./reducers/categoryReducer"
import { cartReducer } from "./reducers/cartReducer"
export const store = configureStore({
    reducer:{
        user:userReducer,
        other:otherReducer,
        product:productReducer,
        categories:categoryReducer,
        cart: cartReducer
    }
})
export const server = "https://myshop-11m9.onrender.com/api/v1"