import { configureStore } from "@reduxjs/toolkit";
import LoginReducer from './LoginSlice';

const store = configureStore({
    reducer:{
        login: LoginReducer
    }
});

export default store;