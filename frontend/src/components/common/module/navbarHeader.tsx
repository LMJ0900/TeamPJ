export default function NavbarHeader() {
    return(<>
    <div className="flex bg-purple-800 text-white top-0 py-3 fixed w-full">
        <h1 className="text-2xl font-semibold ml-16" >Todo app</h1>
        <ul className="flex gap-[40px] ml-40 cursor-pointer text-2xl">
          <li><a href="#" className="hover:text-pink-600">금융</a></li>
          <li><a href="#" className="hover:text-pink-600">주식</a></li>
          <li><a href="#" className="hover:text-pink-600">계좌</a></li>
          <li><a href="#" className="hover:text-pink-600">거래</a></li>
        </ul>
      </div>
   </>)
    }