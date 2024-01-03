import React from 'react';
import AmeticsCard from './AmeticsCard'

export default function BasicDetails({ setActiveTab }) {
    return (
        <div className='flex flex-col gap-2'>

            <div className='flex flex-col gap-1'>
                <label htmlFor='name' className='font-medium'>Name</label>
                <input
                    type='text'
                    id='name'
                    className='p-2 bg-[#f7fbff] border-2 border-[#ebeff3] outline-secondary rounded-lg' />
            </div>

            <div className='flex flex-col gap-1'>
                <label htmlFor='propertyType' className='font-medium'>Property Type Id</label>
                <select
                    id='propertyType'
                    className='py-2 bg-[#f7fbff] border-2 border-[#ebeff3] outline-secondary rounded-lg'>
                    <option value=''>Select Property</option>
                    <option value=''>Property 1</option>
                    <option value=''>Property 2</option>
                    <option value=''>Property 3</option>
                </select>
                <div>
                </div>
            </div>

            <div className='flex flex-col gap-1'>
                <label htmlFor='name' className='font-medium'>Sqft</label>
                <input
                    type='text'
                    id='name'
                    className='p-2 bg-[#f7fbff] border-2 border-[#ebeff3] outline-secondary rounded-lg' />
            </div>

            <div className='flex flex-col gap-1'>
                <label htmlFor='description' className='font-medium'>Description</label>
                <textarea
                    id='description'
                    rows='5'
                    className='p-2 bg-[#f7fbff] border-2 border-[#ebeff3] outline-secondary rounded-lg'>
                </textarea>
            </div>

            <div className='flex flex-col gap-1'>
                <label htmlFor='projectStatus' className='font-medium'>Amenities</label>
                <div className='flex justify-center items-center flex-wrap gap-5 p-5 bg-[#f7fbff] border-2 border-[#ebeff3] outline-secondary rounded-lg'>
                    <AmeticsCard />
                    <AmeticsCard />
                    <AmeticsCard />
                    <AmeticsCard />
                    <AmeticsCard />
                    <AmeticsCard />

                    <AmeticsCard />
                    <AmeticsCard />
                    <AmeticsCard />
                    <AmeticsCard />
                    <AmeticsCard />
                    <AmeticsCard />
                </div>
            </div>

            <div className='mt-10 flex justify-end items-center'>
                <button
                    onClick={() => setActiveTab('documents')}
                    className='p-2 w-60 cursor-pointer bg-primary text-white font-medium text-xl text-center rounded-lg'
                >
                    Next
                </button>
            </div>
        </div>
    )
}
