import React from 'react'

const VehiclePanel = (props) => {
  return (
    <div>
       <h5 className='p-1 text-center w-[93%] absolute top-0 ' onClick={()=>{
                props.setVehiclePanel(false)
              }}><i className=" text-3xl text-gray-200 ri-arrow-down-wide-line"></i></h5>  
            <h3 className='text-2xl font-semibold mb-3'>Choose a Vehicle</h3>
           <div onClick={()=>{
            props.setconfirmRidePanel(true)
           }} className='flex border-2 active:border-black rounded-xl mb-2 w-full items-center p-3 justfy-center' >
              <img className='h-10' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ7Kt54z31PkbdlqmqnyWnaCjvcLYRG-T_8Q&s" alt="" />
              <div className='ml-2 w-1/2'>
                  <h4 className='font-medium text-base'> CarGo <span><i className="ri-user-3-fill"></i>4</span></h4>
                  <h5 className='font-medium text-sm'>2 min away </h5>
                  <p className='font-normal text-xs text-gray-600'>Affordable Car Ride's </p>
              </div>
              <h2 className='text-lg font-semibold'> ₹193.08</h2>
           </div>
           <div onClick={()=>{
            props.setconfirmRidePanel(true)
           }} className='flex border-2 active:border-black rounded-xl mb-2 w-full items-center p-3 justfy-center' >
              <img className='h-10' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png" alt="" />
              <div className='ml-2 w-1/2'>
                  <h4 className='font-medium text-base'> BikeGo <span><i className="ri-user-3-fill"></i>1</span></h4>
                  <h5 className='font-medium text-sm'>4 min away </h5>
                  <p className='font-normal text-xs text-gray-600'>Affordable Bike Ride's </p>
              </div>
              <h2 className='text-lg font-semibold'> ₹93.12</h2>
           </div>
           <div onClick={()=>{
            props.setconfirmRidePanel(true)
           }} className='flex border-2 active:border-black rounded-xl mb-2 w-full items-center p-3 justfy-center' >
              <img className='h-10' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png" alt="" />
              <div className='ml-2 w-1/2'>
                  <h4 className='font-medium text-base'> AutoGo <span><i className="ri-user-3-fill"></i>2</span></h4>
                  <h5 className='font-medium text-sm'>5 min away </h5>
                  <p className='font-normal text-xs text-gray-600'>Affordable Auto Ride's </p>
              </div>
              <h2 className='text-lg font-semibold'> ₹80.56</h2>
           </div>
    </div>
  )
}

export default VehiclePanel
