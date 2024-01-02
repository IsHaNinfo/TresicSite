import React from 'react'
import { Footer } from 'flowbite-react';
import {  BsFacebook, BsGithub, BsInstagram, BsTwitter,BsLinkedin } from 'react-icons/bs'
import Logo from "../assets/Images/Logo.png";
import { FaWhatsapp, FaEnvelope } from 'react-icons/fa';
const MyFooter = () => {
  return (
    <Footer container>
      <div className="w-full  shadow-lg bg-neutralSilver " id='footer' >
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1 rounded-md ">

        <div className=' p-16 rounded-md   items-center justify-center w-[700px] h-[200px] '>
                <div className='text-center'>
          <a href='' className='text-2x1 font-semibold flex items-center justify-center space-x-3'>
            <img src={Logo} alt='' className='w-12 inline-block items-center' />
            <span className='text-brandPrimary text-2xl'> TRESIC TECHNOLOGY</span>
          </a>
          <p className="text-brandPrimary font-semibold">"Imagination come True"</p>
        </div>
                    <div className="flex space-x-16 mt-4 sm:mt-8 sm:justify-center">
                    <a href="#" className='text-brandPrimary text-3xl'>
        <BsFacebook />
      </a>
                <a href="#" className='text-brandPrimary text-3xl'>
        <BsInstagram />
      </a>
      <a href="#" className='text-brandPrimary text-3xl'>
        <BsLinkedin />
      </a>

        </div>

          </div>

          
              <div className=" p-10 mt-6 rounded-md flex items-center justify-center w-[700px] h-[200px]">
                <div>
                  <Footer.Title title="Contact us" className='text-2xl text-brandPrimary'/>
                  <Footer.LinkGroup col className="justify-end">
                    <div className="flex items-center space-x-2 text-brandPrimary">
                      <FaWhatsapp size={25} /> <Footer.Link href="tel:+0779615553 ">077 961 5553</Footer.Link>
                    </div>
                    <div className="flex items-center space-x-2 text-brandPrimary">
                      <FaEnvelope size={25} /> <Footer.Link href="mailto:info.tresic@gmail.com">info.tresic@gmail.com</Footer.Link>
                    </div>
                  </Footer.LinkGroup>
                </div>
              </div>

                
          </div> 
          <Footer.Divider/>
          <div className=" sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="#" by="Tresic™" year={2024} /> 
          <p className='text-neutralGrey'> All Rights Resverd</p>
          </div>
        </div>
      
          
      
    </Footer>
  )
}

export default MyFooter