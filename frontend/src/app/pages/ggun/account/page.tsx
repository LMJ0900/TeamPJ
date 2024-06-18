'use client'
import { useState } from 'react';
import Account from "@/components/common/pages/account";
import History from "@/components/common/pages/history";
import "@/app/pages/ggun/account/accountstyle.css";
import Header from '@/components/common/module/ggun/main/header';

export default function Accout(){
    const [isAccount,setIsAccount] = useState(false);
    const [isHistory,setIsHistory] = useState(false);
    const handleAccount = ()=>{
        setIsAccount(true);
        setIsHistory(false);
    }
    const handleHistory = ()=>{
        setIsHistory(true);
        setIsAccount(false);
    }
    return(<>
     <div>
        <head>
            <title>내 계좌 관리</title>
        </head>  
        <Header></Header>
    </div>
    
    <div className='' id='bar'>
    <hr className=""/>
    <div className="text-4xl font-bold my-28 ml-72 text-pink-200">ai투자안내</div>
    <div className="text-2xl mt-28 ml-72 h-24 text-pink-200">여러분의 자금을 안전하게 관리해주는 ai계좌 서비스입니다</div>
    </div>
    <hr className="border-purple-800 border-2"/>
    <div className="ml-72 ">
    <button className="border-gray-200 border-2" onClick={handleAccount} >{isAccount ?  <button className="border-purple-800 border-2">계좌관리</button>:"계좌관리"}</button>
    <button className="border-gray-200 border-2" onClick={handleHistory} >{isHistory ?  <button className="border-purple-800 border-2">거래내역</button>:"거래내역"}</button>
    </div>
    {isAccount ? <Account/> : <History/>}
    </>)
}
