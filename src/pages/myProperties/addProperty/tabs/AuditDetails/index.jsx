import React from 'react'

export default function AuditDetails({ setActiveTab }) {
    return (
        <div className='flex flex-col gap-5'>

            <div className='flex flex-col gap-1'>
                <label htmlFor='name' className='font-medium'>Audit Text</label>
                <input
                    type='text'
                    id='name'
                    className='p-2 bg-[#f7fbff] border-2 border-[#ebeff3] outline-secondary rounded-lg' />
            </div>

            <div className='flex flex-col gap-1'>
                <label htmlFor='value' className='font-medium'>Property Value</label>
                <div className='flex bg-[#f7fbff] border-2 border-[#ebeff3] hover:border-secondary rounded-lg'>
                    <span className='flex-1 flex justify-center items-center border-r'>
                        <img
                            src='/src/assets/dollar.png'
                            alt='dollar'
                            className='w-3 h-5'
                        />
                    </span>
                    <div className='flex-[10] flex'>
                        <input
                            type='number'
                            id='value'
                            className='flex w-full p-2 bg-[#f7fbff] outline-none' />
                    </div>
                </div>

            </div>

            <div className='flex flex-col gap-1'>
                <label htmlFor='value' className='font-medium'>Dividend Yield</label>
                <div className='flex bg-[#f7fbff] border-2 border-[#ebeff3] hover:border-secondary rounded-lg'>
                    <div className='flex-[10] flex'>
                        <input
                            type='number'
                            id='value'
                            className='flex w-full p-2 bg-[#f7fbff] outline-none' />
                    </div>

                    <span className='flex-1 flex justify-center items-center border-l'>
                        <img
                            src='/src/assets/percent.png'
                            alt='dollar'
                            className='w-4 h-4'
                        />
                    </span>
                </div>

            </div>

            <div className='flex flex-col gap-1'>
                <label htmlFor='value' className='font-medium'>Current Rent Amount</label>
                <div className='flex bg-[#f7fbff] border-2 border-[#ebeff3] hover:border-secondary rounded-lg'>
                    <span className='flex-1 flex justify-center items-center border-r'>
                        <img
                            src='/src/assets/dollar.png'
                            alt='dollar'
                            className='w-3 h-5'
                        />
                    </span>
                    <div className='flex-[10] flex'>
                        <input
                            type='number'
                            id='value'
                            className='flex w-full p-2 bg-[#f7fbff] outline-none' />
                    </div>
                </div>

            </div>

            <div className='flex flex-col gap-1'>
                <label htmlFor='value' className='font-medium'>Expected Returns</label>
                <div className='flex bg-[#f7fbff] border-2 border-[#ebeff3] hover:border-secondary rounded-lg'>
                    <div className='flex-[10] flex'>
                        <input
                            type='number'
                            id='value'
                            className='flex w-full p-2 bg-[#f7fbff] outline-none' />
                    </div>

                    <span className='flex-1 flex justify-center items-center border-l'>
                        <img
                            src='/src/assets/percent.png'
                            alt='dollar'
                            className='w-4 h-4'
                        />
                    </span>
                </div>

            </div>

            <div className='flex flex-col gap-1'>
                <label htmlFor='propertyType' className='font-medium'>Dividend Frequency</label>
                <select
                    id='propertyType'
                    className='py-2 bg-[#f7fbff] border-2 border-[#ebeff3] outline-secondary rounded-lg'>
                    <option value=''>Select Frequency</option>
                    <option value=''>Monthly</option>
                    <option value=''>Yearly</option>
                    <option value=''>Daily</option>
                </select>
                <div>
                </div>
            </div>
            <div className='mt-10 flex justify-end items-center'>
                <button
                    onClick={() => setActiveTab('NFTsDetails')}
                    className='p-2 w-60 cursor-pointer bg-primary text-white font-medium text-xl text-center rounded-lg'
                >
                    Next
                </button>
            </div>
        </div>
    )
}
