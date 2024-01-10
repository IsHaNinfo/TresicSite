import React from 'react'
import AboutImg from "../assets/Images/About.png"
const AboutUs = () => {
  return (
    <div>
    <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-8  ' >
        <div className='md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12 '>
            <div >
                <img src={AboutImg} alt='' className='w-[250px] h-[250px]'/>
            </div>
            <div className='md:w-3/5 mx-auto'>
                <h2 className='text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5'>About us</h2>
                <p className='md:w-3/4 text-sm text-neturalGrey mb-8'>
                Welcome to Tresic Technologies, a pioneering force in the realm of Information Technology. At Tresic, we believe in harnessing the power of innovation to transform businesses and elevate experiences. With a steadfast commitment to excellence, we deliver cutting-edge solutions that bridge the gap between technology and business objectives.

            <br/><br/>Our journey began with a passion for solving complex challenges through technological advancements. Over the years, Tresic Technologies has evolved into a hub of creativity, expertise, and unwavering dedication to our clients. We pride ourselves on fostering a culture of collaboration, where our team of experts collaborates seamlessly to bring forth solutions that propel our clients towards unparalleled success.</p>
            </div>
        </div>
    </div>
</div>
  )
}

export default AboutUs