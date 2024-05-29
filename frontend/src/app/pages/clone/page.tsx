import Button1 from "@/components/common/module/button"

import "@/app/pages/clone/style.css"
export default function Clone(){
    return(<>
    <div className="flex bg-white text-black top-0 py-3 flex-wrap justify-around bg-silver text-2xl">
        <head>
            <title>가비아 클론코딩</title>
        </head>  
        <h1 className="text-blue-600 font-semibold">gabia.commerce</h1>
        <ul className="flex gap-[30px]">
          <li>쇼핑몰 창업</li>
          <li>AI 에디터</li>
          <li>제작 운영 의뢰</li>
          <li>오픈마켓 판매</li>
          <li>해외 진출</li>
          <li>광고 마케팅</li>
        </ul>
    </div>
    <div className="my-8">
    <img src="https://www.gabiacns.com/storage/cms/banner/202404/banner_20240403164039.png" alt="" />
    </div>
    <div className="my-28">
    <div className="flex justify-center text-3xl font-bold">가비아커머스와 함께하는 즐거운 디지털 세상</div>
    <div className="flex justify-center text-3xl font-bold">지금 바로 경험해보세요</div>
    </div>
    <span className="flex justify-center">
    <button id="button1" className="inline-block bg-blue-600 w-40 h-40 my-20 ml-20 rounded-full  hover:bg-white"></button>
    <button id="button2" className="inline-block bg-blue-600 w-40 h-40 my-20 ml-20 rounded-full  hover:bg-white"></button>
    <button id="button3" className="inline-block bg-orange-400 w-40 h-40 my-20 ml-20 rounded-full  hover:bg-white"></button>
    <button id="button4" className="inline-block bg-green-400 w-40 h-40 my-20 ml-20 rounded-full  hover:bg-white"></button>
    </span>
    </>)
}