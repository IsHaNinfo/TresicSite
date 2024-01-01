import React from 'react'
import { Footer } from 'flowbite-react';
import {  BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs'
import Logo from "../assets/Images/Logo.jpeg";
import { FaWhatsapp, FaEnvelope } from 'react-icons/fa';
const MyFooter = () => {
  return (
    <Footer container>
      <div className="w-full" id='footer' >
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div  className='space-y-4 mb-8'>
          <a href='' className='text-2x1 font-semibold flex items-center space-x-3'><img src={Logo} alt=''  className='w-12 inline-block items-center'/><span className='text-[#263238]'> TRESIC</span></a>
          
          <div className=" flex space-x-10 sm:mt-0 sm:justify-center ">
            <Footer.Icon href=" https://www.facebook.com/tresictech?mibextid=2JQ9oc" icon={BsFacebook} className='text-brandPrimary' />
            <Footer.Icon href="#" icon={BsInstagram}className='text-brandPrimary' />
            <Footer.Icon href="#" icon={BsTwitter} className='text-brandPrimary'/>
            <Footer.Icon href="#" icon={BsGithub} className='text-brandPrimary'/>
         
          </div>
          </div>
          
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            
            <div>
              <Footer.Title title="Contact  us" />
              <Footer.LinkGroup col className="justify-end">
        <div className="flex items-center space-x-2">
          <FaWhatsapp size={20} /> <Footer.Link href="tel:+0779615553">077 961 5553</Footer.Link>
        </div>
        <div className="flex items-center space-x-2">
          <FaEnvelope size={20} /> <Footer.Link href="mailto:info.tresic@gmail.com">info.tresic@gmail.com</Footer.Link>
        </div>
      </Footer.LinkGroup>
            </div>
            
          </div>
         
        </div>
        <Footer.Divider />
        <div className=" sm:flex sm:items-center sm:justify-between">
        <Footer.Copyright href="#" by="Tresic™" year={2024} />
        <div className='text-neutralGrey'>
            <p className='mb-1'> Copyright @2024 Tresic Ltd</p>
            <p> All Rights Resverd</p>
          </div>
        </div>
      </div>
    </Footer>
  )
}

export default MyFooter