import React from 'react'

export default function Background() {
  return (
    <>

      <div className="fixed w-full h-screen z-[2]">
        <div className='w-full py-10 flex justify-center text-zinc-600 font-semibold text-xl absolute top-[5%]'>
          Documents.
        </div>
        <h1 className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] font-semibold text-zinc-900  text-[10vw] leading-none tracking-tighter'>Docs.</h1>
      </div>



    </>
  )
}
