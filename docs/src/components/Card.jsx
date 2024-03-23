import React from 'react'
import { FaRegFileLines } from "react-icons/fa6";
import { LuDownload } from "react-icons/lu";
export default function Card() {
  return (
    <div className="relative w-60 h-72 rounded-[20px]  bg-zinc-900/90 text-white py-10 overflow-hidden px-8">
      {/* //icon 
      //text 
      //footer - data, tag  */}
      <FaRegFileLines />
      <p className="text-xs mt-5 leading-tight font-semibold">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae, provident.</p>
      <div className="footer absolute bottom-0 w-full h-20 left-0 ">
        <div className='flex items-center justify-between py-3 px-8 mb-3'>
          <h5>.4mb</h5>
          <span className='w-8 h-8 bg-zinc-700 rounded-full flex items-center justify-center'> <LuDownload size=".7em" color='#fff'/></span>
        </div>

        <div className="tag  w-full h-20 bg-sky-200  py-4 ">
          
        </div>
      </div>

    </div>
  )
}
