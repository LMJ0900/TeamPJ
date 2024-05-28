import { createSlice } from "@reduxjs/toolkit";
import { existsByUsername, login } from "./user.service";


const status ={
    pending: 'pending',
    fullfilled: 'fullfilled',
    rejected: 'rejected'
}

interface IAuth{
    message?: string
    token?: string
}

interface UserState  {
    auth? : IAuth
}
export const initialState:UserState = {
    auth: {} as IAuth
}

export const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {},
    extraReducers: builder => {
        const{pending, rejected} = status;

        builder
        .addCase(login.fulfilled, (state: any, {payload}: any) =>{state.auth = payload})
        .addCase(existsByUsername.fulfilled, (state: any, {payload}: any) =>{state.existsByUsername = payload})
    }
})

export const getLogin = (state:any) => {
    return state.user.auth;
}
export const getExistsByUsername = (state: any) => {
    return state.user.existsByUsername;
}

export const {} = userSlice.actions

export default userSlice.reducer;