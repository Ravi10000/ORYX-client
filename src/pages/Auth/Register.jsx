import React, { useState } from 'react'
import FormContainer from '../../components/FormContainer'
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { MdOutlineFileUpload } from "react-icons/md";
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { multiFormApi } from '../../api';
import toast from 'react-hot-toast';

export default function Register() {
    const [showPassword, setShowPassword] = useState(false);
    const [backendError, setBackendError] = useState();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    function togglePasswordVisibility() {
        setShowPassword(!showPassword);
    };

    async function registerUser(data) {
        // console.log(data);
        try {
            const res = await multiFormApi.post('/user/create',
                { ...data, status: 'Active', usertype: 'User' });
            console.log(res.data);
            toast.success('Registered Successfully')
            navigate('/login');
        } catch (error) {
            // console.log(error);
            setBackendError(error?.response.data.message);
        }
    }

    return (
        <FormContainer>
            <h2 className="text-2xl font-semibold text-center text-primary">Register</h2>

            <p className='text-red-500 font-medium text-lg'>{backendError}</p>

            <form onSubmit={handleSubmit(registerUser)}
                className="space-y-4">

                <div>
                    <input {...register('name')}
                        type='text'
                        className='w-full p-2 border border-gray-300 rounded-sm focus:ring-1 ring-inset focus:ring-blue-300 outline-none placeholder:capitalize'
                        placeholder="Name"
                    />
                </div>

                <div>
                    <input {...register('email', { required: 'Email is Required.' })}
                        type='email'
                        className='w-full p-2 border border-gray-300 rounded-sm focus:ring-1 ring-inset focus:ring-blue-300 outline-none placeholder:capitalize'
                        placeholder="Email"
                    />
                    {errors.email && <p className='text-red-500 font-medium'>{errors.email.message}</p>}
                </div>

                <div className="relative">
                    <input {...register('password')}
                        type={showPassword ? "text" : "password"}
                        className='w-full p-2 border border-gray-300 rounded-sm focus:ring-1 ring-inset focus:ring-blue-300 outline-none placeholder:capitalize'
                        name="password"
                        placeholder="password"
                    />
                    <button
                        type="button"
                        className="absolute top-1/2 right-2 transform -translate-y-1/2"
                        onClick={togglePasswordVisibility}
                    >
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                </div>

                <div>
                    <input {...register('contact')}
                        type='number'
                        className='w-full p-2 border border-gray-300 rounded-sm focus:ring-1 ring-inset focus:ring-blue-300 outline-none placeholder:capitalize'
                        placeholder="Contact Number"
                    />
                </div>

                <div className='relative w-full border border-gray-300 text-gray-400 rounded-sm focus:ring-1 ring-inset focus:ring-blue-300 outline-none placeholder:capitalize'>
                    <input {...register('userImg')}
                        className='opacity-0 absolute cursor-pointer'
                        type='file'
                        id='image'
                    />
                    <div className='flex justify-center items-center gap-2 p-2'>
                        <MdOutlineFileUpload className='text-lg' />
                        <span>Upload User Image</span>
                    </div>
                </div>

                <div className="flex items-center justify-between flex-wrap gap-y-5 text-sm">
                    <span className='text-sm'>Already have an account?</span>
                    <Link to={'/login'} className="text-indigo-600 hover:underline">
                        Login
                    </Link>
                </div>

                <div>
                    <button
                        className='w-full p-2 py-3 my-4 bg- text-white rounded-lg bg-primary hover:bg-hover'
                        type="submit">
                        Register
                    </button>
                </div>
            </form>
        </FormContainer>
    )
}
