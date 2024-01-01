import React, { useEffect, useState } from 'react'
import Logo from "../assets/Images/Logo.png";
import { FaXmark,FaBars } from "react-icons/fa6";

import { Link } from 'react-scroll';
const Navbar = () => {
    const [isMenuOpen,setIsMenuOpen] = useState(false);
    const [isSticky,setIsSticky] = useState(false);


    const toggleMenu = ()=>{
        setIsMenuOpen(!isMenuOpen);
    }
    useEffect(() => {
        const handleScroll = () =>{
            if(window.scrollY > 100){
                setIsSticky(true);
            }else{
                setIsSticky(false);
            }
        }
        window.addEventListener('scroll', handleScroll);

        return ()=>{
            window.addEventListener('scroll', handleScroll);
        }
    })
    //navitems
     const navItems = [
        {link:"Home",path:"home"},
        {link:"Service",path:"Service"},
        {link:"About",path:"About"},
        {link:"Portfolio",path:"portfolio"},
        {link:"Visson",path:"visson"},
       
       
     ]

     const handleButtonClick = () => {
        // Find the element with the 'Service' ID
        const footerElement = document.getElementById('footer');
    
        // Check if the element exists
        if (footerElement) {
          // Scroll to the element
          footerElement.scrollIntoView({ behavior: 'smooth' });
        }
      };
  return (
        <header className='w-full bg-white md:bg-transparent fixed top-0 left-0 right-0'>
            <nav className={`py-4 lg:px-14 px-4 ${isSticky ? "sticky top-0 left-0 right-0 border bg-white duration-300" : ""}`}>
                <div className='flex justify-between items-center text-base gap-8'>
                    <a href='' className='text-2x1 font-semibold flex items-center space-x-3'><img src={Logo} alt=''  className='w-12 inline-block items-center'/><span className='text-[#263238]'> TRESIC</span></a>
                    <ul className='md:flex space-x-12 hidden cursor-pointer'>
                        {navItems.map((item, index) => (
                            <Link key={index} to={item.path} spy={true} smooth={true} offset={-100} className='block text-base text-gray900 hover:text-brandPrimary first:font-medium'>{item.link}</Link>
                        ))}
                    </ul>
                    {/* contact us button */}
                    <div className='space-x-12 hidden lg:flex items-center'>
                    <button className='bg-brandPrimary text-white py-3 px-5 transition-all duration-300 rounded hover:bg-naturalDGrey' style={{ whiteSpace: 'nowrap' }} onClick={handleButtonClick}>
                        ContactUs</button>
                    </div>
                    {/* menu button for mobile */}
                        <div className='md:hidden'>
                                <button 
                                onClick={toggleMenu}
                                className='text-neutralDGrey focus:outline-none focus:text-gray-500'>
                                    {
                                        isMenuOpen ?(<FaXmark className='h-6 w-6 '/>):(<FaBars className=' h-6 w-6 text-neutralDGrey'/>)
                                    }
                                </button>
                        </div>
                </div>
                <div className='flex justify-between items-center text-base gap-8'></div>
                {/* navItens for mobile devices */}
                <div className={`space-y-4 px-4 mt-16 py-7 bg-brandPrimary ${isMenuOpen ? "block fixed top-0 right-0 left-0" : " hidden"}`}>
                {navItems.map((item, index) => (
                            <Link key={index} to={item.path} spy={true} smooth={true} offset={-100} className='block text-base text-white hover:text-brandPrimary first:font-medium'>{item.link}</Link>
                        ))}
                </div>
            </nav>
        </header>
    )
}

export default Navbar