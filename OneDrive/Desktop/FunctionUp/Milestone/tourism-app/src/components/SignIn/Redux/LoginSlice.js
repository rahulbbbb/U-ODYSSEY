import { createSlice } from "@reduxjs/toolkit";


const LoginSlice = createSlice({
    name: "login",
    initialState:{
        isLoggedIn: false,
    },
    reducers:{
        userLogin:(state, action)=> {
            state.isLoggedIn = action.payload;
        }
    }
});

export const { userLogin } = LoginSlice.actions;
export default LoginSlice.reducer;