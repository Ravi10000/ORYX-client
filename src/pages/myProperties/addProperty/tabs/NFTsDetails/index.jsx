import React from 'react'

export default function NFTsDetails() {
    return (
        <div className='flex flex-col gap-5'>

            <div className='flex flex-col gap-1'>
                <label htmlFor='name' className='font-medium'>Total Owner NFT</label>
                <input
                    type='text'
                    id='name'
                    className='p-2 bg-[#f7fbff] border-2 border-[#ebeff3] outline-secondary rounded-lg' />
            </div>

            <div className='flex flex-col gap-1'>
                <label htmlFor='name' className='font-medium'>Total Rent NFT</label>
                <input
                    type='text'
                    id='name'
                    className='p-2 bg-[#f7fbff] border-2 border-[#ebeff3] outline-secondary rounded-lg' />
            </div>

            <div className='flex flex-col gap-1'>
                <label htmlFor='name' className='font-medium'>Live Date</label>
                <input
                    type='date'
                    id='name'
                    className='p-2 bg-[#f7fbff] border-2 border-[#ebeff3] outline-secondary rounded-lg' />
            </div>

            <div className='flex flex-col gap-1'>
                <label htmlFor='name' className='font-medium'>Validity Duration</label>
                <input
                    type='text'
                    id='name'
                    className='p-2 bg-[#f7fbff] border-2 border-[#ebeff3] outline-secondary rounded-lg' />
            </div>

        </div>
    )
}
