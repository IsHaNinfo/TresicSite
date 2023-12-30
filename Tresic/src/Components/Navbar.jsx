import React, { useEffect, useState } from 'react'
import Logo from "../assets/Images/Logo.jpeg";
import { Link } from 'react-scroll';
const Navbar = () => {
    const [isMenuOpen,setIsMenuOpen] = useState(false);
    const [isSticky,setIsSticky] = useState(false);


    const toggleMenu = ()=>{
        setIsMenuOpen(!isMenuOpen);
    }
    useEffect(() => {
        const handleScroll = () =>{
            if(Window.scrollY>100){
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
        {link:"Projects",path:"Projects"},

     ]
  return (
        <header className='w-full bg-white md:bg-transparent fixed top-0 left-0 right-0'>
            <nav>
                <div className='w-[50px] h-[50px]'>
                    <a href='' className='text-2x1 font-semibold flex items-center space-x-3'><img src={Logo} alt=''  className='w-10 inline-block items-center'/><span className='text-[#263238]'> Tresic</span></a>
                    <ul className='md:flex space-x-12 hidden'>
                        {navItems.map((item, index) => (
                            <Link key={index} to={item.path} spy={true} smooth={true} offset={-100} className='block text-base text-gray900 hover:text-brandPrimary first:font-medium'>{item.link}</Link>
                        ))}
                    </ul>
                    {/* menu button for mobile */}
                        <div className='md:hidden'></div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar