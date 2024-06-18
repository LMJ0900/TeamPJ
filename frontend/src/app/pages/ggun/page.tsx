'use client'
import LoginBar from "@/components/common/module/login/login"
import JoinBar from "@/components/common/module/join/joinBar";
import { useState } from "react";
import JoinBack from "@/components/common/module/join/joinBack";
import { useRouter } from "next/navigation";
import { IUser } from "@/components/users/model/user.model";

export default function Main() {
    const [isLogin, setIsLogin] = useState(true);
    const [isAnimating, setIsAnimating] = useState(false);
    const router = useRouter();


    const handlePage = () => {
        setIsLogin(false);
        setIsAnimating(true);
    }
    const handlePage1 = () => {
        setIsLogin(true);
        setIsAnimating(false);
    }
    
    
    return (<>
        <div className="flex items-center justify-center bg-[--color-pebble-4] h-[100vh]">
            <div className=" relative mt-30">
                <div className="flex bg-white w-[50rem] h-[30rem] rounded-[10px] z-10 flex-row">
                    <div className="flex items-center flex-col w-[25rem] h-[30rem]">
                        <h2 className="mt-[3rem] ml-[3rem] text-[3rem] font-semibold text-[--color-pebble-2]">stock&<br /><p className="text-[--color-pebble-3]">Automatic</p></h2>
                        <h3 className="mt-[3rem]">주식꾼과 함께하세요</h3>
                        <button className="mt-[5rem] border-[--color-pebble-3] text-[--color-pebble-3] border-2 rounded-[20px] w-[7rem] h-[3rem]  font-semibold hover:text-[#872642]" onClick={handlePage1}>login</button>
                    </div>
                    <div className="flex items-center flex-col w-[25rem] h-[30rem]">
                        <h2 className="mt-[3rem]  text-[3rem] font-semibold text-[--color-pebble-3]">stock&<br /><p className="text-[--color-pebble-2]">Automatic</p></h2>
                        <h3 className="mt-[3rem]">나만의 주식꾼을 불러주세요</h3>
                        <button className="mt-[5rem] border-[--color-pebble-2] text-[--color-pebble-2] hover:text-[#872642] border-2 rounded-[20px] w-[7rem] h-[3rem]  font-semibold" onClick={handlePage}>Sign in</button>
                    </div>
                </div>
                <div className={`flex items-center absolute top-[-5rem] left-[1rem] h-[40rem] w-[23rem] bg-[--color-pebble-1] rounded-[10px] flex-col z-0 ${isAnimating ? "animate-[TransRight_1.5s_ease-in-out_forwards]" : "animate-[Transleft_1.5s_ease-in-out_forwards]"}`} id="LoginBack">
                    {isLogin ? <LoginBar /> : <JoinBar />}
                </div>
            </div>
        </div >

    </>)

}