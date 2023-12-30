import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Heading from '../../components/Heading';
import axios from 'axios';
import { data } from 'autoprefixer';

export default function AddProject() {
    const [pincodeData, setPincodeData] = useState();

    async function fetchPincode(e) {
        try {
            const pincode = e.target?.value;
            const { data } = await axios.get(
                `https://api.postalpincode.in/pincode/${pincode}`,
            );
            // console.log(data);
            const hasPostOffice = data[0]?.PostOffice;
            console.log(hasPostOffice);
            if (!hasPostOffice) throw new Error("No Office");
            if (hasPostOffice) {
                return {
                    city: hasPostOffice[0].Block,
                    state: hasPostOffice[0].State,
                };
            }
        } catch (error) {
            return Promise.resolve({
                city: null,
                state: null,
            });
        }
    }
    return (
        <>
            <Heading
                heading={"Marketplace - Add Project"}
                subHeading={"Buy and Sell Real Estate NFTs Within Seconds"}
            />

            <div className='bg-white flex flex-col shadow-2xl rounded-lg m-10 py-10'>
                <div className='pb-10'>
                    <h2 className='py-3 px-10 text-lg bg-bodyBg font-semibold'>Project 101</h2>
                </div>

                <div className='flex gap-10 px-10'>

                    <div className='flex-1 flex flex-col gap-5'>

                        <div className='flex flex-col gap-1'>
                            <label htmlFor='name' className='font-medium'>Project Name</label>
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
                            <label htmlFor='propertyType' className='font-medium'>Project Type</label>
                            <select
                                id='propertyType'
                                className='py-2 bg-[#f7fbff] border-2 border-[#ebeff3] outline-secondary rounded-lg'>
                                <option value=''>Select Project</option>
                                <option value=''>Project 1</option>
                                <option value=''>Project 2</option>
                                <option value=''>Project 3</option>
                            </select>
                            <div>
                            </div>
                        </div>

                        <div className='flex flex-col gap-1'>
                            <label htmlFor='projectStatus' className='font-medium'>Project Status</label>
                            <select
                                id='projectStatus'
                                className='py-2 bg-[#f7fbff] border-2 border-[#ebeff3] outline-secondary rounded-lg'>
                                <option value=''>Select Project</option>
                                <option value=''>Project 1</option>
                                <option value=''>Project 2</option>
                                <option value=''>Project 3</option>
                            </select>
                            <div>
                            </div>
                        </div>

                        <div className='flex gap-3'>
                            <div className='flex-[3] flex flex-col gap-1'>
                                <label htmlFor='address1' className='font-medium'>Street Address</label>
                                <input
                                    type='text'
                                    id='address1'
                                    className='p-2 bg-[#f7fbff] border-2 border-[#ebeff3] outline-secondary rounded-lg' />
                            </div>

                            <div className='flex-[1] flex flex-col gap-1'>
                                <label className='font-medium'>View In Map</label>
                                <Link
                                    to='https://google.com/maps'
                                    target='blank'
                                    className='w-40 p-2 bg-[#f7fbff] border-2 border-[#ebeff3] outline-secondary rounded-lg'
                                >
                                    <div className='p-1'>
                                        <img src='/src/assets/locationBlack.png' className='w-4' />
                                    </div>

                                </Link>
                            </div>
                        </div>

                        <div className='flex gap-10'>
                            <div className='flex-1 flex flex-col gap-1'>
                                <label htmlFor='propertyType' className='font-medium'>Pincode</label>
                                <input
                                    type='number'
                                    id='pincode'
                                    onChange={e => fetchPincode(e)}
                                    className='py-2 bg-[#f7fbff] border-2 border-[#ebeff3] outline-secondary rounded-lg'
                                />
                                <div>
                                </div>
                            </div>

                            <div className='flex-1 flex flex-col gap-1'>
                                <label htmlFor='propertyType' className='font-medium'>City</label>
                                <select
                                    id='propertyType'
                                    className='py-2 bg-[#f7fbff] border-2 border-[#ebeff3] outline-secondary rounded-lg'>
                                    <option value=''>Select City</option>
                                    <option value=''>New York</option>
                                    <option value=''>New York 2</option>
                                    <option value=''>New York 3</option>
                                </select>
                                <div>
                                </div>
                            </div>
                        </div>

                        <div className='flex gap-10'>
                            <div className='flex-1 flex flex-col gap-1'>
                                <label htmlFor='propertyType' className='font-medium'>State</label>
                                <select
                                    id='propertyType'
                                    className='py-2 bg-[#f7fbff] border-2 border-[#ebeff3] outline-secondary rounded-lg'>
                                    <option value=''>Select State</option>
                                    <option value=''>California</option>
                                    <option value=''>California 2</option>
                                    <option value=''>California 3</option>
                                </select>
                                <div>
                                </div>
                            </div>

                            <div className='flex-1 flex flex-col gap-1'>
                                <label htmlFor='country' className='font-medium'>Country</label>
                                <select
                                    id='country'
                                    className='py-2 bg-[#f7fbff] border-2 border-[#ebeff3] outline-secondary rounded-lg'>
                                    <option value=''>Select Country</option>
                                    <option value=''>Country 1</option>
                                    <option value=''>Country 2</option>
                                    <option value=''>Country 3</option>
                                </select>
                                <div>
                                </div>
                            </div>
                        </div>

                        <div className='flex flex-col gap-1'>
                            <label htmlFor='country' className='font-medium'>Weekly Withraw Limit</label>
                            <input
                                type='text'
                                id='pincode'
                                className='py-2 bg-[#f7fbff] border-2 border-[#ebeff3] outline-secondary rounded-lg'
                            />
                            <div>
                            </div>
                        </div>

                        <div className='flex flex-col gap-1'>
                            <label htmlFor='propertyType' className='font-medium'>Monthly Withraw Limit</label>
                            <input
                                type='text'
                                id='pincode'
                                className='py-2 bg-[#f7fbff] border-2 border-[#ebeff3] outline-secondary rounded-lg'
                            />
                            <div>
                            </div>
                        </div>

                        <div className='flex flex-col gap-1'>
                            <label htmlFor='propertyType' className='font-medium'>Annual Withraw Limit</label>
                            <input
                                type='text'
                                id='pincode'
                                className='py-2 bg-[#f7fbff] border-2 border-[#ebeff3] outline-secondary rounded-lg'
                            />
                            <div>
                            </div>
                        </div>

                    </div>

                    <div className='flex-1 flex flex-col gap-5'>
                        <div className='flex flex-col gap-1 relative'>
                            <label htmlFor='image' className='font-medium'>Images</label>
                            <div className='border-2 border-[#eef2f6] bg-[#f7fbff] w-full h-20 flex justify-center items-center outline-secondary rounded-lg'>
                                <input
                                    className='opacity-0 absolute p-2 cursor-pointer'
                                    type='file'
                                    id='image'
                                />
                                <div className='flex justify-center items-center gap-2 p-2'>
                                    <img
                                        src='/src/assets/upload.png'
                                        alt='upload'
                                        className='w-4 h-4'
                                    />
                                    <span>Upload Images</span>
                                </div>
                            </div>
                        </div>

                        <div className='flex flex-wrap gap-10 justify-center items-center'>
                            <img
                                src='/src/assets/projectPicsmall.png'
                                alt='pic 1'
                                className='w-40 h-32 opacity-60'
                            />

                            <img
                                src='/src/assets/projectPicsmall.png'
                                alt='pic 1'
                                className='w-40 h-32 opacity-60'
                            />

                            <img
                                src='/src/assets/projectPicsmall.png'
                                alt='pic 1'
                                className='w-40 h-32 opacity-60'
                            />

                            <img
                                src='/src/assets/projectPicsmall.png'
                                alt='pic 1'
                                className='w-40 h-32 opacity-60'
                            />

                            <img
                                src='/src/assets/projectPicsmall.png'
                                alt='pic 1'
                                className='w-40 h-32 opacity-60'
                            />

                            <img
                                src='/src/assets/projectPicsmall.png'
                                alt='pic 1'
                                className='w-40 h-32 opacity-60'
                            />
                        </div>


                    </div>
                </div>

                <div className='flex justify-center items-center mt-5'>
                    <button
                        className='text-lg w-20 p-2 py-3 my-4 bg- text-white rounded-lg bg-primary hover:bg-hover'>
                        Add
                    </button>
                </div>
            </div>


        </>
    )
}
