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
    <div className=" flex flex-row justify-between  w-full items-center py-4 px-4  sm:px-16 md:px-[48px] fixed top-0 max-w-[1440px]  md:text-[12px] lg:text-[16px] z-20  backdrop-blur-[0.5rem]">
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
          <div className="inline-flex relative justify-center items-center gap-[19px] px-4 py-[10px] bg-[#08081B] border-2 border-red-500 z-5">
    
            Contact Us
            
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
          <a
            href="/contact"
            onClick={toggleMenu}
          >
            Contact Us
          </a>
        </div>
      )}
    </div>
  )
}
