import React from 'react'

const RidePopUp = (props) => {
    return (
        <div>
            <h5 className='p-1 text-center w-[93%] absolute top-0' onClick={() => {
                props.setridePopupPanel(false)
            }}>
           <i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-3">New Ride Available!</h3>

      <div className="flex items-center justify-between p-3 bg-yellow-400 rounded-lg mt-4">
        <div className="flex items-center gap-3 ">
          <img
            className="h-12 w-10 rounded-full object-cover"
            src="https://i.pinimg.com/236x/be/a3/49/bea3491915571d34a026753f4a872000.jpg"
            alt="Driver"
          />
          <h2 className="text-lg font-medium">Mika Singh</h2>
        </div>
        <h5 className="text-lg font-semibold">2.2 km</h5>
      </div>

      <div className="flex flex-col gap-2 justify-between items-center">
        <div className="w-full mt-5">
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="text-lg ri-map-pin-2-fill"></i>
            <div>
              <h3 className="text-lg font-medium">312/11-A</h3>
              <p className="text-sm -mt-1 text-gray-600">MNNIT Allahabad</p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="text-lg ri-map-pin-user-fill"></i>
            <div>
              <h3 className="text-lg font-medium">312/11-A</h3>
              <p className="text-sm -mt-1 text-gray-600">MNNIT Allahabad</p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3">
            <i className="text-lg ri-money-rupee-circle-line"></i>
            <div>
              <h3 className="text-lg font-medium">₹192.03</h3>
              <p className="text-sm -mt-1 text-gray-600">Cash Payment</p>
            </div>
          </div>
        </div>
              <div className='flex mt-5 w-full items-center justify-between'>
           
                <button onClick={() => {
                    props.setridePopupPanel(false)

                }} className='mt-1 bg-gray-300 text-gray-700 font-semibold p-3 px-10 rounded-lg'>Ignore</button>

                    <button onClick={() => {
                        props.setConfirmridePopupPanel(true)
                    }} className=' bg-green-600  text-white font-semibold p-3 px-10 rounded-lg'>Accept</button>

              </div>
               
            </div>
        </div>
    )
}

export default RidePopUp