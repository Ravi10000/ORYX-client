import React from 'react'

export default function NFTsDetails({ register }) {
    return (
        <div className='flex flex-col gap-5'>

            <div className='flex flex-col gap-1'>
                <label htmlFor='name' className='font-medium'>Total Owner NFT</label>
                <input {...register('totalOwnerNFT')}
                    type='number'
                    id='name'
                    className='p-2 bg-[#f7fbff] border-2 border-[#ebeff3] outline-primary rounded-lg' />
            </div>

            <div className='flex flex-col gap-1'>
                <label htmlFor='name' className='font-medium'>Total Rental NFT</label>
                <input {...register('totalRentalNFT')}
                    type='number'
                    id='name'
                    className='p-2 bg-[#f7fbff] border-2 border-[#ebeff3] outline-primary rounded-lg' />
            </div>

            <div className='flex flex-col gap-1'>
                <label htmlFor='name' className='font-medium'>Live Date</label>
                <input {...register('liveDate')}
                    type='date'
                    id='name'
                    className='p-2 bg-[#f7fbff] border-2 border-[#ebeff3] outline-primary rounded-lg' />
            </div>

            <div className='flex flex-col gap-1'>
                <label htmlFor='name' className='font-medium'>Validity Duration</label>
                <input {...register('validityPeriod')}
                    type='text'
                    id='name'
                    className='p-2 bg-[#f7fbff] border-2 border-[#ebeff3] outline-primary rounded-lg' />
            </div>

        </div>
    )
}
