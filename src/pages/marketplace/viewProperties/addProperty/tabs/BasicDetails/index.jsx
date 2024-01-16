import React, { useEffect, useState } from 'react';
import AmeticsCard from './AmeticsCard';
import { authApi } from '../../../../../../api';

export default function BasicDetails({
    setActiveTab,
    register,
    errors,
    handleSubmit,
    propertyTypes,
    selectedAmenities,
    handleAmenity
}) {

    const [amenities, setAmenities] = useState();

    async function getAmenities() {
        try {
            const { data: { data } } = await authApi.get('/amenities/read');
            // console.log(data);
            setAmenities(data);
        }
        catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getAmenities();
    }, []);

    return (
        <div className='flex flex-col gap-2'>

            <div className='flex flex-col gap-1'>
                <label htmlFor='name' className='font-medium'>Name</label>
                <input {...register('name', { required: 'Property Name is Required.' })}
                    type='text'
                    id='name'
                    className='p-2 bg-[#f7fbff] border-2 border-[#ebeff3] outline-primary rounded-lg' />
                {errors.name && <p className='text-red-500 font-medium'>{errors?.name?.message}</p>}
            </div>

            <div className='flex flex-col gap-1'>
                <label htmlFor='propertyType' className='font-medium'>Property Type Id</label>
                <select
                    id='propertyType'
                    className='py-2 bg-[#f7fbff] border-2 border-[#ebeff3] outline-primary rounded-lg'>
                    {propertyTypes?.map(propertyType => (
                        <option key={propertyType._id} value={propertyType._id}>{propertyType.name}</option>
                    ))}

                </select>
                <div>
                </div>
            </div>

            <div className='flex flex-col gap-1'>
                <label htmlFor='name' className='font-medium'>Sqft</label>
                <input {...register('sqft')}
                    type='text'
                    id='name'
                    className='p-2 bg-[#f7fbff] border-2 border-[#ebeff3] outline-primary rounded-lg' />
            </div>

            <div className='flex flex-col gap-1'>
                <label htmlFor='description' className='font-medium'>Description</label>
                <textarea {...register('description')}
                    id='description'
                    rows='5'
                    className='p-2 bg-[#f7fbff] border-2 border-[#ebeff3] outline-primary rounded-lg'>
                </textarea>
            </div>

            <div className='flex flex-col gap-1'>
                <label htmlFor='projectStatus' className='font-medium'>Amenities</label>
                <div className='flex justify-center items-center flex-wrap gap-5 p-5 bg-[#f7fbff] border-2 border-[#ebeff3] outline-primary rounded-lg'>
                    {amenities?.map(amenity => (
                        <AmeticsCard
                            key={amenity?._id}
                            amenity={amenity}
                            handleAmenity={handleAmenity}
                            selectedAmenities={selectedAmenities}
                        />
                    ))}
                </div>
            </div>

            <div className='mt-10 flex justify-end items-center'>
                <button
                    type='button'
                    onClick={handleSubmit((data) => {
                        // console.log(data);
                        setActiveTab('documents')
                    })}
                    className='p-2 w-60 cursor-pointer bg-primary text-white font-medium text-xl text-center rounded-lg'
                >
                    Next
                </button>
            </div>
        </div>
    )
}
