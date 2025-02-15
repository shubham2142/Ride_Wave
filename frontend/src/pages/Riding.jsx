import React from 'react';
import {Link} from 'react-router-dom';

const Riding = () => {
  return (
    <div className='h-screen'>
        <Link to ='/home' className='fixed h-10 w-10 right-2 top-2 bg-white flex item-center justify-center rounded-full'> 
         <i className=" text-lg font-medium ri-home-4-line"></i>
        </Link>
        <div className='h-1/2'>
        <img className = 'h-full w-full object-cover' src="https://images.squarespace-cdn.com/content/v1/54ff63f0e4b0bafce6932642/1613584928617-VSRY2IR8T60HPREGGI9M/Two+Maps+-+Google+Maps+vs+Uber%27s+Version+of+Google+Maps.png" alt="" />
        </div>
        <div className='h-1/2 p-4'>
        <div className='flex items-center justify-between'>
                <img  className='h-12 'src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ7Kt54z31PkbdlqmqnyWnaCjvcLYRG-T_8Q&s" alt="" />
                 <div className='text-right'>
                   <h2 className='text-lg font-medium'> Roshan Singh</h2>
                    <h4 className='text-xl font-semibold -mt-1 -mb-1'>MR03AB 1111</h4>
                    <p className='font-sm text-gray-600'>Maruti Suzuki Alto</p>
                  </div>             
            </div>

          <div className='flex flex-col gap-2 justify-between items-center'>
                <div className='w-full mt-5'>
                 
                  <div className='flex items-center gap-5 p-3 border-b-2'>
                  <i className=" text-lg ri-map-pin-user-fill"></i>
                    <div>
                      <h3 className='text-lg font-medium'>312/11-A</h3>
                      <p className='text-sm -mt-1 text-gray-600'>Mnnit Allahabad</p>
                    </div>
                  </div>
                  <div className='flex items-center gap-5 p-3 '>
                  <i className =" text-lg ri-money-rupee-circle-line"></i>
                    <div >
                      <h3 className='text-lg font-medium'>₹ 192.03</h3>
                      <p className='text-sm -mt-1 text-gray-600'>Cash Cash</p>
                    </div>
                  </div>
                </div>
          </div>
            <button className='w-full mt-5 bg-green-600 text-white font-semibold p-2 rounded-lg'>Make a Payment</button>
        </div>
    </div>
  )
}

export default Riding
