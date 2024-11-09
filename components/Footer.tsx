import React from 'react'
import logo from '../assets/Resnet Logo White.png'
import locationIcon from '../assets/location-icon.svg'
import callIcon from '../assets/call-icon.svg'
import fb from '../assets/fb.png'
import linkedin from '../assets/linkedin.png'
import insta from '../assets/insta.png'

import Image from 'next/image'
import '../styles/Footer.css'

export const Footer = () => {
  return (
    <footer className=' pb-4 border-t-2 border-[#353547] text-[#727289] relative overflow-hidden w-[350px] md:w-[] lg:w-[1440px]'>

      {/* grid */}
      <div className='md:block lg:flex gap-12 p-2'>

        <div className='block md:flex w-full md:gap-6 lg:gap-4'>
          {/* company description */}
          <div className='w-[100%] md:w-[50%] flex flex-col gap-2 '>
            <Image src={logo} width={100} alt='' ></Image>
            <p className='text-justify md:text-left'>
            Partner with us for strategic guidance on integrating our software solutions into your operations. Uncover new enhance decision-making with Resnet Solutions by your side.
            </p>
          </div>

          
        {/* Links div */}
        <div className='  w-[100%] sm:mt-10 md:mt-12 lg:mt-4 lg:w-[40%] hidden md:flex flex-col gap-4'>
          <div className=' w-full flex flex-col justify-between gap-2 footer-links sm:text-xs md:text-base z-10'>
            <a href="/">Home</a>
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#successStories">Success Stories</a>
          </div>
          <div className='flex gap-6 z-10'>
            <a href="https://www.linkedin.com/company/resnet-solutions-private-limited/" target='_blank' className='cursor-pointer'>
              <Image src={linkedin} alt='Linkedin'></Image>
            </a>
            <a href="https://www.instagram.com/resnetsolutions/" target='_blank' className='cursor-pointer'>
              <Image src={insta} alt='Insta'></Image>
            </a>
            
          </div>
        </div>

      </div>

      <div className='text-center mt-2 md:mt-0'>
        &copy; - 2023 Resnet Pvt Ltd | All Right Reserved
      </div>
      <div className="absolute  w-[375px] h-64 bg-red-600 rounded-full blur-[160px]  left-[30%] -bottom-[45%]"></div>
      <div className="absolute  w-[275px] h-64 bg-sky-600 rounded-full blur-[160px]  left-[60%] -bottom-[25%]"></div>
    </footer>
  )
}
