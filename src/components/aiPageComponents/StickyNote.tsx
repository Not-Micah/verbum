import React from 'react'

const StickyNote = () => {
  return (
    <div className='w-full rounded-md py-4
    flex flex-col gap-y-2'>
        <h3 className='font-semibold uppercase'>Notice Board</h3>
        <p className='bg-soft-purple/30 p-4 rounded-lg shadow-sm'>Our AI is sourced off the Gemini API with settings that allow generations best suited for you.</p>
        <p className='bg-soft-purple/30 p-4 rounded-lg shadow-sm'>Due to certain Gemini rules, many questions will be filtered out.</p>
    </div>
  )
}

export default StickyNote