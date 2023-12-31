import React from 'react'
import AboutImg from "../assets/Images/About.png"
const About = () => {
  return (
    <div>
    <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-8  bg-neutralSilver' id='About'>
        <div className='md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12 '>
            <div >
                <img src={AboutImg} alt='' className='w-[250px] h-[250px]'/>
            </div>
            <div className='md:w-3/5 mx-auto'>
                <h2 className='text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5'>The unseen of spending three years at Pixelgrade</h2>
                <p className='md:w-3/4 text-sm text-neturalGrey mb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Temporibus natus similique vel at, nostrum repudiandae porro.
                     Quo, sit eos molestias eius ipsam, pariatur dignissimos 
                    natus blanditiis cupiditate explicabo impedit iusto?</p>
                    <button className='btn-primary'>Learn More</button>
            </div>
        </div>
    </div>
</div>
  )
}

export default About