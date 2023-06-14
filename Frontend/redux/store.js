import { userReducer } from "./reducers/userReducer"
import {configureStore} from '@reduxjs/toolkit'
import { otherReducer } from "./reducers/otherReducer"
import { productReducer } from "./reducers/productReducer"
import { categoryReducer } from "./reducers/categoryReducer"
export const store = configureStore({
    reducer:{
        user:userReducer,
        other:otherReducer,
        product:productReducer,
        categories:categoryReducer,
    }
})
export const server = "https://myshop-11m9.onrender.com/api/v1"