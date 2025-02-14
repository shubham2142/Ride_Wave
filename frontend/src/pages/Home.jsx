 
 import React, { useRef } from 'react'
 import { useState } from 'react'
 import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LocationSearchPanel'
import VehiclePanel from '../components/VehiclePanel'
import ConfirmRide from '../components/ConfirmRide'
import LookingForDriver from '../components/LookingForDriver'
import WaitingForDriver from '../components/WaitingForDriver'

 const Home = () => {
  const [pickup, setpickup] = useState('')
  const [destination, setdestination] = useState('')
  const [panelOpen, setpanelOpen] = useState(false)
  const [vehiclePanel, setVehiclePanel]=useState(false)
  const [confirmRidePanel, setconfirmRidePanel] =useState(false)
  const [vehicleFound, setvehicleFound] =useState(false)
  const [waitingForDriver, setwaitingForDriver] =useState(false)



  const vehiclePanelRef=useRef(null)
  const confirmRidePanelRef=useRef(null)
  const panelRef = useRef(null)
  const panelCloseRef=useRef(null)
  const vehicleFoundRef=useRef(null)
  const WaitingForDriverRef=useRef(null)



  const submitHandler=(e)=>{
      e.preventDefault()
  }

  useGSAP(()=>{
      if(panelOpen){
        gsap.to(panelRef.current,{
          height : '70%',
          padding : 24,
          opacity : 1

        })
        gsap.to(panelCloseRef.current, {
          opacity : 1
        })
      }
      else{
        gsap.to(panelRef.current,{
          height : '0%',
          padding : 0,
          opacity : 0

        })
        gsap.to(panelCloseRef.current, {
          opacity : 0
        })
      }
  }, [panelOpen])

  useGSAP(()=>{
    if(vehiclePanel){
      gsap.to(vehiclePanelRef.current, {
        transform : 'translateY(0)'
      })
    }
    else{
      gsap.to(vehiclePanelRef.current, {
        transform : 'translateY(100%)'
      })
    }
  }, [vehiclePanel])


  useGSAP(()=>{
    if(confirmRidePanel){
      gsap.to(confirmRidePanelRef.current, {
        transform : 'translateY(0)'
      })
    }
    else{
      gsap.to(confirmRidePanelRef.current, {
        transform : 'translateY(100%)'
      })
    }
  }, [confirmRidePanel])

  useGSAP(()=>{
    if(vehicleFound){
      gsap.to(vehicleFoundRef.current, {
        transform : 'translateY(0)'
      })
    }
    else{
      gsap.to(vehicleFoundRef.current, {
        transform : 'translateY(100%)'
      })
    }
  }, [vehicleFound])

  useGSAP(()=>{
    if(waitingForDriver){
      gsap.to(WaitingForDriverRef.current, {
        transform : 'translateY(0)'
      })
    }
    else{
      gsap.to(WaitingForDriverRef.current, {
        transform : 'translateY(100%)'
      })
    }
  }, [waitingForDriver])

   return (
     <div className='h-screen relative overflow-hidden'>
      <img className='w-16 absolute left-5 top-5' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
      
      <div className='h-screen w-screen'>
        <img className = 'h-full w-full object-cover' src="https://images.squarespace-cdn.com/content/v1/54ff63f0e4b0bafce6932642/1613584928617-VSRY2IR8T60HPREGGI9M/Two+Maps+-+Google+Maps+vs+Uber%27s+Version+of+Google+Maps.png" alt="" />
      </div>
       <div className='flex flex-col justify-end h-screen absolute top-0 w-full p-5 '>
           <div className='h-[30%] bg-white p-6  relative'>
            <h5 ref = {panelCloseRef} onClick={()=>{
              setpanelOpen(false)
            }}  className='absolute opacity-0 right-6 top-6  text-2xl'>
            <i className="ri-arrow-down-wide-line"></i>
            </h5>
           <h4 className='text-2xl font-semibold'>Find a trip</h4>
        <form onSubmit={(e)=>{
          submitHandler(e)
        }}>
          <div className="line absolute h-16 w-1 top-[45%] left-10 bg-gray-900 rounded-full"></div>
          <input 
            onClick={()=>{
              setpanelOpen(true)
            }}
            value={pickup}
            onChange={(e)=>{
              setpickup(e.target.value)
            }}
           className='bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-5' 
             type="text" placeholder='Enter a pick-up location'
              />
          <input 
          onClick={()=>{
            setpanelOpen(true)
          }}
          value={destination}
          onChange={(e)=>{
            setdestination(e.target.value)
          }}
            className='bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-3' 
             type="text" placeholder='Enter your destination'
           />
        </form>
           </div>
           <div ref = {panelRef} className='  bg-white  h-0 '>
               <LocationSearchPanel  setpanelOpen={setpanelOpen} setVehiclePanel={setVehiclePanel}/>
           </div>
       </div>
       <div ref = {vehiclePanelRef} className='fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-10 pt-12'>
            <VehiclePanel setconfirmRidePanel={setconfirmRidePanel} setVehiclePanel={setVehiclePanel} />
       </div>
       <div ref = {confirmRidePanelRef} className='fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-6 pt-12'>
            <ConfirmRide  setconfirmRidePanel={setconfirmRidePanel} setvehicleFound={setvehicleFound} />
       </div>
       <div ref={vehicleFoundRef} className='fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-6 pt-12'>
            <LookingForDriver setvehicleFound={setvehicleFound} />
       </div>
       <div ref={WaitingForDriverRef} className='fixed w-full z-10 bottom-0  bg-white px-3 py-6 pt-12'>
            <WaitingForDriver waitingForDriver={waitingForDriver}/>
       </div>
     </div>
   )
 }
 
 export default Home
 