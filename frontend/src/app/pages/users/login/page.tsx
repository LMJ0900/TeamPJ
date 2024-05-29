'use client'
import Clock from "react-live-clock";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { useRef, useState } from "react";
import {useForm, SubmitHandler} from "react-hook-form"
import { setCookie } from "nookies";
import { IUser } from "@/components/users/model/user.model";
import { getExistsByUsername } from "@/components/users/service/user.slice";
import { existsByUsername, login } from "@/components/users/service/user.service";


type Inputs = {
    question: string
    exampleRequired: string
  }

export default function LoginPage(){
    const [user, setUser] = useState({} as IUser)
    const dispatch = useDispatch()
    const router = useRouter();
    const [isWrongId, SetIsWrongId] = useState(false)
    const [isTrueId, SetIsTrueId] = useState(false)
    const [beforeSubmit, setBeforeSubmit] = useState(true)
    const [len, setLen] = useState('')
    const existUser = useSelector(getExistsByUsername)
    const formRef = useRef<HTMLInputElement>(null);

    const handleJoin =()=>{
        router.push('/pages/users/join')
    }
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
    const handlePassword = (e:any)=>{
       
    }


    const handleSubmit =()=>{
        dispatch(existsByUsername(user.username))
        .then((res:any)=>{
            if(res.payload === true){
                dispatch(login(user))
                .then((resp:any)=>{
                    setCookie({}, 'message', resp.payload.message, { httpOnly: false, path: '/' })
                    setCookie({}, 'accessToken', resp.payload.accessToken, { httpOnly: false, path: '/' })
                    router.push('/pages/boards/board')
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
      



    return(
        <div>
        <section className=" dark:bg-gray-900">
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <a href="#" className="flex items-center mb-6 text-2xl font-font2 text-gray-900 dark:text-white">
          <img className="w-8 h-8 mr-2 " src="https://e7.pngegg.com/pngimages/973/667/png-clipart-red-fox-logo-drawing-illustration-fox-watercolor-painting-mammal-thumbnail.png" alt="logo"></img>
          LoginPage    
      </a>
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8 bg-gradient-to-b from-white to-pink-100 outline outline-3 outline-offset-4 outline-purple-800 shadow hover:shadow-2xl">
              <h1 className="text-xl font-bold leading-tight tracking-tight font-font1 text-gray-900 md:text-2xl dark:text-white">
                  Sign in to your account
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">
                  <div>
                      <label htmlFor="email" className="mb-2 text-sm font-medium font-font1 text-gray-900 dark:text-white">Your email</label>
                      <input onChange={handleUsername} type="id" name="id" id="id" className="bg-gray-50 border  border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" ></input>
                  </div>
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
                  <div>
                      <label>Password</label>
                      <input onChange={handlePassword} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
                  </div>
                  <div className="flex items-center justify-between">
                      <div className="flex items-start">
                          <div className="flex items-center h-5">
                            <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"></input>
                          </div>
                          <div className="ml-3 text-sm">
                            <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                          </div>
                      </div>
                      <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                  </div>
                  <button type="submit"  onClick={handleSubmit} className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                      Don’t have an account yet? <button onClick={handleJoin} className="font-medium text-primary-600 hover:underline dark:text-primary-500">회원가입</button>
                  </p>
              </form>
          </div>
      </div>
  </div>
  <button onClick={handleJoin}>회원가입</button>
</section>
        </div>
    )
}

