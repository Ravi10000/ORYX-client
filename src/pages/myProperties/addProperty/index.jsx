import React, { useState } from 'react'
import PropertyPictures from './PropertyPictures';
import BasicDetails from './tabs/basicDetails';
import Documents from './tabs/Documents';
import AuditDetails from './tabs/AuditDetails';
import NFTsDetails from './tabs/NFTsDetails';
import { useForm } from 'react-hook-form';
// import AffiliateDetails from './tabs/AffiliateDetails';

export default function AddProperty() {

    const [activeTab, setActiveTab] = useState('basicDetails');

    const { register, handleSubmit, setValue, formState: { errors } } = useForm();

    return (
        <div className='bg-white flex flex-col shadow-2xl rounded-lg m-10 pb-10'>

            <div className='flex items-center gap-10 mt-8 px-10 text-lg bg-bodyBg font-semibold'>
                <h2 className='py-3 px-10 text-lg bg-bodyBg font-semibold'>Project 101</h2>

                <div className='pt-3 flex py-3 gap-5 px-3 text-xs'>
                    <button className='bg-[#e0cdfb] px-2 py-1 text-[#a36df3] font-semibold border border-[#a36df3] rounded-full'>Appointment</button>

                    <button className='bg-[#bde4d5] px-2 py-1 text-[#47b080] font-semibold border border-[#47b080] rounded-full'>Under Development</button>
                </div>
            </div>

            <div className='flex gap-10 px-10'>

                <div className='flex-1 w-[50%]'>
                    <div className='flex flex-wrap gap-x-5 gap-y-3 font-semibold text-sm py-5'>
                        <button
                            className={`
                            ${activeTab === 'basicDetails' ? 'text-primary underline-offset-8 decoration-2 underline' : ''}
                            `}
                            onClick={() => setActiveTab('basicDetails')}
                        >Basic Details
                        </button>

                        <button
                            className={`
                            ${activeTab === 'documents' ? 'text-primary underline-offset-8 decoration-2 underline' : ''}
                            `}
                            onClick={() => setActiveTab('documents')}
                        >Documents
                        </button>

                        <button
                            className={`
                            ${activeTab === 'auditDetails' ? 'text-primary underline-offset-8 decoration-2 underline' : ''}
                            `}
                            onClick={() => setActiveTab('auditDetails')}
                        >Audit Details
                        </button>

                        <button
                            className={`
                            ${activeTab === 'NFTsDetails' ? 'text-primary underline-offset-8 decoration-2 underline' : ''}
                            `}
                            onClick={() => setActiveTab('NFTsDetails')}
                        >NFTs Details
                        </button>

                        {/* <button
                            className={`
                            ${activeTab === 'affiliateDetails' ? 'text-secondary underline-offset-8 decoration-2 underline' : 'text-primary'}
                            `}
                            onClick={() => setActiveTab('affiliateDetails')}
                        >Affiliate Details
                        </button> */}
                    </div>

                    {activeTab === 'basicDetails' &&
                        <BasicDetails setActiveTab={setActiveTab} />
                    }

                    {activeTab === 'documents' &&
                        <Documents setActiveTab={setActiveTab} />
                    }

                    {activeTab === 'auditDetails' &&
                        <AuditDetails setActiveTab={setActiveTab} />
                    }

                    {activeTab === 'NFTsDetails' &&
                        <NFTsDetails />
                    }

                    {/* {activeTab === 'affiliateDetails' &&
                        <AffiliateDetails />
                    } */}

                </div>

                <div className='flex-1 pt-5'>
                    <PropertyPictures />
                </div>

            </div>
            {activeTab === 'NFTsDetails' &&
                <div className='mt-10 flex justify-center items-center'>
                    <button
                        className='p-2 w-60 cursor-pointer bg-primary text-white font-medium text-xl text-center rounded-lg'
                    >
                        Save
                    </button>
                </div>
            }
        </div>
    )
}
