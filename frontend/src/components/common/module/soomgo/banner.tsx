'use client'

import { useState } from "react"

// const [count,setcount] = useState()


export default function Banner() {

    var img1= "https://static.cdn.soomgo.com/upload/banner/00c91f76-a76a-4bbd-b430-eff677bd8c3d.png?w=970&webp=1"
    var img2= "https://static.cdn.soomgo.com/upload/banner/eda82f6a-1a4c-4446-9267-60c290d0049c.png?w=970&webp=1"
    var img3= "https://static.cdn.soomgo.com/upload/banner/a4a7576a-4865-41af-9b52-1e60cb7c726b.png?w=970&webp=1"
    var img4= "https://static.cdn.soomgo.com/upload/banner/a598d5c9-6e6a-4a2e-b4dc-d781eef10160.png?w=970&webp=1"
    var img5= "https://static.cdn.soomgo.com/upload/banner/32fdb587-7562-4c41-8d43-1a87721b5120.png?w=970&webp=1"

    var imglist = [img1,img2,img3,img4,img5]

    const [isNext, setIsNext] = useState(imglist[1])
    const [count, setcount] = useState(1)

    const handleNext = () =>{
        if(isNext==imglist[1]){
            setIsNext(imglist[2])
            setcount(2)
        }else if(isNext==imglist[2])
            {
                setIsNext(imglist[3])
                setcount(3)
            }else if(isNext==imglist[3])
                {
                    setIsNext(imglist[4])
                    setcount(4)
                }else if(isNext==imglist[4])
                    {
                        setIsNext(imglist[5])
                        setcount(5)
                    }else {
                        setIsNext(imglist[1])
                        setcount(1)
                    }
    }

    const handleBack = () =>{
        if(isNext==imglist[5]){
            setIsNext(imglist[4])
            setcount(4)
        }else if(isNext==imglist[4])
            {
                setIsNext(imglist[3])
                setcount(3)
            }else if(isNext==imglist[3])
                {
                    setIsNext(imglist[2])
                    setcount(2)
                }else if(isNext==imglist[2])
                    {
                        setIsNext(imglist[1])
                        setcount(1)
                    }else {
                        setIsNext(imglist[5])
                        setcount(5)
                    }
    }
    return(<>
    <div className="banner flex justify-center">
    <div className="bannerSize flex justify-center w-[70rem] ">
            <button onClick={handleBack}>
                <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8ZGVmcz4KICAgICAgICA8ZmlsdGVyIHg9Ii0xMi41JSIgeT0iLTEwJSIgd2lkdGg9IjEyNSUiIGhlaWdodD0iMTI1JSIgZmlsdGVyVW5pdHM9Im9iamVjdEJvdW5kaW5nQm94IiBpZD0iYSI+CiAgICAgICAgICAgIDxmZU9mZnNldCBkeT0iMSIgaW49IlNvdXJjZUFscGhhIiByZXN1bHQ9InNoYWRvd09mZnNldE91dGVyMSIvPgogICAgICAgICAgICA8ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSIxLjUiIGluPSJzaGFkb3dPZmZzZXRPdXRlcjEiIHJlc3VsdD0ic2hhZG93Qmx1ck91dGVyMSIvPgogICAgICAgICAgICA8ZmVDb2xvck1hdHJpeCB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAuMiAwIiBpbj0ic2hhZG93Qmx1ck91dGVyMSIvPgogICAgICAgIDwvZmlsdGVyPgogICAgICAgIDxjaXJjbGUgaWQ9ImIiIGN4PSIyNCIgY3k9IjI0IiByPSIyMCIvPgogICAgPC9kZWZzPgogICAgPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8Zz4KICAgICAgICAgICAgPHVzZSBmaWxsPSIjMDAwIiBmaWx0ZXI9InVybCgjYSkiIHhsaW5rOmhyZWY9IiNiIi8+CiAgICAgICAgICAgIDx1c2UgZmlsbD0iI0ZGRiIgeGxpbms6aHJlZj0iI2IiLz4KICAgICAgICA8L2c+CiAgICAgICAgPHBhdGggZD0iTTEyIDEyaDI0djI0SDEyeiIvPgogICAgICAgIDxwYXRoIHN0cm9rZT0iIzg4OCIgc3Ryb2tlLXdpZHRoPSIxLjciIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgZD0ibTI2IDMxLTctNyA3LTciLz4KICAgIDwvZz4KPC9zdmc+Cg==" alt="버튼" />
            </button>
        <div className="rounded-xl relative">
        <img src={isNext} alt="배너로고" />
        <span className="bg-green-600 rounded-lg absolute bottom-[0rem] right-[0rem]">{count}/5</span>
        </div>
        <button className="fl" onClick={handleNext}>
                <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8ZGVmcz4KICAgICAgICA8ZmlsdGVyIHg9Ii0xMi41JSIgeT0iLTEwJSIgd2lkdGg9IjEyNSUiIGhlaWdodD0iMTI1JSIgZmlsdGVyVW5pdHM9Im9iamVjdEJvdW5kaW5nQm94IiBpZD0iYSI+CiAgICAgICAgICAgIDxmZU9mZnNldCBkeT0iMSIgaW49IlNvdXJjZUFscGhhIiByZXN1bHQ9InNoYWRvd09mZnNldE91dGVyMSIvPgogICAgICAgICAgICA8ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSIxLjUiIGluPSJzaGFkb3dPZmZzZXRPdXRlcjEiIHJlc3VsdD0ic2hhZG93Qmx1ck91dGVyMSIvPgogICAgICAgICAgICA8ZmVDb2xvck1hdHJpeCB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAuMiAwIiBpbj0ic2hhZG93Qmx1ck91dGVyMSIvPgogICAgICAgIDwvZmlsdGVyPgogICAgICAgIDxjaXJjbGUgaWQ9ImIiIGN4PSIyNCIgY3k9IjI0IiByPSIyMCIvPgogICAgPC9kZWZzPgogICAgPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8Zz4KICAgICAgICAgICAgPHVzZSBmaWxsPSIjMDAwIiBmaWx0ZXI9InVybCgjYSkiIHhsaW5rOmhyZWY9IiNiIi8+CiAgICAgICAgICAgIDx1c2UgZmlsbD0iI0ZGRiIgeGxpbms6aHJlZj0iI2IiLz4KICAgICAgICA8L2c+CiAgICAgICAgPHBhdGggZD0iTTEyIDEyaDI0djI0SDEyeiIvPgogICAgICAgIDxwYXRoIHN0cm9rZT0iIzg4OCIgc3Ryb2tlLXdpZHRoPSIxLjciIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgZD0ibTIyIDMxIDctNy03LTciLz4KICAgIDwvZz4KPC9zdmc+Cg==" alt="버튼" />
            </button>
    </div>
    </div>
    </>)
}