import React from 'react'
import { CiMoneyBill } from "react-icons/ci"
import { AiTwotoneLock } from "react-icons/ai"

const Stamp = ({ title, value, icon }) => {
  return (
    <div className='border border-gray-300 rounded-lg px-4 py-4 gap-10 flex flex-col'>
        <h1 className='text-sm font-semibold text-gray-700'>Property Price</h1>
        <div className='flex justify-between items-center'>
            <p className='text-2xl font-bold'>725,000 USD</p>
            <span className='text-gray-400'>
                {icon || <CiMoneyBill size={36} />}
            </span>
        </div>
    </div>
  )
}

const Text = ({ title, value, icon }) => {
    return (
        <div className=' px-4 py-4 gap-6 flex flex-col'>
        <h1 className='font-semibold text-gray-700 text-xs'>Initial Amount</h1>
        <div className='flex justify-between items-center ml-5'>
            <p className='text-sm text-red-700 font-light'>USD 725,000</p>
            <span className='text-gray-400'>
                {icon || <AiTwotoneLock color='black' size={20} />}
            </span>
        </div>
    </div>
    )
}

Stamp.Text = Text

export default Stamp