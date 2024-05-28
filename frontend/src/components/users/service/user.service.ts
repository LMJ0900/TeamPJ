import { createAsyncThunk } from "@reduxjs/toolkit";
import { IUser } from "../model/user.model";
import { existsByUsernameAPI, loginAPI } from "./user.api";

export const login: any = createAsyncThunk(
'auth/login',
async (user:IUser) => await loginAPI(user)

)
export const existsByUsername: any = createAsyncThunk(
    'auth/exists-Username',
    async (username:string) => await existsByUsernameAPI(username)
    
    )