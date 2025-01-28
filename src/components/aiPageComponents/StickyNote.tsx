import React from 'react'

const StickyNote = () => {
  return (
    <div className="flex flex-col gap-y-2">
      <div className="w-full px-4 py-2 bg-amber-50/80 backdrop-blur-sm
      text-amber-700 text-sm text-left rounded-md border-b border-amber-200">
      This AI assistant is specifically designed for Christian-related questions only.
      </div>
      <div className="w-full px-4 py-2 bg-green-50/80 backdrop-blur-sm
      text-green-700 text-sm text-left rounded-md border-b border-green-200">
      Our AI is sourced off the Gemini API. Due to certain rules, some questions may be filtered out.
      </div>
    </div>
  )
}

export default StickyNote