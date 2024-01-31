import React from 'react'

export default function AuditDetails({ setActiveTab, register }) {
    return (
        <div className='flex flex-col gap-5'>

            <div className='flex flex-col gap-1'>
                <label htmlFor='auditText' className='font-medium'>Audit Text</label>
                <input {...register('auditText')}
                    type='text'
                    id='auditText'
                    className='p-2 bg-[#f7fbff] border-2 border-[#ebeff3] outline-primary rounded-lg' />
            </div>

            <div className='flex flex-col gap-1'>
                <label htmlFor='value' className='font-medium'>Property Value</label>
                <div className='flex bg-[#f7fbff] border-2 border-[#ebeff3] hover:border-primary rounded-lg'>
                    <span className='flex-1 flex justify-center items-center border-r'>
                        <img
                            src='/dollar.png'
                            alt='dollar'
                            className='w-3 h-5'
                        />
                    </span>
                    <div className='flex-[10] flex'>
                        <input {...register('propertyValueAdded')}
                            type='number'
                            id='value'
                            className='flex w-full p-2 bg-[#f7fbff] outline-none' />
                    </div>
                </div>

            </div>

            <div className='flex flex-col gap-1'>
                <label htmlFor='value' className='font-medium'>Dividend Yield</label>
                <div className='flex bg-[#f7fbff] border-2 border-[#ebeff3] hover:border-primary rounded-lg'>
                    <div className='flex-[10] flex'>
                        <input {...register('dividendYield')}
                            type='number'
                            id='value'
                            className='flex w-full p-2 bg-[#f7fbff] outline-none' />
                    </div>

                    <span className='flex-1 flex justify-center items-center border-l'>
                        <img
                            src='/percent.png'
                            alt='dollar'
                            className='w-4 h-4'
                        />
                    </span>
                </div>

            </div>

            <div className='flex flex-col gap-1'>
                <label htmlFor='value' className='font-medium'>Current Rent Amount</label>
                <div className='flex bg-[#f7fbff] border-2 border-[#ebeff3] hover:border-primary rounded-lg'>
                    <span className='flex-1 flex justify-center items-center border-r'>
                        <img
                            src='/dollar.png'
                            alt='dollar'
                            className='w-3 h-5'
                        />
                    </span>
                    <div className='flex-[10] flex'>
                        <input {...register('currentRentAmount')}
                            type='number'
                            id='value'
                            className='flex w-full p-2 bg-[#f7fbff] outline-none' />
                    </div>
                </div>

            </div>

            <div className='flex flex-col gap-1'>
                <label htmlFor='value' className='font-medium'>Expected Returns</label>
                <div className='flex bg-[#f7fbff] border-2 border-[#ebeff3] hover:border-primary rounded-lg'>
                    <div className='flex-[10] flex'>
                        <input {...register('expectedReturns')}
                            type='number'
                            id='value'
                            className='flex w-full p-2 bg-[#f7fbff] outline-none' />
                    </div>

                    <span className='flex-1 flex justify-center items-center border-l'>
                        <img
                            src='/percent.png'
                            alt='dollar'
                            className='w-4 h-4'
                        />
                    </span>
                </div>

            </div>

            <div className='flex flex-col gap-1'>
                <label htmlFor='propertyType' className='font-medium'>Dividend Frequency</label>
                <select {...register('dividendFrequency')}
                    id='propertyType'
                    className='py-2 bg-[#f7fbff] border-2 border-[#ebeff3] outline-primary rounded-lg'>
                    <option value='Yearly'>Yearly</option>
                    <option value='Monthly'>Monthly</option>
                    <option value='Weekly'>Weekly</option>
                    <option value='Daily'>Daily</option>
                </select>
                <div>
                </div>
            </div>
            <div className='mt-10 flex justify-end items-center'>
                <button
                    type='button'
                    onClick={() => setActiveTab('NFTsDetails')}
                    className='p-2 w-60 cursor-pointer bg-primary text-white font-medium text-xl text-center rounded-lg'
                >
                    Next
                </button>
            </div>
        </div>
    )
}
