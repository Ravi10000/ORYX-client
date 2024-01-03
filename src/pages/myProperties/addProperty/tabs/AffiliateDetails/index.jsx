import React from 'react'

export default function AffiliateDetails() {
    return (
        <div className='flex flex-col gap-5'>

            <div className='flex flex-col gap-1'>
                <label htmlFor='propertyType' className='font-medium'>Type Of Affiliate</label>
                <select
                    id='propertyType'
                    className='py-2 bg-[#f7fbff] border-2 border-[#ebeff3] outline-secondary rounded-lg'>
                    <option value=''>Select Affiliate</option>
                    <option value=''>Monthly</option>
                    <option value=''>Yearly</option>
                    <option value=''>Daily</option>
                </select>
                <div>
                </div>
            </div>

            <div className='flex flex-col gap-1'>
                <label htmlFor='value' className='font-medium'>Percentage Commision</label>
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

        </div>
    )
}
