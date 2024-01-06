import React, { useEffect, useState } from 'react'
import PropertyPictures from './PropertyPictures';
import BasicDetails from './tabs/basicDetails';
import Documents from './tabs/Documents';
import AuditDetails from './tabs/AuditDetails';
import NFTsDetails from './tabs/NFTsDetails';
import { useForm } from 'react-hook-form';
import { authApi, authMultiFormApi } from '../../../api';
import toast from 'react-hot-toast';
// import AffiliateDetails from './tabs/AffiliateDetails';

export default function AddProperty() {

    const [activeTab, setActiveTab] = useState('basicDetails');
    const [propertyTypes, setPropertyTypes] = useState();
    const [selectedImages, setSelectedImages] = useState([]);
    const [selectedAmenities, setSelectedAmenities] = useState([]);

    const { register, handleSubmit, setValue, getValues, formState: { errors } } = useForm();

    async function getPropertyType() {
        try {
            const { data: { data } } = await authApi.get('/property-type/read');
            // console.log(data);
            setPropertyTypes(data);
        }
        catch (error) {
            console.log(error);
        }
    }

    function handleAmenity(id) {
        setSelectedAmenities((prev) => {
            const isIdSelected = prev.includes(id);
            if (isIdSelected) {
                return prev.filter((amenityId) => amenityId !== id);
            } else {
                return [...prev, id];
            }
        });
    }

    // console.log(selectedAmenities);

    async function addProperty(data) {
        const dataClone = { ...data }
        let url = selectedImages?.map(item => item.file)
        dataClone.docs = data.docs?.map(item => item[0])

        try {
            const res = await authMultiFormApi.post('/property/add',
                { ...dataClone, status: 'Added', url, amenities: selectedAmenities });
            console.log(res.data);
            if (res?.data?.success) {
                toast.success('Properties Added Successfully');
            }
        } catch (error) {
            console.log(error);
            toast.error(error?.response?.data?.error)
        }
    }

    useEffect(() => {
        getPropertyType();
    }, []);

    return (
        <form onSubmit={handleSubmit(addProperty)}
            className='bg-white flex flex-col shadow-2xl rounded-lg m-10 pb-10'>

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
                            type='button'
                            className={`
                            ${activeTab === 'basicDetails' ? 'text-primary underline-offset-8 decoration-2 underline' : ''}
                            `}
                            onClick={() => setActiveTab('basicDetails')}
                        >Basic Details
                        </button>

                        <button
                            type='button'
                            className={`
                            ${activeTab === 'documents' ? 'text-primary underline-offset-8 decoration-2 underline' : ''}
                            `}
                            onClick={() => setActiveTab('documents')}
                        >Documents
                        </button>

                        <button
                            type='button'
                            className={`
                            ${activeTab === 'auditDetails' ? 'text-primary underline-offset-8 decoration-2 underline' : ''}
                            `}
                            onClick={() => setActiveTab('auditDetails')}
                        >Audit Details
                        </button>

                        <button
                            type='button'
                            className={`
                            ${activeTab === 'NFTsDetails' ? 'text-primary underline-offset-8 decoration-2 underline' : ''}
                            `}
                            onClick={() => setActiveTab('NFTsDetails')}
                        >NFTs Details
                        </button>

                        {/* <button
                         type='button'
                            className={`
                            ${activeTab === 'affiliateDetails' ? 'text-secondary underline-offset-8 decoration-2 underline' : 'text-primary'}
                            `}
                            onClick={() => setActiveTab('affiliateDetails')}
                        >Affiliate Details
                        </button> */}
                    </div>

                    {activeTab === 'basicDetails' &&
                        <BasicDetails
                            setActiveTab={setActiveTab}
                            register={register}
                            propertyTypes={propertyTypes}
                            handleAmenity={handleAmenity}
                            selectedAmenities={selectedAmenities}
                        />
                    }

                    {activeTab === 'documents' &&
                        <Documents
                            setActiveTab={setActiveTab}
                            register={register}
                            getValues={getValues}
                            handleSubmit={handleSubmit}
                            errors={errors}
                        />
                    }

                    {activeTab === 'auditDetails' &&
                        <AuditDetails setActiveTab={setActiveTab} register={register} />
                    }

                    {activeTab === 'NFTsDetails' &&
                        <NFTsDetails register={register} />
                    }

                    {/* {activeTab === 'affiliateDetails' &&
                        <AffiliateDetails />
                    } */}

                </div>

                <div className='flex-1 pt-5'>
                    <PropertyPictures selectedImages={selectedImages} setSelectedImages={setSelectedImages} />
                </div>

            </div>

            {activeTab === 'NFTsDetails' &&
                <div className='mt-10 flex justify-center items-center'>
                    <button type='submit'
                        className='p-2 w-60 cursor-pointer bg-primary text-white font-medium text-xl text-center rounded-lg'
                    >
                        Save
                    </button>
                </div>
            }
        </form>
    )
}
