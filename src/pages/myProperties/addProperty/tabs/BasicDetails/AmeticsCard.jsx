import React from 'react'

export default function AmeticsCard() {
    return (
        <div className='relative'>
            <div>
                <img
                    src='/src/assets/done.png'
                    alt='done'
                    className='w-3 h-3 absolute right-0 top-[-4px]'
                />

            </div>
            <div className='w-16 h-16 bg-[#dfedff] shadow-lg rounded-xl'>
                <div className='flex justify-center items-center flex-col gap-1 p-2 text-xs font-medium'>
                    <img
                        src='/src/assets/emptyPerson.png'
                        alt='assign'
                        className='w-8 h-8'
                    />

                    <h5>Name</h5>
                </div>
            </div>
        </div>
    )
}
