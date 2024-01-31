import React, { useCallback, useEffect, useState } from "react";
import Heading, { HR } from "../components/Heading";
import { authMultiFormApi } from "../api";
import { useForm } from "react-hook-form";
import { useDropzone } from "react-dropzone";
import toast from "react-hot-toast";

export default function Settings() {
  const [profile, setProfile] = useState();
  const [userImg, setUserImg] = useState();
  const [userImgUrl, setUserImgUrl] = useState(null);
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  async function getProfile() {
    const { data: { data } } = await authMultiFormApi.get('/get-profile');
    reset(data)
    setProfile(data);
  }

  const onDrop = useCallback(acceptedFiles => {
    const selectedImage = acceptedFiles[0];
    setUserImg(selectedImage)
    setUserImgUrl(URL.createObjectURL(selectedImage));
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      'image/png': ['.png'],
      'image/jpeg': ['.jpg', '.jpeg']
    },
    multiple: false
  });

  async function updateProfile(data) {
    try {
      // console.log(userImg);
      const res = await authMultiFormApi.put(`/user/update/${profile._id}`,
        { ...data, userImg }
      );
      // console.log(res.data);
      if (res?.data?.success) {
        toast.success('Profile Updated Successfully.');
      }
      getProfile();
    }
    catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.error)
    }
  }

  useEffect(() => {
    getProfile();
  }, []);


  return (
    <form onSubmit={handleSubmit(updateProfile)}>
      <Heading
        heading={"General Settings"}
        subHeading={"Upload your photo and details here"}
        isHorizontalline={false}
      >
        <div className="flex gap-8">
          <button type="submit"
            className='w-20 p-2 my-4 bg- text-white rounded-lg bg-primary hover:bg-hover'>
            Save
          </button>

          <button type="button"
            className='w-20 p-2 my-4 bg- text-white rounded-lg bg-primary hover:bg-hover'>
            Cancel
          </button>
        </div>
      </Heading>

      <div className="xl:grid xl:grid-cols-[1fr_520px] my-8 gap-x-6 2xl:gap-x-12">
        <div>
          <h3 className="text-lg font-semibold">Personal Information</h3>
          <HR></HR>

          <div className="my-6">

            <div className="mb-6">
              <label className="block mb-2 text-base font-medium text-gray-900"
                htmlFor="username">Username <span className="text-red-500">*</span></label>
              <input {...register('username', { required: 'Username is Required.' })}
                id='username'
                type='text'
                required={true}
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-none'
                placeholder="Enter Username"
              />
              {errors.username && <p className='text-red-500 font-medium'>{errors.username.message}</p>}
            </div>

            <div className="mb-6">
              <label className="block mb-2 text-base font-medium text-gray-900"
                htmlFor="email">Email <span className="text-red-500">*</span></label>
              <input {...register('email', { required: 'Email is Required.' })}
                id='email'
                type='email'
                required={true}
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-none'
                placeholder="Enter Email Address"
              />
              {errors.email && <p className='text-red-500 font-medium'>{errors.email.message}</p>}
            </div>

            <div className="mb-6">
              <label className="block mb-2 text-base font-medium text-gray-900"
                htmlFor="twitter">Twitter</label>
              <input {...register('twitter')}
                id='twitter'
                type='text'
                required={true}
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-none'
                placeholder="Enter Twitter Profile Link"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor='bio'
                className="block mb-2 text-base font-medium text-gray-900"
              >
                Biography
              </label>
              <textarea {...register('bio')}
                id='bio'
                rows="4"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 outline-none"
                placeholder='Enter Your Bio'
              ></textarea>
            </div>

          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Your Photo</h3>
          <HR></HR>

          <div className="my-2">
            <div className="mb-5 flex gap-4 items-center">
              {profile?.userImg && (
                <div>
                  <img
                    src={`${import.meta.env.VITE_ASSET_URI}/${profile?.userImg}`}
                    alt="profilePic"
                    className="h-12 w-12 rounded-full"
                  />
                </div>
              )}
              <div>
                <h1 className="text-base font-semibold capitalize">
                  edit your photo
                </h1>

                {/* <div className="flex gap-1">
                  <span className="rounded-full p-[0.2rem] text-gray-500">
                    Delete
                  </span>
                  <span className="text-red-600 rounded-full p-[0.2rem]">
                    Update
                  </span>
                </div> */}

              </div>
            </div>

            <div>
              <div {...getRootProps({ className: "dropzone" })}>
                <input {...getInputProps()} />

                <div className='border-2 border-[#eef2f6] bg-[#f7fbff] max-w-80 h-20 flex justify-center items-center outline-primary rounded-lg'>
                  <div className='flex justify-center items-center gap-2 p-2'>
                    <img
                      src='/upload.png'
                      alt='upload'
                      className='w-4 h-4'
                    />
                    <span>Upload Images</span>
                  </div>
                </div>
              </div>
              <div className='flex flex-row flex-wrap justify-center items-center gap-5 mt-5'>
                {userImgUrl && (
                  <div>
                    <img src={userImgUrl}
                      alt="User Image Preview"
                      className="w-40"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[940px]">
        <h3 className="text-lg font-semibold">Notification Settings</h3>
        <HR></HR>

        <div className="flex flex-col gap-5 my-4 mb-10 ">

          <div className="flex justify-between relative">
            <div>
              <h2 className="text-sm font-semibold">Real Estate NFT Sold</h2>
              <p className="text-gray-500 text-xs">
                When someone purchase one of your NFTs
              </p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input {...register('nftSold')} type="checkbox" value="" className="sr-only peer" />
              <div className="w-11 h-6 center bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:left-[0px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>

          <div className="flex justify-between relative">
            <div>
              <h2 className="text-sm font-semibold">Auction Expires</h2>
              <p className="text-gray-500 text-xs">
                When an auction you participate in ends
              </p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input {...register('auctionExpired')} type="checkbox" value="" className="sr-only peer" />
              <div className="w-11 h-6 center bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:left-[0px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>

          <div className="flex justify-between relative">
            <div>
              <h2 className="text-sm font-semibold">Individual NFTs Update</h2>
              <p className="text-gray-500 text-xs">
                When important updates occur regarding your NFT
              </p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input {...register('nftUpdate')} type="checkbox" value="" className="sr-only peer" />
              <div className="w-11 h-6 center bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:left-[0px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>

          <div className="flex justify-between relative">
            <div>
              <h2 className="text-sm font-semibold">Successful Purchase</h2>
              <p className="text-gray-500 text-xs">
                When you successfully buy an NFT
              </p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input {...register('purchaseSuccess')} type="checkbox" value="" className="sr-only peer" />
              <div className="w-11 h-6 center bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:left-[0px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>

        </div>
      </div>
    </form>
  );
};
