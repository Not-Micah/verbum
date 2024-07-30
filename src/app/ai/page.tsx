import React from 'react'
import Dialogue from '@/components/aiPageComponents/Dialogue'
import NavBar from '@/components/NavBar'
import StickyNote from '@/components/aiPageComponents/StickyNote'

const Page = () => {
  return (
    <div className="min-h-[100vh]">
      <div className='w-full max-[275px]:hidden'>
        <NavBar className='fixed top-0 left-0 right-0
        xl:w-[calc(100%-20rem)] lg:w-[calc(100%-16rem)] md:w-[calc(100%-12rem)] sm:w-[calc(100%-8rem)]
        mx-auto my-8 py-4
        bg-white/60 rounded-[15px] backdrop-blur-md shadow-md' />
        <div className="flex flex-row justify-center items-start px-8 gap-x-4
        max-lg:flex-col max-lg:gap-y-2">
          <div className="max-w-[400px] mt-[8rem] rounded-container
          max-lg:max-w-[100%] max-lg:w-full max-md:hidden">
            <StickyNote />
          </div>
          <div className="w-full mt-[8rem] max-lg:mt-[0rem] rounded-container h-[calc(100vh-10rem)]
          max-sm:mb-8 max-lg:mb-2 max-md:mt-32 max-sm:mt-2 max-sm:h-[calc(100vh-7.5rem)]">
            <Dialogue />
          </div>
        </div>
      </div>
      <div className="hidden max-[275px]:inline">
        <p className='px-4 bg-white'>Sorry, please log on a larger device to use our AI feature.</p>
      </div>
    </div>
  )
}

export default Page
