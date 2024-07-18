import React from 'react'
import Dialogue from '@/components/aiPageComponents/Dialogue'
import NavBar from '@/components/NavBar'
import StickyNote from '@/components/aiPageComponents/StickyNote'

const page = () => {
  return (
  <div className="">
    <div className='w-full max-[275px]:hidden'>
      <NavBar className='fixed top-0 left-0 right-0
      xl:w-[calc(100%-20rem)] lg:w-[calc(100%-16rem)] md:w-[calc(100%-12rem)] sm:w-[calc(100%-8rem)]
      mx-auto my-8 py-4
      bg-white/60 rounded-[15px] backdrop-blur-md shadow-md' />
      <div className="flex flex-row justify-center items-start px-8 gap-x-14">
        <StickyNote />
        <Dialogue />
      </div>
    </div>
    <div className="hidden max-[275px]:inline">
      <p className='px-4 bg-white'>Sorry, please log on a larger device to use our AI feature.</p>
    </div>
  </div>
  )
}

export default page