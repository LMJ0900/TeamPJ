import Button1 from "@/components/common/module/button"
import "@/app/pages/ggun/ggunstyle.css"
export default function Clone(){
    return(<>
    <div className="flex bg-white text-black top-0 py-3 flex-wrap justify-around bg-silver text-2xl">
        <head>
            <title>메인페이지</title>
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
    <div className="my-8">
    <img src="https://www.gabiacns.com/storage/cms/banner/202404/banner_20240403164039.png" alt="" />
    </div>
    <div className="my-28">
    <div className="flex justify-center text-3xl font-bold">주식꾼과 함께하는 자동 매도 매수 주식투자</div>
    <div className="flex justify-center text-3xl font-bold">지금 바로 경험해보세요</div>
    </div>
    <span className="flex justify-center">
    <button id="button1" className="inline-block bg-blue-600 w-40 h-40 my-20 ml-20 rounded-[30px]  hover:bg-white"></button>
    <button id="button2" className="inline-block bg-pink-400 w-40 h-40 my-20 ml-20 rounded-[30px]  hover:bg-white"></button>
    <button id="button3" className="inline-block bg-orange-400 w-40 h-40 my-20 ml-20 rounded-[30px]  hover:bg-white"></button>
    <button id="button4" className="inline-block bg-green-400 w-40 h-40 my-20 ml-20 rounded-[30px]  hover:bg-white"></button>
    </span>
    </>)
}