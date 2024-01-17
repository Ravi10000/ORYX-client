import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Heading from '../../components/Heading';
import axios from 'axios';
import { useDropzone } from 'react-dropzone';
import { authApi, authMultiFormApi } from '../../api';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

export default function AddProject() {
    const location = useLocation();
    const project = location?.state?.project;
    // console.log(project);

    const [city, setCity] = useState();
    const [state, setState] = useState();
    const [country, setCountry] = useState();
    const [selectedImages, setSelectedImages] = useState([]);
    const [projectTypes, setProjectTypes] = useState();

    const { register, handleSubmit, setValue, formState: { errors } } = useForm({
        defaultValues: useMemo(() => {
            if (!project) return;
            return {
                ...project
            }
        })
    });

    const navigate = useNavigate();

    async function fetchPincode(e) {
        try {
            const pincode = e.target?.value;
            const { data } = await axios.get(
                `https://api.postalpincode.in/pincode/${pincode}`,
            );
            // console.log(data);
            const hasPostOffice = data[0]?.PostOffice;
            // console.log(hasPostOffice);
            if (!hasPostOffice) throw new Error("No Office");
            if (hasPostOffice) {
                return {
                    city: hasPostOffice.map((data) => data?.Name),
                    state: hasPostOffice[0].State,
                    country: hasPostOffice[0].Country,
                };
            }
        } catch (error) {
            return Promise.resolve({
                city: null,
                state: null,
            });
        }
    }

    const onDrop = useCallback((acceptedFiles) => {
        const newImages = acceptedFiles.map((file) => ({
            id: Math.random().toString(36).substring(7),
            file,
        }));
        setSelectedImages((prevImages) => [...prevImages, ...newImages]);
    }, []);

    const removeImage = (id) => {
        setSelectedImages((prevImages) => prevImages.filter((img) => img.id !== id));
    };

    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
        accept: {
            'image/png': ['.png'],
            'image/jpeg': ['.jpg', '.jpeg']
        },
        multiple: true,
    });

    async function getProjectType() {
        const { data: { data } } = await authApi.get('/project-type/read');
        // console.log(data);
        setProjectTypes(data);
    }

    async function createProject(data) {
        // console.log(data);
        let images = selectedImages?.map(item => item.file)
        // console.log(images);
        if (project) {
            try {
                const res = await authMultiFormApi.put(`/project/update/${project?._id}`,
                    { ...data, images });
                // console.log(res.data);
                toast.success('Project Updated Successfully')
                navigate(-1);
            } catch (error) {
                console.log(error);
            }
        } else {
            try {
                const res = await authMultiFormApi.post('/project/create',
                    { ...data, images });
                // console.log(res.data);
                toast.success('Project Created Successfully')
                navigate('/marketplace');
            } catch (error) {
                console.log(error);
            }
        }

    }

    useEffect(() => {
        getProjectType();
    }, [])

    return (
        <>
            <Heading
                heading={"Marketplace - Add Project"}
                subHeading={"Buy and Sell Real Estate NFTs Within Seconds"}
            />

            <div className='bg-white flex flex-col shadow-2xl rounded-lg my-2 lg:m-10 py-5 lg:py-10'>
                <div className='pb-10'>
                    <h2 className='lg:py-3 px-5 lg:px-10 text-lg bg-bodyBg font-semibold'>Project 101</h2>
                </div>

                <form onSubmit={handleSubmit(createProject)}>

                    <div className='flex flex-col lg:flex-row gap-10 px-5 lg:px-10'>
                        <div className='flex-1 flex flex-col gap-5 lg:w-[50%]'>

                            <div className='flex flex-col gap-1'>
                                <label htmlFor='name' className='font-medium'>Project Name</label>
                                <input {...register('name')}
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
                                <label htmlFor='propertyType' className='font-medium'>Project Type</label>
                                <select {...register('projectType')}
                                    id='propertyType'
                                    className='py-2 bg-[#f7fbff] border-2 border-[#ebeff3] outline-primary rounded-lg'>
                                    {projectTypes?.map((projectType) => (
                                        <option key={projectType._id} value={projectType._id}>{projectType.name}</option>
                                    ))}
                                </select>
                                <div>
                                </div>
                            </div>

                            <div className='flex flex-col gap-1'>
                                <label htmlFor='projectStatus' className='font-medium'>Current Status</label>
                                <select {...register('currentStatus')}
                                    id=''
                                    className='py-2 bg-[#f7fbff] border-2 border-[#ebeff3] outline-primary rounded-lg'>
                                    <option value='UnderDevelopment'>Under Development</option>
                                    <option value='DevelopmentCompleted'>Development Completed</option>
                                </select>
                                <div>
                                </div>
                            </div>

                            <div className='flex flex-wrap lg:flex-nowrap gap-4'>
                                <div className='lg:flex-[2] flex flex-col gap-1 w-full lg:w-[60%]'>
                                    <label htmlFor='address1' className='font-medium'>Street Address</label>
                                    <input {...register('street')}
                                        type='text'
                                        id='address1'
                                        className='p-2 bg-[#f7fbff] border-2 border-[#ebeff3] outline-primary rounded-lg' />
                                </div>

                                <div className='lg:flex-[1] flex flex-col gap-1 w-full lg:w-[30%]'>
                                    <label className='font-medium'>View In Map</label>
                                    <Link {...register('googleMap')}
                                        to='https://google.com/maps'
                                        target='blank'
                                        className='p-2 bg-[#f7fbff] border-2 border-[#ebeff3] outline-primary rounded-lg'
                                    >
                                        <div className='p-1'>
                                            <img src='/src/assets/locationBlack.png' className='w-4' />
                                        </div>

                                    </Link>
                                </div>
                            </div>

                            <div className='flex flex-wrap lg:flex-nowrap gap-4 lg:gap-x-10'>
                                <div className='flex-1 flex flex-col gap-1 w-full lg:w-[40%]'>
                                    <label htmlFor='propertyType' className='font-medium'>Pincode</label>
                                    <input {...register('pincode')}
                                        type='number'
                                        id='pincode'
                                        name='pincode'
                                        onChange={async e => {
                                            const data = await fetchPincode(e);
                                            setCity(data.city);
                                            setValue('city', data.city)
                                            setState(data.state);
                                            setValue('state', data.state)
                                            setCountry(data.country);
                                            setValue('country', data.country)
                                            // console.log(data);
                                        }}
                                        className='py-2 bg-[#f7fbff] border-2 border-[#ebeff3] outline-primary rounded-lg'
                                    />
                                    <div>
                                    </div>
                                </div>

                                <div className='flex-1 flex flex-col gap-1 w-full lg:w-[40%]'>
                                    <label htmlFor='propertyType' className='font-medium'>City</label>
                                    <select {...register('city')}
                                        id='propertyType'
                                        className='py-2 bg-[#f7fbff] border-2 border-[#ebeff3] outline-primary rounded-lg'>
                                        <option value=''>Select City</option>
                                        {city?.map((name, index) => (
                                            <option key={index} value={name}>{name}</option>
                                        ))}
                                    </select>
                                    <div>
                                    </div>
                                </div>
                            </div>

                            <div className='flex flex-wrap lg:flex-nowrap gap-4 lg:gap-x-10'>
                                <div className='flex-1 flex flex-col gap-1 w-full lg:w-[40%]'>
                                    <label htmlFor='name' className='font-medium'>State</label>
                                    <input {...register('state')}
                                        type='text'
                                        id='name'
                                        disabled
                                        value={state || ''}
                                        className='p-2 bg-[#f7fbff] border-2 border-[#ebeff3] outline-primary rounded-lg' />
                                </div>

                                <div className='flex-1 flex flex-col gap-1 w-full lg:w-[40%]'>
                                    <label htmlFor='name' className='font-medium'>Country</label>
                                    <input {...register('country')}
                                        type='text'
                                        id='name'
                                        disabled
                                        value={country || ''}
                                        className='p-2 bg-[#f7fbff] border-2 border-[#ebeff3] outline-primary rounded-lg' />
                                </div>
                            </div>

                            <div className='flex flex-col gap-1'>
                                <label htmlFor='weekly' className='font-medium'>Weekly Withraw Limit</label>
                                <input {...register('weeklyWithrawLimit')}
                                    type='text'
                                    id='weekly'
                                    className='py-2 bg-[#f7fbff] border-2 border-[#ebeff3] outline-primary rounded-lg'
                                />
                                <div>
                                </div>
                            </div>

                            <div className='flex flex-col gap-1'>
                                <label htmlFor='propertyType' className='font-medium'>Monthly Withraw Limit</label>
                                <input {...register('monthlyWithrawLimit')}
                                    type='text'
                                    id='pincode'
                                    className='py-2 bg-[#f7fbff] border-2 border-[#ebeff3] outline-primary rounded-lg'
                                />
                                <div>
                                </div>
                            </div>

                            <div className='flex flex-col gap-1'>
                                <label htmlFor='propertyType' className='font-medium'>Annual Withraw Limit</label>
                                <input {...register('annualWithrawLimit')}
                                    type='text'
                                    id='pincode'
                                    className='py-2 bg-[#f7fbff] border-2 border-[#ebeff3] outline-primary rounded-lg'
                                />
                                <div>
                                </div>
                            </div>

                        </div >

                        <div className='flex-1 lg:w-[50%]'>
                            <div {...getRootProps({ className: "dropzone" })}>
                                <input {...getInputProps()} />

                                <div className='flex flex-col gap-1 relative cursor-pointer'>
                                    <h5 htmlFor='image' className='font-medium'>Images</h5>
                                    <div className='border-2 border-[#eef2f6] bg-[#f7fbff] max-w-80 h-20 flex justify-center items-center outline-primary rounded-lg'>
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
                            </div>
                            {selectedImages.length > 0 && (
                                <div className='flex flex-row flex-wrap justify-center items-center gap-5 mt-5'>
                                    {selectedImages.map((img) => (
                                        <div key={img.id}>
                                            <div className='flex flex-col gap-2'>
                                                <img
                                                    src={URL.createObjectURL(img.file)}
                                                    alt={`project ${img.id}`}
                                                    className='w-28 h-24'
                                                />
                                                <button
                                                    className='w-full text-sm p-1 bg- text-white rounded-lg bg-primary hover:bg-hover'
                                                    onClick={() => removeImage(img.id)}>
                                                    Remove
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                    <div className='flex justify-center items-center mt-5'>
                        <button type='submit'
                            className='text-lg w-24 p-2 py-3 my-4 bg- text-white rounded-lg bg-primary hover:bg-hover'>
                            {project ? 'Update' : 'Add'}
                        </button>
                    </div>
                </form>

            </div >
        </>
    )
}
