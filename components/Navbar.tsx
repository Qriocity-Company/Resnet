'use client'

import React,{useState} from 'react'
import Image from 'next/image'
import { HiMenu, HiX } from "react-icons/hi";
import { FaArrowRight } from "react-icons/fa";
import logo from '../assets/Resnet Logo White.png'
import buttonPattern from '../assets/button-pattern.png'
export const Navbar = () => {

  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  
  return (
    <div className=" flex flex-row justify-between  w-full items-center   sm:px-16 md:px-[48px] fixed top-0 max-w-[1440px]  md:text-[12px] lg:text-[16px] z-20  backdrop-blur-[0.5rem]">
      <a href="/">
        <Image src={logo} alt='Resnet Solutions' className="" width={100} />
      </a>
      <div className="hidden md:flex flex-row gap-12  ml-auto text-white font-Sg justify-between items-center">
        <a href="/" >
          Home
        </a>
        <a href="/about" >
          About Us
        </a>
        {/* <a href="/services" className={isRouteActive("/services")}>
          Services
        </a> */}
        <a href="/caseStudy/documentation" >
          Case Studies
        </a>
        <a
          href="/contact"
          className='relative'
        >
          <div className=' relative  group' >
      <Image src={buttonPattern} alt='Resnet Solutions' className='group-hover:scale-[.8] ease-in-out duration-700 h-[60px]' width={250} />
  <button className=" absolute top-1/2 left-1/2  text-red-500  px-4 py-[8px] bg-[#08081B] border-2 border-red-500 group-hover:bg-red-500 group-hover:text-white ease-in-out duration-500" style={{transform : "translate(-50% , -50%)"}} >Contact Us</button>
</div>
          {/* <Image src={buttonPattern} alt='' height={80} width={160} className='absolute  h-[80px] w-[160px] top-0 z-1'></Image> */}
        </a>
      </div>
      <div className="md:hidden flex items-center ml-auto">
        {showMenu ? (
          <HiX
            className="text-white text-2xl cursor-pointer"
            onClick={toggleMenu}
          />
        ) : (
          <HiMenu
            className="text-white text-2xl cursor-pointer"
            onClick={toggleMenu}
          />
        )}
      </div>
      {showMenu && (
        <div className=" font-Poppins md:hidden fixed top-0 left-0 w-[85vw] h-[100vh]  backdrop-blur-[0.8rem] flex flex-col gap-10 py-10 items-end pr-12  bg-gradient-to-l from-[#690a13] to-[#d11325] text-black z-[50] font-semibold text-[24px] ">
          <HiX className=" text-2xl cursor-pointer " onClick={toggleMenu} />
          <a href="/" onClick={toggleMenu}>
            Home
          </a>
          <a
            href="/about"
            
            onClick={toggleMenu}
          >
            About Us
          </a>
          <a
            href="/caseStudy/documentation"
           
            onClick={toggleMenu}
          >
            Case Studies
          </a>
          {/* <a
            href="/services"
            className={isRouteActive("/services")}
            onClick={toggleMenu}
          >
            Our Services
          </a> */}
          
          <div className='mt-5 relative w-fit group' >
      <Image src={buttonPattern} alt='Resnet Solutions' className='group-hover:scale-[.8] ease-in-out duration-700' width={250} />
  <a  href="/contact"
            onClick={toggleMenu} className=" absolute top-1/2 left-1/2  text-red-500  px-4 py-[10px] bg-[#08081B] border-2 border-red-500 group-hover:bg-red-500 group-hover:text-white ease-in-out duration-500" style={{transform : "translate(-50% , -50%)"}} >Contact Us</a>
</div>
        </div>
      )}
    </div>
  )
}
