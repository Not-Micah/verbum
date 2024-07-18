import React from 'react'

const StickyNote = () => {
  return (
    <div className='max-w-[500px] w-full bg-gray-200/50 rounded-md p-4 mt-32
    flex flex-col gap-y-2
    max-xl:max-w-[400px] max-lg:max-w-[250px] max-md:hidden'>
        <h3 className='font-semibold uppercase'>Notice Board</h3>
        <p className='bg-soft-purple/30 p-4 rounded-lg'>Our AI is sourced off the Gemini API with settings that allow generations best suited for you.</p>
        <p className='bg-soft-purple/30 p-4 rounded-lg'>Try typing a common question and what our AI answer it with confidence and evidenc!</p>
    </div>
  )
}

export default StickyNote