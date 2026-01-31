import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './CounterSlice'
import userReducer from './UserSlice'
const storee = configureStore({
    reducer:{
        counter: counterReducer,
        user: userReducer
    }
})

export default storee;