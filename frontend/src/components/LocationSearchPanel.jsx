import React from 'react';

function LocationSearchPanel(props) {
    const locations = [
        "132, Motilal Nehru National Institute of Technology, Allahabad",
        "122, Motilal Nehru National Institute of Technology, Allahabad",
        "102, Motilal Nehru National Institute of Technology, Allahabad",
        "162, Motilal Nehru National Institute of Technology, Allahabad",
    ];

    return (
        <div>
            {locations.map((len, index) => (
                <div 
                 onClick={()=>{
                    props.setVehiclePanel(true)
                    props.setpanelOpen(false)
                 }}           
                   key={index} 
                    className='flex gap-4 border-2 p-3 border-gray-50 active:border-black rounded-xl items-center my-2 justify-start'
                >
                    <h2 className='bg-[#eee] h-10 w-16 flex items-center justify-center rounded-full'>
                        <i className="ri-map-pin-fill"></i>
                    </h2>
                    <h4 className='font-medium'>{len}</h4>
                </div>
            ))}
        </div>
    );
}

export default LocationSearchPanel;


