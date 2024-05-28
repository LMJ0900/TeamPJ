import instance from "../../common/configs/axios-config"
import { IUser } from "../model/user.model"

export const loginAPI= async (user:IUser) => {
    console.log(`로그인 api에 넘어온 파라미터 : ${JSON.stringify(user)}`)
    try{
        const response = await instance().post('/auth/login', user)
        console.log("로그인 api" + response.data)
        return response.data
    }catch(error){
        console.log(error)
        return error
    }
}
export const existsByUsernameAPI= async (username:string) => {
    console.log(`existsByUsernameAPI 확인 : ${JSON.stringify(username)}`)
    try{
        const response = await instance().get('/auth/exists-Username', {params: {username}})
        console.log("existsByUsername api" + response.data)
        return response.data
    }catch(error){
        console.log(error)
        return error
    }
}