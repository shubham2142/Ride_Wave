import React from 'react'

const WaitingForDriver = (props) => {
  return (
    <div>
    <h5 className='p-1 text-center w-[93%] absolute top-0 ' onClick={()=>{
              props.waitingForDriver(false)
            }}><i className=" text-3xl text-gray-200 ri-arrow-down-wide-line"></i></h5>  

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
                  <i className=" text-lg ri-map-pin-2-fill"></i>
                    <div>
                      <h3 className='text-lg font-medium'>312/11-A</h3>
                      <p className='text-sm -mt-1 text-gray-600'>Mnnit Allahabad</p>
                    </div>
                  </div>
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
  </div>
  )
}

export default WaitingForDriver

