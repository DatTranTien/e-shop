import { userReducer } from "./reducers/userReducer"
import {configureStore} from '@reduxjs/toolkit'
import { otherReducer } from "./reducers/otherReducer"
export const store = configureStore({
    reducer:{
        user:userReducer,
        other:otherReducer
    }
})
export const server = "https://myshop-11m9.onrender.com/api/v1"