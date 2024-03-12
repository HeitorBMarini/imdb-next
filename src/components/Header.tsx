import React from "react";
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import Link from 'next/link'
import DarkMode from "./DarkMode";


export default function Header() {
  return (
    <main className="flex justify-between items-center p-3 
    max-w-6xl mx-auto">
      <div className="flex gap-4">
        <div>
          <h1 className="  uppercase hidden sm:inline text-sm cursor-pointer hover:text-amber-500">
            Home{" "}
          </h1>
          <AiFillHome className="text-2xl sm:hidden hover:text-amber-500
          " />
        </div>

        <div>
          <h1 className=" uppercase hidden sm:inline text-sm cursor-pointer  hover:text-amber-500">
            About{" "}
          </h1>
          <BsFillInfoCircleFill className="text-2xl sm:hidden hover:text-amber-500" />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <DarkMode/>
      <Link href={'/'} className="flex gap-1 items-center">
        
        <span className="text-2xl font-bold bg-amber-500 py-1 px-2 
        rounded-lg">IMDb</span>
        <span className="text-xl hidden sm:inline">Clone</span>
      </Link>
      </div>
      
    </main>
  );
}
