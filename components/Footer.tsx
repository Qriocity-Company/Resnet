import React from 'react'
import logo from '../assets/Resnet Logo White.png'
import locationIcon from '../assets/location-icon.png'
import fb from '../assets/fb.png'
import linkedin from '../assets/linkedin.png'
import insta from '../assets/insta.png'

import Image from 'next/image'


export const Footer = () => {
  return (
    <footer className='py-6 pb-24 border-t-2 border-[#353547] text-[#727289] relative overflow-hidden'>

      {/* grid */}
      <div className='flex gap-12 p-8'>

        {/* company description */}
        <div className='w-[30%] flex flex-col gap-4'>
          <Image src={logo} width={100} alt='' ></Image>
          <p>
          Partner with us for strategic guidance on integrating AI seamlessly into your operations. Uncover new enhance decision-making with Resnet Solutions by your side.
          </p>
        </div>

        {/* address and contact */}
        <div className='w-[30%] flex flex-col gap-4'>
          <div className='flex gap-2 items-center'>
            <Image src={locationIcon}  alt='Location' className='h-[25px]'></Image>
            <p>
            123, Gopal Street,
            Mylapore, Chennai - 600004,
            Tamil Nadu, India.
            </p>
          </div>
          <div className='flex gap-2 items-center'>
            <Image src={locationIcon} alt='Location' className='h-[25px]'></Image>
            <p>
              (+91)-234-234-4321
            </p>
          </div>
        </div>


        {/* Links div */}
        <div className='w-[40%] flex flex-col gap-6'>
          <div className='flex justify-between gap-2'>
            <a href="">Home</a>
            <a href="">Services</a>
            <a href="">About Us</a>
            <a href="">Contact Us</a>
            <a href="">Case Studies</a>
          </div>
          <div className='flex gap-6'>
            <Image src={linkedin} alt='Linkedin'></Image>
            <Image src={insta} alt='Insta'></Image>
            <Image src={fb} alt='Facebook'></Image>
          </div>
        </div>

      </div>

      <div className='text-center'>
        &copy; - Resnet Pvt Ltd All Right Reserved
      </div>
      <div className="absolute  w-[375px] h-64 bg-red-600 rounded-full blur-[160px]  left-[30%] -bottom-[60%]"></div>
      <div className="absolute  w-[275px] h-64 bg-sky-600 rounded-full blur-[160px]  left-[60%] -bottom-[40%]"></div>
    </footer>
  )
}
