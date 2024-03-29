import React from 'react'
import pana from "../assets/Images/pana.png";
const Visson = () => {
  return (
    <div className=' bg-neutralSilver' id='visson'>
    <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-8'>
        <div className='md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12 '>
        <div className='md:w-3/5 mx-auto'>
                <h2 className='text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5'>Vision</h2>
                <p className='md:w-3/4 text-sm text-neturalGrey mb-8'>To be the global vanguard of technological evolution, recognized for innovation, integrity, and commitment to excellence.</p>
                    
            </div>
            <div >
                <img src={pana} alt='' className='w-[250px] h-[250px]'/>
            </div>
           
        </div>
    </div>
</div>
  )
}

export default Visson