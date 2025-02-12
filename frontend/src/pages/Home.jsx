import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <div className='h-screen bg-cover bg-center bg-[url(https://plus.unsplash.com/premium_photo-1731842686156-74895c29a87b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dHJhZmljJTIwbGlnaHR8ZW58MHx8MHx8fDA%3D)] pt-8 flex justify-between flex-col w-full bg-red-400' >
              <img className='w-16 ml-8' src="https://download.logo.wine/logo/Uber/Uber-Logo.wine.png" alt="Sorry" />
              <div className='bg-white py-4 pb-7 px-4'>
                  <h2 className='text-xl pl-4 font-bold'>Get Started with RIDE_WAVE</h2>
                  <Link to ='/login' className='flex items-center justify-center w-full bg-black text-white py-3 rounder mt-4'>Continue</Link>
              </div>
        </div>

    </div>
  )
}

export default Home
