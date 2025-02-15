import React, { useRef, useState } from 'react'
import {Link} from 'react-router-dom'
import { useGSAP } from '@gsap/react';
import gsap from'gsap'
import FinishRide from '../components/FinishRide'

const CaptainRiding = () => {

    const [finishRidePanel, setfinishRidePanel] = useState()
    const finishRidePanelRef = useRef(false)

    useGSAP(()=>{
        if(finishRidePanel){
          gsap.to(finishRidePanelRef.current, {
            transform : 'translateY(0)'
          })
        }
        else{
          gsap.to(finishRidePanelRef.current, {
            transform : 'translateY(100%)'
          })
        }
      }, [finishRidePanel])


  return (
    <div className='h-screen relative'>
          
    <div className='fixed p-4 top-0  w-screen flex items-center justify-between'>
      <img className='w-16' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
      <Link to ='/captain-home' className='h-10 w-10  bg-white flex item-center justify-center rounded-full'> 
   <i className=" text-lg font-medium ri-logout-box-r-line"></i>
  </Link>
     </div>
   <div className='h-4/5'>
   <img className = 'h-full w-full object-cover' src="https://images.squarespace-cdn.com/content/v1/54ff63f0e4b0bafce6932642/1613584928617-VSRY2IR8T60HPREGGI9M/Two+Maps+-+Google+Maps+vs+Uber%27s+Version+of+Google+Maps.png" alt="" />
    </div>
   <div className='h-1/5 p-6 flex items-center relative justify-between bg-yellow-400 pt-10'
    onClick={()=>{
        setfinishRidePanel(true)
    }}
   >
   <h5 className='p-1 text-center w-[95%] absolute top-0' onClick={() => {
                
            }}>
           <i className="text-3xl text-gray-800 ri-arrow-up-wide-line"></i>
      </h5>
        <h4 className='text-xl font-semibold'>4 Km away </h4>
         <button  className=' bg-green-600  text-white font-semibold p-3 px-10 rounded-lg'>Complete Ride</button>
   </div>
   <div ref={finishRidePanelRef} className='fixed w-full h-screen z-10 bottom-0 translate-y-full  bg-white px-3 py-10 pt-12'>
          <FinishRide setfinishRidePanel={setfinishRidePanel}/>
      </div>
  
</div>
  )
}

export default CaptainRiding
