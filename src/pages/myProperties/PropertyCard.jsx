import React from 'react';
import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
} from "@material-tailwind/react";
import { Link, useNavigate } from 'react-router-dom';

export default function PropertyCard({ property }) {

    const navigate = useNavigate();

    function handleEditProperty() {
        navigate('/projects/manage-projects/view-properties/edit-property');
    }

    return (
        <div className='relative'>
            <div className='absolute z-20 left-5 top-5'>
                <button className='px-2 text-sm text-secondary bg-white border border-secondary rounded-full'>Rental Property</button>
            </div>

            <div className='w-72 h-[500px] bg-white shadow-lg rounded-xl text-primary'>

                <div className='flex flex-col gap-2 text-sm'>

                    <Link
                        to={`/property-detail/${property._id}`}
                        state={property}
                    >
                        {property.images.length > 0 ?
                            <img
                                src={`${import.meta.env.VITE_ASSET_URI}/${property?.images?.[0]?.url}`}
                                alt='cardHouse'
                                className='w-72 h-64'
                            />
                            :
                            <img
                                src=''
                                alt='cardHouse'
                                className='w-72 h-64'
                            />
                        }
                    </Link>

                    <div className='flex justify-between items-center px-3'>
                        <h5 className='font-medium'>{property?.name}</h5>
                        <Menu
                            animate={{
                                mount: { y: 0 },
                                unmount: { y: 25 },
                            }}
                        >
                            <MenuHandler>
                                <button>
                                    <svg className='mt-[-3px]'
                                        width="18" height="4" viewBox="0 0 18 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path opacity="0.5" d="M17 2C17 1.73478 16.8946 1.48043 16.7071 1.29289C16.5196 1.10536 16.2652 1 16 1C15.7348 1 15.4804 1.10536 15.2929 1.29289C15.1054 1.48043 15 1.73478 15 2C15 2.26522 15.1054 2.51957 15.2929 2.70711C15.4804 2.89464 15.7348 3 16 3C16.2652 3 16.5196 2.89464 16.7071 2.70711C16.8946 2.51957 17 2.26522 17 2ZM10 2C10 1.73478 9.89464 1.48043 9.70711 1.29289C9.51957 1.10536 9.26522 1 9 1C8.73478 1 8.48043 1.10536 8.29289 1.29289C8.10536 1.48043 8 1.73478 8 2C8 2.26522 8.10536 2.51957 8.29289 2.70711C8.48043 2.89464 8.73478 3 9 3C9.26522 3 9.51957 2.89464 9.70711 2.70711C9.89464 2.51957 10 2.26522 10 2ZM3 2C3 1.73478 2.89464 1.48043 2.70711 1.29289C2.51957 1.10536 2.26522 0.999999 2 0.999999C1.73478 0.999999 1.48043 1.10536 1.29289 1.29289C1.10536 1.48043 1 1.73478 1 2C1 2.26522 1.10536 2.51957 1.29289 2.70711C1.48043 2.89464 1.73478 3 2 3C2.26522 3 2.51957 2.89464 2.70711 2.70711C2.89464 2.51957 3 2.26522 3 2Z" stroke="#080E12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                            </MenuHandler>
                            <MenuList>
                                <MenuItem
                                    onClick={handleEditProperty}
                                >
                                    Edit Property
                                </MenuItem>
                            </MenuList>
                        </Menu>

                    </div>

                    <div className='flex items-center gap-2 px-3 text-[#a3a3ad]'>
                        <img
                            src='/src/assets/location.png'
                            alt='location'
                            className='w-4   h-4'
                        />
                        <span>123, New State, 201301</span>
                    </div>

                    <div className='bg-[#f1f8ff] text-xs mx-5 text-center'>
                        <div className='p-2 flex gap-2'>

                            <div className='flex-1 flex flex-col justify-center items-center'>
                                <div className='flex-1'>
                                    <span className='text-secondary font-medium'>{property?.expectedReturns}</span>
                                </div>
                                <div className='flex-1'>
                                    <img
                                        src='/src/assets/return.png'
                                        alt='return'
                                        className='w-4 h-4'
                                    />
                                </div>
                                <div className='flex-1'>
                                    <span >Expected Return</span>
                                </div>

                            </div>

                            <div className='flex-1 flex flex-col gap-1 justify-center items-center'>
                                <div className='flex-1'>
                                    <span className='text-secondary font-medium'>{property?.dividendYield}</span>
                                </div>

                                <div className='flex-1'>
                                    <img
                                        src='/src/assets/yield.png'
                                        alt='return'
                                        className='w-4 h-4'
                                    />
                                </div>

                                <div className='flex-1'>
                                    <span>Dividend Yield</span>
                                </div>

                            </div>

                            <div className='flex-1 flex flex-col gap-1 justify-center items-center'>
                                <div className='flex-1'>
                                    <span className='text-secondary font-medium'>{property?.dividendFrequency}</span>
                                </div>

                                <div className='flex-1'>
                                    <img
                                        src='/src/assets/frequency.png'
                                        alt='return'
                                        className='w-4 h-4'
                                    />
                                </div>

                                <div className='flex'>
                                    <span>Dividend Frequency</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='bg-[#d4e8fd] text-xs text-center mt-3 rounded-b-xl'>
                        <div className='p-2 flex gap-2'>

                            <div className='flex-1 flex flex-col gap-1 justify-center items-center'>
                                <div className='flex-1'>
                                    <img
                                        src='/src/assets/owner.png'
                                        alt='return'
                                        className='w-4 h-4'
                                    />
                                </div>

                                <div className='flex-1'>
                                    <span>Owner NFTs</span>
                                </div>

                                <div className='flex-1'>
                                    <span className='text-secondary font-medium'>{property?.totalOwnerNFT}</span>
                                </div>
                            </div>

                            <div className='flex-1 flex flex-col gap-1 justify-center items-center'>
                                <div className='flex-1'>
                                    <img
                                        src='/src/assets/rental.png'
                                        alt='return'
                                        className='w-4 h-4'
                                    />
                                </div>

                                <div className='flex-1'>
                                    <span>Rental NFTs</span>
                                </div>

                                <div className='flex-1'>
                                    <span className='text-secondary font-medium'>{property?.totalRentalNFT}</span>
                                </div>
                            </div>

                            <div className='flex-1 flex flex-col gap-1 justify-center items-center'>
                                <div className='flex-1'>
                                    <img
                                        src='/src/assets/price.png'
                                        alt='return'
                                        className='w-4 h-4'
                                    />
                                </div>

                                <div className='flex-1'>
                                    <span>Price NFTs</span>
                                </div>

                                <div className='flex-1'>
                                    <span className='text-secondary font-medium'>150,000</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
