import React, { useState } from 'react'
import FormContainer from '../../components/FormContainer'
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { api } from '../../api';
import toast from 'react-hot-toast';

function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [backendError, setBackendError] = useState();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  function togglePasswordVisibility() {
    setShowPassword(!showPassword);
  }

  async function login(data) {
    try {
      const res = await api.post('/auth/login', data);
      // console.log(res.data);
      const accessToken = res.data.accessToken;
      localStorage.setItem('accessToken', accessToken);
      toast.success('Login Successfull');
      navigate('/');
    } catch (error) {
      // console.log(error);
      setBackendError(error?.response.data.message);
    }
  }

  return (
    <FormContainer>
      <h2 className="text-2xl font-semibold text-center text-primary">Login</h2>

      <p className='text-red-500 font-medium text-lg'>{backendError}</p>

      <form onSubmit={handleSubmit(login)}
        className="space-y-4">

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

        <div className='flex justify-between items-center text-sm'>
          <div className='flex gap-2 justify-center items-center select-none'>
            <label htmlFor='remember'>Remember Me</label>
            <input type='checkbox' name='remember' id='remember' />
          </div>

          <Link to={"/forgot-password"} className="text-indigo-600">
            Forgot Password?
          </Link>
        </div>

        <div className="flex items-center justify-between flex-wrap gap-y-5 text-sm">
          <span >Don&apos;t have an account? </span>
          <Link to={'/register'} className="text-indigo-600 hover:underline">
            Register
          </Link>
        </div>

        <div>
          <button
            className='w-full p-2 py-3 my-4 bg- text-white rounded-lg bg-primary hover:bg-hover'
            type="submit">
            Login
          </button>
        </div>
      </form>
    </FormContainer>
  );
};

export default LoginPage;
