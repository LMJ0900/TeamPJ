'use client'

import { useState } from "react"

export default function JoinBack() {

    const [isLogin, setIsLogin] = useState(true);
    const handlePage = () => {
        setIsLogin(false);
    }

    return (<>
        <div className="flex bg-white w-[50rem] h-[30rem] rounded-[10px] z-10 flex-row">
            <div className="flex items-center flex-col w-[25rem] h-[30rem]">
                <h2 className="mt-[3rem] ml-[3rem] text-[3rem] font-semibold text-pink-300">stock&<br /><p className="text-purple-500">Automatic</p></h2>
                <h3 className="mt-[3rem]">주식꾼과 함께하세요</h3>
                <button className="mt-[5rem]">login</button>
            </div>
            <div className="flex items-center flex-col w-[25rem] h-[30rem]">
                <h2 className="mt-[3rem]  text-[3rem] font-semibold text-pink-300">stock&<br /><p className="text-purple-500">Automatic</p></h2>
                <h3 className="mt-[3rem]">나만의 주식꾼을 불러주세요</h3>
                <button className="mt-[5rem] border-purple-400 text-purple-400 border-2 rounded-[20px] w-[7rem] h-[3rem]  font-semibold" onClick={handlePage}>Sign in</button>
            </div>
        </div>
    </>)
}