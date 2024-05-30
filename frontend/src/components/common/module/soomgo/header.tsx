export default function Header() {
    return(<>
    <div className="flex  text-white top-0 py-3 fixed w-full">
        <h1 className="mt-4 text-xl text-green-800 font-semibold " >soomgo</h1>
        <ul className="mt-4 flex gap-[3rem] text-black ml-12 cursor-pointer text-xl">
          <li><a href="#" className="font-semibold">견적요청</a></li>
          <li><a href="#" className="font-semibold">고수찾기</a></li>
          <li><a href="#" className="font-semibold">마켓</a></li>
          <li><a href="#" className="font-semibold">커뮤니티</a></li>
        </ul>
        <ul className="flex justify-end gap-[3rem] text-black ml-40 cursor-pointer text-base">
            <li className="mt-4"><a href="#" >로그인</a></li>
            <li className="mt-4"><a href="">회원가입</a></li>
            <li><button className="bg-green-600 rounded-xl w-20 h-12">고수가입</button></li>
        </ul>
      </div>
   </>)
    }