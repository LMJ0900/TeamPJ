'use client'
import { IUser } from "@/components/users/model/user.model";
import { existsByUsername, login } from "@/components/users/service/user.service";
import { getExistsByUsername } from "@/components/users/service/user.slice";
import { useRouter } from "next/navigation";
import { setCookie } from "nookies";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function LoginBar(){
    const [user, setUser] = useState({} as IUser)
    const dispatch = useDispatch()
    const router = useRouter();
    const [isWrongId, SetIsWrongId] = useState(false)
    const [isTrueId, SetIsTrueId] = useState(false)
    const [beforeSubmit, setBeforeSubmit] = useState(true)
    const [len, setLen] = useState('')
    const existUser = useSelector(getExistsByUsername)
    const formRef = useRef<HTMLInputElement>(null);

    const handleUsername = (e:any)=>{
        const ID_CHECK =/^[a-zA-Z][a-zA-Z0-9]{2,15}$/g
        // 영어 대소문자로 시작하는 6~20자의 영어 소문자와 뜨는 숫자 
        setLen(e.target.value)
        setBeforeSubmit(true)
        if(ID_CHECK.test(e.target.value)){
            SetIsWrongId(false)
            SetIsTrueId(true)
      
          } else{
            SetIsWrongId(true)
            SetIsTrueId(false)
          }
          setUser({
            ...user,
            username: e.target.value
          })
    }
    const handleSubmit =()=>{
        dispatch(existsByUsername(user.username))
        .then((res:any)=>{
            if(res.payload === true){
                dispatch(login(user))
                .then((resp:any)=>{
                    setCookie({}, 'message', resp.payload.message, { httpOnly: false, path: '/' })
                    setCookie({}, 'accessToken', resp.payload.accessToken, { httpOnly: false, path: '/' })
                    router.push('/pages/ggun/main')
                })
                .catch((err: any)=>{
                    console.log('로그인 실패')
                  })
            }else{
                console.log('아이디가 존재하지 않습니다')
                console.log('아이디 확인 : ' + existUser)
                SetIsWrongId(false)
                SetIsTrueId(false)
                setBeforeSubmit(false)
              }
        })
        //이해 안되는 부분
        .catch((err:any)=>{
            console.log('catch 로직 err 발생 :' + `${err}`)
          })
        
          .finally(()=>{
            console.log('최종적으로 반드시 이뤄져야 할 로직')
          })
           //dispatch(login(user))
           SetIsWrongId(false)
           SetIsTrueId(false)
           setBeforeSubmit(false)
           if(formRef.current){
            formRef.current.value = "";
           }
        }

    return(<>
        <h2 className="mt-24 text-white text-[3rem]">Login</h2>
        <div className="mt-20 flex items-center flex-col gap-3">
        <input className="border-b-2 bg-inherit w-[16rem] h-[3rem]" onChange={handleUsername} type="id" name="id" id="id" placeholder="username" ></input>
        {isWrongId && len?.length > 1 && (<pre>
              <h6 className = 'text-red-500'>
                잘못된 아이디 형식입니다.
              </h6>
            </pre>)}
            {isTrueId && len?.length > 1 && (<pre>
              <h6 className = 'text-blue-500'>
                올바른 아이디 형식입니다.
              </h6>
            </pre>)}
            {!beforeSubmit && !existUser && (<pre>
              <h6 className='text-red-500' >
                존재하지 않는 아이디 입니다.
              </h6>
            </pre>)}
        <input className="border-b-2 bg-inherit w-[16rem] h-[3rem]" type="password" name="id" id="id" placeholder="password" ></input>
        <button type="submit" onClick={handleSubmit} className="mt-24 border-white border-2 rounded-[20px] w-[7rem] h-[3rem] text-white font-semibold">Login</button>
        </div>
    </>)
}