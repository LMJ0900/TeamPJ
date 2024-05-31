'use client'
import { useState } from 'react';
import Account from "@/components/common/pages/account";
import History from "@/components/common/pages/history";
import "@/app/pages/account/accountstyle.css";

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
     <div className="flex bg-white text-black top-0 py-3 flex-wrap justify-around bg-silver text-2xl">
        <head>
            <title>내 계좌 관리</title>
        </head>  
        <h1 className="text-purple-800 font-semibold">ggun</h1>
        <ul id="header" className="flex gap-[30px]">
          <li>고민중</li>
          <li>계좌</li>
          <li>실시간 호가차트</li>
          <li>AI</li>
          <li>경제뉴스</li>
          <li>마이페이지</li>
        </ul>
    </div>
    
    <div className='' id='bar'>
    <hr className="my-5"/>
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
