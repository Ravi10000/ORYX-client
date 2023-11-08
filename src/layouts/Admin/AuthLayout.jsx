import React from 'react'
import { Outlet } from 'react-router'

const AuthLayout = () => {
  return (
    <div className='grid grid-cols-[33%_1fr] h-screen gap-x-[72px]'>
        <Outlet></Outlet>
    </div>
  )
}

export default AuthLayout