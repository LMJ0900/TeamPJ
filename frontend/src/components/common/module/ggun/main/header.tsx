'use client'

import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();
    return(<>
    <div className="flex items-center bg-[--color-pebble-1] text-white w-full h-[4.5rem]">
        <div className="mb-5">
        <a href="#" className="text-[3rem] font-semibold ml-[4rem]" >ggun</a>
        </div>
        <ul className="flex gap-[3rem] ml-[5rem] cursor-pointer text-[1rem]">
          <li><a href="/pages/ggun/creAccount" className="hover:text-[--color-pebble-3]">계좌개설</a></li>
          <li><a href="/pages/ggun/account" className="hover:text-[--color-pebble-3]">나의계좌</a></li>
          <li><a href="#" className="hover:text-[--color-pebble-3]">머시기</a></li>
          <li><a href="#" className="hover:text-[--color-pebble-3]">머가들어감</a></li>
          <li><a href="#" className="hover:text-[--color-pebble-3]">계좌개설</a></li>
        </ul>
      </div>
   </>)
    }