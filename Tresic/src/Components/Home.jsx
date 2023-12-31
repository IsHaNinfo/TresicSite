import React from 'react'
import { Carousel } from 'flowbite-react';
import banner1 from "../assets/Images/banner1.png"
const Home = () => {
  return (
   <div className=' bg-neutralSilver ' id="home">
    <div className='px-4 lg:px-14 max-w-screen-2x1 mx-auto min-h-screen h-screen'>
    <Carousel className='w-full mx-auto' >
        <div className=" my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between
        gap-12">
          <div className='w-[355px] '>
            <img src={banner1} alt=''/>
          </div>
          <div  className='md:w-1/2'>
                    <h1 className='text-5xl font-semibold mb-4 text-neutralDGrey md:w-full leading-snug'>
                    Empowering Tomorrow,Today: <br />
                <span className='text-brandPrimary leading-snug'> Your IT Solutions Partner</span>
            </h1>

                <p className='text-neutralGrey text-base mb-8'> Where to grow your buisness as Enterprenuer</p>

                <button className='btn-primary'>Explore more</button>

          </div>
        </div>
        <div className=" my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between
         gap-15">
          <div className='w-[395px]'>
            <img src={banner1} alt=''/>
          </div>
          <div  className='md:w-1/2'>
          <h1 className='text-5xl font-semibold mb-4 text-neutralDGrey md:w-full leading-snug'>
          Innovate, Integrate, <br />
                <span className='text-brandPrimary leading-snug'>Elevate: Your IT Journey Begins Here.</span>
            </h1>
                <p className='text-neutralGrey text-base mb-8'> Where to grow your buisness as Enterprenuer</p>

                <button className='btn-primary'>Explore more</button>

          </div>
        </div>
        <div className=" my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between
         gap-15">
          <div className='w-[395px]'>
            <img src={banner1} alt=''/>
          </div>
          <div  className='md:w-1/2'>
          <h1 className='text-5xl font-semibold mb-4 text-neutralDGrey md:w-full leading-snug'>
          Code the Future: Unleashing Innovation,<br />
                <span className='text-brandPrimary leading-snug'> One Line at a Time.</span>
            </h1>
                <p className='text-neutralGrey text-base mb-8'> Where to grow your buisness as Enterprenuer</p>

                <button className='btn-primary' >
                 Explore more
                </button>

          </div>
        </div>
       
      </Carousel>
    </div>

   </div>
  )
}

export default Home