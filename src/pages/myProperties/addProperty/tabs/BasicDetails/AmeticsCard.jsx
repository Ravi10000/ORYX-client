import React from 'react';

export default function AmeticsCard({ amenity, handleAmenity, selectedAmenities }) {
    return (
        <div className='relative' onClick={() => handleAmenity(amenity._id)}>
            {
                selectedAmenities.includes(amenity._id) &&
                (<div>
                    <img
                        src='/src/assets/done.png'
                        alt='done'
                        className='w-3 h-3 absolute right-0 top-[-4px]'
                    />
                </div>)
            }
            <div className='w-20 h-16 bg-[#dfedff] shadow-lg rounded-xl'>
                <div className='flex justify-center items-center flex-col gap-1 p-2 text-xs font-medium'>
                    <img
                        src={`${import.meta.env.VITE_ASSET_URI}/${amenity?.icon}`}
                        alt='assign'
                        className='w-8 h-8'
                    />

                    <h5>{amenity.name}</h5>
                </div>
            </div>
        </div>
    )
}
