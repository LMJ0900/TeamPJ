'use client'

import { useEffect } from "react";
import {Pagination } from "@mui/material";
import { useRouter } from "next/navigation";
import NavbarHeader from "@/components/common/module/navbarHeader";
import Search from "@/components/common/module/searchBar";
import ClockPage from "@/components/common/module/clock";
import Card from "@/components/common/module/card";
import TableList from "@/components/users/module/colums";



export default function Home() {

    const router = useRouter();
    const handleChart = (()=>{
        router.push('/pages/chart')
    })
    const handleLogin = (()=>{
        router.push('/pages/users/login')
    })

    useEffect(() => {
           
    }, [])

    return (
    <div>
        
        <NavbarHeader/>
        <Search/>
        <ClockPage/>
        <h2 className="border-solid border-2 text-yellow-500" > 테이블2</h2>
        <Card/>
            <div className="h-dvh w-dvw flex justify-center items-center">
        <table className=" border-solid border-black-2 w-1/2 text-sm text-center text-green-500 dark:text-gray-400 ">
            <thead className="text-xs text-red-700 uppercase bg-gray-50 ">
                <tr>
                    <th scope="col" className="px-4 py-3 border-l-2 border-t-2 border-red-600">번호</th>
                    <th scope="col" className="px-4 py-3 border-x-2 border-t-2 border-red-600">제목</th>
                    <th scope="col" className="px-4 py-3 border-t-2 border-red-600">작성자</th>
                    <th scope="col" className="px-4 py-3 border-t-2 border-x-2 border-red-600">조회
                    </th>
                </tr>
            </thead>
            <tbody>
                {TableList.map((i) => (
                    <tr key={i.id}>
                        <td className="px-4 py-3 border-solid hover:border-dotted border-2 border-indigo-600 ring-offset-4 ring-2 ring-blue-600 ring-inset bg-white" >{i.id}</td>
                        <td className="border-solid  hover:border-dotted border-2 border-indigo-600 ring-offset-4 ring-2 ring-red-600 ring-inset  bg-white">{i.title}</td>
                        <td className="border-solid border-2 border-indigo-600 hover:border-dotted ring-offset-4 ring-2 ring-green-600 ring-inset  bg-white">{i.writer}</td>
                        <td className="border-solid border-2 border-indigo-600 hover:border-dotted ring-offset-4 ring-2 ring-orange-600 ring-inset  bg-white">{i.road}</td>
                    </tr>
                ))
                
                }
               
            </tbody>
            <tfoot>
                <tr>
                    <td colSpan={4}>
                        <div className="flex items-center bg-gray-200">
                    <Pagination count={10} color="secondary" />
                    </div>
                    </td>
                </tr>
            </tfoot>
        </table>
        </div>
        <button onClick={handleChart}> 다음페이지 </button><br />
        <button onClick={handleLogin}> 로그인페이지</button>
    </div>
    
    )
}