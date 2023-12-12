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
    <footer className=' pb-8 border-t-2 border-[#353547] text-[#727289] relative overflow-hidden w-[350px] md:w-[] lg:w-[1440px]'>

      {/* grid */}
      <div className='md:block lg:flex gap-12 p-2 md:p-8'>

        <div className='block md:flex w-full md:gap-6 lg:gap-4'>
          {/* company description */}
          <div className='w-[100%] md:w-[50%] flex flex-col gap-4'>
            <Image src={logo} width={100} alt='' ></Image>
            <p>
            Partner with us for strategic guidance on integrating AI seamlessly into your operations. Uncover new enhance decision-making with Resnet Solutions by your side.
            </p>
          </div>

          {/* address and contact */}
          <div className='w-[100%] md:w-[50%] flex flex-col gap-4 mt-8 md:mt-0'>
            <div className='flex gap-6 items-center'>
              <Image src={locationIcon} height={22} alt='Location' className='h-[22px]'></Image>
              <p>
              123, Gopal Street,
              Mylapore, Chennai - 600004,
              Tamil Nadu, India.
              </p>
            </div>
            <div className='flex gap-6 items-center'>
              <Image src={callIcon} alt='Location' height={22} className='h-[22px]'></Image>
              <p>
                (+91)-234-234-4321
              </p>
            </div>
          </div>
        </div>
        {/* Links div */}
        <div className='  w-[100%] sm:mt-10 md:mt-12 lg:mt-0 lg:w-[40%] hidden md:flex flex-col gap-6'>
          <div className=' w-full flex justify-between gap-2 footer-links sm:text-xs md:text-base'>
            <a href="">Home</a>
            <a href="">Services</a>  
            <a href="">Case Studies</a>
            <a href="">Testimonials</a>
          </div>
          <div className='flex gap-6'>
            <Image src={linkedin} alt='Linkedin'></Image>
            <Image src={insta} alt='Insta'></Image>
            <Image src={fb} alt='Facebook'></Image>
          </div>
        </div>

      </div>

      <div className='text-center '>
        &copy; - 2023 Resnet Pvt Ltd | All Right Reserved
      </div>
      <div className="absolute  w-[375px] h-64 bg-red-600 rounded-full blur-[160px]  left-[30%] -bottom-[45%]"></div>
      <div className="absolute  w-[275px] h-64 bg-sky-600 rounded-full blur-[160px]  left-[60%] -bottom-[25%]"></div>
    </footer>
  )
}
