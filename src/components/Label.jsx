import React from 'react'

const Label = {}

const Bordered = ({ children }) => {
  return (
    <div className='py-2 px-4 rounded-full border border-blue-600 text-blue-600 w-max text-xs font-semibold center gap-2'>{children}</div>
  )
}

const Text = ({ children }) => {
  return (
    <div className='py-2 rounded-full text-gray-400 w-max text-sm font-semibold center gap-2'>{children}</div>
  )
}

Label.Bordered = Bordered
Label.Text = Text

export default Label