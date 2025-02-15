import React, { useRef, useState } from 'react'
import {Link} from 'react-router-dom'
import CaptainDetails from '../components/CaptainDetails'
import { useGSAP } from '@gsap/react';
import gsap from'gsap'
import RidePopUp from '../components/RidePopUp';
import ConfirmRidePopUp from '../components/ConfirmRidePopUp';


const CaptainHome = () => {

      const [ridePopupPanel, setridePopupPanel] = useState(true);
      const [ConfirmridePopupPanel, setConfirmridePopupPanel] = useState(false);

      const ridePopupPanelRef=useRef(null)
      const ConfirmridePopupPanelRef=useRef(null)

      

    useGSAP(()=>{
      if(ridePopupPanel){
        gsap.to(ridePopupPanelRef.current, {
          transform : 'translateY(0)'
        })
      }
      else{
        gsap.to(ridePopupPanelRef.current, {
          transform : 'translateY(100%)'
        })
      }
    }, [ridePopupPanel])

    useGSAP(()=>{
      if(ConfirmridePopupPanel){
        gsap.to(ConfirmridePopupPanelRef.current, {
          transform : 'translateY(0)'
        })
      }
      else{
        gsap.to(ConfirmridePopupPanelRef.current, {
          transform : 'translateY(100%)'
        })
      }
    }, [ConfirmridePopupPanel])

  return (
    <div className='h-screen'>
       <div className='fixed p-4 top-0  w-screen flex items-center justify-between'>
         <img className='w-16' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
         <Link to ='/home' className='h-10 w-10  bg-white flex item-center justify-center rounded-full'> 
      <i className=" text-lg font-medium ri-logout-box-r-line"></i>
     </Link>
        </div>
      <div className='h-3/5'>
      <img className = 'h-full w-full object-cover' src="https://images.squarespace-cdn.com/content/v1/54ff63f0e4b0bafce6932642/1613584928617-VSRY2IR8T60HPREGGI9M/Two+Maps+-+Google+Maps+vs+Uber%27s+Version+of+Google+Maps.png" alt="" />
       </div>
      <div className='h-2/5 p-6'>
         <CaptainDetails />
      </div>
      <div ref={ridePopupPanelRef} className='fixed w-full z-10 bottom-0 translate-y-full  bg-white px-3 py-10 pt-12'>
          <RidePopUp setridePopupPanel={setridePopupPanel} setConfirmridePopupPanel={setConfirmridePopupPanel} />
      </div>
      <div ref={ConfirmridePopupPanelRef} className='fixed w-full h-screen z-10 bottom-0 translate-y-full  bg-white px-3 py-10 pt-12'>
          <ConfirmRidePopUp setConfirmridePopupPanel={setConfirmridePopupPanel} setridePopupPanel={setridePopupPanel}/>
      </div>
  </div>
  )
}

export default CaptainHome
